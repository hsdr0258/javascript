import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaRegEdit } from "react-icons/fa";

const Orderdetail = () => {
  const orderdetails = database.Oderdetails;
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quan li đặt hàng</strong>
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
          <div className="col-md-12">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Họ tên khách hàng</th>
                  <th>Điện thoại</th>
                  <th>Email</th>
                  <th>Ngày đặt hàng</th>
                  <th>ID</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {orderdetails &&
                  orderdetails.length > 0 &&
                  orderdetails.map((orderdetail) => {
                    return (
                      <tr key={orderdetail.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img
                            src={orderdetail.username}
                            alt={orderdetail.username}
                          />
                        </td>
                        <td>{orderdetail.phone}</td>
                        <td>{orderdetail.email}</td>
                        <td>{orderdetail.dateorder}</td>
                        <td>{orderdetail.id}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/orderdetail/edit/" + orderdetail.id}
                          >
                            <FaRegEdit />
                          </Link>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/orderdetail/edit/" + orderdetail.id}
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

export default Orderdetail;
