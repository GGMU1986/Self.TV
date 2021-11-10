class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.float :duration, null: false
      t.text :description, limit: 1000
      t.integer :uploader_id, null: false
      t.integer :channel_id, null: false

      t.timestamps
    end
    add_index :videos, :title, unique: true
    add_index :videos, :uploader_id
    add_index :videos, :channel_id
  end
end
