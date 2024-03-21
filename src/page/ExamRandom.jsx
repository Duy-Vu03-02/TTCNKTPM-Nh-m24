import React, { useState } from "react";
import back from "../data/svg/back.svg";
import "../resources/examRandom.css";
import background from "../data/png/background.png";
import QustionTemplate from "../component/QuesitonTemplate";
import { FiSkipBack } from "react-icons/fi";
import { FiSkipForward } from "react-icons/fi";
import { IoCheckmark } from "react-icons/io5";
import { GoDash } from "react-icons/go";
export default function ExamRandom(props) {
  const [showExam, setShowExam] = useState(false);

  const handleClick = () => {
    props.unComponent();
  };
  const handleShowExam = (value) => {
    setShowExam(value);
  };
  return (
    <>
      <div>
        <div>
          {showExam ? (
            <Exam btnTopic={handleShowExam} />
          ) : (
            <BoxExam btnClick={handleClick} btnExam={handleShowExam} />
          )}
        </div>
      </div>
    </>
  );
}

function BoxExam(props) {
  const handleBtnClick = () => {
    props.btnClick();
  };
  const handleBtnExam = () => {
    props.btnExam(true);
  };
  return (
    <>
      <div className="box-exam">
        <div className="title-exam flex">
          <img src={back} alt="" onClick={handleBtnClick} />
          <h3 className="bold">thi đề ngẫu nhiên hạng a1</h3>
        </div>
        <div className="introduce-exam ">
          <p className="bold">Cấu trúc đề thi</p>
          <div>
            <p>
              Thời gian làm bài: <span className="bold">19 phút</span>
            </p>
            <p>
              Tổng số câu hỏi: <span className="bold">25</span>
            </p>
            <p>
              Điểm tối thiểu đat: <span className="bold">21/25</span>
            </p>
            <p>
              Số câu điểm liệt: <span className="bold">1</span>
            </p>
          </div>

          <button className="btn-start" onClick={handleBtnExam}>
            Bắt đầu
          </button>
        </div>
      </div>
    </>
  );
}

function Exam(props) {
  const store = {
    id: 5,
    question: "cuộc đua xe chỉ được thực hiện khi nào?",
    img: background,
    answer: [
      "diễn ra trên đường phố không có người qua lại",
      "được người dân ủng hộ",
      "được cơ quan có thẩm quyền cấp phép",
      "được sự cho phép của Đảng và Nhà nước",
    ],
    trueAnswer: 2,
  };
  const store1 = { ...store };
  store1.id = 4;
  store1.img = null;

  const store2 = { ...store };
  store2.id = 3;

  const store3 = { ...store };
  store3.id = 2;

  const store4 = { ...store };
  store4.id = 1;

  // const listData = Array.from({ length: 25 }, () => store);
  const temp = [store, store1, store2, store3, store4];
  const listData = [...temp, ...temp, ...temp, ...temp, ...temp];

  const handleTopic = () => {
    props.btnTopic(false);
  };

  return (
    <>
      <div>
        <div className="box-exam">
          <div className="title-exam flex">
            <img src={back} alt="" onClick={handleTopic} />
            <h3 className="bold">đề ngẫu nhiên hạng a1</h3>
          </div>
          <div>
            <QustionTemplate dataQuestion={listData} />
          </div>
        </div>
      </div>
    </>
  );
}
