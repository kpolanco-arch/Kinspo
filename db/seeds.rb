# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Board.destroy_all
Pin.destroy_all

user1 = User.create(email: 'hi@gmail.com', password: 'password')
user2 = User.create(email: 'natalie@gmail.com', password: 'password')
user3 = User.create(email: 'DEMO@gmail.com', password: 'password')

board1 = Board.create(name: "All the Dogs", creator_id: user1.id)
board2 = Board.create(name: "All the Cats", creator_id: user1.id)

pin1 = Pin.create(title: 'catpin', creator_id: user1.id, board_id: board2.id, description: "this is a cat pin", image_url: "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg")
pin2 = Pin.create(title: 'dogpin', creator_id: user2.id,  board_id: board2.id,description: "this is a dog pin")
