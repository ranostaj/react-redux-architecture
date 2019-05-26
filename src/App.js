import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <Container>
            <h1>Articles</h1>
          </Container>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
