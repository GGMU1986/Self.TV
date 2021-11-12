# == Schema Information
#
# Table name: views
#
#  id         :bigint           not null, primary key
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class View < ApplicationRecord
  # debugger
  # validates :video_id, presence: true

  belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video 
end
