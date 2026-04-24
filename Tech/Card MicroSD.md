# Card MicroSD
## Marcas
Sandisk, Kingston, Samsung

## Tipos
| Card                    | Year | Specification         | Capacity | Bus Speed    |
| ----------------------- | ---- | --------------------- | -------- | ------------ |
| SD  Security Digital    | 1999 | 1.0/1.1               | 1MB~4GB  | 12.5~25MB/s  |
| SD HC High Capacity     | 2006 | 2.0                   | 2~32GB   | 12.5~104MB/s |
| SD XC extreme Capactity | 2009 | 3.01/4.0 UHS-I/UHS-II | 32GB~2TB | 156~312MB/s  |

## Speed
| MinSeq Write | Class | UHS Class | Video Class | SD  | HD  | FHD | 4K  | 8K  |
| ------------ | ----- | --------- | ----------- | --- | --- | --- | --- | --- |
| 2 MB/s       | C2    |           |             | Y   | N   | N   | N   | N   |
| 4 MB/s       | C4    |           |             | Y   | Y   | Y   | N   | N   |
| 6 MB/s       | C6    |           | V6          | Y   | Y   | Y   | Y   | N   |
| 10 MB/s      | C10   | U1        | V10         | Y   | Y   | Y   | Y   | N   |
| 30 MB/s      |       | U3        | V30         | Y   | Y   | Y   | Y   | Y   |
| 60 MB/s      |       |           | V60         | Y   | Y   | Y   | Y   | Y   |
| 90 MB/s      |       |           | V90         | Y   | Y   | Y   | Y   | Y   |

	> Video Format: SD, HD, FHD, 4K, 8K
## Bus
| Interface  | Logo    | Speed     | PCIe lanes | Duplex    | SD  | HC  | XC  | UC  | Spec Versio |
| ---------- | ------- | --------- | ---------- | --------- | --- | --- | --- | --- | ----------- |
| Default    |         | 12.5 MB/s |            |           | Y   | Y   | Y   | Y   | 1.01        |
| High       |         | 25 MB/s   |            |           | Y   | Y   | Y   | Y   | 1.10        |
| UHS-I      | I       | 50 MB/s   |            | Half,Full | N   | Y   | Y   | Y   | 3.01        |
| UHS-I      | I       | 104 MB/s  |            | Half      | N   | Y   | Y   | Y   | 3.01        |
| UHS-II     | II      | 156 MB/s  |            | Full      | N   | Y   | Y   | Y   | 4.00        |
| UHS-II     | II      | 312 MB/s  |            | Half      | N   | Y   | Y   | Y   | 4.00        |
| UHS-III    | III     | 312 MB/s  |            | Full      | N   | Y   | Y   | Y   | 6.0         |
| UHS-III    | III     | 624 MB/s  |            | Full      | N   | Y   | Y   | Y   | 6.0         |
| SD Express | EXPRESS | 985 MB/s  | 3.1 x1     | Full      | N   | Y   | Y   | Y   | 7.0         |
| SD Express | EXPRESS | 1969 MB/s | 3.1 x2     | Full      | N   | Y   | Y   | Y   | 8.0         |
| SD Express | EXPRESS | 1969 MB/s | 4.0 x1     | Full      | N   | Y   | Y   | Y   | 8.0         |
| SD Express | EXPRESS | 3938 MB/s | 4.0 x2     | Full      | N   | Y   | Y   | Y   | 8.0         |

## Application Performance Class Specification Table
| Class   | Logo | Min Radon Read | Min Radon Write | Minimum Sustained Sequential Write |
| ------- | ---- | -------------- | --------------- | ---------------------------------- |
| Class 1 | A1   | 1500 IOPS      | 500 IOPS        | 10 MB/s                            |
| Class 1 | A2   | 4000 IOPS      | 2000 IOPS       | 10 MB/s                            |
