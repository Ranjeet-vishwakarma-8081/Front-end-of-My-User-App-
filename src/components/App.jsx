import { useQuery, gql, useMutation } from "@apollo/client";
import Form from "./Form";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
      age
    }
  }
`;

const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!, $age: Int) {
    addUser(name: $name, email: $email, age: $age) {
      id
      name
      email
      age
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  const [addUser] = useMutation(ADD_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>User List</h1>

      {/* User Form */}
      <Form addUser={addUser} />

      {/* Display Users */}
      <h2>Users - </h2>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
