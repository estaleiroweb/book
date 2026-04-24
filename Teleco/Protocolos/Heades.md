# Protocolos Headers

## Eternet II (64~1518 bytes)
| Head            | Octet   | Descr                                                         |
| --------------- | ------- | ------------------------------------------------------------- |
| Preamble        | 07      | L1: Preâmbulo. Sincroniza Origem/Destino 10101010x7=0xAAAAAAA |
| SFD             | 01      | L1: Start Frame Delimiter. Sinaliza Início Frame Ethernet     |
| MAC destination | 06      | L2: Endereço de destino                                       |
| MAC source      | 06      | L2: Endereço de origem                                        |
| Type/Length     | 02      | L2: Ethertype (Ethernet II) or length (IEEE 802.3)            |
| 802.1Q tag      | 04      | L2: Interpacket (optional) 802.1Q                             |
| TPID            | 02      | L2: Tag protocol identifier                                   |
| TCI             | 02      | L2: Tag control information (PCP/DEI/VID)                     |
| 802.1Q tag      | 04      | L2: Interpacket (optional) 802.1ad                            |
| TPID            | 02      | L2: Tag protocol identifier                                   |
| TCI             | 02      | L2: Tag control information (PCP/DEI/VID)                     |
| User Data       | 46~1500 | L2~7: Payload + padding                                       |
| FCS             | 04      | L2: Frame Check Sequence (32‑bit CRC) Checksum                |
		
- MAC Adress = 6 octetos
  - 6 octetos=o1:o2:o3:o4:o5:o6
  - Broadcast=FF:FF:FF:FF:FF:FF
  - Multicast=o1 & 1
  - Unicast=not(o1 & 1)
- Type/Length:
  - 0~1500 0x05DC length field (IEEE 802.3 and/or 802.2)
  - 2048   0x0800 IP(v4), Internet Protocol version 4
  - 2054   0x0806 ARP, Address Resolution Protocol
  - 33024  0x8100 802.1Q reserved
  - 33079  0x8137 IPX, Internet Packet eXchange (Novell)
  - 34525  0x86dd IPv6, Internet Protocol version 6
- TPID: Tag protocol identifier
  - A 16-bit field set to a value of 0x8100[b] in order to identify the frame as an IEEE 802.1Q-tagged frame. 
  - This field is located at the same position as the EtherType field in untagged frames, and is thus used to distinguish the - frame from untagged frames.
- TCI: Tag control information
  - TCI  Bits Name
  - PCP  03   Priority code point
  - DEI  01   Drop eligible indicator
  - VID  12   VLAN identifier
- PCP: Priority code point
  - class of service and maps to the frame priority level. Different PCP values can be used to prioritize different classes of traffic
- DEI: Drop eligible indicator
  - May be used separately or in conjunction with PCP to indicate frames eligible to be dropped in the presence of congestion
- VID: VLAN identifier
  - Range 0~4095(0x000 e 0xFFF)
  - VID 0(0x000): RESERVADO. Quadro não carrega um ID de VLAN. neste caso, o tag 802.1Q especifica apenas uma prioridade (nos campos PCP e DEI) e é chamado de tag de prioridade
  - VID 1(0x001): ID de VLAN padrão. Em pontes geralmente é reservado para uma VLAN de gerenciamento de rede; isso é específico do fornecedor
  - VID 4095(0xFFF): RESERVADO. Uo de implementação; não deve ser configurado ou transmitido. 0xFFF pode ser usado para indicar uma correspondência curinga em operações de gerenciamento ou entradas de banco de dados de filtragem.


## ARP
 | Head  | Bytes | Descr                          |
 | ----- | ----- | ------------------------------ |
 | HTYPE | 02    | Hardware type.                 |
 | PTYPE | 02    | Protocol type. PTYPE=EtherType |
 | HLEN  | 01    | Hardware address length        |
 | PLEN  | 01    | Protocol address length        |
 | OPER  | 02    | Operation                      |
 | SHA   | 06    | Sender hardware address        |
 | SPA   | 04    | Sender protocol address        |
 | THA   | 06    | Target hardware address        |
 | TPA   | 04    | Target protocol address        |
	
	- HLEN: Hardware address length. O comprimento do endereço Ethernet é 6.
	- PTYPE: Protocol type. PTYPE=EtherType 
	- PLEN: Protocol address length. O protocolo internetwork é especificado em PTYPE. Exemplo: o comprimento do endereço IPv4 é 4.
	- OPER: Operation. Especifica a operação que o remetente está executando: 1 para solicitação, 2 para resposta.
	- SHA:Sender hardware address. Endereço de mídia do remetente. Em uma solicitação ARP, este campo é usado para indicar o endereço do host que está enviando a solicitação. Em uma resposta ARP, este campo é usado para indicar o endereço do host que a solicitação estava procurando.
	- SPA: Sender protocol address. Endereço de rede do remetente.
	- THA: Target hardware address. Endereço de mídia do receptor pretendido. Em uma solicitação ARP, esse campo é ignorado. Em uma resposta ARP, este campo é usado para indicar o endereço do host que originou a solicitação ARP.
	- TPA: Target protocol address. Endereço de Internetwork do receptor pretendido. 

## IPv4 - Internet Protocol verssion 4
| Head                   | Bits      | Descr                              |
| ---------------------- | --------- | ---------------------------------- |
| Version                | 04        | No IPv4 sempre igual a 4(0100).    |
| IHL                    | 04        | Internet Header Length             |
| DSCP                   | 06        | Differentiated Services Code Point |
| ECN                    | 02        | Explicit Congestion Notification   |
| Total Length           | 16        | Tamanho do pacote em bytes         |
| Identification         | 16        | Id Datagrama IP                    |
| Flags                  | 03        | controlar/identificar fragmentos   |
| Flag-Reservado         | 01        | deve ser zero                      |
| Flag-DF                | 01        | Don't Fragment (Não Fragmente)     |
| Flag-MF                | 01        | More Fragments (Mais Fragmentos)   |
| Flag-Fragment Offset   | 13        | Deslocamento de um fragmento       |
| TTL                    | 08        | Time To Live                       |
| Protocol               | 08        | Protocolo do Datagrama IP          |
| Header Checksum        | 16        | Verificação de erros do cabeçalho  |
| Source IP Address      | 32        | Endereço IPv4 do remetente         |
| Destination IP Address | 32        | Endereço IPv4 do receptor          |
| Options (if IHL > 5)   | 0~288bits |                                    |

- IHL: Internet Header Length. O cabeçalho IPv4 tem tamanho variável devido ao 14º campo opcional (opções). O campo IHL contém o tamanho do cabeçalho IPv4; tem 4 bits que especificam o número de palavras de 32 bits no cabeçalho. O valor mínimo para este campo é 5,[35] que indica um comprimento de 5 × 32 bits = 160 bits = 20 bytes. Como um campo de 4 bits, o valor máximo é 15; isso significa que o tamanho máximo do cabeçalho IPv4 é 15 × 32 bits = 480 bits = 60 bytes.
- DSCP: Differentiated Services Code Point. Originalmente definido como o tipo de serviço (ToS), este campo especifica serviços diferenciados (DiffServ) pela RFC 2474.[a] Real-time data streaming faz uso do campo DSCP. Um exemplo é Voz sobre IP (VoIP), que é usado para serviços de voz interativos.
- ECN: Explicit Congestion Notification. Este campo é definido na RFC 3168 e permite a notificação fim-a-fim do congestionamento da rede sem descartar pacotes. ECN é um recurso opcional disponível quando ambos os terminais o suportam e é efetivo quando também suportado pela rede subjacente.
- Total Length: Define todo o tamanho do pacote em bytes, incluindo cabeçalho e dados. O tamanho mínimo é de 20 bytes (cabeçalho sem dados) e o máximo é de 65.535 bytes. Todos os hosts precisam ser capazes de remontar datagramas de tamanho de até 576 bytes, mas a maioria dos hosts modernos lida com pacotes muito maiores. Os links podem impor restrições adicionais ao tamanho do pacote, caso em que os datagramas devem ser fragmentados. A fragmentação no IPv4 é realizada no host de envio ou nos roteadores. A remontagem é realizada no host de recebimento.
- Identification: Este campo é um campo de identificação e é usado principalmente para identificar exclusivamente o grupo de fragmentos de um único datagrama IP. Alguns trabalhos experimentais sugeriram o uso do campo ID para outros fins, como para adicionar informações de rastreamento de pacotes para ajudar a rastrear datagramas com endereços de origem falsificados, [36] mas a RFC 6864 agora proíbe esse uso.
- Flags: é usado para controlar ou identificar fragmentos. Eles são (em ordem, do mais significativo para o menos significativo):
- DF: Don't Fragment (Não Fragmente). Se o sinalizador DF estiver definido e a fragmentação for necessária para rotear o pacote, o pacote será descartado. Isso pode ser usado ao enviar pacotes para um host que não possui recursos para realizar a remontagem de fragmentos. Ele também pode ser usado para descoberta de MTU de caminho, automaticamente pelo software IP do host ou manualmente usando ferramentas de diagnóstico como ping ou traceroute.
- MF: More Fragments (Mais Fragmentos). Para pacotes não fragmentados, o sinalizador MF é apagado. Para pacotes fragmentados, todos os fragmentos, exceto o último, têm o sinalizador MF definido. O último fragmento possui um campo Fragment Offset diferente de zero, diferenciando-o de um pacote não fragmentado.
- Fragment Offset: Este campo especifica o deslocamento de um fragmento específico em relação ao início do datagrama IP original não fragmentado em unidades de blocos de oito bytes. O primeiro fragmento tem um deslocamento de zero. O campo de 13 bits permite um deslocamento máximo de (213 – 1) × 8 = 65.528 bytes, que, com o comprimento do cabeçalho incluído (65.528 + 20 = 65.548 bytes), suporta a fragmentação de pacotes que excedem o comprimento máximo de IP de 65.535 bytes.
- TTL: Time To Live. Um campo de tempo de vida de oito bits limita a vida útil de um datagrama para evitar falhas de rede no caso de um loop de roteamento. Ele é especificado em segundos, mas os intervalos de tempo inferiores a 1 segundo são arredondados para 1. Na prática, o campo é usado como uma contagem de saltos — quando o datagrama chega a um roteador, o roteador diminui o campo TTL em um. Quando o campo TTL atinge zero, o roteador descarta o pacote e normalmente envia uma mensagem ICMP de tempo excedido ao remetente. O programa traceroute envia mensagens com valores de TTL ajustados e usa essas mensagens ICMP de tempo excedido para identificar os roteadores percorridos pelos pacotes da origem ao destino.
- Protocol: Define o protocolo usado na parte de dados do datagrama IP. A IANA mantém uma lista de números de protocolo IP conforme indicado pela RFC 790.
- Header Checksum: É usado para verificação de erros do cabeçalho. Quando um pacote chega a um roteador, o roteador calcula a soma de verificação do cabeçalho e a compara com o campo de soma de verificação. Se os valores não corresponderem, o roteador descartará o pacote. Erros no campo de dados devem ser tratados pelo protocolo encapsulado. Tanto o UDP quanto o TCP têm somas de verificação separadas que se aplicam aos seus dados. Quando um pacote chega a um roteador, o roteador diminui o campo TTL no cabeçalho. Conseqüentemente, o roteador deve calcular uma nova soma de verificação de cabeçalho. O campo checksum é o complemento de um de 16 bits da soma do complemento de um de todas as palavras de 16 bits no cabeçalho. Para fins de cálculo do checksum, o valor do campo checksum é zero.
- Source IP Address: Este campo é o endereço IPv4 do remetente do pacote. Observe que esse endereço pode ser alterado em trânsito por um dispositivo de tradução de endereço de rede.
- Destination IP Address: Este campo é o endereço IPv4 do receptor do pacote. Tal como acontece com o endereço de origem, isso pode ser alterado em trânsito por um dispositivo de tradução de endereço de rede.
- Options (if IHL > 5): O campo de opções não é usado com frequência. Pacotes contendo algumas opções podem ser considerados perigosos por alguns roteadores e serem bloqueados.[37] Observe que o valor no campo IHL deve incluir palavras extras de 32 bits suficientes para conter todas as opções mais qualquer preenchimento necessário para garantir que o cabeçalho contenha um número inteiro de palavras de 32 bits. Se o IHL for maior que 5 (ou seja, de 6 a 15) significa que o campo de opções está presente e deve ser considerado. A lista de opções pode ser finalizada com uma opção EOOL (End of Options List, 0x00); isso só é necessário se o final das opções não coincidir com o final do cabeçalho. As opções possíveis que podem ser colocadas no cabeçalho são as seguintes:

## IPv6 - Internet Protocol verssion 4

| Head                | Bits | Descr                                      |
| ------------------- | ---- | ------------------------------------------ |
| Version             | 04   | No IPv6 sempre igual a 6(0110).            |
| Traffic class       | 08   | 6+2 bits                                   |
| Traffic class-DS    | 06   | Differentiated Services                    |
| Traffic class-ECN   | 02   | Explicit Congestion Notification           |
| Flow label          | 08   | Id de alta entropia                        |
| Payload length      | 00   | Tamanho da carga em octetos                |
| Next header         | 00   | Próximo cabeçalho                          |
| Hop limit           | 08   | Substitui TTL no IPv4                      |
| Source address      | 128  | Endereço IPv6 unicast de envio             |
| Destination address | 128  | Endereço IPv6 unicast/multicast de destino |

- Version: No IPv6 sempre igual a 6(0110).
- Traffic class: (6+2 bits) Os bits deste campo contêm dois valores.
- DS: Differentiated Services. Que é usado para classificar os pacotes. Atualmente, todos os campos DS padrão terminam com um bit '0'. Qualquer campo DS que termine com dois bits '1' destina-se ao uso local ou experimental. 
  - DS/DSCP (Differentiated Services Code Point)
  
  | Pool | DSCP   | Assignment Policy   |
  | ---- | ------ | ------------------- |
  | 1    | xxxxx0 | SA-Standards Action |
  | 2    | xxxx11 | EXP/LU              |
  | 3    | xxxx01 | EXP/LU (*)          |

  >  DSCP-SA=<CS><DP>0 (cccdd0)

  - DSCP-SA/CS(Class Selector)

  | CS  | DSCP      | Service Class               | Example                                  |
  | --- | --------- | --------------------------- | ---------------------------------------- |
  | CS0 | 00 000dd0 | Standard                    | -                                        |
  | CS1 | 08 001dd0 | Low-priority data           | File transfer (FTP, SMB)                 |
  | CS2 | 16 010dd0 | OAM-Net oper., admin/manag. | SNMP, SSH, Ping, Telnet, syslog          |
  | CS3 | 24 011dd0 | Broadcast video             | streaming                                |
  | CS4 | 32 100dd0 | Real-time interactive       | Gaming, low priority video conferencing  |
  | CS5 | 40 101dd0 | Signaling                   | Peer-to-peer (SIP, H.323, H.248 ), NTP   |
  | CS6 | 48 110dd0 | Network control             | Routing protocols (OSPF, BGP, ISIS, RIP) |
  | CS7 | 56 111dd0 | Reserved for future use     | -                                        |

	> Broadcast video=RTSP broadcast TV, streaming of live audio/video, video surveillance, video-on-demand
  
  - DSCP-SA/DP(Drop Probability)

  | DP  | DSCP   | Drop Probability |
  | --- | ------ | ---------------- |
  | 1   | ccc010 | Low              |
  | 2   | ccc100 | Med              |
  | 3   | ccc110 | High             |
  
  - DSCP-SA/AF(Assured Forwarding)

  | DP  | Pri  | Class 1               | Class 2               | Class 3               | Class 4               |
  | --- | ---- | --------------------- | --------------------- | --------------------- | --------------------- |
  | 1   | Low  | AF11 (DSCP 10) 001010 | AF21 (DSCP 18) 010010 | AF31 (DSCP 26) 011010 | AF41 (DSCP 34) 100010 |
  | 2   | Med  | AF12 (DSCP 12) 001100 | AF22 (DSCP 20) 010100 | AF32 (DSCP 28) 011100 | AF42 (DSCP 36) 100100 |
  | 3   | High | AF13 (DSCP 14) 001110 | AF23 (DSCP 22) 010110 | AF33 (DSCP 30) 011110 | AF43 (DSCP 38) 100110 |

  | DP  | Pri  | Class | AF  | DSCP | Bits   |
  | --- | ---- | ----- | --- | ---- | ------ |
  | 1   | Low  | 1     | 11  | 10   | 001010 |
  | 2   | Med  | 1     | 12  | 12   | 001100 |
  | 3   | High | 1     | 13  | 14   | 001110 |
  | 1   | Low  | 2     | 21  | 18   | 010010 |
  | 2   | Med  | 2     | 22  | 20   | 010100 |
  | 3   | High | 2     | 23  | 22   | 010110 |
  | 1   | Low  | 3     | 31  | 26   | 011010 |
  | 2   | Med  | 3     | 32  | 28   | 011100 |
  | 3   | High | 3     | 33  | 30   | 011110 |
  | 1   | Low  | 4     | 41  | 34   | 100010 |
  | 2   | Med  | 4     | 42  | 36   | 100100 |
  | 3   | High | 4     | 43  | 38   | 100110 |


	> DSCP Standards Action=<class 3bits><DP 2bits>0\
	> AF=AF<CS dec><DP dec>

- ECN: Explicit Congestion Notification (Notificação Explícita de Congestionamento). os valores de prioridade subdividem-se em faixas: tráfego onde a fonte fornece controle de congestionamento e tráfego sem controle de congestionamento.
  
  | ECN | Descr                              |
  | --- | ---------------------------------- |
  | 00  | Non ECN-Capable Transport, Non-ECT |
  | 10  | ECN Capable Transport, ECT(0)      |
  | 01  | ECN Capable Transport, ECT(1)      |
  | 11  | Congestion Encountered, CE.        |

- Flow label: Um identificador de alta entropia de um fluxo de pacotes entre uma origem e um destino. Um fluxo é um grupo de pacotes, por exemplo, uma sessão TCP ou um fluxo de mídia. O rótulo de fluxo especial 0 significa que o pacote não pertence a nenhum fluxo (usando este esquema). Um esquema mais antigo identifica o fluxo por endereço de origem e porta, endereço de destino e porta, protocolo (valor do último campo Next Header ). [6] Foi ainda sugerido que o rótulo de fluxo seja usado para ajudar a detectar pacotes falsificados.
- Payload length: O tamanho da carga em octetos, incluindo quaisquer cabeçalhos de extensão. O comprimento é definido como zero quando um cabeçalho de extensão Hop-by-Hop carrega uma opção Jumbo Payload. 
- Next header: Especifica o tipo do próximo cabeçalho. Esse campo geralmente especifica o protocolo da camada de transporte usado pela carga útil de um pacote. Quando os cabeçalhos de extensão estão presentes no pacote, este campo indica qual cabeçalho de extensão segue. Os valores são compartilhados com os usados ​​para o campo do protocolo IPv4, pois ambos os campos têm a mesma função (consulte Lista de números de protocolo IP).
- Hop limit: Substitui o campo time to live no IPv4. Esse valor é decrementado em um em cada nó de encaminhamento e o pacote é descartado se se tornar 0. No entanto, o nó de destino deve processar o pacote normalmente mesmo se recebido com um limite de salto de 0.
- Source address: endereço IPv6 unicast do nó de envio
- Destination address: endereço IPv6 unicast ou multicast do(s) nó(s) de destino


## TCP - Transmission Control Protocol
| Head                  | Bits | Descr                               |
| --------------------- | ---- | ----------------------------------- |
| Source port           | 16   | Porta remetente.                    |
| Destination port      | 16   | Porta receptor.                     |
| Sequence number       | 32   | Sequencia de dados                  |
| Acknowledgment number | 32   | Próximo segmento TCP                |
| DO length             | 04   | Header Length                       |
| Flags                 | 09   |                                     |
| Flag-RSV              | 03   | campo reservado                     |
| Flag-Nonce            | 01   |                                     |
| Flag-CWR              | 01   | Congestion Window Reduced           |
| Flag-ECN              | 01   | echo                                |
| Flag-URG              | 01   | urgent                              |
| Flag-ACK              | 01   | acknowledgment                      |
| Flag-PSH              | 01   | push                                |
| Flag-RST              | 01   | reset                               |
| Flag-SYN              | 01   | Sync                                |
| Flag-FIN              | 01   | finish                              |
| Window                | 16   | Num bytes receptor dispõe a receber |
| Checksum              | 16   | Verificar cabeçalho OK              |
| Urgent pointer        | 16   | URG definido                        |
| Options               | 00   | opcional                            |
| Data                  | 00   |                                     |

- Source port: especifica o número da porta do remetente.
- Destination port: especifica o número da porta do receptor.
- Sequence number: indica quantos dados são enviados durante a sessão TCP. Quando você estabelece uma nova conexão TCP (handshake de 3 vias), o número de sequência inicial é um valor aleatório de 32 bits. O receptor usará esse número de sequência e enviará de volta uma confirmação. Analisadores de protocolo, como o wireshark, geralmente usam um número de sequência relativo de 0, pois é mais fácil de ler do que um número aleatório alto.
- Acknowledgment number: usado pelo receptor para solicitar o próximo segmento TCP. Este valor será o número de sequência incrementado em 1.
- DO length: Header Length=DEC(do)*4Bytes. campo de deslocamento de dados, também conhecido como o comprimento do cabeçalho. Ele indica o comprimento do cabeçalho TCP para que saibamos onde os dados atuais começam.
- Flags: também os chamamos de bits de controle. Nós os usamos para estabelecer conexões, enviar dados e encerrar conexões:
- RSV: campo reservado. Eles não são usados ​​e são sempre definidos como 0.
- Nonce: 
- CWR: Congestion Window Reduced (Janela de congestionamento reduzida)
- ECN: echo
- URG: urgent (urgente). Quando este bit é definido, os dados devem ser tratados com prioridade sobre outros dados.
- ACK: acknowledgment (reconhecimento).
- PSH: push (Empurre). Isso informa a um aplicativo que os dados devem ser transmitidos imediatamente e que não queremos esperar para preencher todo o segmento TCP.
- RST: reset (Redefinir). Quando você receber isso, você deve encerrar a conexão imediatamente. Isso só é usado quando há erros irrecuperáveis ​​e não é uma maneira normal de terminar a conexão TCP.
- SYN: usamos isso para o handshake inicial de três vias e é usado para definir o número de sequência inicial.
- FIN: finish (finalizar). É usado para encerrar a conexão TCP. O TCP é full duplex, portanto, ambas as partes terão que usar o bit FIN para encerrar a conexão. Este é o método normal como terminamos uma conexão.
- Window: especifica quantos bytes o receptor está disposto a receber. Ele é usado para que o receptor possa informar ao remetente que gostaria de receber mais dados do que está recebendo no momento. Ele faz isso especificando o número de bytes além do número de sequência no campo de confirmação.
- Checksum: para verificar se o cabeçalho TCP está OK ou não.
- Urgent pointer: usado quando o bit URG foi definido, o ponteiro urgente é usado para indicar onde os dados urgentes terminam.
- Options: 0~320 bits opcional
- Data: 

## UDP - User Datagram Protocol
| Head             | Bits | Descr                         |
| ---------------- | ---- | ----------------------------- |
| Source port      | 16   | Número da porta do remetente. |
| Destination port | 16   | Número da porta do receptor.  |
| DO length        | 16   | Header Length                 |
| Checksum         | 16   | Verificar cabeçalho OK        |
| Data             | 00   |                               |

- DO length: Header Length=DEC(do)*4Bytes. campo de deslocamento de dados, também conhecido como o comprimento do cabeçalho. Ele indica o comprimento do cabeçalho TCP para que saibamos onde os dados atuais começam.
- Checksum: para verificar se o cabeçalho TCP está OK ou não.