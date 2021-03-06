json.video do
  json.extract! @video, :id, :title, :description, :created_at
  json.subCount @video.uploader.subscribers.count
  json.uploader_id @video.uploader.id
  json.videoUrl url_for(@video.video)
  json.photoUrl url_for(@video.photo)
  json.uploader @video.uploader.username
  json.views @video.views.count
end

json.comments do 
  @video.comments.each do |comment|
    json.set! comment.id do 
      json.extract! comment, :id, :body, :created_at, :video_id
      json.commenter comment.commenter.username
      json.commenter_id comment.commenter.id
    end
  end
end

json.likes do 
  @video.likes.each do |like|
    json.set! like.id do 
      json.extract! like, :id, :liker_id, :video_id, :dislike
    end
  end
end


