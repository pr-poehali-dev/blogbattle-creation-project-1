
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface BlogCase {
  id: string;
  title: string;
  price: number;
  image: string;
  content: string[];
}

const blogCases: BlogCase[] = [
  {
    id: "tech-case",
    title: "Технологии",
    price: 199,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    content: ["Обзоры гаджетов", "Новости технологий", "Тренды IT"]
  },
  {
    id: "lifestyle-case",
    title: "Лайфстайл",
    price: 299,
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1000",
    content: ["Мода и стиль", "Путешествия", "Хобби"]
  },
  {
    id: "business-case",
    title: "Бизнес",
    price: 499,
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1000",
    content: ["Стартапы", "Инвестиции", "Личностный рост"]
  },
];

const CaseGrid = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Популярные кейсы</h2>
          <p className="text-gray-400 mt-2">Выбери тематику и начни свой путь к победе</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogCases.map((blogCase) => (
            <div key={blogCase.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-colors group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blogCase.image} 
                  alt={blogCase.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {blogCase.price} ₽
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{blogCase.title}</h3>
                <ul className="mb-4 space-y-1">
                  {blogCase.content.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <Icon name="CheckCircle" size={16} className="text-purple-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-2 mt-4">
                  <Button className="w-full bg-purple-600 hover:bg-purple-500">
                    <Icon name="Package" className="mr-2 h-4 w-4" />
                    Открыть кейс
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/cases">
            <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
              <Icon name="ChevronRight" className="mr-2 h-4 w-4" />
              Смотреть все кейсы
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseGrid;
