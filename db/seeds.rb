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
user2 = User.create!(email: "geo@geo.com", username: "George", password: "123456")
user3 = User.create!(email: "olaf@olaf.com", username: "Olaf", password: "123456")
user4 = User.create!(email: "einstein@einstein.com", username: "Einstein", password: "123456")

Channel.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('channels')

Video.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('videos')

Comment.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('comments')

Subscription.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('subscriptions')

View.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('views')

Like.destroy_all