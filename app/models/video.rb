# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  duration    :float            not null
#  description :text
#  uploader_id :integer          not null
#  channel_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord

  validates :title, presence: true
  validates :title, length: { maximum: 70 }

  belongs_to :uploader,
    foreign_key: :uploader_id,
    class_name: :User
  
  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

  has_many :comments,
    foreign_key: :video_id,
    class_name: :Comment

  has_one_attached :video
  has_one_attached :photo
end
