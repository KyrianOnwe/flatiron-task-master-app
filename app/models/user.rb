class User < ApplicationRecord
    has_many :tasks 
    has_many :projects, through: :tasks
    
    has_secure_password

    validates :name, presence: true
    validates :password, presence: true
    
end
