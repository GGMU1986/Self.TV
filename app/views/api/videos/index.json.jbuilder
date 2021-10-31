@videos.each do |video| 
  json.set! video.id do
    json.extract! video, :id, :title, :duration, :description
  end
end