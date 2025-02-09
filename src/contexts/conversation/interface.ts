import { Conversation, ConversationSession } from "@/interfaces/conversation";

export interface ConversationContextValue {
  conversation: Conversation[];
  isThinking: boolean;
  isFetchingConversation: boolean;
  isFetchingConversationSessions: boolean;
  isAnswering: boolean;
  answeringText: string | null;
  conversationSessions: ConversationSession[][] | ConversationSession[];
  fetchConversation: ({ sessionId }: { sessionId: string }) => void;
  submitUserInput: ({
    message,
    images,
  }: {
    message?: string;
    images?: File[];
  }) => void;
  createConversation: () => void;
}

export type Referral = {
  code: string;
  total_used: number;
};

export type SessionUser = {
  id: string;
  username: string;
  address?: string;
  name: string;
  avatar?: string;
  referral?: Referral;
};

export interface Session {
  token: string;
  user: SessionUser;
}

export type SessionStatus = "authenticated" | "unauthenticated" | "loading";
export interface SessionContextValue {
  session: Session | null | undefined;
  status: SessionStatus;
}
