      var data = {
  "nodeList": [
    {
      "key": "1_62",
      "calledGraphId": null,
      "text": "s is set to \"Hello \"",
      "description": [
        "s is set to \"Hello \""
      ],
      "category": "OfActivity",
      "topoIndex": 4.0,
      "forwardDepth": 1.0,
      "backwardDepth": 1.0,
      "codeReference": {
        "fileName": "main.cpp",
        "lineStart": 2,
        "lineEnd": 2
      }
    },
    {
      "key": "1_70",
      "calledGraphId": null,
      "text": "increment s by name",
      "description": [
        "increment s by name"
      ],
      "category": "OfActivity",
      "topoIndex": 6.0,
      "forwardDepth": 3.0,
      "backwardDepth": 3.0,
      "codeReference": {
        "fileName": "main.cpp",
        "lineStart": 3,
        "lineEnd": 3
      }
    },
    {
      "key": "1_68",
      "calledGraphId": null,
      "text": "name",
      "description": [
        "name"
      ],
      "category": "OfActivity",
      "topoIndex": 2.0,
      "forwardDepth": 1.0,
      "backwardDepth": 1.0,
      "codeReference": {
        "fileName": "main.cpp",
        "lineStart": 3,
        "lineEnd": 3
      }
    },
    {
      "key": "1_73",
      "calledGraphId": null,
      "text": "increment s by name",
      "description": [
        "increment s by name"
      ],
      "category": "OfActivity",
      "topoIndex": 10.0,
      "forwardDepth": 7.0,
      "backwardDepth": 7.0,
      "codeReference": {
        "fileName": "main.cpp",
        "lineStart": 4,
        "lineEnd": 4
      }
    },
    {
      "key": "1_71",
      "calledGraphId": null,
      "text": "increment s by name",
      "description": [
        "increment s by name"
      ],
      "category": "OfActivity",
      "topoIndex": 8.0,
      "forwardDepth": 5.0,
      "backwardDepth": 5.0,
      "codeReference": {
        "fileName": "main.cpp",
        "lineStart": 4,
        "lineEnd": 4
      }
    },
    {
      "key": "3_60_2",
      "calledGraphId": null,
      "text": "\"Hello \"",
      "description": [
        "\"Hello \""
      ],
      "category": "OfValue",
      "topoIndex": 0.0,
      "forwardDepth": 0.0,
      "backwardDepth": 0.0,
      "codeReference": {
        "fileName": "main.cpp",
        "lineStart": 2,
        "lineEnd": 2
      }
    },
    {
      "key": "3_56_3",
      "calledGraphId": null,
      "text": "name",
      "description": [
        "name"
      ],
      "category": "OfInput",
      "topoIndex": 1.0,
      "forwardDepth": 0.0,
      "backwardDepth": 0.0,
      "codeReference": {
        "fileName": "main.cpp",
        "lineStart": 1,
        "lineEnd": 1
      }
    },
    {
      "key": "3_63_4",
      "calledGraphId": null,
      "text": "s is set to \"Hello \"",
      "description": [
        "s is set to \"Hello \""
      ],
      "category": "OfOutput",
      "topoIndex": 5.0,
      "forwardDepth": 2.0,
      "backwardDepth": 2.0,
      "codeReference": {
        "fileName": "main.cpp",
        "lineStart": 2,
        "lineEnd": 2
      }
    },
    {
      "key": "3_56_5",
      "calledGraphId": null,
      "text": "name",
      "description": [
        "name"
      ],
      "category": "OfOutput",
      "topoIndex": 3.0,
      "forwardDepth": 2.0,
      "backwardDepth": 2.0,
      "codeReference": {
        "fileName": "main.cpp",
        "lineStart": 1,
        "lineEnd": 1
      }
    },
    {
      "key": "3_63_6",
      "calledGraphId": null,
      "text": "increment s by name",
      "description": [
        "increment s by name"
      ],
      "category": "OfOutput",
      "topoIndex": 7.0,
      "forwardDepth": 4.0,
      "backwardDepth": 4.0,
      "codeReference": {
        "fileName": "main.cpp",
        "lineStart": 2,
        "lineEnd": 2
      }
    },
    {
      "key": "3_63_7",
      "calledGraphId": null,
      "text": "increment s by name",
      "description": [
        "increment s by name"
      ],
      "category": "OfOutput",
      "topoIndex": 9.0,
      "forwardDepth": 6.0,
      "backwardDepth": 6.0,
      "codeReference": {
        "fileName": "main.cpp",
        "lineStart": 2,
        "lineEnd": 2
      }
    },
    {
      "key": "3_73_8",
      "calledGraphId": null,
      "text": "increment s by name",
      "description": [
        "increment s by name"
      ],
      "category": "OfOutput",
      "topoIndex": 11.0,
      "forwardDepth": 8.0,
      "backwardDepth": 8.0,
      "codeReference": {
        "fileName": "main.cpp",
        "lineStart": 4,
        "lineEnd": 4
      }
    }
  ],
  "linkList": [
    {
      "from": {
        "nodeIdInCurrentGraph": "1_62"
      },
      "to": {
        "nodeIdInCurrentGraph": "3_63_4"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "3_60_2"
      },
      "to": {
        "nodeIdInCurrentGraph": "1_62"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "1_70"
      },
      "to": {
        "nodeIdInCurrentGraph": "3_63_6"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "3_63_4"
      },
      "to": {
        "nodeIdInCurrentGraph": "1_70"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "3_56_5"
      },
      "to": {
        "nodeIdInCurrentGraph": "1_70"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "1_68"
      },
      "to": {
        "nodeIdInCurrentGraph": "3_56_5"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "3_56_3"
      },
      "to": {
        "nodeIdInCurrentGraph": "1_68"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "1_73"
      },
      "to": {
        "nodeIdInCurrentGraph": "3_73_8"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "3_63_7"
      },
      "to": {
        "nodeIdInCurrentGraph": "1_73"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "1_71"
      },
      "to": {
        "nodeIdInCurrentGraph": "3_63_7"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "3_63_6"
      },
      "to": {
        "nodeIdInCurrentGraph": "1_71"
      }
    }
  ],
  "meta": {
    "methodName": "hello(std.string)",
    "codeReference": {
      "fileName": "main.cpp",
      "lineStart": 1,
      "lineEnd": 5
    },
    "title": "How to manage increment from global with hello?"
  }
};
