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
      items: ['deus', 'dea' , 'timetoken' , 'dAssets', 'futures'],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Technical Explanations',
      items: ['shortpremium', 'vaults', 'oracles', 'amm', 'staking', 'limits', 'profit'],
      collapsed: false
    },

    {
      type: 'category',
      label: 'Tutorials',
      items: [ 'swap', 'synchronizer'],
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
