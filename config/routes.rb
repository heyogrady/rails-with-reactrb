Rails.application.routes.draw do
  mount ReactiveRecord::Engine => '/rr'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/home/show" => "home#show"
end
