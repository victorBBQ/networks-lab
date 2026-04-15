# CISCO_LAB — Interactive Network Guide

Step-by-step documentation for configuring a complete enterprise network infrastructure in **Cisco Packet Tracer**.

Simulates a fictional company (ABC) with two buildings (West and Ost), covering everything from basic security to failover and NAT.

🔗 **Live demo:** [victorBBQ.github.io/networks-lab](https://victorBBQ.github.io/networks-lab)

## Available Architectures

The site offers two design modes the user can toggle between:

- **Collapsed Core (L3):** Multilayer 3560 switches as core with inter-VLAN routing, HSRP, EtherChannel, and static/dynamic routing.
- **Router on a Stick (ROAS):** One router per building using dot1Q subinterfaces for inter-VLAN routing.

## Topics Covered

- VLAN design (Management, per-building users, servers)
- Security (SSH, port-security, BPDU guard, ACLs)
- L2 access switches (2960) and L3 core switches (3560)
- HSRP for gateway high availability
- DHCP, EtherChannel, RIPv2, and static routing
- NAT/PAT for internet access
- Wireless Access Point
- Verification and failover testing

Every CLI command includes a **"why"** explanation, designed to be educational.

## Languages

Available in **Spanish** and **German**, with a built-in language picker.

## Stack

- [Astro](https://astro.build/) v6
- [Tailwind CSS](https://tailwindcss.com/) v4
- Deployed on GitHub Pages

## Commands

| Command           | Action                                 |
| :---------------- | :------------------------------------- |
| `npm install`     | Install dependencies                   |
| `npm run dev`     | Start local server at `localhost:4321` |
| `npm run build`   | Production build to `./dist/`          |
| `npm run preview` | Preview build before deploying         |
