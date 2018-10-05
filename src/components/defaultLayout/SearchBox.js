import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/SearchBox.css';
import {changeLocation} from '../../core/redux/actions/locationAction';
import axios from 'axios';

class SearchBox extends Component {
  constructor(){
    super();
    this.state = {
      context: ''
    }
    this.SendRequest = this.SendRequest.bind(this)
  }
  render() { 
    return (
      <form className="SearchBox" onSubmit={(event)=>this.SendRequest(event)}>
        <div className="SearchBox__contents">
          <input type="text" className="SearchBox__contents__input" onChange={(e)=>this.setState({context: e.target.value})}
          placeholder="정치인 이름이나 지역구를 적어주세요. ex) 서울시 강남구, 홍길동"
          />
          <button type="submit" className="SearchBox__contents__btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    );
  }
  SendRequest(e){
    const {context} = this.state;
    axios.get(`http://ec2.istruly.sexy:8080/politician/list?region=${context}&position=null&name=null`).then((res)=> {
      this.props.changeLocation(context, res.data);
    })
    e.preventDefault();
  }
}

function mapStatetoProps(state) {
  return {
    location: state.locationReducer.location,
  }
}

function mapDispatchtoProps(dispatch) {
  return {
    changeLocation: (location, peopleList) => dispatch(changeLocation(location, peopleList)),
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SearchBox);