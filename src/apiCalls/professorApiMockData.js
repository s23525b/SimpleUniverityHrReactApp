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
        "specialization": "informatyka",
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
                    "_id": 1,
                    "name": "Matematyka",
                    "totalHours": "50",
                    "description": "W trakcie studiów na kierunku matematyka studenci zdobywają wiedzę (...)",
                }
            },
            {
                "_id": 3,
                "name": "Podstawy GUI",
                "dateFrom": "2001-01-01T00:00:00.000Z",
                "dateTo": "2009-01-01T00:00:00.000Z",
                "prof_id": 2,
                "dept_id": 2,
                "duration": "120",
                "department": {
                    "_id": 2,
                    "name": "Informatyka",
                    "totalHours": "150",
                    "description": "W ramach wybranych przedmiotów na III roku można rozwijać się w jednej z dziedzin (...)",
                }
            }
        ]
    },
    {
        "_id": 2,
        "firstName": "Adam",
        "lastName": "Zieliński",
        "email": "adam.zielinski@uot.com",
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
                    "_id": 2,
                    "name": "Informatyka",
                    "totalHours": "50",
                }
            }
        ]
    },
    {
        "_id": 3,
        "firstName": "Marian",
        "lastName": "Nowak",
        "email": "marian.nowak@uot.com",
        "lectures": []
    }
]

