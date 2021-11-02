# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
# Video.destroy_all
# ActiveRecord::Base.connection.reset_pk_sequence!('videos')
# Channel.destroy_all
# ActiveRecord::Base.connection.reset_pk_sequence!('channels')
# Comment.destroy_all
# ActiveRecord::Base.connection.reset_pk_sequence!('comments')

user1 = User.create!(username: "demomode", email: "demo@demo.com", password: "demomode")
user2 = User.create!(username: "George21", email: "geo@geo.com", password: "iloveiro")
user3 = User.create!(username: "Iro23", email: "iro@iro.com", password: "ilovegeorge")

# channel1 - Channel.create!(name: "GeorgeTV", about: "My beautiful life", creator_id: user2)

# video1 = Video.create!(title: "Boat ride!", duration: "0.10", description: "Riding a boat across the Long Island sound on a beautiful day", uploader_id: user2, channel_id: 1)
# video2 = Video.create!(title: "Bundesliga match", duration: "0.12", description: "At the footbal stadium to watch Mochengladbach", uploader_id: user2, channel_id: 1)
# video3 = Video.create!(title: "Funny video", duration: "0.15", description: "Goot times in NY", uploader_id: user2, channel_id: 1)

# comment1 = Comment.create!(body: "What an amazing view!", commenter_id: 1, video_id: 1)
# comment2 = Comment.create!(body: "It was a great day", commenter_id: 3, video_id: 1)
# comment3 = Comment.create!(body: "LOL", commenter_id: 2, video_id: 2)