package blog.repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.query.Query;

import blog.model.BlogEntity;
import io.dropwizard.hibernate.AbstractDAO;

public class BlogRepository extends AbstractDAO<BlogEntity> {
	
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
        return list((Query<BlogEntity>) namedQuery("blog.model.BlogEntity.findAll"));
    }
    
    
}
