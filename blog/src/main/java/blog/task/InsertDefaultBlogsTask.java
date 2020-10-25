package blog.task;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.eclipse.jetty.server.Authentication.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.context.internal.ManagedSessionContext;

import blog.model.BlogEntity;
import blog.repo.BlogRepository;
import io.dropwizard.servlets.tasks.Task;

public class InsertDefaultBlogsTask extends Task {

    private BlogRepository blogRepository;
    private SessionFactory sessionFactory;
 
    public InsertDefaultBlogsTask(BlogRepository blogRepository, SessionFactory sessionFactory) {
        super("insert-default-blogs");
        this.blogRepository = blogRepository;
        this.sessionFactory = sessionFactory;
    }
 
	@Override
	public void execute(Map<String, List<String>> parameters, PrintWriter output) throws Exception {
        Session session = sessionFactory.openSession();
        try {
            ManagedSessionContext.bind(session);
            Transaction transaction = session.beginTransaction();
            try {
				for (BlogEntity blog : getDefaultBlogs()) {
					blogRepository.create(blog);
				}
                transaction.commit();
            }
            catch (Exception e) {
                transaction.rollback();
                throw new RuntimeException(e);
            }
        } finally {
            session.close();
            ManagedSessionContext.unbind(sessionFactory);
        }
       if (output != null) {
    	   output.println("Finished archiving users");
           output.flush();
           output.close();
       }
	}
	
	private List<BlogEntity> getDefaultBlogs() {
		final List<BlogEntity> blogs = new ArrayList<>();
		
		final String title1 = "Title 1";
		final String content1 = "Content 1";
		final BlogEntity blog1 = new BlogEntity(title1, content1);

		final String title2 = "Title 2";
		final String content2 = "Content 2";
		final BlogEntity blog2 = new BlogEntity(title2, content2);
		
		final String title3 = "Title 3";
		final String content3 = "Content 3";
		final BlogEntity blog3 = new BlogEntity(title3, content3);
		
		final String title4 = "Title 4";
		final String content4 = "Content 4";
		final BlogEntity blog4 = new BlogEntity(title4, content4);
		
		blogs.add(blog1);
		blogs.add(blog2);
		blogs.add(blog3);
		blogs.add(blog4);
		
		return blogs;
	}
}