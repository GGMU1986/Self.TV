# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Video.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('videos')
Channel.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('channels')

video1 = Video.create!(title: "Happy Coding!", duration: 0.10, description: "My youtibe clone is the best", uploader_id: 2, channel_id: 1)
video2 = Video.create!(title: "Pizza is good", duration: 0.12, description: "I love to eat pizza everyday", uploader_id: 2, channel_id: 1)
video3 = Video.create!(title: "FUN!", duration: 0.15, description: "ALOT OF FUN", uploader_id: 2, channel_id: 1)