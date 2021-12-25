1. db.data.aggregate([{$match: {isActive: true}}]).pretty();
3. db.data.aggregate([{$match: {gender: "male"}}]).pretty();
4. db.data.aggregate([{$match: {gender: "male"}}, {$match: {isActive: true}}]).pretty()
5. db.data.aggregate([{$match: {gender: "male"}}, {$match: {$in: {name: "blake"}}}]).pretty()
6. db.data.aggregate([{$match: {age: {$gt: 39}}}, {$match: {eyeColor: "green"}}])
7. db.data.aggregate([{$match: {"company.location.country": "USA"}}, {$match: {eyeColor: "blue"}}])
8. db.data.aggregate([{$match: {gender: "female"}},{$match: {"company.location.country": "Germany"}}, {$match: {eyeColor: "green"}}, {$match: {favoriteFruit: "apple"}}])
9. db.data.aggregate([{
  $group:{
    _id: '$gender',
    count: {$sum: 1}
  }
}])
10. db.data.aggregate([{$match: {eyeColor: "green"}}, {$group: {
  _id: null,
  count: {$sum: 1}
}}])
11. db.data.aggregate([{$match: {gender: "female"}},{$match: {eyeColor: "brown"}}, {$group: {
  _id: null,
  count: {$sum: 1}
}}])
12. db.data.aggregate([{$group: {
  _id: "$eyeColor",
  count: {$sum: 1},
}}])
13. db.data.aggregate([{$match: {gender: "male"}}, {$unwind: "$tags"}, {$group: {
  _id: "$tags",
  count: {$sum: 1}
}}])
14. db.data.aggregate([{$group: {
  _id: null,
  avg_age: {$avg: "$age"},
}}])
15. db.data.aggregate([{$group: {
  _id: "$gender",
  avg_age: {$avg: "$age"},
}}])
16. db.data.aggregate([{$group: {
  _id: null,
  max: {$max: "$age"} 
}}])
17. db.data.aggregate([{$group: {
  _id: null,
  min: {$min: "$age"}
}}])
18. db.data.aggregate([{$group: {
  _id: null,
  sum_age: {$sum: "$age"}
}}])
19. db.data.aggregate([{$match: {gender: "male"}},{$group: {
  _id: "$eyeColor",
  count: {$sum: 1}
}}])
20. db.data.aggregate([{$match: {gender: "female"}},{$group: {
  _id: "$age",
  count: {$sum: 1}
}}])
21. db.data.aggregate([{$match: {gender: "male"}}, {$match: {eyeColor: "blue"}}, {$match: {"company.location.country": "Germany"}}, {$group: {
  _id: null,
  men_in_germany: {$sum: 1}
}}])
22. db.data.aggregate([{$unwind: "$tags"}, {$group: {
  _id: "$tags",
  count: {$sum: 1}
}}])
23. db.data.aggregate([{$match: {favoriteFruit: "banana"}}])