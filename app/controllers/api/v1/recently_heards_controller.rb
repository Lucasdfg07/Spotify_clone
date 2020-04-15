class Api::V1::RecentlyHeardsController < ApplicationController
  def create
    @recently_heard = current_user.recently_heards.new(album_id: params[:album_id])
    @recently_heard.save
    head :ok
  end
end