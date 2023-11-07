// what are generatos in javascript


function * numberGen()
{
    yield 1;
    yield 2;
}

const gen = numberGen();
console.log('-- What does next() return --');
console.log(gen.next());
console.log('-----------------------------');

console.log('-- What does next() return --');
console.log(gen.return());
console.log('-----------------------------');
// returns an object
// { value: undefined, done: true }

const {value, done} = gen.next();
console.log('-- Can be Destructured as It is an object--');
console.log(value);
console.log('-- done returns falls untill the yeild is there --');
console.log(done);

const complete = gen.next().done;
console.log('-- As the yield finished done equaled true--');
console.log(complete);

console.log('-----------------------------');
console.log(gen.next());
console.log('-----------------------------');
/***
 * In Python
 * def mygenerator():
    print('First item')
    yield 10

    print('Second item')
    yield 20

    print('Last item')
    yield 30
    
        gen = mygenerator()
        val = next(gen) #First item
        print(val) #10

        val = next(gen) #Second item
        print(val) #20

        val = next(gen) #Last item
        print(val) #30

        val = next(gen) #error
*/