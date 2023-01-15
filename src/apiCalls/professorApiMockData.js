export const professorList = [
    {
        "_id": 1,
        "firstName": "Jan",
        "lastName": "Kowalski",
        "email": "jan.kowalski@uot.com",
        "specialization": "matematyka",
    },
    {
        "_id": 2,
        "firstName": "Adam",
        "lastName": "Zieliński",
        "email": "adam.zielinski@uot.com",
        "specialization": "bazy danych",
    },
    {
        "_id": 3,
        "firstName": "Marian",
        "lastName": "Nowak",
        "email": "marian.nowak@uot.com",
        "specialization": "geometria",
    }
]

export const professorDetailsList = [
    {
        "_id": 1,
        "firstName": "Jan",
        "lastName": "Kowalski",
        "email": "jan.kowalski@uot.com",
        "specialization": "matematyka",
        "lectures": [
            {
                "_id": 1,
                "name": "Matematyka Dyskretna",
                "dateFrom": "2001-01-01T00:00:00.000Z",
                "dateTo": "2009-01-01T00:00:00.000Z",
                "prof_id": 1,
                "dept_id": 1,
                "duration": "90",
                "department": {
                    _id: 1, name: 'Matematyka', "totalHours": "50",
                    "description": "W trakcie studiów na kierunku matematyka studenci zdobywają wiedzę (...)",
                },
            },
        ]
    },
    {
        "_id": 2,
        "firstName": "Adam",
        "lastName": "Zieliński",
        "email": "adam.zielinski@uot.com",
        "specialization": "bazy danych",
        "lectures": [
            {
                "_id": 2,
                "name": "Technologia Internetu",
                "dateFrom": "2001-01-01T00:00:00.000Z",
                "dateTo": "2009-01-01T00:00:00.000Z",
                "prof_id": 1,
                "dept_id": 2,
                "duration": "90",
                "department": {
                    _id: 1, name: 'Matematyka', "totalHours": "50",
                    "description": "W trakcie studiów na kierunku matematyka studenci zdobywają wiedzę (...)",
                },
            },
        ]
    },
    {
        "_id": 3,
        "firstName": "Marian",
        "lastName": "Nowak",
        "email": "marian.nowak@uot.com",
        "specialization": "geometria",
        "lectures": []
    }
]

