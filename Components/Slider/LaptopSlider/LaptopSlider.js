import React, { Component } from "react";
import classes from "./LaptopSlider.module.css";

class LaptopSlider extends Component {
  state = {
    currentIndex: 0,
    startX: 0,
    isAnimate: false,
  };

  componentDidMount() {
    if (this.props.autoPlay) {
      if (this.props.timeInterval == null) {
        let handler = setInterval(this.next, 2500);
        this.props.setTimeInterval(handler);
      } else {
        clearInterval(this.props.timeInterval);
        let handler = setInterval(this.next, 2500);
        this.props.setTimeInterval(handler);
      }
    }
  }

  next_prevSlideOut = () => {
    let prevSlide = document.getElementById("prevSlide");
    if (prevSlide) {
      let newIndex = (this.state.currentIndex + 1) % this.props.images.length;
      this.setState({
        currentIndex: newIndex,
      });
      prevSlide.onanimationend = (event) => {
        event.target.parentNode.removeChild(event.target);
        prevSlide.onanimationstart = null;
        prevSlide.onanimationend = null;
      };
      prevSlide.classList.add(classes.next_prevSlideOut);
    }
  };

  next_curSlideOut = () => {
    let curSlide = document.getElementById("curSlide");
    if (curSlide) {
      curSlide.onanimationstart = (event) => {
        let newIndex = (this.state.currentIndex + 1) % this.props.images.length;
        let next = document.createElement("img");
        next.id = "nextSlide";
        next.draggable = false;
        next.style.width = "20%";
        next.style.height = "50%";
        next.style.position = "absolute";
        next.style.top = "50%";
        next.style.left = "200%";
        next.style.transform = "translateY(-50%)";
        next.src = this.props.images[newIndex].src;
        next.onanimationend = (event) => {
          event.target.style = "";
          event.target.classList.add(classes.RightSlide);
          event.target.classList.remove(classes.next_nextSlideIn);
          this.setState({ isAnimate: false });
          next.onanimationend = null;
        };
        next.classList.add(classes.next_nextSlideIn);
        event.target.parentElement.appendChild(next);
      };
      curSlide.onanimationend = () => {
        curSlide.id = "prevSlide";
        curSlide.classList.add(classes.LeftSlide);
        curSlide.classList.remove(classes.CurrentSlide);
        curSlide.classList.remove(classes.next_currentSlideOut);
        curSlide.onanimationstart = null;
        curSlide.onanimationend = null;
      };
      curSlide.classList.add(classes.next_currentSlideOut);
    }
  };

  next_nextSlideOut = () => {
    let nextSlide = document.getElementById("nextSlide");
    if (nextSlide) {
      nextSlide.onanimationend = () => {
        nextSlide.id = "curSlide";
        nextSlide.classList.add(classes.CurrentSlide);
        nextSlide.classList.remove(classes.RightSlide);
        nextSlide.classList.remove(classes.next_nextSlideOut);
        nextSlide.onanimationend = null;
      };
      nextSlide.classList.add(classes.next_nextSlideOut);
    }
  };

  next = () => {
    if (!this.state.isAnimate) {
      this.setState({ isAnimate: true });
      this.next_prevSlideOut();
      this.next_curSlideOut();
      this.next_nextSlideOut();
    }
  };

  prev_nextSlideOut = () => {
    let nextSlide = document.getElementById("nextSlide");
    if (nextSlide) {
      let newIndex =
        this.state.currentIndex == 0
          ? (newIndex = 5)
          : (newIndex = this.state.currentIndex - 1);
      this.setState({
        currentIndex: newIndex,
      });
      nextSlide.onanimationend = (event) => {
        event.target.parentNode.removeChild(event.target);
        nextSlide.onanimationend = null;
      };

      nextSlide.classList.add(classes.prev_nextSlideOut);
    }
  };

  prev_curSlideOut = () => {
    let curSlide = document.getElementById("curSlide");
    if (curSlide) {
      curSlide.onanimationstart = (event) => {
        let newIndex =
          this.state.currentIndex == 0
            ? (newIndex = 5)
            : (newIndex = this.state.currentIndex - 1);
        let prev = document.createElement("img");
        prev.id = "prevSlide";
        prev.draggable = false;
        prev.style.width = "20%";
        prev.style.height = "50%";
        prev.style.position = "absolute";
        prev.style.top = "50%";
        prev.style.left = "-200%";
        prev.style.transform = "translateY(-50%)";
        prev.src = this.props.images[newIndex].src;
        prev.onanimationend = (event) => {
          event.target.style = "";
          event.target.classList.add(classes.LeftSlide);
          event.target.classList.remove(classes.prev_prevSlideIn);
          this.setState({ isAnimate: false });
          prev.onanimationend = null;
        };
        prev.classList.add(classes.prev_prevSlideIn);
        event.target.parentElement.insertAdjacentElement("afterbegin", prev);
      };
      curSlide.onanimationend = () => {
        curSlide.id = "nextSlide";
        curSlide.classList.add(classes.RightSlide);
        curSlide.classList.remove(classes.CurrentSlide);
        curSlide.classList.remove(classes.prev_currentSlideOut);
        curSlide.onanimationstart = null;
        curSlide.onanimationend = null;
      };
      curSlide.classList.add(classes.prev_currentSlideOut);
    }
  };

  prev_prevSlideOut = () => {
    let prevSlide = document.getElementById("prevSlide");
    if (prevSlide) {
      prevSlide.onanimationend = () => {
        prevSlide.id = "curSlide";
        prevSlide.classList.add(classes.CurrentSlide);
        prevSlide.classList.remove(classes.LeftSlide);
        prevSlide.classList.remove(classes.prev_prevSlideOut);
        prevSlide.onanimationend = null;
      };
      prevSlide.classList.add(classes.prev_prevSlideOut);
    }
  };

  prev = () => {
    if (!this.state.isAnimate) {
      this.setState({ isAnimate: true });
      this.prev_nextSlideOut();
      this.prev_curSlideOut();
      this.prev_prevSlideOut();
    }
  };

  render() {
    return (
      <div
        id="slider"
        className={classes.Slider}
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
            if (!this.state.isAnimate) {
              if (distance < 0) {
                this.next();
              } else if (distance > 0) {
                this.prev();
              }
            }
          }
        }}
        onTouchEnd={(event) => {
          let distance = event.changedTouches[0].clientX - this.state.startX;
          if (!this.state.isAnimate) {
            if (distance < 0) this.next();
            else if (distance > 0) this.prev();
          }
        }}
      >
        <img
          id="prevSlide"
          src={this.props.images[this.props.images.length - 1].src}
          className={classes.LeftSlide}
          draggable={false}
        />
        <img
          id="curSlide"
          src={this.props.images[0].src}
          className={classes.CurrentSlide}
          draggable={false}
        />
        <img
          id="nextSlide"
          src={this.props.images[1].src}
          className={classes.RightSlide}
          draggable={false}
        />
      </div>
    );
  }
}

export default LaptopSlider;
