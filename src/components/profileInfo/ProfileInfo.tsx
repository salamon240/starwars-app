import React from "react";
import { ProfileProps, renderProfil } from "./proflrUtils";
import { CATEGORIES_KEYS } from "../../common/consts";

const ProfileInfo: React.FC<ProfileProps> = ({ propsInfo, category }) => {
  const renderProfile = () => {
    return propsInfo.map((item: any) =>
      renderProfil(category, item, CATEGORIES_KEYS)
    );
  };

  return (
    <div className="infro">
      <>{renderProfile()}</>
    </div>
  );
};

export default ProfileInfo;
