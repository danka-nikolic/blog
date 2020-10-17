package blog.controller;

import com.codahale.metrics.annotation.Timed;

import blog.dto.BlogDto;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.concurrent.atomic.AtomicLong;
import java.util.Optional;

@Path("/blogs")
@Produces(MediaType.APPLICATION_JSON)
public class BlogController{
	
    private final String template;
    private final String defaultName;
    private final AtomicLong counter;

    public BlogController(String template, String defaultName) {
        this.template = template;
        this.defaultName = defaultName;
        this.counter = new AtomicLong();
    }

    @GET
    @Timed
    public BlogDto sayHello(@QueryParam("name") Optional<String> name) {
        final String value = String.format(template, name.orElse(defaultName));
        return new BlogDto(counter.incrementAndGet(), value);
    }
}
