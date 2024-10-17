import React from "react";
import ReactDOM from "react-dom";
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [],
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const headers = Object.keys(data[0]).slice(0,4); // Extract the keys from the first object as headers
        this.setState({ headers, data }); // Set both headers and data in one go
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  render() {
    const { headers, data } = this.state; // Destructure state for cleaner access

    return (
      <table border={2}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th> // Use header instead of index for better readability
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default App
