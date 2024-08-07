import { FC } from "react";
import Nav from "../components/Nav";

const Vlog: FC = () => {
  const videos = [
    {
      title: "天龙八部解说 第一部分",
      url: "https://www.youtube.com/embed/9p8F5ZiUgfE",
      date: "4月6日",
    },
    {
      title: "天龙八部解说 第二部分",
      url: "https://drive.google.com/file/d/1p03CskG-cG1AB2awMJo7iD16eO5O0HTs/preview",
      date: "4月13日",
    },
    {
      title: "天龙八部 故事情节",
      url: "https://www.youtube.com/embed/UuU3S3HCL_0",
      date: "4月20日",
    },
    {
      title: "神雕侠侣 第一部分",
      url: "https://www.youtube.com/embed/UkD0NrdyA4M",
      date: "5月4日",
    },
    {
      title: "神雕侠侣 第二部分",
      url: "https://drive.google.com/file/d/13sOba1NAwuUPZT4vKeCHat3o-cuSJgTp/preview",
      date: "5月25日",
    },
    {
      title: "神雕侠侣 第三部分",
      url: "https://www.youtube.com/embed/ry3AYYeUPqk",
      date: "6月1日",
    },
    {
      title: "射雕英雄传 第一部分",
      url: "https://drive.google.com/file/d/13sOba1NAwuUPZT4vKeCHat3o-cuSJgTp/preview",
      date: "6月8日",
    },
    {
      title: "射雕英雄传 第二部分",
      url: "https://drive.google.com/file/d/1pQOhxiv9WL_oNT42QQqQk9MxEg0V-sAP/preview",
      date: "6月15日",
    },
    {
      title: "射雕英雄传 第三部分",
      url: "https://drive.google.com/file/d/1N9Je7AaYk9ydt1LxY1LJ3FG1SeKMaGzW/preview",
      date: "6月22日",
    },
    {
      title: "射雕英雄传 人物 第一部分",
      url: "https://drive.google.com/file/d/1GydVd-hAZAZp5vVoeVl5tT7QzvfFrAgP/preview",
      date: "6月29日",
    },
    {
      title: "射雕英雄传 人物 第二部分",
      url: "https://drive.google.com/file/d/13wL6-MNwRosmIfvyvzLIdL2elYq2OySr/preview",
      date: "7月6日",
    },
    {
      title: "倚天剑 故事情节 第一部分",
      url: "https://drive.google.com/file/d/1pz7SX1PDhVbt9t-yY7UI0amj_maV8SPz/preview",
      date: "7月20日",
    },
    {
      title: "倚天剑 故事情节 第二部分",
      url: "https://drive.google.com/file/d/1BaCK3-qa1Ab5YWo3I-EvqCkvXQMhopYe/preview",
      date: "8月3日",
    },
    {
      title: "倚天剑 故事情节 第三部分",
      url: "https://drive.google.com/file/d/1UmiTK16YnWcGyhJDOP0ItYiG4AYRMQZp/preview",
      date: "8月5日",
    },
  ];

  return (
    <div className="bg-custom-nav min-h-screen">
      <Nav />
      <h1 className="text-4xl font-bold text-center mb-8 text-black">视频</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-72 mx-auto"
            >
              <div className="relative pt-[177.78%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-black">
                  {video.title}
                </h2>
                <p className="text-gray-500">上载日期: {video.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vlog;
