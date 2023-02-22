import Clrbutton from "../components/UI/Buttons/ClrButton";
import Editbutton from "../components/UI/Buttons/EditButton";
import Card from "../components/UI/Modals/Card";
import classes from "../styles/pages/MainPage.module.css";

function MainPage() {
  return (
    <>
      <div className={classes.wrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Editbutton>登出</Editbutton>
      <Clrbutton>編輯個人資料</Clrbutton>
      <p>this is Main page</p>;
    </>
  );
}

export default MainPage;
