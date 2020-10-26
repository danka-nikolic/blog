package blog.task;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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
				final Long numberOfBlogs = blogRepository.countBlogs();
				final boolean noBlogsInDB = numberOfBlogs == null || numberOfBlogs.longValue() == 0;
				if (noBlogsInDB) {
					for (BlogEntity blog : getDefaultBlogs()) {
						blogRepository.create(blog);
					}
					transaction.commit();
				}
			} catch (Exception e) {
				transaction.rollback();
				throw new RuntimeException(e);
			}
		} finally {
			session.close();
			ManagedSessionContext.unbind(sessionFactory);
		}
		output.println("Finished archiving users");
		output.flush();
		output.close();
	}

	private List<BlogEntity> getDefaultBlogs() throws IOException {
		final List<BlogEntity> blogs = new ArrayList<>();

		final String title1 = "Amazon, najmoćnija reka na svetu";
		final String content1 = readBlogContentFromFile("amazon_blog.txt");
		final BlogEntity blog1 = new BlogEntity(title1, content1);

		final String title2 = "Robinzon Kruso";
		final String content2 = readBlogContentFromFile("robinzon_kruso_blog.txt");
		final BlogEntity blog2 = new BlogEntity(title2, content2);

		final String title3 = "Kolumbijski biser: Kanjo Kristales";
		final String content3 = readBlogContentFromFile("kanjo_kristales_blog.txt");
		final BlogEntity blog3 = new BlogEntity(title3, content3);

		final String title4 = "Tristan da Kunja";
		final String content4 = readBlogContentFromFile("tristan_da_kunja_blog.txt");
		final BlogEntity blog4 = new BlogEntity(title4, content4);

		final String title5 = "Predivni krajevi Afrike: Avantura u ekosistemu Serengetija";
		final String content5 = readBlogContentFromFile("serengeti_blog.txt");
		final BlogEntity blog5 = new BlogEntity(title5, content5);

		blogs.add(blog1);
		blogs.add(blog2);
		blogs.add(blog3);
		blogs.add(blog4);
		blogs.add(blog5);

		return blogs;
	}
	
	private String readBlogContentFromFile(String fileName) throws IOException {
		try (InputStream in = getClass().getResourceAsStream("/blogs/" + fileName)) {
			BufferedReader reader = new BufferedReader(new InputStreamReader(in, StandardCharsets.UTF_8));
	        return reader.lines().collect(Collectors.joining());
		}
	}
}