
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseGrid from "@/components/CaseGrid";
import LiveFeed from "@/components/LiveFeed";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <CaseGrid />
      
      {/* Секция "Как это работает" */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Как это работает</h2>
            <p className="text-gray-400 mt-2">Три простых шага для участия в блог-битвах</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="UserPlus" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Регистрация</h3>
              <p className="text-gray-400">Создайте аккаунт и пополните баланс для участия в блог-битвах</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Package" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Выбор кейса</h3>
              <p className="text-gray-400">Выберите тематический кейс, который соответствует вашим интересам</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Победа</h3>
              <p className="text-gray-400">Создавайте контент, выигрывайте битвы и получайте ценные призы</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-purple-600 hover:bg-purple-500">
              <Icon name="Info" className="mr-2 h-4 w-4" />
              Подробнее о платформе
            </Button>
          </div>
        </div>
      </section>
      
      {/* Секция с лентой активности и статистикой */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <LiveFeed />
            </div>
            
            <div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-4">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Icon name="BarChart" className="mr-2 text-purple-500" />
                  Статистика платформы
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Пользователей</span>
                    <span className="text-white font-bold">12,458</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Открыто кейсов</span>
                    <span className="text-white font-bold">87,321</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Битв проведено</span>
                    <span className="text-white font-bold">23,145</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Выплачено призов</span>
                    <span className="text-white font-bold">₽4,567,890</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-600 rounded-lg p-4 text-white">
                <h3 className="text-xl font-bold mb-2">Специальное предложение</h3>
                <p className="mb-4">Получите +50% к первому пополнению баланса!</p>
                <Button variant="secondary" className="w-full bg-white text-purple-600 hover:bg-gray-100">
                  <Icon name="Wallet" className="mr-2 h-4 w-4" />
                  Пополнить баланс
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
