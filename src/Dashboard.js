import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'react-day-picker/lib/style.css';
import Calendar from './Calendar';
import Confirm from './Confirm';
import './index.css';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
    this.setTime = this.setTime.bind(this);
    this.state = {
      date : undefined,
      time : undefined
    }
  }

  render() {
    // console.log(this.state.date);
    return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/scheduler/confirm">
              <Confirm date = {this.state.date} time = {this.state.time}/>
            </Route>
            <Route path="/scheduler">
              <Calendar setDate = {this.setDate} setTime = {this.setTime}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  setDate(selectedDate) {
    this.setState({date : selectedDate});
  }

  setTime(selectedTime) {
    this.setState({time : selectedTime});
  }

}
