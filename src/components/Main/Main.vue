
<script setup>
import { reactive } from 'vue'
import Hierarchy from "@/components/Hierarchy.vue";

// const data = reactive([
//     {
//       name: 'Пермь',
//       id: 1234,
//       children: [
//         {
//           name: 'Ленинский',
//           children: [
//             {
//               name: 'Куйбышева',
//               children: [
//                 {
//                   name: '1',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '2',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '3',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '4',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '5',
//                   children: ['1', '2', '3', '4']
//                 },
//               ]
//             },
//             {
//               name: 'Ленина',
//               children: [
//                 {
//                   name: '1',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '2',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '3',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '4',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '5',
//                   children: ['1', '2', '3', '4']
//                 },
//               ]
//             },
//             {
//               name: 'Революции',
//               children: [
//                 {
//                   name: '1',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '2',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '3',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '4',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '5',
//                   children: ['1', '2', '3', '4']
//                 },
//               ]
//             },
//           ]
//         },
//         {
//           name: 'Дзержинский',
//           street: [
//             {
//               name: 'Парковый',
//               children: [
//                 {
//                   name: '1',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '2',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '3',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '4',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '5',
//                   children: ['1', '2', '3', '4']
//                 },
//               ]
//             },
//             {
//               name: 'Куфонина',
//               children: [
//                 {
//                   name: '1',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '2',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '3',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '4',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '5',
//                   children: ['1', '2', '3', '4']
//                 },
//               ]
//             },
//             {
//               name: 'Пожарского',
//               children: [
//                 {
//                   name: '1',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '2',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '3',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '4',
//                   children: ['1', '2', '3', '4']
//                 },
//                 {
//                   name: '5',
//                   children: ['1', '2', '3', '4']
//                 },
//               ]
//             }
//           ]
//         },
//       ]
//     }
// ])

const data1 = reactive([
  {
    name: 'Пермь',
    id: 12341,
    hierarchyLevel: 0,
    children: [
      {
        name: 'Ленинский',
        id: 12345,
        hierarchyLevel: 1,
        children: [
          {
            name: 'Куйбышева',
            id: 12346,
            hierarchyLevel: 2,
            children: [
              {
                name: '1',
                id: 12347,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 90911,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 56432,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 87655,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '2',
                id: 12348,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 43231,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 48766,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 62342,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '3',
                id: 12349,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 89001,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 12493,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 98713,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '4',
                id: 64335,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 53265,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 12547,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 98763,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '5',
                id: 64413,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 76892,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 97866,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 67912,
                    hierarchyLevel: 4,
                  },
                ]
              },
            ]
          },
          {
            name: 'Ленина',
            id: 62413,
            hierarchyLevel: 2,
            children: [
              {
                name: '1',
                id: 64321,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 10842,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 108983,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 43879,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '2',
                id: 16322,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 35723,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 35262,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 978352,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '3',
                id: 12087,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 108677,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 235235,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 235235,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '4',
                id: 12664,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 89912,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 325235,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 7636346,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '5',
                id: 19787,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 43523,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 523512,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 67432,
                    hierarchyLevel: 4,
                  },
                ]
              },
            ]
          },
          {
            name: 'Революции',
            id: 6234234,
            hierarchyLevel: 2,
            children: [
              {
                name: '1',
                id: 2355662,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 89001,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 12493,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 98713,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '2',
                id: 23421,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 325231,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 763433,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 97891345,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '3',
                id: 16364234,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 89001,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 12493,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 98713,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '4',
                id: 2352124,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 99913,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 2235622,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 99312,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '5',
                id: 2352141,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 89001,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 12493,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 2352356242,
                    hierarchyLevel: 4,
                  },
                ]
              },
            ]
          },
        ]
      },
      {
        name: 'Дзержинский',
        id: 8913659,
        hierarchyLevel: 1,
        children: [
          {
            name: 'Парковый',
            id: 123145,
            hierarchyLevel: 2,
            children: [
              {
                name: '1',
                id: 975982,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 24352,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 2351,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 63,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '2',
                id: 123,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 345,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 56783212,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 53252356,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '3',
                id: 643634,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 24352,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 634346,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 987113,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '4',
                id: 62465222,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 5352265,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 1235547,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 9862763,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '5',
                id: 2323566,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 76444892,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 97333866,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 6792212,
                    hierarchyLevel: 4,
                  },
                ]
              },
            ]
          },
          {
            name: 'Пожарского',
            id: 62455513,
            hierarchyLevel: 2,
            children: [
              {
                name: '1',
                id: 6433321,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 666235235,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 108111983,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 433525879,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '2',
                id: 163262462,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 3573254523,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 36435262,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 978463352,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '3',
                id: 124646087,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 10862377,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 236435235,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 23546235,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '4',
                id: 126464664,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 89946412,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 3254646235,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 763633546,
                    hierarchyLevel: 4,
                  },
                ]
              },
              {
                name: '5',
                id: 19235787,
                hierarchyLevel: 3,
                children: [
                  {
                    name: '1',
                    id: 4333235523,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '2',
                    id: 5235355212,
                    hierarchyLevel: 4,
                  },
                  {
                    name: '3',
                    id: 67111432,
                    hierarchyLevel: 4,
                  },
                ]
              },
            ]
          },
        ]
      },
    ]
  },
])

</script>

<template>
<div>
  <Hierarchy
      :data="data1"
  />
</div>
</template>

<style scoped>

</style>