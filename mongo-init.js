db = db.getSiblingDB('nodecourse')

db.createUser({
 user: "devuser",
 pwd: "devpass",
 roles: [{
  role: "readWrite",
  db: "nodecourse"
 }]
});
