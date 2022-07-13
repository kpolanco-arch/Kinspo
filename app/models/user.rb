# require 'bcrypt-ruby'
class User < ApplicationRecord
attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :pins, 
  primary_key: :id, 
  foreign_key: :creator_id, 
  class_name: :Pin

  has_many :boards, 
  primary_key: :id, 
  foreign_key: :creator_id, 
  class_name: :Board

  has_many :saved,
  primary_key: :id, 
  foreign_key: :creator_id, 
  class_name: :Savepin

  has_many :saved,
  primary_key: :id, 
  foreign_key: :user_id, 
  class_name: :Savepin

  def self.find_by_credentials(email, password)
    # debugger
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password

  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
    
  def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
  end

end