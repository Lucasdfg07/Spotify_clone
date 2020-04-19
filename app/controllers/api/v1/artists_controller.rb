class Api::V1::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end
end