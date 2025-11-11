import Header from "../../components/layout/Header";

const UsersPage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">Users</h1>
                <p className="text-lg text-gray-700">
                    This is the Users page. Here you can find a list of all users.
                </p>
            </main>
        </div>
    );
}

export default UsersPage;
