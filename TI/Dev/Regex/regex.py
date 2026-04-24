import re


def show(result):
    print(f'cmd: {cmd}, re: {pattern}')
    print(f'content: {content}')
    if result:
        print(f'result: {result}')
    else:
        print("Match not found")
    print('-'*100)


content = "apple,banana,orange"
pattern = r","
cmd = 'split'
show(re.split(pattern, content))

content = "A string with 123 numbers, ABC letters and other 456 numbers."
pattern = r"(?P<xpto>\b\w{3,5}\b)(.{3})"

cmd = 'search'
result = re.search(pattern, content)
if result:
    print(
        result.groups(),
        result.groupdict(),
        result.span(),
    )
    show(result.group())
else:
    show("Match not found")

cmd = 'sub'
show(re.sub(pattern, '', content))
show(re.sub(pattern, '-\\1=\\2-', content))

cmd = 'findall'
show(re.findall(pattern, content))

lst = []
for match in re.finditer(pattern, content):
    keys = range(0, len(match.groups())+1) | match.groupdict().keys()
    lst.append({
        # k: [match.group(k), (match.start(k), match.end(k))]
        k: [match.group(k), (match.span(k))]
        for k in keys
    })
print(lst)
print('-'*100)


def firstUpper(match):
    word = match.group(0)
    return word[0].upper() + word[1:].lower()


cmd = 'sub'
show(re.sub(pattern, firstUpper, content))

show(re.sub(
    pattern,
    lambda match: match.group(0)[0].upper() + match.group(0)[1:].lower(),
    content
))
