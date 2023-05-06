import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "b03793ff-74b3-4a4b-9212-ecc308096c4f",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh", width: "100vw" }}
      />
    </div>
  );
};

export default ChatsPage;
