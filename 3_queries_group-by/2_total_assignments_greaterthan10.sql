SELECT day, count(id) as total_assignments
FROM ASSIGNMENTS
GROUP BY day
HAVING count(id)>= 10
ORDER BY day;