import React, { Component } from 'react';
import './css/MeetingContents.css';
import MeetingList from './MeetingList';
import {connect} from 'react-redux';

class MeetingContents extends Component {
  render() {
    return (
      <div className="MeetingContents">
        <span className="MeetingContents__place"><i className="fas fa-map-marker-alt"></i> <strong>{this.props.location} </strong>정치인</span>
        <div className="MeetingContents__List">
          {this.RenderList()}
        </div>
      </div>
    );
  }
  RenderList(){
    if(this.props.peopleList !== null){
      return this.props.peopleList.map(people=>{
        return <MeetingList key={people.politicianId} index={people.politicianId} name={people.name} image={people.photo} position={`${people.region} ${people.position}`} party={people.party} Reportposts={5} ReportPeople={35}/>
      })
    }
  }
}
 
function mapStatetoProps(state) {
  return {
    location: state.locationReducer.location,
    peopleList: state.locationReducer.peopleList,
  }
}

export default connect(mapStatetoProps, null)(MeetingContents);