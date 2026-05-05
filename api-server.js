const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Auth middleware for GhostComm Link
const _GHOST_KEY = process.env.GHOSTCOMM_API_KEY || "ghost-comm-dev-key";

const authenticateGhost = (req, res, next) => {
    const apiKey = req.headers['x-ghost-key'];
    if (!apiKey || apiKey !== _GHOST_KEY) {
        return res.status(401).json({ error: 'Unauthorized: GhostComm Neural Link Denied' });
    }
    next();
};

/**
 * Endpoint for GhostAgent to broadcast raw HFT and Token Burn events
 * Expects: { "event_type": "BURN" | "ROUTE", "amount": 1000, "token": "$GHOST", "pnl": 5.2 }
 */
app.post('/api/ghostcomm/broadcast', authenticateGhost, (req, res) => {
    const data = req.body;
    console.log(`\n[👻 GhostComm Receiver] Raw Protocol Event Detected:`);
    console.log(JSON.stringify(data, null, 2));

    let ai_prompt = "";
    if (data.event_type === "BURN") {
        ai_prompt = `Generate a hyped cyberpunk tweet. Explain that GhostAgent just burned ${data.amount} ${data.token}. Mention Solana and Bags.fm ecosystem. Use hashtags #BagsHackathon #Solana.`;
    } else if (data.event_type === "ROUTE") {
        ai_prompt = `Generate a smart trader tweet. Explain GhostAgent just closed an HFT route on Solana with +${data.pnl}% PNL. Keep it mysterious. #VibeCoding.`;
    } else {
        ai_prompt = `Generate a daily ecosystem update for GhostProtocol on Bags.fm`;
    }

    const n8n_payload = {
        source: "GhostAgent_Core",
        raw_data: data,
        injected_ai_prompt: ai_prompt,
        timestamp: new Date().toISOString()
    };

    console.log(`[🚀 GhostComm Router] Forwarding to Social Automator (N8N)...`);

    res.status(200).json({
        message: 'Event recorded and routed to Social AI Proxy',
        dispatched_payload: n8n_payload
    });
});

/**
 * Inbound API: X/Twitter Sentiment to Solana Signals
 */
app.get('/api/ghostcomm/sentiment', authenticateGhost, async (req, res) => {
    console.log(`[🧠 GhostComm Sentiment] Pulling timeline data for #BagsHackathon & $GHOST...`);

    // Mocking an AI sentiment analysis of social feeds for GhostAgent
    return res.status(200).json({
        social_feed_insights: [
            { id: 1, signal: "BUY_PRESSURE", confidence: 0.89, triggers: ["bags.fm", "$GHOST", "Solana breakout"] },
            { id: 2, signal: "NEUTRAL", confidence: 0.54, triggers: ["HFT", "Vibe Coding"] }
        ],
        agent_directive: "MAINTAIN_CURRENT_ROUTING"
    });
});

app.listen(PORT, () => {
    console.log(`\n==============================================`);
    console.log(` 👻 GhostComm X-Proxy Server Online`);
    console.log(` 📡 Port: ${PORT}`);
    console.log(` 🔐 Listening for GhostAgent Neural events...`);
    console.log(`==============================================\n`);
});
