import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateModule} from './actions/module';

function Table() {
  // console.log(users);
  const dispatch = useDispatch();
  const modules = useSelector((state) => state.module);
  const _updateModule = (obj, e) => {
    const fieldName = e.target.name
    obj[fieldName] = !obj[fieldName];
    dispatch(updateModule(obj))
  }
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
              <input type="checkbox" name="isCreate" checked={obj?.isCreate} onChange={(e) => _updateModule(obj, e)} />
            </td>
            <td>
              <input type="checkbox" name="isView" checked={obj?.isView} onChange={(e) => _updateModule(obj, e)} />
            </td>
            <td>
              <input type="checkbox" name="isEdit" checked={obj?.isEdit} onChange={(e) => _updateModule(obj, e)} />
            </td>
            <td>
              <input type="checkbox" name="isDelete" checked={obj?.isDelete} onChange={(e) => _updateModule(obj, e)} />
            </td>
            <td>
              <input type="checkbox" name="isApprove" checked={obj?.isApprove} onChange={(e) => _updateModule(obj, e)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
