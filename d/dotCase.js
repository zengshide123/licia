/* Convert string to "dotCase".
 *
 * |Name  |Type  |Desc             |
 * |------|------|-----------------|
 * |str   |string|String to convert|
 * |return|string|Dot cased string |
 *
 * ```javascript
 * dotCase('fooBar'); // -> foo.bar
 * dotCase('foo bar'); // -> foo.bar
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('splitCase');

function exports(str) {
    return splitCase(str).join('.');
}
