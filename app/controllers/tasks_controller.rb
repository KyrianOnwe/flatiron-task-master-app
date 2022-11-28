class TasksController < ApplicationController
    def index 
        tas = Task.all
        render json: tas
    end
end
