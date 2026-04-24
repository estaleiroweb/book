#!/usr/bin/env bash

L='#################################################################################################'

s() {
	echo
	echo $L
	echo "$1"
	echo $L
}

F=regex2.txt
head regex.txt >$F

s 'grep: Busca linhas com números.'
grep '[0-9]\+' $F

s 'egrep: Busca linhas com números.'
egrep '[0-9]+' $F

s 'grep: Obter posições dos números'
positions=$(head -10 "$F" | grep -ob '[0-9]\+')
while IFS=: read -r offset match; do
	echo "Correspondência: $match, Posição: $offset"
done <<<"$positions"
# `grep -ob '[0-9]\+'` encontra todas as sequências de dígitos e retorna o byte offset e a correspondência.
# O loop `while` processa a saída do `grep` para exibir as posições e as correspondências.

s 'sed: Remove todos os números do arquivo'
sed 's/[0-9]+//g' $F # sed -i altera o arquivo

s 'awk: Imprime linhas que contêm números'
awk '/[0-9]+/ { print $0 }' $F

s 'perl: Busca linhas com números.'
perl -pe 's/[0-9]+//g' $F

s 'if: checa'
if [[ "texto123" =~ [0-9]+ ]]; then echo "contém números"; fi

s 'if: com grupos'
string="data: 2023-10-27"
regex="data: ([0-9]{4})-([0-9]{2})-([0-9]{2})"
if [[ $string =~ $regex ]]; then
	echo "Ano: ${BASH_REMATCH[1]}, Mês: ${BASH_REMATCH[2]}, Dia: ${BASH_REMATCH[3]}"
else
	echo "Padrão não encontrado"
fi

rm -f $F