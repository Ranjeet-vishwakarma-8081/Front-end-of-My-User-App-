import { useState } from "react";
import PropTypes from "prop-types";
const Form = ({ addUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, age } = formData;
    if (name && email && age) {
      await addUser({ variables: { name, email, age: parseInt(age, 10) } });
      setFormData({ name: "", email: "", age: "" });
      window.location.reload(); // Refresh to show new data
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Name"
        required
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <br />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Email"
        required
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <br />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Enter Age"
        required
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <br />
      <button type="submit" style={{ padding: "5px 10px" }}>
        Add User
      </button>
    </form>
  );
};

Form.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default Form;
