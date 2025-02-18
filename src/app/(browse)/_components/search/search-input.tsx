"use client";

import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.trim() !== "") {
      const params = new URLSearchParams(searchParams);
      params.set('query', searchTerm.trim());
      router.push(`/results?${params.toString()}`);
    }
  };

  return (
    <div className="flex justify-center items-center pb-20">
      <form className="relative max-w-[480px] w-full" onSubmit={handleSubmit}>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="md:text-lg placeholder:text-neutral-800 px-6 w-full max-w-[480px] border-none focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3),0_1px_3px_1px_rgba(65,69,73,.15)] bg-[#F0F4F8] rounded-full h-16 focus-visible:ring-0 focus:bg-white"
        />
        <Button
          type="submit"
          variant="ghost"
          className="absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 cursor-pointer text-yellow-400 bg-red-600 rounded-full transition-all duration-300 ease-in-out hover:text-red-600 hover:bg-yellow-400 px-8 py-6"
        >
          <SearchIcon strokeWidth={3} />
        </Button>
      </form>
    </div>
  );
};

export default SearchInput;
