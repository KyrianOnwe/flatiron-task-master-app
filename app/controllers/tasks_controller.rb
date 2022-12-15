class TasksController < ApplicationController
    # before_action :is_admin?, only: [:create]
    
    def index 
        # byebug
        tasks = Task.all
        render json: tasks
    end

    def create
        user = User.find_by(name: params[:user_name])
        uid = user.id
        project = Project.find_by(title: params[:project_title])
        pid = project.id
         task = Task.create(title: params[:title], due_date: params[:due_date], status: params[:status], user_id: uid, project_id: pid)
         render json: task, status: :created
    end

    def show 
        t =  Task.find(params[:id])
        if t == {}
            render json: "Nothing to display"
        else
            render json: t, include: :users
        end
    end

    def update
         task = Task.find(params[:id])
         task.update(task_params)
         render json: task
    end

    def destroy 
        task = Task.find_by(id: params[:id])
        if task
          task.destroy
          head :no_content
        else
          render json: { error: "Task not found" }, status: :not_found
        end
    end

    # def showx
    #     tasks = Task.find_by(due_date: params[:due_date])
    #     render json: tasks 
    # end

    private

    def task_params 
        params.permit(:title, :due_date, :status, :user_name, :project_title, :complete)
    end

    def is_admin?
        permitted = current_user.admin
        render json: {errors: {User: "does not have admin priveledges"}}, status: :forbidden unless permitted
    end
end
