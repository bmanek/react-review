// clean slate

import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          You ate my cookies. Don't do that!
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Marcus"
          time="15 minutes ago"
          avatar={faker.image.avatar()}  commentText="Cool!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Adrian"
          time="22 minutes ago"
          avatar={faker.image.avatar()} commentText="Nice stuff!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Lucille"
          time="38 minutes ago"
          avatar={faker.image.avatar()} commentText="Dig it!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jerome"
          time="58 minutes ago"
          avatar={faker.image.avatar()} commentText="Cool!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Marnice"
          time="4 hours ago"
          avatar={faker.image.avatar()} commentText="Dope!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          time="2 days ago"
          avatar={faker.image.avatar()} commentText="Cool!"
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
