import React from 'react';
import image from '../../assets/images/tomato.png';
// import jjigae from '../../assets/images/dj.jpg';
// import spa from '../../assets/images/ts.jpg';
// import cho from '../../assets/images/cb.webp';
// import jja from '../../assets/images/jj.jpg';
// import { useNavigation } from '@react-navigation/native';

const Main = () => {
  // const navigation = useNavigation();

  // const onClickSearchButton = () => {
  //   navigation.navigate('/Chat');
  // };
  return (
    <div className="main">
      <img className='background' src={image}  alt = "Pic" />
      <div className="form-label">
            <span>즐거운 요리탐험을 시작해보세요!<br />
              다양한 레시피가 여러분을 기다리고 있습니다
            </span>
        </div>
        <div className="top_wrap">
          <div className="search_text">
              검색하기
          </div>
          <input className='searchbar' type="text" placeholder="원하는 레시피, 무엇이든 물어보세요!"
            //   onFocus={(e) => {
            //   e.target.style.border = '1px solid #E64D0B';
            // }}
            //   onBlur={(e) => {
            //   e.target.style.border = 'none';
            // }}
          />
          {/* <button className='searcbar'>
            검색하기
          </button> */}
          <hr class="hr-text" data-content="OR" />
        </div>
        <div className="bottom_wrap"></div>
        {/* bottom_wrap이라는 부모 요소 안에서 작업해주세요
        위치값이 안 잡히면, bottom_wrap여기에 position relative를 주시고
        나머지 요소에 position absolute로 위치값 잡아서 해주세요
        근데 아마 될 거 같아요 위치 잡아둬서
        밑에 주석처리한 건 주석 해제하지 마세요 필요한 부분만 긁어다 쓰세옹
        scss에 주는 className값이랑 jsx에 있는  className값이랑 맞는 지 항상 확인!
        음식 사진들은 제가 없어서 오류나서 import 주석시켜뒀으니 주석 해제 해서 사용해주세요
        */}
      {/* <div className="container">
        <form>
          
          <div className="main_wrap">
            
            <hr class="hr-text" data-content="OR" />
            <div className="search">
                # 오늘의 인기 RECIPE
            </div>
            <div>
              <div className="cate">
                <button><img src = {""} alt = "된장찌개" /></button>
                <button><img src = {""} alt = "토마토스파게티" /></button>
                <button><img src = {""} alt = "초밥" /></button>
                <button><img src = {""} alt = "짜장면" /></button>
              </div>
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
};


export default Main