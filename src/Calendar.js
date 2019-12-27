import React from 'react';
import DayPicker from 'react-day-picker';
import Card from './Card';
import 'react-day-picker/lib/style.css';
import './index.css';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
      times: []
    };
  }

  handleDayClick(day, { selected }) {
    if (selected) {
      this.setState({ selectedDay: undefined });
      this.props.setDate(undefined);
    } else {
      this.setState({selectedDay: day});
      this.props.setDate(day);
      this.listTimes();
    }
  }

  listTimes() {
    var timeList = []
    for (var time = 0; time <= 19800000; time += 1800000) {
      timeList.push(new Date(time));
    }

    this.setState({ times : timeList });
  }

  render() {
    return(
      <div>
        <div className="ui segment">
          <div className="ui centered computer only two column very relaxed grid">
            <div className="center aligned column">
              <DayPicker
                onDayClick={this.handleDayClick}
                selectedDays={this.state.selectedDay}
              />
            </div>
            <div className="column">
              {this.state.selectedDay ? (
                <div>
                  <p>You selected {this.state.selectedDay.toLocaleDateString()}</p>
                  <ul>
                    {this.state.times.map((time) => (
                      <Card time = {time} date = {this.state.selectedDay} setTime = {this.props.setTime} />
                    ))}
                  </ul>
                </div>
              ) : (
                <p>Please select a day.</p>
              )}
            </div>
            <div className="ui vertical divider">
              <i className="right arrow icon"></i>
            </div>
          </div>
          <div className="ui centered mobile only stackable grid">
            <div className="center aligned column">
              <DayPicker
                onDayClick={this.handleDayClick}
                selectedDays={this.state.selectedDay}
              />
            </div>
            <div className="center aligned column">
              {this.state.selectedDay ? (
                <div>
                  <p>You selected {this.state.selectedDay.toLocaleDateString()}</p><br/>
                  <div className="ui center aligned grid">
                    {this.state.times.map((time) => (
                      <Card time = {time} date = {this.state.selectedDay} setTime = {this.props.setTime} />
                    ))}
                  </div><br/><br/>
                </div>
              ) : (
                <div><p>Please select a day.</p><br/></div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
