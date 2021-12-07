@videos.each do |video| 
  json.set! video.id do
    json.uploader video.uploader.username
    json.photoUrl url_for(video.photo)
    json.extract! video, :id, :title, :description, :created_at
    json.views video.views.length
  end
end