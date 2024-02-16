
class BorrowedBookSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :updated_at, :checked_out_at, :book_id, :user_id, :author, :title

  def author
    object.book.author.name
  end

  def title
    object.book.title
  end
end
