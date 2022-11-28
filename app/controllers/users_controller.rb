class UsersController < ApplicationController
    def index
        us = User.all 
        render json: us
    end

    def show 
        user = User.find_by(id: params[:id])
        render json: user, include: :

    end

    def create 

    end

    private 
    def user_params
        params.permit(:name, :role, :password, :email)
    end

end
