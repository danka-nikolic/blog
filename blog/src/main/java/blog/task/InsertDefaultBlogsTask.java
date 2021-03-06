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
		output.println("Finished saving blogs");
		output.flush();
		output.close();
	}

	private List<BlogEntity> getDefaultBlogs() throws IOException {
		final List<BlogEntity> blogs = new ArrayList<>();

		final String title1 = "Amazon, najmoćnija reka na svetu";
		final String content1 = readBlogContentFromFile("amazon_blog.txt");
		final String imgUrl1 = "https://www.thesun.co.uk/wp-content/uploads/2019/08/NINTCHDBPICT000515765374.jpg?w=620";
		final BlogEntity blog1 = new BlogEntity(title1, content1, imgUrl1);

		final String title2 = "Robinzon Kruso";
		final String content2 = readBlogContentFromFile("robinzon_kruso_blog.txt");
		final String imgUrl2 = "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iEaw16E5cnvk/v0/1000x-1.jpg";
		final BlogEntity blog2 = new BlogEntity(title2, content2, imgUrl2);

		final String title3 = "Kolumbijski biser: Kanjo Kristales";
		final String content3 = readBlogContentFromFile("kanjo_kristales_blog.txt");
		final String imgUrl3 = "https://kafenisanje.rs/wp-content/uploads/2015/04/kanjo-kristales-1.jpg";
		final BlogEntity blog3 = new BlogEntity(title3, content3, imgUrl3);

		final String title4 = "Tristan da Kunja";
		final String content4 = readBlogContentFromFile("tristan_da_kunja_blog.txt");
		final String imgUrl4 = "https://i2.wp.com/elretohistorico.com/wp-content/uploads/2018/01/Tristan-Da-Cunha.jpg?resize=780%2C405&ssl=1";
		final BlogEntity blog4 = new BlogEntity(title4, content4, imgUrl4);

		final String title5 = "Predivni krajevi Afrike: Avantura u ekosistemu Serengetija";
		final String content5 = readBlogContentFromFile("serengeti_blog.txt");
		final String imgUrl5 = "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180329192103/Serengeti-FI-1.jpg";
		final BlogEntity blog5 = new BlogEntity(title5, content5, imgUrl5);

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