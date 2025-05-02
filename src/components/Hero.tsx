
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1000')] bg-cover bg-center opacity-10"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              <span className="text-purple-500">Блог</span> битвы начинаются здесь!
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Создавайте уникальный контент, соревнуйтесь с другими блогерами и выигрывайте ценные призы в наших кейс-битвах.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-500">
                <Icon name="Rocket" className="mr-2 h-5 w-5" />
                Начать битву
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
                <Icon name="Package" className="mr-2 h-5 w-5" />
                Открыть кейсы
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-75"></div>
              <div className="relative bg-black rounded-lg p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Топ зачисления недели</h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                            {i}
                          </div>
                          <span className="font-medium text-white">Блогер#{i}</span>
                        </div>
                        <span className="text-purple-500 font-bold">+{i * 1250}₽</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
