import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Calendar from './Calendar';
import Confirm from './Confirm';
import './index.css';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
    this.state = {
      date : new Date(),
      time : new Date()
    }
  }

  render() {
    return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/confirm">
              <Confirm date = {this.state.date}/>
            </Route>
            <Route path="/">
              <Calendar setDate = {this.setDate}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  setDate(selectedDate) {
    this.setState({date : selectedDate});
  }



}
