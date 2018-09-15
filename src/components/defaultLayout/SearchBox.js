import React, { Component } from 'react';
import './css/SearchBox.css';
import axios from 'axios';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: '',
    };
  }
  render() { 
    const {context} = this.state;
    return (
      <div className="SearchBox">
        <div className="SearchBox__contents">
          <input type="text" className="SearchBox__contents__input" value={context} onChange={(e)=>this.setState({context:e.target.value})}
          placeholder="정치인 이름이나 지역구를 적어주세요. ex) 서울시 강남구, 홍길동"
          />
          <div className="SearchBox__contents__btn" onClick={()=>this.SendRequest(context)}>
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
    );
  }
  SendRequest(context){
    axios.post('', 
    {text:context},
  ).then(data=>{
    if(data.status === 200){
      console.log()
    }
  })
  }
}
 
export default SearchBox;