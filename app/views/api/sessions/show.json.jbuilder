json.extract! @user, :id, :username, :email
json.imgUrl url_for(@user.prof_pic) if @user.prof_pic.attached?