json.video do
  json.extract! @video, :id, :title, :duration, :description
end

json.comments do 
  @video.comments.each do |comment|
    json.set! comment.id do 
      json.extract! comment, :id, :body, :created_at, :video_id
      json.commenter comment.commenter.username
    end
  end
end
