# Unicode

## UTF-8

### Rules

| Bytes | Bits | 1°CodePoint | ÚltimoCodePoint | Byte1    | Byte2    | Byte3    | Byte4    |                            PadBytes |
| ----- | ---- | ------------ | ---------------- | -------- | -------- | -------- | -------- | ----------------------------------: |
| 1     | 7    | U+0000       | U+007F           | 0xxxxxxx |          |          |          | -------- -------- -------- 0xxxxxxx |
| 2     | 11   | U+0080       | U+007F           | 110xxxxx | 10xxxxxx |          |          | -------- -------- 110xxxxx 10xxxxxx |
| 3     | 16   | U+0800       | U+FFFF           | 1110xxxx | 10xxxxxx | 10xxxxxx |          | -------- 1110xxxx 10xxxxxx 10xxxxxx |
| 4     | 21   | U+10000      | U+1FFFFF         | 11110xxx | 10xxxxxx | 10xxxxxx | 10xxxxxx | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx |

### Links

- <https://www.compart.com/en/unicode/U+0301>
- <https://www.iana.org/assignments/character-sets/character-sets.xhtml>
- <https://unicode-table.com/pt/>
- <https://unicode.org/charts/>
- <https://home.unicode.org/>
- <https://docstore.mik.ua/orelly/webprog/pcook/ch16_12.htm>

### Combining Ex

- é=\d233 ou \d101 + \d769
- (y)=\d128077 (Thumbs Up Sign), (y black)=\d128077 + \d127998 (Emoji Modifier Fitzpatirck Type-5)

### Example

- ❤ ♥
- ✌☝
- 🤚🖖👋🖐✋🤙🤞🤟🤘🤌🤏👌🖕👆👇👈👉🤛🤜👍✊👊👎
- 👐🤝👏🤲🙏🙌  
- 2588: █   █████
- 258C: ▌   ████▌
- 2587: ▇
- 2589: ▉ ▉▉▉▉
- 258A: ▊ ▉▉▉▊
- 258B: ▋ ▉▉▉▋
- 258D: ▍ ▉▉▉▍
- 258E: ▎ ▉▉▉▎
- 258F: ▏ ▉▉▉▏

### Caracteres

                           
