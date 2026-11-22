# Game DNS Pro

**Gaming DNS & Configuration Platform**

A private, mobile-first control panel for gaming DNS tools and network configuration.

## Project status

- Phase 1: project foundation and responsive interface
- DNS engine: not connected yet; no resolver is presented as tested
- Configuration engine: planned; real WireGuard profiles require a real server
- Languages: Persian (RTL) and English (LTR)

## Safety

Do not commit API tokens, passwords, private keys, or other secrets. Configure secrets in the hosting provider's secret manager.

## Run locally

Open `index.html` in a browser. This first stage is a static frontend and does not yet provide live DNS measurements or downloadable VPN configurations.

## Planned architecture

- Frontend: HTML, CSS, JavaScript
- Hosting/API: Cloudflare Pages and Workers
- Database: Cloudflare D1 (after the API design is ready)
- Source control: GitHub
