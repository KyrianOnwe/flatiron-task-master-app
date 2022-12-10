class ProjectSerializer < ActiveModel::Serializer
  attributes :title, :tasks
  
  has_many :tasks
end
