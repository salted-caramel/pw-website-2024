import React from "react";
import Nav from "../components/Nav";

const page = () => {
  return (
    <div className="bg-gray-200">
      <Nav />
      <div className="bg-blue-200 h-screen px-6">
        <div className="flex gap-8 items-center h-full">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDG4iANm4kmkRUbVYqgMhGRtzbUB7XVl_HLWO3EI_J4qViw1_0"
            className="h-3/5"
          />
          <p className="text-gray-800 text-left text-4xl leading-relaxed">
            金庸连载《天龙八部》时，曾经因公到欧洲出差，时间上调度不开，所以就请好友，同为作家的倪匡帮他暂时代写几章。
          </p>
        </div>
      </div>
      <div className="bg-green-200 h-screen px-6">
        <div className="flex gap-8 items-center h-full">
          <p className="text-gray-800 text-left text-4xl leading-relaxed">
            根据统计，有清一代，查家一共出了14位进士，59位举人，可以说，走进查家，随便拽过来一个人，都是学霸级别的。
          </p>
          <img
            src="https://p2.itc.cn/images01/20230607/751539e791d7473eb362f513a22c60dd.jpeg"
            className="h-3/5"
          />
        </div>
      </div>
      <div className="bg-red-200 h-screen px-6">
        <div className="flex gap-8 items-center h-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsIPvAEMm3SOPz045UEWeQRICXg4ugvuQZA&s"
            className="h-3/5"
          />
          <p className="text-gray-800 text-left text-4xl leading-relaxed">
            1976年，金庸的长子查传侠在美国因为感情问题自缢身亡。
            一年后，金庸将十多年前就写完的《倚天屠龙记》增删修改，出了一部新版，并在后记中写道：然而，张三丰见到张翠山自刎时的悲痛，谢逊听到张无忌死讯时的伤心，书中写得太也肤浅了，真实人生中不是这样的。
          </p>
        </div>
      </div>
      <div className="bg-yellow-200 h-screen px-6">
        <div className="flex gap-8 items-center h-full">
          <p className="text-gray-800 text-left text-4xl leading-relaxed">
            金庸的小说《碧血剑》中，有一个叫做温仪的女性角色，这个女角色很不一般，因为她患有一种十分奇特的疾病，叫做“斯德哥尔摩综合征”
            (Stockholm Syndrome)。
            <br></br>
            所谓斯德哥尔摩综合征，是指在特定的环境和情景中，人质会对绑架者生出同情，怜悯，乃至于心理上的依赖感，从而开始反过来帮助绑架者。
          </p>
          <img
            src="https://p5.itc.cn/images01/20230607/9378446ec8dc451f953b9440447b6b7d.jpeg"
            className="h-3/5"
          />
        </div>
      </div>
      <div className="bg-violet-200 h-screen px-6">
        <div className="flex gap-8 items-center h-full">
          <img
            src="https://www.cite.com.my/images/p_download/1343039.jpg"
            className="h-3/5"
          />
          <p className="text-gray-800 text-left text-4xl leading-relaxed">
            金庸不仅写武侠小说，也写影评和散文。
            他写影评的时候，笔名叫做林欢，这个还算正常。
            但他写散文的时候，笔名突变，成了姚馥兰。
            其实，所谓“姚馥兰”，盲猜一波，原本的笔名应该是“your friend”。
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
