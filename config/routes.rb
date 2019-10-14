Rails.application.routes.draw do
  get 'fs_orders/find' => 'fs_orders#find'
  get 'fs_orders/empty' => 'fs_orders#empty'
  get 'fs_orders/quit' => 'fs_orders#quit'
  resources :fs_orders
  devise_for :users
  devise_scope :user do
    get '/signout', to: 'devise/sessions#destroy', as: :signout
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'fs_orders#find'
end
