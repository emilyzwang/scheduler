import React from 'react';
import {Link} from "react-router-dom";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      time : new Date(this.props.date.getTime() + this.props.time.getTime())
    }
  }

  handleClick() {
    this.props.setTime(this.props.time);
  }

  render() {
    return(
      <div>
        <div>
          {this.state.time.toLocaleTimeString()}
        </div>
        <Link to="/scheduler/confirm">
          <div className="ui animated basic blue button" tabIndex="0" onClick={this.handleClick}>
            <div className="visible content">Confirm Time</div>
            <div className="hidden content">
              <i className="right arrow icon"></i>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
