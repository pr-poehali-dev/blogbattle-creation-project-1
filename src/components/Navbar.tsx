
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white">
            <span className="text-purple-500">Blog</span>
            <span>Battle</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
            Главная
          </Link>
          <Link to="/cases" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
            Кейсы
          </Link>
          <Link to="/battles" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
            Битвы
          </Link>
          <Link to="/top" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
            Топ
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
            <Icon name="LogIn" className="mr-2 h-4 w-4" />
            Войти
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-500">
            <Icon name="UserPlus" className="mr-2 h-4 w-4" />
            Регистрация
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
