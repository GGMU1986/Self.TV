# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer          not null
#  video_id   :integer          not null
#  dislike    :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord

  belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video
  
    belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User

end
