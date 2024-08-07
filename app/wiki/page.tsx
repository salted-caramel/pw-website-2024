import React from "react";
import Nav from "../components/Nav";

const Page = () => {
  return (
    <div className="bg-custom-nav min-h-screen">
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          武器收藏
        </h1>
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-gray-800 rounded-lg shadow-md">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-semibold text-white">
              射雕英雄传
            </div>
            <div className="collapse-content text-white p-4 bg-gray-700 rounded-b-lg">
              <p>打狗棒</p>
              <p>蛇杖</p>
              <p>虎头金刀</p>
              <p>降魔杖</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-gray-800 rounded-lg shadow-md">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold text-white">
              神雕侠侣
            </div>
            <div className="collapse-content text-white p-4 bg-gray-700 rounded-b-lg">
              <p>玄铁重剑</p>
              <p>君子剑</p>
              <p>锯齿金刀</p>
              <p>紫微软剑</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-gray-800 rounded-lg shadow-md">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold text-white">
              天龙八部
            </div>
            <div className="collapse-content text-white p-4 bg-gray-700 rounded-b-lg">
              <p>修罗刀</p>
              <p>鳄嘴剪</p>
              <p>鳄尾鞭</p>
              <p>柔丝索</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
