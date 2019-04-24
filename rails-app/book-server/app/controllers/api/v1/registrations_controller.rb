# frozen_string_literal: true

class Api::V1::RegistrationsController < Devise::RegistrationsController
  
  respond_to :json
  
  def create
    build_resource(sign_up_params)
    resource.save
    render_resource(resource)
  end

  def sign_up_params
    params.permit(:email, :password, :password_confirmation)
end
  
end  