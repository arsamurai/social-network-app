import React from "react";
import { compose } from "redux";
import News from "./News";
import { getNews, searchNews } from "../../Redux/News-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/authRedirect";
import { withRouter } from "react-router-dom";

class NewsContainer extends React.Component {
  componentDidMount() {
    this.props.getNews();
    // fetch(
    //   "https://newsapi.org/v2/everything?q=tesla&from=2021-03-26&sortBy=publishedAt&apiKey=7db5783412bf4990b2e099b8e408ddf8"
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((myJson) => {
    //     console.log(myJson);
    //   });
  }

  render() {
    return <News news={this.props.news} searchNews={this.props.searchNews} />;
  }
}

const mapStateToProps = (state) => ({
  news: state.newsPage.news,
});

export default compose(
  connect(mapStateToProps, {
    getNews,
    searchNews,
  }),
  withRouter,
  withAuthRedirect
)(NewsContainer);
