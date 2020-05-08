import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQBflioQmjr6ezmODN6ADrDGdtegejzGaCyDzOyXA_hqlHABtxsSK2TEoibnMR_4wX74Ae9WPv3Qsvdhwz3kNOt8aN_wHCeIIWvXG_FgNO2j5dUcMjr9Gk6gYNY6Dbioo-_t3yu3qHkSFi19uFL_mPjEA85aRLNL3XQHe4TfQ88xTnyjcX1BCJGER8-_CaDwI2DZ2ab0YlxhCywArBg3dESEe20YlYvK0m1QAP8fYw7cIAT9eBtTrYXsVsljEXS4tpyByaeWZUCoQQ");
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=from_token";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }

  searchArtistAlbum(id: string ) {
    const query = `artists/${id}/albums`;
    return this.getHeader(query);
  }

  searchArtist(id: string ) {
    const query = `artists/${id}`;
    return this.getHeader(query);
  }

  searchAlbumById(id: string ) {
    const query = `albums/${id}`;
    return this.getHeader(query);
  }

  searchAlbumByIdTracks(id: string ) {
    const query = `albums/${id}/tracks`;
    return this.getHeader(query);
  }
}
