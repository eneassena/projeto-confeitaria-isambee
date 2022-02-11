import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      {/* <!-- FOOTER --> */}
      <footer className="container py-5">
        <aside className="float-end">
          <a href="#header-top" className="btn btn-outline-secondary">
            Voltar ao topo
          </a>
        </aside>
        <aside>
          <span>
            &copy; 2020 – 2022 Confeitaria Isambee, Todos direitos reservados.
          </span>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
