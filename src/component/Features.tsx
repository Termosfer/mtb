import img1 from "../assets/doctor.png";
import img2 from "../assets/first-aid-kit.png";
import img3 from "../assets/monitor.png";
import img4 from "../assets/documents.png";
import img5 from "../assets/group.png";

interface Feature {
  id: number;
  img: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    id: 1,
    img: img1,
    title: "Tibb kursları",
    desc: "İxtisasartırma və praktiki təlimlər",
  },
  {
    id: 2,
    img: img2,
    title: "Farmakologiya",
    desc: "Analitik yanaşma və tədris yönümlü fəaliyyət",
  },
  {
    id: 3,
    img: img3,
    title: "Marketinq tədqiqatları",
    desc: "Tibbi bazarın peşəkar analizi və strategiya",
  },
  {
    id: 4,
    img: img4,
    title: "Dövlət satınalmaları",
    desc: "Satınalma qanunvericiliyi və praktiki yanaşma",
  },
  {
    id: 5,
    img: img5,
    title: "Soft skills",
    desc: "Ünsiyyət, liderlik və emosional intellekt bacarıqları",
  },
];

const Features = () => {
  return (
    <div className=" py-20 mx-auto
                 px-4 sm:px-8 md:px-16 xl:px-30">
      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold pb-20" id="features">
        Əsas fəaliyyət istiqamətlərimiz
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {features.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white rounded-xl shadow 
                 hover:-translate-y-2 transition 
                 flex flex-col items-center w-full 2xl:w-[30%] md:w-[45%]"
          >
            <img src={item.img} alt={item.title} className="w-16 h-16 mb-4" />

            <h3 className="font-semibold text-base sm:text-base xl:text-lg mb-2">{item.title}</h3>

            <p className="text-gray-600 text-sm sm:text-sm xl:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
