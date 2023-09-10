import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RoomList.css";
import userImage from "./image/userImageSample.jpg";
import sampleImage from "./image/sample1.png";
import tagIcon from "./image/tag.png";
import Separator from "./components/Separator";
import ToggleBtn from "./components/ToggleBtnFilled/ToggleBtn";
import RoomListCard from "./components/RoomListCard/RoomListCard";
import RoomCard from "./components/RoomListCard/RoomCard";

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

const Data = [
  {
    id: 0,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 1,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 2,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 3,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 4,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 5,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 6,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 0,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 1,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 2,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 3,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 4,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 5,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 6,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 0,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 1,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 2,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 3,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 4,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 5,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
  {
    id: 6,
    title: "title",
    region: "region",
    price: "price",
    period: "period",
    updatedAt: "updatedAt",
    image: sampleImage,
    userImage: userImage,
  },
];

const regionList = ["경상북도 경산시", "item1", "item2", "item3"];
const structureList = ["구조", "item1", "item2", "item3"];
const priceList = ["가격", "item1", "item2", "item3"];

function ListItem({ item }) {
  return (
    <div className="itemGrid">
      <div>{item.region}</div>
      <div>{item.title}</div>
      <div>{item.price}</div>
      <div>{item.period}</div>
      <div>{item.updatedAt}</div>
    </div>
  );
}

const ITEMS_PER_PAGE = 13; // 한 페이지당 게시물 수

export default function RoomList() {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호

  // 현재 페이지에 따라 게시물을 필터링
  const currentData = Data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 페이지네이션 컴포넌트
  const Pagination = () => {
    const totalPages = Math.ceil(Data.length / ITEMS_PER_PAGE);
    const maxVisiblePages = Math.min(5, totalPages); // 최대 페이지 수와 5 중 작은 값을 선택

    let startPage = currentPage - Math.floor(maxVisiblePages / 2);
    startPage = Math.max(startPage, 1);

    let endPage = startPage + maxVisiblePages - 1;
    endPage = Math.min(endPage, totalPages);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1); // startPage가 음수가 되지 않도록 보장
    }

    const pages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => i + startPage
    );

    return (
      <div className="pagination">
        {currentPage !== 1 && (
          <>
            <button onClick={() => setCurrentPage(1)}>&laquo;&laquo;</button>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              &laquo;
            </button>
          </>
        )}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
        {currentPage !== totalPages && (
          <>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              &raquo;
            </button>
            <button onClick={() => setCurrentPage(totalPages)}>
              &raquo;&raquo;
            </button>
          </>
        )}
      </div>
    );
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
      <div className="roomContainer">
        <div className="roomHeader">
          <div className="title-wrapper__title">전체</div>
          <div className="subText" style={{ marginLeft: "8px" }}>
            {Data.length}개
          </div>
        </div>
        <Separator height={"8px"} />
        <div className="listWithImage">
          <div className="listWithImage__top">
            <div className="listWithImage__category">
              <ToggleBtn items={regionList} filled={false} />
              <ToggleBtn items={structureList} filled={false} />
              <ToggleBtn items={priceList} filled={false} />
            </div>
            <ToggleBtn items={["최신순", "인기순"]} filled={true} />
          </div>
          <div className="listWithImage__list">
            <RoomListCard RoomList={Data} />
          </div>
        </div>
        <Separator height={"20px"} />
        <div className="listWithImage__top">
          <div style={{ fontSize: "20px", fontWeight: "700" }}>승계 목록</div>
          <ToggleBtn items={["최신순", "인기순"]} filled={true} />
        </div>
        <div className="textList">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr 1fr 2fr 1fr",
              marginTop: "16px",
              paddingBottom: "8px",
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <div>지역</div>
            <div>제목</div>
            <div>금액</div>
            <div>계약 기간</div>
            <div>등록일</div>
          </div>
          {currentData.map((item) => (
            <ListItem item={item} />
          ))}
        </div>
        <Pagination />
      </div>
      <Separator height={"80px"} />
    </div>
  );
}
