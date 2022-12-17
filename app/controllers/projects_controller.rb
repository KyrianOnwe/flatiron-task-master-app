class ProjectsController < ApplicationController
    before_action :find_project, only: [:show, :update, :destroy]
    before_action :is_authorized?, only: [:create]
    before_action :is_owner?, only: [:update, :destroy]
    def index 
        proj = Project.all
        render json: proj, include: :tasks
    end

    # def show
    #     render json: @project, status: :ok
    # end

    def create 
        project = Project.create!(project_params)
        render json: project, status: :created
    end

    def update
        @project.update!(project_params)
        render json: @project, status: :ok

    end

    def destroy
        @project.destroy
        head :no_content
    end

    def showx
        proj = Project.find_by(due_date: params[:due_date])
        render json: proj, status: :ok
    end

    def search
        # byebug
        # search for projects with terms provided and have those terms be a part of the title
        # use params to get the typed in info
        # byebug
        project = Project.select {|p| p.title.include?(project_params[:title])}
        # chek for matching data with those params included
        render json: project, status: :ok
    end



    private
    def project_params
        params.permit(:title)
    end

    def find_project
        @project = Project.find(params[:id])
    end

    def is_owner?
        permitted = @project.tasks.user_id == current_user.id || current_user.admin
        render json: {errors: {User: "does not have permission to update this project"}}, status: :forbidden unless permitted
    end


end
