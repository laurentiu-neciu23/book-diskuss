Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  devise_for :users,
              path: "/api/v1",
              path_names: {
                sign_in: "login",
                sign_out: "logout",
                registration: "signup"
              },
              controllers: {
                sessions: "api/v1/sessions",
                registrations: "api/v1/registrations",
                passwords: "api/v1/passwords"
              }

  namespace :api do
    namespace :v1 do
      resources :reviews
    end
  end
end
