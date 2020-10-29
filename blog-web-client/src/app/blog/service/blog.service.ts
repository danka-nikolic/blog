import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Blog } from '../blog-list-item/model/blog.model';

@Injectable({ providedIn: 'root'})
export class BlogService {
    readonly BLOG_URL = environment.apiUrl + '/blogs';
    constructor(private http: HttpClient) { }

    getAllBlogs() {
        return this.http.get<any>(this.BLOG_URL + '/getAll');
    }

    deleteBlogById(id: number) {
        return this.http.delete<any>(this.BLOG_URL + '/' + id);
    }

    getBlogById(id: number) {
        return this.http.get<any>(this.BLOG_URL + '/' + id);
    }

    addBlog(blog: Blog) {
        return this.http.post<any>(this.BLOG_URL, blog);
    }

    editBlog(blog: Blog) {
        return this.http.put<any>(environment.apiUrl + '/blogs', blog);
    }
}