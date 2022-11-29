class ProjectsController < ApplicationController
    def index 
        proj = Project.all
        render json: proj, include: :tasks
    end
end
