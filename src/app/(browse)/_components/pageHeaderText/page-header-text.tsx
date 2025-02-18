interface PageHeaderTextProps {
    title: string;
    subtitle?: string;
}

export const PageHeaderText = ({ title, subtitle }: PageHeaderTextProps) => {
    return (
        <>
          <h1 className="flex justify-center items-center text-4xl mb-8 font-bold">{title}</h1>
          <h2 className="flex justify-center items-center text-2xl mb-20 font-bold">{subtitle}</h2>
        </>
      );
}