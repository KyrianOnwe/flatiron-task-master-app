class ProjectSerializer < ActiveModel::Serializer
  attributes :title, :due_date, :tasks
  
  has_many :tasks
end
