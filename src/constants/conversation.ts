import AtomaNetworkIcon from "@/assets/svgs/atoma-network.svg";
import BluefinIcon from "@/assets/svgs/bluefin.svg";
import CetusIcon from "@/assets/svgs/cetus.svg";
import DeepbookIcon from "@/assets/svgs/deepbook.svg";
import SuilendIcon from "@/assets/svgs/suilend.svg";
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
    image: CetusIcon,
  },
  {
    title: "Suilend | Sui's DeFi Suite",
    description: "Sui's first lending protocol",
    path: "https://suilend.fi/",
    image: SuilendIcon,
  },
  {
    title: "Atoma Network",
    description: "Decentralized AI private cloud",
    path: "https://atoma.network/",
    image: AtomaNetworkIcon,
  },
  {
    title: "DeepBook on Sui | Sui's Fully On-chain Order Book",
    description:
      "Deepbook is a high-throughput and low latency DEX with a fully on-chain order book capable of delivering a trading experience similar to that of a CEX.",
    path: "https://deepbook.tech/",
    image: DeepbookIcon,
  },
  {
    title: "Bluefin | Decentralized Financial Ecosystem",
    description:
      "A Financial Network With Parallelized Performance. Building the most powerful decentralized financial ecosystem. Performant, accessible, and intuitive.",
    path: "https://bluefin.io/",
    image: BluefinIcon,
  },
];
