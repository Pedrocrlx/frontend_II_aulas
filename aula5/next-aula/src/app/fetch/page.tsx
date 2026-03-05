"use client";

import { useQuery } from "@tanstack/react-query";
import fetchUsers from "@/services/fetchUser";

const FetchPage = () => {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>A carregar utilizadores...</div>;
  if (error) return <div>Erro ao carregar: {error.message}</div>;

  return (
    <div>
      <h1>Fetch Page</h1>
      <ul>
        {users?.map((user: any) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>ID: {user.id}</p>
            <img src={user.avatar} alt="User Avatar" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchPage;
