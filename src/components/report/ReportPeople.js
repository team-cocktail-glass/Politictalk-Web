import React, { Component } from 'react';
import './css/ReportPeople.css';
import axios from 'axios';

class ReportPeople extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      education:'',
      image: '',
      position:"",
      party:"",
      Reportposts:5,
      ReportPeople:35,
    }
  }
  render() {
    const {uuid} = this.props;
    const {name, education, image, position, party, Reportposts, ReportPeople} = this.state;
    return (
      <div className="ReportPeople">
        <div className="ReportPeople__profile">
          <div className="ReportPeople__profile__img" style={{width:'125px',height:'125px',backgroundSize:'125px',
            backgroundImage:`url(${image})`}}></div>
          <span className="ReportPeople__profile__name">{name} 의원</span><br/>
          {position}
        </div>
        <div className="ReportPeople__explain">
          정당 - {party}<br/>
          최종학력 - {education}
          <div className="ReportPeople__explain__subexplan">
            <i className="fas fa-fire"></i>{Reportposts}건 <i className="fas fa-users"></i>{ReportPeople}명
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
 
export default ReportPeople;