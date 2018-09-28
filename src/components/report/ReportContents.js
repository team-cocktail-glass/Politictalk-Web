import React, { Component } from 'react';
import './css/ReportContents.css';
import ReportList from './ReportList';
import axios from 'axios';
import {connect} from 'react-redux';

class ReportContents extends Component {
  state = {
    peopleList: null,
  }
  render() {
    return (
      <div className="ReportContents">
        <span className="ReportContents__place"><i className="fas fa-map-marker-alt"></i> <strong>{this.props.location} </strong>정치인</span>
        <div className="ReportContents__List">
          {this.RenderList()}
        </div>
      </div>
    );
  }
  componentDidMount(){
    axios.get(`http://ec2.istruly.sexy:8080/politician/list?region=${this.props.location}&position=null&name=null`).then((res)=> {
      this.setState({
        peopleList: res.data,
      })
    })
  }
  componentDidUpdate(location){
    axios.get(`http://ec2.istruly.sexy:8080/politician/list?region=${this.props.location}&position=null&name=null`).then((res)=> {
      this.setState({
        peopleList: res.data,
      })
    })
  }
  RenderList(){
    if(this.state.peopleList !== null){
      return this.state.peopleList.map(people=>{
        return <ReportList key={people.politicianId} index={people.politicianId} name={people.name} image={people.photo} position={`${people.region} ${people.position}`} party={people.party} Reportposts={5} ReportPeople={35}/>
      })
    }
  }
}
 
function mapStatetoProps(state) {
  return {
    location: state.locationReducer.location,
  }
}

export default connect(mapStatetoProps, null)(ReportContents);