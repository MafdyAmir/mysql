import connection from "../../../DB/connection.js";

//1-add product(product must not found before)
export const addProduct = (req, res, next) => {
  const { pName, pDescription, price, userID } = req.body;
  const query = `insert into products(pName,pDescription,price,userID) values ('${pName}', '${pDescription}', ${price},${userID})`;
  connection.execute(query, (error, result) => {
    if (error) {
      return res.json({ message: "syntax Error", error });
    } else {
      return res.json({ message: "Product added successfully...", result });
    }
  });
};

//update product (product owner only)
export const updateProduct = (req, res, next) => {
  const { id } = req.params;
  const { pName, pDescription, price } = req.body;
  if (pName) {
    const query = ` UPDATE users SET name='${pName}' WHERE id = '${id}'  `;
    connection.execute(query, (error, result) => {
      if (error) {
        return res.json({ message: "syntax error", error });
      } else {
        return res.json({ message: "update has been successfully..", result });
      }
    });
  } else if (pDescription) {
    const query = `UPDATE users SET email = '${pDescription}' WHERE id = '${id}' `;
    connection.execute(query, (error, result) => {
      if (error) {
        return res.json({ message: "syntax error", error });
      } else {
        return res.json({ message: "update has been successfully..", result });
      }
    });
  } else if (price) {
    const query = `UPDATE users SET password = '${price}' WHERE id = '${id}' `;
    connection.execute(query, (error, result) => {
      if (error) {
        return res.json({ message: "syntax error", error });
      } else {
        return res.json({ message: "update has been successfully..", result });
      }
    });
  }
};

//delete product (product owner only can do this and product must be found )
export const deleteProduct = (req, res, next) => {
  const { id, userID } = req.params;
  const query = `delete from products where id = ${id} and userID=${userID} `;
  connection.execute(query, (error, result) => {
    if (error) {
      return res.json({ message: "syntax error", error });
    } else {
      return result.affectedRows
        ? res.json({ message: "product has been deleted successful..", result })
        : res.json({ message: "invalid id!", result });
    }
  });
};

// get all products
export const getAllProducts = (req, res, next) => {
  console.log(req.body);
  const query = `select * from products`;
  connection.execute(query, (error, result) => {
    if (error) {
      return res.json({ message: "syntax error", error });
    } else {
      return res.json({ message: "The result is..", result });
    }
  });
};

//search for products where price greater than 3000
export const search_Product = (req, res, next) => {
  const { price } = req.query;
  const query = `select * from products where price < ${price}`;
  connection.execute(query, (error, result) => {
    if (error) {
      return res.json({ message: "syntax error", error });
    } else {
      return res.json({ message: "The result is..", result });
    }
  });
};
