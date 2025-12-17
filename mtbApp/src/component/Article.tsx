import video from "../assets/3197808-hd_1920_1080_25fps.mp4";

const articleSections = [
  {
    id: 1,
    content:
      "2009-cu ildən başlayaraq Azərbaycan səhiyyə sistemi davamlı modernləşmə və inkişaf mərhələsindən keçmişdir. Bu dövrdə ölkədə tibbi infrastrukturların modernləşdirilməsi, yeni klinik protokolların tətbiqi və səhiyyə xidmətlərinin keyfiyyətinin artırılması istiqamətində mühüm addımlar atılmışdır.",
  },
  {
    id: 2,
    content:
      "2010-cu illərin əvvəllərindən etibarən tibbi təhsil və ixtisasartırma kursları genişləndirilmiş, tibbi kadrların bilik və bacarıqlarının artırılması üçün seminarlar və praktiki təlimlər həyata keçirilmişdir. Elektron tibbi sistemlərin tətbiqi də bu dövrdə başlamışdır.",
  },
  {
    id: 3,
    content:
      "2017–2019-cu illərdə rəqəmsal qeydiyyat sistemlərinin geniş tətbiqi ilə xəstə məlumatlarının idarə olunması və tibbi xidmətlərin səmərəliliyi artmışdır. Klinik protokollar beynəlxalq standartlara uyğunlaşdırılmış və tibbi xidmətlərin keyfiyyəti yüksəlmişdir.",
  },
  {
    id: 4,
    content:
      "2020–2022-ci illərdə COVID-19 pandemiyası ilə bağlı xüsusi protokollar və təlimlər tətbiq edilmiş, telemedicina və online konsultasiya imkanları genişləndirilmişdir. Bu dövrdə səhiyyə sisteminin çevikliyi və sürətli reaksiya qabiliyyəti əhəmiyyətli dərəcədə artırılmışdır.",
  },
  {
    id: 5,
    content:
      "2023–2025-ci illərdə tibbi təhsil, ixtisasartırma və soft skills (liderlik, komanda işi, stressin idarəsi) proqramlarının inkişafı davam etdirilmiş, elektron tibbi sistemlərin optimallaşdırılması və əhalinin maarifləndirilməsi sahəsində yeni addımlar atılmışdır. Bu illər ərzində Azərbaycan səhiyyəsi həm infrastruktur, həm də kadr potensialı baxımından güclənmişdir.",
  },
];

const Article = () => {

  return (
    <section className="mx-auto px-4 sm:px-8 md:px-16 xl:px-30 py-12 md:py-20">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold
                     text-center md:text-center pb-10 md:pb-16">
        Azərbaycanın Səhiyyəsinin İnkişafı
      </h1>

      {/* Video + Text */}
      <div className="flex flex-col xl:flex-row items-center gap-8">
        {/* Video */}
        <div className="w-full xl:w-1/2">
          <video
            src={video}
            className="w-full h-[220px] sm:h-[300px] lg:h-[800px] 2xl:h-[600px]
                       rounded-lg shadow-lg object-cover"
            controls
            autoPlay
            loop
            muted
            controlsList="nodownload"
          ></video>
        </div>

        {/* Text */}
        <div className="w-full xl:w-1/2 flex flex-col gap-4 text-gray-700">
          {articleSections.map((section) => (
            <p
              key={section.id}
              className="text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed text-left"
            >
              {section.content}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;
