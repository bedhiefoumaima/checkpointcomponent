import React from 'react'
import "./Users.css";

const Users = () => {
    const users = [
    {
      name: "Mohamed",
      age: 25,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
    {
      name: "Ahmed",
      age: 28,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
    {
      name: "Ali",
      age: 30,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
  ];
    return (
        <div>
           <h2 className="title">List Of Users</h2>
           <div className="list-users">
           {users.map((user, i) => (
               <div className="user-card" key={i}>
              <h3 className="name">{user.name}</h3>
              <h3>{user.age}</h3>
              <p>{user.desc}</p>
            </div>
           ))}
         </div>  
        
        <hr />
      <h2 className="title">List of filtred users</h2>
      <div className="list-users">
        {users
          .filter((el) => el.age > 25)
          .map((user, i) => (
            <div className="user-card" key={i}>
              <h3 className="name">{user.name}</h3>
              <h3>{user.age}</h3>
              <p>{user.desc}</p>
            </div>
          ))}
      </div>
      <hr/>
      <h2 className="title">Sum of ages</h2>
      <h3>{users.reduce((acc, curr) => acc + curr.age, 0)}</h3>
    </div>

    )
}

export default Users

