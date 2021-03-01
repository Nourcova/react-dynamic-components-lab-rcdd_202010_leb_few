//your code here
import React, {Component} from 'react';

class Comments extends Component{
  render(){
    return {
      <div className="comment"> 
        {this.props.commentText}
      </div>
    }
  }
}

export default Comments;