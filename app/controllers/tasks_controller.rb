class TasksController < ApplicationController
    def index 
        # byebug
        tasks = Task.all
        render json: tasks, include: ['user', 'project']
    end

    def create
         task = Task.create(task_params)
         render json: task, status: :created
    end

    def show 
        t =  Task.find(params[:id])
        if t == []
            render json: "Nothing to display"
        else
            render json: t, include: :users
        end
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
