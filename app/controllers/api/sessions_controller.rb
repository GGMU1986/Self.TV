class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render :show
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end