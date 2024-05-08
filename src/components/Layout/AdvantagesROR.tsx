import Image from 'next/image';

import { affectBold700, ppNeueMontLight500 } from '@/utils/fonts';

import Section from '../Section';

const AdvantagesROR = () => {
  const id = "advantages-ror";
  const header = "Преимущества Ruby on Rails";

  return (
    <Section id={id} header={header} theme="light">
      {/* RoR advantages */}
      <div className="flex justify-between">
        <Image src="/_ror/ruby.png" width={640} height={483} alt="ruby" />
        <div className="max-w-[640px] w-[640px]">
          {Object.entries(advantages).map(([advt, desc], index) => (
            <div key={index} className="mb-8">
              <h4
                className={`text-xl uppercase leading-6 tracking-[1px] ${affectBold700.className}`}
              >
                {advt}
              </h4>
              <p className="mt-4 leading-[23px] text-lg text-[#4C4C4C]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* OUR APPROACH */}
      <div className="mt-[120px]">
        <h1
          className={`uppercase tracking-[5px] text-2xl text-center ${affectBold700.className}`}
        >
          наш подход к работе
        </h1>

        <div className="mt-[60px]">
          {Object.entries(approaches).map(([appr, desc], index) => (
            <div
              key={index}
              className={`flex justify-start text-xl tracking-[2px] py-[30px] border-b border-[#BDBDBD] leading-6 ${affectBold700.className}`}
            >
              <p>0{index + 1}</p>
              <div className="w-full flex justify-between ml-[419px]">
                <p className="uppercase">{appr}</p>
                <p
                  className={`text-xs max-w-[420px] leading-[16.1px] tracking-normal ${ppNeueMontLight500.className}`}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const advantages = {
  "БЫСТРОТА реализации":
    "Ruby on Rails позволяет нам значительно ускорить процесс разработки и превращать идеи в работающие продукты благодаря наличию готовых решений для многих задач, в сочетании с нашими гибкими методологиями, чтобы запустить ваш проект быстрее, чем когда-либо",
  "Поддержка баз данных":
    "Поддерживает работу с большинством широко известных систем управления базами данных, таких как MySQL, PostgreSQL и другие, что делает его универсальным решением для разработки",
  "Гибкий исходный код":
    "Фреймворк предоставляет возможность переработать код под ваши нужды. Гибко настраивается под различные типы приложений, которые необходимы бизнесу",
};

const approaches = {
  "эффективное УПРАВЛЕНИЕ":
    "Используем систему контроля версий (Git), а также предоставляем по запросу заказчика доступ к нашему репозиторию на платформах GitHub или GitLab",
  "прозрачность работы":
    "С использованием CI, Capistrano и непрерывного развертывания на staging-сервере, вы всегда в курсе процесса разработки вашего проекта",
  "покрытие кода проектов":
    "Обеспечиваем полное покрытие кода наших проектов автоматическими тестами с использованием Rspec, Capybara и Factorybot",
  "мониторинг и оптимизация":
    "Осуществляем мониторинг и исправление ошибок при помощи Sentry, выполняем мониторинг и оптимизацию производительности с использованием New Relic",
};

export default AdvantagesROR;
