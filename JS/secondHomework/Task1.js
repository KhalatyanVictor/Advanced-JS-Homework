// Primitive Type Coercion
// 1. Please try to guess, test, and then understand following examples:
//   1. Number('0x77') === 0x77 === true
//   2. Number('077') === 077 === false
//   3. Number(' 12') === 12
//   4. isNaN(' ') === false
//   5. +'' === 0
//   6. .1 + .2 == .3 === false
//   7. 9007199254740992 + 1 == 9007199254740992 === true
//   8. 9007199254740992 + 2 == 9007199254740992 === true
//   9. 0 === +0 === true
//   10. +0 === -0 === true
//   11. 1 / '2' === 0.5
//   12. 1 / 0 === Infinity
//   13. 1 / -0 === -Infinity
//   14. Infinity / 6 === Infinity
//   15. Infinity / -256 === -Infinity
//   16. Infinity / Infinity === NaN
//   17. 0 / 0 === NaN
//   18. +true === 1
//   19. +false === 0
//   20. +null === 0
//   21. +undefined === NaN
//   22. parseInt('.2') === NaN
//   23. parseInt('077a') === 63
//   24. parseInt('0x77a') === 1914
//   25. parseInt('I’m the best value - said Infinity.') === NaN
//   26. parseFloat('I’m the best value - said Infinity.') === NaN
//   27. parseInt('Infinity is the best value!') === NaN
//   28. parseFloat('Infinity is the best value!') === Infinity
//   29. parseFloat('12.78ff') === 12.78

// 2. What will be the result and why?
//   1. "" + 1 + 0 === '10'
//   2. "" - 1 + 0 === -1
//   3. true + false === 1
//   4. 6 / "3" === 2
//   5. "2" * "3" === 6
//   6. 4 + 5 + "px" === '9px'
//   7. "$" + 4 + 5 === '$45'
//   8. "4" - 2 === 2
//   9. "4px" - 2 === NaN
//   10. 7 / 0 === Infinity
//   11. " -9 " + 5 === '-9 5'
//   12. " -9 " - 5 === -14
//   13. null + 1 === 1
//   14. undefined + 1 === NaN