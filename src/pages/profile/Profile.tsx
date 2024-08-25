import "./profile.css";
import ProfileInfo from "../../components/profileInfo/ProfileInfo";
import useProfile from "./useProfile";
function Profile() {
  const { categoris, imageUrl, dataProfil } = useProfile();

  return (
    <div className="Profile">
      <div className="mainProfile">
        <h1 className="proH1">{categoris}</h1>
        <div className="imgeProfil">
          <img className="imagpro" src={imageUrl} alt="" />
        </div>
        <ProfileInfo propsInfo={dataProfil} category={categoris} />
      </div>
    </div>
  );
}

export default Profile;
