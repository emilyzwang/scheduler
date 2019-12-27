import React from 'react';
import {Link} from "react-router-dom";

export default class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.setEvent = this.setEvent.bind(this);
    this.state = {
      name: undefined,
      email: undefined,
      event: undefined,
      duration: undefined,
      location: undefined
    }
    if (this.props.date) {
      this.state = {
        date : new Date(this.props.date.getTime() + this.props.time.getTime()),
      }
    }
  }

  submit() {
    if (this.state.event) {
      alert("Event: " + this.state.event + " added!");
    }
  }

  setEvent(e) {
    this.setState({ event: e.target.value });
    console.log(this.state.event);
  }

  render() {
    return(
      <div>
        {this.props.date ? (
          <div className="ui centered raised card">
            <div className="center aligned content">
              <br/>
              <div className="header">
                <p>{this.state.date.toLocaleString()}</p><br/>
              </div>
              <div className="center aligned description">
                <div className="ui form">
                  <div className="ui fluid labeled input">
                    <label className="ui label">Name:</label>
                    <input type="text"/>
                  </div>
                  <br/>
                  <div className="ui fluid labeled input">
                    <label className="ui label">Email:</label>
                    <input type="text"/>
                  </div>
                  <br/>
                  <div className="ui fluid labeled input">
                    <label className="ui label">Event:</label>
                    <input type="text" onChange={ this.setEvent }/>
                  </div>
                  <br/>
                  <div className="ui fluid right labeled input">
                    <label className="ui label">Duration:</label>
                    <input type="number"/>
                    <div className="ui basic label">
                      minutes
                    </div>
                  </div>
                  <br/>
                  <div className="ui fluid labeled input">
                    <label className="ui label">Location:</label>
                    <input type="text"/>
                  </div>
                  <br/><br/>
                </div>

              </div>
              <div className="center aligned extra content">
                <Link to="/scheduler">
                  <div className="ui animated basic red button" tabIndex="0">
                    <div className="visible content">Cancel</div>
                    <div className="hidden content">
                      <i className="left arrow icon"></i>
                    </div>
                  </div>
                </Link>
                <div className="ui animated basic green button" tabIndex="0" onClick={this.submit}>
                  <div className="visible content">Confirm</div>
                  <div className="hidden content">
                    <i className="right arrow icon"></i>
                  </div>
                </div>
              </div>
              <br/>
            </div>
          </div>
        ) : (
          <div className="ui centered raised card">
            <div className="center aligned content">
              <p>No chosen date/time.</p>
              <Link to="/scheduler">
                <div className="ui animated basic red button" tabIndex="0">
                  <div className="visible content">Return to Calendar</div>
                  <div className="hidden content">
                    <i className="left arrow icon"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    )
  }
}
