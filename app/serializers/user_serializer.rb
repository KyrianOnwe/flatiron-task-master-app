class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :role, :password, :email
  has_many :tasks
  
end
