import React, { Component } from 'react'

export default class NightButton extends Component {
    render() {
        const {onClick,className}=this.props;
        return (
            <React.Fragment>
            <div id="wrapper" className={className}>
            <div className="zzz1"></div>
            <div className="zzz2"></div>
            <div className="zzz3"></div>

              <div id="button" className="planet" onClick={onClick}> 
              <div className="face">
                  <div className="eye">
                  <div className="eye-in"></div>
                </div>
                <div className="mouth"></div>
                <div className="eye">
                  <div className="eye-in"></div>
                </div>
              </div>
            </div>
            <div className="star pos-star1 "></div>
            <div className="star pos-star3 "></div>
          </div>
          </React.Fragment>
          )
    }
}
