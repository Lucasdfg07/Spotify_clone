class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
 
  has_many :favorites
  has_many :recently_heards
 
  validates :name, presence: true

  def is_favorite? kind, id
    self.favorites.where(favoritable_type: kind, favoritable_id: id).present?
  end
end