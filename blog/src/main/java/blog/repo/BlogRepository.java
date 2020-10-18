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

    public long create(BlogEntity blog) {
        return persist(blog).getId();
    }

    @SuppressWarnings("unchecked")
    public List<BlogEntity> findAll() {
        return list((Query<BlogEntity>) namedQuery("blog.model.BlogEntity.findAll"));
    }
}
