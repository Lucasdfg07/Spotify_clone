json.id @artist.id
json.name @artist.name
json.photo_url url_for(@artist.photo)
json.favorite current_user.is_favorite? 'Artist', @artist.id

json.albums @artist.albums.each do |album|
	  json.id album.id
  	json.title album.title
  	json.artist_name album.artist.name
  	json.cover_url url_for(album.cover)
end

json.songs Album.find_by(artist: @artist).songs.each do |song|
  	json.id song.id
  	json.title song.title
  	json.file_url url_for(song.file)
  	json.artist_name @artist.name
  	json.album_id song.album.id
  	json.favorite current_user.is_favorite? 'Song', song.id
end