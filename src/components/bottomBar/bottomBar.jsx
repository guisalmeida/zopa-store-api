import { Footer } from "./styled";

const BottomBar = () => {
  return (
    <Footer>
      <div className="footer__content container">
        <p>
          © 2023 Zopa Clothing. Developed by{" "}
          <a href="https://www.guisalmeida.com" target="_blank" rel="noreferrer">
            guisalmeida.com
          </a>
        </p>
      </div>
    </Footer>
  );
};

export default BottomBar;
