class CreateSubscription < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
    t.integer :subscriber_id, null: false
    t.integer :user_id, null: false
    end
    add_index :subscriptions, :subscriber_id
    add_index :subscriptions, :user_id
  end
end
