
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <span className="text-purple-500">Blog</span>
              <span>Battle</span>
            </Link>
            <p className="text-sm">
              Платформа для соревнований блогеров. Создавай контент, соревнуйся и побеждай.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-purple-500 transition-colors">Главная</Link></li>
              <li><Link to="/cases" className="hover:text-purple-500 transition-colors">Кейсы</Link></li>
              <li><Link to="/battles" className="hover:text-purple-500 transition-colors">Битвы</Link></li>
              <li><Link to="/top" className="hover:text-purple-500 transition-colors">Топ блогеров</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-purple-500 transition-colors">FAQ</Link></li>
              <li><Link to="/terms" className="hover:text-purple-500 transition-colors">Условия использования</Link></li>
              <li><Link to="/privacy" className="hover:text-purple-500 transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/contact" className="hover:text-purple-500 transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2 text-purple-500" />
                <a href="mailto:info@blogbattle.ru" className="hover:text-purple-500 transition-colors">info@blogbattle.ru</a>
              </li>
              <li className="flex items-center">
                <Icon name="MessageCircle" size={16} className="mr-2 text-purple-500" />
                <a href="https://t.me/blogbattle" className="hover:text-purple-500 transition-colors">@blogbattle</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} BlogBattle. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
