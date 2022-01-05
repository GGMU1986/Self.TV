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
    
    const { currentUser, uploads, deleteVideo } = this.props
    const joinDate = new Date(currentUser.createdAt).toString().slice(4, 15)

    return (
      <div className="channel-body-container">
        <div className='channel-uploads'>
          {
            uploads.length ? (
                uploads.map(video => <UploadIndexItem
                                        key={video.id} 
                                        currentUser={currentUser}
                                        video={video}
                                        deleteVideo={deleteVideo}
                                      />              
                            )
                            ) : (
                            <div 
                              className="no-uploads"
                            >
                              No uploaded videos...
                            </div>
                              )
                            }
        </div>
        <div className="stats">
          Stats
          <hr />
          <p className="joined">Joined {joinDate}</p> 
          <hr />
          <p className="total-views">{this.totalViews()} views</p>
        </div>
      </div>
    )
  }
};

export default ChannelBody;