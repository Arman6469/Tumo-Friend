db.students.remove({});
db.students.insertMany([{
  "email": "arman.umroyan.y",
  "firstName": "Arman",
  "lastName": "Umroyan",
  "password": "password",
  "learningTargets": [
    "Web Development",
    "Game Development",
    "Programming"
  ],
  "location": "Yerevan"
}, {
  "email": "tigran.muradyan.y@tumo.org",
  "firstName": "Tigran",
  "lastName": "Mura",
  "password": "password",
  "learningTargets": [
    "Web Development",
  ],
  "location": "Yerevan"
}
])

db.students.createIndex({ lastName: "text", firstName: "text", location: "text" })
db.students.createIndex({ learningTargets: 1})
