import {SectionsContainer, Section} from 'react-fullpage';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import YouTube from "react-youtube";


const Chat = () => {

  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree','sectionFour'],
  };
  
  const inputForm = useRef();  //특정 DOM을 가리킬 때 사용하는 Hook함수, SecondDiv에 적용  
  const onMoveToForm = () => {    inputForm.current.scrollIntoView({ behavior: 'smooth', block: 'start' });  };

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/main');
  };

  return (

    <SectionsContainer {...options}>
      <Section>
        <div className="home" onClick={handleHomeClick} title='클릭하면, 메인 화면으로 이동합니다.'></div>
        <div className="container">
          <div div className="user">
            <div className="userText">
              <h5>'토마토 스파게티' 만드는 레시피 알려줘 🧑🏻‍🍳</h5>
            </div>
          </div>
          <div className="ai">
            <div className="aiDefault">
              <h5>💡 네, 요청하신 '김치찌개' 레시피입니다.</h5>
            </div>
            <div className="aiDefault2">
              <h5>💡 필요한 재료들을 먼저 알려드릴게요.</h5>
              <div className="ai_text">
              <h4>
                <label>
                  <input type="checkbox" />
                </label>
                돼지고기 (목살 또는 앞다리살): 300g<br />
                <label>
                  <input type="checkbox" />
                </label>
                김치: 1/4포기<br />
                <label>
                  <input type="checkbox" />
                </label>
                두부: 1/2모<br />
                <label>
                  <input type="checkbox" />
                </label>
                대파: 1/2대<br />
                <label>
                  <input type="checkbox" />
                </label>
                멸치액젓: 1큰술<br />
                <label>
                  <input type="checkbox" />
                </label>
                다진 마늘: 1큰술<br />
                <label>
                  <input type="checkbox" />
                </label>
                고춧가루: 1큰술<br />
                <label>
                  <input type="checkbox" />
                </label>
                참기름: 1작은술<br />
                <label>
                  <input type="checkbox" />
                </label>
                소금: 약간<br />
                <label>
                  <input type="checkbox" />
                </label>
                물: 3컵</h4>
              </div>
              
            </div>
          </div>   
          <div className="arrow1">
            <div className="Svg1"></div>
            <h6>아래로 스크롤하시면, 자세한 레시피가 나와요! 🥗</h6>
          </div>
        </div>
      </Section>
      <Section>
        <div className="home" onClick={handleHomeClick} title='클릭하면, 메인 화면으로 이동합니다.'></div>
        <div className="container">
          <div className="ai">
            <div className="aiDefault">
              <h5>💡 어렵지 않아요! 천천히 저만 따라오세요.</h5>
            </div>
            <div className="aiChap3">
              <h5>
                <label>
                  <input type="checkbox" />
                </label>
                김치는 굵게 다지고, 돼지고기는 먹기 좋은 크기로 썰어 준비합니다.<br />
                <label>
                  <input type="checkbox" />
                </label>
                양파는 채 썰고, 대파는 송송 썰어 준비합니다.<br />
                <label>
                  <input type="checkbox" />
                </label>
                두부는 1.5cm 크기로 깍둑썰기 하고, 물기를 제거해 준비합니다.<br />
                <label>
                  <input type="checkbox" />
                </label>
                냄비에 식용유를 두르고 중불에서 돼지고기를 볶다가 핏물이 나오면  종이 타월로 닦아냅니다.<br />
                <label>
                  <input type="checkbox" />
                </label>
                돼지고기가 익으면 김치를 넣고 볶습니다.<br />
                <label>
                  <input type="checkbox" />
                </label>
                김치가 볶아지면 물, 맛술, 설탕, 고춧가루를 넣고 끓입니다.<br />
                <label>
                  <input type="checkbox" />
                </label>
                끓어오르면 참치액젓, 다진 마늘을 넣고 5분 정도 더 끓입니다.<br />
                <label>
                  <input type="checkbox" />
                </label>
                양파, 대파를 넣고 2분 정도 더 끓입니다.<br />
                <label>
                  <input type="checkbox" />
                </label>
                마지막으로 두부를 넣고 1분 정도 끓여줍니다.<br />
                <label>
                  <input type="checkbox" />
                </label>
                천일염으로 간을 맞추고 그릇에 담아 뜨겁게 먹습니다.<br />
              </h5>
            </div>
            <div className="ai_img"></div>
          </div>
          <div className="ai">
            <div className="aiDefault">
              <h5>💡 더욱 맛있는 요리를 위해 recipeAI가 제공하는 TIP!</h5>
            </div>
            <div className="ai_text">
              <h4>
                김치가 신맛이 강하면 물에 살짝 씻어서 사용한다. <br/>
                돼지고기 대신 소고기를 사용해도 맛있다.<br/>
                두부 대신 묵을 사용해도 좋다.<br/>
                마지막에 라면 사리나 쌀풀을 넣으면 국물이 걸쭉해진다.<br/>
                취향에 따라 청양고추나 고춧가루를 넣어 매콤하게 만들 수도 있다.
              </h4>
            </div>
          </div>
          <div className="arrow3">
            <div className="Svg3"></div>
            <h6>아래로 스크롤하시면, 참고할만한 사이트가 나와요 🖥️</h6>
          </div>
        </div>
      </Section>
      <Section>
        <div className="container">
          <div className="ai">
            <div className="aiDefault">
              <h5>💡 영상을 참고하면, 더 쉽게 따라할 수 있어요. </h5>
            </div>
            <div className="ai_text">
              <h4>백종원 돼지고기 김치찌개 만들기</h4>
              <YouTube
                videoId="qWbHSOplcvY" //동영상 주소
                opts={{
                  width: "100%",
                  height: "270px",
                  playerVars: {
                  autoplay: 1, //자동 재생 여부 
                  modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                  loop: 1, //반복 재생
                  playlist: "qWbHSOplcvY", //반복 재생으로 재생할 플레이 리스트
                  },
                }}
                onReady={(e) => {
                  e.target.mute(); //소리 끔
                }}
              />
            </div>
            <div className="ai_text">
              <h4>절대 실패할 수 없는 김치찌개 레시피</h4>
              <YouTube
                videoId="tDlw8yMg9NY" //동영상 주소
                opts={{
                  width: "100%",
                  height: "150px",
                  playerVars: {
                  autoplay: 1, //자동 재생 여부 
                  modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                  loop: 1, //반복 재생
                  playlist: "tDlw8yMg9NY", //반복 재생으로 재생할 플레이 리스트
                  },
                }}
                onReady={(e) => {
                  e.target.mute(); //소리 끔
                }}
              />
            </div>
          </div>
          <div className="arrow2">
            <div className="Svg2"></div>
            <h6>아래로 스크롤하시면, 다른 레시피들이 나와요 🔖</h6>
          </div>
        </div>
      </Section>
      <Section>
        <div className="container">
          <div className="ai">
            <div className="aiDefault">
              <h5>💡 다양한 레시피를 찾고 계시나요?</h5>
            </div>
            <div className="ai_text">
              <h4>#한식</h4>
              <h5>
                #된장찌개 <br />
                #김치볶음밥<br />
                #불고기
              </h5>
            </div>
            <div className="ai_text">
              <h4>#양식</h4>
              <h5>
                #그릴드채소 <br />
                #알리오 올리오 파스타<br />
                #치킨 스테이크
              </h5>
            </div>
            <div className="ai_text">
              <h4>#일식</h4>
              <h5>
                #덮밥 <br />
                #라멘<br />
                #초밥
              </h5>
            </div>
            <div className="ai_text">
              <h4>#중식</h4>
              <h5>
                #깐풍기 <br />
                #짜장면<br />
                #탕수육
              </h5>
            </div>
          </div>
        </div>
      </Section>
  </SectionsContainer>
  )
}

export default Chat
