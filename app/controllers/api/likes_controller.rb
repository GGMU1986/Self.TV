class Api::LikesController < ApplicationController
  def create
    # debugger
    @like = Like.new(like_params)
    @like.liker_id = params["like"]["likerId"].to_i
    @like.video_id = params["like"]["videoId"].to_i
    # debugger
    if @like.save
      render :info
    end
  end

  def update
  end

  # def destroysc
  #   @like = current_user.likes.find_by(id: params[:id])

  #   if @like
  #     @like.destroy
  #   end
  # end

  private 

  def like_params
    params.require(:like).permit(:liker_id, :video_id, :dislike)
  end
end