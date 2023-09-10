import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./ReviewDetail.css";
import backButton from "./image/backward.png";
import sampleImage1 from "./image/sample1.png";
import sampleImage2 from "./image/sample2.png";
import sampleImage3 from "./image/sample3.png";
import userImage from "./image/userImageSample.jpg";
import ImageCard from "./components/ImageCard";
import Separator from "./components/Separator";
import shareIcon from "./image/share.png";
import SideInfo from "./components/SideInfo/SideInfo";
import ReviewHeader from "./components/ReviewHeader/ReviewHeader";

const mainMenus = [
  {
    label: "지도",
    path: "",
  },
  {
    label: "AI 추천",
    path: "",
  },
  {
    label: "승계방",
    path: "",
  },
  {
    label: "혜택",
    path: "",
  },
];

const sidePhoto = [
  {
    images: [
      {
        image: sampleImage1,
      },
      {
        image: sampleImage2,
      },
      {
        image: sampleImage3,
      },
    ],
    addressFirst: "경기 성남시 분당구 대원판교로 660",
    addressSecond: "유스커에스 209호",
    grade: 4.1,
    condition_1: [
      {
        tag: "냄새",
      },
      {
        tag: "소음",
      },
    ],
    condition_2: [
      {
        tag: "일조량",
      },
      {
        tag: "통풍",
      },
    ],
    condition_3: [
      {
        tag: "쓰레기처리",
      },
    ],
    condition_4: [
      {
        tag: "방음",
      },
      {
        tag: "편의시설",
      },
    ],
    reviews: [
      {
        id: 0,
        owner: "user1",
        userImage: userImage,
        grade: 4.5,
        reviewComment:
          "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        veiw: 10,
      },
      {
        id: 1,
        owner: "user2",
        userImage: userImage,
        grade: 4.5,
        reviewComment:
          "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        veiw: 10,
      },
      {
        id: 2,
        owner: "user3",
        userImage: userImage,
        grade: 4.5,
        reviewComment:
          "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        updatedAt: "2023.05.29. 11:50",
        objectImage: userImage,
        veiw: 10,
      },
    ],
    use: "공동주택",
    structure: "투룸",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
    saleType: "월세",
    fee: "5만원",
    price: "200 / 30",
    similarItems: [
      {
        image: sampleImage1,
        address: "서울 성동구 성수동1가 656-1",
        text: "random text",
      },
      {
        image: sampleImage1,
        address: "서울 성동구 성수동1가 656-1",
        text: "random text",
      },
      {
        image: sampleImage1,
        address: "서울 성동구 성수동1가 656-1",
        text: "random text",
      },
    ],
  },
];

export default function ReviewDetail() {
  const { reviewId } = useParams();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="layout_root">
      <nav className="navigation">
        <div className="navigation__navitems">
          <h1 className="navitem__logo">단비집</h1>
          <div className="navitem__main-menus">
            <Link>
              <div className="main-menus__item">{mainMenus[0].label}</div>
            </Link>
            <Link>
              <div className="main-menus__item">{mainMenus[1].label}</div>
            </Link>
            <Link to={`/승계방`}>
              <div className="main-menus__item">{mainMenus[2].label}</div>
            </Link>
            <Link>
              <div className="main-menus__item">{mainMenus[3].label}</div>
            </Link>
          </div>
          <div className="navitem__user_menus">
            <a className="user_menus__item user_msg" href="">
              <span>메시지</span>
            </a>
            <div className="user_menus__item user_profile">
              <div className="user_profile__user_name">넨도님</div>
              <div className="user_profile__user_img"></div>
            </div>
            <a className="user_menus__item user_write" href="">
              <span>
                글쓰기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="arrow-down"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </nav>
      <div className="containerWrapper">
        <div className="container">
          <div className="header">
            <button onClick={handleGoBack} className="custom-button-with-icon">
              <img src={backButton} alt="backButton" />
              뒤로가기
            </button>
            <Separator height={"12px"} />
            <div className="subHeader">방 정보 {">"} 거주민리뷰</div>
          </div>
          <div className="reviewContent">
            <div className="userReviewContainer">
              <ImageCard imageItem={sidePhoto[0]} height={"400px"} />
              <ReviewHeader user={sidePhoto[0].reviews[reviewId]} />
              <hr style={{ marginTop: "16px", color: "lightgray" }} />
              <div style={{ fontSize: "12px", lineHeight: "1.3" }}>
                {sidePhoto[0].reviews[reviewId].reviewComment}
              </div>
              <Separator height={"40px"} />
              <div className="etcContainer">
                <div className="etcText">
                  {sidePhoto[0].reviews[reviewId].updatedAt}
                </div>
                <div className="etcText">
                  조회 {sidePhoto[0].reviews[reviewId].veiw}
                </div>
                <img
                  src={shareIcon}
                  alt="shareIcon"
                  style={{ width: "12px", height: "12px" }}
                />
              </div>
            </div>
            <div className="detailInfoContainer">
              <SideInfo item={sidePhoto[0]} />
            </div>
          </div>
          <Separator height={"80px"} />
        </div>
      </div>
    </div>
  );
}
