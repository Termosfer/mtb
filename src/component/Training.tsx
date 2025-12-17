import { useState } from "react";


 interface TrainingItem {
    title:string;
    desc:string;
}


const trainingCategories: Record<string, TrainingItem[]> = {
  "Klinik": [
    { title: "Aktual klinik protokollar", desc: "İnfeksiyalar, xroniki xəstəliklər" },
    { title: "Pasiyentlərlə effektiv kommunikasiya", desc: "Ünsiyyət bacarıqlarının inkişafı" },
    { title: "Elektron tibbi sistemlərlə işləmək", desc: "Praktiki təlim və yönləndirmə" },
    { title: "Profilaktika və əhalinin sağlamlığı", desc: "Sağlamlıq tədbirləri və maarifləndirmə" },
    { title: "Təcili yardım əsasları", desc: "Təcili vəziyyətlərin idarəsi" }
  ],
  "Soft Skills": [
    { title: "Komanda işi və qarşılıqlı əlaqə", desc: "Effektiv komanda işinin inkişafı" },
    { title: "Emosional intellekt və stressin idarə olunması", desc: "Stress və emosiyaların idarəsi" },
    { title: "Liderlik və mentorluq", desc: "Liderlik bacarıqları və mentorluq" },
    { title: "Pasiyent və həmkarlarla konfliktlərin idarə edilməsi", desc: "Konfliktlərin həlli bacarıqları" }
  ],
  "Praktiki Bacarıqlar": [
    { title: "Prosedur və manipulyasiyalar üzrə praktiki bacarıqlar", desc: "Praktiki təlim və bacarıqlar" },
    { title: "Pasiyentlərin maarifləndirilməsi və müalicəyə riayət", desc: "Təhsil və riayət etmənin artırılması" },
    { title: "Bilik və bacarıqların yekunlaşdırılması", desc: "Əks əlaqə, testlər və təhlil" },
    { title: "Tibb bacısının işinin hüquqi əsasları", desc: "Normativ-hüquqi baza" },
    { title: "Ambulator xəstələrlə ünsiyyətdə etika və deontologiya", desc: "Etik davranış və qaydalar" },
    { title: "Profilaktika və dispanserizasiya", desc: "Xəstəliklərin qarşısının alınması" },
    { title: "İnfeksion təhlükəsizlik", desc: "Təhlükəsizlik protokolları" },
    { title: "Tibbi manipulyasiyalar", desc: "Praktiki bacarıqlar" }
  ]
};
const Training = () => {
    const [activeCategory, setActiveCategory] = useState<string>("Klinik");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 xl:px-30 py-20">
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-center mb-10" id="training">Təlimlərimiz</h2>

      
      <div className="flex justify-center mb-8 space-x-4">
        {Object.keys(trainingCategories).map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setOpenIndex(null);
            }}
            className={`px-4 py-2 rounded-lg font-medium text-sm md:text-base xl:text-lg  transition  w-50 xl:w-60 cursor-pointer ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {trainingCategories[activeCategory].map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className=" text-sm md:text-base xl:text-lg font-medium">{item.title}</span>
              <span className="text-sm md:text-base xl:text-lg">{openIndex === index ? "−" : "+"}</span>
            </button>
            <div
              className={`transition-all duration-300 px-4 ${
                openIndex === index ? "max-h-40 py-4" : "max-h-0 overflow-hidden"
              }`}
            >
              <p className="text-gray-700 text-xs md:text-sm xl:text-base font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Training;
