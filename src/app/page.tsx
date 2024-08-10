import { Code, BookOpen, BrainCog, Share2, Users } from "lucide-react";
import { Card } from "../components/card";

export default function Home() {
  const cards = [
    { title: "Products", icon: <Code size={24} /> },
    { title: "Tech Notes", icon: <BookOpen size={24} /> },
    { title: "Skills", icon: <BrainCog size={24} /> },
    { title: "SNS", icon: <Share2 size={24} /> },
    { title: "Community", icon: <Users size={24} /> },
  ];

  // TODO: デスクトップサイズで表示したときにカードコンポーネントが下に来ない
  // TODO: 配色の調整をする

  return (
    <div className="min-h-screen bg-[#0A192F] text-[#E6E6E6] font-sans p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-white">Welcome Message</h1>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#F8F8F8]">
                Instant Message
              </h2>
              <p className="text-[#E6E6E6] text-lg leading-relaxed">
                Here's a brief introduction about myself and my work. I'm
                passionate about creating innovative solutions and pushing the
                boundaries of technology.
              </p>
            </div>
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
  );
}

