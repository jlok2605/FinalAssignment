
Rails.application.routes.draw do
  resources :books, only: [:index, :show, :create, :destroy]
  resources :users, only: [:new, :create, :index, :show]
  resources :borrowed_books, only: [:create, :destroy, :index]
  resources :users do
    resources :borrowed_books, only: [:index]
  end
  resources :authors, only: [:index, :show, :create]


  root "books#index"
  post '/login' , to: "sessions#create"
  post '/signup', to: 'users#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: "users#show" 
  post '/borrowed_books', to: 'borrowed_books#create'
  delete '/borrowed_books', to: 'borrowed_books#destroy'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

end



#   root "books#index"

#   # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
#   # Can be used by load balancers and uptime monitors to verify that the app is live.
#   get "up" => "rails/health#show", as: :rails_health_check
# end

