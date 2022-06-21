# Ariswap Labs Interface

[![Unit Tests](https://github.com/Ariswap/interface/actions/workflows/unit-tests.yaml/badge.svg)](https://github.com/Ariswap/interface/actions/workflows/unit-tests.yaml)
[![Integration Tests](https://github.com/Ariswap/interface/actions/workflows/integration-tests.yaml/badge.svg)](https://github.com/Ariswap/interface/actions/workflows/integration-tests.yaml)
[![Lint](https://github.com/Ariswap/interface/actions/workflows/lint.yml/badge.svg)](https://github.com/Ariswap/interface/actions/workflows/lint.yml)
[![Release](https://github.com/Ariswap/interface/actions/workflows/release.yaml/badge.svg)](https://github.com/Ariswap/interface/actions/workflows/release.yaml)
[![Crowdin](https://badges.crowdin.net/Ariswap-interface/localized.svg)](https://crowdin.com/project/Ariswap-interface)

An open source interface for Ariswap -- a protocol for decentralized exchange of Ethereum tokens.

- Website: [Ariswap.org](https://Ariswap.org/)
- Interface: [app.Ariswap.org](https://app.Ariswap.org)
- Docs: [Ariswap.org/docs/](https://docs.Ariswap.org/)
- Twitter: [@ariswap](https://twitter.com/Ariswap)
- Reddit: [/r/Ariswap](https://www.reddit.com/r/Ariswap/)
- Email: [contact@ariswap.org](mailto:contact@ariswap.org)
- Discord: [Ariswap](https://discord.gg/FCfyBSbCU5)
- Whitepapers:
  - [V1](https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig)
  - [V2](https://Ariswap.org/whitepaper.pdf)
  - [V3](https://Ariswap.org/whitepaper-v3.pdf)

## Accessing the Ariswap Interface

To access the Ariswap Interface, use an IPFS gateway link from the
[latest release](https://github.com/Ariswap/Ariswap-interface/releases/latest),
or visit [app.Ariswap.org](https://app.Ariswap.org).

## Unsupported tokens

Check out `useUnsupportedTokenList()` in [src/state/lists/hooks.ts](./src/state/lists/hooks.ts) for blocking tokens in your instance of the interface.

You can block an entire list of tokens by passing in a tokenlist like [here](./src/constants/lists.ts) or you can block specific tokens by adding them to [unsupported.tokenlist.json](./src/constants/tokenLists/unsupported.tokenlist.json).

## Contributions

For steps on local deployment, development, and code contribution, please see [CONTRIBUTING](./CONTRIBUTING.md).

## Accessing Ariswap V2

The Ariswap Interface supports swapping, adding liquidity, removing liquidity and migrating liquidity for Ariswap protocol V2.

- Swap on Ariswap V2: https://app.Ariswap.org/#/swap?use=v2
- View V2 liquidity: https://app.Ariswap.org/#/pool/v2
- Add V2 liquidity: https://app.Ariswap.org/#/add/v2
- Migrate V2 liquidity to V3: https://app.Ariswap.org/#/migrate/v2

## Accessing Ariswap V1

The Ariswap V1 interface for mainnet and testnets is accessible via IPFS gateways
linked from the [v1.0.0 release](https://github.com/Ariswap/Ariswap-interface/releases/tag/v1.0.0).