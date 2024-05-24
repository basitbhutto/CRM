import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/enviroment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
	providedIn: 'root',
})
export class HttpService {

	constructor(
        private http: HttpClient,
        private jwtHelper: JwtHelperService
    ) {}

	HostURL = environment.domain;
	jwt: any = {};



	initJWT() {
		this.jwt = localStorage.getItem('JWT') || '';

		// this.jwt = JSON.parse(localStorage.getItem("JWT") || "{}");
		return !this.jwtHelper.isTokenExpired(this.jwt);
	}

	login(body: any) {
		return this.http.post(this.HostURL + 'Accounts/Login', body);
	}

	GetUsers() {
		if (this.initJWT()) {
			let head_obj = new HttpHeaders().set("Authorization", "bearer " + this.jwt);
			return this.http.get(this.HostURL + `Accounts/GetUsers/GetUsers`, { headers: head_obj });
		} else {
			throw new Error("JWT token is missing or expired.");
		}
	}
}
