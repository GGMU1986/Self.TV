class Api::CommentsController < ApplicationController
  def index
    # debugger
    @comments = Video.find_by(id: params[:video_id]).comments
    render :index
  end

  def new
    @comment = Comment.new(comment_params)
  end
  
  def create
  end
  
  def edit
  end
  
  def update
  end
  
  def destroy
  end

  private

  def comment_params
    params.permit(:comment).require(:body)
  end
end