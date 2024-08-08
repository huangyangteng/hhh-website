## 海词返回的数据类型

```json
{
  "soundmark": {
    "uk": {
      "text": "英[hə'ləʊ]",
      "fsound": "https://audio.dict.cn/fbTd30Gu2ed8b16a2e1b4991744de1b2d8a67bbe.mp3?t=hello",
      "sound": "https://audio.dict.cn/mbTd30Gu8aa0caa0afc9e073f295dd1d2b51fc92.mp3?t=hello"
    },
    "us": {
      "text": "美[hə'loʊ]",
      "fsound": "https://audio.dict.cn/fuTd30Gubd3afe1c0d50aaeb8bb9d3596952e00d.mp3?t=hello",
      "sound": "https://audio.dict.cn/muTd30Gu4e88d2a64d51da3d03efc898eebe3365.mp3?t=hello"
    }
  },
  "level": "5",
  "meaning": [
    "int.(打招呼)喂；你好",
    "                "
  ],
  "meaningTotal": [
    {
      "percent": 100,
      "sense": "你好"
    }
  ],
  "examples": [
    "用作感叹词(int.)",
    "Hello, it's me.喂，是我呀",
    "Hello, it's us back again!喂，是我们回来了！Say hello to your husband.问你的丈夫好",
    "I said hello to her, but she ignored me completely!我向她打招呼，可她根本不理我！She actually condescended to say hello to me in the street today.她今天在街上竟能屈尊跟我打招呼"
  ],
  "usages": []
}
```

## En En Response

```json
{
  "word": "good",
  "phonetic": "/ɡʊ(d)/",
  "phonetics": [
    {
      "text": "/ɡʊ(d)/",
      "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/good-uk.mp3",
      "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9021875",
      "license": {
        "name": "BY 3.0 US",
        "url": "https://creativecommons.org/licenses/by/3.0/us"
      }
    },
    {
      "text": "[ɡɪ̈d]",
      "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/good-us.mp3",
      "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=380162"
    }
  ],
  "meanings": [
    {
      "partOfSpeech": "adjective",
      "definitions": [
        {
          "definition": "(of people)",
          "synonyms": [],
          "antonyms": []
        },
        {
          "definition": "(of capabilities)",
          "synonyms": [],
          "antonyms": []
        },
        {
          "definition": "(properties and qualities)",
          "synonyms": [],
          "antonyms": []
        },
        {
          "definition": "(when with and) Very, extremely. See good and.",
          "synonyms": [],
          "antonyms": [],
          "example": "The soup is good and hot."
        },
        {
          "definition": "Holy (especially when capitalized) .",
          "synonyms": [],
          "antonyms": [],
          "example": "Good Friday"
        },
        {
          "definition": "(of quantities)",
          "synonyms": [],
          "antonyms": []
        }
      ],
      "synonyms": [
        "accomplished",
        "all right",
        "decent",
        "not bad",
        "satisfactory",
        "well"
      ],
      "antonyms": [
        "bad",
        "evil",
        "bad",
        "poor"
      ]
    },
    {
      "partOfSpeech": "interjection",
      "definitions": [
        {
          "definition": "That is good; an elliptical exclamation of satisfaction or commendation.",
          "synonyms": [],
          "antonyms": [],
          "example": "Good! I can leave now."
        }
      ],
      "synonyms": [],
      "antonyms": []
    }
  ],
  "license": {
    "name": "CC BY-SA 3.0",
    "url": "https://creativecommons.org/licenses/by-sa/3.0"
  },
  "sourceUrls": [
    "https://en.wiktionary.org/wiki/good"
  ]
}
```

## 组件WordItemInfo需要输入统一个数据类型

```
info:{
    meanings:['1.','2'],
    soundmark: {
        "uk": {
            "text": "英[hə'ləʊ]",
            "fsound": "https://audio.dict.cn/fbTd30Gu2ed8b16a2e1b4991744de1b2d8a67bbe.mp3?t=hello",
            "sound": "https://audio.dict.cn/mbTd30Gu8aa0caa0afc9e073f295dd1d2b51fc92.mp3?t=hello"
        },
        "us": {
            "text": "美[hə'loʊ]",
            "fsound": "https://audio.dict.cn/fuTd30Gubd3afe1c0d50aaeb8bb9d3596952e00d.mp3?t=hello",
            "sound": "https://audio.dict.cn/muTd30Gu4e88d2a64d51da3d03efc898eebe3365.mp3?t=hello"
        }
    }
}
```