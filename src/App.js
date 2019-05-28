import React, { Component, useEffect } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadArticles } from "./actions/articlesActions";
import { loadTagsAction } from "./actions/tagsActions";

function App({ articles, tags, loadTagsAction, loadArticles }) {
  useEffect(() => {
    loadTagsAction();
    loadArticles();
  }, []);

  return (
    <Container>
      <Container>
        <h1>Articles</h1>
      </Container>
      <Row>
        <Col>
          <ul>
            {articles.map((art, i) => (
              <li key={i}>{art.title}</li>
            ))}
          </ul>

          <ul>
            {tags.map((tag, i) => (
              <li key={i}>{tag.title}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    articles: state.articles.articles,
    tags: state.tags.tags
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadArticles,
      loadTagsAction
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
