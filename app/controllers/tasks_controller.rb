class TasksController < ApplicationController
    def index 
        tas = Task.all
        render json: tas
    end

    def create
         task = Task.create(task_params)
         render json: task, status: :created

    end

    def update 

    end

    def delete 

    end

    private

    def task_params 
        params.permit(:title, :due_date, :status, :user_id, :project_id, :complete)
    end
end
