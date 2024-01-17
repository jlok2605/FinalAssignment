class Book < ApplicationRecord
    attribute :quantity, :integer
    belongs_to:author
end
