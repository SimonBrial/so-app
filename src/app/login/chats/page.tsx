import { AsideContainer } from "./AsideContainer";
import ChatSearch from "./ChatSearch";
import CardsContainer from "./CardsContainer";
import { ChatContainer } from "./ChatContainer";
import ChatInputText from "./chatUserView/ChatInputText";
import ConversationContainer from "./chatUserView/ConversationContainer";
import UserChatHeader from "./chatUserView/UserChatHeader";

function page(): JSX.Element {
  return (
    <>
      <AsideContainer>
        <ChatSearch />
        <CardsContainer />
      </AsideContainer>
      <ChatContainer>
        <UserChatHeader colorUser="instagram" status={true} />
        <ConversationContainer />
        <ChatInputText key={crypto.randomUUID()} />
      </ChatContainer>
    </>
  );
}

export default page;
