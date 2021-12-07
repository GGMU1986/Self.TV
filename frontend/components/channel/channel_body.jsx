import React from 'react';
import UploadIndexItem from './upload_index_item';

class ChannelBody extends React.Component{
  constructor(props){
    super(props)

    this.totalViews = this.totalViews.bind(this);
  }

  totalViews(){
    let total = 0;
    for (let i = 0; i < this.props.uploads.length; i++) {
      total += this.props.uploads[i].views
    }
    return total; 
  }

  render() {
    
    const { currentUser, uploads } = this.props
    const joinDate = new Date(currentUser.createdAt).toString().slice(4, 15)

    return (
      <div className="channel-body-container">
        <div className="stats">
          Stats
          <hr />
          <p className="joined">Joined {joinDate}</p> 
          <hr />
          <p className="total-views">{this.totalViews()} views</p>
        </div>
        <div className='channel-uploads'>
          {
            uploads.length ? (
                uploads.map(video => <UploadIndexItem
                                        key={video.id} 
                                        video={video}
                                      />              
                            )
                            ) : (
                              <div className="no-uploads">No uploaded videos...</div>
                              )
                            }
          </div>
      </div>
    )
  }
};

export default ChannelBody;