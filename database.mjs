import mysql from 'mysql'

export function koneksi(){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
}