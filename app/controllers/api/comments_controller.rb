class Api::CommentsController < ApplicationController  

  
  def create
    @comment = Comment.new(comment_params)
    @comment.commenter_id = current_user.id
    @comment.video_id = params["videoId"].to_i

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

      render json: ["Only a comments author can delete it"], status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end