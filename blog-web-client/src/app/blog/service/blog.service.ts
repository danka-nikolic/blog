import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root'})
export class BlogService {

    constructor(private http: HttpClient) { }

    getAllBlogs() {
        return this.http.get<any>(environment.apiUrl + '/blogs/getAll');
    }

    deleteBlogById(id: number) {
        return this.http.delete<any>(environment.apiUrl + '/blogs/' + id);
    }

    getBlogById(id: number) {
        return this.http.get<any>(environment.apiUrl + '/blogs/' + id);
    }
}