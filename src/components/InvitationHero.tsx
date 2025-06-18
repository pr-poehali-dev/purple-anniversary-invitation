
import { Sparkles, Calendar, MapPin } from 'lucide-react';

const InvitationHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239b87f5" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8 animate-bounce">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
          С Днём Рождения!
        </h1>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-200 mb-8 animate-scale-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Приглашаем на 45-летие
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Празднуем важную дату в кругу близких и друзей
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-gray-800">Дата и время</p>
                <p className="text-gray-600">15 июля, 18:00</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-gray-800">Место проведения</p>
                <p className="text-gray-600">Ресторан "Фиолет"</p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 animate-fade-in">
          Ваше присутствие сделает этот день особенным! 💜
        </p>
      </div>
    </section>
  );
};

export default InvitationHero;
