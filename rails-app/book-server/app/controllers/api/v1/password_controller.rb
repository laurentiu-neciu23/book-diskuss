class Api::V1::PasswordsController < Devise::PasswordsController
  respond_to :json
  
  def create
    self.resource = resource_class.send_reset_password_instructions(permitted_params)
    yield resource if block_given?
    
    render_resource resource
  end
  
  def update
    self.resource = resource_class.reset_password_by_token(permitted_params)
    yield resource if block_given?
    render_resource resource
  end
  
  private
  
  def permitted_params
    resource_params.permit([:email, :password, :password_confirmation, :reset_password_token])
  end
end  