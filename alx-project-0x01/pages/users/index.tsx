import Header from "../../components/layout/Header";
import UserCard from "../../components/common/UserCard";
import { UserProps } from "@/interfaces";


interface UsersPageProps {
  posts: UserProps[]; // Each user from the API
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">Users</h1>
                <p className="text-lg text-gray-700">
                    This is the Users page. Here you can find a list of all users.
                </p>
            {/* ✅ Dynamic Rendering of UserCard */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
            </div>
            </main>
        </div>
    );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
export default Users;
