# Game DNS Pro

A mobile-first gaming network toolkit for DNS inspection and connection configuration.

## Current build: 0.2.0
- Responsive Persian (RTL) and English (LTR) interface.
- DNS Lab performs live DNS-over-HTTPS A-record queries against Cloudflare and Google Public DNS.
- Each resolver is queried twice; the median browser request time is displayed.
- Resolver IPs can be copied for manual configuration.
- Config generation is intentionally not enabled until a real server is available.

## Measurement limits
The displayed time is the browser's HTTPS request duration to a DoH endpoint. It is not ICMP ping, in-game latency, or a measurement of Android's currently configured system resolver. Browser cache, network route, VPN, endpoint reachability, and device load affect results.

## Run
Open `index.html` in a modern browser. DoH tests require internet access and browser access to the public endpoints.

## Security
Never commit API tokens, passwords, private keys, or WireGuard credentials. Keep secrets in the hosting provider's secret manager.
