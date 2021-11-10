class AddNewIndexToLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:liker_id, :video_id], unique: true
  end
end
