window.BENCHMARK_DATA = {
  "lastUpdate": 1738840612949,
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
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 400794,
            "range": "± 5355",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
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
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 400388,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
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
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 400459,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
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
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 400598,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
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
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 400518,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
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
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 401528,
            "range": "± 1236",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
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
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 401211,
            "range": "± 738",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
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
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 401580,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
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
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 422685,
            "range": "± 5167",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
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
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 401353,
            "range": "± 14395",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
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
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 401272,
            "range": "± 419",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
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
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 401332,
            "range": "± 550",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
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
          "id": "7889ca352c8fd5f4225e407ddf6b9929a602c406",
          "message": "[CI] Add WASM Support for `consensus` and `storage` (#391)",
          "timestamp": "2025-01-23T18:50:59Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/7889ca352c8fd5f4225e407ddf6b9929a602c406"
        },
        "date": 1737717343489,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 7977,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41406,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 140892,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 898664,
            "range": "± 4250",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3702633,
            "range": "± 7510",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23561620,
            "range": "± 177143",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93707894,
            "range": "± 86979",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 426328,
            "range": "± 5481",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 313550,
            "range": "± 4517",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 253715,
            "range": "± 5821",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 423440,
            "range": "± 5319",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2546993,
            "range": "± 22265",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1478088,
            "range": "± 8909",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 865186,
            "range": "± 24455",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 912729,
            "range": "± 12600",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9254650,
            "range": "± 16462",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5036355,
            "range": "± 45885",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2971268,
            "range": "± 17856",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2722734,
            "range": "± 33425",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65930380,
            "range": "± 153989",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34331091,
            "range": "± 44710",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18244991,
            "range": "± 86070",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16231139,
            "range": "± 202392",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311478207,
            "range": "± 136885",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158544924,
            "range": "± 41109",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79797271,
            "range": "± 250207",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72900234,
            "range": "± 423912",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2630206819,
            "range": "± 1313618",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1327386363,
            "range": "± 2197918",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 664050249,
            "range": "± 677018",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 574060400,
            "range": "± 2559494",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12518369549,
            "range": "± 3258563",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6282259538,
            "range": "± 1243134",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3164437880,
            "range": "± 3751489",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2749564672,
            "range": "± 1050950",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217604,
            "range": "± 1554",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 639999,
            "range": "± 621",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1300881,
            "range": "± 1116",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3764963,
            "range": "± 13479",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8850071,
            "range": "± 11997",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29974105,
            "range": "± 47152",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66829151,
            "range": "± 54119",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8194,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81602,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 815165,
            "range": "± 1313",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8152292,
            "range": "± 10804",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20373,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 203028,
            "range": "± 1024",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2025902,
            "range": "± 4133",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20269694,
            "range": "± 27629",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 401153,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
            "value": 1751265,
            "range": "± 3142",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3829171,
            "range": "± 74787",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2606432,
            "range": "± 26336",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2234906,
            "range": "± 19815",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2392476,
            "range": "± 17025",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22956189,
            "range": "± 49445",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12441083,
            "range": "± 28085",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7403992,
            "range": "± 272193",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6837032,
            "range": "± 54576",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 213326890,
            "range": "± 102231",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107572269,
            "range": "± 358333",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54812506,
            "range": "± 330225",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 50299500,
            "range": "± 191215",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2114471381,
            "range": "± 634361",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1061158500,
            "range": "± 4650613",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 531656593,
            "range": "± 1048035",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 483336553,
            "range": "± 261945",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10568017087,
            "range": "± 3266035",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5299399067,
            "range": "± 3405754",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2649027593,
            "range": "± 11139019",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2406595370,
            "range": "± 6825556",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1597417,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1670987,
            "range": "± 1586",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2408965,
            "range": "± 6790",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9750816,
            "range": "± 17038",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62623,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75802,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 318692,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2822427,
            "range": "± 2868",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21269213,
            "range": "± 26500",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 200811194,
            "range": "± 936791",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 76484,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 183258,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1247795,
            "range": "± 1140",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10380659,
            "range": "± 14028",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 87845340,
            "range": "± 116695",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 346507,
            "range": "± 327",
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
          "id": "d2991cbdd8c86bafdac2f10f8bcd7ae2557169ef",
          "message": "[storage/mmr] add serialization/deserialization for Proof structure (#403)",
          "timestamp": "2025-01-25T00:26:31Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/d2991cbdd8c86bafdac2f10f8bcd7ae2557169ef"
        },
        "date": 1737803723117,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8044,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41386,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 140855,
            "range": "± 866",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 895071,
            "range": "± 2244",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3688867,
            "range": "± 9245",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23403850,
            "range": "± 44966",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93340166,
            "range": "± 152494",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 440823,
            "range": "± 7912",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 319767,
            "range": "± 5180",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 252730,
            "range": "± 3225",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 433881,
            "range": "± 7737",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2620787,
            "range": "± 70212",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1508144,
            "range": "± 17253",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 864385,
            "range": "± 24292",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 950075,
            "range": "± 49881",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9365311,
            "range": "± 37436",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5106407,
            "range": "± 57755",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2972663,
            "range": "± 3283",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2845598,
            "range": "± 168187",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 66036313,
            "range": "± 82261",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34387555,
            "range": "± 101361",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18215905,
            "range": "± 18874",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16225801,
            "range": "± 43018",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311733789,
            "range": "± 288718",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158644149,
            "range": "± 115332",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79685250,
            "range": "± 102789",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72878524,
            "range": "± 725627",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2632272602,
            "range": "± 1263434",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1325862875,
            "range": "± 11640260",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 664896233,
            "range": "± 865775",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 574545868,
            "range": "± 1536378",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12527041466,
            "range": "± 4314486",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6290542786,
            "range": "± 10513529",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3167312941,
            "range": "± 2695063",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2752610235,
            "range": "± 1237875",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 218447,
            "range": "± 1462",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 641687,
            "range": "± 1249",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1305074,
            "range": "± 21051",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3775147,
            "range": "± 6209",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8869264,
            "range": "± 29614",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 30030939,
            "range": "± 133561",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 67040680,
            "range": "± 198836",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8193,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81476,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 814665,
            "range": "± 997",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8149195,
            "range": "± 9561",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20424,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 203603,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2034789,
            "range": "± 2446",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20352780,
            "range": "± 15702",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 402014,
            "range": "± 599",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
            "value": 1758942,
            "range": "± 1040",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3899192,
            "range": "± 33763",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2645413,
            "range": "± 55062",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2255707,
            "range": "± 24680",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2392846,
            "range": "± 35233",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 23001663,
            "range": "± 68805",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12498140,
            "range": "± 64458",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7319799,
            "range": "± 430350",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6956614,
            "range": "± 79489",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 213555891,
            "range": "± 383319",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 108005978,
            "range": "± 285805",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54963433,
            "range": "± 127481",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 50338143,
            "range": "± 318726",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2118338566,
            "range": "± 1301348",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1059591981,
            "range": "± 473552",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 531877411,
            "range": "± 576919",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 483267175,
            "range": "± 1357804",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10581152714,
            "range": "± 3296614",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5307798426,
            "range": "± 7897330",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2652142155,
            "range": "± 1832213",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2406011820,
            "range": "± 9813176",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1605334,
            "range": "± 494",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1679778,
            "range": "± 8720",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2414841,
            "range": "± 4543",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9740673,
            "range": "± 10303",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62990,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75804,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 319163,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2837292,
            "range": "± 1831",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21297071,
            "range": "± 32953",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 201222112,
            "range": "± 436520",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75752,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 182258,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1242070,
            "range": "± 1705",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10465485,
            "range": "± 10927",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 88220692,
            "range": "± 39021",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 343168,
            "range": "± 251",
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
          "id": "5924bebc95371c8cf9fb46aa384f61e6c0413d66",
          "message": "[storage/mmr] Simplify Proof Serialization (#405)",
          "timestamp": "2025-01-26T00:55:28Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/5924bebc95371c8cf9fb46aa384f61e6c0413d66"
        },
        "date": 1737890141094,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8029,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41505,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 140498,
            "range": "± 754",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 894855,
            "range": "± 1152",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3678213,
            "range": "± 17255",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23397011,
            "range": "± 58095",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93579262,
            "range": "± 609159",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 424186,
            "range": "± 4438",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 311155,
            "range": "± 2639",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 265993,
            "range": "± 6194",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 423231,
            "range": "± 5724",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2548588,
            "range": "± 22373",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1482752,
            "range": "± 9811",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 880343,
            "range": "± 24002",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 921146,
            "range": "± 19570",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9266009,
            "range": "± 27087",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5045670,
            "range": "± 42013",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2967521,
            "range": "± 4636",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2741641,
            "range": "± 25175",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65943048,
            "range": "± 50298",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34192060,
            "range": "± 35659",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18205580,
            "range": "± 38879",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16172222,
            "range": "± 45088",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311340641,
            "range": "± 134124",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158536035,
            "range": "± 188893",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79668001,
            "range": "± 82962",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72893479,
            "range": "± 1110157",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2630287438,
            "range": "± 1205175",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1326063727,
            "range": "± 1261311",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 664162255,
            "range": "± 518410",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 574343627,
            "range": "± 2149279",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12522589131,
            "range": "± 8426843",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6289589025,
            "range": "± 9792505",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3168956616,
            "range": "± 6479409",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2751579922,
            "range": "± 576448",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217100,
            "range": "± 1681",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 639594,
            "range": "± 1532",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1299467,
            "range": "± 1290",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3760309,
            "range": "± 4483",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8838536,
            "range": "± 4760",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29922334,
            "range": "± 47221",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66770603,
            "range": "± 20691",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8203,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81462,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 814453,
            "range": "± 2367",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8142649,
            "range": "± 9713",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20351,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 202763,
            "range": "± 1048",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2024912,
            "range": "± 3372",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20262908,
            "range": "± 35776",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 401304,
            "range": "± 1046",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
            "value": 1754000,
            "range": "± 1174",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3797501,
            "range": "± 40079",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2589693,
            "range": "± 20616",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2262995,
            "range": "± 32362",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2383903,
            "range": "± 11794",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22988643,
            "range": "± 56221",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12441697,
            "range": "± 30290",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7223549,
            "range": "± 432371",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6851380,
            "range": "± 65190",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 213151737,
            "range": "± 104804",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107658964,
            "range": "± 132360",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54738859,
            "range": "± 1281176",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 50256558,
            "range": "± 729407",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2115070324,
            "range": "± 299107",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1059004777,
            "range": "± 888585",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 530853435,
            "range": "± 538451",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 483201125,
            "range": "± 1679809",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10570355373,
            "range": "± 5626212",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5294993593,
            "range": "± 5278684",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2646792218,
            "range": "± 1596109",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2406363644,
            "range": "± 2880420",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1599592,
            "range": "± 575",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1672116,
            "range": "± 827",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2403511,
            "range": "± 3790",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9736758,
            "range": "± 13970",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62834,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75853,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 319516,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2819304,
            "range": "± 2495",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21290085,
            "range": "± 29661",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 201205863,
            "range": "± 302351",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75711,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 182351,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1245403,
            "range": "± 3549",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10423828,
            "range": "± 12155",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 88549638,
            "range": "± 55541",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 343241,
            "range": "± 279",
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
          "id": "b65c588c9ebecf5602ff3b3f8c4c69dd2002fdc7",
          "message": "[docs] Use dates instead of commits (#417)",
          "timestamp": "2025-01-29T06:00:20Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/b65c588c9ebecf5602ff3b3f8c4c69dd2002fdc7"
        },
        "date": 1738149453940,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8013,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41229,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 140304,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 891797,
            "range": "± 1798",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3664513,
            "range": "± 4512",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23446126,
            "range": "± 65710",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93185791,
            "range": "± 836375",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 426925,
            "range": "± 2319",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 311986,
            "range": "± 2875",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 265593,
            "range": "± 3213",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 424741,
            "range": "± 5146",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2564961,
            "range": "± 52905",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1480310,
            "range": "± 10406",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 881361,
            "range": "± 17611",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 922451,
            "range": "± 12351",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9264196,
            "range": "± 18051",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5049739,
            "range": "± 46316",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2967554,
            "range": "± 7540",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2764812,
            "range": "± 30703",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65855256,
            "range": "± 65792",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34185232,
            "range": "± 51024",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18199161,
            "range": "± 15307",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16191808,
            "range": "± 16029",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311289865,
            "range": "± 117691",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158393298,
            "range": "± 169529",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79622102,
            "range": "± 88636",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72868122,
            "range": "± 60665",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2627721249,
            "range": "± 778460",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1323156172,
            "range": "± 1403324",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 663339202,
            "range": "± 226940",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 574309088,
            "range": "± 1810286",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12502942240,
            "range": "± 4513526",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6269896990,
            "range": "± 19062303",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3164068306,
            "range": "± 15354163",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2750725036,
            "range": "± 843982",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217679,
            "range": "± 1680",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 639902,
            "range": "± 1734",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1301642,
            "range": "± 5067",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3762380,
            "range": "± 24533",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8839045,
            "range": "± 23364",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29932078,
            "range": "± 188812",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66736331,
            "range": "± 140899",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8188,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81340,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 812488,
            "range": "± 1579",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8121724,
            "range": "± 12183",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20347,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 202725,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2024626,
            "range": "± 4111",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20246958,
            "range": "± 24219",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 401263,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
            "value": 1756891,
            "range": "± 857",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3792949,
            "range": "± 32151",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2617896,
            "range": "± 30121",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 2292247,
            "range": "± 19092",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2397583,
            "range": "± 9674",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 23157086,
            "range": "± 103112",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12452780,
            "range": "± 33549",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7170894,
            "range": "± 202148",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6871255,
            "range": "± 31570",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 213327690,
            "range": "± 839025",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107481852,
            "range": "± 184993",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54749400,
            "range": "± 84041",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 50332451,
            "range": "± 176029",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2116498149,
            "range": "± 725657",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1058307427,
            "range": "± 1487048",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 530559296,
            "range": "± 439687",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 483302992,
            "range": "± 853849",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10572278102,
            "range": "± 15902709",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5296700701,
            "range": "± 7996507",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2649527186,
            "range": "± 17718105",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2408408325,
            "range": "± 3376492",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1602741,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1676621,
            "range": "± 2560",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 2410849,
            "range": "± 5591",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9717495,
            "range": "± 4537",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62764,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75748,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 319985,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2830093,
            "range": "± 3155",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21287996,
            "range": "± 22618",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 201773473,
            "range": "± 498261",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 76006,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 182894,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1248668,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10436851,
            "range": "± 12074",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 88082025,
            "range": "± 103923",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 345447,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=100",
            "value": 81,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=1000",
            "value": 643,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=10000",
            "value": 6298,
            "range": "± 4",
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
          "id": "4d9dd03826a4e1962db6bd7d9719289903ed158d",
          "message": "[cryptography/{ed25519,secp256r1] Add signature generation benchmarks (#420)",
          "timestamp": "2025-01-29T18:31:04Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/4d9dd03826a4e1962db6bd7d9719289903ed158d"
        },
        "date": 1738179454603,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8387,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 42222,
            "range": "± 598",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 143048,
            "range": "± 2706",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 914103,
            "range": "± 27416",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3706707,
            "range": "± 10401",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23554839,
            "range": "± 55753",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93487377,
            "range": "± 137563",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 429974,
            "range": "± 4621",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 318052,
            "range": "± 6644",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 273598,
            "range": "± 3924",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 434511,
            "range": "± 4751",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2560988,
            "range": "± 33568",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1485433,
            "range": "± 15339",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 885334,
            "range": "± 25840",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 965295,
            "range": "± 20135",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9323167,
            "range": "± 21907",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5067371,
            "range": "± 38706",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2977812,
            "range": "± 3649",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2804121,
            "range": "± 75864",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 66038589,
            "range": "± 136735",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34310966,
            "range": "± 127331",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18209124,
            "range": "± 10221",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16200632,
            "range": "± 39522",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311776013,
            "range": "± 153382",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158643471,
            "range": "± 632803",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79852275,
            "range": "± 66331",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72967714,
            "range": "± 590658",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2632664691,
            "range": "± 9530348",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1327868752,
            "range": "± 5049933",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 664831125,
            "range": "± 16457853",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 574003757,
            "range": "± 229935",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12561215342,
            "range": "± 22424136",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6286861085,
            "range": "± 31381939",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3166788564,
            "range": "± 3326696",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2749627253,
            "range": "± 1187594",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 216940,
            "range": "± 11460",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 638656,
            "range": "± 1436",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1298335,
            "range": "± 1362",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3757744,
            "range": "± 7467",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8828660,
            "range": "± 6285",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29864613,
            "range": "± 310731",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66578019,
            "range": "± 857978",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8203,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81470,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 815940,
            "range": "± 42483",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8155570,
            "range": "± 9691",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20400,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 203020,
            "range": "± 2554",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2027102,
            "range": "± 13638",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20270822,
            "range": "± 34987",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 400849,
            "range": "± 780",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
            "value": 1103785,
            "range": "± 4019",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3206101,
            "range": "± 33667",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2093795,
            "range": "± 31253",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 1773253,
            "range": "± 22025",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 1900242,
            "range": "± 29139",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22509354,
            "range": "± 88833",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12007418,
            "range": "± 891616",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 6892442,
            "range": "± 395334",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6447896,
            "range": "± 56845",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 212438934,
            "range": "± 86631",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107299172,
            "range": "± 133830",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54358110,
            "range": "± 223784",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 49968566,
            "range": "± 69499",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2112096513,
            "range": "± 347612",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1058152807,
            "range": "± 1485693",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 530640909,
            "range": "± 282174",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 483712297,
            "range": "± 1784792",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10574673086,
            "range": "± 36757270",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5284572357,
            "range": "± 22761918",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2648109726,
            "range": "± 4272177",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2406974232,
            "range": "± 2422360",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1109853,
            "range": "± 450",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1182791,
            "range": "± 991",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 1920789,
            "range": "± 3490",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9260641,
            "range": "± 5810",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62729,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75744,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 319337,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2817296,
            "range": "± 145025",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21176318,
            "range": "± 12314",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 200456919,
            "range": "± 445663",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 77174,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 185339,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1261939,
            "range": "± 1760",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10363444,
            "range": "± 7494",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 87994618,
            "range": "± 35571",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 344730,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=100",
            "value": 81,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=1000",
            "value": 643,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=10000",
            "value": 6298,
            "range": "± 3",
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
          "id": "c7faa8e0dcbb520ff0aa709e9e060dffe2359a5d",
          "message": "[cryptography/hasher] Remove `DIGEST_LENGTH` const (#422)",
          "timestamp": "2025-01-30T00:30:25Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/c7faa8e0dcbb520ff0aa709e9e060dffe2359a5d"
        },
        "date": 1738235818992,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8017,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41376,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 141284,
            "range": "± 859",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 896564,
            "range": "± 986",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3704021,
            "range": "± 10635",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23573501,
            "range": "± 32134",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93682316,
            "range": "± 6028711",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 424009,
            "range": "± 17879",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 312559,
            "range": "± 2401",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 250635,
            "range": "± 1733",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 424902,
            "range": "± 2680",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2549677,
            "range": "± 33796",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1488234,
            "range": "± 21845",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 864454,
            "range": "± 15309",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 922971,
            "range": "± 6810",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9285511,
            "range": "± 22528",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5042017,
            "range": "± 48386",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2972985,
            "range": "± 11294",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2733907,
            "range": "± 33884",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 66252049,
            "range": "± 36401",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34254961,
            "range": "± 60392",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18229116,
            "range": "± 18938",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16199745,
            "range": "± 33558",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311704275,
            "range": "± 10186608",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158604886,
            "range": "± 194517",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79772023,
            "range": "± 101774",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72945763,
            "range": "± 49121",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2633545803,
            "range": "± 11662337",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1325355132,
            "range": "± 1715324",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 664398966,
            "range": "± 610985",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 573899793,
            "range": "± 5698310",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12532088513,
            "range": "± 21129432",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6286954599,
            "range": "± 18491868",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3164550750,
            "range": "± 6636359",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2750059799,
            "range": "± 732756",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217900,
            "range": "± 10424",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 639578,
            "range": "± 1323",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1299818,
            "range": "± 2457",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3759828,
            "range": "± 3245",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8836751,
            "range": "± 10734",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29906693,
            "range": "± 888022",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66653531,
            "range": "± 292878",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8214,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81597,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 816237,
            "range": "± 2102",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8155772,
            "range": "± 8013",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20384,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 203295,
            "range": "± 805",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2032656,
            "range": "± 1400",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20280502,
            "range": "± 54537",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 401431,
            "range": "± 3030",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
            "value": 1097416,
            "range": "± 23146",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3290804,
            "range": "± 15770",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2105909,
            "range": "± 19600",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 1748496,
            "range": "± 19139",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 1897237,
            "range": "± 12466",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22522247,
            "range": "± 503287",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 11963638,
            "range": "± 282928",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 6812857,
            "range": "± 362873",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6357568,
            "range": "± 39373",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 212688465,
            "range": "± 122087",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107276955,
            "range": "± 3308871",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54543372,
            "range": "± 711555",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 49844869,
            "range": "± 164197",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2114600379,
            "range": "± 656908",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1059614794,
            "range": "± 1486430",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 532330573,
            "range": "± 1843090",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 482610704,
            "range": "± 1102848",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10571615375,
            "range": "± 12257284",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5297749469,
            "range": "± 11354465",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2648324846,
            "range": "± 7409576",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2407553372,
            "range": "± 6335388",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1111446,
            "range": "± 1231",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1184896,
            "range": "± 1256",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 1924655,
            "range": "± 2932",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9253898,
            "range": "± 10830",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_generation/ns_len=9 msg_len=32",
            "value": 20775,
            "range": "± 811",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62937,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75772,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 319735,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2838991,
            "range": "± 1734",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21298283,
            "range": "± 177881",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 201288911,
            "range": "± 382223",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75709,
            "range": "± 1536",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 182031,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1248487,
            "range": "± 997",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10383348,
            "range": "± 5088",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 88112871,
            "range": "± 83851",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_generation/ns_len=9 msg_len=32",
            "value": 193233,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 344297,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=100",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=1000",
            "value": 650,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=10000",
            "value": 6311,
            "range": "± 3",
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
          "id": "410e7bd803201fbb8b3ab2f647a14741df0f8cf3",
          "message": "[consensus] Use `cryptography::Digest` (#426)",
          "timestamp": "2025-01-30T23:27:41Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/410e7bd803201fbb8b3ab2f647a14741df0f8cf3"
        },
        "date": 1738322231282,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 7979,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41310,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 140331,
            "range": "± 715",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 894753,
            "range": "± 8932",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3678007,
            "range": "± 27448",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23291369,
            "range": "± 243310",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93194116,
            "range": "± 924314",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 423732,
            "range": "± 1983",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 313580,
            "range": "± 4154",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 245039,
            "range": "± 2498",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 418848,
            "range": "± 2505",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2558922,
            "range": "± 29736",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1481756,
            "range": "± 9617",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 853614,
            "range": "± 15267",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 912542,
            "range": "± 16543",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9271182,
            "range": "± 17647",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5038490,
            "range": "± 51156",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2974674,
            "range": "± 15090",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2720510,
            "range": "± 35075",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65926569,
            "range": "± 400498",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34171315,
            "range": "± 48317",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18205649,
            "range": "± 10506",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16193896,
            "range": "± 39196",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311707079,
            "range": "± 424348",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158432194,
            "range": "± 136216",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79607050,
            "range": "± 129218",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72800238,
            "range": "± 1011016",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2629804757,
            "range": "± 3137384",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1324200187,
            "range": "± 1252529",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 663886604,
            "range": "± 421745",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 573567075,
            "range": "± 251373",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12456319897,
            "range": "± 41405216",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6284649377,
            "range": "± 7884813",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3163967221,
            "range": "± 5149361",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2747279324,
            "range": "± 3365260",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217155,
            "range": "± 3333",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 637990,
            "range": "± 11912",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1294420,
            "range": "± 22906",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3756404,
            "range": "± 73337",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8810283,
            "range": "± 190991",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29777964,
            "range": "± 559251",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66476421,
            "range": "± 1085392",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8152,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81276,
            "range": "± 1442",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 804667,
            "range": "± 14330",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8128519,
            "range": "± 135431",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20138,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 197982,
            "range": "± 3119",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2021542,
            "range": "± 28288",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20201709,
            "range": "± 260142",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 410146,
            "range": "± 7025",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
            "value": 1087029,
            "range": "± 19854",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3192034,
            "range": "± 38229",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2087955,
            "range": "± 20981",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 1724372,
            "range": "± 10991",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 1877731,
            "range": "± 9063",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22383398,
            "range": "± 72271",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 11968640,
            "range": "± 40653",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 6845367,
            "range": "± 428948",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6334068,
            "range": "± 60683",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 211974861,
            "range": "± 1164297",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107064244,
            "range": "± 483530",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54265891,
            "range": "± 75366",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 49756118,
            "range": "± 50407",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2112853418,
            "range": "± 10254112",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1057286460,
            "range": "± 5737916",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 530819111,
            "range": "± 3977563",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 482982998,
            "range": "± 998127",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10534259192,
            "range": "± 29879081",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5283933830,
            "range": "± 4942447",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2646554819,
            "range": "± 10561148",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2406786211,
            "range": "± 3117760",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1114137,
            "range": "± 2644",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1186889,
            "range": "± 6270",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 1920612,
            "range": "± 7321",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9261417,
            "range": "± 142397",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_generation/ns_len=9 msg_len=32",
            "value": 20756,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62752,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75621,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 317394,
            "range": "± 1666",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2812972,
            "range": "± 29400",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21219036,
            "range": "± 208122",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 200463195,
            "range": "± 1233808",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75873,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 182249,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1248703,
            "range": "± 5920",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10445717,
            "range": "± 6781",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 88700295,
            "range": "± 90933",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_generation/ns_len=9 msg_len=32",
            "value": 193493,
            "range": "± 1739",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 344015,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=100",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=1000",
            "value": 643,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=10000",
            "value": 6300,
            "range": "± 21",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Danil",
            "username": "Danyylka",
            "email": "37103154+Danyylka@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cee6569e91f25c8ff57604d30828b1a844682755",
          "message": "fix grammar error (#433)",
          "timestamp": "2025-02-01T21:35:03Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/cee6569e91f25c8ff57604d30828b1a844682755"
        },
        "date": 1738494979743,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8021,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41427,
            "range": "± 598",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 141896,
            "range": "± 1721",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 904875,
            "range": "± 2859",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3688668,
            "range": "± 7695",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23591729,
            "range": "± 78299",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93496736,
            "range": "± 342869",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 428937,
            "range": "± 5002",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 317693,
            "range": "± 6393",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 276833,
            "range": "± 4532",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 440327,
            "range": "± 8024",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2561425,
            "range": "± 30098",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1499096,
            "range": "± 14277",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 904088,
            "range": "± 35028",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 971833,
            "range": "± 19638",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9288631,
            "range": "± 26590",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5063123,
            "range": "± 45111",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 3002601,
            "range": "± 66538",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2842799,
            "range": "± 67249",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65971351,
            "range": "± 53563",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34298265,
            "range": "± 78607",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18330619,
            "range": "± 243064",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16267729,
            "range": "± 122790",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311532232,
            "range": "± 149567",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158531602,
            "range": "± 249876",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79734701,
            "range": "± 95456",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72942196,
            "range": "± 36252",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2637595857,
            "range": "± 642806",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1327477388,
            "range": "± 2089267",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 663934222,
            "range": "± 669838",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 574182650,
            "range": "± 1038876",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12512064349,
            "range": "± 4183494",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6275888258,
            "range": "± 10636914",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3160090744,
            "range": "± 3945163",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2750875065,
            "range": "± 784980",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217956,
            "range": "± 4705",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 638497,
            "range": "± 1090",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1298146,
            "range": "± 2382",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3749444,
            "range": "± 4291",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8826495,
            "range": "± 6028",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29872302,
            "range": "± 13399",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66581852,
            "range": "± 163764",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8214,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81530,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 813584,
            "range": "± 1875",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8123950,
            "range": "± 15678",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20378,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 203739,
            "range": "± 1718",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2028096,
            "range": "± 3934",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20242908,
            "range": "± 13999",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 400741,
            "range": "± 3092",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
            "value": 1095861,
            "range": "± 6033",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3304381,
            "range": "± 21764",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2125397,
            "range": "± 20627",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 1794098,
            "range": "± 21773",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 1946195,
            "range": "± 17353",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22545370,
            "range": "± 128621",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 11995952,
            "range": "± 48617",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 6714505,
            "range": "± 334765",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6499939,
            "range": "± 64627",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 212845942,
            "range": "± 107635",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107356619,
            "range": "± 160472",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54303587,
            "range": "± 77898",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 49909328,
            "range": "± 363852",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2115014499,
            "range": "± 613879",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1059978353,
            "range": "± 1574397",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 530580321,
            "range": "± 764529",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 482526837,
            "range": "± 287107",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10572167754,
            "range": "± 6221284",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5284995247,
            "range": "± 3063512",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2649430433,
            "range": "± 4673896",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2403832072,
            "range": "± 1078484",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1110526,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1185166,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 1921210,
            "range": "± 1996",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9238523,
            "range": "± 7222",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_generation/ns_len=9 msg_len=32",
            "value": 20678,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62617,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75487,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 318863,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2814014,
            "range": "± 3070",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21320365,
            "range": "± 28908",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 201969689,
            "range": "± 154681",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75643,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 182380,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1252879,
            "range": "± 1658",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10400276,
            "range": "± 36135",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 88355540,
            "range": "± 93344",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_generation/ns_len=9 msg_len=32",
            "value": 192441,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 345064,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=100",
            "value": 81,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=1000",
            "value": 643,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=10000",
            "value": 6298,
            "range": "± 3",
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
          "id": "7ebb4f88af332eda429c559e840d948a9d255565",
          "message": "[commonware-storage] Implement journal for fixed-length items (#430)",
          "timestamp": "2025-02-04T19:27:31Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/7ebb4f88af332eda429c559e840d948a9d255565"
        },
        "date": 1738754302282,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8007,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41456,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 140368,
            "range": "± 5166",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 893162,
            "range": "± 2318",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3683178,
            "range": "± 12432",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23530692,
            "range": "± 83377",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93388452,
            "range": "± 132741",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 425589,
            "range": "± 4381",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 312714,
            "range": "± 2440",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 249869,
            "range": "± 1943",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 430899,
            "range": "± 4200",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2561264,
            "range": "± 32089",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1479173,
            "range": "± 16123",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 855529,
            "range": "± 18375",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 913617,
            "range": "± 14723",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9266675,
            "range": "± 30090",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5054264,
            "range": "± 39555",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2971429,
            "range": "± 92735",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 2769773,
            "range": "± 40414",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 65977108,
            "range": "± 225539",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34191211,
            "range": "± 44984",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18227496,
            "range": "± 64886",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16277975,
            "range": "± 82343",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311495115,
            "range": "± 731432",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158461993,
            "range": "± 121004",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79714179,
            "range": "± 270787",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 72926140,
            "range": "± 1118146",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2630969031,
            "range": "± 11450072",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1323498239,
            "range": "± 12329622",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 663625460,
            "range": "± 616919",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 574465754,
            "range": "± 839259",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12516691579,
            "range": "± 14682603",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6278171093,
            "range": "± 14954375",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3166267507,
            "range": "± 14644389",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2754802063,
            "range": "± 2156649",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217945,
            "range": "± 1701",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 641165,
            "range": "± 923",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1303261,
            "range": "± 54440",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3768515,
            "range": "± 5984",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8849220,
            "range": "± 106214",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29957619,
            "range": "± 22081",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66825944,
            "range": "± 30126",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8182,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81390,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 813763,
            "range": "± 856",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8121297,
            "range": "± 15033",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20379,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 202410,
            "range": "± 1178",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2025327,
            "range": "± 3353",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20262346,
            "range": "± 15817",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 400752,
            "range": "± 9374",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
            "value": 1095524,
            "range": "± 12427",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3295482,
            "range": "± 36248",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2097305,
            "range": "± 56248",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 1741959,
            "range": "± 20655",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 1889591,
            "range": "± 15065",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 22600250,
            "range": "± 75888",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 11988575,
            "range": "± 249035",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 6733807,
            "range": "± 313500",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6380522,
            "range": "± 67659",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 212714139,
            "range": "± 669158",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107008968,
            "range": "± 42727",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54307701,
            "range": "± 57654",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 49810374,
            "range": "± 173033",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2114892987,
            "range": "± 602545",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1057476955,
            "range": "± 428584",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 530157926,
            "range": "± 221855",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 482544615,
            "range": "± 1299174",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10684324969,
            "range": "± 4156339",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5283898790,
            "range": "± 5720854",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2648093554,
            "range": "± 9537665",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2404067762,
            "range": "± 3020216",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1110014,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1184037,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 1920643,
            "range": "± 3248",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9232102,
            "range": "± 10283",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_generation/ns_len=9 msg_len=32",
            "value": 20851,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62611,
            "range": "± 1015",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75742,
            "range": "± 1291",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 318786,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2847113,
            "range": "± 3387",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21338277,
            "range": "± 36929",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 200794832,
            "range": "± 368509",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75780,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 182207,
            "range": "± 3032",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1245926,
            "range": "± 10956",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10428819,
            "range": "± 22825",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 88612585,
            "range": "± 94594",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_generation/ns_len=9 msg_len=32",
            "value": 192468,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 344744,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=100",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=1000",
            "value": 643,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=10000",
            "value": 6299,
            "range": "± 259",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Avory",
            "username": "avorylli",
            "email": "avorycorelli@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "eaedda6419daf13e682e81201cb90991b77578b5",
          "message": "fix: Rename test function to correct name (#448)",
          "timestamp": "2025-02-05T17:18:28Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/eaedda6419daf13e682e81201cb90991b77578b5"
        },
        "date": 1738840612701,
        "tool": "cargo",
        "benches": [
          {
            "name": "bls12381::dkg_recovery/n=5 t=3",
            "value": 8315,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=10 t=7",
            "value": 41481,
            "range": "± 951",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=20 t=13",
            "value": 140985,
            "range": "± 867",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=50 t=33",
            "value": 897736,
            "range": "± 3003",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=100 t=67",
            "value": 3716876,
            "range": "± 6865",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=250 t=167",
            "value": 23476712,
            "range": "± 49338",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_recovery/n=500 t=333",
            "value": 93439462,
            "range": "± 343802",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=5 t=3",
            "value": 455658,
            "range": "± 12943",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=5 t=3",
            "value": 325708,
            "range": "± 6084",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=5 t=3",
            "value": 256447,
            "range": "± 7189",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=5 t=3",
            "value": 439463,
            "range": "± 5826",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=10 t=7",
            "value": 2621257,
            "range": "± 36117",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=10 t=7",
            "value": 1517240,
            "range": "± 24470",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=10 t=7",
            "value": 913396,
            "range": "± 31850",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=10 t=7",
            "value": 1011468,
            "range": "± 52063",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=20 t=13",
            "value": 9570529,
            "range": "± 65990",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=20 t=13",
            "value": 5143790,
            "range": "± 111009",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=20 t=13",
            "value": 2980832,
            "range": "± 6730",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=20 t=13",
            "value": 3028701,
            "range": "± 137519",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=50 t=33",
            "value": 67245694,
            "range": "± 73009",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=50 t=33",
            "value": 34638614,
            "range": "± 105085",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=50 t=33",
            "value": 18289895,
            "range": "± 21480",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=50 t=33",
            "value": 16287102,
            "range": "± 42902",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=100 t=67",
            "value": 311757867,
            "range": "± 291974",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=100 t=67",
            "value": 158860451,
            "range": "± 206082",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=100 t=67",
            "value": 79995176,
            "range": "± 147524",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=100 t=67",
            "value": 73051312,
            "range": "± 63695",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=250 t=167",
            "value": 2630123037,
            "range": "± 1074480",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=250 t=167",
            "value": 1324647009,
            "range": "± 1582139",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=250 t=167",
            "value": 665254108,
            "range": "± 11216635",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=250 t=167",
            "value": 574697414,
            "range": "± 205387",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=1 n=500 t=333",
            "value": 12509327663,
            "range": "± 6073275",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=2 n=500 t=333",
            "value": 6287209938,
            "range": "± 8029042",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=4 n=500 t=333",
            "value": 3161208454,
            "range": "± 7445126",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::dkg_reshare_recovery/conc=8 n=500 t=333",
            "value": 2752911095,
            "range": "± 3221261",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=5 t=3",
            "value": 217909,
            "range": "± 1571",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=10 t=7",
            "value": 641080,
            "range": "± 1319",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=20 t=13",
            "value": 1303549,
            "range": "± 2416",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=50 t=33",
            "value": 3773342,
            "range": "± 7146",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=100 t=67",
            "value": 8861942,
            "range": "± 12241",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=250 t=167",
            "value": 29973340,
            "range": "± 40235",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::threshold_signature_recover/n=500 t=333",
            "value": 66832160,
            "range": "± 106044",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10",
            "value": 8210,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=100",
            "value": 81543,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=1000",
            "value": 812600,
            "range": "± 1558",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_public_keys/pks=10000",
            "value": 8131043,
            "range": "± 6796",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10",
            "value": 20377,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=100",
            "value": 203147,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=1000",
            "value": 2026166,
            "range": "± 3956",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_signatures/sigs=10000",
            "value": 20259873,
            "range": "± 12281",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_generation/ns_len=9 msg_len=32",
            "value": 401084,
            "range": "± 6504",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::signature_verification/ns_len=9 msg_len=32",
            "value": 1098271,
            "range": "± 934",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10",
            "value": 3412694,
            "range": "± 33213",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10",
            "value": 2207278,
            "range": "± 45635",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10",
            "value": 1863346,
            "range": "± 33111",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10",
            "value": 2000957,
            "range": "± 36466",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=100",
            "value": 23033428,
            "range": "± 111584",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=100",
            "value": 12450071,
            "range": "± 64765",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=100",
            "value": 7010998,
            "range": "± 236001",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=100",
            "value": 6702009,
            "range": "± 100126",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=1000",
            "value": 213458292,
            "range": "± 153451",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=1000",
            "value": 107898849,
            "range": "± 552030",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=1000",
            "value": 54612751,
            "range": "± 111095",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=1000",
            "value": 50219353,
            "range": "± 245695",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=10000",
            "value": 2115192625,
            "range": "± 812146",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=10000",
            "value": 1057740658,
            "range": "± 2878670",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=10000",
            "value": 531566346,
            "range": "± 5767192",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=10000",
            "value": 482362875,
            "range": "± 772636",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=1 msgs=50000",
            "value": 10700986744,
            "range": "± 2614800",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=2 msgs=50000",
            "value": 5296958652,
            "range": "± 7658153",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=4 msgs=50000",
            "value": 2652154418,
            "range": "± 4884524",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_messages/conc=8 msgs=50000",
            "value": 2405261501,
            "range": "± 17000002",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10",
            "value": 1126961,
            "range": "± 9157",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=100",
            "value": 1197896,
            "range": "± 9225",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=1000",
            "value": 1926325,
            "range": "± 6550",
            "unit": "ns/iter"
          },
          {
            "name": "bls12381::aggregate_verify_multiple_public_keys/pks=10000",
            "value": 9243269,
            "range": "± 10607",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_generation/ns_len=9 msg_len=32",
            "value": 20889,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::signature_verification/ns_len=9 msg_len=32",
            "value": 62242,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1",
            "value": 75452,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10",
            "value": 318360,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=100",
            "value": 2812208,
            "range": "± 89641",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=1000",
            "value": 21326863,
            "range": "± 34374",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_public_keys/pks=10000",
            "value": 202129775,
            "range": "± 433254",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1",
            "value": 75662,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10",
            "value": 181864,
            "range": "± 501",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=100",
            "value": 1245276,
            "range": "± 686",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=1000",
            "value": 10401689,
            "range": "± 14850",
            "unit": "ns/iter"
          },
          {
            "name": "ed25519::batch_verify_multiple_messages/msgs=10000",
            "value": 88360325,
            "range": "± 101170",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_generation/ns_len=9 msg_len=32",
            "value": 193881,
            "range": "± 1035",
            "unit": "ns/iter"
          },
          {
            "name": "secp256r1::signature_verification/ns_len=9 msg_len=32",
            "value": 341584,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=100",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=1000",
            "value": 643,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sha256::hash_message/msg_len=10000",
            "value": 6301,
            "range": "± 1",
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
          "id": "7889ca352c8fd5f4225e407ddf6b9929a602c406",
          "message": "[CI] Add WASM Support for `consensus` and `storage` (#391)",
          "timestamp": "2025-01-23T18:50:59Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/7889ca352c8fd5f4225e407ddf6b9929a602c406"
        },
        "date": 1737719288047,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 4857402,
            "range": "± 765969",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 5777601,
            "range": "± 1106882",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7251291,
            "range": "± 1215807",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7739952,
            "range": "± 1298918",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 60526780,
            "range": "± 240464",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 63678761,
            "range": "± 905461",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 68171772,
            "range": "± 154203",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 155419118,
            "range": "± 3272885",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 718206180,
            "range": "± 8650279",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 745361908,
            "range": "± 6419864",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 787093613,
            "range": "± 5009997",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2070490476,
            "range": "± 16564031",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5620711,
            "range": "± 28246",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 101657726,
            "range": "± 360227",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1361389383,
            "range": "± 11478833",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 10551377,
            "range": "± 96924",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 10893911,
            "range": "± 46983",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 11199975,
            "range": "± 248673",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 12168891,
            "range": "± 104127",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 304170387,
            "range": "± 8055401",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 330814621,
            "range": "± 7266641",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 323507728,
            "range": "± 1675092",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 402995706,
            "range": "± 4340821",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3481965285,
            "range": "± 11239422",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 3789553579,
            "range": "± 23908080",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 3824485664,
            "range": "± 29922972",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 4000793102,
            "range": "± 25345809",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000",
            "value": 3993097,
            "range": "± 7402",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=100000",
            "value": 47815024,
            "range": "± 198058",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=1000000",
            "value": 449556110,
            "range": "± 8940313",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=5000000",
            "value": 2358559009,
            "range": "± 24723490",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000000",
            "value": 4734888725,
            "range": "± 55656543",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=100",
            "value": 807174,
            "range": "± 13363",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=1000",
            "value": 1170882,
            "range": "± 1960",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=10000",
            "value": 4909513,
            "range": "± 5019",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=50000",
            "value": 21484747,
            "range": "± 27750",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=100",
            "value": 8080460,
            "range": "± 152693",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=1000",
            "value": 8495746,
            "range": "± 150253",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=10000",
            "value": 12132478,
            "range": "± 220752",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=50000",
            "value": 29846627,
            "range": "± 266664",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=100",
            "value": 92938659,
            "range": "± 480739",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=1000",
            "value": 92353806,
            "range": "± 227905",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=10000",
            "value": 95820554,
            "range": "± 384534",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=50000",
            "value": 120634638,
            "range": "± 366557",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=100",
            "value": 215375271,
            "range": "± 1088373",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=1000",
            "value": 215652462,
            "range": "± 125637",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=10000",
            "value": 219147824,
            "range": "± 272590",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=50000",
            "value": 234994015,
            "range": "± 118587",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=100",
            "value": 432456085,
            "range": "± 407997",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=1000",
            "value": 432309085,
            "range": "± 480844",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=10000",
            "value": 435674992,
            "range": "± 533748",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=50000",
            "value": 451653060,
            "range": "± 1191874",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=2 samples=100",
            "value": 409673,
            "range": "± 635",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5 samples=100",
            "value": 496237,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=10 samples=100",
            "value": 632993,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=25 samples=100",
            "value": 1059597,
            "range": "± 544",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=50 samples=100",
            "value": 1774206,
            "range": "± 1761",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=100 samples=100",
            "value": 3191342,
            "range": "± 1391",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=250 samples=100",
            "value": 7437944,
            "range": "± 7421",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=500 samples=100",
            "value": 14522793,
            "range": "± 44773",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=1000 samples=100",
            "value": 28767661,
            "range": "± 141856",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5000 samples=100",
            "value": 140794472,
            "range": "± 77838",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=2 samples=100",
            "value": 515117,
            "range": "± 3658",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5 samples=100",
            "value": 600471,
            "range": "± 3598",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=10 samples=100",
            "value": 741206,
            "range": "± 4089",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=25 samples=100",
            "value": 1168680,
            "range": "± 6089",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=50 samples=100",
            "value": 1884697,
            "range": "± 9901",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=100 samples=100",
            "value": 3303455,
            "range": "± 7852",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=250 samples=100",
            "value": 7613595,
            "range": "± 9970",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=500 samples=100",
            "value": 14659741,
            "range": "± 72738",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=1000 samples=100",
            "value": 28835421,
            "range": "± 183078",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5000 samples=100",
            "value": 140330434,
            "range": "± 105080",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=2 samples=100",
            "value": 621992,
            "range": "± 1972",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5 samples=100",
            "value": 716975,
            "range": "± 906",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=10 samples=100",
            "value": 875901,
            "range": "± 1902",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=25 samples=100",
            "value": 1313701,
            "range": "± 3737",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=50 samples=100",
            "value": 2025535,
            "range": "± 1683",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=100 samples=100",
            "value": 3438693,
            "range": "± 3323",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=250 samples=100",
            "value": 7695116,
            "range": "± 5205",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=500 samples=100",
            "value": 14771841,
            "range": "± 47445",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=1000 samples=100",
            "value": 28972689,
            "range": "± 138854",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5000 samples=100",
            "value": 140909223,
            "range": "± 29653",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=2 samples=100",
            "value": 722231,
            "range": "± 2425",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5 samples=100",
            "value": 833895,
            "range": "± 3592",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=10 samples=100",
            "value": 994500,
            "range": "± 2424",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=25 samples=100",
            "value": 1462737,
            "range": "± 6234",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=50 samples=100",
            "value": 2200751,
            "range": "± 4288",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=100 samples=100",
            "value": 3661780,
            "range": "± 3574",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=250 samples=100",
            "value": 8039109,
            "range": "± 7164",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=500 samples=100",
            "value": 15309474,
            "range": "± 102501",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=1000 samples=100",
            "value": 29849534,
            "range": "± 246129",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5000 samples=100",
            "value": 142989384,
            "range": "± 250505",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=2 samples=100",
            "value": 764928,
            "range": "± 2131",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5 samples=100",
            "value": 876235,
            "range": "± 5608",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=10 samples=100",
            "value": 1052131,
            "range": "± 2549",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=25 samples=100",
            "value": 1537073,
            "range": "± 5389",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=50 samples=100",
            "value": 2306229,
            "range": "± 11270",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=100 samples=100",
            "value": 3787479,
            "range": "± 3756",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=250 samples=100",
            "value": 8253244,
            "range": "± 9845",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=500 samples=100",
            "value": 15691128,
            "range": "± 49938",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=1000 samples=100",
            "value": 30471959,
            "range": "± 232184",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5000 samples=100",
            "value": 146736404,
            "range": "± 367902",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000 samples=100",
            "value": 331878,
            "range": "± 1429",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=100000 samples=100",
            "value": 424713,
            "range": "± 2732",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=1000000 samples=100",
            "value": 516210,
            "range": "± 1856",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=5000000 samples=100",
            "value": 603749,
            "range": "± 1869",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000000 samples=100",
            "value": 632126,
            "range": "± 1317",
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
          "id": "d2991cbdd8c86bafdac2f10f8bcd7ae2557169ef",
          "message": "[storage/mmr] add serialization/deserialization for Proof structure (#403)",
          "timestamp": "2025-01-25T00:26:31Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/d2991cbdd8c86bafdac2f10f8bcd7ae2557169ef"
        },
        "date": 1737805619262,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 4956627,
            "range": "± 603693",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 6249325,
            "range": "± 1113119",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7154150,
            "range": "± 1157569",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7704614,
            "range": "± 1361341",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 60188563,
            "range": "± 877038",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 65028121,
            "range": "± 367739",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 71639101,
            "range": "± 2518592",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 158865240,
            "range": "± 4794051",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 695254625,
            "range": "± 8082975",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 720164127,
            "range": "± 7505011",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 776607305,
            "range": "± 5283688",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2019531083,
            "range": "± 22324199",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5552803,
            "range": "± 20372",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 102755039,
            "range": "± 1081686",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1346394654,
            "range": "± 13278981",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 10551527,
            "range": "± 135987",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 10439047,
            "range": "± 107118",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 10843029,
            "range": "± 56903",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 11807047,
            "range": "± 147292",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 298164552,
            "range": "± 11795025",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 312703691,
            "range": "± 11287612",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 318481131,
            "range": "± 6291139",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 387836711,
            "range": "± 10588507",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3068280348,
            "range": "± 16589808",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 3528549575,
            "range": "± 24564044",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 3507068968,
            "range": "± 20585961",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 3756951739,
            "range": "± 66302885",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000",
            "value": 3927534,
            "range": "± 5239",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=100000",
            "value": 46763750,
            "range": "± 361735",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=1000000",
            "value": 441229136,
            "range": "± 9299490",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=5000000",
            "value": 2294168469,
            "range": "± 33880679",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000000",
            "value": 4631815947,
            "range": "± 71483725",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=100",
            "value": 811645,
            "range": "± 1836",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=1000",
            "value": 1172800,
            "range": "± 4157",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=10000",
            "value": 4913883,
            "range": "± 17426",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=50000",
            "value": 21428212,
            "range": "± 28315",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=100",
            "value": 8100573,
            "range": "± 92864",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=1000",
            "value": 8448998,
            "range": "± 109835",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=10000",
            "value": 12076613,
            "range": "± 136604",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=50000",
            "value": 29220388,
            "range": "± 159973",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=100",
            "value": 90856071,
            "range": "± 365243",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=1000",
            "value": 91187346,
            "range": "± 243418",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=10000",
            "value": 94856857,
            "range": "± 323181",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=50000",
            "value": 119244890,
            "range": "± 2951264",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=100",
            "value": 215319970,
            "range": "± 140939",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=1000",
            "value": 215724327,
            "range": "± 287339",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=10000",
            "value": 219092251,
            "range": "± 296268",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=50000",
            "value": 235000751,
            "range": "± 1167094",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=100",
            "value": 430563560,
            "range": "± 118689",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=1000",
            "value": 431245882,
            "range": "± 161816",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=10000",
            "value": 434188636,
            "range": "± 246251",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=50000",
            "value": 450114733,
            "range": "± 1298294",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=2 samples=100",
            "value": 405160,
            "range": "± 1256",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5 samples=100",
            "value": 497473,
            "range": "± 1081",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=10 samples=100",
            "value": 636926,
            "range": "± 1471",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=25 samples=100",
            "value": 1058503,
            "range": "± 1874",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=50 samples=100",
            "value": 1762671,
            "range": "± 3165",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=100 samples=100",
            "value": 3168530,
            "range": "± 885",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=250 samples=100",
            "value": 7400730,
            "range": "± 4309",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=500 samples=100",
            "value": 14461413,
            "range": "± 54350",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=1000 samples=100",
            "value": 28540534,
            "range": "± 137493",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5000 samples=100",
            "value": 142990373,
            "range": "± 1238084",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=2 samples=100",
            "value": 522444,
            "range": "± 2967",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5 samples=100",
            "value": 608114,
            "range": "± 8078",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=10 samples=100",
            "value": 756144,
            "range": "± 5913",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=25 samples=100",
            "value": 1166216,
            "range": "± 4427",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=50 samples=100",
            "value": 1876977,
            "range": "± 15135",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=100 samples=100",
            "value": 3273075,
            "range": "± 9351",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=250 samples=100",
            "value": 7475028,
            "range": "± 4273",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=500 samples=100",
            "value": 14487409,
            "range": "± 47151",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=1000 samples=100",
            "value": 28545751,
            "range": "± 107616",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5000 samples=100",
            "value": 142154718,
            "range": "± 103362",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=2 samples=100",
            "value": 615905,
            "range": "± 1094",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5 samples=100",
            "value": 718503,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=10 samples=100",
            "value": 873784,
            "range": "± 1906",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=25 samples=100",
            "value": 1324921,
            "range": "± 1150",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=50 samples=100",
            "value": 2028270,
            "range": "± 1785",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=100 samples=100",
            "value": 3449217,
            "range": "± 5456",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=250 samples=100",
            "value": 7633233,
            "range": "± 3757",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=500 samples=100",
            "value": 14768001,
            "range": "± 11718",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=1000 samples=100",
            "value": 28962086,
            "range": "± 32354",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5000 samples=100",
            "value": 143259907,
            "range": "± 1433228",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=2 samples=100",
            "value": 718640,
            "range": "± 2300",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5 samples=100",
            "value": 836441,
            "range": "± 3068",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=10 samples=100",
            "value": 986343,
            "range": "± 1385",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=25 samples=100",
            "value": 1449300,
            "range": "± 4798",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=50 samples=100",
            "value": 2182728,
            "range": "± 4240",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=100 samples=100",
            "value": 3574917,
            "range": "± 4620",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=250 samples=100",
            "value": 7801902,
            "range": "± 8130",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=500 samples=100",
            "value": 14881090,
            "range": "± 39994",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=1000 samples=100",
            "value": 29207774,
            "range": "± 75011",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5000 samples=100",
            "value": 143270171,
            "range": "± 154075",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=2 samples=100",
            "value": 764407,
            "range": "± 2804",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5 samples=100",
            "value": 871757,
            "range": "± 2829",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=10 samples=100",
            "value": 1039319,
            "range": "± 2217",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=25 samples=100",
            "value": 1514055,
            "range": "± 1580",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=50 samples=100",
            "value": 2268511,
            "range": "± 3734",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=100 samples=100",
            "value": 3711576,
            "range": "± 9025",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=250 samples=100",
            "value": 8097193,
            "range": "± 11291",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=500 samples=100",
            "value": 15385195,
            "range": "± 212503",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=1000 samples=100",
            "value": 29952722,
            "range": "± 111701",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5000 samples=100",
            "value": 147256576,
            "range": "± 387630",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000 samples=100",
            "value": 332374,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=100000 samples=100",
            "value": 429330,
            "range": "± 3219",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=1000000 samples=100",
            "value": 518071,
            "range": "± 2841",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=5000000 samples=100",
            "value": 605919,
            "range": "± 2624",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000000 samples=100",
            "value": 640133,
            "range": "± 4392",
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
          "id": "5924bebc95371c8cf9fb46aa384f61e6c0413d66",
          "message": "[storage/mmr] Simplify Proof Serialization (#405)",
          "timestamp": "2025-01-26T00:55:28Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/5924bebc95371c8cf9fb46aa384f61e6c0413d66"
        },
        "date": 1737892045244,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 4766496,
            "range": "± 708760",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 6004441,
            "range": "± 1102284",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7424620,
            "range": "± 1252473",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7787674,
            "range": "± 1465631",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 61592148,
            "range": "± 361314",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 65360065,
            "range": "± 5063842",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 73099551,
            "range": "± 2562185",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 155746538,
            "range": "± 2603865",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 702931427,
            "range": "± 84042116",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 740262723,
            "range": "± 9415803",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 794389219,
            "range": "± 7399678",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2088956340,
            "range": "± 16730679",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5535903,
            "range": "± 19258",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 109415275,
            "range": "± 718957",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1357476736,
            "range": "± 9229466",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 10374460,
            "range": "± 90263",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 10550008,
            "range": "± 43561",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 10790955,
            "range": "± 44601",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 11632168,
            "range": "± 154635",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 289660369,
            "range": "± 6522892",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 300610782,
            "range": "± 4821149",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 302400410,
            "range": "± 5495160",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 396144814,
            "range": "± 7638988",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3130627239,
            "range": "± 30649901",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 3618314246,
            "range": "± 50364286",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 3566092202,
            "range": "± 34188586",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 3661793085,
            "range": "± 39772586",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000",
            "value": 4036429,
            "range": "± 15589",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=100000",
            "value": 46659039,
            "range": "± 498681",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=1000000",
            "value": 447646750,
            "range": "± 10866878",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=5000000",
            "value": 2353700141,
            "range": "± 27148740",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000000",
            "value": 4737349651,
            "range": "± 88585348",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=100",
            "value": 847198,
            "range": "± 6310",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=1000",
            "value": 1208014,
            "range": "± 20623",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=10000",
            "value": 4999472,
            "range": "± 21198",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=50000",
            "value": 21873084,
            "range": "± 114879",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=100",
            "value": 8324478,
            "range": "± 118691",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=1000",
            "value": 8641434,
            "range": "± 62609",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=10000",
            "value": 12450989,
            "range": "± 148317",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=50000",
            "value": 30301682,
            "range": "± 389772",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=100",
            "value": 92296905,
            "range": "± 307931",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=1000",
            "value": 92205292,
            "range": "± 788499",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=10000",
            "value": 97725890,
            "range": "± 776869",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=50000",
            "value": 120031038,
            "range": "± 4036921",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=100",
            "value": 216167193,
            "range": "± 817317",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=1000",
            "value": 216350407,
            "range": "± 1358026",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=10000",
            "value": 220091761,
            "range": "± 1105076",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=50000",
            "value": 238845268,
            "range": "± 2407059",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=100",
            "value": 432306570,
            "range": "± 987535",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=1000",
            "value": 431792964,
            "range": "± 739245",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=10000",
            "value": 435352988,
            "range": "± 1314476",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=50000",
            "value": 451334114,
            "range": "± 787157",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=2 samples=100",
            "value": 409248,
            "range": "± 1736",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5 samples=100",
            "value": 498918,
            "range": "± 4054",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=10 samples=100",
            "value": 636265,
            "range": "± 1106",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=25 samples=100",
            "value": 1063525,
            "range": "± 1008",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=50 samples=100",
            "value": 1770242,
            "range": "± 1931",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=100 samples=100",
            "value": 3178620,
            "range": "± 1373",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=250 samples=100",
            "value": 7420038,
            "range": "± 2887",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=500 samples=100",
            "value": 14478556,
            "range": "± 9376",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=1000 samples=100",
            "value": 28604532,
            "range": "± 26974",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5000 samples=100",
            "value": 141897153,
            "range": "± 1387879",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=2 samples=100",
            "value": 533404,
            "range": "± 9535",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5 samples=100",
            "value": 615522,
            "range": "± 5751",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=10 samples=100",
            "value": 752571,
            "range": "± 6367",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=25 samples=100",
            "value": 1173859,
            "range": "± 4117",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=50 samples=100",
            "value": 1877272,
            "range": "± 7001",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=100 samples=100",
            "value": 3297767,
            "range": "± 8552",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=250 samples=100",
            "value": 7524379,
            "range": "± 10335",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=500 samples=100",
            "value": 14598652,
            "range": "± 37620",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=1000 samples=100",
            "value": 28744755,
            "range": "± 22818",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5000 samples=100",
            "value": 142088842,
            "range": "± 103672",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=2 samples=100",
            "value": 624938,
            "range": "± 1496",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5 samples=100",
            "value": 732668,
            "range": "± 1806",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=10 samples=100",
            "value": 886126,
            "range": "± 3532",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=25 samples=100",
            "value": 1335608,
            "range": "± 5068",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=50 samples=100",
            "value": 2062779,
            "range": "± 6387",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=100 samples=100",
            "value": 3490592,
            "range": "± 3997",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=250 samples=100",
            "value": 7793003,
            "range": "± 5533",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=500 samples=100",
            "value": 15040194,
            "range": "± 5005",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=1000 samples=100",
            "value": 29307809,
            "range": "± 13808",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5000 samples=100",
            "value": 144117429,
            "range": "± 215046",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=2 samples=100",
            "value": 734519,
            "range": "± 6207",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5 samples=100",
            "value": 849675,
            "range": "± 2550",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=10 samples=100",
            "value": 1025515,
            "range": "± 4992",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=25 samples=100",
            "value": 1503537,
            "range": "± 2471",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=50 samples=100",
            "value": 2232914,
            "range": "± 3860",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=100 samples=100",
            "value": 3678406,
            "range": "± 3237",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=250 samples=100",
            "value": 8062576,
            "range": "± 6736",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=500 samples=100",
            "value": 15369784,
            "range": "± 83916",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=1000 samples=100",
            "value": 29989313,
            "range": "± 219264",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5000 samples=100",
            "value": 144166108,
            "range": "± 67435",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=2 samples=100",
            "value": 769216,
            "range": "± 2578",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5 samples=100",
            "value": 876468,
            "range": "± 3050",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=10 samples=100",
            "value": 1056204,
            "range": "± 6402",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=25 samples=100",
            "value": 1526900,
            "range": "± 5874",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=50 samples=100",
            "value": 2277267,
            "range": "± 6438",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=100 samples=100",
            "value": 3743832,
            "range": "± 7571",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=250 samples=100",
            "value": 8128617,
            "range": "± 5469",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=500 samples=100",
            "value": 15445440,
            "range": "± 44781",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=1000 samples=100",
            "value": 30025513,
            "range": "± 94748",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5000 samples=100",
            "value": 145333399,
            "range": "± 365596",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000 samples=100",
            "value": 332266,
            "range": "± 2429",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=100000 samples=100",
            "value": 445402,
            "range": "± 3397",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=1000000 samples=100",
            "value": 524252,
            "range": "± 2437",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=5000000 samples=100",
            "value": 618124,
            "range": "± 1283",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000000 samples=100",
            "value": 648767,
            "range": "± 2694",
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
          "id": "b65c588c9ebecf5602ff3b3f8c4c69dd2002fdc7",
          "message": "[docs] Use dates instead of commits (#417)",
          "timestamp": "2025-01-29T06:00:20Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/b65c588c9ebecf5602ff3b3f8c4c69dd2002fdc7"
        },
        "date": 1738151245811,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 4831575,
            "range": "± 627076",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 6116170,
            "range": "± 1000021",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7120919,
            "range": "± 1020078",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7269487,
            "range": "± 1334276",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 58010569,
            "range": "± 1103842",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 61079412,
            "range": "± 1363525",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 66512493,
            "range": "± 275123",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 149184478,
            "range": "± 2523327",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 710421342,
            "range": "± 8457542",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 728615612,
            "range": "± 4453168",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 780877237,
            "range": "± 33085363",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2046681339,
            "range": "± 10336157",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5543586,
            "range": "± 38429",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 106689984,
            "range": "± 810159",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1377450476,
            "range": "± 21204614",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 10448788,
            "range": "± 68202",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 10668919,
            "range": "± 109118",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 10882666,
            "range": "± 125419",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 11878230,
            "range": "± 108887",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 297151878,
            "range": "± 5179824",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 326233336,
            "range": "± 5196950",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 321519806,
            "range": "± 8478379",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 383669860,
            "range": "± 3641351",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3053735369,
            "range": "± 11036924",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 3618141418,
            "range": "± 63650362",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 3583209866,
            "range": "± 72859209",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 3897566114,
            "range": "± 58991540",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000",
            "value": 2471691,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=100000",
            "value": 24992198,
            "range": "± 31286",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=1000000",
            "value": 261273256,
            "range": "± 258255",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=5000000",
            "value": 1312492685,
            "range": "± 2021669",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000000",
            "value": 2644035083,
            "range": "± 1887775",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=100",
            "value": 23067,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=1000",
            "value": 248253,
            "range": "± 1522",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=10000",
            "value": 2546283,
            "range": "± 5631",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=50000",
            "value": 12622694,
            "range": "± 22451",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=100",
            "value": 24965,
            "range": "± 424",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=1000",
            "value": 251480,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=10000",
            "value": 2516767,
            "range": "± 3462",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=50000",
            "value": 13009474,
            "range": "± 147482",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=100",
            "value": 452742,
            "range": "± 6295",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=1000",
            "value": 668591,
            "range": "± 20975",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=10000",
            "value": 2981796,
            "range": "± 32727",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=50000",
            "value": 14467573,
            "range": "± 41627",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=100",
            "value": 1740918,
            "range": "± 52889",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=1000",
            "value": 1992018,
            "range": "± 47194",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=10000",
            "value": 4265141,
            "range": "± 42112",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=50000",
            "value": 14965384,
            "range": "± 71813",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=100",
            "value": 3061025,
            "range": "± 53438",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=1000",
            "value": 3336251,
            "range": "± 74203",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=10000",
            "value": 5661977,
            "range": "± 38003",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=50000",
            "value": 16159461,
            "range": "± 67657",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=2 samples=100",
            "value": 285121,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5 samples=100",
            "value": 342023,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=10 samples=100",
            "value": 437920,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=25 samples=100",
            "value": 721235,
            "range": "± 606",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=50 samples=100",
            "value": 1195643,
            "range": "± 728",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=100 samples=100",
            "value": 2143766,
            "range": "± 1711",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=250 samples=100",
            "value": 4983719,
            "range": "± 1134",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=500 samples=100",
            "value": 9720963,
            "range": "± 15084",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=1000 samples=100",
            "value": 19190411,
            "range": "± 37253",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5000 samples=100",
            "value": 94598061,
            "range": "± 23242",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=2 samples=100",
            "value": 356934,
            "range": "± 2358",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5 samples=100",
            "value": 414975,
            "range": "± 1666",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=10 samples=100",
            "value": 507064,
            "range": "± 1792",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=25 samples=100",
            "value": 792998,
            "range": "± 1193",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=50 samples=100",
            "value": 1264813,
            "range": "± 1346",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=100 samples=100",
            "value": 2207789,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=250 samples=100",
            "value": 5034695,
            "range": "± 955",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=500 samples=100",
            "value": 9752647,
            "range": "± 4443",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=1000 samples=100",
            "value": 19173646,
            "range": "± 11053",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5000 samples=100",
            "value": 94732679,
            "range": "± 19345",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=2 samples=100",
            "value": 413922,
            "range": "± 704",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5 samples=100",
            "value": 470029,
            "range": "± 896",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=10 samples=100",
            "value": 567074,
            "range": "± 854",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=25 samples=100",
            "value": 853050,
            "range": "± 1750",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=50 samples=100",
            "value": 1325077,
            "range": "± 2549",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=100 samples=100",
            "value": 2269497,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=250 samples=100",
            "value": 5105255,
            "range": "± 1168",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=500 samples=100",
            "value": 9829815,
            "range": "± 4992",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=1000 samples=100",
            "value": 19282679,
            "range": "± 25182",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5000 samples=100",
            "value": 94777137,
            "range": "± 13761",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=2 samples=100",
            "value": 480047,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5 samples=100",
            "value": 535865,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=10 samples=100",
            "value": 629981,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=25 samples=100",
            "value": 917210,
            "range": "± 1100",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=50 samples=100",
            "value": 1388920,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=100 samples=100",
            "value": 2333687,
            "range": "± 1255",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=250 samples=100",
            "value": 5167867,
            "range": "± 948",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=500 samples=100",
            "value": 9891519,
            "range": "± 7079",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=1000 samples=100",
            "value": 19323635,
            "range": "± 13361",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5000 samples=100",
            "value": 95019366,
            "range": "± 15057",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=2 samples=100",
            "value": 497489,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5 samples=100",
            "value": 556970,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=10 samples=100",
            "value": 649886,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=25 samples=100",
            "value": 935222,
            "range": "± 588",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=50 samples=100",
            "value": 1406729,
            "range": "± 771",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=100 samples=100",
            "value": 2353845,
            "range": "± 1090",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=250 samples=100",
            "value": 5192429,
            "range": "± 892",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=500 samples=100",
            "value": 9913002,
            "range": "± 12847",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=1000 samples=100",
            "value": 19368377,
            "range": "± 34228",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5000 samples=100",
            "value": 94596092,
            "range": "± 7127",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000 samples=100",
            "value": 226855,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=100000 samples=100",
            "value": 287911,
            "range": "± 1611",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=1000000 samples=100",
            "value": 336507,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=5000000 samples=100",
            "value": 388693,
            "range": "± 660",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000000 samples=100",
            "value": 403737,
            "range": "± 490",
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
          "id": "4d9dd03826a4e1962db6bd7d9719289903ed158d",
          "message": "[cryptography/{ed25519,secp256r1] Add signature generation benchmarks (#420)",
          "timestamp": "2025-01-29T18:31:04Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/4d9dd03826a4e1962db6bd7d9719289903ed158d"
        },
        "date": 1738181247867,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 4829478,
            "range": "± 726202",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 5961112,
            "range": "± 1157832",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7091847,
            "range": "± 1187184",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7647054,
            "range": "± 1492062",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 61398559,
            "range": "± 1194647",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 63376301,
            "range": "± 272998",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 70432253,
            "range": "± 1415012",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 156906028,
            "range": "± 4340956",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 700328967,
            "range": "± 7648258",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 744582591,
            "range": "± 72599106",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 823227171,
            "range": "± 41038171",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2061142030,
            "range": "± 13013760",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5567144,
            "range": "± 42189",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 101296561,
            "range": "± 1218074",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1314111765,
            "range": "± 21460544",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 10190922,
            "range": "± 46545",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 10413063,
            "range": "± 131397",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 10736940,
            "range": "± 132720",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 11665682,
            "range": "± 184060",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 286000309,
            "range": "± 10943233",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 307548061,
            "range": "± 6776797",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 306616796,
            "range": "± 8839949",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 380042691,
            "range": "± 7377676",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3028341946,
            "range": "± 20703248",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 3443321934,
            "range": "± 24095246",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 3510556579,
            "range": "± 30961803",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 3701633983,
            "range": "± 21476191",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000",
            "value": 2496183,
            "range": "± 5869",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=100000",
            "value": 25137296,
            "range": "± 37164",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=1000000",
            "value": 261162100,
            "range": "± 363510",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=5000000",
            "value": 1323164293,
            "range": "± 1884202",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000000",
            "value": 2681691481,
            "range": "± 3240663",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=100",
            "value": 23137,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=1000",
            "value": 247363,
            "range": "± 1966",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=10000",
            "value": 2551263,
            "range": "± 6936",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=50000",
            "value": 12614477,
            "range": "± 29492",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=100",
            "value": 25112,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=1000",
            "value": 251175,
            "range": "± 1235",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=10000",
            "value": 2514058,
            "range": "± 781",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=50000",
            "value": 12985539,
            "range": "± 169812",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=100",
            "value": 442830,
            "range": "± 8788",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=1000",
            "value": 663924,
            "range": "± 5046",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=10000",
            "value": 2974728,
            "range": "± 17973",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=50000",
            "value": 14400209,
            "range": "± 43636",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=100",
            "value": 1746063,
            "range": "± 64058",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=1000",
            "value": 1941031,
            "range": "± 48679",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=10000",
            "value": 4275757,
            "range": "± 50874",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=50000",
            "value": 15012528,
            "range": "± 36606",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=100",
            "value": 3088750,
            "range": "± 61858",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=1000",
            "value": 3311154,
            "range": "± 81775",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=10000",
            "value": 5669355,
            "range": "± 115278",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=50000",
            "value": 16175891,
            "range": "± 76094",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=2 samples=100",
            "value": 284952,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5 samples=100",
            "value": 341781,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=10 samples=100",
            "value": 439871,
            "range": "± 1205",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=25 samples=100",
            "value": 722634,
            "range": "± 880",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=50 samples=100",
            "value": 1194821,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=100 samples=100",
            "value": 2139721,
            "range": "± 1518",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=250 samples=100",
            "value": 4979978,
            "range": "± 1759",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=500 samples=100",
            "value": 9709324,
            "range": "± 10104",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=1000 samples=100",
            "value": 19170572,
            "range": "± 7527",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5000 samples=100",
            "value": 94945998,
            "range": "± 90874",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=2 samples=100",
            "value": 352281,
            "range": "± 2636",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5 samples=100",
            "value": 411901,
            "range": "± 2188",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=10 samples=100",
            "value": 505679,
            "range": "± 2049",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=25 samples=100",
            "value": 792853,
            "range": "± 1975",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=50 samples=100",
            "value": 1263921,
            "range": "± 1190",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=100 samples=100",
            "value": 2212531,
            "range": "± 25247",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=250 samples=100",
            "value": 5054721,
            "range": "± 3459",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=500 samples=100",
            "value": 9789190,
            "range": "± 14105",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=1000 samples=100",
            "value": 19256864,
            "range": "± 32060",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5000 samples=100",
            "value": 95439911,
            "range": "± 51625",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=2 samples=100",
            "value": 414606,
            "range": "± 614",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5 samples=100",
            "value": 471287,
            "range": "± 1065",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=10 samples=100",
            "value": 567102,
            "range": "± 1284",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=25 samples=100",
            "value": 852437,
            "range": "± 1330",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=50 samples=100",
            "value": 1331903,
            "range": "± 2829",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=100 samples=100",
            "value": 2270171,
            "range": "± 5262",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=250 samples=100",
            "value": 5110464,
            "range": "± 1245",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=500 samples=100",
            "value": 9841594,
            "range": "± 10995",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=1000 samples=100",
            "value": 19361152,
            "range": "± 38651",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5000 samples=100",
            "value": 95380583,
            "range": "± 54694",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=2 samples=100",
            "value": 478132,
            "range": "± 614",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5 samples=100",
            "value": 534109,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=10 samples=100",
            "value": 632174,
            "range": "± 627",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=25 samples=100",
            "value": 917101,
            "range": "± 1025",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=50 samples=100",
            "value": 1387454,
            "range": "± 14747",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=100 samples=100",
            "value": 2341010,
            "range": "± 4152",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=250 samples=100",
            "value": 5168086,
            "range": "± 7175",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=500 samples=100",
            "value": 9899621,
            "range": "± 25039",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=1000 samples=100",
            "value": 19326822,
            "range": "± 52001",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5000 samples=100",
            "value": 95655795,
            "range": "± 84543",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=2 samples=100",
            "value": 492988,
            "range": "± 488",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5 samples=100",
            "value": 552936,
            "range": "± 853",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=10 samples=100",
            "value": 652949,
            "range": "± 1255",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=25 samples=100",
            "value": 938384,
            "range": "± 1396",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=50 samples=100",
            "value": 1412358,
            "range": "± 2810",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=100 samples=100",
            "value": 2365993,
            "range": "± 7301",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=250 samples=100",
            "value": 5216979,
            "range": "± 8166",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=500 samples=100",
            "value": 9928149,
            "range": "± 10767",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=1000 samples=100",
            "value": 19483642,
            "range": "± 39080",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5000 samples=100",
            "value": 95727953,
            "range": "± 218923",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000 samples=100",
            "value": 230020,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=100000 samples=100",
            "value": 287322,
            "range": "± 1930",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=1000000 samples=100",
            "value": 336143,
            "range": "± 1373",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=5000000 samples=100",
            "value": 390280,
            "range": "± 605",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000000 samples=100",
            "value": 402770,
            "range": "± 765",
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
          "id": "c7faa8e0dcbb520ff0aa709e9e060dffe2359a5d",
          "message": "[cryptography/hasher] Remove `DIGEST_LENGTH` const (#422)",
          "timestamp": "2025-01-30T00:30:25Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/c7faa8e0dcbb520ff0aa709e9e060dffe2359a5d"
        },
        "date": 1738237661109,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 5662919,
            "range": "± 381428",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 6542280,
            "range": "± 1072267",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7129833,
            "range": "± 1354664",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7571240,
            "range": "± 1474300",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 62942066,
            "range": "± 3447155",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 65293863,
            "range": "± 1324699",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 72439544,
            "range": "± 3153648",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 162449513,
            "range": "± 7516869",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 801787321,
            "range": "± 16187480",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 817920970,
            "range": "± 41376120",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 907702358,
            "range": "± 52398282",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2411914417,
            "range": "± 72132419",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5636523,
            "range": "± 45585",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 115286955,
            "range": "± 4866230",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1414214900,
            "range": "± 19731847",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 11257634,
            "range": "± 357006",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 11333851,
            "range": "± 315834",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 11390662,
            "range": "± 203971",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 12378400,
            "range": "± 200969",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 401636566,
            "range": "± 43394709",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 460215233,
            "range": "± 27171842",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 431977413,
            "range": "± 25575137",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 521900501,
            "range": "± 19663592",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 4317309252,
            "range": "± 69038662",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 4902239379,
            "range": "± 208879001",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 4413026366,
            "range": "± 82645123",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 4505797067,
            "range": "± 147996094",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000",
            "value": 2510109,
            "range": "± 1527",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=100000",
            "value": 25357195,
            "range": "± 6396",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=1000000",
            "value": 263671008,
            "range": "± 194637",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=5000000",
            "value": 1331904465,
            "range": "± 2343112",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000000",
            "value": 2670381672,
            "range": "± 7048548",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=100",
            "value": 23048,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=1000",
            "value": 246293,
            "range": "± 1212",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=10000",
            "value": 2533135,
            "range": "± 13041",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=50000",
            "value": 12560200,
            "range": "± 26813",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=100",
            "value": 24971,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=1000",
            "value": 249643,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=10000",
            "value": 2491015,
            "range": "± 8221",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=50000",
            "value": 13033946,
            "range": "± 161039",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=100",
            "value": 452085,
            "range": "± 6126",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=1000",
            "value": 671012,
            "range": "± 4704",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=10000",
            "value": 2977375,
            "range": "± 11256",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=50000",
            "value": 14372545,
            "range": "± 25250",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=100",
            "value": 1732880,
            "range": "± 48466",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=1000",
            "value": 1961301,
            "range": "± 49009",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=10000",
            "value": 4281648,
            "range": "± 44603",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=50000",
            "value": 14930454,
            "range": "± 63321",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=100",
            "value": 3073876,
            "range": "± 79816",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=1000",
            "value": 3324094,
            "range": "± 57438",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=10000",
            "value": 5700167,
            "range": "± 80562",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=50000",
            "value": 16219577,
            "range": "± 74661",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=2 samples=100",
            "value": 288895,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5 samples=100",
            "value": 343924,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=10 samples=100",
            "value": 438310,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=25 samples=100",
            "value": 725580,
            "range": "± 1349",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=50 samples=100",
            "value": 1191759,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=100 samples=100",
            "value": 2136890,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=250 samples=100",
            "value": 4972392,
            "range": "± 8183",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=500 samples=100",
            "value": 9692947,
            "range": "± 4686",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=1000 samples=100",
            "value": 19143424,
            "range": "± 11300",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5000 samples=100",
            "value": 94821687,
            "range": "± 23204",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=2 samples=100",
            "value": 364665,
            "range": "± 3218",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5 samples=100",
            "value": 430050,
            "range": "± 757",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=10 samples=100",
            "value": 516919,
            "range": "± 1579",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=25 samples=100",
            "value": 796234,
            "range": "± 1940",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=50 samples=100",
            "value": 1269121,
            "range": "± 1744",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=100 samples=100",
            "value": 2209532,
            "range": "± 41580",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=250 samples=100",
            "value": 5049403,
            "range": "± 4261",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=500 samples=100",
            "value": 9779751,
            "range": "± 6707",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=1000 samples=100",
            "value": 19228784,
            "range": "± 19082",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5000 samples=100",
            "value": 94929338,
            "range": "± 56724",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=2 samples=100",
            "value": 427473,
            "range": "± 2859",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5 samples=100",
            "value": 477425,
            "range": "± 1201",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=10 samples=100",
            "value": 567775,
            "range": "± 1847",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=25 samples=100",
            "value": 855494,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=50 samples=100",
            "value": 1328640,
            "range": "± 2612",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=100 samples=100",
            "value": 2270303,
            "range": "± 1865",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=250 samples=100",
            "value": 5102601,
            "range": "± 5377",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=500 samples=100",
            "value": 9811015,
            "range": "± 6974",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=1000 samples=100",
            "value": 19256422,
            "range": "± 313988",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5000 samples=100",
            "value": 94961723,
            "range": "± 31137",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=2 samples=100",
            "value": 480358,
            "range": "± 1008",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5 samples=100",
            "value": 537371,
            "range": "± 858",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=10 samples=100",
            "value": 636607,
            "range": "± 1391",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=25 samples=100",
            "value": 925453,
            "range": "± 1171",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=50 samples=100",
            "value": 1405038,
            "range": "± 1598",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=100 samples=100",
            "value": 2367314,
            "range": "± 4920",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=250 samples=100",
            "value": 5250907,
            "range": "± 4136",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=500 samples=100",
            "value": 10039885,
            "range": "± 50569",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=1000 samples=100",
            "value": 19632086,
            "range": "± 137205",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5000 samples=100",
            "value": 94801828,
            "range": "± 138428",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=2 samples=100",
            "value": 500088,
            "range": "± 1485",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5 samples=100",
            "value": 555227,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=10 samples=100",
            "value": 652612,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=25 samples=100",
            "value": 939915,
            "range": "± 1741",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=50 samples=100",
            "value": 1418201,
            "range": "± 1335",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=100 samples=100",
            "value": 2372476,
            "range": "± 1463",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=250 samples=100",
            "value": 5243012,
            "range": "± 1633",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=500 samples=100",
            "value": 10012374,
            "range": "± 26927",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=1000 samples=100",
            "value": 19556445,
            "range": "± 71517",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5000 samples=100",
            "value": 95089222,
            "range": "± 370907",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000 samples=100",
            "value": 226818,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=100000 samples=100",
            "value": 285854,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=1000000 samples=100",
            "value": 333824,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=5000000 samples=100",
            "value": 388360,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000000 samples=100",
            "value": 403204,
            "range": "± 2559",
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
          "id": "410e7bd803201fbb8b3ab2f647a14741df0f8cf3",
          "message": "[consensus] Use `cryptography::Digest` (#426)",
          "timestamp": "2025-01-30T23:27:41Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/410e7bd803201fbb8b3ab2f647a14741df0f8cf3"
        },
        "date": 1738323990397,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 4734030,
            "range": "± 768295",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 5261519,
            "range": "± 1044442",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7220765,
            "range": "± 1252666",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7126389,
            "range": "± 1312592",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 59946124,
            "range": "± 128603",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 63980010,
            "range": "± 106486",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 68158346,
            "range": "± 152657",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 150699775,
            "range": "± 2027587",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 692592577,
            "range": "± 7847567",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 720791705,
            "range": "± 5171610",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 806528702,
            "range": "± 57893924",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2020857663,
            "range": "± 14123616",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5511153,
            "range": "± 17054",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 100503651,
            "range": "± 2631365",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1271538044,
            "range": "± 4793346",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 10217657,
            "range": "± 44611",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 10437795,
            "range": "± 24817",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 10667481,
            "range": "± 44855",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 11605302,
            "range": "± 68334",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 264994532,
            "range": "± 2138046",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 280407198,
            "range": "± 1845312",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 282646879,
            "range": "± 3062364",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 363834461,
            "range": "± 2965358",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3026884267,
            "range": "± 18738956",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 3501405117,
            "range": "± 24216493",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 3553557989,
            "range": "± 42358952",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 3721971101,
            "range": "± 41018082",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000",
            "value": 2561127,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=100000",
            "value": 25825441,
            "range": "± 14049",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=1000000",
            "value": 268351747,
            "range": "± 7892617",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=5000000",
            "value": 1353736962,
            "range": "± 1088241",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000000",
            "value": 2718062041,
            "range": "± 2695948",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=100",
            "value": 23688,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=1000",
            "value": 253178,
            "range": "± 1663",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=10000",
            "value": 2608232,
            "range": "± 4979",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=50000",
            "value": 12961817,
            "range": "± 27890",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=100",
            "value": 25602,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=1000",
            "value": 258596,
            "range": "± 894",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=10000",
            "value": 2581443,
            "range": "± 114240",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=50000",
            "value": 13280831,
            "range": "± 310086",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=100",
            "value": 440820,
            "range": "± 7069",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=1000",
            "value": 673541,
            "range": "± 5413",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=10000",
            "value": 3022363,
            "range": "± 11233",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=50000",
            "value": 14608603,
            "range": "± 10264",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=100",
            "value": 1717754,
            "range": "± 52234",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=1000",
            "value": 1931212,
            "range": "± 62406",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=10000",
            "value": 4301171,
            "range": "± 50875",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=50000",
            "value": 15264455,
            "range": "± 71781",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=100",
            "value": 3065299,
            "range": "± 48890",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=1000",
            "value": 3382414,
            "range": "± 60847",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=10000",
            "value": 5687902,
            "range": "± 62752",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=50000",
            "value": 16428790,
            "range": "± 73266",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=2 samples=100",
            "value": 294652,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5 samples=100",
            "value": 349030,
            "range": "± 750",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=10 samples=100",
            "value": 450027,
            "range": "± 3401",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=25 samples=100",
            "value": 738931,
            "range": "± 1016",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=50 samples=100",
            "value": 1228545,
            "range": "± 1071",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=100 samples=100",
            "value": 2209682,
            "range": "± 2705",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=250 samples=100",
            "value": 5131522,
            "range": "± 3599",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=500 samples=100",
            "value": 10012086,
            "range": "± 6563",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=1000 samples=100",
            "value": 19779082,
            "range": "± 15639",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5000 samples=100",
            "value": 97666251,
            "range": "± 23358",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=2 samples=100",
            "value": 351836,
            "range": "± 645",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5 samples=100",
            "value": 411423,
            "range": "± 1481",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=10 samples=100",
            "value": 509302,
            "range": "± 747",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=25 samples=100",
            "value": 803621,
            "range": "± 5317",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=50 samples=100",
            "value": 1291567,
            "range": "± 952",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=100 samples=100",
            "value": 2268150,
            "range": "± 2740",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=250 samples=100",
            "value": 5201053,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=500 samples=100",
            "value": 10085615,
            "range": "± 4174",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=1000 samples=100",
            "value": 19841310,
            "range": "± 5628",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5000 samples=100",
            "value": 97817916,
            "range": "± 148849",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=2 samples=100",
            "value": 419127,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5 samples=100",
            "value": 476060,
            "range": "± 5449",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=10 samples=100",
            "value": 574348,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=25 samples=100",
            "value": 873653,
            "range": "± 1349",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=50 samples=100",
            "value": 1360386,
            "range": "± 2654",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=100 samples=100",
            "value": 2336008,
            "range": "± 1899",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=250 samples=100",
            "value": 5265645,
            "range": "± 4254",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=500 samples=100",
            "value": 10137862,
            "range": "± 17359",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=1000 samples=100",
            "value": 19896757,
            "range": "± 8994",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5000 samples=100",
            "value": 97889133,
            "range": "± 32755",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=2 samples=100",
            "value": 488141,
            "range": "± 1002",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5 samples=100",
            "value": 542567,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=10 samples=100",
            "value": 639748,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=25 samples=100",
            "value": 937712,
            "range": "± 1067",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=50 samples=100",
            "value": 1424357,
            "range": "± 685",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=100 samples=100",
            "value": 2399439,
            "range": "± 1603",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=250 samples=100",
            "value": 5330566,
            "range": "± 1283",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=500 samples=100",
            "value": 10198986,
            "range": "± 2902",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=1000 samples=100",
            "value": 19949186,
            "range": "± 275614",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5000 samples=100",
            "value": 97862494,
            "range": "± 46902",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=2 samples=100",
            "value": 504105,
            "range": "± 903",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5 samples=100",
            "value": 560233,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=10 samples=100",
            "value": 663631,
            "range": "± 4657",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=25 samples=100",
            "value": 962410,
            "range": "± 677",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=50 samples=100",
            "value": 1451528,
            "range": "± 1211",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=100 samples=100",
            "value": 2429997,
            "range": "± 1480",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=250 samples=100",
            "value": 5356666,
            "range": "± 62896",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=500 samples=100",
            "value": 10235357,
            "range": "± 3683",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=1000 samples=100",
            "value": 19997182,
            "range": "± 7664",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5000 samples=100",
            "value": 98029885,
            "range": "± 916143",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000 samples=100",
            "value": 230522,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=100000 samples=100",
            "value": 299130,
            "range": "± 1058",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=1000000 samples=100",
            "value": 342399,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=5000000 samples=100",
            "value": 393019,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000000 samples=100",
            "value": 409254,
            "range": "± 342",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Danil",
            "username": "Danyylka",
            "email": "37103154+Danyylka@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cee6569e91f25c8ff57604d30828b1a844682755",
          "message": "fix grammar error (#433)",
          "timestamp": "2025-02-01T21:35:03Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/cee6569e91f25c8ff57604d30828b1a844682755"
        },
        "date": 1738496731577,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 4511368,
            "range": "± 719072",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 5764645,
            "range": "± 1014273",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 6750857,
            "range": "± 1249943",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 7118394,
            "range": "± 1382945",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 56941244,
            "range": "± 656845",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 59992080,
            "range": "± 1732714",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 65389854,
            "range": "± 1151240",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 152150818,
            "range": "± 7152208",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 765715774,
            "range": "± 66635423",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 709652563,
            "range": "± 13709468",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 752019117,
            "range": "± 5674396",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2032203336,
            "range": "± 23874946",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5543647,
            "range": "± 12468",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 100069880,
            "range": "± 876233",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1356196199,
            "range": "± 13151900",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 10437601,
            "range": "± 188669",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 10621336,
            "range": "± 130338",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 10753255,
            "range": "± 58857",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 11714369,
            "range": "± 380072",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 288129652,
            "range": "± 19597142",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 312424676,
            "range": "± 6966087",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 318446014,
            "range": "± 10175287",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 373056405,
            "range": "± 6337177",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3090749640,
            "range": "± 230785923",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 3552573361,
            "range": "± 22135914",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 3509741724,
            "range": "± 25238818",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 3658192686,
            "range": "± 31534005",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000",
            "value": 2558607,
            "range": "± 16894",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=100000",
            "value": 25788585,
            "range": "± 8175",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=1000000",
            "value": 268290538,
            "range": "± 3119305",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=5000000",
            "value": 1355911182,
            "range": "± 1913304",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000000",
            "value": 2721122223,
            "range": "± 2675651",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=100",
            "value": 23774,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=1000",
            "value": 253107,
            "range": "± 1958",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=10000",
            "value": 2604983,
            "range": "± 9256",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=50000",
            "value": 12905042,
            "range": "± 29815",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=100",
            "value": 25656,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=1000",
            "value": 259422,
            "range": "± 1483",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=10000",
            "value": 2572583,
            "range": "± 1400",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=50000",
            "value": 13319729,
            "range": "± 193614",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=100",
            "value": 444801,
            "range": "± 11219",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=1000",
            "value": 678562,
            "range": "± 10521",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=10000",
            "value": 3043156,
            "range": "± 11900",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=50000",
            "value": 14709398,
            "range": "± 37968",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=100",
            "value": 1723941,
            "range": "± 58644",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=1000",
            "value": 2004902,
            "range": "± 59723",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=10000",
            "value": 4364402,
            "range": "± 48019",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=50000",
            "value": 15275284,
            "range": "± 62181",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=100",
            "value": 3080779,
            "range": "± 75073",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=1000",
            "value": 3363306,
            "range": "± 71459",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=10000",
            "value": 5652529,
            "range": "± 44852",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=50000",
            "value": 16452540,
            "range": "± 80483",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=2 samples=100",
            "value": 294187,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5 samples=100",
            "value": 352489,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=10 samples=100",
            "value": 450029,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=25 samples=100",
            "value": 742862,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=50 samples=100",
            "value": 1231567,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=100 samples=100",
            "value": 2203896,
            "range": "± 1124",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=250 samples=100",
            "value": 5125660,
            "range": "± 2073",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=500 samples=100",
            "value": 9998146,
            "range": "± 12345",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=1000 samples=100",
            "value": 19741897,
            "range": "± 28492",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5000 samples=100",
            "value": 97413650,
            "range": "± 41940",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=2 samples=100",
            "value": 356931,
            "range": "± 457",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5 samples=100",
            "value": 415715,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=10 samples=100",
            "value": 513635,
            "range": "± 806",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=25 samples=100",
            "value": 806581,
            "range": "± 2551",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=50 samples=100",
            "value": 1293068,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=100 samples=100",
            "value": 2270241,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=250 samples=100",
            "value": 5200745,
            "range": "± 3345",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=500 samples=100",
            "value": 10084621,
            "range": "± 14628",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=1000 samples=100",
            "value": 19837726,
            "range": "± 26749",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5000 samples=100",
            "value": 97501970,
            "range": "± 522575",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=2 samples=100",
            "value": 426999,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5 samples=100",
            "value": 482948,
            "range": "± 712",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=10 samples=100",
            "value": 582505,
            "range": "± 1303",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=25 samples=100",
            "value": 883903,
            "range": "± 2437",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=50 samples=100",
            "value": 1385700,
            "range": "± 2470",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=100 samples=100",
            "value": 2389320,
            "range": "± 1959",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=250 samples=100",
            "value": 5394507,
            "range": "± 2737",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=500 samples=100",
            "value": 10411148,
            "range": "± 72912",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=1000 samples=100",
            "value": 20442768,
            "range": "± 188423",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5000 samples=100",
            "value": 98469847,
            "range": "± 47584",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=2 samples=100",
            "value": 490402,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5 samples=100",
            "value": 547702,
            "range": "± 837",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=10 samples=100",
            "value": 644635,
            "range": "± 1053",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=25 samples=100",
            "value": 945490,
            "range": "± 1387",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=50 samples=100",
            "value": 1431011,
            "range": "± 1406",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=100 samples=100",
            "value": 2418371,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=250 samples=100",
            "value": 5368973,
            "range": "± 1427",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=500 samples=100",
            "value": 10278898,
            "range": "± 29339",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=1000 samples=100",
            "value": 20105543,
            "range": "± 83002",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5000 samples=100",
            "value": 97804456,
            "range": "± 25264",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=2 samples=100",
            "value": 506749,
            "range": "± 572",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5 samples=100",
            "value": 563739,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=10 samples=100",
            "value": 663194,
            "range": "± 1303",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=25 samples=100",
            "value": 959756,
            "range": "± 1195",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=50 samples=100",
            "value": 1450189,
            "range": "± 1401",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=100 samples=100",
            "value": 2430993,
            "range": "± 1324",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=250 samples=100",
            "value": 5365490,
            "range": "± 2169",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=500 samples=100",
            "value": 10268641,
            "range": "± 22264",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=1000 samples=100",
            "value": 20065319,
            "range": "± 55775",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5000 samples=100",
            "value": 97720068,
            "range": "± 39051",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000 samples=100",
            "value": 234526,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=100000 samples=100",
            "value": 286670,
            "range": "± 1724",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=1000000 samples=100",
            "value": 343109,
            "range": "± 881",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=5000000 samples=100",
            "value": 397829,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000000 samples=100",
            "value": 410431,
            "range": "± 390",
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
          "id": "7ebb4f88af332eda429c559e840d948a9d255565",
          "message": "[commonware-storage] Implement journal for fixed-length items (#430)",
          "timestamp": "2025-02-04T19:27:31Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/7ebb4f88af332eda429c559e840d948a9d255565"
        },
        "date": 1738756107300,
        "tool": "cargo",
        "benches": [
          {
            "name": "archive::hashmap_iteration/n=100000 k=4",
            "value": 5550824,
            "range": "± 384918",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=8",
            "value": 7240023,
            "range": "± 654954",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=16",
            "value": 7848792,
            "range": "± 567642",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=100000 k=32",
            "value": 9450953,
            "range": "± 454935",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=4",
            "value": 64048863,
            "range": "± 1152311",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=8",
            "value": 68182171,
            "range": "± 1232762",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=16",
            "value": 72574669,
            "range": "± 478404",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=1000000 k=32",
            "value": 175996435,
            "range": "± 6577854",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=4",
            "value": 726632459,
            "range": "± 12176917",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=8",
            "value": 749172195,
            "range": "± 48785828",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=16",
            "value": 796722801,
            "range": "± 21848464",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_iteration/n=10000000 k=32",
            "value": 2230590637,
            "range": "± 39543866",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=100000 k=4",
            "value": 5865085,
            "range": "± 108367",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=1000000 k=4",
            "value": 110768168,
            "range": "± 2073507",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert_fixed/n=10000000 k=4",
            "value": 1562854891,
            "range": "± 27524690",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=4",
            "value": 11875475,
            "range": "± 233192",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=8",
            "value": 12038624,
            "range": "± 340735",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=16",
            "value": 12404307,
            "range": "± 501344",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=100000 k=32",
            "value": 12930095,
            "range": "± 507925",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=4",
            "value": 380864709,
            "range": "± 13798120",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=8",
            "value": 396987250,
            "range": "± 29094977",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=16",
            "value": 403999946,
            "range": "± 32229233",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=1000000 k=32",
            "value": 452649363,
            "range": "± 24577773",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=4",
            "value": 3462042493,
            "range": "± 101542312",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=8",
            "value": 3965861696,
            "range": "± 90596314",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=16",
            "value": 3856692257,
            "range": "± 93244334",
            "unit": "ns/iter"
          },
          {
            "name": "archive::hashmap_insert/n=10000000 k=32",
            "value": 4130521881,
            "range": "± 143698859",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000",
            "value": 2560210,
            "range": "± 4279",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=100000",
            "value": 25775159,
            "range": "± 255481",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=1000000",
            "value": 268488063,
            "range": "± 205297",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=5000000",
            "value": 1354381679,
            "range": "± 1106845",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append/n=10000000",
            "value": 2719444520,
            "range": "± 7330005",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=100",
            "value": 23590,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=1000",
            "value": 250786,
            "range": "± 2208",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=10000",
            "value": 2583536,
            "range": "± 6918",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000 add=50000",
            "value": 12818912,
            "range": "± 17233",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=100",
            "value": 25507,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=1000",
            "value": 256053,
            "range": "± 6319",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=10000",
            "value": 2558791,
            "range": "± 6563",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=100000 add=50000",
            "value": 13189663,
            "range": "± 123785",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=100",
            "value": 431649,
            "range": "± 7518",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=1000",
            "value": 671713,
            "range": "± 5421",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=10000",
            "value": 3031024,
            "range": "± 4900",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=1000000 add=50000",
            "value": 14657958,
            "range": "± 30519",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=100",
            "value": 1724934,
            "range": "± 62823",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=1000",
            "value": 1923381,
            "range": "± 49400",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=10000",
            "value": 4326438,
            "range": "± 54138",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=5000000 add=50000",
            "value": 15242556,
            "range": "± 61514",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=100",
            "value": 3055467,
            "range": "± 82347",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=1000",
            "value": 3352908,
            "range": "± 44002",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=10000",
            "value": 5687112,
            "range": "± 50136",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::append_additional/start=10000000 add=50000",
            "value": 16437254,
            "range": "± 54198",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=2 samples=100",
            "value": 293044,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5 samples=100",
            "value": 352525,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=10 samples=100",
            "value": 447306,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=25 samples=100",
            "value": 737690,
            "range": "± 3419",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=50 samples=100",
            "value": 1223178,
            "range": "± 592",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=100 samples=100",
            "value": 2193838,
            "range": "± 1168",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=250 samples=100",
            "value": 5108915,
            "range": "± 1967",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=500 samples=100",
            "value": 9964139,
            "range": "± 14470",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=1000 samples=100",
            "value": 19685622,
            "range": "± 38728",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000 range=5000 samples=100",
            "value": 97853365,
            "range": "± 128346",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=2 samples=100",
            "value": 357906,
            "range": "± 1248",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5 samples=100",
            "value": 419438,
            "range": "± 1444",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=10 samples=100",
            "value": 513191,
            "range": "± 2131",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=25 samples=100",
            "value": 806823,
            "range": "± 1802",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=50 samples=100",
            "value": 1292914,
            "range": "± 1486",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=100 samples=100",
            "value": 2270255,
            "range": "± 1917",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=250 samples=100",
            "value": 5176550,
            "range": "± 1383",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=500 samples=100",
            "value": 10025973,
            "range": "± 18697",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=1000 samples=100",
            "value": 19722909,
            "range": "± 50156",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=100000 range=5000 samples=100",
            "value": 97914269,
            "range": "± 28747",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=2 samples=100",
            "value": 422960,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5 samples=100",
            "value": 480004,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=10 samples=100",
            "value": 574330,
            "range": "± 919",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=25 samples=100",
            "value": 867336,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=50 samples=100",
            "value": 1356264,
            "range": "± 1578",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=100 samples=100",
            "value": 2327344,
            "range": "± 2269",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=250 samples=100",
            "value": 5234019,
            "range": "± 1433",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=500 samples=100",
            "value": 10084141,
            "range": "± 15275",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=1000 samples=100",
            "value": 19792631,
            "range": "± 36482",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=1000000 range=5000 samples=100",
            "value": 97877041,
            "range": "± 2000744",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=2 samples=100",
            "value": 485001,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5 samples=100",
            "value": 543535,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=10 samples=100",
            "value": 638185,
            "range": "± 1383",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=25 samples=100",
            "value": 937758,
            "range": "± 2011",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=50 samples=100",
            "value": 1428283,
            "range": "± 2055",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=100 samples=100",
            "value": 2391047,
            "range": "± 1255",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=250 samples=100",
            "value": 5314364,
            "range": "± 1629",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=500 samples=100",
            "value": 10169562,
            "range": "± 10665",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=1000 samples=100",
            "value": 19882700,
            "range": "± 24005",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=5000000 range=5000 samples=100",
            "value": 97860685,
            "range": "± 14292",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=2 samples=100",
            "value": 498611,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5 samples=100",
            "value": 560276,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=10 samples=100",
            "value": 662397,
            "range": "± 746",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=25 samples=100",
            "value": 953025,
            "range": "± 2037",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=50 samples=100",
            "value": 1438771,
            "range": "± 2370",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=100 samples=100",
            "value": 2409719,
            "range": "± 1162",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=250 samples=100",
            "value": 5321350,
            "range": "± 1871",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=500 samples=100",
            "value": 10172792,
            "range": "± 16250",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=1000 samples=100",
            "value": 19873896,
            "range": "± 49372",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_many_elements/n=10000000 range=5000 samples=100",
            "value": 98031002,
            "range": "± 8542",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000 samples=100",
            "value": 230102,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=100000 samples=100",
            "value": 290099,
            "range": "± 1013",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=1000000 samples=100",
            "value": 341888,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=5000000 samples=100",
            "value": 393023,
            "range": "± 396",
            "unit": "ns/iter"
          },
          {
            "name": "mmr::prove_single_element/n=10000000 samples=100",
            "value": 409460,
            "range": "± 670",
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
          "id": "7889ca352c8fd5f4225e407ddf6b9929a602c406",
          "message": "[CI] Add WASM Support for `consensus` and `storage` (#391)",
          "timestamp": "2025-01-23T18:50:59Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/7889ca352c8fd5f4225e407ddf6b9929a602c406"
        },
        "date": 1737719519943,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2740,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 5097,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14062,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 202063,
            "range": "± 8296",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 801522,
            "range": "± 108426",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 4390286,
            "range": "± 16605",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 16846648,
            "range": "± 70668",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 88925694,
            "range": "± 163103",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4543,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11875,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41700,
            "range": "± 5586",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 633918,
            "range": "± 1948",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2549346,
            "range": "± 5542",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10297881,
            "range": "± 66286",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 44377764,
            "range": "± 206482",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 179684933,
            "range": "± 551552",
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
          "id": "d2991cbdd8c86bafdac2f10f8bcd7ae2557169ef",
          "message": "[storage/mmr] add serialization/deserialization for Proof structure (#403)",
          "timestamp": "2025-01-25T00:26:31Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/d2991cbdd8c86bafdac2f10f8bcd7ae2557169ef"
        },
        "date": 1737805862828,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2718,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 5002,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14047,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 200786,
            "range": "± 15505",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 800543,
            "range": "± 108601",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 4324203,
            "range": "± 24526",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 16750176,
            "range": "± 64062",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 88899874,
            "range": "± 337724",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4531,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 12006,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41740,
            "range": "± 3872",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 642554,
            "range": "± 4097",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2578870,
            "range": "± 6695",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10077005,
            "range": "± 40603",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 43762578,
            "range": "± 130428",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 176594325,
            "range": "± 488559",
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
          "id": "5924bebc95371c8cf9fb46aa384f61e6c0413d66",
          "message": "[storage/mmr] Simplify Proof Serialization (#405)",
          "timestamp": "2025-01-26T00:55:28Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/5924bebc95371c8cf9fb46aa384f61e6c0413d66"
        },
        "date": 1737892286547,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2690,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 4979,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14306,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 197292,
            "range": "± 6950",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 802346,
            "range": "± 105998",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 4338384,
            "range": "± 15834",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 16944367,
            "range": "± 48381",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 89318685,
            "range": "± 217267",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4532,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11998,
            "range": "± 2071",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41806,
            "range": "± 2582",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 652994,
            "range": "± 7825",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2576312,
            "range": "± 4681",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10110341,
            "range": "± 39927",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 43578726,
            "range": "± 99570",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 176576966,
            "range": "± 384657",
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
          "id": "b65c588c9ebecf5602ff3b3f8c4c69dd2002fdc7",
          "message": "[docs] Use dates instead of commits (#417)",
          "timestamp": "2025-01-29T06:00:20Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/b65c588c9ebecf5602ff3b3f8c4c69dd2002fdc7"
        },
        "date": 1738151521339,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2696,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 4977,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14067,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 198511,
            "range": "± 6631",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 803245,
            "range": "± 106856",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 4379112,
            "range": "± 123830",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 17106103,
            "range": "± 151569",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 91156695,
            "range": "± 306492",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4503,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11826,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41206,
            "range": "± 3609",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 635932,
            "range": "± 4500",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2547893,
            "range": "± 6166",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10186943,
            "range": "± 29013",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 43052635,
            "range": "± 120074",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 177482248,
            "range": "± 589417",
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
          "id": "4d9dd03826a4e1962db6bd7d9719289903ed158d",
          "message": "[cryptography/{ed25519,secp256r1] Add signature generation benchmarks (#420)",
          "timestamp": "2025-01-29T18:31:04Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/4d9dd03826a4e1962db6bd7d9719289903ed158d"
        },
        "date": 1738181552223,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2694,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 4995,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14039,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 199496,
            "range": "± 15248",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 801143,
            "range": "± 104319",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 4318437,
            "range": "± 8227",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 16980564,
            "range": "± 132814",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 91402026,
            "range": "± 595393",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4504,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11857,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41179,
            "range": "± 3372",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 632169,
            "range": "± 2126",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2539566,
            "range": "± 13572",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10115236,
            "range": "± 27144",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 43671915,
            "range": "± 113993",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 177045920,
            "range": "± 580400",
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
          "id": "c7faa8e0dcbb520ff0aa709e9e060dffe2359a5d",
          "message": "[cryptography/hasher] Remove `DIGEST_LENGTH` const (#422)",
          "timestamp": "2025-01-30T00:30:25Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/c7faa8e0dcbb520ff0aa709e9e060dffe2359a5d"
        },
        "date": 1738237910731,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2725,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 4982,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14170,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 220318,
            "range": "± 18557",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 800708,
            "range": "± 108115",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 4300408,
            "range": "± 10518",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 17025933,
            "range": "± 74541",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 89687181,
            "range": "± 716944",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4565,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 12007,
            "range": "± 1551",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41736,
            "range": "± 3967",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 642049,
            "range": "± 3135",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2575860,
            "range": "± 2935",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10089221,
            "range": "± 26419",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 43748765,
            "range": "± 90650",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 177344760,
            "range": "± 557105",
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
          "id": "410e7bd803201fbb8b3ab2f647a14741df0f8cf3",
          "message": "[consensus] Use `cryptography::Digest` (#426)",
          "timestamp": "2025-01-30T23:27:41Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/410e7bd803201fbb8b3ab2f647a14741df0f8cf3"
        },
        "date": 1738324232965,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2729,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 4976,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14108,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 199435,
            "range": "± 15074",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 801683,
            "range": "± 103206",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 4319782,
            "range": "± 29666",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 16959541,
            "range": "± 78533",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 90373740,
            "range": "± 389364",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4511,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11842,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41088,
            "range": "± 3391",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 634217,
            "range": "± 22729",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2553442,
            "range": "± 20809",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 9652076,
            "range": "± 70104",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 43635206,
            "range": "± 189128",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 176504448,
            "range": "± 770230",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Danil",
            "username": "Danyylka",
            "email": "37103154+Danyylka@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cee6569e91f25c8ff57604d30828b1a844682755",
          "message": "fix grammar error (#433)",
          "timestamp": "2025-02-01T21:35:03Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/cee6569e91f25c8ff57604d30828b1a844682755"
        },
        "date": 1738496972461,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2695,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 4993,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14134,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 200654,
            "range": "± 15225",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 809093,
            "range": "± 105808",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 4356403,
            "range": "± 30451",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 16889598,
            "range": "± 84420",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 90701474,
            "range": "± 256777",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4493,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11857,
            "range": "± 1278",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41177,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 638490,
            "range": "± 12028",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2540582,
            "range": "± 8550",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10062904,
            "range": "± 47851",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 43728855,
            "range": "± 136936",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 177495611,
            "range": "± 571273",
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
          "id": "7ebb4f88af332eda429c559e840d948a9d255565",
          "message": "[commonware-storage] Implement journal for fixed-length items (#430)",
          "timestamp": "2025-02-04T19:27:31Z",
          "url": "https://github.com/commonwarexyz/monorepo/commit/7ebb4f88af332eda429c559e840d948a9d255565"
        },
        "date": 1738756369541,
        "tool": "cargo",
        "benches": [
          {
            "name": "public_key::sender_send/len=1024",
            "value": 2686,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4096",
            "value": 4976,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16384",
            "value": 14066,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=262144",
            "value": 198796,
            "range": "± 14968",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=1048576",
            "value": 799847,
            "range": "± 110324",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=4194304",
            "value": 4370050,
            "range": "± 36482",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=16777216",
            "value": 16830430,
            "range": "± 77084",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::sender_send/len=67108864",
            "value": 88350058,
            "range": "± 232112",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1024",
            "value": 4503,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4096",
            "value": 11854,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16384",
            "value": 41315,
            "range": "± 3420",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=262144",
            "value": 634781,
            "range": "± 2793",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=1048576",
            "value": 2540332,
            "range": "± 9436",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=4194304",
            "value": 10130779,
            "range": "± 46424",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=16777216",
            "value": 43693724,
            "range": "± 127536",
            "unit": "ns/iter"
          },
          {
            "name": "public_key::receiver_receive/len=67108864",
            "value": 176647234,
            "range": "± 270519",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}