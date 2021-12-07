import React from 'react';
import UploadIndexItem from './upload_index_item';

class ChannelBody extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    const { currentUser } = this.props
    const joinDate = new Date(currentUser.createdAt).toString().slice(4, 15)
    // console.log(currentUser.uploads)
    // console.log(currentUser)
    return (
      <div className="channel-body-container">
        <div className="stats">
          Stats
          <hr />
          <p className="joined">Joined {joinDate}</p> 
          <hr />
        </div>
        {/* <div className='channel-uploads'>
          {
            currentUser.uploads ? (
              Object.values(currentUser.uploads)
                .map(video => <UploadIndexItem 
                                video={video}
                              />              
                    )
            ) : (
              <div>No uploaded videos...</div>
            )
          }
        </div> */}
      </div>
    )
  }
};

export default ChannelBody;