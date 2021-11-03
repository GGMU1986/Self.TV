class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false, limit: 10000
      t.integer :commenter_id, null: false 
      t.integer :video_id, null: false 
      t.integer :parent_comment_id 

      t.timestamps
    end
    add_index :comments, :commenter_id
    add_index :comments, :video_id
    add_index :comments, :parent_comment_id
  end
end