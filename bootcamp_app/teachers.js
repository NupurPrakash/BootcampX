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
const cohortName = [process.argv[2] || 'JUL02'];
const values = [`${cohortName}`]

const queryString =`
SELECT distinct teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1
ORDER BY teachers.name;
`;
pool.query(queryString, values)
.then(res => {
  res.rows.forEach(element => {
    console.log(`${element.cohort}: ${element.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));