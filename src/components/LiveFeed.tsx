
import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface Activity {
  id: number;
  username: string;
  action: string;
  amount: string;
  time: string;
  isWin: boolean;
}

const LiveFeed = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // Имитация получения активности
    const initialActivities: Activity[] = [
      { id: 1, username: "BlogMaster", action: "открыл кейс Технологии", amount: "+450₽", time: "только что", isWin: true },
      { id: 2, username: "ContentCreator", action: "проиграл в битве Лайфстайл", amount: "-200₽", time: "2 мин назад", isWin: false },
      { id: 3, username: "WordSmith", action: "выиграл в битве Бизнес", amount: "+750₽", time: "5 мин назад", isWin: true },
      { id: 4, username: "TechTalker", action: "открыл кейс Лайфстайл", amount: "+320₽", time: "7 мин назад", isWin: true },
      { id: 5, username: "StoryTeller", action: "проиграл в битве Технологии", amount: "-150₽", time: "10 мин назад", isWin: false },
    ];
    
    setActivities(initialActivities);
    
    // Имитация обновления ленты
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        username: `User${Math.floor(Math.random() * 1000)}`,
        action: Math.random() > 0.5 
          ? `открыл кейс ${["Технологии", "Лайфстайл", "Бизнес"][Math.floor(Math.random() * 3)]}` 
          : `${Math.random() > 0.5 ? "выиграл" : "проиграл"} в битве ${["Технологии", "Лайфстайл", "Бизнес"][Math.floor(Math.random() * 3)]}`,
        amount: Math.random() > 0.5 ? `+${Math.floor(Math.random() * 500) + 100}₽` : `-${Math.floor(Math.random() * 300) + 50}₽`,
        time: "только что",
        isWin: Math.random() > 0.5,
      };
      
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white flex items-center">
          <Icon name="Activity" className="mr-2 text-purple-500" />
          Лента активности
        </h3>
      </div>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between bg-gray-900 p-3 rounded-lg">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xs">
                {activity.username.substring(0, 2).toUpperCase()}
              </div>
              <div className="ml-3">
                <p className="text-white text-sm">
                  <span className="font-semibold">{activity.username}</span> {activity.action}
                </p>
                <p className="text-gray-400 text-xs">{activity.time}</p>
              </div>
            </div>
            <span className={`font-bold ${activity.isWin ? 'text-green-500' : 'text-red-500'}`}>
              {activity.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveFeed;
