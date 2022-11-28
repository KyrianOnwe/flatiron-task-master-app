class ProjectsController < ApplicationController
    def index 
        proj = Project.all
        render json: proj
    end
end
