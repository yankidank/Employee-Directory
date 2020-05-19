import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Employees extends Component {
  state = {
    employees: [],
    error: ""
  };

  // When the component mounts, get a list of all employees and update this.state.employees
  componentDidMount() {
    API.getEmployeeList()
      .then(res => this.setState({ employees: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <Row>
          <Col size="md-12">
            <SearchResults results={this.state.employees} />
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Employees;
