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

select * from customer;
