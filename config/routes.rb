
Rails.application.routes.draw do
  resources :books, only: [:index, :show, :create, :destroy, :new]
  resources :users, only: [:new, :create, :index, :show]
  resources :borrowed_books, only: [:create, :destroy]
  resources :users do
    resources :borrowed_books, only: [:index]
  end
  root "books#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

end

# Rails.application.routes.draw do
#   resources :books, only: [:index, :show, :create, :destroy, :new]
#   resources :users, only: [:new, :create, :index, :show] do 
#     resources :borrowed_books, only: [ ] do
#       post 'borrow_book', on: :member
#     end
#   end


#   root "books#index"

#   # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
#   # Can be used by load balancers and uptime monitors to verify that the app is live.
#   get "up" => "rails/health#show", as: :rails_health_check
# end

