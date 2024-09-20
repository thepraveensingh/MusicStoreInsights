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

