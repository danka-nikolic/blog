package blog.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

@Entity
@Table(name="blog")
@NamedQueries(
        {
                @NamedQuery(
                        name = "blog.model.BlogEntity.findAll",
                        query = "SELECT b FROM BlogEntity b"
                ),
                @NamedQuery(
                        name = "blog.model.BlogEntity.countBlogs",
                        query = "SELECT count(b) FROM BlogEntity b"
                )
        })
public class BlogEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private LocalDate date;
	private String title;
	@Lob
	private String imgUrl;
	@Lob
    private String content;
	
    public BlogEntity() {}
    
	public BlogEntity(String title, String content, String imgUrl) {
		this.title = title;
		this.content = content;
		this.imgUrl = imgUrl;
	}

	public BlogEntity(Long id, LocalDate date, String title, String content, String imgUrl) {
		this.id = id;
		this.date = date;
		this.title = title;
		this.content = content;
		this.imgUrl = imgUrl;
	}

	@PrePersist
    public void prePersist() {
		this.date = LocalDate.now();
    }
 
    @PreUpdate
    public void preUpdate() {
    	this.date = LocalDate.now();
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
	
	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
}
