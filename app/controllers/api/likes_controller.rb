class Api::LikesController < ApplicationController
  def create
    @like = Like.new()
    @like.like_id = current_user.id
    @like.video_id = params[:videoId].to_i
    @like.save
  end

  def destroy
    @like = current_user.likes.find_by(id: params[:id])

    if @like
      @like.destroy
    end
  end
end