class Api::VideosController < ApplicationController
  
  def index
    @videos = Video.all

    render :index
  end

  def show
    @video = Video.includes(:comments).find_by(id: params[:id])

    render :show
  end

  def create
    debugger
    @video = Video.create(video_params)
    debugger
    @video.uploader_id = current_user.id
    @video.channel_id = 1
    debugger
     if @video.save
      render :info
     else
      render json: @video.errors.full_messages, status: 422
     end
  end

  def destroy
    #debugger
    @video = Video.find_by(id: params[:id])
    #debugger
    @video.destroy
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :video, :photo)
  end
end

