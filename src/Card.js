import React from 'react';
import {Link} from "react-router-dom";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      day : new Date(this.props.date.getTime() + this.props.time.getTime())
    }
  }

  handleClick() {
    this.props.setDate(this.state.day);
  }

  render() {
    return(
      <div>
        <div>
          {this.state.day.toLocaleTimeString()}
        </div>
        <Link to="/confirm">
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
