import { ConversationRole } from "@/types/conversation";

export interface ConversationSession {
  role: ConversationRole;
  session_id: string;
  content: string;
}

export interface Conversation {
  role: ConversationRole;
  content: string;
  images?: string[];
  session_id?: string;
}

export interface ActionSuggestion {
  title: string;
  description: string;
}

export interface Integration {
  title: string;
  description?: string;
  path?: string;
  image: string;
  isComingSoon?: boolean;
}

export interface ConversationPayload {
  session_id: string;
}

export interface AgentCallPayload {
  message?: string;
  session_id: string;
  images?: string[];
}
