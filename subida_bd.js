var mysql = require('mysql');

var con = mysql.createConnection({
    host : 'mysql1008.mochahost.com',
    user : 'digital_admin',
    password : 'ZzVACZZKx}mC',
    database : 'digital_digitaln_sistema',
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM morosos1";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
$query_pago = 'SELECT num_cliente, tel1, tel2, precio_mensual FROM clientes WHERE status = 2 AND sms = 1';
con.query($query_pago, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }
    console.log("Consulta ejecutada con éxito:");
    let b1 = rows.length/8;
    let b2 = 2 * b1;
    let b3 = 3 * b1;
    let b4 = 4 * b1;
    let b5 = 5 * b1;
    let b6 = 6 * b1;
    let b7 = 7 * b1;

    console.log(rows[1].num_cliente);
    for(let f=0;f<rows.length;f++){

        if(f<b1){
                var sql = "INSERT INTO `morosos1`(`num_cliente`, `tel1`, `tel2`, `precio_mensual`, `bloque`) VALUES ?";
                var values = [
                  [rows[f].num_cliente, rows[f].tel1, rows[f].tel2, rows[f].precio_mensual, 1]
                ];
                con.query(sql, [values], function (err, result) {
                  if (err) throw err;
                  console.log("insertado bloque 1 " + result.affectedRows);
                });

        }else if(f>b1 && f<b2)
        {
                var sql = "INSERT INTO `morosos1`(`num_cliente`, `tel1`, `tel2`, `precio_mensual`, `bloque`) VALUES ?";
                var values = [
                  [rows[f].num_cliente, rows[f].tel1, rows[f].tel2, rows[f].precio_mensual, 2]
                ];
                con.query(sql, [values], function (err, result) {
                  if (err) throw err;
                  console.log("insertado bloque 2 " + result.affectedRows);
                });

        }else if(f>b2 && f<b3)
        {
                var sql = "INSERT INTO `morosos1`(`num_cliente`, `tel1`, `tel2`, `precio_mensual`, `bloque`) VALUES ?";
                var values = [
                  [rows[f].num_cliente, rows[f].tel1, rows[f].tel2, rows[f].precio_mensual,3]
                ];
                con.query(sql, [values], function (err, result) {
                  if (err) throw err;
                  console.log("insertado bloque 3 " + result.affectedRows);
                });

        }else if(f>b3 && f<b4)
        {
                var sql = "INSERT INTO `morosos1`(`num_cliente`, `tel1`, `tel2`, `precio_mensual`, `bloque`) VALUES ?";
                var values = [
                  [rows[f].num_cliente, rows[f].tel1, rows[f].tel2, rows[f].precio_mensual, 4]
                ];
                con.query(sql, [values], function (err, result) {
                  if (err) throw err;
                  console.log("insertado bloque 4 " + result.affectedRows);
                });

        }else if(f>b4 && f<b5)
        {
                var sql = "INSERT INTO `morosos1`(`num_cliente`, `tel1`, `tel2`, `precio_mensual`, `bloque`) VALUES ?";
                var values = [
                  [rows[f].num_cliente, rows[f].tel1, rows[f].tel2, rows[f].precio_mensual, 5]
                ];
                con.query(sql, [values], function (err, result) {
                  if (err) throw err;
                  console.log("insertado bloque 5 " + result.affectedRows);
                });

        }else if(f>b5 && f<b6)
        {
                var sql = "INSERT INTO `morosos1`(`num_cliente`, `tel1`, `tel2`, `precio_mensual`, `bloque`) VALUES ?";
                var values = [
                  [rows[f].num_cliente, rows[f].tel1, rows[f].tel2, rows[f].precio_mensual, 6]
                ];
                con.query(sql, [values], function (err, result) {
                  if (err) throw err;
                  console.log("insertado bloque 6 " + result.affectedRows);
                });

        }else if(f>b6 && f<b7)
        {
                var sql = "INSERT INTO `morosos1`(`num_cliente`, `tel1`, `tel2`, `precio_mensual`, `bloque`) VALUES ?";
                var values = [
                  [rows[f].num_cliente, rows[f].tel1, rows[f].tel2, rows[f].precio_mensual, 7]
                ];
                con.query(sql, [values], function (err, result) {
                  if (err) throw err;
                  console.log("insertado bloque 7 " + result.affectedRows);
                });

        }else 
        {
                var sql = "INSERT INTO `morosos1`(`num_cliente`, `tel1`, `tel2`, `precio_mensual`, `bloque`) VALUES ?";
                var values = [
                  [rows[f].num_cliente, rows[f].tel1, rows[f].tel2, rows[f].precio_mensual, 8]
                ];
                con.query(sql, [values], function (err, result) {
                  if (err) throw err;
                  console.log("insertado bloque 8 " + result.affectedRows);
                });

        }
    }   
       // Cerrar la conexión
   con.end(function(){
    // La conexión se ha cerrado
}); 
});

