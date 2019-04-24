class Api::V1::ReviewsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Review.all, includes: :user
  end

  def create
    review = Review.assign_attributes(permitted_params)
    if review.save
      render json: review
    else
      validation_error(review)
    end
  end

  def show
  end

  def update
  end

  def destroy
  end

  private
  def permitted_params
    params.require(:review).permit(:book_title, :content)
  end

end
