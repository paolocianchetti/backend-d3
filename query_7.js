// Query n.7
db.getCollection('D3').find(
    { company: 'FITCORE' },
    { email: 1, _id: 0 }
);

// 1 result
[{
    "email": "victoria.solis@fitcore.biz"
}]