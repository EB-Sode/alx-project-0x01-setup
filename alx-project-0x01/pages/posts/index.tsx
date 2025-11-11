import Header from "../../components/layout/Header";

const PostsPage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">Posts</h1>
                <p className="text-lg text-gray-700">
                    This is the Posts page. Here you can find a list of all posts.
                </p>
            </main>
        </div>
    );
}

export default PostsPage;