
json.extract! @comment, :id, :body, :created_at
json.commenter @comment.commenter.username