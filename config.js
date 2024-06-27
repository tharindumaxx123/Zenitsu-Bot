const fs = require("fs")
const chalk = require("chalk")

global.available = false
global.autoReadGc = false
global.autoReadAll = false
global.antitags = false

//aumto functioner
//global.autoTyping = false //auto tying in gc (true to on, false to off)
//global.autoRecord = true //auto recording (true to on, false to off)

global.Owner = ['94783694260'] //ur number 
global.OwnerNumber = ['918348225320']
global.ownertag = ['918348225320']
global.BotName = "ZenitsuBot" //ur bot name 
global.packname = "ZenitsuBot"
global.author = "🦄Dream Guy Deepak" //ur sticker pack name 
global.OwnerName = "🦄Dream Guy Deepak" //ur name
global.BotSourceCode = "https://youtube.com/@dreamguydeepak" //ur website link
global.SupportGroupLink = "https://chat.whatsapp.com/KguOo9XsRTW2iESYuHzVX1" //ur group link 
global.sessionName = "{
  "creds": {
    "noiseKey": {
      "private": {
        "type": "Buffer",
        "data": "OD7vL/PozXhq2zNCQKKuBWSGfgLGJnlOrJ322WdGCFY="
      },
      "public": {
        "type": "Buffer",
        "data": "/dFZSgN7CRUJPIrw66EJ7uJr9noKS8eTlH5uDL/BQxc="
      }
    },
    "signedIdentityKey": {
      "private": {
        "type": "Buffer",
        "data": "uJmxNFQecu5T4NmOoe2wF1Xh/cUSIGBpyVkF2TTmf3g="
      },
      "public": {
        "type": "Buffer",
        "data": "ejP+/R1Yz2ldx62nAEM1PZ/6zhfYoQ9VG0xrkXe46Gc="
      }
    },
    "signedPreKey": {
      "keyPair": {
        "private": {
          "type": "Buffer",
          "data": "MMFl1/FG4gQmZx/5OdAKgtsHcHu5F0NjQLj43Dh2Nmg="
        },
        "public": {
          "type": "Buffer",
          "data": "ARJZC4oyjBobxpBWxHud1uy4AeYMOla6O9q+oRSD+CM="
        }
      },
      "signature": {
        "type": "Buffer",
        "data": "2Rc0jeAOcOVITIUmEVCwe1qzlaUebBVVofBwwsNuz7YHGDtBQGmWhDQaQCTiw5iV3oZakgCkkSLZ4aw6HiLniA=="
      },
      "keyId": 1
    },
    "registrationId": 200,
    "advSecretKey": "WcQGYZAHnQNbuzYgAAqAXBj2VSr7b26OqJ/dR7CUYYU=",
    "nextPreKeyId": 31,
    "firstUnuploadedPreKeyId": 31,
    "serverHasPreKeys": true,
    "account": {
      "details": "CISGk9wCEInx9bMGGAIgACgA",
      "accountSignatureKey": "Xs2bPVL9GfRt7BWEXgdbNgRqlj9P6tt0IRvW8S+lpFY=",
      "accountSignature": "DmSNFnfWx3AQwM8ZORhEfcI27RFDcvlrra7Vzj4FWUhRHd86abA8IyWh4KLWvbsh2pIb+ApRLYWnAyX8Md23BA==",
      "deviceSignature": "xoBb1eDvKGnXyS+c4Wbdp62wcoieey/rgaSJ9n3HHKY6aQC701rRgC7GFDSezg3lhOa+VyF0j8RiJcXP40o2jQ=="
    },
    "me": {
      "id": "94783694260:9@s.whatsapp.net",
      "verifiedName": ""
    },
    "signalIdentities": [
      {
        "identifier": {
          "name": "94783694260:9@s.whatsapp.net",
          "deviceId": 0
        },
        "identifierKey": {
          "type": "Buffer",
          "data": "BV7Nmz1S/Rn0bewVhF4HWzYEapY/T+rbdCEb1vEvpaRW"
        }
      }
    ],
    "lastAccountSyncTimestamp": 1719498892,
    "myAppStateKeyId": "AAAAAAt7"
  },
  "keys": {
    "preKeys": {
      "1": {
        "private": {
          "type": "Buffer",
          "data": "WJ2XQVvtADVn+0jHnq1mF0cvazHf7kndjrPwX2CbBXY="
        },
        "public": {
          "type": "Buffer",
          "data": "O6dqbpPvgeEhVvY1ZBgzqHDs4CoLat437vq9HIVftTU="
        }
      },
      "2": {
        "private": {
          "type": "Buffer",
          "data": "UI48CLXFNjjZdkjimdXcygqS6zuiPKkHopk2hEDjxmU="
        },
        "public": {
          "type": "Buffer",
          "data": "iR/xEpqZKwjSgEP+8J3lOQqB/8eLkd3KdfxsqXEHpiI="
        }
      },
      "3": {
        "private": {
          "type": "Buffer",
          "data": "kEC6+dbwu75xRco3J6pIxcC2vbGHm9VvBz+72rs1tXA="
        },
        "public": {
          "type": "Buffer",
          "data": "PvuvTHBf4QTtR/QTafhle21jwUvPbBmYmdpktLbc830="
        }
      },
      "4": {
        "private": {
          "type": "Buffer",
          "data": "sD39XH0VScaKmSIo/SLkKV4mS1h0iXd4YUrjJvW8KFc="
        },
        "public": {
          "type": "Buffer",
          "data": "SA9yD2/+PRLnWepNdYHgHOoEkUHaO/ttOfNyzy/3imY="
        }
      },
      "5": {
        "private": {
          "type": "Buffer",
          "data": "uJGkP7is6cdcD7GaQt5nio/Qh7BULK8fLtp7IOq27UI="
        },
        "public": {
          "type": "Buffer",
          "data": "v6ZpGNT69Ln8Sn/URRshBQFzfomQUmb3EOr3KqMpJ10="
        }
      },
      "6": {
        "private": {
          "type": "Buffer",
          "data": "8MoBYaWb0zJolz6vOO5j1DI9Ee/fVbKsJFFlgIqJbGo="
        },
        "public": {
          "type": "Buffer",
          "data": "MOZNc8JMBwJ0QhLwsW94cY5FkcEC9evKvjcZ+ymCmXE="
        }
      },
      "7": {
        "private": {
          "type": "Buffer",
          "data": "EEYe3TKXFRPQeWpIPhlxlwd7hoallxZ30DPtpqg8SXc="
        },
        "public": {
          "type": "Buffer",
          "data": "YT8s7aALvY/taTXoTI7BrLCsLigNOBlcagT+VnbL6yE="
        }
      },
      "8": {
        "private": {
          "type": "Buffer",
          "data": "gOfsjPfqD0tqb6JPNw7zdfwMBBfqzOiafwIE0f9rKmA="
        },
        "public": {
          "type": "Buffer",
          "data": "vgho95U7CyJvwU4TLJSGrcUXnYRq3Rqngil35kTHzmU="
        }
      },
      "9": {
        "private": {
          "type": "Buffer",
          "data": "ECqcBeNhVN+nRyM6Q2jw16YYLUGpqDVAnodR75+cmVU="
        },
        "public": {
          "type": "Buffer",
          "data": "CUnQ9ahzCzwvpeLBcskqCOct++KX1KwRRDYVfh3rK1Y="
        }
      },
      "10": {
        "private": {
          "type": "Buffer",
          "data": "uA39/bUHLSLI73pS5tmaMyQ1JK7dSlFR5XN+RJXkJmU="
        },
        "public": {
          "type": "Buffer",
          "data": "n51FX73Vp+6KB2gXqsHENTm1xJhGxpcf36iRuNBT4iU="
        }
      },
      "11": {
        "private": {
          "type": "Buffer",
          "data": "cN1Tel5QuMmp4hadvQwj4wVZ03nKBftSUav2Ug3o/no="
        },
        "public": {
          "type": "Buffer",
          "data": "JbpdH8ZomYqiPPwc3mS2l/2k7Pex2XB25LR8Q/l/VkA="
        }
      },
      "12": null,
      "13": {
        "private": {
          "type": "Buffer",
          "data": "iCaq8kCNNaHftv4jW2yV+EmFXs8bl2k6RxXiDVMl1Ho="
        },
        "public": {
          "type": "Buffer",
          "data": "8SmAb+xU8Duw+I5cnFZtRYmti1DvF9d4IUEAsAC+O0E="
        }
      },
      "14": {
        "private": {
          "type": "Buffer",
          "data": "iIzdXWQANShjxMrQbAxBqTcKgJlj2qFdMFY8AiDgUWo="
        },
        "public": {
          "type": "Buffer",
          "data": "OT5FjKNSxTWORwcns8ih5pJ5yKD3J2ZZ31YavkEh2Tk="
        }
      },
      "15": {
        "private": {
          "type": "Buffer",
          "data": "OBQZ0gezDmE2JgTMl/MIhjnAZPppaxteWnQrFV3gaVM="
        },
        "public": {
          "type": "Buffer",
          "data": "lsqhWY56DMKqF0rsIDJSqJWJ5goyA2Z5bFBrrn6w/k8="
        }
      },
      "16": {
        "private": {
          "type": "Buffer",
          "data": "uFG7rmCA0xSknvGQjdyZNwyJkOPWPbCSHXK0BeeWtXE="
        },
        "public": {
          "type": "Buffer",
          "data": "BLAcXajLAyxKSTgFW+zoAUcewH1iK5o7XorMsC/tghw="
        }
      },
      "17": {
        "private": {
          "type": "Buffer",
          "data": "KNvL90+QLD2RR5iHWpF9zCg/4nmyu+MrmAjCNNEPPnM="
        },
        "public": {
          "type": "Buffer",
          "data": "16NeHmugpluCbffNbDUUTlM+W0z8NYryIjkvHjWVOyc="
        }
      },
      "18": {
        "private": {
          "type": "Buffer",
          "data": "OKFdo+XVfgVzQpkYyaa5IOfzVhXAW/J6OptHeCv9tGk="
        },
        "public": {
          "type": "Buffer",
          "data": "qYteeDdSL1k/tENUpdIzfYpoCEDbXEEc2IInZOGmkys="
        }
      },
      "19": {
        "private": {
          "type": "Buffer",
          "data": "CJ2IuKWvB00VA9Yii7Dd7lDOWzLfdlEnGyo0IB550VU="
        },
        "public": {
          "type": "Buffer",
          "data": "Rd9Xlt4kCCeVMAmPa99PMJyHxX/6YhouPBa0kREF/h8="
        }
      },
      "20": {
        "private": {
          "type": "Buffer",
          "data": "COpWL2uVtsBSluvxHKJbdPMgf04dSbTKxjefQCGwk3M="
        },
        "public": {
          "type": "Buffer",
          "data": "QoXlTSWsYtPh9kVoFnh7ggidajp355Qdm9q1YZBmIBg="
        }
      },
      "21": {
        "private": {
          "type": "Buffer",
          "data": "0M9l7S3sWRdj576udCbEGoa3e+ucMZ1lVxzQGxD3NEU="
        },
        "public": {
          "type": "Buffer",
          "data": "hzUIgwLIOBr1ER3Vg9NPRM3A1/aCC7PytlTPmbj9MEs="
        }
      },
      "22": {
        "private": {
          "type": "Buffer",
          "data": "OOIjPfmSv1mH+aS0n8TfCIksFjQM0qsQSgjbB6upQlI="
        },
        "public": {
          "type": "Buffer",
          "data": "q/KxjEYJp7fs8svCNqOcXRVcOpe60u0VYZqxrSMkc3U="
        }
      },
      "23": {
        "private": {
          "type": "Buffer",
          "data": "aFZgADZePGuSgkG41H/ZYC1G17OGUZrmlzLF9/mJRF8="
        },
        "public": {
          "type": "Buffer",
          "data": "eL2GSeRxLVSp7Aykbq97fN+D3SQ+lhH03GvrO8Lwe28="
        }
      },
      "24": {
        "private": {
          "type": "Buffer",
          "data": "CNu4mASkUxtdoZxYsH6LR72k2PP0otpYKoHN0qfpCX8="
        },
        "public": {
          "type": "Buffer",
          "data": "VcDt622FglTsibMO/Oif2nYeOpmsId/Qff5y+yAfl1U="
        }
      },
      "25": {
        "private": {
          "type": "Buffer",
          "data": "CMxMWNyZXf/88YlCTQJVVPlhq9RB3yEsXFIgJEhkHWQ="
        },
        "public": {
          "type": "Buffer",
          "data": "VdJgltJC+e31A1UVTnqL+WJXswWe00TO4b8RMN0bJG0="
        }
      },
      "26": {
        "private": {
          "type": "Buffer",
          "data": "ENSGLUta4Ze26t50JON4y8tNnJR0QQgNtha2vTqV5W4="
        },
        "public": {
          "type": "Buffer",
          "data": "1WRHu3XT6xjqno6/OW8B6sc4mYsUIRxPrQiNAaOSRgs="
        }
      },
      "27": {
        "private": {
          "type": "Buffer",
          "data": "4J3KETD0+Q2sIn2UMLqnTPwNI+sbgpsAwuVCA2hFxGQ="
        },
        "public": {
          "type": "Buffer",
          "data": "bf2HkW2nDw2lxxf/vOcPoOs5t2Y5MKOFKMs+bJZ+aFY="
        }
      },
      "28": {
        "private": {
          "type": "Buffer",
          "data": "MDDeJ8HFsrH1mv7Lt1GVs6EwU5ABNUdf/UCuq1l8M3E="
        },
        "public": {
          "type": "Buffer",
          "data": "6ZmRS6e6kl9D1uv3UncQz1hdP4PItwb9h/d7+P018WU="
        }
      },
      "29": {
        "private": {
          "type": "Buffer",
          "data": "QP0M1YF3v+7aGobK5CGH83i1kc99UGXEVRIt4u9bF3g="
        },
        "public": {
          "type": "Buffer",
          "data": "lBaeEBnBZQbdv9QZh5PgqXzd0/d3B5W2tfIFHz+dZwc="
        }
      },
      "30": {
        "private": {
          "type": "Buffer",
          "data": "ELJMXRdXvjtQJfkncPcjWYzPNDGe8MgLcED/t20lbX4="
        },
        "public": {
          "type": "Buffer",
          "data": "5+xQhtIScLbwpQSNZLedWSzop6dv6282OzqEFOE3rjc="
        }
      }
    },
    "sessions": {
      "94783694260.0": {
        "_sessions": {
          "BaRMse5bzPt/QuHyG2lnTiB4H0uryxRJwdCC7EM2V3do": {
            "registrationId": 1582775505,
            "currentRatchet": {
              "ephemeralKeyPair": {
                "pubKey": "BWbMJ2FevjnpEYQAtXdYG5fj1OTXHAZpj7i9qBgZtgVB",
                "privKey": "mEupIFBlQOjmov7nsWfSiZ4jPnLyunKN/Zf4kdz9cnk="
              },
              "lastRemoteEphemeralKey": "BW6w8djNtoI//Cv7YLxzsBCqbwyW90xSduzKWSWejBEI",
              "previousCounter": 0,
              "rootKey": "dm3Ju/uIFPPrS27+b6fwds6UBrAFyWyRiG0YOjB0OEo="
            },
            "indexInfo": {
              "baseKey": "BaRMse5bzPt/QuHyG2lnTiB4H0uryxRJwdCC7EM2V3do",
              "baseKeyType": 2,
              "closed": -1,
              "used": 1719498894888,
              "created": 1719498894888,
              "remoteIdentityKey": "BV7Nmz1S/Rn0bewVhF4HWzYEapY/T+rbdCEb1vEvpaRW"
            },
            "_chains": {
              "BW6w8djNtoI//Cv7YLxzsBCqbwyW90xSduzKWSWejBEI": {
                "chainKey": {
                  "counter": 1,
                  "key": "llA12crlDBzh50itZCUMwkdtzV3iqwWc8EQpaaDmUSY="
                },
                "chainType": 2,
                "messageKeys": {}
              },
              "BWbMJ2FevjnpEYQAtXdYG5fj1OTXHAZpj7i9qBgZtgVB": {
                "chainKey": {
                  "counter": -1,
                  "key": "yXaB5kgJep3TzYuR1A+WHHD/TopZTneDBACFJ1ayLSQ="
                },
                "chainType": 1,
                "messageKeys": {}
              }
            }
          }
        },
        "version": "v1"
      }
    },
    "appStateSyncKeys": {
      "AAAAAAto": {
        "keyData": "SR55rn+I/IPmvz4Z0mhoR2SGnSWNgWvA0IkQ61w8dsY=",
        "fingerprint": {
          "rawId": 730120959,
          "currentIndex": 4,
          "deviceIndexes": [
            0,
            3,
            4
          ]
        },
        "timestamp": "1718547373965"
      },
      "AAAAAAtp": {
        "keyData": "/+62pUJP+ynVo3eeIEN8WJxilcGLx55nBLqQ1hYIrlU=",
        "fingerprint": {
          "rawId": 730120959,
          "currentIndex": 4,
          "deviceIndexes": [
            0,
            4
          ]
        },
        "timestamp": "0"
      },
      "AAAAAAtm": {
        "keyData": "LywVzk3RQypJ0ItaLPpqMEZC+ClvGBALGAkewNgqvvs=",
        "fingerprint": {
          "rawId": 730120959,
          "currentIndex": 1,
          "deviceIndexes": [
            0,
            1
          ]
        },
        "timestamp": "0"
      },
      "AAAAAAtn": {
        "keyData": "Nz5tUte+cwLBs/1h13rn00i/EyrDnMjlxoScTF29Hj8=",
        "fingerprint": {
          "rawId": 730120959,
          "currentIndex": 3,
          "deviceIndexes": [
            0,
            1,
            3
          ]
        },
        "timestamp": "1718547150043"
      },
      "AAAAAAtw": {
        "keyData": "7LClLeNhxnm9Meef9guSY/ASDKPWXMBcnR4mTRGnSfg=",
        "fingerprint": {
          "rawId": 730120959,
          "currentIndex": 12,
          "deviceIndexes": [
            0,
            9,
            12
          ]
        },
        "timestamp": "0"
      },
      "AAAAAAtx": {
        "keyData": "6NgREzvJqKnGqC2FK5WB+oaseuybtTSYdkhrhfxr7oE=",
        "fingerprint": {
          "rawId": 730120959,
          "currentIndex": 12,
          "deviceIndexes": [
            0,
            12
          ]
        },
        "timestamp": "1718720967888"
      },
      "AAAAAAtu": {
        "keyData": "2CPcIB6YrxIk5FUJ4XMArtVnSJ/Zck4gSdHJqRGpo2E=",
        "fingerprint": {
          "rawId": 730120959,
          "currentIndex": 11,
          "deviceIndexes": [
            0,
            9,
            10,
            11
          ]
        },
        "timestamp": "1718694882492"
      },
      "AAAAAAtv": {
        "keyData": "huwqAqC+ttbLF9xPCfFk5BprW+GGO1gE91rXg/p/guY=",
        "fingerprint": {
          "rawId": 730120959,
          "currentIndex": 12,
          "deviceIndexes": [
            0,
            9,
            10,
            12
          ]
        },
        "timestamp": "1718695931337"
      },
      "AAAAAAts": {
        "keyData": "lcRJlbwD0uY8mb3hiKrMyKxwDrMlXkttNhj2SgxaWm0=",
        "fingerprint": {
          "rawId": 730120959,
          "currentIndex": 8,
          "deviceIndexes": [
            0,
            6,
            8
          ]
        },
        "timestamp": "0"
      },
      "AAAAAAtt": {
        "keyData": "YMkZi4iNKftWGNjnVLO6bDsf/3wwEIb+aw376+gH8uY=",
        "fingerprint": {
          "rawId": 730120959,
          "currentIndex": 8,
          "deviceIndexes": [
            0,
            6
          ]
        },
        "timestamp": "0"
      },
      "AAAAAAtq": {
        "keyData": "PFTi1gl0UTXAhT5rAz0sK83IBP0UZl5Dy6040MftR6E=",
        "fingerprint": {
          "rawId": 730120959,
          "currentIndex": 6,
          "deviceIndexes": [
            0,
            5,
            6
          ]
        },
        "timestamp": "1718615420742"
      },
      "AAAAAAtr": {
        "keyData": "Q8KCYmbnWKuzF1OJPxKfnaao9lt9+AOnTe03k0KuhiA=",
        "fingerprint": {
          "rawId": 730120959,
          "currentIndex": 7,
          "deviceIndexes": [
            0,
            6,
            7
          ]
        },
        "timestamp": "1718619793669"
      },
      "AAAAAAt4": {
        "keyData": "ZgV0PQaT7IRROX+KXUa1O1ZG8f/sZzV/lIrtugxRSuM=",
        "fingerprint": {
          "rawId": 730120960,
          "currentIndex": 6,
          "deviceIndexes": [
            0,
            6
          ]
        },
        "timestamp": "1718814785156"
      },
      "AAAAAAt5": {
        "keyData": "diJm2h5kDTUqolwHCSZQExvwDIiRl/ho3c3ZNX4IHxU=",
        "fingerprint": {
          "rawId": 730120961,
          "currentIndex": 1,
          "deviceIndexes": [
            0,
            1
          ]
        },
        "timestamp": "0"
      },
      "AAAAAAt2": {
        "keyData": "FURns5fQzgFXo2EHC487+rlMqFJouyW9Fd0u65TmGoM=",
        "fingerprint": {
          "rawId": 730120960,
          "currentIndex": 5,
          "deviceIndexes": [
            0,
            4,
            5
          ]
        },
        "timestamp": "1718801165916"
      },
      "AAAAAAt3": {
        "keyData": "DOXCjlZu6mszDTW938f6cllAx9G0p4REl3ay3LyL43c=",
        "fingerprint": {
          "rawId": 730120960,
          "currentIndex": 5,
          "deviceIndexes": [
            0,
            5
          ]
        },
        "timestamp": "0"
      },
      "AAAAAAt0": {
        "keyData": "/IoEWAxfWh1iZ8xDYLqAjeyIL/OcIjg7DMry+/ZTd4Q=",
        "fingerprint": {
          "rawId": 730120960,
          "currentIndex": 4,
          "deviceIndexes": [
            0,
            1,
            3,
            4
          ]
        },
        "timestamp": "0"
      },
      "AAAAAAt1": {
        "keyData": "llBo2b42PKpGjNJ24GGtoegLU/xP6RG2QYMgA3gtfWk=",
        "fingerprint": {
          "rawId": 730120960,
          "currentIndex": 5,
          "deviceIndexes": [
            0,
            1,
            4,
            5
          ]
        },
        "timestamp": "1718791369738"
      },
      "AAAAAAty": {
        "keyData": "UneLFKdRNIN5wXy3eu7U8VubImP9iqPBDn+glc3vQNQ=",
        "fingerprint": {
          "rawId": 730120959,
          "currentIndex": 12,
          "deviceIndexes": [
            0
          ]
        },
        "timestamp": "1718728104128"
      },
      "AAAAAAtz": {
        "keyData": "xvRhJsP44blLrYbsIkoV8uCRAt+LaYmSokBVplmWxOs=",
        "fingerprint": {
          "rawId": 730120960,
          "currentIndex": 2,
          "deviceIndexes": [
            0,
            1,
            2
          ]
        },
        "timestamp": "0"
      },
      "AAAAAAt+": {
        "keyData": "c0jLrwtEG45ks1sx9HcdiNhELuCq9EqRuRSANIoSuv0=",
        "fingerprint": {
          "rawId": 730120961,
          "currentIndex": 7,
          "deviceIndexes": [
            0,
            5
          ]
        },
        "timestamp": "1719381725669"
      },
      "AAAAAAt/": {
        "keyData": "0ZbdFplOB1cIqCvl7kcAROyWclE0WFlZ8+MlagR3evw=",
        "fingerprint": {
          "rawId": 730120964,
          "currentIndex": 1,
          "deviceIndexes": [
            0,
            1
          ]
        },
        "timestamp": "1719384603657"
      },
      "AAAAAAt8": {
        "keyData": "h9K9ho9UGDdYr2FvG0m/L7uuWd/oCRyHFLAKIwWXQe8=",
        "fingerprint": {
          "rawId": 730120961,
          "currentIndex": 6,
          "deviceIndexes": [
            0,
            3,
            5
          ]
        },
        "timestamp": "0"
      },
      "AAAAAAt9": {
        "keyData": "h1V5QEXzafMKTr1/Ko3pwFqpAdXdRm5okRdlMjm3xqc=",
        "fingerprint": {
          "rawId": 730120961,
          "currentIndex": 7,
          "deviceIndexes": [
            0,
            5,
            7
          ]
        },
        "timestamp": "1719381720341"
      },
      "AAAAAAt6": {
        "keyData": "PV+ATuTOtRz8Oj+SnDtcwF/sPw+rCmMKNfHtI0JNDDA=",
        "fingerprint": {
          "rawId": 730120961,
          "currentIndex": 3,
          "deviceIndexes": [
            0,
            1,
            3
          ]
        },
        "timestamp": "0"
      },
      "AAAAAAt7": {
        "keyData": "wkjHiZXy+UF3iKvI4z4t4/0Z7z1YoaGtqtWdwiMLdmU=",
        "fingerprint": {
          "rawId": 730120961,
          "currentIndex": 3,
          "deviceIndexes": [
            0,
            3
          ]
        },
        "timestamp": "0"
      }
    }
  }
}"

// Prefix //
// If you want to change the prefix, change it and also change all switch's button id from Zenitsu.js  otherwise buttons will not work //
global.prefa = ['.'] 


global.location = "Darjeeling, India"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://i.ibb.co/vXnjzpr/cheemspic.jpg' }
global.websitex = "https://youtube.com/@dreamguydeepak"
global.lolhuman = "Deepak"


global.BotLogo = fs.readFileSync("./Assets/cheemspic.jpg")
global.Thumb = fs.readFileSync("./Assets/cheemspic.jpg")
global.Thumb1 = fs.readFileSync("./Assets/cheemspic.jpg")
global.ErrorPic = fs.readFileSync("./Assets/cheemspic.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Job done...',
    useradmin: 'Sorry, only *Group Admins* can use this command *Dear*!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Only my *Owner* can use this command, Yeah!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Okey ?!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: ' Ruko Zara...',
    nolink: 'Please provide me *link*, Uff!',
    error: 'An error occurd!',
    banned: 'You are *Banned* fron using commands!, Haha',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert  Uff! This is not a NSFW enabled group!, Uff!,'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 20,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '39788fed50', //ur api key
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
