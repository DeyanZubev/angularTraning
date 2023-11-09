import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-second-project',
  templateUrl: './second-project.component.html',
  styleUrls: ['./second-project.component.scss']
})
export class SecondProjectComponent implements OnInit {
  private _baseUrl = 'https://myanimelist.net/v1/oauth2/token';
  private _clientId = '9729629dccd210a2de4b1378bf6c03fe';
  private _clientSecret = '89d805bfea9b8d6a6929845a3779d6c6a89d053f8b33a20576d1ce2b1e3c9f95'; // Only required if you have a Client Secret
  private _code = 'def502005fa4b534fd75a6200311f785fa92a774c06dbeae8a401ad008d2f1ffb39733a267696a1a2082b0470af04176a6316a7b4a2e40a1d4055d4138aec43d06f0e765ca1dc2b3ca54083a41ce6192eb08bdc671a0d943566df825bd335a7505dede52967798e9d78a4044ce7d188426e5b0bb47083a2c5f26ad94ca82c9a6511b1509b92d523dbc0ad51e3f4058b8bb4dc13ee8cd3e187cc0b5d1b4b05afdf98ca01332430f9b1d14ef3fe84523f03540468e46daa5eb3cdb140d0d6c1d300938a65bbc050162441c4ae51b890ad6d70e1f3d5a3d3af07d1769b8e1ce90b6334565c1ef80c475fb692bc2d6af8b0b84ff695cfeff4e45c74e987ee03c87bab3853686790db4ef8482c15feb60a8a480d5bcfb5bdf8a9788b4633694895538b2a1717872ba795a79d19deb9edd640a4232872c7a75cdda4f510502d6bc556865aff4c0f7c3d877116be996a4126bf12f72be4ad2163256ee3e2e520e33c9f30ea35986b9e96c63ddaf6f8df43ae2a76fa70b1ba9ae30cb868ac785443429a921676c85ac6626f8a50a43e9ee730c6f94814c1b339e6f51f5e76d36cd60f6ca9e80e2f00ee1953139bbf0669a60bfe71d2f5ad13fcea6be149c60cfd9964ea475da3619b93fc14a5ce5f8996a7c7ccf480df6b53e74c527dfd17e72a78d82f4fa10159cc9009fc198';
  private _codeVerifier = 'xW7YyLZdLQznfIISZoEoFXUoQjpHrqfPxcamrWqerqwJgRZaBsVWFZrU9vBFckRtNMqmzU4gXwdgaKGCX60TSUveERuMrYOYmMtsVZCtgJFTRBc2xvj7NBqmtZg6K3w6';
  private _grantType = 'authorization_code';
  private _redirectUri = 'YOUR_REDIRECT_URI'; // Optional


  constructor(
    private http: HttpClient
  ) { }
  randomString: any;
  userToken: any;

  ngOnInit(): void {
    this.getMyAnimeList();


    // this.getToken().subscribe(
    //   (data: any) => {
    //     console.log('Access Token:', data);
    //     this.userToken = data;
    //   },
    //   (error) => {
    //     console.log('Erro:', error);
    //     console.error('Error:', error);
    //   }
    // );

    // this.logMovies();
    // this.randomString = this.generateRandomString(128);
    // this.logMyAnimeList();

    // examples for Closures
    // const a = this.outerFunction('Hi');
    // const b = a('innerParam');
    // b('doubleInnerparam');
    //  this.clickHandler(12);
    // console.log(sizePx());

  }

  getToken() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',

    });
    const requestOptions = {
      headers,
      mode: 'no-cors',
    };

    const params = new HttpParams()
      .set('client_id', this._clientId)
      .set('code', this._code)
      .set('code_verifier', this._codeVerifier)
      .set('grant_type', this._grantType);

    if (this._clientSecret) {
      params.set('client_secret', this._clientSecret);
    }

    if (this._redirectUri) {
      params.set('redirect_uri', this._redirectUri);
    }

    return this.http.post(this._baseUrl, params.toString(), requestOptions);
  }

  //Get Method
  async logMovies() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const movies = await response.json();
    console.log(movies);
  }

  async getMyAnimeList() {
    // const randomStringLong = this.randomString;
    const randomStringLong = 'xW7YyLZdLQznfIISZoEoFXUoQjpHrqfPxcamrWqerqwJgRZaBsVWFZrU9vBFckRtNMqmzU4gXwdgaKGCX60TSUveERuMrYOYmMtsVZCtgJFTRBc2xvj7NBqmtZg6K3w6';
    const code = 'def502005fa4b534fd75a6200311f785fa92a774c06dbeae8a401ad008d2f1ffb39733a267696a1a2082b0470af04176a6316a7b4a2e40a1d4055d4138aec43d06f0e765ca1dc2b3ca54083a41ce6192eb08bdc671a0d943566df825bd335a7505dede52967798e9d78a4044ce7d188426e5b0bb47083a2c5f26ad94ca82c9a6511b1509b92d523dbc0ad51e3f4058b8bb4dc13ee8cd3e187cc0b5d1b4b05afdf98ca01332430f9b1d14ef3fe84523f03540468e46daa5eb3cdb140d0d6c1d300938a65bbc050162441c4ae51b890ad6d70e1f3d5a3d3af07d1769b8e1ce90b6334565c1ef80c475fb692bc2d6af8b0b84ff695cfeff4e45c74e987ee03c87bab3853686790db4ef8482c15feb60a8a480d5bcfb5bdf8a9788b4633694895538b2a1717872ba795a79d19deb9edd640a4232872c7a75cdda4f510502d6bc556865aff4c0f7c3d877116be996a4126bf12f72be4ad2163256ee3e2e520e33c9f30ea35986b9e96c63ddaf6f8df43ae2a76fa70b1ba9ae30cb868ac785443429a921676c85ac6626f8a50a43e9ee730c6f94814c1b339e6f51f5e76d36cd60f6ca9e80e2f00ee1953139bbf0669a60bfe71d2f5ad13fcea6be149c60cfd9964ea475da3619b93fc14a5ce5f8996a7c7ccf480df6b53e74c527dfd17e72a78d82f4fa10159cc9009fc198';
    const state = 'RequestID42';
    // const url = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=9729629dccd210a2de4b1378bf6c03fe&state=YOUR_STATE&redirect_uri=YOUR_REDIRECT_URI&code_challenge=${this.randomString}&code_challenge_method=plain`;
    // const url = `https://api.myanimelist.net/v2/users/@me/animelist?fields=list_status&limit=4`;
    // const url = `https://api.myanimelist.net/v2/anime?q=one&limit=4`;
    const url = `https://api.waifu.pics/sfw/hug`;
    const request = new Request(url, {
      headers: {
        "X-MAL-CLIENT-ID": "9729629dccd210a2de4b1378bf6c03fe"
      },
      mode: 'no-cors'
    });

    const client_id = '9729629dccd210a2de4b1378bf6c03fe';
    const client_secret = '89d805bfea9b8d6a6929845a3779d6c6a89d053f8b33a20576d1ce2b1e3c9f95';
    // code: code,
    const code_verifier = 'xW7YyLZdLQznfIISZoEoFXUoQjpHrqfPxcamrWqerqwJgRZaBsVWFZrU9vBFckRtNMqmzU4gXwdgaKGCX60TSUveERuMrYOYmMtsVZCtgJFTRBc2xvj7NBqmtZg6K3w6';
    const grant_type = 'authorization_code';

    const responce = await fetch(url);
    const anime = await responce.json();
    console.log(anime);
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    return result;
  }



  // Closures
  outerFunction(outerParam: any) {
    return (innerParam: any) => {
      return (doubleInnerParam: any) => {
        console.log(outerParam);
        console.log(innerParam);
        console.log(doubleInnerParam);
      }
    }
  }

  clickHandler(size: Number) {
    return console.log(`${size}px`)
  }


  ngOnDestroy() {
    console.log("Component Destroyed " + this.userToken);
  }
}
