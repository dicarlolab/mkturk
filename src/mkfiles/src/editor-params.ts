export const taskParamSchema = {
  "title": "MkTurk Task Params",
  "description": "Object containing MkTurk task parameters",
  "type": "object",
  "properties": {
    "Agent": {
      "type": "string"
    },
    "CheckRFID": {
      "type": "integer"
    },
    
    "Automator": {
      "type": [
        "string",
        "integer"
      ]
    },
    "AutomatorFilePath": {
      "type": "string",
      "examples": [
        "/mkturkfiles/paramterfiles/automators/touch_m2s_objectome.json"
      ]
    },
    "CurrentAutomatorStage": {
      "type": "integer"
    },
    "MinPercentCriterion": {
      "type": "integer"
    },
    "MinTrialsCriterion": {
      "type": "integer"
    },



    "DragtoRespond": {
      "type": "integer",
      "enum": [0, 1]
    },
    "CalibrateEye": {
      "type": "integer",
      "enum": [0, 1]
    },
    "NRSVP": {
      "type": "integer",
    },
    "SameDifferent": {
      "type": "integer",
      "enum": [0, 1]
    },
    "SamplingStrategy": {
      "type": "string"
    },
    "NStickyResponse": {
      "type": "integer"
    },
    "NTrialsPerBagBlock": {
      "type": "integer"
    },


    "NGridPoints": {
      "type": "integer",
      "minimum": 1
    },
    "GridSpacingInches": {
      "type": "number"
    },
    "GridXOffsetInches": {
      "type": "number"
    },
    "GridYOffsetInches": {
      "type": "number"
    },
    "FixationGridIndex": {
      "type": "integer",
      "minimum": 0
    },
    "SampleGridIndex": {
      "type": "integer",
      "minimum": 0
    },
    "ObjectGridIndex": {
      "type": "array",
      "items": {
        "type": "integer",
        "minimum": 0
      }
    },
    "ChoiceGridIndex": {
      "type": "array",
      "items": {
        "type": "integer",
        "minimum": 0
      }
    },
    "TestGridIndex": {
      "type": "array",
      "items": {
        "type": "integer",
        "minimum": 0
      }
    },

    

    "NFixations": {
      "type": "integer",
      "minimum": 1
    },
    "FixationUsesSample": {
      "type": "integer",
      "enum": [0, 1]
    },
    "FixationSizeInches": {
      "type": "number"
    },
    "FixationDuration": {
      "type": "integer"
    },
    "FixationTimeOut": {
      "type": "integer"
    },


    "FixationWindowSizeInches": {
      "type": "number"
    },
    "FixationDotSizeInches": {
      "type": "number"
    },


    "ImageBagsSample": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "KeepSampleON": {
      "type": "integer",
      "enum": [0, 1]
    },
    "SamplePRE": {
      "type": "integer",
      "minimum": 0
    },
    "SampleOFF": {
      "type": "integer",
      "minimum": 0
    },

    "ImageBagsTest": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "KeepTestON": {
      "type": "integer",
      "enum": [0, 1]
    },
    "TestOFF": {
      "type": "integer",
      "minimum": 0
    },
    "HideTestDistractors": {
      "type": "integer",
      "enum": [0, 1]
    },

    "ChoiceSizeInches": {
      "type": "number",
      "minimum": 0
    },
    "HideChoiceDistractors": {
      "type": "integer",
      "enum": [0, 1]
    },
    "ChoiceTimeOut": {
      "type": "integer",
      "minimum": 0
    },


    "RewardStage": {
      "type": "integer",
      "enum": [0, 1]
    },
    "RewardPer1000Trials": {
      "type": "integer",
    },
    "NRewardMax": {
      "type": "integer",
    },
    "NConsecutiveHitsforBonus": {
      "type": "integer",
    },
    "PunishTimeOut": {
      "type": "integer",
      "minimum": 0
    },
    "ConsecutiveHitsITI": {
      "type": "integer",
      "minimum": 0
    },





    "InterTrialInterval": {
      "type": "integer",
      "minimum": 0
    },
    "BackgroundColor2D": {
      "type": "string",
    },
    "Homecage": {
      "type": "integer",
      "enum": [0, 1],
    },
    "Separated": {
      "type": "integer",
      "enum": [0, 1]
    },
    "Species": {
      "type": "string",
      "examples": [
        "human",
        "marmoset",
        "model"
      ],
    },
    "Liquid": {
      "type": "integer",
      "enum": [1, 2, 3],
    },
  }
};