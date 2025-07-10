
// lets you log in users and get a token without needing backend
const clientId = '900167c3795643499bab1f506bb306f2';
const redirectUri = 'http://192.168.1.51:3000/';

let accessToken;

const Spotify = {
    
    getAccessToken() {
        console.log('Spotify.getAccessToken() called');//test

        if (accessToken) {
            return accessToken;
        }

        const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (tokenMatch && expiresInMatch) {
            accessToken = tokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            console.log('Access URL:', accessUrl); //test
            window.location = accessUrl; 
        }
    },


// after retrieving an access token:

search(term) {
    const accessToken = Spotify.getAccessToken();

    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
        Authorization: `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(jsonResponse => {
        if (!jsonResponse.tracks) return [];
        return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
        }));
  });
},

savePlaylist(name, trackUris) {
    if(!name || !trackUris.length) return;

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}`};
    let userId;

    return fetch('https://api.spotify.com/v1/me', { headers })
        .then(response => response.json())
        .then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers,
                method: 'POST',
                body: JSON.stringify({ name })
            });
        })
        .then(response => response.json())
        .then(jsonResponse => {
            const playlistId =jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                {headers,
                method: 'POST',
                body: JSON.stringify({ uris: trackUris })
            });
        });
    }
};

export default Spotify;
