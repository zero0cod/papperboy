import React, { Component } from "react";
import Loader from "./Loader";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  caps = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  article = [];
  constructor(props) {
    super(props);

    // console.log("constructor on duty ");
    this.state = {
      article: this.article,
      loading: false,
      totalResults: 0,
      page: 1,
    };

    document.title = `${this.caps(this.props.category)} - PapperBoy`;
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    // console.log(this.state.article[0].description);
  }
  // handleNextPage = async () => {
  //   if (
  //     this.state.page + 1 >
  //     Math.ceil(this.state.totalResults / this.props.pageSize)
  //   ) {
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=36ec96a9fd9146d1bb798bde0b439d50&page=${
  //       this.state.page + 1
  //     }&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     this.setState({
  //       article: parsedData.articles,
  //       page: this.state.page + 1,
  //       loading: false,
  //     });
  //     console.log("next");
  //   }
  // };
  // handlePrevPage = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=36ec96a9fd9146d1bb798bde0b439d50&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   console.log(this.state.page--);
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({ article: parsedData.articles, loading: false });
  //   console.log("prev");
  // };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: this.state.article.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  render() {
    return (
      <>
        {this.state.loading && <Loader className="text-center " />}

        <h2 className="my-5 py-5 text-center">
          Trending HeadLines on {this.props.category}
        </h2>
        {/* <div className="container d-flex justify-content-center  ">
          <button
            className="btn btn-dark"
            onClick={this.handlePrevPage}
            style={this.style}
            disabled={this.state.page <= 1 ? true : false}
          >
            &larr;
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
                ? true
                : false
            }
            className="btn btn-dark mx-2"
            onClick={this.handleNextPage}
          >
            &rarr;
          </button>
          <p></p>
        </div> */}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResults}
          loader={<Loader />}
        >
          <div className="container">
            <div className="row my-3">
              {this.state.article.map((element) => (
                <div className="col-md-4" key={element.publishedAt}>
                  <NewsItem
                    url={element.url}
                    title={element.title}
                    description={element.description}
                    imgurl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-center  ">
          <button
            className="btn btn-dark"
            onClick={this.handlePrevPage}
            style={this.style}
            disabled={this.state.page <= 1 ? true : false}
          >
            &larr;
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
                ? true
                : false
            }
            className="btn btn-dark mx-2"
            onClick={this.handleNextPage}
          >
            &rarr;
          </button>
        </div> */}
      </>
    );
  }
}
