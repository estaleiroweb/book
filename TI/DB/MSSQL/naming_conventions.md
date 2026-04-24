# MSSQL Database Naming Conventions: Best Practices

See [MariaDb](../MariaDB/naming_conventions.md)

!!! info MS SQL Server Objects

    - Follow the same general naming principles: English, lowercase, snake_case
    - Use descriptive prefixes for different object types

    ### Aggregate Function
    - Prefix: `agg_`
    - Example: `agg_calculate_median`

    ### Assembly
    - Prefix: `asm_`
    - Example: `asm_string_utilities`

    ### CLR Functions and Procedures
    - Prefixes:
    - CLR Scalar Function: `clr_fn_`
    - CLR Stored Procedure: `clr_sp_`
    - CLR Table-Valued Function: `clr_tvf_`
    - Examples: `clr_fn_format_phone`, `clr_sp_process_xml`, `clr_tvf_split_string`

    ### Constraints
    - Prefixes:
    - Check Constraint: `ck_`
    - Default Constraint: `df_`
    - Foreign Key Constraint: `fk_`
    - Primary Key Constraint: `pk_`
    - Format: `<prefix>_<table_name>_<field_name>`
    - Examples: `ck_employees_age_range`, `df_orders_status`, `fk_orders_id_customer`

    ### Internal Table
    - Prefix: `it_`
    - Example: `it_temp_calculations`

    ### Plan Guide
    - Prefix: `pg_`
    - Example: `pg_complex_join_query`

    ### Rule
    - Prefix: `rl_`
    - Example: `rl_validate_phone`

    ### SQL Functions
    - Prefixes:
    - SQL Inline Table-Valued Function: `itvf_`
    - SQL Scalar Function: `fn_` (consistent with general guidelines)
    - SQL Stored Procedure: `sp_` (consistent with general guidelines)
    - Examples: `itvf_get_active_users`, `fn_calculate_discount`

    ### Type Table
    - Prefix: `tt_`
    - Example: `tt_address_type`

    ### User Table
    - Prefix: `tb_` (consistent with general guidelines)
    - Example: `tb_customers`

    ### XML Schema Collection
    - Prefix: `xsc_`
    - Example: `xsc_invoice_format`

!!! info Shared Practices Across Platforms

    - **Consistency is key**: Choose one style and apply it throughout your entire data ecosystem
    - **Document everything**: Use comments, README files, or wikis to explain your naming conventions
    - **Include a version number** in your naming convention documentation
    - **Automated validation**: Consider implementing tools to validate naming conventions across different platforms
    - **Migration strategy**: When adopting new conventions, create a clear plan for renaming existing objects

!!! info Quick Reference Table for Additional Database Objects

    | **Object Type**           | **Naming Pattern**            | **Prefix** | **Example**                   |
    | ------------------------- | ----------------------------- | ---------- | ----------------------------- |
    | Aggregate Function        | `<prefix>_<descriptive_name>` | `agg_`     | `agg_calculate_median`        |
    | Assembly                  | `<prefix>_<descriptive_name>` | `asm_`     | `asm_string_utilities`        |
    | CLR Scalar Function       | `<prefix>_<descriptive_name>` | `clr_fn_`  | `clr_fn_format_phone`         |
    | CLR Stored Procedure      | `<prefix>_<descriptive_name>` | `clr_sp_`  | `clr_sp_process_xml`          |
    | CLR Table-Valued Function | `<prefix>_<descriptive_name>` | `clr_tvf_` | `clr_tvf_split_string`        |
    | Default Constraint        | `<prefix>_<table>_<field>`    | `df_`      | `df_orders_status`            |
    | Internal Table            | `<prefix>_<descriptive_name>` | `it_`      | `it_temp_calculations`        |
    | Plan Guide                | `<prefix>_<descriptive_name>` | `pg_`      | `pg_complex_join_query`       |
    | SQL Inline TVF            | `<prefix>_<descriptive_name>` | `itvf_`    | `itvf_get_active_users`       |
    | Type Table                | `<prefix>_<descriptive_name>` | `tt_`      | `tt_address_type`             |
    | XML Schema Collection     | `<prefix>_<descriptive_name>` | `xsc_`     | `xsc_invoice_format`          |

!!! info MS SQL Server Examples

    ```sql
    -- MS SQL Server Table with Constraints Example
    CREATE TABLE tb_employees (
        id_employee INT IDENTITY(1,1) NOT NULL,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        birth_date DATE NOT NULL,
        hire_date DATE NOT NULL,
        salary DECIMAL(10, 2) NOT NULL,
        CONSTRAINT pk_employees PRIMARY KEY (id_employee),
        CONSTRAINT ck_employees_birth_date CHECK (birth_date > '1940-01-01'),
        CONSTRAINT df_employees_hire_date DEFAULT GETDATE() FOR hire_date
    );

    -- MS SQL Server CLR Function Example
    CREATE FUNCTION clr_fn_format_phone(@phone VARCHAR(20))
    RETURNS VARCHAR(20)
    AS EXTERNAL NAME PhoneUtils.Formatter.FormatPhone;

    -- MS SQL Server Table-Valued Function Example
    CREATE FUNCTION itvf_get_employees_by_dept(@dept_id INT)
    RETURNS TABLE
    AS
    RETURN (
        SELECT id_employee, first_name, last_name
        FROM tb_employees
        WHERE id_department = @dept_id
    );
    ```
