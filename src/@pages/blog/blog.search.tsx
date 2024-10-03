"use client";

import { useRouter } from "next/navigation";

import { useInput } from "@/@shared/utils/hooks/use-input";
import { useQs } from "@/@shared/utils/hooks/use-qs";

export function BlogSearch() {
  const router = useRouter();
  const qs = useQs();
  const searchInput = useInput(qs.get("search") ?? "");

  return (
    <>
      <input {...searchInput} />
      <button
        onClick={() =>
          router.push(`/blog?${qs.update({ search: searchInput.value })}`)
        }
      >
        검색
      </button>
    </>
  );
}
