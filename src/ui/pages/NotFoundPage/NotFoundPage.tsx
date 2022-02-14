import React from "react";
import "./NotFoundPage.css";

export const NotFoundPage = () => {
  return (
    <>
      <section className="main-error">
        <header className="header-error">
          <span>Confeitaria Isambee</span>
        </header>
        <section className="context-error">
          <span className="text-center">
            Não foi possivel carrega esta página!
          </span>
        </section>
      </section>
    </>
  );
};
