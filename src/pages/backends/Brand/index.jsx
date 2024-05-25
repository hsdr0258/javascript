import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Database from "../../../database.json";
const Brand = () => {
  const brand = Database.brand;
  return (
    <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản lí thương hiệu</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className="btn btn-sm btn-danger">
              <FaTrash /> Thùng rác
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">THIET KE FORM THEM</div>
          <div className="col-md-9  ">
            <div className="table table-bordered table-hover ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình</th>
                  <th>Tên danh mục</th>
                  <th>Slug</th>
                  <th>Chức năng</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {brand &&
                  brand.length > 0 &&
                  brand.map((brand) => {
                    return (
                      <tr key={brand.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={brand.image} alt={brand.image} />
                        </td>
                        <td>{brand.name}</td>
                        <td>{brand.slug}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/brand/edit/" + brand.id}
                          >
                            <FaEdit />
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <FaTrash />
                          </button>
                        </td>
                        <td>{brand.id}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </div>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};
export default Brand;
