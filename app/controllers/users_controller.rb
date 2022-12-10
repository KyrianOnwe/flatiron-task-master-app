class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: :create
    def index
        # byebug
        # us = User.all 
        render json: current_user, include: :tasks, status: :ok
    end

    def show         
        user = User.find_by_id(params[:id])
        render json: user, include: :projects
    end

    def create 
        user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: :ok
    end

    private 
    def user_params
        params.permit(:name, :password, :admin)
    end

end
