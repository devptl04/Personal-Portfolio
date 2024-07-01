import educationElements from "../assets/educationElements";
import schoolIcon from "../assets/school.svg";

export default function SchoolTimeline() {
  return (
    <div>
      {educationElements.map((element) => {
        return (
          <div key={element.id} className="flex m-4 relative">
            <div className="hidden items-start w-52 pt-0.5 relative sm:flex">
              <div className="w-4/5 text-gray-500">{element.date}</div>
              <div className={`w-1 h-full translate-x-5 translate-y-10 opacity-100 bg-white`}></div>
              <img
                src={schoolIcon}
                alt="icon"
                className='bg-sky-400 w-10 p-1 rounded-lg z-20'
              />
              <div className={`h-1 w-8 translate-y-5 opacity-100 bg-white`}></div>
            </div>
            <div className="font-serif border border-gray-600 px-8 py-4 mb-5 bg-[#082f49] w-full text-center z-10 sm:mr-20 sm:text-left">
              <div className="text-2xl font-bold mb-2">{element.title}</div>
              <div className="text-[#d4d4d8] italic mb-6 sm:mb-8 sm:text-sm">
                {element.location}
                <span className="sm:hidden">| {element.date}</span>
              </div>
              <ul className="mb-4 text-left text-sm list-disc">
                {element.description.map((description, index) => (
                  <li key={index} className="pb-3 font-ebGaramond tracking-wide">
                    {description}
                  </li>
                ))}
              </ul>
              <img
                src={schoolIcon}
                alt="icon"
                className='bg-sky-400 w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden m-2'
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
