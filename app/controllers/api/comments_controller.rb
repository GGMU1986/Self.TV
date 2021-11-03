class Api::CommentsController < ApplicationController  
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :info
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end
  
  def update
    @comment = current_user.comments.find_by(id: params[:id])

    if @comment && @comment.update(comment_params)
      render :edit
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @comment = current_user.comments.find_by(id: params[:id])

    if @comment 
      @comment.destroy
    else
      render json: ["Only a comments author can delete it"] status: 422
    end
  end

  private

  def comment_params
    params.permit(:comment).require(:body)
  end
end