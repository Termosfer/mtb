import img1 from "../assets/valery-tenevoy-zlkqsup_wu8-unsplash.jpg";
import img2 from "../assets/bermix-studio-00heEp9LFP0-unsplash.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="px-4 sm:px-8 md:px-16 xl:px-30 py-12 md:py-20"
    >
      {/* Section title */}
      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold pb-10 md:pb-16">
        Haqqımızda
      </h1>

      {/* Block 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 pb-16 md:pb-20">
        <div className="overflow-hidden rounded-xl w-full md:w-1/2">
          <img
            src={img1}
            alt="seminar"
            className="w-full h-[250px] sm:h-[320px] md:h-[480px] object-cover
                       rounded-xl scale-100 hover:scale-110
                       transition-transform duration-700 ease-in-out"
          />
        </div>

        <div className="text-left w-full md:w-1/2">
          <h2 className="text-xl sm:text-2xl xl:text-4xl font-semibold">
            Biz kimik?
          </h2>
          <p className="pt-4 text-sm sm:text-base xl:text-xl text-gray-700 leading-12">
            MTB İncorporate MMC 2009-cu ildə təsis edilmişdir və tibbi təhsil,
            farmakologiya sahəsində ixtisaslaşmış tədris mərkəzidir.
            Fəaliyyətimizin əsas məqsədi səhiyyə mütəxəssislərinin bilik və
            bacarıqlarını müasir yanaşmalar əsasında inkişaf etdirməkdir.
          </p>
        </div>
      </div>

      {/* Block 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        <div className="text-left w-full md:w-1/2">
          <h2 className="text-xl sm:text-2xl xl:text-4xl font-semibold">
            Niyə MTB İncorporate?
          </h2>
          <p className="pt-4 text-sm sm:text-base xl:text-xl text-gray-700 leading-12">
            Uzun illər ərzində tibbi müəssisələr və sahə mütəxəssisləri üçün
            etibarlı tərəfdaş kimi fəaliyyət göstərən MTB İncorporate MMC,
            peşəkar ekspertiza və keyfiyyətə əsaslanan yanaşması ilə seçilir.
            Təlimlərimiz real təcrübəyə əsaslanır və beynəlxalq standartlara
            uyğun hazırlanır.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl w-full md:w-1/2">
          <img
            src={img2}
            alt="muzakire"
            className="w-full h-[250px] sm:h-[320px] md:h-[480px] object-cover
                       rounded-xl scale-100 hover:scale-110
                       transition-transform duration-700 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
