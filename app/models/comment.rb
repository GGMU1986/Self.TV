# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :text             not null
#  commenter_id      :integer          not null
#  video_id          :integer          not null
#  parent_comment_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord
  validates :body, presence: true
  
  belongs_to :commenter,
    foreign_key: :commenter_id,
    class_name: :User
  
  belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video
  
  belongs_to :parent_comment,
    foreign_key: :parent_comment_id,
    class_name: :Comment,
    optional: true
  
  has_many :replies,
    foreign_key: :parent_comment_id,
    class_name: :Comment
end
