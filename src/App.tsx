import PostsPage from "./views/PostsPage";
import PostPage from "./views/PostPage";
import { Routes, Route } from "react-router-dom";
import UpdatePostPage from "./views/UpdatePost";
import ProfilePage from "./views/ProfilePage";
import AlbumPage from "./views/AlbumPage";
import TodoPage from "./views/TodoPage";
import HomePage from "./views/HomePage";
import CreatePost from "./views/CreatePost";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="/post/update/:id" element={<UpdatePostPage />} />
                <Route path="/post/create" element={<CreatePost />} />
                <Route path="/albums" element={<AlbumPage />} />
                <Route path="/users" element={<ProfilePage />} />
                <Route path="/todos" element={<TodoPage />} />
            </Routes>
        </div>
    );
}

export default App;