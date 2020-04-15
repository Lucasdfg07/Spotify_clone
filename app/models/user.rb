class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
 
  has_many :favorites
  has_many :recently_heards
 
  validates :name, presence: true
end