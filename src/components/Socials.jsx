import React from "react";

const Socials = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <>
      <div className="socialIcons" style={styles.socialIcons}>
        <a className="icon" style={styles.icon} href="">
          <i
            className="fa-brands fa-github"
            aria-hidden="true"
            title="Priyanshi Porwal' GitHub Profile"
          ></i>
        </a>
        <a className="icon" style={styles.icon} href="">
          <i
            className="fa-brands fa-linkedin"
            aria-hidden="true"
            title="Priyanshi Porwal' LinkedIn Profile"
          ></i>
        </a>
        <a className="icon" style={styles.icon} href="">
          <i
            className="fa-brands fa-instagram"
            aria-hidden="true"
            title="Priyanshi Porwal' Instagram Profile"
          ></i>
        </a>
        <a className="icon" style={styles.icon} href="">
          <i
            className="fa-brands fa-twitter"
            aria-hidden="true"
            title="Priyanshi Porwal' Twitter Profile"
          ></i>
        </a>
      </div>
    </>
  );
};

export default Socials;
