# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, :email, :password_digest, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password

  has_many :uploaded_videos,
    foreign_key: :uploader_id,
    class_name: :Video
  
  has_many :comments,
    foreign_key: :commenter_id,
    class_name: :Comment

  has_many :likes,
    foreign_key: :liker_id,
    class_name: :Like
  
  has_many :liked_uploads,
    through: :uploaded_videos,
    source: :likes

  #######################
  # Subs Logic, See Subscription Model

  has_many :received_subs,
    foreign_key: :user_id,
    class_name: :Subscription

  has_many :subscribers,
    through: :received_subs,
    source: :subscriber

  has_many :subscriptions,
    foreign_key: :subscriber_id,
    class_name: :Subscription

  has_many :subscribed_to,
    through: :subscriptions,
    source: :channel_owner

  ##############################

  has_one_attached :prof_pic

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    obj = BCrypt::Password.new(password_digest)

    obj.is_password?(password)
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def reset_session_token!
      self.session_token = SecureRandom::urlsafe_base64
      self.save
      self.session_token
  end

  def ensure_session_token
      self.session_token ||= SecureRandom::urlsafe_base64
  end
end
