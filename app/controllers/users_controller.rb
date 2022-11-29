class UsersController < ApplicationController
    def index
        # byebug
        us = User.all 
        render json: us, include: :tasks
    end

    def show 
        user = User.find_by(id: params[:id])
        if user.tasks == []
            render json: user
        else 
            render json: user, include: :tasks
        end
    end

    def create 
        user = User.create(user_params)
        render json: user

    end

    private 
    def user_params
        params.permit(:name, :role, :password, :email)
    end

end
