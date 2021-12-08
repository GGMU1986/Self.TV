@user.uploaded_videos.each do |upload|
  json.set! upload.id do 
    json.extract! upload, :id, :title, :description, :created_at
    json.photoUrl url_for(upload.photo)
    json.views upload.views.count
  end
end

json.subscribers @user.subscribers.count
json.subscriptions @user.subscriptions
