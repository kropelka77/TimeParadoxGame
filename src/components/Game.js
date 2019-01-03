// const examples = [
//   {
//     boardState: [
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}],
//                   [{user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}],
//                   [{user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}],
//                   [{user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}]
//                 ],
//     labels: [
//               [3, 0, 3, 1, 2, 1, 0, 4],
//               [2, 0, 4, 0, 3, 1, 2, 2]
//             ],
//   },
//   {
//     boardState: [
//                   [{user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}],
//                   [{user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}]
//     ],
//     labels: [
//               [2, 0, 3, 1, 0, 2, 2, 2],
//               [3, 1, 0, 2, 0, 3, 0, 3]
//             ],
//   },
//   {
//     boardState: [
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}],
//                   [{user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}]
//     ],
//     labels: [
//               [1, 1, 2, 2, 1, 1, 2, 2],
//               [3, 0, 1, 1, 1, 2, 1, 3]
//             ],
//   },
//   {
//     boardState: [
//                   [{user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}],
//                   [{user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "tardis", correct: "tardis"}]
//     ],
//     labels: [
//               [2, 2, 1, 2, 1, 1, 2, 1],
//               [2, 0, 3, 0, 3, 0, 3, 1]
//             ],
//   },
//   {
//     boardState: [
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}]
//     ],
//     labels: [
//               [1, 2, 2, 0, 3, 1, 2, 1],
//               [2, 2, 1, 2, 1, 1, 2, 1]
//             ],
//   },
//   {
//     boardState: [
//                   [{user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}],
//                   [{user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}]
//     ],
//     labels: [
//               [2, 0, 2, 2, 1, 1, 2, 2],
//               [3, 1, 2, 1, 3, 0, 1, 1]
//             ],
//   },
//   {
//     boardState: [
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}],
//                   [{user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}]
//     ],
//     labels: [
//               [1, 1, 2, 1, 2, 1, 2, 2],
//               [2, 1, 0, 2, 1, 2, 0, 4]
//             ],
//   },
//   {
//     boardState: [
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}],
//                   [{user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}]
//     ],
//     labels: [
//               [1, 3, 1, 2, 1, 1, 1, 2],
//               [2, 1, 1, 2, 2, 0, 2, 2]
//             ],
//   },
//   {
//     boardState: [
//                   [{user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}]
//     ],
//     labels: [
//               [2, 2, 0, 1, 2, 2, 0, 3],
//               [3, 1, 3, 0, 1, 1, 2, 1]
//             ],
//   },
//   {
//     boardState: [
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "doctor"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}],
//                   [{user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}, {user: "empty", correct: "x"}],
//                   [{user: "empty", correct: "x"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}, {user: "empty", correct: "x"}, {user: "tardis", correct: "tardis"}, {user: "empty", correct: "doctor"}]
//     ],
//     labels: [
//               [1, 2, 2, 1, 2, 1, 0, 3],
//               [1, 3, 0, 1, 1, 3, 0, 3]
//             ],
//   },
// ]


// export function getGame() {
//   return examples[Math.floor(Math.random()*10)];
// }


//GENERATE NEW GAME//
function setInitialState() {
  let initalBoard = [];
  for (let i=0; i<8; i++) {
    initalBoard.push([])
    for (let j=0; j<8; j++) {
      initalBoard[i].push({user: "empty", correct: "x"});
    }
  }

  const possibleDoctors = [];
  for (let i=0; i<8; i++) {
    for (let j=0; j<8; j++) {
      possibleDoctors.push([i, j]);
    }
  }

  return {board: initalBoard, possibleDoctors};
}

function placeTardis(doctor, board) {
  let possibleTardis = [
    [doctor[0], (doctor[1] - 1)],
    [doctor[0], (doctor[1] + 1)],
    [(doctor[0] - 1), doctor[1]],
    [(doctor[0] + 1), doctor[1]],
  ]

  possibleTardis = possibleTardis.filter(cell => {
    return (cell[0] >= 0 && cell[0] < board.length) &&
           (cell[1] >= 0 && cell[1] < board.length)
  });

  while (possibleTardis.length > 0) {
    let randomTardis = Math.floor(Math.random() * possibleTardis.length);
    let tardis = possibleTardis.splice(randomTardis, 1)[0];
    if (board[tardis[0]][tardis[1]].correct === "x") {
      board[tardis[0]][tardis[1]].correct = "tardis";
      board[tardis[0]][tardis[1]].user = "tardis";
      return true;
    }
  }

  return false;
}

function setSafeZone(doctor) {
  let remove = [];

  for (let i = doctor[0] - 1; i <= doctor[0] + 1; i++) {
    for (let j = doctor[1] - 1; j <= doctor[1] + 1; j++) {
      remove.push([i,j])
    }
  }

  return remove;
}

function placeDoctor({board, possibleDoctors}) {
  let randomCell = Math.floor(Math.random() * possibleDoctors.length);
  let doctor = possibleDoctors.splice(randomCell, 1)[0];

  if (!placeTardis(doctor, board)) {
    return;
  };

  board[doctor[0]][doctor[1]].correct = "doctor";

  let remove = setSafeZone(doctor);

  // Updates possibleDoctors
  for (var j = 0; j < remove.length; j++) {
    for (var i = 0; i < possibleDoctors.length; i++) {
      if (possibleDoctors[i].toString() === remove[j].toString()) {
        possibleDoctors.splice(i, 1);
      }
    }
  }
}

function createBoard() {
  const initialState = setInitialState();

  let board = initialState.board;
  let possibleDoctors = initialState.possibleDoctors;

  while (possibleDoctors.length > (Math.floor(Math.random() * 5) + 1)) {
    placeDoctor(initialState);
  }

  return board;
}

function createLabels(board) {
  let labels = [[], []];
  for (let i=0; i<board.length; i++) {
    labels[1].push(board[i].filter(cell => cell.correct === 'doctor').length);
    let count = 0;
    for (let j=0; j<board.length; j++) {
      if (board[j][i].correct === 'doctor') {
        count++;
      }
    }
    labels[0].push(count);
  }
  return labels;
}

function createGame() {
  const boardState = createBoard();
  const labels = createLabels(boardState);

  return {boardState, labels};
}

export function getGame() {
   return createGame();
}
