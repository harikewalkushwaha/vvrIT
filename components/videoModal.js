import React, { Component } from "react";
import ModalVideo from "react-modal-video";

export class videoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    if (typeof window === "undefined") {
      global.window = {};
    }
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <div className="wrap-ripl">
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="IOtdIVGuPlI"
            onClose={() => this.setState({ isOpen: false })}
          />

          <button
            onClick={this.openModal}
            type="button"
            className="btn-ripl"
            id="vx-play-button"
            data-video-url="https://www.youtube.com/embed/ujDtm0hZyII?origin=https://qourse.themevan.com/default&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
          >
            <svg viewBox="0 0 18 18">
              <path d="M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"></path>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default videoModal;
