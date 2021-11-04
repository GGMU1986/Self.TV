# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
Video.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('videos')
Channel.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('channels')
Comment.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('comments')

<<<<<<< HEAD
video1 = Video.create!(title: "Happy Coding!", duration: 0.10, description: "My youtibe clone is the best", uploader_id: 2, channel_id: 1)
video2 = Video.create!(title: "Pizza is good", duration: 0.12, description: "I love to eat pizza everyday", uploader_id: 2, channel_id: 1)
video3 = Video.create!(title: "FUN!", duration: 0.15, description: "ALOT OF FUN", uploader_id: 2, channel_id: 1)
=======
channel1 = Channel.create!(name: "GeorgeTV", about: "My beautiful life", creator_id: user2)

video1 = Video.create!(title: "Boat ride!", duration: "0.10", description: "Riding a boat across the Long Island sound on a beautiful day", uploader_id: user2, channel_id: 1)
video2 = Video.create!(title: "Bundesliga match", duration: "0.12", description: "At the footbal stadium to watch Mochengladbach", uploader_id: user2, channel_id: 1)
video3 = Video.create!(title: "Funny video", duration: "0.15", description: "Goot times in NY", uploader_id: user2, channel_id: 1)
>>>>>>> comments
