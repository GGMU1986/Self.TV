
json.extract! @comment, :id, :body, :created_at, :video_id
json.commenter @comment.commenter.username
json.commenter_id @comment.commenter.id