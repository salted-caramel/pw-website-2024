"use client";

import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";

const validPairs: { [key: string]: string[] } = {
  郭靖: ["降龙十八掌"],
  黄蓉: ["峨嵋刺"],
  欧阳锋: ["鬼头灵蛇杖"],
  杨过: ["玄铁重剑"],
  小龙女: ["玉蜂针"],
  张无忌: ["圣火令"],
  赵敏: ["倚天剑"],
  周芷若: ["倚天剑"],
  岳灵珊: ["碧水剑"],
  任我行: ["吸星大法"],
  段誉: ["六脉神剑"],
  乔峰: ["打狗棒"],
  虚竹: ["天山折梅手"],
  韦小宝: ["匕首"],
  陈家洛: ["珠索剑盾"],
  胡斐: ["冷月宝刀"],
  苗人凤: ["苗家心法"],
  狄云: ["血刀"],
  袁承志: ["金蛇剑"],
  蓝凤凰: ["毒蛇"],
  李文秀: ["星月争辉"],
  南仁通: ["冷月宝刀"],
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Page: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [isValidPair, setIsValidPair] = useState<boolean | null>(null);
  const [shuffledRoles, setShuffledRoles] = useState<string[]>([]);
  const [shuffledItems, setShuffledItems] = useState<string[]>([]);

  useEffect(() => {
    setShuffledRoles(shuffleArray(Object.keys(validPairs)));
    setShuffledItems(
      shuffleArray(Array.from(new Set(Object.values(validPairs).flat())))
    );
  }, []);

  const handleValidation = () => {
    if (validPairs[selectedRole]?.includes(selectedItem)) {
      setIsValidPair(true);
    } else {
      setIsValidPair(false);
    }
  };

  return (
    <div className="bg-custom-nav min-h-screen flex flex-col">
      <Nav />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg space-y-4">
          <select
            className="select select-bordered select-lg w-full"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedRole(e.target.value)
            }
            value={selectedRole}
          >
            <option disabled value="">
              选择角色
            </option>
            {shuffledRoles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          <select
            className="select select-bordered select-lg w-full"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedItem(e.target.value)
            }
            value={selectedItem}
          >
            <option disabled value="">
              选择武器
            </option>
            {shuffledItems.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <button className="btn btn-primary w-full" onClick={handleValidation}>
            查看
          </button>
        </div>
        {isValidPair !== null && (
          <div className="flex items-center justify-center mt-4">
            {isValidPair ? (
              <span className="text-green-500 text-3xl">✔️</span>
            ) : (
              <span className="text-red-500 text-3xl">❌</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
