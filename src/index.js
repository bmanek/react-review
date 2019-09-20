// clean slate

import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Marcus" />
      <CommentDetail author="Adrian" />
      <CommentDetail author="Lucille" />
      <CommentDetail author="Jerome" />
      <CommentDetail author="Marnice" />
      <CommentDetail author="Alex" />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
