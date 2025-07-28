const db = require('../config/connect.js');

// for displaying product list
function index(){

  return db.execute('SELECT * FROM tb_product');
}


function store(product_name,price,des){

    const query = "INSERT INTO tb_product(product_name,price,des)values(?,?,?)";
    return db.execute(query,[product_name,price,des])
}

function show(id){

    const query = `SELECT * FROM tb_product where id = ?`; // query for show base on id

    return db.execute(query,[id]); // then return  exicuted the query 
}

function update(product_name,price,des,id){

    const query = "UPDATE tb_product SET product_name = ? , price = ? ,des = ? WHERE id  = ?";

    return db.execute(query,[product_name,price,des,id]);
}

function destroy(id){
   const query = "DELETE  FROM tb_product WHERE id = ? ";

   return db.execute(query,[id])
}


module.exports = {
  index,
  store,
  show,
  update,
  destroy
};