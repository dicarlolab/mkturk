export const taskParamSchema = {
  title: 'MkTurk Task Params',
  description: 'Object containing MkTurk task parameters',
  type: ['object', 'array'],
  properties: {
    Agent: {
      type: 'string',
    },
    CheckRFID: {
      type: 'integer',
    },

    Automator: {
      type: ['string', 'integer'],
    },
    AutomatorFilePath: {
      type: 'string',
      examples: [
        '/mkturkfiles/paramterfiles/automators/touch_m2s_objectome.json',
      ],
    },
    CurrentAutomatorStage: {
      type: 'integer',
    },
    MinPercentCriterion: {
      type: 'integer',
    },
    MinTrialsCriterion: {
      type: 'integer',
    },
    DragtoRespond: {
      type: 'integer',
    },
    CalibrateEye: {
      type: 'integer',
    },
    NRSVP: {
      type: 'integer',
    },
    SameDifferent: {
      type: 'integer',
    },
    SamplingStrategy: {
      type: 'string',
    },
    NStickyResponse: {
      type: 'integer',
    },
    NTrialsPerBagBlock: {
      type: 'integer',
    },
    NGridPoints: {
      type: 'integer',
      minimum: 1,
    },
    GridSpacingInches: {
      type: 'number',
    },
    GridXOffsetInches: {
      type: 'number',
    },
    GridYOffsetInches: {
      type: 'number',
    },
    FixationGridIndex: {
      type: 'integer',
      minimum: -1,
    },
    SampleGridIndex: {
      type: 'integer',
      minimum: -1,
    },
    ObjectGridIndex: {
      type: 'array',
      items: {
        type: 'integer',
        minimum: 0,
      },
    },
    ChoiceGridIndex: {
      type: 'array',
      items: {
        type: 'integer',
        minimum: 0,
      },
    },
    TestGridIndex: {
      type: 'array',
      items: {
        type: 'integer',
        minimum: 0,
      },
    },
    NFixations: {
      type: 'integer',
      minimum: 1,
    },
    FixationUsesSample: {
      type: 'integer',
    },
    FixationSizeInches: {
      type: 'number',
    },
    FixationDuration: {
      type: 'integer',
    },
    FixationTimeOut: {
      type: 'integer',
    },
    FixationWindowSizeInches: {
      type: 'number',
    },
    FixationDotSizeInches: {
      type: 'number',
    },
    ImageBagsSample: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    KeepSampleON: {
      type: 'integer',
    },
    SamplePRE: {
      type: 'integer',
      minimum: 0,
    },
    SampleOFF: {
      type: 'integer',
      minimum: 0,
    },

    ImageBagsTest: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    KeepTestON: {
      type: 'integer',
    },
    TestOFF: {
      type: 'integer',
    },
    HideTestDistractors: {
      type: 'integer',
    },

    ChoiceSizeInches: {
      type: 'number',
      minimum: 0,
    },
    HideChoiceDistractors: {
      type: 'integer',
    },
    ChoiceTimeOut: {
      type: 'integer',
      minimum: 0,
    },

    RewardStage: {
      type: 'integer',
    },
    RewardPer1000Trials: {
      type: 'integer',
    },
    NRewardMax: {
      type: 'integer',
    },
    NConsecutiveHitsforBonus: {
      type: 'integer',
    },
    PunishTimeOut: {
      type: 'integer',
      minimum: 0,
    },
    ConsecutiveHitsITI: {
      type: 'integer',
      minimum: 0,
    },
    InterTrialInterval: {
      type: 'integer',
      minimum: 0,
    },
    BackgroundColor2D: {
      type: 'string',
    },
    Homecage: {
      type: 'integer',
    },
    Separated: {
      type: 'integer',
    },
    Species: {
      type: 'string',
      examples: ['human', 'marmoset', 'model'],
    },
    Liquid: {
      type: 'integer',
    },
  },
};
