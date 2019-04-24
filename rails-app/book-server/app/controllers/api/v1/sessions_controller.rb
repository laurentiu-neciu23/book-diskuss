
class Api::V1::SessionsController < Devise::SessionsController
  respond_to :json
  
  private
  def verify_signed_out_user
    if all_signed_out?
      render json: {
      message: "Token revoked."
      }, status: :success
    end
  end
  
  def respond_with(resource, _opts = {})
    render_resource resource
  end

  def respond_to_on_destroy
    head :no_content
  end
end   