const teams = [
  {
    name: 'JDG',
    region: 'LPL',
    group: 'B',
    color: 'rgb(218, 232, 252, 0.9)'
  },
  {
    name: 'TES',
    region: 'LPL',
    group: 'C'
  },
  {
    name: 'EDG',
    region: 'LPL',
    group: 'A'
  },
  {
    name: 'GEN.G',
    region: 'LCK',
    group: 'D'
  },
  {
    name: 'T1',
    region: 'LCK',
    group: 'C'
  },
  {
    name: 'DWG',
    region: 'LCK',
    group: 'B'
  },
  {
    name: 'ROG',
    region: 'LEC',
    group: 'A'
  },
  {
    name: 'G2',
    region: 'LEC',
    group: 'B'
  },
  {
    name: 'C9',
    region: 'LCS',
    group: 'A'
  },
  {
    name: '100T',
    region: 'LCS',
    group: 'D'
  },
  {
    name: 'CFO',
    region: 'PCS',
    group: 'D'
  },
  {
    name: 'MES',
    region: 'VCS',
    group: 'C'
  },
  {
    name: 'RNG',
    region: 'LPL'
  },
  {
    name: 'DRX',
    region: 'LCK'
  },
  {
    name: 'FNC',
    region: 'LEC'
  },
  {
    name: 'MAD',
    region: 'LEC'
  },
  {
    name: 'BYG',
    region: 'PCS'
  },
  {
    name: 'EG',
    region: 'LCS'
  },
  {
    name: 'SBG',
    region: 'VCS'
  },
  {
    name: 'DNG',
    region: 'LJL'
  },
  {
    name: 'CHF',
    region: 'LCO'
  },
  {
    name: 'IW',
    region: 'TCL'
  },
  {
    name: 'ISG',
    region: 'LLA'
  },
  {
    name: 'LLL',
    region: 'CBLOL'
  }
];

export const teamList = teams.map((team, index) => ({
  x: 60 + 120 * Math.floor(index / 12),
  y: 30 + (index % 12) * 40,
  type: 'team-node',
  text: team.name,
  properties: {
    region: team.region
  }
}));


export const groupData = {
  nodes: [
    { id: 'groupA1_1', type: 'TBD-node', x: 349, y: 135, properties: { result: 'lose', score: 0, name: 'RGE' } },
    { id: 'groupA1_2', type: 'TBD-node', x: 349, y: 179, properties: { result: 'win', score: 3, name: 'JDG' } },
    { id: 'groupB1_1', type: 'TBD-node', x: 349, y: 281, properties: { result: 'lose', score: 0, name: 'RNG' } },
    { id: 'groupB1_2', type: 'TBD-node', x: 349, y: 325, properties: { result: 'win', score: 3, name: 'T1' } },
    { id: 'groupC1_1', type: 'TBD-node', x: 349, y: 454, properties: { result: 'lose', score: 2, name: 'DK' } },
    { id: 'groupC1_2', type: 'TBD-node', x: 349, y: 495, properties: { result: 'win', score: 3, name: 'GEN' } },
    { id: 'groupD1_1', type: 'TBD-node', x: 349, y: 621, properties: { result: 'lose', score: 2, name: 'EDG' } },
    { id: 'groupD1_2', type: 'TBD-node', x: 349, y: 665, properties: { result: 'win', score: 3, name: 'DRX' } },
    { id: 'groupA2_1', type: 'TBD-node', x: 758, y: 251, properties: { result: 'win', score: 3, name: 'T1' } },
    { id: 'groupA2_2', type: 'TBD-node', x: 758, y: 208, properties: { result: 'lose', score: 1, name: 'JDG' } },
    { id: 'groupA2_3', type: 'TBD-node', x: 758, y: 528, properties: { result: 'lose', score: 1, name: 'GEN' } },
    { id: 'groupA2_4', type: 'TBD-node', x: 758, y: 571, properties: { result: 'win', score: 3, name: 'DRX' } },
    { id: 'groupA3_3', type: 'TBD-node', x: 1141, y: 363, properties: { result: 'lose', score: 2, name: 'T1' } },
    { id: 'groupA3_4', type: 'TBD-node', x: 1141, y: 406, properties: { result: 'win', score: 3, name: 'DRX' } }
  ],
  edges: [
    {
      id: '2fd88cd8-000b-4582-96db-f9fe32e04047',
      type: 'better-line',
      sourceNodeId: 'groupB1_1',
      targetNodeId: 'groupA2_1',
      startPoint: { x: 482.55555555555554, y: 303 },
      endPoint: { x: 624, y: 230.77777777777777 },
      properties: {},
      pointsList: [
        { x: 482.55555555555554, y: 303 },
        { x: 482.55555555555554, y: 304.11111111111103 },
        { x: 552, y: 304.11111111111103 },
        { x: 552, y: 230 },
        { x: 624, y: 230 }
      ]
    },
    {
      id: 'af920f79-b7ed-4c48-918f-2b356eeaf15f',
      type: 'better-line',
      sourceNodeId: 'groupC1_1',
      targetNodeId: 'groupA2_4',
      startPoint: { x: 483, y: 476 },
      endPoint: { x: 628, y: 550 },
      properties: {},
      pointsList: [
        { x: 483, y: 476 },
        { x: 483, y: 473.77777777777777 },
        { x: 552, y: 473.77777777777777 },
        { x: 552, y: 550 },
        { x: 628, y: 550 }
      ]
    },
    {
      id: '340ad401-6cbb-4a8e-a0d0-9949c8801988',
      type: 'better-line',
      sourceNodeId: 'groupD1_1',
      targetNodeId: 'groupA2_4',
      startPoint: { x: 483, y: 643 },
      endPoint: { x: 896, y: 550 },
      properties: {},
      pointsList: [
        { x: 483, y: 643 },
        { x: 488.3333333333333, y: 643 },
        { x: 488.3333333333333, y: 643.0000000000002 },
        { x: 552, y: 643.0000000000002 },
        { x: 552, y: 550 },
        { x: 896, y: 550 }
      ]
    },
    {
      id: '850a2018-a9a0-4e88-983d-13a62da5f9be',
      type: 'better-line',
      sourceNodeId: 'groupA2_2',
      targetNodeId: 'groupA3_4',
      startPoint: { x: 892, y: 230 },
      endPoint: { x: 1275, y: 428 },
      properties: {},
      pointsList: [
        { x: 892, y: 230 },
        { x: 952, y: 230 },
        { x: 952, y: 384 },
        { x: 1012.7777777777778, y: 384 },
        { x: 1012.7777777777778, y: 428 },
        { x: 1275, y: 428 }
      ]
    },
    {
      id: 'f7592432-14ab-47dd-87b9-5c6db9bd0d0c',
      type: 'better-line',
      sourceNodeId: 'groupA2_3',
      targetNodeId: 'groupA3_4',
      startPoint: { x: 896, y: 550 },
      endPoint: { x: 1275, y: 428 },
      properties: {},
      pointsList: [
        { x: 896, y: 550 },
        { x: 896, y: 550.0000000000001 },
        { x: 952, y: 550.0000000000001 },
        { x: 952, y: 384 },
        { x: 1275, y: 384 },
        { x: 1275, y: 428 }
      ]
    },
    {
      id: '74800b85-7a28-4e87-8cd4-cee4789f5fe2',
      type: 'better-line',
      sourceNodeId: 'groupA1_1',
      targetNodeId: 'groupA2_2',
      startPoint: { x: 483, y: 157 },
      endPoint: { x: 624, y: 230 },
      properties: {},
      pointsList: [
        { x: 483, y: 157 },
        { x: 552, y: 157 },
        { x: 552, y: 230 },
        { x: 624, y: 230 }
      ]
    }
  ]
};
