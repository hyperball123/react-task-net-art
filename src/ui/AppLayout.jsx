import Award from "./Award";
import Header from "./Header";
import InfoData from "./InfoData";
import Footer1 from "./Footer1";

function AppLayout() {
  return (
    <>
      <Header />

      <section className="h-[80%] w-full flex flex-col md:flex-row justify-center items-center ">
        <div className="md:flex-grow ">
          <InfoData />
        </div>
        <div className="max-w-[32%] md:flex-grow md:order-first">
          <Award />
        </div>
      </section>

      <section className="mt-8 flex flex-col justify-center gap-2 font-[500] uppercase leading-5  text-center ">
        <p className="text-[0.75rem] sm:text-[0.822rem] md:text-[0.9rem]">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROleading-5
          tracking-tightSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE
          THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>

        <div className="sm:px-[6rem] md:px-[7rem] mt-2">
          <img src="/assets/3.png" alt="machines" />
        </div>

        <p className="text-[0.65rem] sm:text-xs md:text-sm mt-1 px-12 md:px-0">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <span className="w-full border-red-700 border mt-2"></span>
        <h3 className="font-bold mt-3 text-sm sm:text-[1rem]">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h3>
        <p className="text-[0.75rem] sm:text-[0.822rem] md:text-[1rem] uppercase sm:px-2 mt-2">
          CHEMICALS & PROCESS <span className="text-red-600">|</span> POWER
          WATER & WASTE WATER <span className="text-red-600">|</span> OILS & GAS
          <span className="text-red-600">|</span> PHARMA
          <span className="text-red-600">|</span> SUGARS & DISTILLERIES
          <span className="text-red-600">|</span> PAPER & PULP
          <span className="text-red-600">|</span> MARINE & DEFENCE
          <span className="text-red-600">|</span> METAL & MINING
          <span className="text-red-600">|</span> FOOD & BEVERAGE
          <span className="text-red-600">|</span> PETROCHEMICAL & REFINERIES
          <span className="text-red-600">|</span> SOLAR
          <span className="text-red-600">|</span> BUILDING
          <span className="text-red-600">|</span> HVAC
          <span className="text-red-600">|</span> FIRE FIGHTING
          <span className="text-red-600">|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </section>

      <Footer1 />
    </>
  );
}

export default AppLayout;
