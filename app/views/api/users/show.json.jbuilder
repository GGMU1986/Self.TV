json.uploads do
  @user.uploaded_videos.each do |upload|
    json.set! upload.id do 
      json.extract! upload, :id, :title, :description, :created_at
      json.photoUrl url_for(upload.photo)
      json.views upload.views.count
    end
  end
end

json.subscribers @user.subscribers.count

json.subscriptions do 
  @user.subscribed_to.each do |sub|
    json.set! sub.id do 
      json.extract! sub, :id, :username
    end
  end
end