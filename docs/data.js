window.BENCHMARK_DATA = {
  "lastUpdate": 1736940591186,
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
      },
      {
        "commit": {
          "author": {
            "name": "nathan haim",
            "username": "najeal",
            "email": "haim.nathan@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fa13112fb94d0946bc13fce36f374b0419b14358",
          "message": "[cryptography/secp256r1] add secp256r1 scheme (#314)\n\nCo-authored-by: Patrick O'Grady <me@patrickogrady.xyz>",
          "timestamp": "2025-01-09T00:19:48Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/fa13112fb94d0946bc13fce36f374b0419b14358"
        },
        "date": 1736421365943,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8215,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41863,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 141365,
            "range": "± 1292",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 898350,
            "range": "± 2670",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3690053,
            "range": "± 9308",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23415889,
            "range": "± 24237",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93161331,
            "range": "± 90265",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 434370,
            "range": "± 5505",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 309712,
            "range": "± 6915",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 265643,
            "range": "± 6152",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 429285,
            "range": "± 5022",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2614625,
            "range": "± 27415",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1479334,
            "range": "± 30562",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 870362,
            "range": "± 12112",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 930162,
            "range": "± 29792",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9229462,
            "range": "± 32290",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5028026,
            "range": "± 52921",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2965230,
            "range": "± 8803",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2793554,
            "range": "± 63844",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65609845,
            "range": "± 99753",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34137040,
            "range": "± 50245",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18209100,
            "range": "± 28627",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16128982,
            "range": "± 25965",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 309667730,
            "range": "± 577715",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158867087,
            "range": "± 730153",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79323122,
            "range": "± 137097",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72552103,
            "range": "± 995596",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2611315509,
            "range": "± 669068",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1326927143,
            "range": "± 11688709",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 659346988,
            "range": "± 366608",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 571381137,
            "range": "± 280077",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12427728591,
            "range": "± 5551056",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6238112126,
            "range": "± 4245594",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3141259934,
            "range": "± 11969862",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2735220855,
            "range": "± 1464367",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217461,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 638258,
            "range": "± 1980",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1298098,
            "range": "± 1531",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3755517,
            "range": "± 4768",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8831482,
            "range": "± 43960",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29881226,
            "range": "± 56145",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66677600,
            "range": "± 133370",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8196,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81323,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 812719,
            "range": "± 2042",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8124071,
            "range": "± 6922",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20275,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 201911,
            "range": "± 1438",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2018099,
            "range": "± 2489",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20183836,
            "range": "± 18947",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=5",
            "value": 400388,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=5",
            "value": 1750128,
            "range": "± 2575",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3900541,
            "range": "± 15039",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2688796,
            "range": "± 9226",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2334560,
            "range": "± 13075",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2428343,
            "range": "± 14923",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22980646,
            "range": "± 53479",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12426193,
            "range": "± 45226",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7345195,
            "range": "± 277726",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6924572,
            "range": "± 61510",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 212588477,
            "range": "± 77095",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107455302,
            "range": "± 104406",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54668883,
            "range": "± 74097",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 50031539,
            "range": "± 94598",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2107402887,
            "range": "± 759260",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1055106689,
            "range": "± 373312",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 528931106,
            "range": "± 1174667",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 480012749,
            "range": "± 978875",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10530344215,
            "range": "± 7738090",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5272224347,
            "range": "± 3005061",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2638291915,
            "range": "± 3154166",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2389777280,
            "range": "± 2969472",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1596526,
            "range": "± 1929",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1667653,
            "range": "± 2642",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2403312,
            "range": "± 6410",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9718497,
            "range": "± 4267",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62192,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75348,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 316860,
            "range": "± 4781",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2861841,
            "range": "± 2046",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21306434,
            "range": "± 122673",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 201099157,
            "range": "± 681883",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75293,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 181124,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1234316,
            "range": "± 1058",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10380832,
            "range": "± 11636",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 87605761,
            "range": "± 137332",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nathan haim",
            "username": "najeal",
            "email": "haim.nathan@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6823e84b49f7b570ac00075ce89c2e5cef4ff089",
          "message": "[cryptography/secp256r1] create signature verification benchmark (#333)",
          "timestamp": "2025-01-09T18:43:14Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/6823e84b49f7b570ac00075ce89c2e5cef4ff089"
        },
        "date": 1736507765410,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8064,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41212,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 140296,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 896514,
            "range": "± 5555",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3695791,
            "range": "± 11263",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23458976,
            "range": "± 50519",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93162830,
            "range": "± 86270",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 435930,
            "range": "± 7705",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 310272,
            "range": "± 4711",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 261067,
            "range": "± 4957",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 422135,
            "range": "± 2312",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2609416,
            "range": "± 15074",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1479121,
            "range": "± 13506",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 870047,
            "range": "± 10122",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 905740,
            "range": "± 9423",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9217932,
            "range": "± 40625",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5030103,
            "range": "± 21596",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2963718,
            "range": "± 8351",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2750288,
            "range": "± 33903",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65602635,
            "range": "± 76564",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34121676,
            "range": "± 58599",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18147640,
            "range": "± 273063",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16101896,
            "range": "± 32637",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 310052074,
            "range": "± 283594",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 157868708,
            "range": "± 344400",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79419743,
            "range": "± 6139033",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72556400,
            "range": "± 947161",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2617758114,
            "range": "± 1139323",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1321950443,
            "range": "± 2523756",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 661507075,
            "range": "± 4759520",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 571285645,
            "range": "± 4944606",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12470244985,
            "range": "± 4241568",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6264737553,
            "range": "± 4634822",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3150601870,
            "range": "± 10374318",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2738359996,
            "range": "± 583919",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217868,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 639158,
            "range": "± 1408",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1299835,
            "range": "± 7355",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3759594,
            "range": "± 2947",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8833020,
            "range": "± 7719",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29993666,
            "range": "± 20994",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66804326,
            "range": "± 52749",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8189,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81463,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 813273,
            "range": "± 1054",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8138181,
            "range": "± 8371",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20293,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 202068,
            "range": "± 1001",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2027766,
            "range": "± 6449",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20250197,
            "range": "± 49983",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=5",
            "value": 400459,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=5",
            "value": 1746873,
            "range": "± 3756",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3904603,
            "range": "± 16816",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2683019,
            "range": "± 14781",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2299384,
            "range": "± 9815",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2399642,
            "range": "± 10889",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22887091,
            "range": "± 53599",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12349768,
            "range": "± 42442",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7228681,
            "range": "± 346894",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6775455,
            "range": "± 25943",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 212342288,
            "range": "± 255675",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107281331,
            "range": "± 126778",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54651676,
            "range": "± 131171",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 49969388,
            "range": "± 65111",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2106803071,
            "range": "± 9952806",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1054193411,
            "range": "± 189124",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 528527008,
            "range": "± 4707690",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 479697008,
            "range": "± 1232483",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10519830910,
            "range": "± 10012264",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5264859607,
            "range": "± 1239995",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2636148380,
            "range": "± 11876590",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2389866076,
            "range": "± 6830605",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1592773,
            "range": "± 865",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1665518,
            "range": "± 10793",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2401133,
            "range": "± 4839",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9734095,
            "range": "± 12946",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62286,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75520,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 317227,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2811260,
            "range": "± 2642",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21202901,
            "range": "± 282576",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 200693814,
            "range": "± 528801",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75413,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 181517,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1235437,
            "range": "± 1553",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10354552,
            "range": "± 42491",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 87968437,
            "range": "± 200046",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 346280,
            "range": "± 276",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Brendan Chou",
            "username": "BrendanChou",
            "email": "3680392+BrendanChou@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5e35b4a15ec37b07d9b766341dfe467f4576f64f",
          "message": "Migrate `p2p/simulated` to use deterministic, audited network connections (#334)\n\nCo-authored-by: Patrick O'Grady <me@patrickogrady.xyz>",
          "timestamp": "2025-01-15T00:30:51Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/5e35b4a15ec37b07d9b766341dfe467f4576f64f"
        },
        "date": 1736939814730,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8128,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 42146,
            "range": "± 668",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 141943,
            "range": "± 1948",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 904108,
            "range": "± 1803",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3716847,
            "range": "± 13131",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23447177,
            "range": "± 31757",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93390713,
            "range": "± 57487",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 436921,
            "range": "± 5816",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 311969,
            "range": "± 4853",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 246262,
            "range": "± 2739",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 425283,
            "range": "± 4390",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2615652,
            "range": "± 10724",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1509179,
            "range": "± 16942",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 854787,
            "range": "± 13467",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 915495,
            "range": "± 24189",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9235971,
            "range": "± 48976",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5037577,
            "range": "± 34930",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2972852,
            "range": "± 19162",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2731922,
            "range": "± 27430",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65556980,
            "range": "± 28640",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34148849,
            "range": "± 193168",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18193169,
            "range": "± 17043",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16150670,
            "range": "± 16861",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 309574917,
            "range": "± 167911",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 157757344,
            "range": "± 140173",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79297276,
            "range": "± 123181",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72530032,
            "range": "± 1275173",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2611092015,
            "range": "± 3042114",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1315805792,
            "range": "± 1160571",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 659343363,
            "range": "± 1271247",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 571011344,
            "range": "± 3580458",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12428182015,
            "range": "± 4921812",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6238242391,
            "range": "± 14379779",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3142240941,
            "range": "± 1530369",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2734945151,
            "range": "± 680647",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217167,
            "range": "± 550",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 638332,
            "range": "± 1349",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1297691,
            "range": "± 1058",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3754568,
            "range": "± 3227",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8824718,
            "range": "± 5754",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29891679,
            "range": "± 18293",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66680073,
            "range": "± 122301",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8187,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81191,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 812891,
            "range": "± 1242",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8122760,
            "range": "± 7498",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20315,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 202181,
            "range": "± 1662",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2022909,
            "range": "± 6329",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20228005,
            "range": "± 32140",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=5",
            "value": 400598,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=5",
            "value": 1750578,
            "range": "± 1210",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3904527,
            "range": "± 15317",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2691137,
            "range": "± 8478",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2244509,
            "range": "± 17735",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2404167,
            "range": "± 12283",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22954037,
            "range": "± 30845",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12364698,
            "range": "± 40347",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7207950,
            "range": "± 480632",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6860649,
            "range": "± 36938",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 212436664,
            "range": "± 3562277",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107289453,
            "range": "± 2024033",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54590642,
            "range": "± 382063",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 49967995,
            "range": "± 52619",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2106656474,
            "range": "± 631564",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1055688701,
            "range": "± 381141",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 529129465,
            "range": "± 347060",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 480235263,
            "range": "± 642613",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10533419627,
            "range": "± 62485964",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5273878017,
            "range": "± 3851548",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2637915241,
            "range": "± 989229",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2389472171,
            "range": "± 1488103",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1595517,
            "range": "± 1141",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1669897,
            "range": "± 2348",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2406837,
            "range": "± 10696",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9719591,
            "range": "± 7523",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62364,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75497,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 317747,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2801992,
            "range": "± 3699",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21171435,
            "range": "± 43465",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 200390813,
            "range": "± 149921",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75604,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 181843,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1240478,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10343057,
            "range": "± 12271",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 87533083,
            "range": "± 73869",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 343903,
            "range": "± 417",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "commonware-storage": [
      {
        "commit": {
          "author": {
            "name": "nathan haim",
            "username": "najeal",
            "email": "haim.nathan@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fa13112fb94d0946bc13fce36f374b0419b14358",
          "message": "[cryptography/secp256r1] add secp256r1 scheme (#314)\n\nCo-authored-by: Patrick O'Grady <me@patrickogrady.xyz>",
          "timestamp": "2025-01-09T00:19:48Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/fa13112fb94d0946bc13fce36f374b0419b14358"
        },
        "date": 1736422129291,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 5333774,
            "range": "± 410482",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 6674380,
            "range": "± 890949",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7507803,
            "range": "± 1043506",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7204789,
            "range": "± 789547",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 62160501,
            "range": "± 1267691",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 65021860,
            "range": "± 873017",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 71841012,
            "range": "± 378230",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 148518950,
            "range": "± 3378257",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 704118826,
            "range": "± 10698393",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 762549933,
            "range": "± 65998553",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 855054307,
            "range": "± 65028303",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 1859253945,
            "range": "± 9230237",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5596907,
            "range": "± 23930",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 108303200,
            "range": "± 663176",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1389931148,
            "range": "± 33678301",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 11472282,
            "range": "± 367308",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 11860583,
            "range": "± 164735",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 12406563,
            "range": "± 359013",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 13949486,
            "range": "± 557944",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 390121447,
            "range": "± 12232752",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 406013784,
            "range": "± 14547954",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 406187702,
            "range": "± 5806648",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 484384954,
            "range": "± 20424004",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3927066425,
            "range": "± 53956125",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 4124866270,
            "range": "± 96016968",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 4064816456,
            "range": "± 33122986",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 4142091602,
            "range": "± 98133115",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nathan haim",
            "username": "najeal",
            "email": "haim.nathan@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6823e84b49f7b570ac00075ce89c2e5cef4ff089",
          "message": "[cryptography/secp256r1] create signature verification benchmark (#333)",
          "timestamp": "2025-01-09T18:43:14Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/6823e84b49f7b570ac00075ce89c2e5cef4ff089"
        },
        "date": 1736508536268,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 4710554,
            "range": "± 737843",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 5723766,
            "range": "± 1043294",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7041787,
            "range": "± 1276276",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 6630482,
            "range": "± 1280406",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 63097016,
            "range": "± 575570",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 67627196,
            "range": "± 1197387",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 74418169,
            "range": "± 589570",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 148337462,
            "range": "± 1101389",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 764103086,
            "range": "± 10566777",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 812224741,
            "range": "± 10042511",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 847281590,
            "range": "± 11694089",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 1902070598,
            "range": "± 31992580",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5583676,
            "range": "± 31103",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 108855229,
            "range": "± 435752",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1361514883,
            "range": "± 6538644",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 10984180,
            "range": "± 71606",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 11268649,
            "range": "± 86835",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 11543158,
            "range": "± 228165",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 12391773,
            "range": "± 126451",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 341782780,
            "range": "± 5944398",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 360176066,
            "range": "± 11833925",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 366203901,
            "range": "± 5941866",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 432889177,
            "range": "± 8991607",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 4092857423,
            "range": "± 69410477",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 4365819068,
            "range": "± 61089306",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 4111526132,
            "range": "± 66752156",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 4206455258,
            "range": "± 38239217",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Brendan Chou",
            "username": "BrendanChou",
            "email": "3680392+BrendanChou@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5e35b4a15ec37b07d9b766341dfe467f4576f64f",
          "message": "Migrate `p2p/simulated` to use deterministic, audited network connections (#334)\n\nCo-authored-by: Patrick O'Grady <me@patrickogrady.xyz>",
          "timestamp": "2025-01-15T00:30:51Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/5e35b4a15ec37b07d9b766341dfe467f4576f64f"
        },
        "date": 1736940590790,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 4496642,
            "range": "± 675634",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 5262765,
            "range": "± 1011835",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 6770482,
            "range": "± 1140426",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 6192757,
            "range": "± 1218014",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 58642522,
            "range": "± 258747",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 62159232,
            "range": "± 1539435",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 69867235,
            "range": "± 342652",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 133306325,
            "range": "± 1509383",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 786535399,
            "range": "± 28999775",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 779912974,
            "range": "± 12489616",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 826840381,
            "range": "± 14664083",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 1800572811,
            "range": "± 16941839",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5555340,
            "range": "± 27354",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 105811418,
            "range": "± 164278",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1268581085,
            "range": "± 6831474",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 11034655,
            "range": "± 94660",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 11445531,
            "range": "± 96335",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 11708137,
            "range": "± 127506",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 12652683,
            "range": "± 180793",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 320313389,
            "range": "± 2405683",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 333608992,
            "range": "± 2429736",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 342603659,
            "range": "± 4554855",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 413735574,
            "range": "± 4199444",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 4012992638,
            "range": "± 69176556",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 4173355100,
            "range": "± 47546683",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 4249491900,
            "range": "± 123079478",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 4065034418,
            "range": "± 56775921",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "commonware-stream": [
      {
        "commit": {
          "author": {
            "name": "nathan haim",
            "username": "najeal",
            "email": "haim.nathan@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fa13112fb94d0946bc13fce36f374b0419b14358",
          "message": "[cryptography/secp256r1] add secp256r1 scheme (#314)\n\nCo-authored-by: Patrick O'Grady <me@patrickogrady.xyz>",
          "timestamp": "2025-01-09T00:19:48Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/fa13112fb94d0946bc13fce36f374b0419b14358"
        },
        "date": 1736422366268,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2671,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 4949,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 13964,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 203822,
            "range": "± 16253",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 1160874,
            "range": "± 166898",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 8954212,
            "range": "± 31533",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 29903295,
            "range": "± 165054",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 90606000,
            "range": "± 428515",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4491,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11765,
            "range": "± 1182",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 40866,
            "range": "± 1369",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 630705,
            "range": "± 3525",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2842953,
            "range": "± 8684",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 11470448,
            "range": "± 84874",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 48667631,
            "range": "± 214249",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 178652997,
            "range": "± 1793739",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nathan haim",
            "username": "najeal",
            "email": "haim.nathan@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6823e84b49f7b570ac00075ce89c2e5cef4ff089",
          "message": "[cryptography/secp256r1] create signature verification benchmark (#333)",
          "timestamp": "2025-01-09T18:43:14Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/6823e84b49f7b570ac00075ce89c2e5cef4ff089"
        },
        "date": 1736508804847,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2719,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 4993,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 13961,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 218928,
            "range": "± 17945",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 1231583,
            "range": "± 167470",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 8853323,
            "range": "± 68621",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 29919958,
            "range": "± 64805",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 90635508,
            "range": "± 304508",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4491,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11788,
            "range": "± 1404",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 40940,
            "range": "± 3254",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 630976,
            "range": "± 3843",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2814769,
            "range": "± 6258",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 11463819,
            "range": "± 37298",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 48598647,
            "range": "± 160050",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 193128023,
            "range": "± 453025",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}