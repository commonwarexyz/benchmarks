window.BENCHMARK_DATA = {
  "lastUpdate": 1736356776557,
  "repoUrl": "https://github.com/commonwarexyz/monorepo",
  "entries": {
    "commonware-cryptography": [
      {
        "commit": {
          "author": {
            "name": "commonwarexyz",
            "username": "commonwarexyz"
          },
          "committer": {
            "name": "commonwarexyz",
            "username": "commonwarexyz"
          },
          "id": "e626fa8d87b9fb02eaeda291094bb89ea14f4ddc",
          "message": "Publish benchmarks to root folder",
          "timestamp": "2025-01-07T15:08:54Z",
          "url": "https://github.com/commonwarexyz/monorepo/pull/324/commits/e626fa8d87b9fb02eaeda291094bb89ea14f4ddc"
        },
        "date": 1736356776298,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8087,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41850,
            "range": "± 617",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 141066,
            "range": "± 2336",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 910489,
            "range": "± 5423",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3721930,
            "range": "± 8666",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23474206,
            "range": "± 29701",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 92951189,
            "range": "± 100332",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 432757,
            "range": "± 5395",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 312607,
            "range": "± 10929",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 248514,
            "range": "± 6931",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 446579,
            "range": "± 18530",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2582688,
            "range": "± 12275",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1471930,
            "range": "± 7988",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 867890,
            "range": "± 12517",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 929807,
            "range": "± 19130",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9175582,
            "range": "± 28806",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5012581,
            "range": "± 107180",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2965917,
            "range": "± 17150",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2783307,
            "range": "± 77885",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65691228,
            "range": "± 860681",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34101426,
            "range": "± 54024",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18211194,
            "range": "± 73612",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16144831,
            "range": "± 28871",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 309919615,
            "range": "± 113305",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 157820092,
            "range": "± 161947",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79393226,
            "range": "± 1430077",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72598021,
            "range": "± 75410",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2616139274,
            "range": "± 3109761",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1318798013,
            "range": "± 8874998",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 660773565,
            "range": "± 8263397",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 571237991,
            "range": "± 264432",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12465212751,
            "range": "± 11407179",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6259242834,
            "range": "± 7338349",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3150387081,
            "range": "± 5491745",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2739011081,
            "range": "± 1030471",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217936,
            "range": "± 5628",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 639673,
            "range": "± 4171",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1301545,
            "range": "± 1898",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3764354,
            "range": "± 6293",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8850174,
            "range": "± 13481",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29965093,
            "range": "± 21243",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66881827,
            "range": "± 1281520",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8196,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81404,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 814338,
            "range": "± 1487",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8151550,
            "range": "± 12537",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20357,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 202558,
            "range": "± 2404",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2024936,
            "range": "± 4007",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20238375,
            "range": "± 23336",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=5",
            "value": 400794,
            "range": "± 5355",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=5",
            "value": 1746128,
            "range": "± 6809",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3860003,
            "range": "± 57958",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2672596,
            "range": "± 11893",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2296937,
            "range": "± 14473",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2415748,
            "range": "± 23889",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22876756,
            "range": "± 53211",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12423529,
            "range": "± 138467",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7159388,
            "range": "± 435103",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6794912,
            "range": "± 54450",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 212292684,
            "range": "± 116821",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107269679,
            "range": "± 103824",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54509067,
            "range": "± 50155",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 49970756,
            "range": "± 111249",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2106424855,
            "range": "± 744485",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1055451256,
            "range": "± 3610510",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 528392753,
            "range": "± 974794",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 480114067,
            "range": "± 587813",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10521277358,
            "range": "± 8518795",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5266247312,
            "range": "± 5449358",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2638423396,
            "range": "± 25113546",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2389991197,
            "range": "± 2372946",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1593065,
            "range": "± 865",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1665168,
            "range": "± 2715",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2401406,
            "range": "± 4542",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9739924,
            "range": "± 11887",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62540,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75397,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 317870,
            "range": "± 858",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2801368,
            "range": "± 3851",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21115621,
            "range": "± 13458",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 200507562,
            "range": "± 211270",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75540,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 181962,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1244318,
            "range": "± 6142",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10323174,
            "range": "± 8613",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 87558241,
            "range": "± 54148",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}