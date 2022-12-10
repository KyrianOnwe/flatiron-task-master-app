class ProjectsController < ApplicationController
    before_action :find_project, only: [:show, :update, :destroy]
    before_action :is_authorized?, only: [:create]
    before_action :is_owner?, only: [:update, :destroy]
    def index 
        proj = Project.all
        render json: proj, include: :tasks
    end

    def show
        # project = Project.find(params[:id])
        render json: @project, status: :ok
    end

    def create 
        project = Project.create!(project_params)
        render json: project, status: :created
    end

    def update
        # project = Project.find(params[:id])
        @project.update!(project_params)
        render json: @project, status: :ok

    end

    def destroy
        # project = Project.find(params[:id])
        @project.destroy
        head :no_content
    end

    private
    def project_params
        params.permit(:title, :due_date)
    end

    def find_project
        @project = Project.find(params[:id])
    end

    def is_owner?
        permitted = @project.tasks.user_id == current_user.id || current_user.admin
        render json: {errors: {User: "does not have permission to update this project"}}, status: :forbidden unless permitted
    end
end
