import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Heart, Send, Star } from "lucide-react";

const WishesSection = () => {
  const [wishForm, setWishForm] = useState({
    name: "",
    message: "",
  });

  const [wishes] = useState([
    {
      name: "Анна",
      message:
        "Желаю тебе море счастья, крепкого здоровья и исполнения всех мечт! Ты удивительный человек! 💜",
      date: "2 дня назад",
    },
    {
      name: "Михаил",
      message:
        "С днём рождения! Пусть каждый день приносит радость и новые возможности. Оставайся такой же яркой!",
      date: "1 день назад",
    },
    {
      name: "Елена",
      message:
        "Поздравляю с юбилеем! 45 - это новый виток жизни, полный возможностей. Желаю любви и вдохновения! ✨",
      date: "12 часов назад",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wishForm.name || !wishForm.message) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }
    toast.success("Спасибо за поздравление! ❤️");
    setWishForm({ name: "", message: "" });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Пожелания и поздравления
          </h2>
          <p className="text-lg text-gray-600">
            Оставьте тёплые слова для именинницы
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Форма для добавления пожеланий */}
          <Card className="shadow-xl border-purple-200">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-xl text-center text-primary flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Написать поздравление
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="wishName" className="font-semibold">
                    Ваше имя
                  </Label>
                  <Input
                    id="wishName"
                    value={wishForm.name}
                    onChange={(e) =>
                      setWishForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Как вас зовут?"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="wishMessage" className="font-semibold">
                    Поздравление
                  </Label>
                  <Textarea
                    id="wishMessage"
                    value={wishForm.message}
                    onChange={(e) =>
                      setWishForm((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Напишите тёплые слова..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full font-semibold">
                  <Heart className="w-4 h-4 mr-2" />
                  Отправить поздравление
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Существующие пожелания */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <Star className="w-5 h-5 text-primary mr-2" />
              Поздравления от друзей
            </h3>

            {wishes.map((wish, index) => (
              <Card
                key={index}
                className="border-purple-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-primary">{wish.name}</h4>
                    <span className="text-xs text-gray-500">{wish.date}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {wish.message}
                  </p>
                </CardContent>
              </Card>
            ))}

            <div className="text-center">
              <p className="text-gray-500 text-sm">
                Всего поздравлений: {wishes.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
