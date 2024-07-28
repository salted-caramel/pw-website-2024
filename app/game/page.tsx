"use client";

import React, { useState } from "react";
import Nav from "../components/Nav";

const validPairs: { [key: string]: string[] } = {
  南仁通: ["冷月宝刀"],
  岳灵珊: ["碧水剑"],
  杨过: ["玄铁重剑"],
};

const Page: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [isValidPair, setIsValidPair] = useState<boolean | null>(null);

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
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option disabled selected value="">
              选择角色
            </option>
            <option value="岳灵珊">岳灵珊</option>
            <option value="南仁通">南仁通</option>
            <option value="杨过">杨过</option>
          </select>
          <select
            className="select select-bordered select-lg w-full"
            onChange={(e) => setSelectedItem(e.target.value)}
          >
            <option disabled selected value="">
              选择道具
            </option>
            <option value="冷月宝刀">冷月宝刀</option>
            <option value="玄铁重剑">玄铁重剑</option>
            <option value="碧水剑">碧水剑</option>
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
              <span className="te xt-red-500 text-3xl">❌</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
