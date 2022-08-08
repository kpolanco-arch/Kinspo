# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
# require 'open-uri'
# OpenURI::Buffer.send :remove_const, 'StringMax' if OpenURI::Buffer.const_defined?('StringMax')
# OpenURI::Buffer.const_set 'StringMax', 0

User.destroy_all
Board.destroy_all
Pin.destroy_all
Savepin.destroy_all









user1 = User.create!(email: 'sam@gmail.com', password: 'password', username: 'Samm11')
user2 = User.create!(email: 'natalie@gmail.com', password: 'password', username: 'Nat_32')
user3 = User.create!(email: 'DEMO@gmail.com', password: 'password', username: 'demo_user')
user4 = User.create!(email: 'maria123@gmail.com', password: 'password', username: 'maria_:)')

board1 = Board.create!(name: "Things I like...", creator_id: user3.id)
board2 = Board.create!(name: "All the Cats", creator_id: user3.id)

pin1 = Pin.create!(title: 'catpin', creator_id: user3.id, board_id: board2.id, description: "this is a cat pin", image_url: "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg")
pin2 = Pin.create!(title: 'Glass Pavilion at Toledo Museum, Toledo USA – SANAA', creator_id: user2.id,  board_id: board1.id,description: "The annex to the Toledo Museum of Art is both an exhibition space for the museum’s glass collection, and a glass making facility.",image_url: "https://i.pinimg.com/564x/ee/37/20/ee372076574a0599980a10b144d12d72.jpg")
pin3 = Pin.create!(title: 'Daylight-Award 2010 pour les thermes de Vals - Prix darchitecture le mieux doté en Suisse pour Peter Zumthor', creator_id: user2.id,  board_id: board2.id,description: "Zumthor contrôle lumière et obscurité d'une manière merveilleuse et en crée une oeuvre grandiose qui peut d'ores et déjà être considérée comme classique.", image_url: "https://i.pinimg.com/564x/8e/7d/81/8e7d81dc912c3bee67b0b1e40c548623.jpg" )
pin4 = Pin.create!(title: 'Carlo Scarpa -- Gipsoteca Canoviana', creator_id: user4.id,  board_id: board1.id,description: ".", image_url: "https://i.pinimg.com/564x/f6/bd/8c/f6bd8c0bd1019faa794ff8a163bf3de0.jpg" )
pin5 = Pin.create!(title: 'Tate Modern · London, UK - IGNANT', creator_id: user2.id,  board_id: board1.id,description: "Two decades ago, Swiss architects Herzog & de Meuron converted a former power plant in London into the awe-inspiring gallery", image_url: "https://i.pinimg.com/564x/1d/81/25/1d81259c004a31aba5f8e01505f54584.jpg" )
pin6 = Pin.create!(title: 'Kunsthaus, Bregenz', creator_id: user1.id,  board_id: board2.id,description: "Two decades ago, Swiss architects Herzog & de Meuron converted a former power plant in London into the awe-inspiring gallery", image_url: "https://i.pinimg.com/564x/cb/e4/74/cbe474599dc195272ceff87c3a184032.jpg" )


pin7 = Pin.create!(title: 'boxes and partitions', creator_id: user3.id, board_id: board2.id, description: "Image 11 of 13 from gallery of Huaxin Business Center / Scenic Architecture. Photograph by Scenic Architecture", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/131b747287785ee61e16010ec34f7101.jpeg')
pin7.photo.attach(io: file, filename: '131b747287785ee61e16010ec34f7101.jpeg')

pin8 = Pin.create!(title: 'A Fraction Of The Whole', creator_id: user2.id, board_id: board2.id, description: "visicert: “ hugh strange architects | hadspen estate | site plan ”", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/26e4191984ba891215acc3ff2b8e4487.jpeg')
pin8.photo.attach(io: file, filename: '26e4191984ba891215acc3ff2b8e4487.jpeg')

pin9 = Pin.create!(title: 'Photoshop for Architecture', creator_id: user3.id, board_id: board2.id, description: "We look at how architects use photoshop for architecture graphics and visuals and show you how to learn the skills in Photoshop by enrolling on our course.", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/284dfe5917fcbdf5fb23f50b48090c91.jpeg')
pin9.photo.attach(io: file, filename: '284dfe5917fcbdf5fb23f50b48090c91.jpeg')

pin10 = Pin.create!(title: 'KoozArch', creator_id: user4.id, board_id: board2.id, description: "Touched / Untouched - KooZA/rch", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/33fec67b4ad296d1e98f59bc2ef554ed.jpeg')
pin10.photo.attach(io: file, filename: '33fec67b4ad296d1e98f59bc2ef554ed.jpeg')

pin11 = Pin.create!(title: 'Ansamblu integrat multifunctional-Serban Voda', creator_id: user4.id, board_id: board2.id, description: "Architecture, REVIT, Adobe Photoshop, Unreal Engine", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/4ca801b1ffb1190f6b7b4999f20ca1ae.jpeg')
pin11.photo.attach(io: file, filename: '4ca801b1ffb1190f6b7b4999f20ca1ae.jpeg')

pin12 = Pin.create!(title:'5 Stone Wall Textures Vol.2', creator_id: user4.id, board_id: board2.id, description: "I'm glad to introduce the second collection of high-resolution stone textures, perfect to use in either print or web projects...", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/672d89be4096e5e4a4e29e3b213258c2.jpeg')
pin12.photo.attach(io: file, filename: '672d89be4096e5e4a4e29e3b213258c2.jpeg')

pin13 = Pin.create!(title: 'Life In Red Circle 1', creator_id: user1.id, board_id: board2.id, description:"Photo by Büşra Tüz on behance Illustration,Architecture,Graphic Design", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/68cdb78fc1d0045487e47e1b180f4289.jpeg')
pin13.photo.attach(io: file, filename: '68cdb78fc1d0045487e47e1b180f4289.jpeg')

pin14 = Pin.create!(title: 'Atlas of Places', creator_id: user2.id, board_id: board2.id, description: "Socialist Industrial Heritage in Albania - Vito Quadrato, Alberto Pice, Daniele Fiore, Silvia De mauro, Pierluigi Ruggeri & Massimiliano C...", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/729fdad857b3f0544f2fd0053effa112.jpeg')
pin14.photo.attach(io: file, filename:'729fdad857b3f0544f2fd0053effa112.jpeg')

pin15 = Pin.create!(title: 'Making stations; collaged studies of new station typologies', creator_id: user3.id, board_id: board2.id, description: "With Kurokawa's city-making workshops in mind, the group collage was revisited, with special attention given to the moments selected earlier. This time, rather than looking into their program…", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/783dca0326f5270066480a3f397ef9e5.jpeg')
pin15.photo.attach(io: file, filename: '783dca0326f5270066480a3f397ef9e5.jpeg')

pin16 = Pin.create!(title: 'shigeru ban integrates concert venue and food hall in réinventer paris proposal', creator_id: user4.id, board_id: board2.id, description: "as part of réinventer paris, japanese architect shigeru ban submitted a proposed design for an area of land in paris' 4th arrondissement.", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/808d6f999bae09a5d94917a8d67aeb46.jpeg')
pin16.photo.attach(io: file, filename: '808d6f999bae09a5d94917a8d67aeb46.jpeg')


pin17 = Pin.create!(title:'ARCHITECTURE+FILM', creator_id: user4.id, board_id: board2.id, description: "Movies and documentaries in which architecture and design have a starring role", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/88b0eacda3418d7d0feec6fec4f540ed.jpeg')
pin17.photo.attach(io: file, filename: '88b0eacda3418d7d0feec6fec4f540ed.jpeg')

pin18 = Pin.create!(title: 'bjarke ingels group presents the reassembled serpentine pavilion in toronto', creator_id: user4.id, board_id: board2.id, description: "bjarke ingels serpentine pavilion toronto opening showcases the reconstruction of 1802 stacked fiberglass units -- the first serpentine in north america", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/9e20432d75cd9948a4131221a01233f3.jpeg')
pin18.photo.attach(io: file, filename: '9e20432d75cd9948a4131221a01233f3.jpeg')

pin19 = Pin.create!(title: 'Aspen Art Museum | Shigeru Ban Architects', creator_id: user4.id, board_id: board2.id, description: "The New Aspen Art MuseumLocated on the corner of South Spring Street and East Hyman Avenue in Aspen's downtown core, the new AAM is Shigeru...", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/arch1.jpeg')
pin19.photo.attach(io: file, filename: 'arch1.jpeg')

pin20 = Pin.create!(title: 'Frida Escobedo, Iwan Baan, Radu Malasincu · Serpentine Pavilion 2018', creator_id: user4.id, board_id: board2.id, description: "Architect Frida Escobedo, celebrated for dynamic projects that reactivate urban space, has been commissioned to design the Serpentine Pavilion 2018. Harnessi...", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/arch2exterior.jpeg')
pin20.photo.attach(io: file, filename: 'arch2exterior.jpeg')

pin21 = Pin.create!(title: 'The Architectural Review Folio: Photo', creator_id: user4.id, board_id: board2.id, description: "Pure hellsite effervescence. Home of Reblogs. All the art you never knew you needed. Your new fandom communities. Add to it or scroll through and soak it up.", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/arch3green.jpeg')
pin21.photo.attach(io: file, filename: 'arch3green.jpeg')

pin22 = Pin.create!(title: 'Urban Elderly Community Center', creator_id: user4.id, board_id: board2.id, description: "The Urban Elderly Community Center is the Final Degree Project for my Bachelor of Architecture. The project's site is at Pudu, Malaysia, an aging city which getting deserted nowadays.", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/da3bf117e6bb0786e2c1bd04994bcde4.jpeg')
pin22.photo.attach(io: file, filename: 'da3bf117e6bb0786e2c1bd04994bcde4.jpeg')

pin23 = Pin.create!(title:'Independent Thesis - We Live:', creator_id: user4.id, board_id: board2.id, description: "Membership living for Millenials.", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/e22afab71368e988da11fb8a403618d8.jpeg')
pin23.photo.attach(io: file, filename: 'e22afab71368e988da11fb8a403618d8.jpeg')

pin24 = Pin.create!(title: 'Elementos convencionales', creator_id: user4.id, board_id: board2.id, description: "En la ciudad observamos infinidad de elementos convencionales de pequeña escala surgidos por necesidades domésticas que reconfiguran incesantemente el paisaje urbano. Podemos encontrar un intenso…", image_url: '' )
file = open('https://kinspo-dev.s3.amazonaws.com/fd41b1e1fbbb2fb3271368d21d35b7df.jpeg')
pin24.photo.attach(io: file, filename: 'fd41b1e1fbbb2fb3271368d21d35b7df.jpeg')



