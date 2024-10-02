"use client";

import { useParams, useRouter } from "next/navigation";

export function SelectDashboard() {
  const { category } = useParams<{ category: string }>();
  const router = useRouter();

  return (
    <select
      value={category}
      onChange={(e) => {
        router.push(`/admin/${e.target.value}`);
      }}
    >
      <option>about</option>
      <option>blog</option>
    </select>
  );
}
