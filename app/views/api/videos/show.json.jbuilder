
json.extract! @video, :id, :title, :duration, :description

@video.comments.each do |comment|
  json.comments do
    json.set! comment.id do 
      json.extract! comment, :id, :body, :created_at
      json.commenter comment.commenter.username
    end
  end
end
