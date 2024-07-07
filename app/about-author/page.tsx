import Image from "next/image";
import Nav from "../components/Nav";

import jinyongImg from "../../public/images/jinyong.jpg";
import BookCover from "../components/BookCover";
import data from "../assets/data.json";
import Footer from "../components/Footer";

const AboutJinYong = () => {
  return (
    <div className="bg-custom-nav bg-cover backdrop-blur-2xl">
      <Nav />
      <div className="container mx-auto p-4">
        {/* Header */}
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold text-black mb-2">关于金庸</h1>
          <p className="text-xl text-gray-700">武侠文学大师</p>
        </header>

        {/* Introduction */}
        <section className="my-8">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="">
              <Image
                src={jinyongImg}
                alt="Jin Yong"
                width={300}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
              <p className="text-lg text-gray-800">
                金庸，原名查良镛，是著名的中国香港小说家，以武侠小说闻名。他的作品对中国文学和流行文化产生了重大影响。
              </p>
            </div>
          </div>
        </section>

        {/* Major Works */}
        <section className="my-8">
          <h2 className="text-3xl font-semibold text-center text-black mb-4">
            主要作品
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-6 gap-x-8 max-w-4xl mx-auto place-content-center sm:place-content-start w-4/5">
            {/* Repeat for each book */}
            <BookCover
              link={data[4].url}
              url={data[4].redirect}
              text={data[4].title}
            />
            <BookCover
              link={data[6].url}
              url={data[6].redirect}
              text={data[6].title}
            />
            <BookCover
              link={data[7].url}
              url={data[7].redirect}
              text={data[7].title}
            />
            <BookCover
              link={data[0].url}
              url={data[0].redirect}
              text={data[0].title}
            />
          </div>
        </section>

        {/* Impact and Legacy */}
        <section className="my-8">
          <h2 className="text-3xl font-semibold text-black mb-4 text-center">
            影响和遗产
          </h2>
          <p className="text-lg text-gray-800">
            金庸的影响不仅限于文学，还影响了电影、电视和流行文化。他的作品被改编成无数的电影和电视剧，他的叙事风格激励了许多作家和艺术家。
          </p>
          <ul className="list-disc text-gray-800 list-inside">
            <li>
              The Swordsman
              笑傲江湖：这部由徐克执导的电影是对于《笑傲江湖》的改编。李连杰在片中饰演一位卷入武林门派争斗的男子。(1990)
            </li>
            <li>
              Royal Tramp
              鹿鼎记：这部由王晶执导的电影是一部轻松搞笑的作品，是对于《鹿鼎记》的另类解读。周星驰饰演韦小宝，一位机灵古怪的太监，阴差阳错地捲入了皇宫是非之中。(1992)
            </li>
            <li>
              Ashes of Time
              東邪西毒：这部由王家卫执导的电影并不是直接改编自金庸的任何一部小说，但它借用了《射雕英雄传》等作品中的角色和主题。影片以一种诗意的叙事方式讲述了关于爱情、失落和英雄主义的含义。（1994）
            </li>
          </ul>

          <div className="my-4">
            <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-700 italic">
              “只要有人的地方就有恩怨，有恩怨就会有江湖，人就是江湖” - 金庸
            </blockquote>
          </div>
        </section>

        {/* Awards and Honors */}
        <section className="my-8">
          <h2 className="text-3xl font-semibold text-black mb-4 text-center">
            奖项与荣誉
          </h2>
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start text-gray-800">1981</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                英国女王伊丽莎白二世授予的“大英帝国官佐勋章” (OBE)。
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start text-gray-800">1992</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                法国政府授予的“荣誉军团骑士勋章” (Chevalier de la Légion
                d'Honneur)。
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start text-gray-800">2004</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                法国政府授予的“艺术与文学骑士勋章” (Commandeur de l'Ordre des
                Arts et des Lettres)。
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start text-gray-800">2005</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                中国作家协会“特别贡献奖”
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start text-gray-800">2008</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                中华文化终身成就奖
              </div>
            </li>
          </ul>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default AboutJinYong;
