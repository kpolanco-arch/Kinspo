Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: {format: :json} do
      resources :users
      resource :session, only: [:create, :destroy, :show]
      resources :pins
      resources :savepins
      resources :boards
      resources :follows, only:[:create, :destroy, :index]

  end
root to: "static_pages#root"
end
