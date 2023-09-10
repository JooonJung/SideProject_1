import React from "react";
import "./style.css";
import closeIcon from "./image/close.png";
import shareIcon from "./image/share.png";
import tagIcon from "./image/tag.png";
import sampleImage1 from "./image/sample1.png";
import sampleImage2 from "./image/sample2.png";
import sampleImage3 from "./image/sample3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import warningSign1 from "./image/warning_1.png";
import warningSign2 from "./image/warning_2.png";
import warningSign3 from "./image/warning_3.png";
import warningSign4 from "./image/warning_4.png";
import ImageCard from "./components/ImageCard";
import StarRating from "./components/StarRating";
import userImage from "./image/userImageSample.jpg";
import ReviewComponent from "./components/ReviewComponent/ReviewComponent";
import DetailInfo from "./components/DetailInfoComponent/DetailInfo";
import SimilarItem from "./components/SimilarItemComponent/SimilarItemComponent";
import Navigation from "./components/Navigation/Navigation";
import { Link } from "react-router-dom";

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

const leftSubMenus = [
  {
    label: "방찾기",
    path: "",
  },
  {
    label: "즐겨찾기",
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
        id: 1,
        owner: "user1",
        userImage: userImage,
        grade: 4.5,
        reviewComment:
          "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서.",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        objectImage: userImage,
      },
      {
        id: 2,
        owner: "user2",
        userImage: userImage,
        grade: 4.5,
        reviewComment:
          "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        objectImage: userImage,
      },
      {
        id: 3,
        owner: "user2",
        userImage: userImage,
        grade: 4.5,
        reviewComment:
          "중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 .",
        livingTime: "2023년까지 거주",
        createdAt: "2일전",
        objectImage: userImage,
      },
    ],
    use: "공동주택",
    structure: "철근콘크리트구조",
    parkingLot: "총 4대",
    householdNum: "100세대",
    side: "동향",
    area: "100m2",
    floor: "5층",
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

export default function TempPage() {
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
      <div className="sub-menus">
        <div className="sub-menus__wrapper">
          <div className="left_sub_menus">
            {leftSubMenus.map((leftSubMenu, index) => {
              return (
                <div className="left_sub_menu__item" key={index}>
                  {leftSubMenu.label}
                </div>
              );
            })}
            <div className="left_sub_menu__item left_sub_menu__search">
              <input
                className="search__input"
                type="text"
                placeholder="원하시는 지역명, 지하철역, 단지명을 입력해주세요"
              />
              <div className="search__icon" onClick={() => {}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="right_sub_menus">
            <div className="sub_menus_filter filter_1">
              <div className="filter__label">
                <span>필터 1</span>
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <div className="filter__details-wrapper">필터 1</div>
            </div>
            <div className="sub_menus_filter filter_2">
              <div className="filter__label">
                <span>필터 2</span>
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <div className="filter__details-wrapper">필터 2</div>
            </div>
            <div className="sub_menus_filter filter_3">
              <div className="filter__label">
                <span>필터 3</span>
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <div className="filter__details-wrapper">필터 3</div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        {/* 코드시작 */}
        <div
          className="side-nav"
          style={{ width: "400px", height: "768px", overflow: "scroll" }}
        >
          <div
            className="sideNavTop"
            style={{
              paddingLeft: "16px",
              paddingRight: "16px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <img
              src={closeIcon}
              alt="closeIcon"
              style={{ width: "12px", height: "12px", strokeWidth: "10px" }}
            />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={shareIcon}
                alt="shareIcon"
                style={{
                  width: "16px",
                  height: "16px",
                  strokeWidth: "10px",
                  marginRight: "20px",
                }}
              />
              <img
                src={tagIcon}
                alt="tagIcon"
                style={{ width: "16px", height: "16px", strokeWidth: "10px" }}
              />
            </div>
          </div>
          <div className="side-nav__items-wrapper">
            <ImageCard
              imageItem={sidePhoto[0]}
              height={"200px"}
              width={"100%"}
            />
            <div className="blockContainer">
              <div
                className="titleContainer"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div className="side-items-title">건물 주소</div>
                <a href="" style={{ fontSize: "12px", textAlign: "center" }}>
                  더보기
                </a>
              </div>
              <div
                className="detailContainer"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "8px",
                  width: "100%",
                }}
              >
                <div
                  className="addressContainer"
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginTop: "2px",
                  }}
                >
                  <span>{sidePhoto[0].addressFirst}</span>
                  <br />
                  <span>{sidePhoto[0].addressSecond}</span>
                </div>
                <div
                  className="gradeContainer"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "2px",
                  }}
                >
                  <StarRating rating={sidePhoto[0].grade} />
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      paddingRight: "2px",
                    }}
                  >
                    {sidePhoto[0].grade}
                  </span>
                </div>
              </div>
            </div>
            <div className="blockContainer">
              <div className="side-items-title" style={{ marginBottom: "8px" }}>
                건물 정보
              </div>
              <div className="conditionGrid">
                <div className="warningSign">
                  <img
                    src={warningSign1}
                    alt="level1"
                    className="warningIcon"
                  />
                  <span className="levelText"> 심각 </span>
                  {sidePhoto[0].condition_1.map((item, index) => {
                    return (
                      <span className="tag" key={index}>
                        {item.tag}
                      </span>
                    );
                  })}
                </div>
                <div className="warningSign">
                  <img
                    src={warningSign2}
                    alt="level1"
                    className="warningIcon"
                  />
                  <span className="levelText"> 심각 </span>
                  {sidePhoto[0].condition_2.map((item, index) => {
                    return (
                      <span className="tag" key={index}>
                        {item.tag}
                      </span>
                    );
                  })}
                </div>
                <div className="warningSign">
                  <img
                    src={warningSign3}
                    alt="level1"
                    className="warningIcon"
                  />
                  <span className="levelText"> 주의 </span>
                  {sidePhoto[0].condition_3.map((item, index) => {
                    return (
                      <span className="tag" key={index}>
                        {item.tag}
                      </span>
                    );
                  })}
                </div>
                <div className="warningSign">
                  <img
                    src={warningSign4}
                    alt="level1"
                    className="warningIcon"
                  />
                  <span className="levelText"> 문제없음 </span>
                  {sidePhoto[0].condition_4.map((item, index) => {
                    return (
                      <span className="tag" key={index}>
                        {item.tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="blockContainer">
              <div className="side-items-title" style={{ marginBottom: "8px" }}>
                거주민 리뷰
              </div>
              <div className="reviewContainer">
                {sidePhoto[0].reviews.map((reviewItem, index) => {
                  return <ReviewComponent key={index} review={reviewItem} />;
                })}
              </div>
            </div>
            <div className="blockContainer">
              <div className="side-items-title" style={{ marginBottom: "8px" }}>
                건물 상세 정보
              </div>
              <div style={{ width: "100px" }}>
                <DetailInfo item={sidePhoto[0]} />
              </div>
            </div>
            <div className="blockContainer">
              <div className="side-items-title" style={{ marginBottom: "8px" }}>
                비슷한 매물
              </div>
              <SimilarItem item={sidePhoto[0].similarItems} />
            </div>
          </div>
        </div>
        <div className="map-container">
          <div className="map">지도 들어갈 자리</div>
        </div>
      </div>
    </div>
  );
}
