# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_02_16_121106) do
  create_table "authors", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
  end

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "genre"
    t.integer "yearpublished"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "quantity"
    t.integer "author_id"
  end

  create_table "borrowed_books", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "checked_out_at"
    t.integer "book_id"
    t.integer "user_id"
    t.string "author"
    t.string "title"
    t.integer "yearpublished"
    t.string "genre"
  end

  create_table "students", force: :cascade do |t|
    t.string "favouritebooks"
    t.string "overduebooks"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "book_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "admin_code"
    t.string "password_digest"
    t.boolean "is_admin"
  end

end
