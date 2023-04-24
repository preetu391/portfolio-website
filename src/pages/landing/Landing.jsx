import React from "react";
import Typewriter from "typewriter-effect";
import landingImage from '../../images/meeee.jpg'
import Socials from "../../components/Socials";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <>
      <section id="home" className="landing" style={styles.landing}>
        <div className="textContainer" style={styles.textContainer}>
          <h1 className="name" style={styles.name}>
            {name}
          </h1>
          <div className="description">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello World!")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </div>
        </div>
        <div className="image-container">
            <img className="landingImage"
            initial={{opacity: 0}}
            animate={{opacity:0.4}}
            transition={{duration: 1, ease:"easeInOut"}}
            style={styles.landingImage}
            src={landingImage}
            alt="image"
            >
            </img>
        </div>
        <Socials />
      </section>
    </>
  );
};

export default Landing;
