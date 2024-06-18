const text = require('./text')

test('mostre um texto com = a', () =>{
    expect(text('rafa')).toBe('rafaa');
})