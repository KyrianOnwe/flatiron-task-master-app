class Task < ApplicationRecord
    belongs_to :user
    belongs_to :project 

    validates :title, presence: true
    validates :due_date, presence: true
    validates :status, presence: true
    validates :user_id, presence: true
    validates :project_id, presence: true 
end
