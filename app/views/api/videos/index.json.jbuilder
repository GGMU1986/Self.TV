@videos.each do |video| 
  json.set! video.id do
    json.photoUrl url_for(video.photo)
    json.extract! video, :id, :title, :duration, :description
  end
end