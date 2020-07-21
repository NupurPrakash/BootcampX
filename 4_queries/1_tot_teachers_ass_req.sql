SELECT count(assistance_requests.*) as total_assistances, teachers.name
FROM teachers JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
GROUP BY teachers.name
HAVING teachers.name = 'Waylon Boehm';