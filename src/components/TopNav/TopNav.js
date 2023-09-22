import Logo from "../../asset/images/logo.svg";
import styles from "./TopNav.module.css";
import share from "../../asset/images/ic_share.svg";
const TopNav = () =>{
    const APP_DOWNLOAD_LINK="https://open.shinhansec.com/phone/goM.jsp?p=OTUxMCYmJiZTJiY*&amp;v=2";
    const onClickShareButton=()=>{
        alert("공유하기")
    }
    const currentUrl = window.location.href; console.log(currentUrl);
    const onClickCopyButton=()=>{
        
        alert({currentUrl})
    }
    return (
    <div>
        {/*로고*/}
        <div className={styles.container}>
        <img src={Logo} alt="logo" />
        {/*앱다운로드*/}
      {/* <div className="rightButtonContainer"> */}
        <a href={APP_DOWNLOAD_LINK} target="_blank">
          <div className={styles.roundButton}>앱 다운로드</div>
        </a>

        <div className={styles.circleButton} onClick={onClickCopyButton}>
            <img src={share} alt="share"/> 
        </div>
        </div>
        {/* </div> */}
        {/*공유*/}


    </div>
    );
};

export default TopNav;
// 이렇게 해야 default 컴포넌트임을 인지할 수 있다. 