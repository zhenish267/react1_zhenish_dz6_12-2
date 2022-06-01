import React, {useState} from "react";
import Users from "../../components/users/Users";

const URL = 'https://jsonplaceholder.typicode.com/users/';

function MainPage() {

    const [users, setUsers] = useState(null);

    const getUser = () => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setUsers(data));

    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td>#</td>
                    <td>name</td>
                    <td>email</td>
                    <td>username</td>
                </tr>
                </thead>
                <tbody>
                <Users users={users}/>
                </tbody>
            </table>
            <button onClick={getUser}>GET USERS</button>
        </div>
    )
}

export default MainPage;