// clean slate

import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Marcus" time="15 minutes ago" avatar={faker.image.avatar()}  commentText="Cool!"/>
      <CommentDetail author="Adrian" time="22 minutes ago" avatar={faker.image.avatar()} commentText="Nice stuff!"/>
      <CommentDetail author="Lucille" time="38 minutes ago" avatar={faker.image.avatar()} commentText="Dig it!"/>
      <CommentDetail author="Jerome" time="58 minutes ago" avatar={faker.image.avatar()} commentText="Cool!"/>
      <CommentDetail author="Marnice" time="4 hours ago" avatar={faker.image.avatar()} commentText="Dope!"/>
      <CommentDetail author="Alex" time="2 days ago" avatar={faker.image.avatar()} commentText="Cool!"/>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
