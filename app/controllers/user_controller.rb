class UserController < ApplicationController
    def index 
        us = User.all
        render json: us
    end
end
