import React from 'react';
import {Link} from "react-router-dom";

export default class Confirm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="ui centered raised card">
        <div className="center aligned content">
          <div className="header">
            <p>{this.props.date.toLocaleString()}</p><br/>
          </div>
          <div className="center aligned description">
            <div className="ui form">
              <div className="inline field">
                <label>Name:</label>
                <input type="text"/>
              </div>
              <div className="inline field">
                <label>Email:</label>
                <input type="text"/>
              </div>
              <div className="inline field">
                <label>Event:</label>
                <input type="text"/>
              </div>
              <div className="inline field">
                <label>Duration:</label>
                <input type="number" style={{ width: 110 }}/>
                <p>&nbsp; minutes</p>
              </div>
              <div className="inline field">
                <label>Location:</label>
                <input type="text"/>
              </div>
              <br></br>
            </div>

          </div>
          <div className="center aligned extra content">
            <Link to="/">
              <div className="ui animated basic red button" tabIndex="0" onClick={this.handleClick}>
                <div className="visible content">Cancel</div>
                <div className="hidden content">
                  <i className="left arrow icon"></i>
                </div>
              </div>
            </Link>
            <div className="ui animated basic green button" tabIndex="0" onClick={this.handleClick}>
              <div className="visible content">Confirm</div>
              <div className="hidden content">
                <i className="right arrow icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
