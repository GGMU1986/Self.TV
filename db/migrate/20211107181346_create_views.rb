class CreateViews < ActiveRecord::Migration[5.2]
  def change
    create_table :views do |t|
      t.integer :video_id, null: false
      t.timestamps
    end
    add_index :views, :video_id
  end
end
