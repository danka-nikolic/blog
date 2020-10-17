package blog.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BlogDto {
	
    private long id;

    private String content;

    public BlogDto() {
        // Jackson deserialization
    }

    public BlogDto(long id, String content) {
        this.id = id;
        this.content = content;
    }

    @JsonProperty
    public long getId() {
        return id;
    }

    @JsonProperty
    public String getContent() {
        return content;
    }
}
