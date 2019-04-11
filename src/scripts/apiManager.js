
export default {
    getPlaces () {
        return fetch("http://localhost:8088/places")
        .then(places => places.json())
    },
    getInterests () {
        return fetch ("http://localhost:8088/interests?_expand=place")
        .then(r => r.json())
    },
    postInterest (newInterest) {
        return fetch("http://localhost:8088/interests", {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(newInterest)
        }).then(int => int.json())
    },
    patchInterest (id, interestObj) {
        return fetch(`http://localhost:8088/interests/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(interestObj)
        }).then(r => r.json())
    },
    deleteInterest() {
        return fetch(`http://localhost:8088/interests/${id}`, {
            method: "DELETE"
        })
    }
}