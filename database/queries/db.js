import { artist } from '../seeds/artist';

let artists = [];

for (let i = 0; i < 20; i++) {
    artists.push(artist());
}

console.log(artists);

export let artists;

