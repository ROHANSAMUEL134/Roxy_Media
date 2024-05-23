const NewPost = ({
    handleSubmit, postTitle, setPostTitle, postImage, setPostImage, postBody, setPostBody
}) => {

    return (
        <main className="NewPost">
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <label htmlFor="postImage">Image:</label><br></br>
                <input
                    id="postImage"
                    type="file"
                    required
                    accept=".jpg"
                    onChange={(e) => setPostImage(e.target.files[0].name)}
                />
                
                <button type="submit" className="postButton">Submit</button>
            </form>
        </main>
    )
}

export default NewPost