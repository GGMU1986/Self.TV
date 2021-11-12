Welcome to Self.TV
=================================================================================================================================================================

Overview
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

Self.TV is a pixel-perfect clone of YouTube that allows users to scroll through an index of thumbnails, titles, and view counts to find an interesting video to watch. Upon clicking that thumbnail, users are brought to a video show page where they can watch the video, read a description about it, see how many likes (or dislikes) it has and read comments about the video left by other users. Once a user has set up an account they can also leave comments and likes on videos, as well as upload videos of their own for other users to enjoy and leave feedback! 

Live Demo
------------------------------------------------------------------------------------------------------------------------------------------------------------------
[Try the Self.TV live link here!](https://selfdottv.herokuapp.com/#/)\
Create an account or sign in as a demo user for the full Self.TV experience.

Technologies
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
  * Backend:
     * Ruby on Rails
     * PostgreSQL
  
  * Frontend:
     * React
     * Redux
     * HTML 5
     * SCSS

  * Resources:
    * Google Fonts
    * Font Awesome Icons 
  
  * AWS S3 for file storage

  * Heroku for hosting


Features
----------------------------------------------------------------------------------------------------------------------------------------------------------------
### Upload Modal

Setting up this modal was exciting because it allows the user to share their own videos, including a title and description, on the Self.TV app. Setting up this feature required better understanding of the backend, and researching about AWS S3 file storage, the migrations associated with this technology and how it interacts with my rails models, specifically my Video model. 

There was also a challenge on the frontend. To mirror the uploading feature of YouTube, I needed to set up two parts to my upload modal. Part 1 of the modal would appear first and allow the user to choose their own video, upon successful selection of a video file, part 1 would disappear and part 2 would appear, allowing the user to choose a title, description and thumbnail photo. A publish button on the lower right of part 2 would persist the video file to the database and redirect the user to the Video Index page, where their new video would appear for viewing. 

#### Upload Modal Part 1
<img width="1095" alt="Screen Shot 2021-11-12 at 6 50 53 AM" src="https://user-images.githubusercontent.com/8636103/141462839-6525a178-ffb7-4d2e-99c1-019f5ed5053b.png">

#### Upload Modal Part 2
<img width="951" alt="Screen Shot 2021-11-12 at 6 56 17 AM" src="https://user-images.githubusercontent.com/8636103/141463492-7020c4b0-25c5-4ce0-8875-6d413dcd88d7.png">

The use of a ternary operator allowed me to accomplish rendering part 1 and then part 2. If there was no videoFile in my current state then part 1 would render, once the user successfully selected a videoFile, then part 2 would render. See code snippet below: 

```javascript
render() {
    const { closeModal } = this.props;
    const { videoFile, title, videoUrl, photoUrl } = this.state;
    const part = !videoFile ? (
      <UploadPart1 
        handleFile={this.handleFile} 
        closeModal={closeModal}
      />
    ) : (
      <UploadPart2 
        closeModal={closeModal}
        handleInput={this.handleInput}
        fileInputType={this.fileInputType}
        handleThumbnail={this.handleThumbnail}
        handleSubmit={this.handleSubmit}
        photoFile={this.state.photoFile}
        title={title}
        videoUrl={videoUrl}
        photoUrl={photoUrl}
      />
    )
    return (
      <div>{part}</div>
    )
```




Upcoming features
----------------------------------------------------------------------------------------------------------------------------------------------------------------
  * Subscriptions
  * like/dislike videos/comments
  * Drag and drop video files for upload
  * Search functionality
  * Create Channel/User Show page
  * Edit account information
  * Edit comments


