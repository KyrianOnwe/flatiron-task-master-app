class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :admin, :tasks
  has_many :tasks
  has_many :projects, through: :tasks  
end
