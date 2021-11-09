@videos.each do |video| 
  json.set! video.id do
    json.channel video.channel.name
    json.photoUrl 
    json.extract! video, :id, :title, :description, :created_at
    json.views video.views.length
  end
end