# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  about      :text
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Channel < ApplicationRecord
  validates :name, presence: true
  validates :about, length: { maximum: 1000 }

  has_many :videos,
    foreign_key: :channel_id,
    class_name: :Video

end
