class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: :create
    skip_before_action :current_user, only: :create
    skip_before_action :authorized, only: :create
    def index
        render json: current_user, include: :tasks, status: :ok
    end

    def show         
        user = User.find_by_id(session[:user_id])
        render json: user, status: :ok
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
