json.name @artist.name
json.photo_url url_for(@artist.photo)

json.albums @artist.albums.each do |album|
	json.title album.title
	json.cover_url url_for(album.cover)
end

json.songs @artist.albums[0].songs.each