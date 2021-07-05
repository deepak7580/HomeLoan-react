import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomerAction } from "../redux/store";

export const CustomerList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllCustomerAction()), []);
  return (
    <div className="ml-3">
      <h1>Customer List</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">customer_id</th>
            <th scope="col">aadhar_number</th>
            <th scope="col">customer_name</th>
            <th scope="col">dob</th>
            <th scope="col">email</th>
            <th scope="col">gender</th>
            <th scope="col">mobile_number</th>
            <th scope="col">nationality</th>
            <th scope="col">pan_number</th>
            <th scope="col">user_id</th>
          </tr>
        </thead>
        <tbody>
          {state.customerList.map((item, index) => (
            <tr key={index}>
              {/* <th scope="row">1</th> */}
              <td>{item.customerId}</td>
              <td>{item.aadharNumber}</td>
              <td>{item.customerName}</td>
              <td>{item.dateOfBirth}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.nationality}</td>
              <td>{item.panNumber}</td>
              <td>{item.user.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
