import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Employees extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
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
          <h1 className="text-center">Employees</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchResults results={this.state.employees} />
        </Container>
      </div>
    );
  }
}

export default Employees;

/* 
function Employees() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Employee Directory</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
              malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
              ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
              nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
              Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
              porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Employees;
 */