import React from "react";
import { useFormik } from "formik";
import { deleteUser } from "./actions/user";

//redux
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./actions/user";
import Table from "./Table";

function InpForm() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: ""
    },
    onSubmit: (values) => {
      const _email = values?.email
      const found = users.find(user => user?.email === _email)
      if (found) {
        // raise formik error
        // show error message
        return
      }
      dispatch(addUser(values));
      formik.resetForm();
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          required
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />

        <button type="submit">Submit</button>
      </form>

      <div className="show_data">
        <h3>Users</h3>
      <table className="user-table">
        <thead>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td
                className="delete_btn"
                onClick={() => {
                  dispatch(deleteUser(index));
                }}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        
      </div>
      <div>
        <h3>Table Data Set Example</h3>
        <Table />
      </div>
    </>
  );
}

export default InpForm;
