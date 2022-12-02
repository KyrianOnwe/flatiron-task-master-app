class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :tasks
  has_many :projects, though: :tasks  
end
