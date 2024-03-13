import React from 'react';
import image from '../../assets/images/pic.png';
// import { useNavigation } from '@react-navigation/native';

const Main = () => {
  // const navigation = useNavigation();

  // const onClickSearchButton = () => {
  //   navigation.navigate('/Chat');
  // };
  return (
    <div className="main">
      {/* <img src={image} /> */}
      <div className="container">
        <form>
          <div className="form-label">
            <span>즐거운 요리탐험을 시작해보세요!<br />
              다양한 레시피가 여러분을 기다리고 있습니다
            </span>
          </div>
          <div className="main_wrap">
            <div className="search">
                검색하기
            </div>
            <input type="text" placeholder="원하는 레시피, 무엇이든 물어보세요!"
                onFocus={(e) => {
                e.target.style.border = '1px solid #E64D0B';
              }}
                onBlur={(e) => {
                e.target.style.border = 'none';
              }}
            />
            <button className='searcbar'>
              검색하기
            </button>
            <hr class="hr-text" data-content="OR" />
            <div className="search">
                더 다양한 음식들을 보고 싶다면?
            </div>
            <div>
              <div className="cate">
                <button>#한식</button>
                <button>#양식</button>
                <button>#일식</button>
                <button>#중식</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Main