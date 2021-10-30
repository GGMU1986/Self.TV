class User < ApplicationRecord
  validates :username, :email, :password_digest, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password

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
