class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :review_title
      t.text :contents
      t.integer :rating
      t.references :user
      
      t.timestamps
    end
  end
end
