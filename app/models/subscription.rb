# == Schema Information
#
# Table name: subscriptions
#
#  id            :bigint           not null, primary key
#  subscriber_id :integer          not null
#  user_id       :integer          not null
#
class Subscription < ApplicationRecord

  belongs_to :channel_owner,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :subscriber,
    foreign_key: :subscriber_id,
    class_name: :User

end
