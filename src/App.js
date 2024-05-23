import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 4,
      title: "Vellore Fort🏰",
      dateTime: "March 01, 1566 09:30:27 AM",
      image: "Vellore Fort.jpg",
      body: "A 450+ years old Castle holding Vellor's heritage💪"
    },
    {
      id: 3,
      title: "Tamilnadu🙏",
      dateTime: "July 01, 2021 11:17:36 AM",
      image: "Mahabalipuram.jpg",
      body: "Where culture meets timeless tradition.🍃"
    },
    {
      id: 2,
      title: "India won World cup 2011🏆",
      dateTime: "April 02, 2011 11:17:36 PM",
      image: "Dhoni.jpg",
      body: "Dhoni finishes off in style🔥"
    },
    {
      id: 1,
      title: "Interstellar🎥",
      dateTime: "November 07, 2014 12:00:00 AM",
      image: "Interstellar.jpg",
      body: "Journey beyond Time⏳, Space🌌, and love❤️."
    }
  ])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postImage, setPostImage] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, dateTime,image: postImage, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostImage('');
    setPostBody('');
    navigate('/');
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');
  }


  return (
    <Routes>
      <Route path="/" element={<Layout
        search={search}
        setSearch={setSearch}
      />}>
        <Route index element={<Home posts={searchResults} />} />
        <Route path="post">
          <Route index element={<NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            postImage={postImage}
            setPostImage={setPostImage}
          />} />
          <Route path=":id" element={<PostPage
            posts={posts}
            handleDelete={handleDelete}
          />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;