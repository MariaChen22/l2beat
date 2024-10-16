import { UnixTime } from '@l2beat/shared-pure'
import { upcomingL2 } from './templates/upcoming'
import { Layer2 } from './types'

export const fuel: Layer2 = upcomingL2({
  id: 'fuel',
  createdAt: new UnixTime(1700571075), // 2023-11-21T12:51:15Z
  display: {
    name: 'Fuel',
    slug: 'fuel',
    description:
      'At Fuel we are building the fastest execution layer for the modular blockchain stack.',
    purposes: ['Universal'],
    category: 'Optimistic Rollup',
    links: {
      websites: ['https://fuel.network/'],
      apps: ['https://alpha.fuel.network/ecosystem/'],
      documentation: ['https://docs.fuel.network/'],
      explorers: ['https://fuellabs.github.io/block-explorer-v2/beta-4/#/'],
      repositories: ['https://github.com/FuelLabs/'],
      socialMedia: [
        'https://twitter.com/fuel_network',
        'https://discord.com/invite/fuelnetwork',
        'https://forum.fuel.network/',
      ],
    },
  },
})
