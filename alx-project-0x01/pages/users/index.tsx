import React, { useState } from "react";
import Header from "../../components/layout/Header";
import { UserProps } from "@/interfaces";
import UserModal from "../../components/common/UserModal";
import UserCard from "@/components/common/UserCard";


interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserProps>({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: { street: "", suite: "", city: "", zipcode: "", geo: { lat: "", lng: "" } },
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" }
  });

  const handleAddUser = () => {
    setSelectedUser({
      id: 0,
      name: "",
      username: "",
      email: "",
      address: { street: "", suite: "", city: "", zipcode: "", geo: { lat: "", lng: "" } },
      phone: "",
      website: "",
      company: { name: "", catchPhrase: "", bs: "" }
    });
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Users</h1>
          <button
            onClick={handleAddUser}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Add User
          </button>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          This is the Users page. Here you can find a list of all users.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      {/* User Modal */}
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser} onSubmit={function (post: UserProps): void {
          throw new Error("Function not implemented.");
        } }      />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: UserProps[] = await response.json();

  return { props: { posts } };
}

export default Users;
