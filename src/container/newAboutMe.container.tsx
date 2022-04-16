import styled from "styled-components";
import "../App.css";
import Typed from "react-typed";
import { memoji } from "../assets";
const AboutMeContainer = styled.div`
  height: 100vh;
  color: white;
`;
const Text = styled.div`
  color: "#FFFFFF";
  font-size: 30px;
  font-family: "Orbitron";
`;

const Introduce = styled.div`
  margin-left: 40px;
  height: 300px;
`;
const MyPhoto = styled.div`
  margin-right: 250px;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Download = styled.div`
  position: relative;
  margin-left: 40px;
  display: flex;
  .resume,
  .Notion,
  .Blog {
    margin-top: 20px;
    font-family: "Press";
    display: flex;
    cursor: pointer;
  }
  .Blog, .Notion {
    margin-left: 20px;
  }
  .btn {
    border: 0.8px solid white;
    padding: 15px;
    border-radius: 6px;
    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
const Discript = styled.div`
  margin-top: 20px;
  line-height: 1.5;
  font-family: "Jura";
  color: "#FFFFFF";
  font-size: 20px;
`;

const aboutMe = () => {
  return (
    <AboutMeContainer>
      <FlexBox>
        <Introduce>
          <Text>Nayoun Ham</Text>
          <Text>Software Developer @ Igloo Corporation</Text>
          <Discript>
            <Typed
              className="typeJs"
              strings={[
                "Front-End developer<br/> Love coffee and travel <br/> Intersted in : Computer Vision, Data Visualization, Interactive Development </br> If you want to contact me, get down to next slide",
              ]}
              typeSpeed={35}
            />
          </Discript>
        </Introduce>

        <MyPhoto>
          <img src={memoji} />
        </MyPhoto>
      </FlexBox>
      <Download>
        <div className="resume">
          <div className="btn" onClick={() => window.open("https://pdfhost.io/v/RV9jvyH3S_Resume_newFormatdocx")}>CV / Resume</div>
        </div>
        <div className="Notion">
          <div className="btn" onClick={() => window.open("https://luminous-tarn-1f8.notion.site/Developer-Nayoun-Ham-d7baeecd7ab943f88d4f4651145a00a4")}>Notion CV</div>
        </div>
        <div className="Blog">
          <div className="btn" onClick={() => window.open("https://nayounlovesprawn.tistory.com/")}>Blog</div>
        </div>
      </Download>
    </AboutMeContainer>
  );
};

export default aboutMe;
