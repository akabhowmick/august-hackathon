import { AIChatBox } from "./Components/ChatBox/ChatBox";
import AttractionList from "./Components/Attractions/AttractionList";
import { Header } from "./Components/Header/Header";
import "react-chat-widget/lib/styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <AttractionList />
        <AIChatBox />
      </main>
    </>
  );
}

export default App;
