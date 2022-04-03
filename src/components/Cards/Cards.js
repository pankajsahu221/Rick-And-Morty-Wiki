import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

const Cards = ({ results, page }) => {
  // console.log(results);

  return results ? (
    <>
      {results.map(char => {
        return (
          <Link
            to={`${page}${char.id}`}
            style={{ textDecoration: "none" }}
            key={char.id}
            className="col-lg-4 col-md-6 col-12 mb-4 text-dark position-relative"
          >
            <div
              className={`${styles.cards} d-flex flex-column justify-content-center`}
            >
              <img
                src={char.image}
                alt=""
                className={`${styles.img} img-fluid`}
              />
              <div className="content" style={{ padding: "10px" }}>
                <div className="fs-4 fw-bold mb-4">{char.name}</div>
                <div className="">
                  <div className="fs-6">Last location</div>
                  <div className="fs-5">{char.location.name}</div>
                </div>
              </div>
            </div>
            {(() => {
              if (char.status === "Dead") {
                return (
                  <div
                    className={`${styles.badge} badge bg-danger position-absolute`}
                  >
                    {char.status}
                  </div>
                );
              } else if (char.status === "Alive") {
                return (
                  <div
                    className={`${styles.badge} badge bg-success position-absolute`}
                  >
                    {char.status}
                  </div>
                );
              } else {
                return (
                  <div
                    className={`${styles.badge} badge bg-secondary position-absolute`}
                  >
                    {char.status}
                  </div>
                );
              }
            })()}
          </Link>
        );
      })}
    </>
  ) : (
    <>No Characters Found</>
  );
};

export default Cards;
