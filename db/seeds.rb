# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# 100.times do
#     Book.create(
#       title: Faker::Book.title,
#       genre: Faker::Book.genre,
#       yearpublished: rand(1500..2024), # Adjust the range as needed
#       author_id: rand(1..7), # Assuming you have 7 authors
#       quantity: rand(1..5)
#     )
# end