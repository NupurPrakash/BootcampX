const { Pool } = require('pg');

const pool = new Pool({
  user : 'vagrant',
  password : '123',
  host : 'localhost',
  database: 'bootcampx'
});
pool.connect(() => {
  console.log('Connected');
});
pool.query(`
SELECT distinct teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = 'JUL02'
ORDER BY teachers.name;
`)
.then(res => {
  res.rows.forEach(element => {
    console.log(`${element.cohort}: ${element.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));