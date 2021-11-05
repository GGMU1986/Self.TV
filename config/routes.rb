Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create]
    resources :videos, only: [:index, :show]
    resources :comments, only: [:create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end
  resources :users
  root 'static_pages#root'
end
