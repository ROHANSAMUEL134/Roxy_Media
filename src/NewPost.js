const NewPost = ({
    handleSubmit, postTitle, setPostTitle, postImage, setPostImage, postBody, setPostBody
}) => {

    return (
        <main className="NewPost">
            <h2 style={{color:'hsl(0, 100%, 70%)'}}>New Post</h2>
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
                <label htmlFor="postImage">Paste the Web link to the Image:</label>
                <input
                    id="postImage"
                    type="text"
                    required
                    value={postImage}
                    onChange={(e) => setPostImage(e.target.value)}
                />
                <br></br>
                <button type="submit" className="postButton">Submit</button>
            </form>
        </main>
    )
}

export default NewPost
