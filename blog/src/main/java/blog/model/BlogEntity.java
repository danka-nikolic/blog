package blog.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name="blog")
@NamedQueries(
        {
                @NamedQuery(
                        name = "blog.model.BlogEntity.findAll",
                        query = "SELECT b FROM BlogEntity b"
                )
        })
public class BlogEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private LocalDate date;
	private String title;
    private String content;
	
    public BlogEntity() {}

	public BlogEntity(Long id, LocalDate date, String title, String content) {
		this.id = id;
		this.date = date;
		this.title = title;
		this.content = content;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
}
