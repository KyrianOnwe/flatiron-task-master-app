Rails.application.routes.draw do
  
  resources :tasks, only: [:index, :create, :update, :destroy, :show]
  resources :users, only: [:index, :show, :create]
  resources :projects, only: [:index, :create, :show, :update, :destroy]
  post "/login", to: "sessions#create"
  get '/auth', to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  delete '/logout', to: "sessions#destroy"
  # crete a route to show projects that have a specific string in title
  get '/search/:title', to: "projects#search"
end
