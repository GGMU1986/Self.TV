# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')

user1 = User.create!(email: "demo@demo.com", username: "demomode", password: "demomode")
user2 = User.create!(email: "geo@geo.com", username: "George21", password: "iloveiro")

Channel.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('channels')

channel1 = Channel.create!(name: "GeorgeTV", about: "My coding life", creator_id: 2)

Video.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('videos')
Comment.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('comments')

View.destroy_all
Like.destroy_all