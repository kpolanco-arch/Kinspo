# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri'
require 'open-uri'
# OpenURI::Buffer.send :remove_const, 'StringMax' if OpenURI::Buffer.const_defined?('StringMax')
# OpenURI::Buffer.const_set 'StringMax', 0

User.destroy_all
Board.destroy_all
Pin.destroy_all
Savepin.destroy_all









user1 = User.create(email: 'hi@gmail.com', password: 'password')
user2 = User.create(email: 'natalie@gmail.com', password: 'password')
user3 = User.create(email: 'DEMO@gmail.com', password: 'password', username: 'demo_user')

board1 = Board.create(name: "Things I like...", creator_id: user3.id)
board2 = Board.create(name: "All the Cats", creator_id: user3.id)

pin1 = Pin.create(title: 'catpin', creator_id: user3.id, board_id: board2.id, description: "this is a cat pin", image_url: "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg")
pin2 = Pin.create(title: 'Glass Pavilion at Toledo Museum, Toledo USA – SANAA', creator_id: user2.id,  board_id: board1.id,description: "The annex to the Toledo Museum of Art is both an exhibition space for the museum’s glass collection, and a glass making facility.",image_url: "https://i.pinimg.com/564x/ee/37/20/ee372076574a0599980a10b144d12d72.jpg")
pin3 = Pin.create(title: 'Daylight-Award 2010 pour les thermes de Vals - Prix darchitecture le mieux doté en Suisse pour Peter Zumthor', creator_id: user2.id,  board_id: board2.id,description: "Zumthor contrôle lumière et obscurité d'une manière merveilleuse et en crée une oeuvre grandiose qui peut d'ores et déjà être considérée comme classique.", image_url: "https://i.pinimg.com/564x/8e/7d/81/8e7d81dc912c3bee67b0b1e40c548623.jpg" )
pin4 = Pin.create(title: 'Carlo Scarpa -- Gipsoteca Canoviana', creator_id: user3.id,  board_id: board1.id,description: ".", image_url: "https://i.pinimg.com/564x/f6/bd/8c/f6bd8c0bd1019faa794ff8a163bf3de0.jpg" )
pin5 = Pin.create(title: 'Tate Modern · London, UK - IGNANT', creator_id: user2.id,  board_id: board1.id,description: "Two decades ago, Swiss architects Herzog & de Meuron converted a former power plant in London into the awe-inspiring gallery", image_url: "https://i.pinimg.com/564x/1d/81/25/1d81259c004a31aba5f8e01505f54584.jpg" )
pin6 = Pin.create(title: 'Kunsthaus, Bregenz', creator_id: user2.id,  board_id: board2.id,description: "Two decades ago, Swiss architects Herzog & de Meuron converted a former power plant in London into the awe-inspiring gallery", image_url: "https://i.pinimg.com/564x/cb/e4/74/cbe474599dc195272ceff87c3a184032.jpg" )

savepin1 = Savepin.create(board_id: board2.id, pin_id: pin1.id)

pin7 = Pin.create(title: 'boxes and partitions', creator_id: user3.id, board_id: board2.id, description: "Image 11 of 13 from gallery of Huaxin Business Center / Scenic Architecture. Photograph by Scenic Architecture", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/131b747287785ee61e16010ec34f7101.jpeg')
pin7.photo.attach(io: file, filename: 'some_file.jpg')

pin8 = Pin.create(title: 'Life In Red Circle 1', creator_id: user3.id, board_id: board2.id, description: "Photo by Büşra Tüz on behance Illustration,Architecture,Graphic Design", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/26e4191984ba891215acc3ff2b8e4487.jpeg')
pin8.photo.attach(io: file, filename: 'some_file.jpg')

pin9 = Pin.create(title: '5 Stone Wall Textures Vol.2', creator_id: user3.id, board_id: board2.id, description: "I'm glad to introduce the second collection of high-resolution stone textures, perfect to use in either print or web projects...", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/284dfe5917fcbdf5fb23f50b48090c91.jpeg')
pin9.photo.attach(io: file, filename: 'some_file.jpg')

pin10 = Pin.create(title: 'KoozArch', creator_id: user3.id, board_id: board2.id, description: "Touched / Untouched - KooZA/rch", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/33fec67b4ad296d1e98f59bc2ef554ed.jpeg')
pin10.photo.attach(io: file, filename: 'some_file.jpg')