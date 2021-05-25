import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Table() {
  // console.log(users);
  const dispatch = useDispatch();
  const modules = useSelector((state) => state.module);

  return (
    <table className="table-dataset">
     <thead>
      <tr>
          <th className="text-center">Module Name</th>
          <th className="text-center">Activity Name</th>
          <th>Create</th>
          <th>View</th>
          <th>Edit</th>
          <th>Delete</th>
          <th>Approve</th>
        </tr>
     </thead>
      <tbody>
        {modules.map((obj, index) => (
          <tr key={index}>
            <td>{obj?.moduleName}</td>
            <td>{obj?.activityName}</td>
            <td>
              {/* update object in onChange event */}
              <input type="checkbox" checked={obj?.isCreate} />
            </td>
            <td>
              <input type="checkbox" checked={obj?.isView} />
            </td>
            <td>
              <input type="checkbox" checked={obj?.isEdit} />
            </td>
            <td>
              <input type="checkbox" checked={obj?.isDelete} />
            </td>
            <td>
              <input type="checkbox" checked={obj?.isApprove} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
