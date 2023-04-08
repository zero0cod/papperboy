import React, { Component } from "react";
import tempImg from "./tempImg.jpg";
export default class NewsItem extends Component {
  render() {
    let { title, description, imgurl, url, date, author } = this.props;

    return (
      <div className="container">
        <div className="card">
          <img
            className="card-img-top"
            src={imgurl ? imgurl : tempImg}
            alt="......"
          />
          <div className="card-body">
            <h5 className="card-title"> {title} </h5>
            <p className="card-text ">{description}</p>
            <a
              href={url}
              target="_blank"
              className="btn btn-sm btn-dark"
              rel="noreferrer"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknow" : author} Last updated{" "}
                {new Date(date).toGMTString()}
                {/*  */}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
