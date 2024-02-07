class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :yearpublished, :quantity
  def author
    object.author.name
  end
end
