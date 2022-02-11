import React from "react";

import Footer from "ui/components/Footer/Footer";

import "./MainHTML.css";

const MainHTML = ({ children }: any) => {
  return (
    <>
      <main className={"body-main"}>
        {children}
        <section className={"footer-element"}>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default MainHTML;
