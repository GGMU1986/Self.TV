class Api::LikesController < ApplicationController
  def create
    @like = Like.new()
    @like.like_id = current_user.id
    @like.video_id = params[:videoId].to_i
    @like.save
  end
end