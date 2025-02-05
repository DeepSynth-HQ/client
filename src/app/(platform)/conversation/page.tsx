import AgentQuote from "@/components/conversation/agent-quote";
import ConversationBox from "@/components/conversation/conversation-box";
import ConversationMenu from "@/components/conversation/conversation-menu";
import Intergrations from "@/components/conversation/intergrations";
import Suggestions from "@/components/conversation/suggestion";
import UserInput from "@/components/conversation/user-input";

export default function Conversation() {
  return (
    <div className="flex h-svh flex-col gap-4 p-4 transition-all duration-1000">
      <ConversationMenu />
      <AgentQuote />
      <ConversationBox />
      <UserInput />
      <Suggestions />
      <Intergrations />
    </div>
  );
}
