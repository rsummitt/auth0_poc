#!/bin/bash
set -e

mongo <<EOF
use admin
db.grantRolesToUser(
    "$MONGO_INITDB_ROOT_USERNAME",
    [ "readWrite", { role: "readWrite", db: "heroes"}]
)

use heroes
db.identity.insert([
    { 
        name: 'Spider-Man'
    },
    {
        name: 'Batman'
    },
    {
        name: 'Iron Man'
    }
])
EOF