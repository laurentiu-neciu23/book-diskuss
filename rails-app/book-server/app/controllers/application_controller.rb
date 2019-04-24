class ApplicationController < ActionController::API

  def render_resource(resource)
    if resource.errors.empty?
      render jsonapi: resource
    else
      validation_error(resource)
    end
  end
  
  def validation_error(resource)
    render json: {
    errors: resource.errors.messages
    }, status: :bad_request
  end
  
end
