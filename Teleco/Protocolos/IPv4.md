# Redes - IPv4

## Classes
| Classe | 1os Bits (r=N.Net, h=N.Host)        | Mask | N.Net   | N.IPs    | Ips/Net  |
| ------ | ----------------------------------- | ---- | ------- | -------- | -------- |
| A      | 0rrrrrrr hhhhhhhh hhhhhhhh hhhhhhhh | /8   | 128     | 16777216 | 16777216 |
| B      | 10rrrrrr rrrrrrrr hhhhhhhh hhhhhhhh | /16  | 16384   | 1048576  | 65536    |
| C      | 110rrrrr rrrrrrrr rrrrrrrr hhhhhhhh | /24  | 2097152 | 65535    | 256      |
| D      | 1110rrrr hhhhhhhh hhhhhhhh hhhhhhhh | -    | -       | -        | -        |
| E      | 1111rrrr hhhhhhhh hhhhhhhh hhhhhhhh | -    | -       | -        | -        |
	
- Mask=Máscara limite da classe (8~32)
- Obs1: Para conseguir IPs válidos de Ips/Net deve ser descontar 2 IPs de acordo com a máscara utilizada (NET+Broadcast)
- Obs2: Classe D é multicast
- Obs3: Classe E é especial reservado IETF

## Classes Especiais
| CIDR             | Descrição                                                    |
| ---------------- | ------------------------------------------------------------ |
| 0.0.0.0/8        | Rede corrente (só funciona como endereço de origem) RFC 1700 |
| 10.0.0.0/8       | Rede Privada                                                 |
| 14.0.0.0/8       | Rede Pública                                                 |
| 39.0.0.0/8       | Reservado                                                    |
| 127.0.0.0/8      | Localhost                                                    |
| 128.0.0.0/16     | Reservado (IANA)                                             |
| 169.254.0.0/16   | Zeroconf                                                     |
| 172.16.0.0/12    | Rede privada                                                 |
| 191.255.0.0/16   | Reservado (IANA)                                             |
| 192.0.2.0/24     | Documentação                                                 |
| 192.88.99.0/24   | IPv6 para IPv4                                               |
| 192.168.0.0/16   | Rede Privada                                                 |
| 198.18.0.0/15    | Teste de benchmark de redes                                  |
| 223.255.255.0/24 | Reservado                                                    |
| 224.0.0.0/4      | Multicasts (antiga rede Classe D)                            |
| 240.0.0.0/4      | Reservado (antiga rede Classe E)                             |
| 255.255.255.255  | Broadcast                                                    |

## Máscaras vs Tamanhos vs Classes
- n=Bits Emprestados
- SubNet=2^n
- Hosts=2^n-2
- \* Máscara não válida. Apenas resultado do cálculo
- \*\* host subnet/Define um host específico

### Classe A
| Mask | Máscara         | Bits                   | SubNet   | Hosts    | n   |
| ---- | --------------- | ---------------------- | -------- | -------- | --- |
| /8   | 255.0.0.0       | b1111 1111.h00.h00.h00 | 1        | 16777214 | 0   |
| /9   | 255.128.0.0     | hFF.b1000 0000.h00.h00 | 2        | 8388606  | 1   |
| /10  | 255.192.0.0     | hFF.b1100 0000.h00.h00 | 4        | 4194302  | 2   |
| /11  | 255.224.0.0     | hFF.b1110 0000.h00.h00 | 8        | 2097150  | 3   |
| /12  | 255.240.0.0     | hFF.b1111 0000.h00.h00 | 16       | 1048574  | 4   |
| /13  | 255.248.0.0     | hFF.b1111 1000.h00.h00 | 32       | 524286   | 5   |
| /14  | 255.252.0.0     | hFF.b1111 1100.h00.h00 | 64       | 262142   | 6   |
| /15  | 255.254.0.0     | hFF.b1111 1110.h00.h00 | 128      | 131070   | 7   |
| /16  | 255.255.0.0     | hFF.b1111 1111.h00.h00 | 256      | 65534    | 8   |
| /17  | 255.255.128.0   | hFF.hFF.b1000 0000.h00 | 512      | 32766    | 9   |
| /18  | 255.255.192.0   | hFF.hFF.b1100 0000.h00 | 1024     | 16382    | 10  |
| /19  | 255.255.224.0   | hFF.hFF.b1110 0000.h00 | 2048     | 8190     | 11  |
| /20  | 255.255.240.0   | hFF.hFF.b1111 0000.h00 | 4096     | 4094     | 12  |
| /21  | 255.255.248.0   | hFF.hFF.b1111 1000.h00 | 8192     | 2046     | 13  |
| /22  | 255.255.252.0   | hFF.hFF.b1111 1100.h00 | 16384    | 1022     | 14  |
| /23  | 255.255.254.0   | hFF.hFF.b1111 1110.h00 | 32768    | 510      | 15  |
| /24  | 255.255.255.0   | hFF.hFF.b1111 1111.h00 | 65536    | 254      | 16  |
| /25  | 255.255.255.128 | hFF.hFF.hFF.b1000 0000 | 131072   | 126      | 17  |
| /26  | 255.255.255.192 | hFF.hFF.hFF.b1100 0000 | 262144   | 62       | 18  |
| /27  | 255.255.255.224 | hFF.hFF.hFF.b1110 0000 | 524288   | 30       | 19  |
| /28  | 255.255.255.240 | hFF.hFF.hFF.b1111 0000 | 1048576  | 14       | 20  |
| /29  | 255.255.255.248 | hFF.hFF.hFF.b1111 1000 | 2097152  | 6        | 21  |
| /30  | 255.255.255.252 | hFF.hFF.hFF.b1111 1100 | 4194304  | 2        | 22  |
| /31  | 255.255.255.254 | hFF.hFF.hFF.b1111 1110 | 8388608  | 2*       | 23  |
| /32  | 255.255.255.255 | hFF.hFF.hFF.b1111 1111 | 16777216 | 1**      | 24  |

### Classes B
| Mask | Máscara         | Bits                   | SubNet | Hosts | n   |
| ---- | --------------- | ---------------------- | ------ | ----- | --- |
| /16  | 255.255.0.0     | hFF.b1111 1111.h00.h00 | 1      | 65534 | 0   |
| /17  | 255.255.128.0   | hFF.hFF.b1000 0000.h00 | 2      | 32766 | 1   |
| /18  | 255.255.192.0   | hFF.hFF.b1100 0000.h00 | 4      | 16382 | 2   |
| /19  | 255.255.224.0   | hFF.hFF.b1110 0000.h00 | 8      | 8190  | 3   |
| /20  | 255.255.240.0   | hFF.hFF.b1111 0000.h00 | 16     | 4094  | 4   |
| /21  | 255.255.248.0   | hFF.hFF.b1111 1000.h00 | 32     | 2046  | 5   |
| /22  | 255.255.252.0   | hFF.hFF.b1111 1100.h00 | 64     | 1022  | 6   |
| /23  | 255.255.254.0   | hFF.hFF.b1111 1110.h00 | 128    | 510   | 7   |
| /24  | 255.255.255.0   | hFF.hFF.b1111 1111.h00 | 256    | 254   | 8   |
| /25  | 255.255.255.128 | hFF.hFF.hFF.b1000 0000 | 512    | 126   | 9   |
| /26  | 255.255.255.192 | hFF.hFF.hFF.b1100 0000 | 1024   | 62    | 10  |
| /27  | 255.255.255.224 | hFF.hFF.hFF.b1110 0000 | 2048   | 30    | 11  |
| /28  | 255.255.255.240 | hFF.hFF.hFF.b1111 0000 | 4096   | 14    | 12  |
| /29  | 255.255.255.248 | hFF.hFF.hFF.b1111 1000 | 8192   | 6     | 13  |
| /30  | 255.255.255.252 | hFF.hFF.hFF.b1111 1100 | 16384  | 2     | 14  |
| /31  | 255.255.255.254 | hFF.hFF.hFF.b1111 1110 | 32768  | 2*    | 15  |
| /32  | 255.255.255.255 | hFF.hFF.hFF.b1111 1111 | 65536  | 1**   | 16  |

### Classes C
| Mask | Máscara         | Bits                   |  SubNet | Hosts | n   |
| /24  | 255.255.255.0   | hFF.hFF.b1111 1111.h00 |  1      | 254   | 0   |
| /25  | 255.255.255.128 | hFF.hFF.hFF.b1000 0000 |  2      | 126   | 1   |
| /26  | 255.255.255.192 | hFF.hFF.hFF.b1100 0000 |  4      | 62    | 2   |
| /27  | 255.255.255.224 | hFF.hFF.hFF.b1110 0000 |  8      | 30    | 3   |
| /28  | 255.255.255.240 | hFF.hFF.hFF.b1111 0000 |  16     | 14    | 4   |
| /29  | 255.255.255.248 | hFF.hFF.hFF.b1111 1000 |  32     | 6     | 5   |
| /30  | 255.255.255.252 | hFF.hFF.hFF.b1111 1100 |  64     | 2     | 6   |
| /31  | 255.255.255.254 | hFF.hFF.hFF.b1111 1110 |  128    | 2*    | 7   |
| /32  | 255.255.255.255 | hFF.hFF.hFF.b1111 1111 |  256    | 1**   | 8   |



## MTU: Maximum Transmission Unit
	Range 0~1500
	Considerar 46 como mínimo pois será feito um padding em Eth-L2 no Payload coso menor
	