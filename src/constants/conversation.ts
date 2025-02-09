import { ActionSuggestion, Integration } from "@/interfaces/conversation";

export const actionSuggestions: ActionSuggestion[] = [
  {
    title: "Swap 10 $USDC to $SUI",
    description: "Using Bluefin to swap on Sui automatically",
  },
  {
    title: "Suggest action after I buy $Meme token",
    description: "Suggest action for user base on on-chain data",
  },
  {
    title: "What is crypto trending today?",
    description:
      "Using social networks and on-chain information to suggest the latest trends",
  },
  {
    title: "How to do Sui airdrop",
    description: "Instruct users how to do airdrop step by step",
  },
];

export const integrations: Integration[] = [
  {
    title: "Cetus Protocol",
    description:
      "Cetus is the leading DEX and liquidity protocol on Sui, which serves as the key liquidity and swap infra of the Sui ecosystem.",
    path: "https://www.cetus.zone/",
  },
  {
    title: "Suilend | Sui's DeFi Suite",
    description: "Sui's first lending protocol",
    path: "https://suilend.fi/",
  },
  {
    title: "Automa Network",
    description: "Decentralized AI private cloud",
    path: "https://atoma.network/",
  },
  {
    title: "DeepBook on Sui | Sui's Fully On-chain Order Book",
    description:
      "Deepbook is a high-throughput and low latency DEX with a fully on-chain order book capable of delivering a trading experience similar to that of a CEX.",
    path: "https://deepbook.tech/",
    isComingSoon: true,
  },
  {
    title: "Bluefin | Decentralized Financial Ecosystem",
    description:
      "A Financial Network With Parallelized Performance. Building the most powerful decentralized financial ecosystem. Performant, accessible, and intuitive.",
    path: "https://bluefin.io/",
  },
];
