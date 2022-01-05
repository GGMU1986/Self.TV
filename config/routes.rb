Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show]
    resources :videos, only: [:index, :show, :create, :delete]
    resources :comments, only: [:create, :show, :update, :destroy]
    resources :subscriptions, only: [:create, :destroy]
    resources :views, only: [:create]
    resources :likes, only: [:create, :update]
    resource :session, only: [:create, :destroy]
  end
  root 'static_pages#root'
end
