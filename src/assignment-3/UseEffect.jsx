import { useState, useEffect } from "react";
import "./UseEffect.css";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async/await
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      console.log(users);
      setUsers(users);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="heading">
        <h1>USeEffect</h1>
      </div>
      <div className="boxes">
        {users.map((user, i) => (
          <div className="box" key={i}>
            <h5 className="box-text">
              <strong>Name:</strong> {user.name}
            </h5>
            <p className="box-text">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="box-text">
              <strong>Username:</strong> {user.username}
            </p>
            <p className="box-text">
              <strong>Phone Number:</strong> {user.phone}
            </p>
            <p className="box-text">
              <strong>Website:</strong> {user.website}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffect;
