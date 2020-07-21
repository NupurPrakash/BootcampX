SELECT COUNT(assistance_requests.*) as total_assistances, students.name
FROM assistance_requests JOIN students ON 
assistance_requests.student_id = students.id
GROUP BY students.name
HAVING students.name = 'Elliot Dickinson';