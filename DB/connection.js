import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
    user:'root',
    password:'',
    database:'mysql and express',
    host:'localhost'
});


export default connection

