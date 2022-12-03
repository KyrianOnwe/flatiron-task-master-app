class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :projects
  has_many :tasks
  has_many :projects, though: :tasks  
end
