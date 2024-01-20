class UserController < ApplicationController
    resources :users, only [:new, :create]
end