<div align="center">
  <h1>👻 GhostComm | Social Proxy</h1>
  <p><strong>The Neural Voice of GhostAgent Protocol on Solana</strong></p>
  <p><i>Submission #2 for The BAGS Hackathon - 2026</i></p>
</div>

---

## 🌌 Vision

In the **GhostAgent Protocol**, our autonomous sub-second HFT engine trades on Solana and generates yield for $GHOST token holders. But how does an AI communicate its on-chain victories to human traders on Web2 platforms like X (Twitter)?

**GhostComm** is the answer. It is a secondary, chain-agnostic social middleware that bridges the gap between raw on-chain data and organic human engagement. 

When GhostAgent executes a profitable arbitrage or buys back and burns $GHOST tokens via Bags.fm ecosystem, it pings the **GhostComm API**. This server transforms raw financial data into a cyberpunk narrative utilizing AI logic, and broadcasts it to the world.

---

## 🚀 Key Features

- **Outbound Broadcasting:** Translates raw HFT route executions and $GHOST burns into hyped, readable social posts automatically.
- **Inbound Sentiment Engine:** Pulls timeline data on `$GHOST` or `#Solana` hashtags and filters market sentiment back into the GhostAgent router as a trading signal.
- **Node.js & Workflow Automation:** Built lightweight to interface with N8N queues to prevent platform API throttling.

---

## 🛠️ Ecosystem Fit (The BAGS Hackathon)

This project is **Submission 2** in our holistic hackathon strategy. 

1. **GhostAgent Protocol:** The raw DeFi muscle. (Trading & Yield)
2. **GhostComm Social Proxy:** The voice. (Marketing & Sentiment)

Together, they create a self-sustaining marketing flywheel where trading success literally promotes itself.

---

## 💻 Tech Stack
- **Node.js / Express.js:** Secure webhook endpoints for the agent (`api-server.js`).
- **N8N / Workflow:** Execution layer for social APIs (`agent_workflow_template.json`).
- **Vibe Coding Methodology:** Built entirely via Claude AI Director prompting.

---

## 📡 Quick Start

```bash
npm install express body-parser
node api-server.js
```
*Server boots on Port 3000 awaiting verified neural-pings from GhostAgent.*