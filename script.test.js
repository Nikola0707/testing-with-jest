const googleSearch = require('./script.js')
dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
]

describe('googleSearch', () => {
    it('is searching google to return empty array if string not included', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([])

    })

    it('is searching google to return data if string included', () => {
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
    })

    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    })

    it('doesn not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    })
})

