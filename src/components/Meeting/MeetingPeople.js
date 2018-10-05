import React, { Component } from 'react';
import './css/MeetingPeople.css';
import axios from 'axios';

class MeetingPeople extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      education:'',
      image: '',
      position:"",
      party:"",
      MeetingPeople:35,
    }
  }
  render() {
    const {uuid} = this.props;
    const {name, education, image, position, party, MeetingPeople, Meetingposts} = this.state;
    return (
      <div className="MeetingPeople">
        <div className="MeetingPeople__profile">
          <div className="MeetingPeople__profile__img" style={{width:'125px',height:'125px',backgroundSize:'125px',
            backgroundImage:`url(${image})`}}></div>
          <span className="MeetingPeople__profile__name">{name} 의원</span><br/>
          {position}
        </div>
        <div className="MeetingPeople__explain">
          정당 - {party}<br/>
          최종학력 - {education} 
          <div className="MeetingPeople__explain__subexplan">
            <i className="fas fa-users"></i>{MeetingPeople}명
          </div>
        </div>
      </div>
    );
  }
  componentDidMount(){
    axios.get('http://ec2.istruly.sexy:8080/politician', {
      params: {'politicianId': this.props.uuid}
    }).then(res=> {
      const {name, education, photo, region, position, party} = res.data;
      this.setState({
        name,
        education,
        image: photo,
        position: `${region} ${position}`,
        party,
      })
    })
  }
}
 
export default MeetingPeople;