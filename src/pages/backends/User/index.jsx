import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Database from "../../../database.json";

const User = () => {
  const uses = Database.users;
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quan ly danh muc</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className="btn btn-sm btn-danger">
              <FaTrash />
              thung rac
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-2">THIET KE FORM THEM</div>
          <div className="col-md-9">
            <table className="table table-bordered table-hoved">
              <thead>
                <tr>
                  <th>#</th>
                  <th>hinh</th>
                  <th>ten danh muc</th>
                  <th>slug</th>
                  <th className="text-center" style={{ width: "150px" }}>
                    chuc nang
                  </th>
                  <th className="text-center" style={{ width: "50px" }}>
                    id
                  </th>
                </tr>
              </thead>
              <tbody>
                {uses &&
                  uses.length > 0 &&
                  uses.map((use) => {
                    return (
                      <tr key={use.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={use.image} alt={use.image} />
                        </td>
                        <td>{use.name}</td>
                        <td>{use.slug}</td>
                        <td className="text-center">
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/use/edit/" + use.id}
                          >
                            <FaEdit />
                          </Link>
                          <button className="btn btn-sm btn-danger me-1">
                            <FaTrash />
                          </button>
                        </td>
                        <td>{use.id}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default User;
