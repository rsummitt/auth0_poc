#!/bin/bash
set -e

mongo <<EOF
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