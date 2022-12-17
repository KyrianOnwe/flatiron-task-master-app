class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authenticate_user
  before_action :current_user
  before_action :authorized

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def current_user
    @current_user ||= User.find_by_id(session[:user_id]) #memoization to make as few calls to db as possible; use to implement authentication
  end

  def authorized 
    return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end


  private

  def authenticate_user
    return render json: { errors: {User: "Not Authorized"}}, status: :unauthorized unless current_user
  end

  def is_authorized?
    permitted = current_user.admin? || @task.user_id == current_user.id
    render json: {errors: {User: "does not have admin or user priviledges"}}, status: :forbidden unless permitted
  end

  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors},status: :unprocessable_entity
  end 

  def render_not_found(error)
    #confiure the response to work with the error handleng we have on the frontend. 
    render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end 

end
