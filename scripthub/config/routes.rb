Rails.application.routes.draw do
  resources :products
  resources :users
  # Rails is beeing served as an ApplicationController
  # Rails API serves JSON by default, not HTML
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
