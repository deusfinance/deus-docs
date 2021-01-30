/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: [

    {
      type: 'category',
      label: 'Introduction',
      items: ['nutshell', 'intro', 'deus', 'dea' , 'timetoken' , 'stocks', 'futures'],
      collapsed: false
    },

    {
      type: 'category',
      label: 'Deeper dive',
      items: ['timeline', 'faq', 'profit',  'the_vision', 'roadmap'],
      collapsed: false
    },

    {
      type: 'category',
      label: 'Interface',
      items: ['swap', 'amm', 'vaults', 'oracles', 'zap', 'troubleshooting'],
      collapsed: false,
    },

    {
      type: 'category',
      label: 'Tokenomics',
      items: ['tokens_readme', 'treasury', 'risk_assessment'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'DEUS DAO',
      items: ['governance','dao', 'contribute'],
      collapsed: false,
    }

  ],
}
