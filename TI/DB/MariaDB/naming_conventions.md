# MariaDB/MySQL Database Naming Conventions: Best Practices

`Schema design best practices` / `Database design standards`

!!! info General Principles

    - Use **English** names consistently throughout the schema
    - Use **lowercase** with `snake_case` for all names
    - Characters should be limited to [a-z0-9_]
    - Avoid accents, special characters, and spaces
    - Use descriptive prefixes to indicate object type
    - Document with `COMMENT` or `/* Comment */` whenever possible
    - Aim for at least 3rd Normal Form (3NF), preferably 5NF (see [Database Normal Forms](../FN.md))

!!! info Databases

    - Use **singular** names: `ecommerce`, `erp_system`, `log`
    - Prefix: `db_` (e.g., `db_ecommerce`)
    - Alternative: Use suffix `_db` instead of prefix (Keep it consistent: prefix or sufix only)
    - Avoid generic names: `test`, `data`, `mydb`

!!! info Tables

    - Use **plural** names: `users`, `orders`, `products`
    - Prefixes:
      - `tb_`: Regular tables (e.g., `tb_users`)
      - `mv_`: Materialized views
      - `ln_`: Linked tables (CONNECT engine)
      - `tmp_`: Temporary tables

    ### Table Design Guidelines
    - Use `INT UNSIGNED AUTO_INCREMENT` for primary keys
    - Avoid `NULL` columns (use `NOT NULL` with default values)
    - Use reference tables instead of `ENUM` when possible
    - Always include timestamp fields: `created_at`, `updated_at`
    - Junction table naming: 
      - Sintaxe: `[prefix_]<plural_name>_x_<plural_name>`
      - Example: `tb_users_x_roles`, `tb_orders_x_items` 
    - Always create indexes on foreign key columns

!!! info Columns

    - Use **clear, descriptive names** (usually singular): `email`, `first_name`
    - Consistently use `snake_case`: `first_name` instead of `firstName`
    - Identifier fields:
      - Use prefix `id_` for primary and foreign keys (e.g., `id_user`)
      - Alternative: Use suffix `_id` instead of prefix (Keep it consistent: prefix or sufix only)

!!! info Indexes and Constraints

    - Primary keys: `pk_id_users`
    - Unique keys: `uk_id_users` or simply `uk` for composite keys
    - Regular indexes: `idx_users_email`
    - Foreign keys: `fk_orders_id_user` = `fk_` + table_without_prefix + field_name
    - Check constraints: `ck_email_format`

!!! info Triggers

    Format: `tr_` + table_name + when_suffix + action_suffix

    - Prefix: `tr_`
    - When suffixes: `_before`, `_after` {#tr_when}
    - Action suffixes: `_ins`, `_upd`, `_del` {#tr_action}
    - Example: `tr_users_before_ins`

!!! info Views

    - Prefix: `vw_`
    - Example: `vw_active_users`

!!! info Stored Procedures and Functions

    - Prefixes:
      - `sp_`: Standard stored procedures (e.g., `sp_create_user`)
      - `sptr_`: Procedures for triggers
      - `spev_`: Procedures for events
      - `spmv_`: Procedures for materialized views
      - `fn_`: Functions (e.g., `fn_get_total_sales`)
  
!!! info Parameters for Procedures and Functions
  
    - Prefixes:
      - `in_`: Input parameters (e.g., `in_user_id`)
      - `out_`: Output parameters (e.g., `out_result`)
      - `io_`: Input/output parameters (e.g., `io_counter`)
      - `new_`: Input/output parameters used in triggers (e.g., `new_email`)
      - `old_`: Input parameters used in triggers (e.g., `old_email`)
  
    !!! warning Declareting parameteres in  `sptr_`
        
        Use the referencial table type of field and the same name
        ```sql
        TYPE OF database.table.field1
        CREATE OR REPLACE PROCEDURE sptr_table_when (
            INOUT `new_field1` TYPE OF TYPE OF database.table.field1,
            INOUT `new_field2` TYPE OF TYPE OF database.table.field2,
            IN `old_field1` TYPE OF TYPE OF database.table.field1
        )
        BEGIN
        END
        ```

!!! info Sequences

    - Prefix: `sq_`
    - Example: `sq_order_number`

!!! info Events

    - Prefix: `ev_`
    - Name format: `ev_` + action + [object] + [frequency]
    - Examples: `ev_delete_expired_tokens_hourly`, `ev_maintenance_2025_04_15`
    - Optional Suffix {#events_sufix}

      | **Suffix**     | **Meaning**                       | **Example**                     |
      | -------------- | --------------------------------- | ------------------------------- |
      | `_hourly`      | Every hour                        | `ev_generate_report_hourly`     |
      | `_every_15min` | Every 15 minutes                  | `ev_check_queue_every_15min`    |
      | `_daily`       | Once per day                      | `ev_cleanup_logs_daily`         |
      | `_nightly`     | Every night (usually 00:00/02:00) | `ev_backup_db_nightly`          |
      | `_weekly`      | Once per week                     | `ev_archive_orders_weekly`      |
      | `_biweekly`    | Each two weeks                    | `ev_archive_orders_biweekly`    |
      | `_monthly`     | Once per month                    | `ev_generate_invoice_monthly`   |
      | `_bimonthly`   | Each two months                   | `ev_generate_invoice_bimonthly` |
      | `_quarterly`   | Every 3 months                    | `ev_summary_report_quarterly`   |
      | `_yearly`      | Once per year                     | `ev_reset_counters_yearly`      |
      | `_on_demand`   | Manually executed                 | `ev_manual_reindex_on_demand`   |
      | `_startup`     | on startup                        | `ev_manual_reindex_startup`     |

!!! info Users and Roles

    - User prefix (optional): `usr_` (e.g., `usr_ro_finance`)
    - Role prefix: `rl_` (e.g., `rl_ro_finance`)
    - Optional Subprefix {#roles_subprefix}

      | **Subprefix** | **Access Type**              | **User Example**     | **Role Example**    |
      | ------------- | ---------------------------- | -------------------- | ------------------- |
      | `ro_`         | Read-only (`cRud`)           | `usr_ro_finance`     | `rl_ro_finance`     |
      | `rw_`         | Read-write (`cRUD`)          | `usr_rw_crm`         | `rl_rw_crm`         |
      | `full_`       | Full access (`CRUD`)         | `usr_full_dbadmin`   | `rl_full_dbadmin`   |
      | `admin_`      | Administrative access        | `usr_admin_backup`   | `rl_admin_backup`   |
      | `app_`        | Application access           | `usr_app_backup`     | `rl_app_backup`     |
      | `ext_`        | External user (integrations) | `usr_ext_api_client` | `rl_ext_api_client` |
      | `tmp_`        | Temporary                    | `usr_tmp_audit_2025` | `rl_tmp_audit_2025` |

!!! info Servers

   - Prefix: `sr_`
   - Example: `sr_external_db`

!!! info Partitions

    This table provides a clear overview of the suggested naming conventions, keeping the partition type prefix at the beginning for consistency. Let me know if you'd like any adjustments or further details!
    - ### Partitioning Naming Convention Suggestion (Prefix First)

    Maintaining the standard of having the prefix first, here are suggestions for naming conventions based on different partitioning types:

    - #### Range Partitioning

        - `pr_<table_name>_<range_start>_to_<range_end>`
        - Example: `pr_orders_20230101_to_20230331`, `pr_products_A_to_M`, `pr_sales_1_to_100`
        - For date ranges, use a consistent format like YYYYMMDD.
        - For numerical or alphabetical ranges, indicate the inclusive or exclusive boundaries if necessary (e.g., `_excl`).

    - #### List Partitioning

        - `pl_<table_name>_<value1>_<value2>_...`
        - Example: `pl_countries_USA_CAN_MEX`, `pl_status_Pending_Processing`, `pl_categories_Electronics_Books`
        - List all the values that belong to the partition, separated by a consistent delimiter (e.g., `_`).
        - If the list of values is long, consider using an abbreviation or a more general name if appropriate (e.g., `pl_<table_name>_regionA`).

    - #### Hash Partitioning

        - `ph_<table_name>_<partition_number>`
        - Example: `ph_users_01`, `ph_logs_05`, `ph_events_10`
        - Use a sequential number for each partition. The number of partitions should be defined by your hash function.
        - Consider padding the partition number with leading zeros for consistent sorting (e.g., `_001`, `_010`).

    - #### Key Partitioning

        - `pk_<table_name>_<partition_number>`
        - Example: `pk_accounts_01`, `pk_items_03`
        - Similar to hash partitioning, use a sequential number for each partition.
        - The partitioning key is managed by the database system.

    - #### Composite Partitioning

        When using a combination of partitioning types (e.g., range-hash, list-range), combine the naming conventions, keeping the partition type prefix first:

        - `pr_<table_name>_<range>_ph_<hash_number>`
        - Example: `pr_sales_2024_ph_01` (sales for the year 2024, hash partition 01)
        - `pl_<table_name>_<list_values>_pr_<range>`
        - Example: `pl_orders_Online_pr_Q1` (online orders for quarter 1)

    - #### General Considerations

        - **Consistency:** Stick to one naming convention throughout your database.
        - **Clarity:** The name should give a clear indication of the data contained within the partition.
        - **Brevity:** While clarity is important, try to keep the names reasonably short to avoid overly long identifiers.
        - **Automation:** Choose a convention that can be easily used in scripts for partition management and maintenance.
        - **Partition Type Prefix:** Always start with a prefix indicating the partition type (`pr_`, `pl_`, `ph_`, `pk_`) followed by the table name.

    By consistently placing the partition type prefix first, you can easily identify the partitioning strategy used for each partition, improving overall database organization and management. Remember to document your chosen convention for future reference.

!!! info Practical Example in MariaDB

    ```sql
    CREATE TABLE tb_users (
        id_user INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT uk_users_email UNIQUE (email)
    );

    CREATE TABLE tb_orders (
        id_order INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        id_user INT UNSIGNED NOT NULL,
        total DECIMAL(10,2) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT fk_orders_id_user FOREIGN KEY (id_user) REFERENCES tb_users(id_user)
    );

    -- Junction table example
    CREATE TABLE tb_orders_items (
        id_order INT UNSIGNED NOT NULL,
        id_product INT UNSIGNED NOT NULL,
        quantity INT UNSIGNED NOT NULL DEFAULT 1,
        price DECIMAL(10,2) NOT NULL,
        PRIMARY KEY (id_order, id_product),
        CONSTRAINT fk_orders_items_id_order FOREIGN KEY (id_order) REFERENCES tb_orders(id_order),
        CONSTRAINT fk_orders_items_id_product FOREIGN KEY (id_product) REFERENCES tb_products(id_product)
    );

    -- Create a view
    CREATE VIEW vw_order_summary AS
    SELECT 
        o.id_order,
        u.email,
        COUNT(oi.id_product) AS item_count,
        o.total,
        o.created_at
    FROM tb_orders o
    JOIN tb_users u ON o.id_user = u.id_user
    LEFT JOIN tb_orders_items oi ON o.id_order = oi.id_order
    GROUP BY o.id_order;

    -- Create a stored procedure
    DELIMITER //

    CREATE PROCEDURE sp_create_order (
        IN in_id_user INT UNSIGNED,
        IN in_total DECIMAL(10,2),
        OUT out_id_order INT UNSIGNED
    )
    BEGIN
        INSERT INTO tb_orders(id_user, total) VALUES (in_id_user, in_total);
        SET out_id_order = LAST_INSERT_ID();
    END //

    -- Create a trigger
    CREATE TRIGGER tr_orders_after_ins
    AFTER INSERT ON tb_orders
    FOR EACH ROW
    BEGIN
        INSERT INTO tb_audit_log(table_name, action, record_id, user_id)
        VALUES ('orders', 'INSERT', NEW.id_order, NEW.id_user);
    END //

    CREATE PROCEDURE sptr_users_passwd_before (
        INOUT `new_passwd` TYPE OF db_secure.tb_users_passwd.passwd,
        INOUT `new_expires_at` TYPE OF db_secure.tb_users_passwd.expires_at,
        IN `old_passwd` TYPE OF db_secure.tb_users_passwd.Passwd
    )
    BEGIN
        DECLARE expires_passwd INT UNSIGNED DEFAULT IFNULL(@expiresPassword,120);
        IF (IFNULL(new_passwd,'')='') THEN 
            SET new_passwd=fn_get_rand_passwd(12);
            SET new_expires_at=NOW();
        END IF;
        
        IF (NOT(new_passwd<=>old_passwd)) THEN 
            SET new_passwd=fn_encode(new_passwd);
            IF(expires_passwd=0)THEN SET new_expires_at=NULL;
            ELSE SET new_expires_at=DATE_ADD(NOW(), INTERVAL expires_passwd DAY);
        END IF;
        END IF;
    END //

    CREATE TRIGGER tr_users_passwd_before_ins BEFORE INSERT ON tb_users_passwd 
    FOR EACH ROW CALL  sptr_users_passwd_before (NEW.passwd,NEW.expires_at,OLD.passwd) //

    CREATE TRIGGER tr_users_passwd_before_upd BEFORE UPDATE ON tb_users_passwd 
    FOR EACH ROW CALL  sptr_users_passwd_before (NEW.passwd,NEW.expires_at,OLD.passwd) //

    -- Create an event
    CREATE EVENT ev_cleanup_logs_daily
    ON SCHEDULE EVERY 1 DAY
    DO
    DELETE FROM tb_system_logs WHERE created_at < NOW() - INTERVAL 30 DAY //

    DELIMITER ;

    -- User and role examples
    CREATE USER 'usr_ro_analytics'@'%' IDENTIFIED BY 'password123';
    CREATE ROLE rl_ro_analytics;
    GRANT SELECT ON db_analytics.* TO rl_ro_analytics;
    GRANT rl_ro_analytics TO 'usr_ro_analytics'@'%';
    SET DEFAULT ROLE rl_ro_analytics TO 'usr_ro_analytics'@'%';

    -- Server example
    CREATE OR REPLACE SERVER sr_external 
    FOREIGN DATA WRAPPER mysql
    OPTIONS (
        HOST '10.0.0.101',
        DATABASE 'external_db',
        USER 'admin',
        PASSWORD 'password',
        PORT 3306
    );
    ```

    ## Partitioning Naming Conventions

    For partitioned tables:
    - Table prefix: `tb_part_` (e.g., `tb_part_orders`)
    - Partition naming: `p_` + value_or_range (e.g., `p_2025`, `p_europe`)
    - Subpartition naming: `sp_` + value_or_range (e.g., `sp_q1_2025`)

    Example:
    ```sql
    CREATE TABLE tb_part_sales (
        id_sale INT UNSIGNED AUTO_INCREMENT,
        sale_date DATE NOT NULL,
        amount DECIMAL(10,2) NOT NULL,
        region VARCHAR(20) NOT NULL,
        PRIMARY KEY(id_sale, sale_date)
    )
    PARTITION BY RANGE (YEAR(sale_date)) (
        PARTITION p_2023 VALUES LESS THAN (2024),
        PARTITION p_2024 VALUES LESS THAN (2025),
        PARTITION p_2025 VALUES LESS THAN (2026),
        PARTITION p_future VALUES LESS THAN MAXVALUE
    );
    ```

!!! info Quick Reference Table

    | **Object Type**                    | **Naming Pattern**                                                    | **Prefix**        | **Suffix Options**                                           | **Examples**                     | **Obs**                                                                      |
    | ---------------------------------- | --------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------- |
    | **General Names**                  | `snake_case`                                                          | Recomendado       |                                                              | `product_name`                   | [a-z0-9_]                                                                    |
    | **Databases**                      | `[prefix_]<singular_name>`                                            | `db`              |                                                              | `db_customer`                    | Avoid generic names (`test`, `data`, `mydb`).                                |
    | **Tables**                         | `[prefix_]<plural_name>`                                              | `tb`              |                                                              | `tb_users`                       |                                                                              |
    | **Tables N to N**                  | `[prefix_]<plural_name>_x_<plural_name>`                              | `tb`              |                                                              | `tb_users_x_user_details`        |                                                                              |
    | **Temporary Tables**               | `<prefix>_<plural_name>`                                              | `tmp`             |                                                              | `tmp_user_staging`               | ^^                                                                           |
    | **Materialized View**              | `<prefix>_<plural_name>`                                              | `mv`              |                                                              | `mv_daily_sales`                 | ^^                                                                           |
    | **Connect Engine**                 | `<prefix>_<plural_name>`                                              | `ln`              |                                                              | `ln_remote_users`                | ^^                                                                           |
    | - **Fields**                       | `<prefix>_<singular_name>`,`<singular_name>`                          | `id`              |                                                              | `id_user`, `name_product`        | Prefix used by Numeric identifiers (PK,UK,FK,Idx)                            |
    | - **Primary Key**                  | `<prefix>[_field_name]`                                               | `pk`              |                                                              | `pk_id_user`, `pk`               | `[BIG]INT UNSIGNED AUTO_INCREMENT`                                           |
    | - **Unique Key**                   | `<prefix>[_field_name]`                                               | `Uk`              |                                                              | `uk_cpf`, `uk`                   |                                                                              |
    | - **Indexes**                      | `<prefix>_<field_name>`                                               | `idx`             |                                                              | `idx_user_email`                 |                                                                              |
    | - **Foreign Key**                  | `<prefix>_<table_name>_<field_name>`                                  | `fk`              |                                                              | `fk_orders_id_user`              |                                                                              |
    | - **Constraints**                  | `<prefix>_<field_name>`                                               | `ck`              |                                                              | `ck_user_age_min`                |                                                                              |
    | **Triggers**                       | `<prefix>_<table_name>_<`[when](#tr_when)`>_<`[action](#tr_action)`>` | `tr`              | when(`_before`,`_after`), action(`_ins`,`_upd`,`_del`)       | `tr_users_before_ins`            |                                                                              |
    | **Views**                          | `<prefix>_<plural_name>`                                              | `vw`              |                                                              | `vw_active_users`                |                                                                              |
    | **Procedures**                     | `<prefix>_<singular_name>`                                            | `sp`              |                                                              | `sp_calculate_discount`          |                                                                              |
    | - **Procedures Arguments**         | `<prefix>_<singular_name>`                                            | `in`, `out`, `io` |                                                              | `in_id_user`, `out_total_amount` |                                                                              |
    | **Procedures Event**               | `<prefix>_<event_name>`                                               | `spev`            |                                                              | `spev_daily_report`              | Event                                                                        |
    | **Procedures MV**                  | `<prefix>_<plural_name>`                                              | `spmv`            |                                                              | `spmv_refresh_daily_sales`       | Materialized View                                                            |
    | **Procedures Trigger**             | `<prefix>_<table_name>[_`[when](#tr_when)`][_`[action](#tr_action)`]` | `sptr`            |                                                              | `sptr_users_before_ins`          | Trigger                                                                      |
    | - **Procedures Trigger Arguments** | `<prefix>_<singular_name>`                                            | `new`, `old`      |                                                              | `new_email`, `old_status`        |                                                                              |
    | **Functions**                      | `<prefix>_<singular_name>`                                            | `fn`              |                                                              | `fn_calculate_age`               |                                                                              |
    | - **Functions Arguments**          | `<prefix>_<singular_name>`                                            | `in`              |                                                              | `in_id_user`, `in_order_amount`  |                                                                              |
    | **Sequences**                      | `<prefix>_<singular_name>`                                            | `sq`              |                                                              | `sq_order_number`                |                                                                              |
    | **Events**                         | `<prefix>_<singular_name>[_`[frequence](#events_sufix)`]`             | `ev`              | frequence(see details in topic)                              | `ev_daily_backup`                |                                                                              |
    | **Users**                          | `[prefix_][`[subprefix](#roles_subprefix)`_]<singular_name>`          | `usr`             | subprefix(`ro_`,`rw_`,`full_`,`admin_`,`app_`,`ext_`,`tmp_`) | `usr_admin`, `fulano`            |                                                                              |
    | **Roles**                          | `<prefix>_[`[subprefix](#roles_subprefix)`_]<singular_name>`          | `rl`              | ^^                                                           | `rl_admin_user`                  | Separate by domain and permission                                            |
    | **Servers**                        | `<prefix>_<singular_name>`                                            | `sr`              |                                                              | `sr_web_01`, `sr_db_primary`     |                                                                              |
    | **Range Partitioning**             | `<prefix>_<table_name>_<range_start>_to_<range_end>`                  | `pr`              |                                                              | `pr_orders_20230101_to_20230331` | Partitions data based on ranges of values (dates, numbers, or alphabetical). |
    | - **Range-Hash Partitioning**      | `<prefix>_<table_name>_<range>_<subprefix>_<hash_number>`             | `pr`              | subprefix(`ph`)                                              | `pr_sales_2024_ph_01`            | Combines range partitioning with hash partitioning.                          |
    | **List Partitioning**              | `<prefix>_<table_name>_<value1>_<value2>[_...]`                       | `pl`              |                                                              | `pl_countries_USA_CAN_MEX`       | Partitions data based on specific list of values.                            |
    | - **List-Range Partitioning**      | `<prefix>_<table_name>_<list_values>_<subprefix>_<range>`             | `pl`              | subprefix(`pr`)                                              | `pl_orders_Online_pr_Q1`         | Combines list partitioning with range partitioning.                          |
    | **Hash Partitioning**              | `<prefix>_<table_name>_<partition_number>`                            | `ph`              |                                                              | `ph_users_01`                    | Partitions data based on the result of a hash function applied to a column.  |
    | **Key Partitioning**               | `<prefix>_<table_name>_<partition_number>`                            | `pk`              |                                                              | `pk_accounts_01`                 | Similar to hash partitioning, but the database manages the hash key.         |
