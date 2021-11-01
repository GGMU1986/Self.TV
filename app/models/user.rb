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
  
  has_one_attached :photo

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
