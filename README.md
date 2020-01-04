# Emulation number types for TypeScript/JavaScript

## Support next number types:

Integer types:
* Char [ 0..255 ]
* ShortInt [ -32768..32767 ]
* UnsignedShortInt [ 0..65535 ]
* Int [ -2141483648..2147483647 ]
* UnsignedInt [ 0..4294967295 ]

Float types:
* Float [ -2147483648..2147483647 ]
* LongFloat [ -9223372036854775808..9223372036854775807 ]

## Hierarchy of types

```
Char
                                    |-----|
                                    0      255
ShortInt
                        |-----|-----|-----|-----|
                  -32768            0            32767
UnsignedShortInt
                                    |-----|-----|-----|
                                    0                  65535
Int
            |-----|-----|-----|-----|-----|-----|-----|-----|
       -2141483648                  0                        2147483647
UnsignedInt
                                    |-----|-----|-----|-----|-----|
                                    0                              4294967295
Float
      |-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
2141483648.00                       0                                    2147483647.00
LongFloat
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
                                    0
```

## Examples

Use native operators for JavaScript:

```javascript
const summ = new Char(30) + new Char(50); // Sum was equal 80
const isNumber = typeof summ === 'number'; // true
const comp = new Char(10) * new Char(2); // Composition was equal 20
const diff = new Char(50) - new Char(25); // Difference was equal 25
const or = new Char(1) | new Char(3); // Result was equal 3
```

Use native operators for TypeScript:

```javascript
const summ = (new Char(30) as unknown) as number + (new Char(50) as unknown) as number; // Sum was equal 80
const isNumber = typeof summ === 'number'; // true
const comp = (new Char(10) as unknown) as number * (new Char(2) as unknown) as number; // Composition was equal 20
const diff = (new Char(50) as unknown) as number - (new Char(25) as unknown) as number; // Difference was equal 25
const or = (new Char(1) as unknown) as number | (new Char(3) as unknown) as number; // Result was equal 3
```

Because TypeScript not allow use native operators with objects we must use Type conversion.

Native operators return native number value.
If you want use types from this library, please use it with constructor, or use methods provided by object of type.

Use object methods:

```typescript
const summ = new Char(5)
  .add(5) // 10
  .subtract(2) // 8
  .multiply(3) // 24
  .devide(4) // 3
  .pow(2) // 9
  .or(2) // 11
  .and(12) // 8
```

## Exceptions

* Type overflow throw exception
* If you was use float type for create integer type it throw exception
