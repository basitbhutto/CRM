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


	Getproductcategory() {
		if (this.initJWT()) {
			let head_obj = new HttpHeaders().set("Authorization", "bearer " + this.jwt);
			return this.http.get(this.HostURL + `Category/GetCategories`, { headers: head_obj });
		} else {
			throw new Error("JWT token is missing or expired.");
		}
	}


	addproductcategory(body : any) {
		debugger
		if (this.initJWT()) {
			let head_obj = new HttpHeaders().set("Authorization", "bearer " + this.jwt);
			return this.http.post(this.HostURL + `Category/AddCategory`, body, { headers: head_obj });
		} else {
			throw new Error("JWT token is missing or expired.");
		}
	}

	updateproductcategory(body : any) {
		if (this.initJWT()) {
			let head_obj = new HttpHeaders().set("Authorization", "bearer " + this.jwt);
			return this.http.post(this.HostURL + `Category/UpdateCategory`,body, { headers: head_obj });
		} else {
			throw new Error("JWT token is missing or expired.");
		}
	}


	Getproductcolor() {
		if (this.initJWT()) {
			let head_obj = new HttpHeaders().set("Authorization", "bearer " + this.jwt);
			return this.http.get(this.HostURL + `Category/GetColor`, { headers: head_obj });
		} else {
			throw new Error("JWT token is missing or expired.");
		}
	}


	addproductcolor(body : any) {
		debugger
		if (this.initJWT()) {
			let head_obj = new HttpHeaders().set("Authorization", "bearer " + this.jwt);
			return this.http.post(this.HostURL + `Category/AddColor`, body, { headers: head_obj });
		} else {
			throw new Error("JWT token is missing or expired.");
		}
	}

	updateproductcolor(body : any) {
		if (this.initJWT()) {
			let head_obj = new HttpHeaders().set("Authorization", "bearer " + this.jwt);
			return this.http.post(this.HostURL + `Category/UpdateColor`,body, { headers: head_obj });
		} else {
			throw new Error("JWT token is missing or expired.");
		}
	}



	Getproductsize() {
		if (this.initJWT()) {
			let head_obj = new HttpHeaders().set("Authorization", "bearer " + this.jwt);
			return this.http.get(this.HostURL + `Category/GetSize`, { headers: head_obj });
		} else {
			throw new Error("JWT token is missing or expired.");
		}
	}


	addproductsize(body : any) {
		debugger
		if (this.initJWT()) {
			let head_obj = new HttpHeaders().set("Authorization", "bearer " + this.jwt);
			return this.http.post(this.HostURL + `Category/AddSize`, body, { headers: head_obj });
		} else {
			throw new Error("JWT token is missing or expired.");
		}
	}

	updateproductsize(body : any) {
		if (this.initJWT()) {
			let head_obj = new HttpHeaders().set("Authorization", "bearer " + this.jwt);
			return this.http.post(this.HostURL + `Category/UpdateSize`,body, { headers: head_obj });
		} else {
			throw new Error("JWT token is missing or expired.");
		}
	}
}
