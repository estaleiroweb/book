# PostgreeSQL Database Naming Conventions: Best Practices

See [MariaDb](../MariaDB/naming_conventions.md)

!!! info PostgreSQL Objects

    - Maintain consistency with general naming principles: English, lowercase, snake_case
    - PostgreSQL internally uses object types (r, i, S, etc.), but we recommend using descriptive prefixes

    ### Regular Table (r)
    - Prefix: `tb_` (consistent with general guidelines)
    - Example: `tb_customers`

    ### Composite Type (c)
    - Prefix: `ctp_`
    - Example: `ctp_address`

    ### TOAST Table (t)
    - Prefix: `tst_`
    - Example: `tst_large_documents`

    ### Foreign Table (f)
    - Prefix: `ftb_`
    - Example: `ftb_external_products`

    ### Partitioned Table (p)
    - Prefix: `ptb_`
    - Example: `ptb_historical_orders`

    ### Partitioned Index (I)
    - Prefix: `pidx_`
    - Example: `pidx_historical_orders_date`

    ### PostgreSQL-Specific Extensions
    - Extensions: Use default names provided by PostgreSQL
    - Custom Extensions: `ext_<name>`
    - Example: `ext_custom_functions`

    ### Schema
    - Use meaningful domain or module names
    - Examples: `accounting`, `inventory`, `security`, `audit`
    - Prefix for application-specific schemas: `app_<name>`
    - Example: `app_ecommerce`

!!! info Shared Practices Across Platforms

    - **Consistency is key**: Choose one style and apply it throughout your entire data ecosystem
    - **Document everything**: Use comments, README files, or wikis to explain your naming conventions
    - **Include a version number** in your naming convention documentation
    - **Automated validation**: Consider implementing tools to validate naming conventions across different platforms
    - **Migration strategy**: When adopting new conventions, create a clear plan for renaming existing objects

!!! info Quick Reference Table for Additional Database Objects

    | **Object Type**           | **Naming Pattern**            | **Prefix** | **Example**                   |
    | ------------------------- | ----------------------------- | ---------- | ----------------------------- |
    | Composite Type            | `<prefix>_<descriptive_name>` | `ctp_`     | `ctp_address`                 |
    | TOAST Table               | `<prefix>_<descriptive_name>` | `tst_`     | `tst_large_documents`         |
    | Foreign Table             | `<prefix>_<descriptive_name>` | `ftb_`     | `ftb_external_products`       |
    | Partitioned Table         | `<prefix>_<descriptive_name>` | `ptb_`     | `ptb_historical_orders`       |
    | Partitioned Index         | `<prefix>_<descriptive_name>` | `pidx_`    | `pidx_historical_orders_date` |

!!! info PostgreSQL Examples

    ```sql
    -- PostgreSQL Composite Type Example
    CREATE TYPE ctp_address AS (
        street TEXT,
        city TEXT,
        state TEXT,
        zip TEXT
    );

    -- PostgreSQL Function with Type Example
    CREATE OR REPLACE FUNCTION fn_get_full_address(addr ctp_address)
    RETURNS TEXT AS $$
    BEGIN
        RETURN addr.street || ', ' || addr.city || ', ' || addr.state || ' ' || addr.zip;
    END;
    $$ LANGUAGE plpgsql;

    -- PostgreSQL Foreign Table Example
    CREATE SERVER sr_external_db
        FOREIGN DATA WRAPPER postgres_fdw
        OPTIONS (host 'remote.example.com', dbname 'external_db');
        
    CREATE FOREIGN TABLE ftb_remote_products (
        id_product INTEGER NOT NULL,
        name_product VARCHAR(200) NOT NULL,
        price NUMERIC(10,2) NOT NULL
    )
    SERVER sr_external_db
    OPTIONS (schema_name 'public', table_name 'tb_products');

    -- PostgreSQL Partitioned Table Example
    CREATE TABLE ptb_sales (
        id_sale SERIAL,
        sale_date DATE NOT NULL,
        amount NUMERIC(10,2) NOT NULL
    ) PARTITION BY RANGE (sale_date);

    CREATE TABLE pr_sales_2024 PARTITION OF ptb_sales
        FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
        
    CREATE TABLE pr_sales_2025 PARTITION OF ptb_sales
        FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');
    ```

    ```sql
    -- PostgreSQL Composite Type Example
    CREATE TYPE ctp_address AS (
        street TEXT,
        city TEXT,
        state TEXT,
        zip TEXT
    );

    -- PostgreSQL Function with Type Example
    CREATE OR REPLACE FUNCTION fn_get_full_address(addr ctp_address)
    RETURNS TEXT AS $$
    BEGIN
        RETURN addr.street || ', ' || addr.city || ', ' || addr.state || ' ' || addr.zip;
    END;
    $$ LANGUAGE plpgsql;

    -- PostgreSQL Foreign Table Example
    CREATE SERVER sr_external_db
        FOREIGN DATA WRAPPER postgres_fdw
        OPTIONS (host 'remote.example.com', dbname 'external_db');
        
    CREATE FOREIGN TABLE ftb_remote_products (
        id_product INTEGER NOT NULL,
        name_product VARCHAR(200) NOT NULL,
        price NUMERIC(10,2) NOT NULL
    )
    SERVER sr_external_db
    OPTIONS (schema_name 'public', table_name 'tb_products');

    -- PostgreSQL Partitioned Table Example
    CREATE TABLE ptb_sales (
        id_sale SERIAL,
        sale_date DATE NOT NULL,
        amount NUMERIC(10,2) NOT NULL
    ) PARTITION BY RANGE (sale_date);

    CREATE TABLE pr_sales_2024 PARTITION OF ptb_sales
        FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
        
    CREATE TABLE pr_sales_2025 PARTITION OF ptb_sales
        FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');
    ```
