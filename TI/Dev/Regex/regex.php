<?php
$content = 'A string with 123 numbers, ABC letters and other 456 numbers. 1 23 345';
$pattern = '/(?P<xpto>\b\w{3,5}\b)(.{3})/';

$cmd = 'preg_match';
$result = preg_match($pattern, $content, $matches);
_::show($result, $matches);

$cmd = 'preg_match_all';
$result = preg_match_all($pattern, $content, $matches, PREG_OFFSET_CAPTURE);
_::show($result, $matches);

$cmd = 'preg_replace';
$result = preg_replace($pattern, '', $content);
_::show('', $result);
$result = preg_replace($pattern, '-\1=\2-', $content);
_::show('', $result);

$cmd = 'preg_replace_callback';
$result = preg_replace_callback($pattern, 'increment_year', $content);
_::show('', $result);

$content = 'apple,banana,orange';
$pattern = '/,/';
$cmd = 'preg_split';
$result = preg_split($pattern, $content);
_::show('', $result);

$content = "$40 for a kg.";
$pattern = '/';
$cmd = 'preg_quote';
$result = preg_quote($content, $pattern);
_::show('', $result);

$contents = ['apple', 'banana', 'orange', 'orange123', 'grape'];
$pattern = '/a/';
$replacement = 'A';
$cmd = 'preg_filter';
$result = preg_filter($pattern, $replacement, $contents);
_::show('', $result, $contents);


$pattern = '/[0-9]+/';
$cmd = 'preg_grep';
$result = preg_grep($pattern, $contents);
_::show('', $result, $contents);

$content = 'Replace a with A and b with B.';
$pattern = [
	'/a/' => function ($matches) {
		return '*A*';
	},
	'/b/' => function ($matches) {
		return '+B+';
	},
];

$cmd = 'preg_replace_callback_array';
$result = preg_replace_callback_array($pattern, $content);
_::show('', $result);

$cmd = 'preg_replace';
$pattern = ['/a/','/^.{2}/'];
$result = preg_replace($pattern, '', $contents);
_::show('', $result, $contents);

$result = preg_replace($pattern, ['*','--'], $contents);
_::show('', $result, $contents);


function show($result, $matches, $contents = null) {
	global $cmd, $pattern, $content;

	$p = json_encode($pattern);
	print "cmd: {$cmd}, result: {$result}, re: {$p}\n";

	print 'content: ';
	print_r($contents ? $contents : $content);
	print PHP_EOL;

	print 'result : ';
	print_r($matches);
	print PHP_EOL;

	print str_repeat('-', 100) . PHP_EOL;
}

function increment_year($matches) {
	return strtoupper($matches[0]);
}
