class Api::ViewsController < ApplicationController
  
  def create

    @view = View.new
    @view.video_id = params["videoId"].to_i
    if @view.save
      render :info
    end
  end

  
end