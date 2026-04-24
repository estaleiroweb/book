# Engine CONNECT

## SERVERS

```sql
    CREATE OR REPLACE SERVER evoice 
    FOREIGN DATA WRAPPER mariadb 
    OPTIONS ( 
        HOST 'hostname', 
        USER 'admin', 
        PASSWORD '*******', 
        OWNER 'admin', 
        PORT 3306 
    );
    SELECT * FROM mysql.servers;
```

## CONNECT Data Types

- All: <https://mariadb.com/kb/en/connect-table-types/>
- Creating: <https://mariadb.com/kb/en/creating-and-dropping-connect-tables/>
- External: <https://mariadb.com/kb/en/connect-external-table-types/>
- MongoDB: <https://mariadb.com/kb/en/connect-mongo-table-type/>

## CSV

<https://mariadb.com/kb/en/connect-csv-and-fmt-table-types/>

```sql
    CREATE OR REPLACE TABLE tbl_csv (
        n varchar(17),
        a INT,
        b INT,
        Bday date field_length=10 date_format='YYYY-MM-DD',
        Btime time field_length=8 date_format='hh:mm:ss',
        DtUpd DATETIME(6) field_length=19 date_format='YYYY-MM-DD hh:mm:ss'
    ) ENGINE=CONNECT, TABLE_TYPE=CSV, SEP_CHAR=';',QUOTED=1,HEADER=1, FILE_NAME='data_test.csv';

    INSERT tbl_csv VALUES ('xpto',1,2,CURDATE(),CURTIME(),NOW(6)),(null,0,2,CURDATE(),CURTIME(),NOW(6));

    SELECT * FROM tbl_csv;
```

## FMTF

<https://mariadb.com/kb/en/connect-csv-and-fmt-table-types/#fmt-type>

```sql
    CREATE OR REPLACE TABLE access_log(
        ip VARCHAR(15) NOT NULL FIELD_FORMAT = '%n%s%n - - ' ,
        dt DATETIME NOT NULL FIELD_FORMAT = '[%n%s%n ' DATE_FORMAT='DD/MMM/YYYY:hh:mm:ss',
        timezone VARCHAR(50) NOT NULL FIELD_FORMAT = '%n%d%n]',
        request_type VARCHAR(200) NOT NULL FIELD_FORMAT = ' "%n%[^""]%n"',
        http_reponse_code SMALLINT UNSIGNED NOT NULL FIELD_FORMAT = ' %n%d%n',
        size INT UNSIGNED NOT NULL FIELD_FORMAT = ' %n%s%n',
        path VARCHAR(200) NOT NULL FIELD_FORMAT = ' "%n%[^""]%n"',
        browser VARCHAR(200) NOT NULL FIELD_FORMAT = ' "%n%[^""]%n"'
    ) ENGINE=connect, TABLE_TYPE ='FMT', file_name='/var/log/httpd/access_log';

    CREATE OR REPLACE TABLE tb_etc_group(
        `group` VARCHAR(200) NOT NULL FIELD_FORMAT = '%n%[^:]%n:' COMMENT 'Group name',
        flag  VARCHAR(10) NOT NULL FIELD_FORMAT = '%n%[^:]%n:' COMMENT 'Flag',
        groupId  INT(10) UNSIGNED NOT NULL FIELD_FORMAT = '%n%[^:]%n:' COMMENT 'Group Id',
        users  VARCHAR(1024) FIELD_FORMAT = '%n%s%m' COMMENT 'Users of group'
    ) ENGINE=connect, TABLE_TYPE ='FMT', file_name='/etc/group';

    CREATE OR REPLACE TABLE tb_etc_passwd(
        `user` VARCHAR(200) NOT NULL FIELD_FORMAT = '%n%[^:]%n' COMMENT 'User name',
        flag  VARCHAR(10) NOT NULL FIELD_FORMAT = ':%n%[^:]%n' COMMENT 'Flag',
        userId  INT(10) UNSIGNED NOT NULL FIELD_FORMAT = ':%n%d%n' COMMENT 'User Id',
        groupId  INT(10) UNSIGNED NOT NULL FIELD_FORMAT = ':%n%d%n' COMMENT 'Group Id',
        realName  VARCHAR(1024) FIELD_FORMAT = '%n%[^:]%m' COMMENT 'Real name',
        home  VARCHAR(1024) FIELD_FORMAT = ':%n%[^:]%m' COMMENT 'Home dir',
        shell  VARCHAR(1024) FIELD_FORMAT = ':%n%[^:]%m' COMMENT 'Shell'
    ) ENGINE=connect, TABLE_TYPE ='FMT', file_name='/etc/passwd';

    CREATE OR REPLACE TABLE tb_proc_meminfo(
        `var` VARCHAR(200) NOT NULL FIELD_FORMAT = '%n%[^:]%n: ' COMMENT 'Variable name',
        size  INT(10) UNSIGNED NOT NULL FIELD_FORMAT = '%n%d%n ' COMMENT 'Size of variable',
        unit  VARCHAR(7) FIELD_FORMAT = '%n%s%n' COMMENT 'Unit size'
    ) ENGINE=connect, TABLE_TYPE ='FMT', file_name='/proc/meminfo';

    CREATE OR REPLACE TABLE tb_proc_stat_cpu(
        `cpu` VARCHAR(200) NOT NULL FIELD_FORMAT = '%n%[cpu0-9]%n ' COMMENT 'CPU name',
        user INT(10) UNSIGNED NOT NULL FIELD_FORMAT = '%n%d%n ' COMMENT 'normal processes executing in user mode',
        nice INT(10) UNSIGNED NOT NULL FIELD_FORMAT = '%n%d%n ' COMMENT 'niced processes executing in user mode',
        system INT(10) UNSIGNED NOT NULL FIELD_FORMAT = '%n%d%n ' COMMENT 'processes executing in kernel mode',
        idle INT(10) UNSIGNED NOT NULL FIELD_FORMAT = '%n%d%n ' COMMENT 'twiddling thumbs',
        iowait INT(10) UNSIGNED NOT NULL FIELD_FORMAT = '%n%d%n ' COMMENT 'In a word, iowait stands for waiting for I/O to complete. But there',
        irq INT(10) UNSIGNED NOT NULL FIELD_FORMAT = '%n%d%n ' COMMENT 'servicing interrupts',
        softirq INT(10) UNSIGNED NOT NULL FIELD_FORMAT = '%n%d%n ' COMMENT 'servicing softirqs',
        steal INT(10) UNSIGNED NOT NULL FIELD_FORMAT = '%n%d%n ' COMMENT 'involuntary wait',
        guest INT(10) UNSIGNED NOT NULL FIELD_FORMAT = '%n%d%n ' COMMENT 'running a normal guest',
        guest_nice INT(10) UNSIGNED NOT NULL FIELD_FORMAT = '%n%d%n' COMMENT 'running a niced guest'
    ) ENGINE=connect, TABLE_TYPE ='FMT', file_name='/proc/stat';

    CREATE OR REPLACE TABLE tb_proc_loadavg (
        load1 DOUBLE(8,2) unsigned not NULL FIELD_FORMAT = '%n%f%n',
        load5 DOUBLE(8,2) unsigned not NULL FIELD_FORMAT = '%n%f%n',
        load15 DOUBLE(8,2) unsigned not NULL FIELD_FORMAT = '%n%f%n'
    ) ENGINE=CONNECT, TABLE_TYPE=FMT FILE_NAME='/proc/loadavg';
```

## JSON

```sql
    create or replace table jsample1 (
        ISBN char(15),
        Language char(2) field_format='LANG',
        Subject char(32) field_format='SUBJECT',
        Author char(128) field_format='AUTHOR.[" & "]',
        Title char(32) field_format='TITLE',
        Translation char(32) field_format='TRANSLATOR.PREFIX',
        Translator char(80) field_format='TRANSLATOR',
        Publisher char(20) field_format='PUBLISHER.NAME',
        Location char(16) field_format='PUBLISHER.PLACE',
        Year int(4) field_format='DATEPUB'
    )
    engine=CONNECT table_type=JSON File_name='tb.json';
    
    create or replace table jsample2 (
        ISBN char(15),
        Language char(2) field_format='LANG',
        Subject char(32) field_format='SUBJECT',
        Author char(128) field_format='AUTHOR.[].FIRSTNAME',
        Title char(32) field_format='TITLE',
        Translation char(32) field_format='TRANSLATOR.PREFIX',
        Translator char(80) field_format='TRANSLATOR',
        Publisher char(20) field_format='PUBLISHER.NAME',
        Location char(16) field_format='PUBLISHER.PLACE',
        Year int(4) field_format='DATEPUB'
    )
    engine=CONNECT table_type=JSON File_name='tb.json';
    
    create or replace table jsample3 (
        ISBN char(15),
        Language char(2) field_format='LANG',
        Subject char(32) field_format='SUBJECT',
        Author char(128) field_format='AUTHOR.[*].FIRSTNAME',
        Title char(32) field_format='TITLE',
        Translation char(32) field_format='TRANSLATOR.PREFIX',
        Translator char(80) field_format='TRANSLATOR',
        Publisher char(20) field_format='PUBLISHER.NAME',
        Location char(16) field_format='PUBLISHER.PLACE',
        Year int(4) field_format='DATEPUB'
    )
    engine=CONNECT table_type=JSON File_name='tb.json';
    
    create or replace table jexpall1 (
        WHO char(12),
        WEEK int(2) field_format='$.WEEK[*].NUMBER',
        WHAT char(32) field_format='$.WEEK[*].EXPENSE[*].WHAT',
        AMOUNT double(8,2) field_format='$.WEEK[*].EXPENSE[*].AMOUNT')
    engine=CONNECT table_type=JSON File_name='expense.json';
    
    create or replace table jexpall2 (
        WHO char(12) not null,
        WEEK int(2) not null field_format='$.WEEK[*].NUMBER',
        WHAT char(32) not null field_format='$.WEEK[].EXPENSE[", "].WHAT',
        SUM double(8,2) not null field_format='$.WEEK[].EXPENSE[+].AMOUNT',
        AVERAGE double(8,2) not null field_format='$.WEEK[].EXPENSE[!].AMOUNT',
        CONT int not null field_format='$.WEEK[].EXPENSE[#].AMOUNT',
        MIN int not null field_format='$.WEEK[].EXPENSE[<].AMOUNT',
        MAX int not null field_format='$.WEEK[].EXPENSE[>].AMOUNT',
        PRODUCT DOUBLE(16,2) not null field_format='$.WEEK[].EXPENSE[x].AMOUNT',
        ELEMTS VARCHAR(100) not null field_format='$.WEEK[].EXPENSE[","].AMOUNT'
    )
    engine=CONNECT table_type=JSON File_name='expense.json';
```

## MySQL

<https://mariadb.com/kb/en/connect-table-types-mysql-table-type-accessing-mysqlmariadb-tables/>

```sql
    create table essai (
        num integer(4) not null,
        line char(15) not null
    ) ENGINE=CONNECT TABLE_TYPE=MYSQL connection='mysql://admin:@localhost/test/people';

    scheme://username:password@hostname:port/database/tablename
    scheme://username@hostname/database/tablename
    scheme://username:password@hostname/database/tablename
    scheme://username:password@hostname/database/tablename

    create table grp 
    ENGINE=connect TABLE_TYPE=mysql CONNECTION='mysql://root@localhost/test/people'
    SRCDEF='select title, count(*) as cnt from employees group by title';

    CREATE OR REPLACE TABLE test.dbs_evoice
    ENGINE=CONNECT TABLE_TYPE=MySQL
    CONNECTION='evoice' 
    SRCDEF='show databases';

    create table essai 
    ENGINE=CONNECT TABLE_TYPE=MYSQL
    connection='mysql://root@localhost/test/people';

    create table essai 
    ENGINE=CONNECT TABLE_TYPE=MYSQL DBNAME=test TABNAME=people OPTION_LIST='user=root,host=localhost';

    CREATE OR REPLACE TABLE tb_ERS_CSP
    ENGINE=CONNECT TABLE_TYPE=MYSQL DBNAME=db_CDR_Hst TABNAME=tb_ERS_CSP OPTION_LIST='host=evoice_db,user=admin,password=sup3R73$te';

    CONNECTION='mysql://admin:sup3R73$te@evoice_db/db_CDR_Hst/tb_ERS_CSP' 
```

## PIVOT Error

<https://mariadb.com/kb/en/connect-pivot-table-type/>

```sql
    CREATE OR REPLACE TABLE pivot_tbl
    ENGINE=CONNECT TABLE_TYPE=PIVOT 
    DBNAME=db_CDR_Hst TABNAME=tb_ERS_CSP 
    OPTION_LIST='PivotCol=Week,Function=AVG,Accept=true';
```

## INI

<https://mariadb.com/kb/en/connect-ini-table-type/>

```sql
    CREATE OR REPLACE TABLE mycnf(
        section varchar(16) DEFAULT NULL flag=1,
        var_name varchar(64) DEFAULT NULL flag=2,
        var_value varchar(255) DEFAULT NULL
    )
    ENGINE=CONNECT table_type=INI file_name='/etc/my.cnf'
    option_list='layout=row';
```

## TBL

```sql
    CREATE OR REPLACE TABLE mycnf_all(
        section varchar(16),
        var_name varchar(64),
        var_value varchar(255),
        tbl_name VARCHAR(64) not null SPECIAL='TABID'
    )
    ENGINE=CONNECT TABLE_TYPE=TBL 
    TABLE_LIST='mycnf_client,mycnf_mysql_clients,mycnf_server_cassandra,mycnf_server,mycnf_server_connect,mycnf_server_innodb,mycnf_server_oqgraph,mycnf_server_tokudb'
    OPTION_LIST='ACCEPT=1';
```

## OCCUR Error

```sql
    CREATE OR REPLACE TABLE to_Encam_Dev_MatrizFormatosInt (
        Cliente VARCHAR(150),
        Cenario VARCHAR(150),
        Sentido VARCHAR(150),
        Tech VARCHAR(15),
        Val VARCHAR(255)
    )
    ENGINE=CONNECT 
    TABLE_TYPE=OCCUR 
    DBNAME=db_Planum TABNAME=_tb_Encam_Dev_MatrizFormatosInt
    OPTION_LIST='OccurCol=Val,RankCol=Tech'
    Colist='MSCS-SXIT,SXIT-MSCS,MSCS-MSCS,IMS-MSCS,MSCS-IMS,SXHW-SXIT,SXIT-SXHW,VoIP-SXIT,SXIT-VoIP,IMS-IMS,VoIP-VoIP,Marcacao';
```

## XCOL ERROR

```sql
    CREATE OR REPLACE TABLE chlist(
        mother varchar(12),
        child varchar(255)
    );
    INSERT chlist VALUES
        ('Sophie','Vivian, Antony'),
        ('Lisbeth','Lucy,Charles,Diana'),
        ('Corinne',null),
        ('Claude','Marc'),
        ('Janet','Arthur, Sandra, Peter, John');
    
    CREATE OR REPLACE TABLE xchild (
        mother varchar(12) NOT NULL flag=1,
        child varchar(30) DEFAULT NULL flag=2
    ) ENGINE=CONNECT table_type=XCOL tabname='chlist'
    option_list='colname=child';
```

## DIR

<https://mariadb.com/kb/en/connect-table-types-special-virtual-tables/#dir-type>

```sql
    CREATE OR REPLACE TABLE db_System.tb_mysql_datadir (
        drive varchar(256) NOT NULL COMMENT 'Drive(win)/File name(unx)',
        path varchar(256) NOT NULL flag=1 COMMENT 'Path of file',
        `name` varchar(256) NOT NULL flag=2 COMMENT 'File name',
        `type` char(4) NOT NULL flag=3 COMMENT 'File type',
        attrDec INT(10) UNSIGNED NOT NULL flag=4 COMMENT 'File attribute Decimal Value',
        size double(12,0) NOT NULL flag=5 COMMENT 'File size',
        dtModified datetime NOT NULL flag=6 COMMENT 'File Date Modified',
        dtAccess datetime NOT NULL flag=7 COMMENT 'File Date Access',
        dtCreation datetime NOT NULL flag=8 COMMENT 'File Date Creation',
        userId INT(10) UNSIGNED NOT NULL flag=9 COMMENT 'User Id',
        groupId INT(10) UNSIGNED NOT NULL flag=10 COMMENT 'Group Id'
    )
    ENGINE=CONNECT TABLE_TYPE=DIR FILE_NAME='/opt/mysql/data/*'
    OPTION_LIST='subdir=1';
```

## OTHERS

- The external table type: DOS, FIX, BIN, CSV, FMT, XML, JSON, INI, DBF, VEC, ODBC, JDBC, MYSQL, TBL, PROXY, XCOL, OCCUR, PIVOT, ZIP, VIR, DIR, WMI, MAC, and OEM. Defaults to DOS, MYSQL, or PROXY depending on what options are used
- TABLE_LIST=',', The comma separated list of TBL table sub-tables.
- TABNAME='', -- The target table or node for ODBC, JDBC, MYSQL, PROXY, or catalog tables; or the top node name for XML tables.
- URI='', -- The URI of a REST request.. From Connect 1.06.0010.
- XFILE_NAME='', -- The file (path) base name for table index files. Can be absolute or relative to the data directory. Defaults to the file name.
- ZIPPED=false, -- True if the table file(s) is/are zipped in one or several zip files
- ENDING=1, -- End of line length. Defaults to 1 for Unix/Linux and 2 for Windows.
