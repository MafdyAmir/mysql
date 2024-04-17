import connection from "../../../DB/connection.js";

//add user (user must not found before)
export const signUp = (req, res, next) => {
  const { name, email, password, age } = req.body;
  const query = `insert into users(name,email,password,age) values ('${name}', '${email}' ,'${password}', '${age}')`;
  connection.execute(query, (error, result) => {
    if (error) {
      if (error.errno == 1062) {
        return res.json({ message: "Email is already Exist!" });
      } else {
        return res.json({ message: "syntax Error", error });
      }
    } else {
      return res.json({ message: "signup successful...", result });
    }
  });
};

//signin User
export const signIn = (req, res, next) => {
  const { email, password } = req.body;
  const query = `select * from users where email='${email}' and password='${password}'`;
  connection.execute(query, (error, result) => {
    if (error) {
      return res.json({ message: "syntax error", error });
    }
    if (result.length) {
      return res.json({ message: "signIn successful...", result });
    } else {
      return res.json({ message: "invalid email or password!" });
    }
  });
};

//update user
export const updateUser = (req, res, next) => {
  const { id } = req.params;
  const { name, email, password, age } = req.body;
  if (name) {
    const query = ` UPDATE users SET name='${name}' WHERE id = '${id}'  `;
    connection.execute(query, (error, result) => {
      if (error) {
        return res.json({ message: "syntax error", error });
      } else {
        return res.json({ message: "update has been successfully..", result });
      }
    });
  } else if (email) {
    const query = `UPDATE users SET email = '${email}' WHERE id = '${id}' `;
    connection.execute(query, (error, result) => {
      if (error) {
        return res.json({ message: "syntax error", error });
      } else {
        return res.json({ message: "update has been successfully..", result });
      }
    });
  } else if (password) {
    const query = `UPDATE users SET password = '${password}' WHERE id = '${id}' `;
    connection.execute(query, (error, result) => {
      if (error) {
        return res.json({ message: "syntax error", error });
      } else {
        return res.json({ message: "update has been successfully..", result });
      }
    });
  } else if (age) {
    const query = `UPDATE users SET age = '${age}' WHERE id = '${id}' `;
    connection.execute(query, (error, result) => {
      if (error) {
        return res.json({ message: "syntax error", error });
      } else {
        return res.json({ message: "update has been successfully..", result });
      }
    });
  }
};

//delete user(user must be found)
export const deleteUser = (req, res, next) => {
  const { id } = req.params;
  const query = `delete from users where id = ${id} `;
  connection.execute(query, (error, result) => {
    if (error) {
      return res.json({ message: "syntax error", error });
    } else {
      return result.affectedRows
        ? res.json({ message: "User has been deleted successful..", result })
        : res.json({ message: "invalid id!", result });
    }
  });
};

//search for user where his name start with "a" and age less than 30 => using like for characters
export const search_User = (req, res, next) => {
  const { letter, age } = req.query;
  const query = `select * from users where name LIKE '${letter}%' and age <'${age}' `;
  connection.execute(query, (error, result) => {
    if (error) {
      return res.json({ message: "syntax error", error });
    } else {
      return res.json({ message: "The result is..", result });
    }
  });
};

//search for users by list of ids => using IN
export const searchUserById = (req, res, next) => {
  console.log(req.query.id);
  const query = `select * from users where id In (${req.query.id}) `;
  connection.execute(query, (error, result) => {
    if (error) {
      return res.json({ message: "syntax error", error });
    } else {
      return res.json({ message: "The result is..", result });
    }
  });
};

//get all user
export const getAllUsers = (req, res, next) => {
  console.log(req.body);
  const query = `select * from users`;
  connection.execute(query, (error, result) => {
    if (error) {
      return res.json({ message: "syntax error", error });
    } else {
      return res.json({ message: "The result is..", result });
    }
  });
};

//get all users with products
export const getAllwithProducts = (req, res, next) => {
  const query = `select users.name, users.email ,products.pName,products.pDescription,products.price,products.id from products RIGHT JOIN users on users.id = products.userID`;
  connection.execute(query, (error, result) => {
    if (error) {
      return res.json({ message: "syntax error", error });
    } else {
      return res.json({ message: "The result is..", result });
    }
  });
};
