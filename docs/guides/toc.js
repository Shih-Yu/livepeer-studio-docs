const toc = [
    "guides/index",
    {
        type: "category",
        label: "Start live streaming",
        link: { type: "doc", id: "guides/livestreaming/index" },
        collapsible: true,
        collapsed: true,
        items: [
            "guides/livestreaming/tutorial",
            "guides/livestreaming/broadcasting",
            "guides/livestreaming/api-key",
            "guides/livestreaming/verify",
            "guides/livestreaming/create-a-stream",
            "guides/livestreaming/playback",
            "guides/livestreaming/record",
            "guides/livestreaming/cdn",
            "guides/livestreaming/webhook",
            "guides/livestreaming/check-webhook-signatures",
            "guides/livestreaming/multistream",
            "guides/livestreaming/back-up-transcoding",
            "guides/livestreaming/reducing-latency",
            "guides/livestreaming/handling-disconnects",
            "guides/livestreaming/debug-live-stream-issues",
            "guides/livestreaming/create-paywall",
            "guides/livestreaming/support-matrix",
            "guides/livestreaming/monitoring-stream-health",
            "guides/livestreaming/srt-support"
        ]
    },
    "guides/api",
    {
        type: "category",
        label: "Application Development",
        link: { type: "doc", id: "guides/development/index" },
        collapsible: true,
        collapsed: true,
        items: [
            "guides/development/example-app",
            "guides/development/live-streaming-from-your-app",
            "guides/development/video-playback-in-your-app",
            "guides/development/custom-domain",
            "guides/development/per-stream-metrics"
        ]
    },
    { 
        type: 'category',
        label: 'Video NFT',
        link: { type: "doc", id: "guides/nft/index" },
        collapsible: true,
        collapsed: true,
        items: [
            "guides/nft/mint-a-video-nft",
            "guides/nft/build-a-video-nft-app"
        ]
    },
    "guides/usage-billing",
    "references/terminology"
]

module.exports = toc 