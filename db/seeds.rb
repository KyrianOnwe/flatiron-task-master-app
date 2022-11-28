require 'faker'

Task.destroy_all
User.destroy_all
Project.destroy_all

puts "🌱 Seeding spices..."

# Seed your database here
User.create(
    name: "Kyrian",
    role: "Owner",
    email: "kyrian@owner.com",
    password: "Hi"
)
User.create(
    name: "Marty McFly",
    role: "Administrator",
    email: "marty@mcfly.com",
    password: "Hello"
)
5.times do
    User.create(
        name: Faker::Name.unique.name,
        role: Faker::Job.position,
        email: Faker::Internet.email,
        password: "Yoyoyo"
    )
end

50.times do
    Task.create(
        title: Faker::Hobby.activity,
        due_date: Faker::Date.between(from: 2.days.ago, to: Date.today),
        user_id: rand(1...8),
        project_id: rand(1...4),
        complete: false,
    )
end

4.times do
    Project.create(
        title: Faker::Company.name,
        due_date: "2022-12-23"
    )
end

puts "✅ Done seeding!"
