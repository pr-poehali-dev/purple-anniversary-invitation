import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Users, Wine, Coffee } from "lucide-react";

const GuestSurvey = () => {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    drinks: [] as string[],
    specialRequests: "",
  });

  const handleDrinkChange = (drink: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({ ...prev, drinks: [...prev.drinks, drink] }));
    } else {
      setFormData((prev) => ({
        ...prev,
        drinks: prev.drinks.filter((d) => d !== drink),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.attendance) {
      toast.error("Пожалуйста, заполните обязательные поля");
      return;
    }
    toast.success("Спасибо! Ваш ответ принят");
    console.log("Survey data:", formData);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Анкета гостя
          </h2>
          <p className="text-lg text-gray-600">
            Помогите нам организовать идеальный праздник
          </p>
        </div>

        <Card className="shadow-xl border-purple-200">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardTitle className="text-xl text-center text-primary">
              Подтвердите участие
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base font-semibold">
                  Ваше имя *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Введите ваше имя"
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-base font-semibold mb-4 block">
                  Сможете ли присутствовать? *
                </Label>
                <RadioGroup
                  value={formData.attendance}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, attendance: value }))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Да, обязательно буду! 🎉</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maybe" id="maybe" />
                    <Label htmlFor="maybe">Постараюсь прийти</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">К сожалению, не смогу</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold mb-4 block flex items-center">
                  <Wine className="w-5 h-5 mr-2 text-primary" />
                  Предпочтения по напиткам
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Вино красное",
                    "Вино белое",
                    "Шампанское",
                    "Пиво",
                    "Крепкие напитки",
                    "Безалкогольные",
                  ].map((drink) => (
                    <div key={drink} className="flex items-center space-x-2">
                      <Checkbox
                        id={drink}
                        checked={formData.drinks.includes(drink)}
                        onCheckedChange={(checked) =>
                          handleDrinkChange(drink, checked as boolean)
                        }
                      />
                      <Label htmlFor={drink} className="text-sm">
                        {drink}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label
                  htmlFor="requests"
                  className="text-base font-semibold flex items-center"
                >
                  <Coffee className="w-5 h-5 mr-2 text-primary" />
                  Особые пожелания
                </Label>
                <Input
                  id="requests"
                  value={formData.specialRequests}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      specialRequests: e.target.value,
                    }))
                  }
                  placeholder="Аллергии, диетические требования и т.д."
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                className="w-full py-3 text-lg font-semibold"
              >
                Отправить ответ
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GuestSurvey;
