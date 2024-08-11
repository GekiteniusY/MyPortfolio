export const Card: React.FC<CardProps> = ({ title, icon }) => (
  <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center group w-28">
    <div className="text-[#0A192F] mb-2 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-sm font-semibold text-[#0A192F] group-hover:text-[#64FFDA] transition-colors duration-300">
      {title}
    </h3>
  </div>
);

interface CardProps {
  title: string;
  icon: JSX.Element;
}
