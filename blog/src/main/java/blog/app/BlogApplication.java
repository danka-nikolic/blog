package blog.app;

import java.util.EnumSet;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;

import org.eclipse.jetty.servlets.CrossOriginFilter;

import blog.config.BlogConfiguration;
import blog.controller.BlogController;
import blog.model.BlogEntity;
import blog.repo.BlogRepository;
import io.dropwizard.Application;
import io.dropwizard.db.DataSourceFactory;
import io.dropwizard.hibernate.HibernateBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class BlogApplication extends Application<BlogConfiguration> {
	
    public static void main(String[] args) throws Exception {
        new BlogApplication().run(args);
    }

    private final HibernateBundle<BlogConfiguration> hibernate = new HibernateBundle<BlogConfiguration>(BlogEntity.class) {
    	public DataSourceFactory getDataSourceFactory(BlogConfiguration configuration) {
            return configuration.getDataSourceFactory();
        }
    };
    
    @Override
    public void initialize(Bootstrap<BlogConfiguration> bootstrap) {
    	 bootstrap.addBundle(hibernate);
    }

    @Override
    public void run(BlogConfiguration configuration,
                    Environment environment) {
        final BlogRepository blogRepository = new BlogRepository(hibernate.getSessionFactory());
        environment.jersey().register(new BlogController(blogRepository));
        
     // Enable CORS headers
        final FilterRegistration.Dynamic cors =
            environment.servlets().addFilter("CORS", CrossOriginFilter.class);

        // Configure CORS parameters
        cors.setInitParameter("allowedOrigins", "*");
        cors.setInitParameter("allowedHeaders", "X-Requested-With,Content-Type,Accept,Origin");
        cors.setInitParameter("allowedMethods", "OPTIONS,GET,PUT,POST,DELETE,HEAD");

        // Add URL mapping
        cors.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");
    }
}