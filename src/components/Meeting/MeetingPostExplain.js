import React, { Component } from 'react';
import './css/MeetingPostExplain.css';
import axios from 'axios';

class MeetingPostExplain extends Component {
  constructor(){
    super();
    this.state = {
      name:"",
      image: '',
      position:"",
      ReportPeople:35,
      date: "2018.06.02"
    }
  }
  render() { 
    const {name, image, position,MeetingPeople } = this.state;
    const {title, anthor, date} = this.props;
    return (
      <div className="MeetingPostExplain">
        <div className="MeetingPostExplain MeetingPeople">
        <div className="MeetingPostExplain MeetingPeople__profile">
          <div className="MeetingPostExplain MeetingPeople__profile__img" style={{width:'125px',height:'125px',backgroundSize:'125px',
            backgroundImage:`url(${image})`}}></div>
            <span className="MeetingPostExplain MeetingPeople__profile__name">{name} 의원</span><br/>
            {position}
          </div>
          <div className="MeetingPostExplain__explain">
            {title}<br/>
            <span><i className="fas fa-users"></i>{MeetingPeople}</span>
            <div className="MeetingPostExplain__explain__date">
              {date}<br/>
              {anthor}
            </div>
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
 
export default MeetingPostExplain;