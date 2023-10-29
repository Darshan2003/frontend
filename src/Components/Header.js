import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline" style={{ textShadow:'0 0 5px white'}}>{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h2 style={{fontFamily:'Arial', color:'white', textShadow:'0 0 5px white'}}>{description}</h2>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="http://localhost:8501/" className="button btn project-btn">
                  <i className="fa fa-arrow-right"></i>Go To App
                </a>
              </ul>
            </Fade>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
