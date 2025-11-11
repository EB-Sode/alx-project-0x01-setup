// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {user.name}
        </h2>
        <span className="text-sm text-gray-500">@{user.username}</span>
      </div>

      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <p>
          <span className="font-medium">📧 Email:</span> {user.email}
        </p>
        <p>
          <span className="font-medium">📞 Phone:</span> {user.phone}
        </p>
        <p>
          <span className="font-medium">🌐 Website:</span>{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            {user.website}
          </a>
        </p>
      </div>

      <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-1">
          Address
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {user.address.street}, {user.address.suite}
          <br />
          {user.address.city}, {user.address.zipcode}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          🗺️ Geo: ({user.address.geo.lat}, {user.address.geo.lng})
        </p>
      </div>

      <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-1">
          Company
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {user.company.name}
        </p>
        <p className="text-xs italic text-gray-500">
          “{user.company.catchPhrase}”
        </p>
        <p className="text-xs text-gray-500">{user.company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
