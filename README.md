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

Setting up this modal was exciting because it allows the user to share their own videos, including a title and description, on the Self.TV app. Setting up this feature required better understanding of the backend, and researching about AWS S3 file storage, the migrations associated with the AWS S3 technology and how it interacts with my rails models, specifically my Video model. 

I also gained a much better understanding of Modal rendering under the React/Redux framework, specifically how to create a Modal component and use a switch operator to render different modals when separate event handlers are triggered. CSS styling was also an initial challenge but I was able to get over those obstacles through reading documentation/online resources, especially with flexbox, Font Awesome Icons and the organization of stylesheets.

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

### Video Show Side

A staple of the actual YouTube experience is the side bar of videos that is shown to the right of the main video you are watching. This feature keeps the app interesting as there is always new videos to peak a user's interest. I knew this had to be part of Self.TV. 

<img width="1609" alt="Screen Shot 2021-11-12 at 7 58 31 AM" src="https://user-images.githubusercontent.com/8636103/141472185-f5f3356e-0286-4aa0-ac75-a38ac3011515.png">

When a user initially clicks on a video, they are brought to that video's show page, on the right side of the page the user can click on another video and be brought to that video's show page.

A big challenge included styling. I made great use of flexbox in order to get the correct margins and spacing for the video show page. 

I also has a challenge with my reducers and how they were updating my redux state. When clicking on another video, I did not have access to the photoUrl of all the other videos in my state, as I was only fetching that data from the database upon my index page mounting to the DOM. I then would lose that information when routing to the video show page. This would leave the thumbnail for the side bar videos blank when switching to another video show page. Another challenge was that I would have all the comments for any video in my state and they would render on the page for all videos, regardless of the video id that they were associated with.

My solution to the first problem was to refactor my backend jbuilder files. I included the photoUrls for all videos when fetching information for a single video. This allowed me to render the thmbnails of all other videos when routing to another video show page using the side bar.

The way I tackled the comments problem was to not merge my new state of comments with my old state in my comments reducer. This allowed for only having the comments associated with a prticular video id in my state at any given time.

The solutions to the above two problems gave me a much better understsnding of the redux cycle and how my state should be manipulated to achieve the correct rendering of React compoenents. 

Upcoming features
----------------------------------------------------------------------------------------------------------------------------------------------------------------
  * like/dislike videos/comments
  * Drag and drop video files for upload
  * Updated search functionality
  * Edit account information
  * Edit comments


