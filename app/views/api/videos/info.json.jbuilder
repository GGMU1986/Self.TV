json.video do
  json.extract! @video, :id, :title, :description, :created_at
  json.videoUrl url_for(@video.video)
  json.channel @video.channel.name
  json.views @video.views.count
  json.likes @video.likes
end