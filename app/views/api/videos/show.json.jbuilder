json.extract! @video, :id, :title, :duration, :description
json.videoUrl url_for(@video.video)