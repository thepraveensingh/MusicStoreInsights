create database music_database;

use music_database;
select * from invoice;
select sum(total) as amount, billing_city 
from invoice
group by billing_city
order by amount desc;


SELECT a.first_name, a.last_name, a.customer_id, SUM(b.total) AS t
FROM customer AS a
JOIN invoice AS b ON a.customer_id = b.customer_id
GROUP BY a.customer_id, a.first_name,a.last_name
ORDER BY t DESC
LIMIT 1;


select * from genre;
-- query for returning emial ,name of all rock listnerrs, order by email
select distinct c.first_name, c.last_name, c.email , g.name
from customer as c
join invoice as i
ON c.customer_id = i.customer_id 
join invoice_line as il
ON i.invoice_id = il.invoice_id
join track as t
ON il.track_id = t.track_id
join genre as g
ON g.genre_id = t.genre_id
where g.name= "Rock"
order by email ;

-- artists who have written most rock music ..give top 5, names and total track count
 SELECT a.name, COUNT(t.track_id) AS track_count
FROM artist AS a
JOIN album AS al ON a.artist_id = al.artist_id
JOIN track AS t ON t.album_id = al.album_id
WHERE t.genre_id = (SELECT genre_id FROM genre WHERE name = 'Rock')
GROUP BY a.name
order by track_count desc
limit 5;

-- all track names having song length longer than avg song length, return name and milisec order by song length dec
select * from track;
select t.track_id, t.name , t.milliseconds 
from track as t
where t.milliseconds > (select avg(milliseconds) from track)
order by t.milliseconds desc;

-- advanced queries

-- 1) amount spend by each customer on artists, query to write customername ,artistname and total amount

select c.first_name,c.last_name, a.name, sum(il.unit_price*il.quantity) as spendtotal
from invoice as i
join customer as c
on c.customer_id = i.customer_id
join invoice_line as il
on i.invoice_id = il.invoice_id
join track as t
on t.track_id = il.track_id
join album as al
on al.album_id = t.album_id
join artist as a
on a.artist_id = al.artist_id
group by c.first_name, c.last_name,a.name;

-- most popular genre for each country, (ppular means highest number of purchase ),return coyntru_name with top genre

WITH RankedGenres AS (
    SELECT 
        i.billing_country AS country,
        g.name AS genre,
        SUM(il.quantity) AS total_quantity,
        ROW_NUMBER() OVER (PARTITION BY i.billing_country ORDER BY SUM(il.quantity) DESC) AS ran
    FROM 
        invoice AS i 
    JOIN 
        invoice_line AS il ON il.invoice_id = i.invoice_id 
    JOIN 
        track AS t ON t.track_id = il.track_id 
    JOIN 
        genre AS g ON t.genre_id = g.genre_id 
    GROUP BY 
        i.billing_country, g.name
)
SELECT 
    country, genre 
FROM 
    RankedGenres 
WHERE 
    ran = 1;
    
-- query to determine customer who spent most in the country
-- return customer name, country, amount
-- if multiple customers with same amount give all the names
WITH countrycustomer AS (
    SELECT c.first_name, i.billing_country, SUM(i.total) AS total_amount
    FROM customer AS c
    JOIN invoice AS i ON c.customer_id = i.customer_id
    GROUP BY c.first_name, i.billing_country
),
MaxSpent AS (
    SELECT billing_country, MAX(total_amount) AS max_amount
    FROM countrycustomer
    GROUP BY billing_country
)
SELECT ts.first_name, ts.billing_country, ts.total_amount
FROM countrycustomer AS ts
JOIN MaxSpent AS ms 
ON ts.billing_country = ms.billing_country 
WHERE ts.total_amount = ms.max_amount
ORDER BY ts.total_amount desc;