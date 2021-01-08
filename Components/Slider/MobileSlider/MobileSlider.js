import React, { Component } from "react";
import classes from "./MobileSlider.module.css";

class MobileSlider extends Component {
  state = {
    startX: 0,
  };

  componentDidMount() {
    var slides = document.querySelectorAll(`.${classes.MobileSlide}`);
    let first = slides.item(0);
    let last = slides.item(slides.length - 1);
    first.parentNode.insertBefore(last, first);
    if (this.props.autoPlay) {
      if (this.props.timeInterval == null) {
        let handler = setInterval(this.mobileNext, 3500);
        this.props.setTimeInterval(handler);
      } else {
        clearInterval(this.props.timeInterval);
        let handler = setInterval(this.mobileNext, 3500);
        this.props.setTimeInterval(handler);
      }
    }
  }

  mobileNext = () => {
    let slides = document.getElementsByClassName(classes.MobileSlide);
    var activeSlide = document.getElementsByClassName(classes.active)[0];
    let last = slides.item(slides.length - 1);
    let first = slides.item(0);
    last.parentNode.insertBefore(first, last.nextSibling);
    activeSlide.classList.remove(classes.active);
    activeSlide.nextElementSibling.classList.add(classes.active);
  };

  mobilePrev = () => {
    let slides = document.getElementsByClassName(classes.MobileSlide);
    var activeSlide = document.getElementsByClassName(classes.active)[0];
    let last = slides.item(slides.length - 1);
    let first = slides.item(0);
    first.parentElement.insertBefore(last, first);
    activeSlide.classList.remove(classes.active);
    activeSlide.previousElementSibling.classList.add(classes.active);
  };

  render() {
    return (
      <div
        className={classes.MobileSlider}
        onTouchStart={(event) => {
          this.setState({
            startX: event.changedTouches[0].clientX,
          });
        }}
        onMouseDown={(event) => {
          if (event.button == 0) {
            this.setState({
              startX: event.clientX,
            });
          }
        }}
        onMouseUp={(event) => {
          if (event.button == 0) {
            let distance = event.clientX - this.state.startX;
            if (distance < 0) this.mobileNext();
            else if (distance > 0) this.mobilePrev();
          }
        }}
        onTouchEnd={(event) => {
          let distance = event.changedTouches[0].clientX - this.state.startX;
          if (distance < 0) this.mobileNext();
          else if (distance > 0) this.mobilePrev();
        }}
      >
        <div className={`${classes.MobileSlide} ${classes.active}`}>
          <img src={this.props.images[0].src} draggable={false} />
        </div>
        <div className={classes.MobileSlide}>
          <img src={this.props.images[1].src} draggable={false} />
        </div>
        <div className={classes.MobileSlide}>
          <img src={this.props.images[2].src} draggable={false} />
        </div>
        <div className={classes.MobileSlide}>
          <img src={this.props.images[3].src} draggable={false} />
        </div>
        <div className={classes.MobileSlide}>
          <img src={this.props.images[4].src} draggable={false} />
        </div>
        <div className={classes.MobileSlide}>
          <img src={this.props.images[5].src} draggable={false} />
        </div>
      </div>
    );
  }
}

export default MobileSlider;
