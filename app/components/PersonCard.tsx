import { StaticImageData } from "next/image";
import React from "react";

interface Props {
  image: StaticImageData;
  name: string;
  isLeader?: boolean;
}

const PersonCard = ({ image, name, isLeader = false }: Props) => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl">
      <figure className="mt-8">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={image.src} />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          {isLeader && <div className="badge badge-secondary">组长</div>}
        </h2>
      </div>
    </div>
  );
};

export default PersonCard;
