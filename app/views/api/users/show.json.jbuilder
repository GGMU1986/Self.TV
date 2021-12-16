json.extract! @user, :id, :username, :email, :created_at

json.uploads do
  @user.uploaded_videos.each do |upload|
    json.set! upload.id do 
      json.extract! upload, :id, :title, :description, :created_at
      json.photoUrl url_for(upload.photo)
      json.views upload.views.count
    end
  end
end

json.subscriptions do
  json.users_sub_to do 
    @user.subscribed_to.each do |sub|
      json.set! sub.id do 
        json.extract! sub, :id, :username
      end
    end
  end
  json.subs do 
    @user.subscriptions.each do |sub2|
      json.set! sub2.id do 
        json.extract! sub2, :id, :user_id, :subscriber_id
      end
    end
  end
end

json.subscribers @user.subscribers.count

