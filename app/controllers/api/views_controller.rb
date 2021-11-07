class Api::UsersController < ApplicationController
  
  def create
    @view = View.new(params["video_id"]).to_i
    @view.save
  end

  
end