import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { adminUserRequest } from "../../../redux/action/admin";

const User= () => {
  const dispatch = useDispatch();

  const { loading, users } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(adminUserRequest());
  }, [dispatch]);

  return (
    <section className="tableClass">
      {loading === false ? (
        <main>
          <table>
            <thead>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Role</th>
                <th>Since</th>
              </tr>
            </thead>

            <tbody>
              {users &&
                users.map((i) => (
                  <tr key={i._id}>
                    <td className="orderid">#{i._id}</td>   
                    <td>{i.name}</td>
                    <td>
                      <img src={i.photo} alt="User" />
                    </td>
                    <td>{i.role}</td>
                    <td>{i.createdAt.split("T")[0]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default User;