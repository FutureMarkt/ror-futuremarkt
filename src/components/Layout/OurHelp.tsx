import Section from '../Section';

const OurHelp = () => {
  const id = "our-help";
  const header = "чем мы можем вам помочь";

  return (
    <Section id={id} header={header} theme="light">
      <div>
        {/* SERVICE FILTER */}
        <div className="flex gap-[30px] justify-center">
          {filters.map((filter) => (
            <a
              key={filter}
              href=""
              className="leading-6 border-b-2 border-[#030303]"
            >
              {filter} [0]
            </a>
          ))}
        </div>

        {/* LIST OF SERVICES */}
        <div>
          
        </div>
      </div>
    </Section>
  );
};

const filters = ["Проектная деятельность", "Аутстаффинг"];

export default OurHelp;
