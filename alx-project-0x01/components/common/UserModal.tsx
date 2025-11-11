import React, { useState } from "react";
import { UserModalProps, UserData } from "../../interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, user }) => {
  // Local state to allow editing user fields dynamically
  const [formUser, setFormUser] = useState<UserData>(user);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Handle nested address fields
    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setFormUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [key]: value
        }
      }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setFormUser((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [key]: value
        }
      }));
    } else {
      setFormUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User submitted:", formUser);
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-lg relative">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add / Edit User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Info */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formUser.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formUser.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formUser.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
          </div>

          {/* Address */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold mb-2 text-gray-700">Address</h3>
            <input
              type="text"
              name="address.street"
              value={formUser.address.street}
              onChange={handleChange}
              placeholder="Street"
              className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="address.city"
              value={formUser.address.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="address.zipcode"
              value={formUser.address.zipcode}
              onChange={handleChange}
              placeholder="Zipcode"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Company */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold mb-2 text-gray-700">Company</h3>
            <input
              type="text"
              name="company.name"
              value={formUser.company.name}
              onChange={handleChange}
              placeholder="Company name"
              className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="company.catchPhrase"
              value={formUser.company.catchPhrase}
              onChange={handleChange}
              placeholder="Catchphrase"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Save User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
