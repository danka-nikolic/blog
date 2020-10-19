package blog.controller;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import blog.model.BlogEntity;
import blog.repo.BlogRepository;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/blogs")
@Produces(MediaType.APPLICATION_JSON)
public class BlogController{
	
    private final BlogRepository blogRepository;

    public BlogController(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }
    
    @GET
    @Path("/{id}")
    @UnitOfWork
    public BlogEntity getBlogById(@PathParam("id") Long id) {
        return blogRepository.findById(id);
    }
    
    @DELETE
    @Path("/{id}")
    @UnitOfWork
    public void deleteBlogById(@PathParam("id") Long id) {
        blogRepository.delete(id);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @UnitOfWork
    public BlogEntity createBlog(BlogEntity blog) {
        return blogRepository.create(blog);
    }
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @UnitOfWork
    public BlogEntity updateBlog(BlogEntity blog) {
        return blogRepository.update(blog);
    }
}
