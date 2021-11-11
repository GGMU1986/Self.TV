class Api::LikesController < ApplicationController
  def create
    
    @like = Like.new(like_params)
    @like.liker_id = params["like"]["likerId"].to_i
    @like.video_id = params["like"]["videoId"].to_i
    if @like.save
      render :info
    end
  end

  def update
  end

  private 

  def like_params
    params.require(:like).permit(:liker_id, :video_id, :dislike)
  end
end