import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children, className }) => {
  return (
    <article
      className={className}
      style={{
        maxWidth: "960px",
        border: "3px solid black",
        margin: "auto",
        backgroundColor: "white",
        marginTop: "60px",
        padding: "3em 1em 3em 1em",
        // minHeight: '1000px',
      }}
    >
      {children}
    </article>
  );
};

Layout.propTypes = {
  children: PropTypes.elementType,
  className: PropTypes.string,
};

export default Layout;
