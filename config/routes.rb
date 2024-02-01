Rails.application.routes.draw do

  resources :books, only: [:index, :show, :create, :destroy, :new]
  resources :users, only: [:new, :create, :index, :show]
  resources :borrowed_books, only: [:create, :destroy]
  resources :users do
    resources :borrowed_books, only: [:index]
  end
  root "books#index"
  get '/user', to: 'users#index'
  get '/user/sign_up', to: 'users#new', as: 'new_user_registration'
  get '/user/sign_up', to: 'users#create' , as: 'user_registration'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

end
