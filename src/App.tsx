import { BarBasic } from "./components/barCharts";
import { Line } from "./components/areaCharts";
import { Bar } from "./components/columnCharts";
import styled from "styled-components";

function App() {
  return (
    <Warpper>
    <Container>
     <h1>DashBoards</h1>
      <SectionLine>
        <Line />
      </SectionLine>
      <Section>
        <Bar />
        <BarBasic />
      </Section>
    </Container>
    </Warpper>
  );
}

export default App;

const Container = styled.div`
 display: flex;
flex-direction: column;
justify-content: end;
`;
const SectionLine = styled.div`
 display: flex;
 justify-content: center;
`;
const Section = styled.div`
 display: flex;
 justify-content: center;
`;
const Warpper = styled.div`
padding-top: 60px;
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    color: #ffffff;
    display: flex;
    padding-left: 1.5%;
    width: 100%;
  }
`;