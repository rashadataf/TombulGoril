import React, { Component } from "react";
import { connect } from 'react-redux';
import { setTimeIntervalHandler, clearTimeIntervalHandler } from '../../store/actions/actions'
import MobileSlider from "./MobileSlider/MobileSlider";
import LaptopSlider from "./LaptopSlider/LaptopSlider";

const images = [
  {
    src: "/banner (1).jpg",
    originalClass: "mobile",
  },
  {
    src: "/banner (2).jpg",
    originalClass: "mobile",
  },
  {
    src: "/banner (3).jpg",
    originalClass: "mobile",
  },
  {
    src: "/banner (4).jpg",
    originalClass: "mobile",
  },
  {
    src: "/banner (5).jpg",
    originalClass: "mobile",
  },
  {
    src: "/banner (6).jpg",
    originalClass: "mobile",
  },
];

class Slider extends Component {
  state = {
    currentIndex: 0,
    startX: 0,
    isAnimate: false,
    isSmallScreen: false,
    timeInterval: null,
    autoPlay: true
  };

  componentDidMount() {
    if (window.innerWidth > 768 && window.innerHeight > 550) {
      if (this.state.isSmallScreen)
        this.setState({
          isSmallScreen: false,
        });
    } else {
      if (!this.state.isSmallScreen)
        this.setState({
          isSmallScreen: true,
        });
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && window.innerHeight > 550) {
        if (this.state.isSmallScreen)
          this.setState({
            isSmallScreen: false,
          });
      } else {
        if (!this.state.isSmallScreen)
          this.setState({
            isSmallScreen: true,
          });
      }
    });
  }

  render() {
    return this.state.isSmallScreen ? (
      <MobileSlider images={images} autoPlay={this.state.autoPlay} setTimeInterval={this.props.setTimeIntervalHandler} timeInterval={this.props.timeIntervalHandler} />
    ) : (
      <LaptopSlider images={images} autoPlay={this.state.autoPlay} setTimeInterval={this.props.setTimeIntervalHandler} timeInterval={this.props.timeIntervalHandler} />
    );
  }
}

const mapStateToProps = state => {
  return {
    timeIntervalHandler: state.timeIntervalHandler
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTimeIntervalHandler: (handler) => dispatch(setTimeIntervalHandler(handler)),
    clearTimeIntervalHandler: () => dispatch(clearTimeIntervalHandler())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
