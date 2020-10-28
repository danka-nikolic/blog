import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Blog } from '../blog-list-item/model/blog.model';

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

    addBlog(blog: Blog) {
        return this.http.post<any>(environment.apiUrl + '/blogs', blog);
    }
}