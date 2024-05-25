import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaRegEdit } from "react-icons/fa";

const Order = () => {
  const oders = database.Order;
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quan li don hang</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className="btn btn-sm btn danger">
              {" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div class="col-6">
            <ul class="manager">
              <li>
                <a href="#">Tất cả (123)</a>
              </li>
              <li>
                <a href="#">Xuất bản (12)</a>
              </li>
              <li>
                <a href="#">Rác (12)</a>
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Ho ten khach hang</th>
                  <th>dien thoai</th>
                  <th>email</th>
                  <th>ngay dat hang</th>
                  <th>ID</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {oders &&
                  oders.length > 0 &&
                  oders.map((order) => {
                    return (
                      <tr key={order.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{order.username}</td>
                        <td>{order.phone}</td>
                        <td>{order.email}</td>
                        <td>{order.email}</td>
                        <td>{order.id}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/order/edit/" + order.id}
                          >
                            <FaRegEdit />
                          </Link>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/order/edit/" + order.id}
                          >
                            <FaTrash />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Order;
