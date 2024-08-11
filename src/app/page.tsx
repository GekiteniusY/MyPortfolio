import { Code, BookOpen, Share2, Users, SquareLibrary } from "lucide-react";
import { Card } from "../components/card";

export default function Home() {
  const cards = [
    { title: "Products", icon: <Code size={24} /> },
    { title: "Tech Notes", icon: <BookOpen size={24} /> },
    { title: "Knowledge & Skills", icon: <SquareLibrary size={24} /> },
    { title: "SNS", icon: <Share2 size={24} /> },
    { title: "Community", icon: <Users size={24} /> },
  ];


  // TODO: デスクトップ表示の際のデザインを修正する

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0A192F] font-sans p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-[#0A192F]">
              Welcome Message
            </h1>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#0A192F]">
                Instant Message
              </h2>
              <p className="text-[#0A192F] text-lg leading-relaxed">
                Here's a brief introduction about myself and my work. I'm
                passionate about creating innovative solutions and pushing the
                boundaries of technology.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                {cards.slice(0, 3).map((item, index) => (
                  <Card key={index} {...item} />
                ))}
              </div>
              <div className="flex justify-center space-x-4">
                {cards.slice(3).map((item, index) => (
                  <Card key={index + 3} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
