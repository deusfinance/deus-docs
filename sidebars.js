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
      items: ['intro','the_vision','timeline','roadmap','faq'],
      collapsed: false
    },

    {
      type: 'category',
      label: 'Tokens',
      items: ['deus', 'dea' , 'timetoken' , 'stocks', 'futures'],
      collapsed: false
    },

    {
      type: 'category',
      label: 'Deeper dive',
      items: ['amm','oracles', 'profit','treasury', 'risk_assessment', 'shortpremium'  ],
      collapsed: false
    },

    {
      type: 'category',
      label: 'Interface',
      items: ['swap', 'vaults', 'troubleshooting'],
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
