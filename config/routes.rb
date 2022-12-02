Rails.application.routes.draw do
  
  resources :tasks, only: [:index, :create, :update, :delete, :show]
  resources :users, only: [:index, :show, :create]
  resources :projects, only: [:index, :create]
  post "/login", to: "sessions#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  delete '/logout', to: "sessions#destroy"
end
