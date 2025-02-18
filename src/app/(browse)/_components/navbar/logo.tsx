import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <figure>
        <Image
          src="https://png.pngtree.com/png-vector/20190816/ourmid/pngtree-film-logo-design-template-vector-isolated-illustration-png-image_1693431.jpg"
          height="80"
          width="80"
          alt="Movie Filter"
        />
      </figure>
      <p className="font-bold text-2xl text-black">Movie Filter</p>
    </div>
  );
};
