const googleSearch = require('./script.js')
dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
]

it('is searching google to return empty array if string not included', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([])

})

it('is searching google to return data if string included', () => {
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
})