class Task < ApplicationRecord
    belongs_to :user
    belongs_to :project 

    validates :title, presence: true, :due_date, presence: true, :status, presence: true, :user_id, presence: true, :project_id, presence: true, 
end
