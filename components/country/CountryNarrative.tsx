interface CountryNarrativeProps {
  title: string;
  content: string;
  bgColor?: "white" | "gray";
}

const CountryNarrative: React.FC<CountryNarrativeProps> = ({
  title,
  content,
  bgColor = "white",
}) => {
  return (
    <section
      className={`py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-200 ${
        bgColor === "gray" ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 sm:mb-8">
          {title}
        </h2>
        <p className="text-gray-600 text-base sm:text-lg font-light max-w-3xl leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </div>
    </section>
  );
};

export default CountryNarrative;
