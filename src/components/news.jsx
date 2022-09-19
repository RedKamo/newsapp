import React from "react";
import "../assets/styles/News.scss";
import Press from "../assets/styles/images/press.png";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { fetchingData } from "../api/fetchData";
import Noimage from "../assets/styles/images/noimg.jpg";

const News = () => {
  const { data1, data2 } = fetchingData();
  return (
    <main className="container">
      <h1>Today's News</h1>
      <section className="news">
        {data2.map((ite, index) => (
          <article key={index} className="news__article">
            {ite.urlToImage != null ? (
              <img src={ite.urlToImage} alt="" />
            ) : (
              <img src={Noimage} />
            )}
            <section className="news__press">
              <img className="press__Icon" src={Press} alt="" />
              <p>{ite.author}</p>
            </section>
            <section className="news__description">
              <h2>{ite.title}</h2>
            </section>
            <section className="news__media">
              <h4>{ite.publishedAt}</h4>
              <a href={ite.url} target="_blank">
                Read article <BsArrowUpRightCircle className="icon" />
              </a>
            </section>
          </article>
        ))}
      </section>
      <section className="other">
        <h2>OTHER NEWS</h2>
        <section className="table">
          {data1.map((item, i) => (
            <a key={i} href={item.link} target="_blank" className="table__info">
              <section className="table__description">
                <span>{i + 1}</span>
                <p>{item.title}</p>
              </section>
              {item.creator !== null ? (
                <section className="table__author">
                  <h4>author:</h4>
                  <span>{item.creator}</span>
                </section>
              ) : (
                <section className="table__author">
                  <h4>author:</h4>
                  <span>Unknow</span>
                </section>
              )}
            </a>
          ))}
        </section>
      </section>
    </main>
  );
};

export default News;
