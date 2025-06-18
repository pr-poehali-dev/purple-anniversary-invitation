import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
  const contacts = [
    {
      icon: Phone,
      title: "Телефон",
      info: "+7 (999) 123-45-67",
      description: "Звоните с 9:00 до 21:00",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+7 (999) 123-45-67",
      description: "Отвечаем быстро!",
    },
    {
      icon: MapPin,
      title: "Адрес",
      info: "ул. Праздничная, 45",
      description: 'Ресторан "Фиолет"',
    },
    {
      icon: Clock,
      title: "Время",
      info: "15 июля, 18:00",
      description: "Начало торжества",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Контактная информация
          </h2>
          <p className="text-lg text-gray-600">
            Есть вопросы? Мы всегда на связи!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-purple-200 hover:border-primary"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <contact.icon className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {contact.title}
                </h3>
                <p className="text-primary font-semibold text-lg mb-1">
                  {contact.info}
                </p>
                <p className="text-gray-500 text-sm">{contact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-purple-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                🎊 Дополнительная информация
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Дресс-код</h4>
                  <p className="text-gray-600">
                    Нарядная одежда, желательно яркие цвета
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Парковка</h4>
                  <p className="text-gray-600">
                    Бесплатная парковка для гостей
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
