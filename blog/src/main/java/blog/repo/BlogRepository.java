package blog.repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.query.Query;

import blog.model.BlogEntity;
import io.dropwizard.hibernate.AbstractDAO;
import io.dropwizard.hibernate.UnitOfWork;

public class BlogRepository extends AbstractDAO<BlogEntity> {
	
	private static final int CONTENT_MAX_LENGTH = 300;

    public BlogRepository(SessionFactory factory) {
        super(factory);
    }

    public BlogEntity findById(Long id) {
        return get(id);
    }

    public BlogEntity create(BlogEntity blog) {
        return persist(blog);
    }
    
    public BlogEntity update(BlogEntity blog) {
        return persist(blog);
    }
    
    public void delete(Long id) {
    	final BlogEntity blog = findById(id);
        currentSession().delete(blog);
    }

    @SuppressWarnings("unchecked")
    public List<BlogEntity> findAll() {
        final List<BlogEntity> blogs = list((Query<BlogEntity>) namedQuery("blog.model.BlogEntity.findAll"));
        
        for (BlogEntity blog : blogs) {
        	final String content = blog.getContent();
        	if (content != null && content.length() > CONTENT_MAX_LENGTH) {
        		final String shortContent = content.substring(0, CONTENT_MAX_LENGTH) + "...";
        		blog.setContent(shortContent);
        	}
        }
        
        return blogs;
    }
    
    @UnitOfWork
    public Long countBlogs() {
    	return (Long) namedQuery("blog.model.BlogEntity.countBlogs").uniqueResult();
    }
}
