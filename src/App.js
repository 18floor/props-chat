import './App.css';
import MessageHistory from "./components/MessageHistory";
import {messagesData} from "./data/messagesData";

function App() {
    return (
        <div className="clearfix container">
            <div className="chat">
                <div className="chat-history">
                    <MessageHistory list={messagesData}/>
                </div>
            </div>
        </div>
    );
}

export default App;
