import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie, isLoading, page, setPage } = useGlobalContext();

  const loadmore = () => {
    let newpage = page + 1;
    setPage(newpage);
  };

  const none = () => {
    let elem = document.getElementsByClassName("btn");
    console.log(elem);
    elem[0].style.display = "none";
  };

  console.log("Page No=", page);
  if (isLoading) {
    return <div className="loading"> Loading ....</div>;
  }
  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie.map((curMovie) => {
            const { imdbID, Title, Poster } = curMovie;
            const movieName = Title.substring(0, 15);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>
                      {movieName.length >= 15 ? `${movieName}...` : movieName}
                    </h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
        <div>
          {movie < 10 ? (
            none()
          ) : (
            <button className="btn" onClick={loadmore}>
              <h3>Load More..... </h3>{" "}
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Movies;
