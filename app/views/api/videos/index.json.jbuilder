@videos.each do |video| 
  json.set! video.id do
    json.channel video.channel.name
    json.photoUrl url_for(video.photo)
    json.extract! video, :id, :title, :views, :description, :created_at
  end
end