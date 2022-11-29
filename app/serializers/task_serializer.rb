class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :due_date, :status, :user_id, :project_id, :complete, :user
  # belongs_to :project
end
