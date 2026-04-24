#!/usr/bin/perl

use strict;
use warnings;

# ./regex.pl regex.txt

while (<>) {
    if (/(\d+)/) {
        print "$1\n";
    }
}