import styled from "styled-components";

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  font-family: Arial, sans-serif;
  padding: 20px;
  box-sizing: border-box;
`;

const Card = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 16px;
  text-align: center;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.2);
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #764ba2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  margin: 0 auto 20px auto;

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    font-size: 28px;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Description = styled.p`
  color: #666;
  font-size: 15px;
  margin-bottom: 25px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  background: #4CAF50;
  color: white;
  padding: 12px 26px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #43a047;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

function App() {
  return (
    <Page>
      <Card>
        <Avatar>D</Avatar>
        <Title>Styled Components</Title>
        <Description>
          This is Doris's React app styled using the Styled Components library.
        </Description>
        <Button onClick={() => alert("Completed Week 7 assignment!")}>
          Click Me
        </Button>
      </Card>
    </Page>
  );
}

export default App;