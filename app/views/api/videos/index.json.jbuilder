@videos.each do |video| 
  json.set! video.id do
    json.uploader video.uploader.username
    json.subCount video.uploader.subscribers.count
    #json.videoUrl url_for(video.video)
    json.uploader_id video.uploader.id
    #json.photoUrl url_for(video.photo)
    json.extract! video, :id, :title, :description, :created_at
    json.views video.views.length
  end
end