// MongoDB Homework Module 3.1

// Create DB called 'Music'
use Music

// Create collection for 'Songs'
db.createCollection('Songs')

// Insert 10 dummy data into 'Songs' collection
db.Songs.insertMany([
    {
        "title": "Song 1",
        "artists": [
            "Artist 1",
            "Artist 2"
        ],
        "album": "Album 1"
    },
    {
        "title": "Song 2",
        "artists": [
            "Artist 2"
        ],
        "album": "Album 1"
    },
    {
        "title": "Song 3",
        "artists": [
            "Artist 1",
            "Artist 2"
        ],
        "album": "Album 2"
    },
    {
        "title": "Song 4",
        "artists": [
            "Artist 1",
        ],
        "album": "Album 2"
    },
    {
        "title": "Song 5",
        "artists": [
            "Artist 3",
            "Artist 4"
        ],
        "album": "Album 3"
    },
    {
        "title": "Song 6",
        "artists": [
            "Artist 4",
        ],
        "album": "Album 3"
    },
    {
        "title": "Song 7",
        "artists": [
            "Artist 3",
        ],
        "album": "Album 4"
    },
    {
        "title": "Song 8",
        "artists": [
            "Artist 1",
            "Artist 3"
        ],
        "album": "Album 4"
    },
    {
        "title": "Song 9",
        "artists": [
            "Artist 2",
            "Artist 4"
        ],
        "album": "Album 5"
    },
    {
        "title": "Song 10",
        "artists": [
            "Artist 1",
            "Artist 4"
        ],
        "album": "Album 5"
    }
])

// Retrieve all songs
db.Songs.find()

// create collection for 'Artists'
db.createCollection('Artists')

// Insert 10 dummy data into 'Artists' collection
db.Artists.insertMany(
    [
        {
            "name": "Artist A",
            "dob": "01-01-2001",
            "genres": [
                "Genre 1",
                "Genre 2",
            ]
        },
        {
            "name": "Artist B",
            "dob": "02-02-2002",
            "genres": [
                "Genre 2",
                "Genre 3",
            ]
        },
        {
            "name": "Artist C",
            "dob": "03-03-2003",
            "genres": [
                "Genre 1",
                "Genre 3",
            ]
        },
        {   
            "name": "Artist D",
            "dob": "04-04-2004",
            "genres": [
                "Genre 1",
                "Genre 2",
                "Genre 3",
            ]
        },
        {
            "name": "Artist E",
            "dob": "05-05-2005",
            "genres": [
                "Genre 2",
                "Genre 3",
            ]
        },
        {
            "name": "Artist F",
            "dob": "06-06-2006",
            "genres": [
                "Genre 2",
            ]
        },
        {
            "name": "Artist G",
            "dob": "07-07-2007",
            "genres": [
                "Genre 1",
                "Genre 3",
            ]
        },
        {
            "name": "Artist H",
            "dob": "08-08-2008",
            "genres": [
                "Genre 1",
                "Genre 4",
            ]
        },
        {
            "name": "Artist I",
            "dob": "09-09-2009",
            "genres": [
                "Genre 4",
            ]
        },
        {
            "name": "Artist J",
            "dob": "10-10-2010",
            "genres": [
                "Genre 3",
                "Genre 4",
            ]
        }     
    ]
)

// Retrieve all artists
db.Artists.find()

// create collection for 'Popular Songs'
db.createCollection('PopularSongs')

// Insert 10 dummy data into 'Popular Songs' collection
db.PopularSongs.insertMany(
    [
        {
            "title": "Song 1",
            "playedTime": 45,
            "period": "01-01-2023 to 31-01-2023"
        },
        {
            "title": "Song 2",
            "playedTime": 40,
            "period": "01-01-2023 to 31-01-2023"
        },
        {
            "title": "Song 3",
            "playedTime": 35,
            "period": "01-01-2023 to 31-01-2023"
        },
        {
            "title": "Song 4",
            "playedTime": 30,
            "period": "01-01-2023 to 31-01-2023"
        },
        {
            "title": "Song 5",
            "playedTime": 25,
            "period": "01-01-2023 to 31-01-2023"
        },
        {
            "title": "Song 6",
            "playedTime": 20,
            "period": "01-01-2023 to 31-01-2023"
        },
        {
            "title": "Song 7",
            "playedTime": 15,
            "period": "01-01-2023 to 31-01-2023"
        },
        {
            "title": "Song 8",
            "playedTime": 10,
            "period": "01-01-2023 to 31-01-2023"
        },
        {
            "title": "Song 9",
            "playedTime": 5,
            "period": "01-01-2023 to 31-01-2023"
        },
        {
            "title": "Song 10",
            "playedTime": 1,
            "period": "01-01-2023 to 31-01-2023"
        }
    ]
)

// Retrieve all popular songs
db.PopularSongs.find()

