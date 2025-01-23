window.BENCHMARK_DATA = {
  "lastUpdate": 1737635716302,
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
      },
      {
        "commit": {
          "author": {
            "name": "Patrick O'Grady",
            "username": "patrick-ogrady",
            "email": "me@patrickogrady.xyz"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fbc82e24a8baef1f47e0d69d1c2ac583ff974951",
          "message": "[examples/bridge] Fix Usage Commands (#349)",
          "timestamp": "2025-01-15T23:52:59Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/fbc82e24a8baef1f47e0d69d1c2ac583ff974951"
        },
        "date": 1737026131083,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8117,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41644,
            "range": "± 771",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 141251,
            "range": "± 1631",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 898861,
            "range": "± 2072",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3683370,
            "range": "± 3514",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23393925,
            "range": "± 35182",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93143111,
            "range": "± 163803",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 433285,
            "range": "± 4828",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 308588,
            "range": "± 5463",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 251914,
            "range": "± 4483",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 416655,
            "range": "± 6239",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2603971,
            "range": "± 12870",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1475971,
            "range": "± 13880",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 852542,
            "range": "± 13882",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 888180,
            "range": "± 11738",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9202059,
            "range": "± 23260",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5025412,
            "range": "± 62998",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2949505,
            "range": "± 7805",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2710636,
            "range": "± 24452",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65457292,
            "range": "± 78139",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34057237,
            "range": "± 40400",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18096525,
            "range": "± 188604",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16084043,
            "range": "± 24694",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 309273758,
            "range": "± 4845756",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 157450406,
            "range": "± 190890",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79115530,
            "range": "± 58079",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72387676,
            "range": "± 1385714",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2611018117,
            "range": "± 991507",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1314672392,
            "range": "± 817698",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 659351544,
            "range": "± 5607714",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 570527068,
            "range": "± 229327",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12429854879,
            "range": "± 2823525",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6237087001,
            "range": "± 5057843",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3141762616,
            "range": "± 2219805",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2733758576,
            "range": "± 687494",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217251,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 638000,
            "range": "± 1344",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1297230,
            "range": "± 3006",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3753340,
            "range": "± 5583",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8825457,
            "range": "± 10287",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29876799,
            "range": "± 67414",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66620559,
            "range": "± 64057",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8174,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81287,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 812609,
            "range": "± 1342",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8132128,
            "range": "± 10137",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20336,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 202295,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2014604,
            "range": "± 4830",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20180436,
            "range": "± 34931",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=5",
            "value": 400518,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=5",
            "value": 1752386,
            "range": "± 5720",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3902366,
            "range": "± 12397",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2681940,
            "range": "± 19504",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2275809,
            "range": "± 18623",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2385634,
            "range": "± 18561",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22911158,
            "range": "± 27554",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12363273,
            "range": "± 47057",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7202069,
            "range": "± 295291",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6782484,
            "range": "± 54492",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 212365105,
            "range": "± 100897",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107226454,
            "range": "± 50297",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54725650,
            "range": "± 56910",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 49984704,
            "range": "± 60147",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2107052526,
            "range": "± 987245",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1056624866,
            "range": "± 649922",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 534872938,
            "range": "± 5014379",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 479861292,
            "range": "± 358903",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10528904108,
            "range": "± 3245564",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5274830643,
            "range": "± 3534048",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2638410546,
            "range": "± 16405962",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2389656902,
            "range": "± 8800905",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1600404,
            "range": "± 835",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1677421,
            "range": "± 6021",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2408433,
            "range": "± 5329",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9724220,
            "range": "± 13853",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62508,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75655,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 318537,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2814412,
            "range": "± 2623",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21188671,
            "range": "± 34847",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 198553854,
            "range": "± 354305",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75538,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 181706,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1243254,
            "range": "± 8319",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10502438,
            "range": "± 46983",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 87828554,
            "range": "± 161703",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 340650,
            "range": "± 212",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DevEloperate",
            "username": "dramarereg",
            "email": "dmitriy.i3.jp@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fd9a935cc3f8abf934f1e4d6671e35fd024f07d0",
          "message": "docs: Cleaned up typos in comments (#351)",
          "timestamp": "2025-01-16T23:07:43Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/fd9a935cc3f8abf934f1e4d6671e35fd024f07d0"
        },
        "date": 1737112577417,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8040,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41352,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 140515,
            "range": "± 802",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 895277,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3674105,
            "range": "± 5669",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23424880,
            "range": "± 59781",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93305767,
            "range": "± 364225",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 426040,
            "range": "± 4106",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 314958,
            "range": "± 3684",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 246478,
            "range": "± 3760",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 419576,
            "range": "± 2082",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2555766,
            "range": "± 45326",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1482015,
            "range": "± 32388",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 853421,
            "range": "± 13480",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 920569,
            "range": "± 19439",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9259742,
            "range": "± 23269",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5062134,
            "range": "± 48266",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2970187,
            "range": "± 8075",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2786120,
            "range": "± 86794",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65899287,
            "range": "± 33297",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34266979,
            "range": "± 49968",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18220333,
            "range": "± 18049",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16169829,
            "range": "± 20074",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311503475,
            "range": "± 144038",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158521406,
            "range": "± 793859",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79625985,
            "range": "± 250071",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72819509,
            "range": "± 50199",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2631038150,
            "range": "± 5678739",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1324772469,
            "range": "± 1054557",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 663527113,
            "range": "± 731257",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 573952968,
            "range": "± 1528658",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12516567237,
            "range": "± 1906860",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6296397569,
            "range": "± 7148286",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3162569817,
            "range": "± 2135129",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2749831371,
            "range": "± 662411",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217941,
            "range": "± 1566",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 640090,
            "range": "± 27468",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1301413,
            "range": "± 40681",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3764589,
            "range": "± 18654",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8848874,
            "range": "± 14251",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29953076,
            "range": "± 18462",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66811480,
            "range": "± 22905",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8212,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81539,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 815044,
            "range": "± 1269",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8153495,
            "range": "± 7401",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20344,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 203068,
            "range": "± 1059",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2028610,
            "range": "± 4346",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20263604,
            "range": "± 24627",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=5",
            "value": 401528,
            "range": "± 1236",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=5",
            "value": 1751273,
            "range": "± 2811",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3769607,
            "range": "± 46746",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2602646,
            "range": "± 17670",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2233153,
            "range": "± 12743",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2377224,
            "range": "± 23645",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22977453,
            "range": "± 61397",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12798989,
            "range": "± 151564",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7384152,
            "range": "± 468937",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6847879,
            "range": "± 54220",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 212997117,
            "range": "± 244712",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107815639,
            "range": "± 122805",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54741272,
            "range": "± 296883",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 50257379,
            "range": "± 249106",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2115035957,
            "range": "± 892222",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1060622217,
            "range": "± 1048460",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 530783595,
            "range": "± 16426640",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 483196542,
            "range": "± 484220",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10558956954,
            "range": "± 2746669",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5300944038,
            "range": "± 4091012",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2650225870,
            "range": "± 3086457",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2404758184,
            "range": "± 2675646",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1596770,
            "range": "± 1073",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1670361,
            "range": "± 1491",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2402078,
            "range": "± 4964",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9750071,
            "range": "± 6695",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62667,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75947,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 320055,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2815962,
            "range": "± 1018",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21244707,
            "range": "± 37726",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 199515626,
            "range": "± 225080",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75864,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 182461,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1245724,
            "range": "± 528",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10491585,
            "range": "± 49332",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 88104066,
            "range": "± 118146",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 343360,
            "range": "± 268",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Patrick O'Grady",
            "username": "patrick-ogrady",
            "email": "me@patrickogrady.xyz"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f10d933f106b290c765d1a44559c1ee8e2ddf414",
          "message": "[utils] Add utils to WASM check (#363)",
          "timestamp": "2025-01-17T20:34:23Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/f10d933f106b290c765d1a44559c1ee8e2ddf414"
        },
        "date": 1737198932047,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8031,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41231,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 140645,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 895379,
            "range": "± 1253",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3679124,
            "range": "± 9106",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23499128,
            "range": "± 53235",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93455881,
            "range": "± 126821",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 423457,
            "range": "± 2592",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 311364,
            "range": "± 1975",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 248655,
            "range": "± 1950",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 419386,
            "range": "± 2193",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2563288,
            "range": "± 30030",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1477853,
            "range": "± 16694",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 855027,
            "range": "± 15154",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 902956,
            "range": "± 16025",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9263607,
            "range": "± 26083",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5052545,
            "range": "± 47618",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2971014,
            "range": "± 7060",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2723567,
            "range": "± 26946",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65880390,
            "range": "± 44185",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34214696,
            "range": "± 38771",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18195820,
            "range": "± 11143",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16177171,
            "range": "± 217030",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 312051365,
            "range": "± 90236",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158459818,
            "range": "± 100148",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79679145,
            "range": "± 159521",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72795256,
            "range": "± 33940",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2629521449,
            "range": "± 1004532",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1323641602,
            "range": "± 632563",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 664521495,
            "range": "± 1435696",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 573754666,
            "range": "± 7059320",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12556751639,
            "range": "± 3173498",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6291208321,
            "range": "± 6682810",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3165363172,
            "range": "± 9049395",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2750019637,
            "range": "± 429189",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217802,
            "range": "± 1592",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 639622,
            "range": "± 684",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1300853,
            "range": "± 3148",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3763842,
            "range": "± 4709",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8847670,
            "range": "± 20482",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29946167,
            "range": "± 166570",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66794522,
            "range": "± 87973",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8196,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81654,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 815551,
            "range": "± 1662",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8153650,
            "range": "± 6442",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20383,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 202911,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2026470,
            "range": "± 3995",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20268605,
            "range": "± 14129",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=5",
            "value": 401211,
            "range": "± 738",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=5",
            "value": 1753697,
            "range": "± 1270",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3807748,
            "range": "± 29878",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2596450,
            "range": "± 11772",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2229377,
            "range": "± 19585",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2377313,
            "range": "± 9251",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22976196,
            "range": "± 43967",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12408143,
            "range": "± 53981",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7361960,
            "range": "± 281027",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6861854,
            "range": "± 76853",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 213016323,
            "range": "± 143068",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107687493,
            "range": "± 186472",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54696647,
            "range": "± 32879",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 50288658,
            "range": "± 86601",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2113361268,
            "range": "± 1445451",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1060960354,
            "range": "± 1686482",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 531134471,
            "range": "± 4808156",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 483453339,
            "range": "± 344404",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10560640721,
            "range": "± 3851601",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5302650507,
            "range": "± 5017046",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2647299460,
            "range": "± 1482815",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2406917323,
            "range": "± 13279505",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1599147,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1672764,
            "range": "± 1655",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2412040,
            "range": "± 22458",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9741712,
            "range": "± 6424",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62307,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75685,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 319006,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2838900,
            "range": "± 1333",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21277557,
            "range": "± 75033",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 199926480,
            "range": "± 231062",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75474,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 181885,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1247738,
            "range": "± 1882",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10431880,
            "range": "± 15225",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 88350042,
            "range": "± 67458",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 345790,
            "range": "± 217",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Dmitry",
            "username": "mdqst",
            "email": "98899785+mdqst@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "da8d347aadb66aeadfa00ae3a4cae721c0c3085e",
          "message": "fix: Fix for File Writing Issue to Prevent Formatting Errors (#364)",
          "timestamp": "2025-01-19T00:36:27Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/da8d347aadb66aeadfa00ae3a4cae721c0c3085e"
        },
        "date": 1737285319690,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8011,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41559,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 141753,
            "range": "± 897",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 895647,
            "range": "± 1424",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3682145,
            "range": "± 10556",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23486114,
            "range": "± 47986",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93595719,
            "range": "± 125618",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 432697,
            "range": "± 5812",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 313742,
            "range": "± 2341",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 247307,
            "range": "± 4602",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 428778,
            "range": "± 2056",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2584615,
            "range": "± 51630",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1493997,
            "range": "± 29790",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 865657,
            "range": "± 16362",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 950842,
            "range": "± 60316",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9394125,
            "range": "± 37394",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5076208,
            "range": "± 53475",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2963302,
            "range": "± 6935",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2820584,
            "range": "± 65050",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65970075,
            "range": "± 105296",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34272505,
            "range": "± 50141",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18204765,
            "range": "± 180962",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16197773,
            "range": "± 180101",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311621423,
            "range": "± 174757",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158597385,
            "range": "± 177145",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79792413,
            "range": "± 114816",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72817494,
            "range": "± 136228",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2630576831,
            "range": "± 2437613",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1326938377,
            "range": "± 1772195",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 664645253,
            "range": "± 900770",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 574191551,
            "range": "± 435480",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12519525591,
            "range": "± 2594496",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6293103557,
            "range": "± 7592548",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3165402895,
            "range": "± 4595143",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2751526049,
            "range": "± 4548082",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217500,
            "range": "± 1519",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 640520,
            "range": "± 1695",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1301880,
            "range": "± 3829",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3765349,
            "range": "± 3800",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8849852,
            "range": "± 6519",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29959390,
            "range": "± 14826",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66856602,
            "range": "± 68685",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8208,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81660,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 814803,
            "range": "± 1789",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8156454,
            "range": "± 9045",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20372,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 202982,
            "range": "± 809",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2031436,
            "range": "± 3273",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20294895,
            "range": "± 28617",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=5",
            "value": 401580,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=5",
            "value": 1758511,
            "range": "± 1001",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3803124,
            "range": "± 45641",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2671075,
            "range": "± 49527",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2282451,
            "range": "± 15508",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2456865,
            "range": "± 39795",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 23374032,
            "range": "± 99370",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12671169,
            "range": "± 44078",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7251578,
            "range": "± 374855",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 7068076,
            "range": "± 66712",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 213498656,
            "range": "± 234861",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107830801,
            "range": "± 107285",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54932673,
            "range": "± 977138",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 50555604,
            "range": "± 70341",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2114211075,
            "range": "± 1221766",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1059423512,
            "range": "± 423328",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 531193867,
            "range": "± 406151",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 483390386,
            "range": "± 457506",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10559816526,
            "range": "± 2888571",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5292006366,
            "range": "± 8953262",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2647861610,
            "range": "± 2312069",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2406551839,
            "range": "± 2003594",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1599836,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1674266,
            "range": "± 3544",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2410828,
            "range": "± 12405",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9755338,
            "range": "± 11076",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62285,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75504,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 318486,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2812635,
            "range": "± 800",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21242839,
            "range": "± 34411",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 200325708,
            "range": "± 274795",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75507,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 181805,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1245843,
            "range": "± 1101",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10477211,
            "range": "± 23345",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 88366307,
            "range": "± 66908",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 341705,
            "range": "± 131",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "NikolaiKryshnev",
            "username": "NikolaiKryshnev",
            "email": "63440682+NikolaiKryshnev@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bd2a4ece9eb96d793d2ac456aab75c79cb4a4899",
          "message": "[examples] Fix Spacing (#365)",
          "timestamp": "2025-01-20T04:49:38Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/bd2a4ece9eb96d793d2ac456aab75c79cb4a4899"
        },
        "date": 1737372014027,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8623,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 45165,
            "range": "± 1475",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 148474,
            "range": "± 2308",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 948430,
            "range": "± 5097",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3943129,
            "range": "± 63699",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 24988720,
            "range": "± 275185",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 98776319,
            "range": "± 1943072",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 558720,
            "range": "± 28292",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 410714,
            "range": "± 16477",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 326146,
            "range": "± 9875",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 520654,
            "range": "± 7850",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 3232551,
            "range": "± 98503",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1757892,
            "range": "± 114688",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 1073757,
            "range": "± 59779",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 1220785,
            "range": "± 104280",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 10692786,
            "range": "± 153503",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5842987,
            "range": "± 242098",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 3301931,
            "range": "± 57103",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 3542789,
            "range": "± 325897",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 71514043,
            "range": "± 533767",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 37599949,
            "range": "± 299596",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 19744885,
            "range": "± 118983",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 17724291,
            "range": "± 127808",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 330730522,
            "range": "± 2762832",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 168226492,
            "range": "± 2879791",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 86612849,
            "range": "± 3334187",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 78893938,
            "range": "± 984158",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2771320787,
            "range": "± 34714839",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1421666395,
            "range": "± 9076676",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 716860128,
            "range": "± 3869191",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 621485322,
            "range": "± 5791359",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 13210076482,
            "range": "± 47898363",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6749403575,
            "range": "± 20208502",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3410887728,
            "range": "± 12135402",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2986483561,
            "range": "± 19102798",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 230722,
            "range": "± 2923",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 680581,
            "range": "± 7634",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1376671,
            "range": "± 19583",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3963332,
            "range": "± 75180",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 9242987,
            "range": "± 168988",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 31629135,
            "range": "± 547188",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 70721543,
            "range": "± 733397",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8638,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 85635,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 854480,
            "range": "± 5207",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8565357,
            "range": "± 82780",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 21666,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 214358,
            "range": "± 1830",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2150049,
            "range": "± 21741",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 21306296,
            "range": "± 249891",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=5",
            "value": 422685,
            "range": "± 5167",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=5",
            "value": 1883971,
            "range": "± 20744",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 4835271,
            "range": "± 72957",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 3342923,
            "range": "± 55885",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2764409,
            "range": "± 39460",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2823131,
            "range": "± 41503",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 26185397,
            "range": "± 151807",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 14628407,
            "range": "± 166987",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 8451331,
            "range": "± 197067",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 8115954,
            "range": "± 229851",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 228153508,
            "range": "± 1297169",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 116339130,
            "range": "± 786282",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 58981945,
            "range": "± 410801",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 54898519,
            "range": "± 493673",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2194259868,
            "range": "± 10658156",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1113130992,
            "range": "± 7966058",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 559149490,
            "range": "± 8511534",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 510858413,
            "range": "± 4776027",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 11091261461,
            "range": "± 83302678",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5566975756,
            "range": "± 45766122",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2757409966,
            "range": "± 28969328",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2563790749,
            "range": "± 27583103",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1695487,
            "range": "± 15358",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1804215,
            "range": "± 26780",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2635278,
            "range": "± 64239",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 10231319,
            "range": "± 209639",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 65414,
            "range": "± 675",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 79808,
            "range": "± 839",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 343745,
            "range": "± 2726",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 3002837,
            "range": "± 30960",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 22518882,
            "range": "± 181138",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 213940461,
            "range": "± 2082210",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 80085,
            "range": "± 719",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 196247,
            "range": "± 1982",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1358773,
            "range": "± 14872",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 11140747,
            "range": "± 81933",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 93261898,
            "range": "± 654681",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 360780,
            "range": "± 2682",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Patrick O'Grady",
            "username": "patrick-ogrady",
            "email": "me@patrickogrady.xyz"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9a152bf0d9942d41b6d9443b574faf4fd15b35e3",
          "message": "[release] 1-20-25 (#376)",
          "timestamp": "2025-01-20T19:41:30Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/9a152bf0d9942d41b6d9443b574faf4fd15b35e3"
        },
        "date": 1737458188551,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8284,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 42852,
            "range": "± 596",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 145018,
            "range": "± 2822",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 909825,
            "range": "± 4621",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3711174,
            "range": "± 5262",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23630439,
            "range": "± 62928",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93543385,
            "range": "± 37571",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 428869,
            "range": "± 7554",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 316905,
            "range": "± 6492",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 260266,
            "range": "± 4787",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 441131,
            "range": "± 4153",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2565994,
            "range": "± 25501",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1496460,
            "range": "± 11529",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 867619,
            "range": "± 34841",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 924773,
            "range": "± 20850",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9277033,
            "range": "± 19291",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5050545,
            "range": "± 36529",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2997365,
            "range": "± 76155",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2770926,
            "range": "± 54387",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 66012814,
            "range": "± 67386",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34304979,
            "range": "± 52333",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18298503,
            "range": "± 15483",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16269154,
            "range": "± 33059",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311761620,
            "range": "± 755173",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158788548,
            "range": "± 226320",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79773779,
            "range": "± 252971",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72930841,
            "range": "± 1276273",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2630009668,
            "range": "± 1621154",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1327283629,
            "range": "± 11650900",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 665230507,
            "range": "± 869780",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 574367091,
            "range": "± 347969",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12522047342,
            "range": "± 19071183",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6301827290,
            "range": "± 11017518",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3167382811,
            "range": "± 17286495",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2750469871,
            "range": "± 2278260",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217639,
            "range": "± 1598",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 639922,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1300349,
            "range": "± 1345",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3763354,
            "range": "± 5699",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8844248,
            "range": "± 12893",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29947887,
            "range": "± 17308",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66791563,
            "range": "± 1501247",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8199,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81599,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 816375,
            "range": "± 1368",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8153963,
            "range": "± 6665",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20359,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 203177,
            "range": "± 1508",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2041284,
            "range": "± 2301",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20396169,
            "range": "± 21174",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=5",
            "value": 401353,
            "range": "± 14395",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=5",
            "value": 1754089,
            "range": "± 3580",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3773861,
            "range": "± 46112",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2589308,
            "range": "± 12020",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2225073,
            "range": "± 11257",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2386903,
            "range": "± 20022",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22986773,
            "range": "± 38676",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12453024,
            "range": "± 74162",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7153678,
            "range": "± 292362",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6857270,
            "range": "± 39891",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 213161962,
            "range": "± 61765",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107610794,
            "range": "± 259433",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54766074,
            "range": "± 111963",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 50427809,
            "range": "± 222307",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2115508207,
            "range": "± 2074483",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1058916058,
            "range": "± 1154392",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 531289317,
            "range": "± 414762",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 483973716,
            "range": "± 759240",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10569149176,
            "range": "± 2986194",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5285880926,
            "range": "± 10966216",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2650014460,
            "range": "± 3866807",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2418549895,
            "range": "± 6461246",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1597930,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1671715,
            "range": "± 1158",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2406514,
            "range": "± 3341",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9743795,
            "range": "± 7916",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62660,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75611,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 317962,
            "range": "± 25140",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2814261,
            "range": "± 22670",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21230197,
            "range": "± 25986",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 201501505,
            "range": "± 346127",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75559,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 181902,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1241667,
            "range": "± 592",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10391569,
            "range": "± 7009",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 88257019,
            "range": "± 111293",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 344736,
            "range": "± 205",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "planetBoy",
            "username": "Guayaba221",
            "email": "140164174+Guayaba221@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "168c6256bd973f051c4abee3b73bd9eb2b5df3cc",
          "message": "Remove `Parent.digest` Lines (#378)",
          "timestamp": "2025-01-21T18:32:05Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/168c6256bd973f051c4abee3b73bd9eb2b5df3cc"
        },
        "date": 1737544516266,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8015,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41552,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 146298,
            "range": "± 2935",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 900866,
            "range": "± 3612",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3720986,
            "range": "± 6414",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23514706,
            "range": "± 136397",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93764922,
            "range": "± 312653",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 427369,
            "range": "± 5168",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 311811,
            "range": "± 1958",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 254761,
            "range": "± 3139",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 431753,
            "range": "± 6500",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2571049,
            "range": "± 25639",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1485887,
            "range": "± 11731",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 874433,
            "range": "± 11337",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 922475,
            "range": "± 12824",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9286847,
            "range": "± 22961",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5079067,
            "range": "± 49125",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2997029,
            "range": "± 36407",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2761956,
            "range": "± 29133",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 66028532,
            "range": "± 256435",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34323870,
            "range": "± 52349",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18318919,
            "range": "± 13676",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16285877,
            "range": "± 110625",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311462820,
            "range": "± 62678",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158555459,
            "range": "± 168664",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79771107,
            "range": "± 95403",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72943607,
            "range": "± 1687353",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2631073128,
            "range": "± 4206107",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1324509225,
            "range": "± 1295787",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 664562219,
            "range": "± 1971247",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 573966380,
            "range": "± 365969",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12513655402,
            "range": "± 8368525",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6282106973,
            "range": "± 16984576",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3166563566,
            "range": "± 4756625",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2750612599,
            "range": "± 1365538",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217595,
            "range": "± 1601",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 639885,
            "range": "± 3119",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1300840,
            "range": "± 1494",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3763957,
            "range": "± 4016",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8850308,
            "range": "± 45166",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29958968,
            "range": "± 21048",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66827142,
            "range": "± 107203",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8256,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81818,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 817079,
            "range": "± 1984",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8153861,
            "range": "± 8989",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20505,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 203194,
            "range": "± 1487",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2029137,
            "range": "± 6718",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20268291,
            "range": "± 33006",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=5",
            "value": 401272,
            "range": "± 419",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=5",
            "value": 1751147,
            "range": "± 5028",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3828096,
            "range": "± 28049",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2620172,
            "range": "± 23648",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2240765,
            "range": "± 47362",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2413486,
            "range": "± 13447",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 23011071,
            "range": "± 22126",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12445925,
            "range": "± 47471",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7235452,
            "range": "± 310507",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6866066,
            "range": "± 59475",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 213128061,
            "range": "± 125635",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107804198,
            "range": "± 169070",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54847846,
            "range": "± 269659",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 50327600,
            "range": "± 57947",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2114219181,
            "range": "± 3253344",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1058502227,
            "range": "± 1013544",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 531273841,
            "range": "± 3120775",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 482838359,
            "range": "± 675531",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10569265992,
            "range": "± 4139098",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5299240458,
            "range": "± 7533042",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2649002477,
            "range": "± 25870902",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2409211598,
            "range": "± 6568001",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1598856,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1670887,
            "range": "± 3878",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2409557,
            "range": "± 6654",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9741741,
            "range": "± 7804",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62345,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75437,
            "range": "± 511",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 318336,
            "range": "± 865",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2830545,
            "range": "± 6164",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21386592,
            "range": "± 68589",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 203079667,
            "range": "± 561398",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75357,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 181448,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1244821,
            "range": "± 1820",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10495238,
            "range": "± 49629",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 88634540,
            "range": "± 65801",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 346217,
            "range": "± 489",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Roberto Bayardo",
            "username": "roberto-bayardo",
            "email": "roberto@commonware.xyz"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1e98bc0670930eb44e847ac5094c08e15d279b69",
          "message": "Implement In-mem MMR (#335)",
          "timestamp": "2025-01-23T01:13:19Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/1e98bc0670930eb44e847ac5094c08e15d279b69"
        },
        "date": 1737634595983,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 7997,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41367,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 140319,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 894593,
            "range": "± 2341",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3675806,
            "range": "± 5508",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23319991,
            "range": "± 61118",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93155577,
            "range": "± 277199",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 423091,
            "range": "± 3332",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 310269,
            "range": "± 3246",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 261010,
            "range": "± 1876",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 421704,
            "range": "± 4114",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2543531,
            "range": "± 23878",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1487314,
            "range": "± 25760",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 870968,
            "range": "± 22830",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 920036,
            "range": "± 11046",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9290618,
            "range": "± 21025",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5041780,
            "range": "± 46854",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2968840,
            "range": "± 7343",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2743450,
            "range": "± 22463",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65882204,
            "range": "± 57392",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34228866,
            "range": "± 83798",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18197581,
            "range": "± 17239",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16189790,
            "range": "± 23182",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311619660,
            "range": "± 138552",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158497639,
            "range": "± 140833",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79636326,
            "range": "± 73409",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72807393,
            "range": "± 1352274",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2630185692,
            "range": "± 2570025",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1324121512,
            "range": "± 798321",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 664596134,
            "range": "± 969552",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 573759005,
            "range": "± 276993",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12523534835,
            "range": "± 6252364",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6283133837,
            "range": "± 9393500",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3164315751,
            "range": "± 9228269",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2749833614,
            "range": "± 1543834",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 218793,
            "range": "± 1674",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 642530,
            "range": "± 1785",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1306174,
            "range": "± 2530",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3778732,
            "range": "± 6947",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8875722,
            "range": "± 6712",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 30054081,
            "range": "± 46063",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 67075814,
            "range": "± 66276",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8205,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81671,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 814377,
            "range": "± 1281",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8153092,
            "range": "± 12371",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20360,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 202973,
            "range": "± 654",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2026052,
            "range": "± 3471",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20260450,
            "range": "± 12763",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=5",
            "value": 401332,
            "range": "± 550",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=5",
            "value": 1775731,
            "range": "± 1356",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3818091,
            "range": "± 28174",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2600998,
            "range": "± 16367",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2243613,
            "range": "± 15399",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2372403,
            "range": "± 5190",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 23005276,
            "range": "± 35524",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12471949,
            "range": "± 60256",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7255163,
            "range": "± 355015",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6833510,
            "range": "± 46414",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 214075005,
            "range": "± 619450",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107759565,
            "range": "± 126819",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54768317,
            "range": "± 42932",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 50285535,
            "range": "± 830536",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2114325284,
            "range": "± 3355226",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1058526883,
            "range": "± 950625",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 531715513,
            "range": "± 828649",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 483201278,
            "range": "± 389926",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10564175483,
            "range": "± 2633924",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5295001624,
            "range": "± 5976237",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2652429106,
            "range": "± 16923892",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2405427873,
            "range": "± 5357984",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1602990,
            "range": "± 1926",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1675780,
            "range": "± 1898",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2405688,
            "range": "± 3440",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9746504,
            "range": "± 5631",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62460,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75284,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 317601,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2829632,
            "range": "± 2153",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21277552,
            "range": "± 32115",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 201173949,
            "range": "± 782382",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75297,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 181080,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1241450,
            "range": "± 1486",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10423808,
            "range": "± 10344",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 88164058,
            "range": "± 100786",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 344026,
            "range": "± 361",
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
      },
      {
        "commit": {
          "author": {
            "name": "Patrick O'Grady",
            "username": "patrick-ogrady",
            "email": "me@patrickogrady.xyz"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fbc82e24a8baef1f47e0d69d1c2ac583ff974951",
          "message": "[examples/bridge] Fix Usage Commands (#349)",
          "timestamp": "2025-01-15T23:52:59Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/fbc82e24a8baef1f47e0d69d1c2ac583ff974951"
        },
        "date": 1737026909054,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 4509177,
            "range": "± 725086",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 5741715,
            "range": "± 1017388",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 6865753,
            "range": "± 1187593",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 6274699,
            "range": "± 1298652",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 59154115,
            "range": "± 463992",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 62419254,
            "range": "± 358898",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 69462824,
            "range": "± 439112",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 134469555,
            "range": "± 1725810",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 696912117,
            "range": "± 13978001",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 719215967,
            "range": "± 7099932",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 768837108,
            "range": "± 11811975",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 1835117584,
            "range": "± 20878455",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5595599,
            "range": "± 33023",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 105276386,
            "range": "± 170756",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1278823906,
            "range": "± 7017528",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 10910861,
            "range": "± 117640",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 11257212,
            "range": "± 132462",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 11587215,
            "range": "± 141589",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 12555053,
            "range": "± 78389",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 318955250,
            "range": "± 3745827",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 336909837,
            "range": "± 3325245",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 336576398,
            "range": "± 2241130",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 418196036,
            "range": "± 4169263",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3852136934,
            "range": "± 29415296",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 4117033470,
            "range": "± 44814686",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 4117210501,
            "range": "± 32177440",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 4225601859,
            "range": "± 43117698",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DevEloperate",
            "username": "dramarereg",
            "email": "dmitriy.i3.jp@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fd9a935cc3f8abf934f1e4d6671e35fd024f07d0",
          "message": "docs: Cleaned up typos in comments (#351)",
          "timestamp": "2025-01-16T23:07:43Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/fd9a935cc3f8abf934f1e4d6671e35fd024f07d0"
        },
        "date": 1737113381918,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 5432826,
            "range": "± 460729",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 6116811,
            "range": "± 1174148",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7261814,
            "range": "± 1193770",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7636221,
            "range": "± 1427389",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 60669154,
            "range": "± 808384",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 66169943,
            "range": "± 1872324",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 70202798,
            "range": "± 1719708",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 159657026,
            "range": "± 2720469",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 749355846,
            "range": "± 9644910",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 774117706,
            "range": "± 17595505",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 843336877,
            "range": "± 36226802",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2156344667,
            "range": "± 37157223",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5510072,
            "range": "± 10941",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 107512121,
            "range": "± 493711",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1367051898,
            "range": "± 13340153",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 10752425,
            "range": "± 91337",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 11554337,
            "range": "± 732147",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 11388084,
            "range": "± 185941",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 12406548,
            "range": "± 109423",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 340834447,
            "range": "± 13070885",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 355702988,
            "range": "± 4013093",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 382465588,
            "range": "± 37285817",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 448075587,
            "range": "± 6059152",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3906202237,
            "range": "± 71331351",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 4027799060,
            "range": "± 40211018",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 3969245803,
            "range": "± 98525272",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 4161670771,
            "range": "± 49056717",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Patrick O'Grady",
            "username": "patrick-ogrady",
            "email": "me@patrickogrady.xyz"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f10d933f106b290c765d1a44559c1ee8e2ddf414",
          "message": "[utils] Add utils to WASM check (#363)",
          "timestamp": "2025-01-17T20:34:23Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/f10d933f106b290c765d1a44559c1ee8e2ddf414"
        },
        "date": 1737199843904,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 6948119,
            "range": "± 380242",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 9837988,
            "range": "± 495552",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 10781771,
            "range": "± 190988",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7647602,
            "range": "± 1826019",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 76993228,
            "range": "± 4153290",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 76381859,
            "range": "± 1384714",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 79972383,
            "range": "± 6751575",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 214964038,
            "range": "± 6090242",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 863460860,
            "range": "± 8558666",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 884115399,
            "range": "± 12546585",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 1030459041,
            "range": "± 88196210",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 3087955560,
            "range": "± 33205441",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 6742888,
            "range": "± 205616",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 132412205,
            "range": "± 620519",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 2014937185,
            "range": "± 14296950",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 18746974,
            "range": "± 611396",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 21126087,
            "range": "± 888136",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 21506539,
            "range": "± 1052107",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 26863618,
            "range": "± 362709",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 565324782,
            "range": "± 8787481",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 596222455,
            "range": "± 4828536",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 586356839,
            "range": "± 3642501",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 617189548,
            "range": "± 8954133",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 4912661327,
            "range": "± 39715434",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 5099409853,
            "range": "± 56655086",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 5102435120,
            "range": "± 31260574",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 5141417783,
            "range": "± 50944404",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Dmitry",
            "username": "mdqst",
            "email": "98899785+mdqst@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "da8d347aadb66aeadfa00ae3a4cae721c0c3085e",
          "message": "fix: Fix for File Writing Issue to Prevent Formatting Errors (#364)",
          "timestamp": "2025-01-19T00:36:27Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/da8d347aadb66aeadfa00ae3a4cae721c0c3085e"
        },
        "date": 1737286113025,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 4524539,
            "range": "± 787545",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 6585239,
            "range": "± 994297",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7297794,
            "range": "± 1349643",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7488541,
            "range": "± 1491454",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 61723752,
            "range": "± 934616",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 64379378,
            "range": "± 1319857",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 72090052,
            "range": "± 746724",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 153566846,
            "range": "± 2730406",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 725152189,
            "range": "± 9301503",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 747866367,
            "range": "± 5351857",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 800480777,
            "range": "± 14302133",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2329913770,
            "range": "± 221262489",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5572347,
            "range": "± 71141",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 104444948,
            "range": "± 2155713",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1538107629,
            "range": "± 113665589",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 10840312,
            "range": "± 514471",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 12778443,
            "range": "± 941296",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 12928920,
            "range": "± 797065",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 14701795,
            "range": "± 1003173",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 422179740,
            "range": "± 20093369",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 454590516,
            "range": "± 20690405",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 452008596,
            "range": "± 32815405",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 502340188,
            "range": "± 14513543",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 4240783839,
            "range": "± 164734689",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 4208590623,
            "range": "± 51035787",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 4213326466,
            "range": "± 24223513",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 4361001962,
            "range": "± 27920802",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "NikolaiKryshnev",
            "username": "NikolaiKryshnev",
            "email": "63440682+NikolaiKryshnev@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bd2a4ece9eb96d793d2ac456aab75c79cb4a4899",
          "message": "[examples] Fix Spacing (#365)",
          "timestamp": "2025-01-20T04:49:38Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/bd2a4ece9eb96d793d2ac456aab75c79cb4a4899"
        },
        "date": 1737372831360,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 4711815,
            "range": "± 787489",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 5949526,
            "range": "± 1110404",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7300085,
            "range": "± 1318126",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7663518,
            "range": "± 1520018",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 63001258,
            "range": "± 1596280",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 67618371,
            "range": "± 762133",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 73778868,
            "range": "± 746522",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 161067359,
            "range": "± 2887897",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 714690138,
            "range": "± 16138594",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 762875571,
            "range": "± 13635149",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 806360696,
            "range": "± 10194944",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2155595002,
            "range": "± 30658911",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5616493,
            "range": "± 21520",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 110749476,
            "range": "± 3229636",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1331283933,
            "range": "± 10312210",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 10906646,
            "range": "± 172530",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 11166254,
            "range": "± 84426",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 11377587,
            "range": "± 99863",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 12173585,
            "range": "± 74610",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 309987521,
            "range": "± 8422793",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 332419041,
            "range": "± 3025493",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 339548258,
            "range": "± 4811244",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 416328714,
            "range": "± 3914380",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3649029464,
            "range": "± 35115216",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 4057470353,
            "range": "± 45599493",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 4182448039,
            "range": "± 23922633",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 4262201694,
            "range": "± 16112491",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Patrick O'Grady",
            "username": "patrick-ogrady",
            "email": "me@patrickogrady.xyz"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9a152bf0d9942d41b6d9443b574faf4fd15b35e3",
          "message": "[release] 1-20-25 (#376)",
          "timestamp": "2025-01-20T19:41:30Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/9a152bf0d9942d41b6d9443b574faf4fd15b35e3"
        },
        "date": 1737458959015,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 5032243,
            "range": "± 667210",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 6177178,
            "range": "± 1181997",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7557639,
            "range": "± 1089067",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7972847,
            "range": "± 1525030",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 66963075,
            "range": "± 1289721",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 66643320,
            "range": "± 1333841",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 72685437,
            "range": "± 1134913",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 158660156,
            "range": "± 2302647",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 731406995,
            "range": "± 9755675",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 748210379,
            "range": "± 101256115",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 805348385,
            "range": "± 57970335",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2201390710,
            "range": "± 29036346",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5573960,
            "range": "± 9919",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 108270361,
            "range": "± 1785419",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1351439784,
            "range": "± 17172199",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 10816040,
            "range": "± 83348",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 11047174,
            "range": "± 116363",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 11368802,
            "range": "± 89516",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 12208172,
            "range": "± 272000",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 341637752,
            "range": "± 10447942",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 349245080,
            "range": "± 24729878",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 359827024,
            "range": "± 22747908",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 429422556,
            "range": "± 11333761",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3603123589,
            "range": "± 32375372",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 3884521554,
            "range": "± 18410094",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 3821020039,
            "range": "± 59190107",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 4073562298,
            "range": "± 20296959",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "planetBoy",
            "username": "Guayaba221",
            "email": "140164174+Guayaba221@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "168c6256bd973f051c4abee3b73bd9eb2b5df3cc",
          "message": "Remove `Parent.digest` Lines (#378)",
          "timestamp": "2025-01-21T18:32:05Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/168c6256bd973f051c4abee3b73bd9eb2b5df3cc"
        },
        "date": 1737545284791,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 5262987,
            "range": "± 636869",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 6292766,
            "range": "± 1030333",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7579439,
            "range": "± 1192739",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7923405,
            "range": "± 1532624",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 67744406,
            "range": "± 668375",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 69591542,
            "range": "± 1054228",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 72885865,
            "range": "± 3643549",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 164485101,
            "range": "± 2353152",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 737705285,
            "range": "± 7612840",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 781251239,
            "range": "± 39810093",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 818001989,
            "range": "± 34929167",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2163639052,
            "range": "± 30941001",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5617902,
            "range": "± 54896",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 111105888,
            "range": "± 712193",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1376792037,
            "range": "± 73667973",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 10759383,
            "range": "± 135914",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 11607007,
            "range": "± 497537",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 11263850,
            "range": "± 125435",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 12529922,
            "range": "± 330978",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 378506996,
            "range": "± 12832973",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 383658714,
            "range": "± 24107601",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 397901427,
            "range": "± 20477386",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 484439993,
            "range": "± 15172392",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3759051527,
            "range": "± 55432096",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 3963775438,
            "range": "± 42291340",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 4097557457,
            "range": "± 61114336",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 4061146980,
            "range": "± 25618583",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Roberto Bayardo",
            "username": "roberto-bayardo",
            "email": "roberto@commonware.xyz"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1e98bc0670930eb44e847ac5094c08e15d279b69",
          "message": "Implement In-mem MMR (#335)",
          "timestamp": "2025-01-23T01:13:19Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/1e98bc0670930eb44e847ac5094c08e15d279b69"
        },
        "date": 1737635459320,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 5613215,
            "range": "± 446336",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 7032780,
            "range": "± 645268",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7610332,
            "range": "± 675463",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 8184415,
            "range": "± 275771",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 64844527,
            "range": "± 293201",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 67432129,
            "range": "± 1073850",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 75298019,
            "range": "± 1314958",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 173627445,
            "range": "± 2870463",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 758116129,
            "range": "± 16553690",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 756508055,
            "range": "± 7560178",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 815336860,
            "range": "± 14704063",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2163507815,
            "range": "± 25039860",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5648397,
            "range": "± 119750",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 110281137,
            "range": "± 1547084",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1438650762,
            "range": "± 13114601",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 11005880,
            "range": "± 198993",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 11418494,
            "range": "± 200532",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 11568471,
            "range": "± 398346",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 12922503,
            "range": "± 279725",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 362141412,
            "range": "± 4422386",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 378935010,
            "range": "± 4131389",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 372883069,
            "range": "± 6675864",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 431276436,
            "range": "± 4025382",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3873129235,
            "range": "± 28402740",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 4053292105,
            "range": "± 52219042",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 3922939543,
            "range": "± 48766499",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 4160152109,
            "range": "± 35257422",
            "unit": "ns/iter"
          },
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
        "date": 1736940829069,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2685,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 4953,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14342,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 201647,
            "range": "± 26422",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 1289069,
            "range": "± 177052",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 8964079,
            "range": "± 50860",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 30307109,
            "range": "± 126668",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 90327996,
            "range": "± 275056",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4497,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11798,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 40895,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 630652,
            "range": "± 1973",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2897554,
            "range": "± 4920",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 11689304,
            "range": "± 74341",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 50030872,
            "range": "± 152042",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 183460458,
            "range": "± 347134",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Patrick O'Grady",
            "username": "patrick-ogrady",
            "email": "me@patrickogrady.xyz"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fbc82e24a8baef1f47e0d69d1c2ac583ff974951",
          "message": "[examples/bridge] Fix Usage Commands (#349)",
          "timestamp": "2025-01-15T23:52:59Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/fbc82e24a8baef1f47e0d69d1c2ac583ff974951"
        },
        "date": 1737027162438,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2692,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 4959,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14086,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 213489,
            "range": "± 37643",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 1247940,
            "range": "± 165755",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 8978064,
            "range": "± 20915",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 30530843,
            "range": "± 35411",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 91241375,
            "range": "± 180856",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4513,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11784,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41009,
            "range": "± 3696",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 631045,
            "range": "± 3244",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2831316,
            "range": "± 6668",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 11571019,
            "range": "± 114716",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 48744767,
            "range": "± 129218",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 193338628,
            "range": "± 346250",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DevEloperate",
            "username": "dramarereg",
            "email": "dmitriy.i3.jp@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fd9a935cc3f8abf934f1e4d6671e35fd024f07d0",
          "message": "docs: Cleaned up typos in comments (#351)",
          "timestamp": "2025-01-16T23:07:43Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/fd9a935cc3f8abf934f1e4d6671e35fd024f07d0"
        },
        "date": 1737113628254,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2739,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 5025,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14201,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 200935,
            "range": "± 15151",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 803099,
            "range": "± 110289",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 4398523,
            "range": "± 33569",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 16994355,
            "range": "± 92758",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 88867510,
            "range": "± 406186",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4527,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11882,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41704,
            "range": "± 2674",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 637908,
            "range": "± 6065",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2547247,
            "range": "± 8299",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10294818,
            "range": "± 45041",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 44533463,
            "range": "± 720243",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 178432136,
            "range": "± 647826",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Patrick O'Grady",
            "username": "patrick-ogrady",
            "email": "me@patrickogrady.xyz"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f10d933f106b290c765d1a44559c1ee8e2ddf414",
          "message": "[utils] Add utils to WASM check (#363)",
          "timestamp": "2025-01-17T20:34:23Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/f10d933f106b290c765d1a44559c1ee8e2ddf414"
        },
        "date": 1737200099103,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2729,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 5010,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14134,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 202202,
            "range": "± 15696",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 800535,
            "range": "± 115781",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 4370394,
            "range": "± 56256",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 16860057,
            "range": "± 109079",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 88166537,
            "range": "± 213833",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4551,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11916,
            "range": "± 2181",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41255,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 633588,
            "range": "± 7351",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2542011,
            "range": "± 6487",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10306707,
            "range": "± 420594",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 44393025,
            "range": "± 220921",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 180043217,
            "range": "± 387407",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Dmitry",
            "username": "mdqst",
            "email": "98899785+mdqst@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "da8d347aadb66aeadfa00ae3a4cae721c0c3085e",
          "message": "fix: Fix for File Writing Issue to Prevent Formatting Errors (#364)",
          "timestamp": "2025-01-19T00:36:27Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/da8d347aadb66aeadfa00ae3a4cae721c0c3085e"
        },
        "date": 1737286352264,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2730,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 4995,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14332,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 201198,
            "range": "± 30486",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 802213,
            "range": "± 104237",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 4327245,
            "range": "± 10363",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 17125930,
            "range": "± 61626",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 91878313,
            "range": "± 277380",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4555,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 12020,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41864,
            "range": "± 4318",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 642435,
            "range": "± 5494",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2577477,
            "range": "± 3663",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10109883,
            "range": "± 42527",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 43766082,
            "range": "± 160100",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 178600935,
            "range": "± 428621",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "NikolaiKryshnev",
            "username": "NikolaiKryshnev",
            "email": "63440682+NikolaiKryshnev@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bd2a4ece9eb96d793d2ac456aab75c79cb4a4899",
          "message": "[examples] Fix Spacing (#365)",
          "timestamp": "2025-01-20T04:49:38Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/bd2a4ece9eb96d793d2ac456aab75c79cb4a4899"
        },
        "date": 1737373148312,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2838,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 5206,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14709,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 228144,
            "range": "± 17972",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 850448,
            "range": "± 131394",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 5504106,
            "range": "± 175817",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 20646506,
            "range": "± 565531",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 111772237,
            "range": "± 3751730",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4783,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 12472,
            "range": "± 5102",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 43394,
            "range": "± 10204",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 670006,
            "range": "± 18421",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2677453,
            "range": "± 36380",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10578345,
            "range": "± 215970",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 51142113,
            "range": "± 1312718",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 210423683,
            "range": "± 3669245",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Patrick O'Grady",
            "username": "patrick-ogrady",
            "email": "me@patrickogrady.xyz"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9a152bf0d9942d41b6d9443b574faf4fd15b35e3",
          "message": "[release] 1-20-25 (#376)",
          "timestamp": "2025-01-20T19:41:30Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/9a152bf0d9942d41b6d9443b574faf4fd15b35e3"
        },
        "date": 1737459207616,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2729,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 5009,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14077,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 198566,
            "range": "± 15455",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 800350,
            "range": "± 104709",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 4300471,
            "range": "± 19589",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 16916080,
            "range": "± 644378",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 88851267,
            "range": "± 228606",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4511,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11871,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41082,
            "range": "± 3401",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 632882,
            "range": "± 3532",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2541032,
            "range": "± 19564",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10272515,
            "range": "± 32035",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 44274491,
            "range": "± 98511",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 179576124,
            "range": "± 328538",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "planetBoy",
            "username": "Guayaba221",
            "email": "140164174+Guayaba221@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "168c6256bd973f051c4abee3b73bd9eb2b5df3cc",
          "message": "Remove `Parent.digest` Lines (#378)",
          "timestamp": "2025-01-21T18:32:05Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/168c6256bd973f051c4abee3b73bd9eb2b5df3cc"
        },
        "date": 1737545511711,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2720,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 4986,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14050,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 201133,
            "range": "± 15942",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 814461,
            "range": "± 115508",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 4329492,
            "range": "± 37073",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 16913647,
            "range": "± 427454",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 90775776,
            "range": "± 328607",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4517,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11872,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41133,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 633402,
            "range": "± 9662",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2540209,
            "range": "± 11871",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10100042,
            "range": "± 38662",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 43962654,
            "range": "± 160992",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 177784395,
            "range": "± 569362",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Roberto Bayardo",
            "username": "roberto-bayardo",
            "email": "roberto@commonware.xyz"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1e98bc0670930eb44e847ac5094c08e15d279b69",
          "message": "Implement In-mem MMR (#335)",
          "timestamp": "2025-01-23T01:13:19Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/1e98bc0670930eb44e847ac5094c08e15d279b69"
        },
        "date": 1737635716101,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2722,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 5024,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14064,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 199705,
            "range": "± 8195",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 803120,
            "range": "± 108655",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 3474082,
            "range": "± 113083",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 16236014,
            "range": "± 38474",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 89017308,
            "range": "± 215380",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4523,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11872,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41185,
            "range": "± 4827",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 635534,
            "range": "± 5514",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2541756,
            "range": "± 19009",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10074645,
            "range": "± 419196",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 42696744,
            "range": "± 175174",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 176690159,
            "range": "± 469683",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}