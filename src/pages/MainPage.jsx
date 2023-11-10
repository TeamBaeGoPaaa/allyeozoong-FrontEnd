import { Link } from "react-router-dom";
import Header from "../components/header/header.jsx";
import Onboarding from "../components/onboarding/onboarding.jsx";
import Card from "../components/Card/Card.jsx";
import "./MainPage.css";
import news1 from "../img/news1.jpg";
import news2 from "../img/news2.jpg";
import news3 from "../img/news3.jpg";
import news4 from "../img/news4.jpg";

export default function MainPage() {
  return (
    <>
      <div className="header">
        <Header />
      </div>

      <Onboarding />

      <div className="cards">
        <Link
          to="https://health.chosun.com/site/data/html_dir/2023/11/07/2023110700901.html"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card
            title="인생은 길고, 췌장은 요절한다"
            content="갑자기 날이 추워지면 몸이 외부 기온에 잘 적응하지 못한다. 혈액순환에 문제가 생기고, 면역체계가 무너져..."
            imgSrc={news1}
          />
        </Link>

        <Link
          to="https://m.health.chosun.com/svc/news_view.html?contid=2023110702470"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card
            title="난방해도 추운 방..'이곳'만 사수해도 체온 유지"
            content="갑자기 날이 추워지면 몸이 외부 기온에 잘 적응하지 못한다. 혈액순환에 문제가 생기고, 면역체계가 무너져..."
            imgSrc={news2}
          />
        </Link>

        <Link
          to="https://m.health.chosun.com/svc/news_view.html?contid=2023110700961"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card
            title="서울대생도... 57%가 아침에 '이것' 거른다"
            content="아침식사를 거의 하지 않는 대학생은 매일 아침을 먹는 대학생보다 대사증후군이 생길 위험이..."
            imgSrc={news3}
          />
        </Link>

        <Link
          to="https://health.chosun.com/site/data/html_dir/2023/11/03/2023110301824.html"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card
            title="새 옷 샀다고 바로 입지 마세요.. '이것'이 문제"
            content="부쩍 추워진 날씨 때문에 따뜻한 니트를 사는 등 새 옷 구매에 나선 사람이 많다. 대부분의 사람은 몸에 직접..."
            imgSrc={news4}
          />
        </Link>
      </div>
    </>
  );
}
