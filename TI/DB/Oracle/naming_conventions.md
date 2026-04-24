# Oracle Database Naming Conventions: Best Practices

See [MariaDb](../MariaDB/naming_conventions.md)

!!! info Oracle Objects

    - Maintain consistency with general naming principles: English, lowercase, snake_case
    - Use appropriate prefixes to indicate object type
    - Document with comments whenever possible

    ### Analytic View
    - Prefix: `av_`
    - Example: `av_sales_performance`

    ### Attribute Dimension
    - Prefix: `ad_`
    - Example: `ad_customer_attributes`

    ### Cluster
    - Prefix: `cl_`
    - Example: `cl_order_items`

    ### Context
    - Prefix: `ctx_`
    - Example: `ctx_application_settings`

    ### Database Link
    - Prefix: `lnk_`
    - Example: `lnk_remote_warehouse`

    ### DBFS Link
    - Prefix: `dfs_`
    - Example: `dfs_external_storage`

    ### Dimension
    - Prefix: `dim_`
    - Example: `dim_time`

    ### Edition
    - Prefix: `ed_`
    - Example: `ed_quarterly_version`

    ### Evaluation Context
    - Prefix: `ec_`
    - Example: `ec_alert_conditions`

    ### Index Type
    - Prefix: `idt_`
    - Example: `idt_spatial_index`

    ### Java Objects
    - Prefixes:
    - Java Class: `jcl_`
    - Java Data: `jdt_`
    - Java Resource: `jrs_`
    - Java Source: `jsrc_`
    - Examples: `jcl_connection_manager`, `jdt_customer_data`

    ### Job
    - Prefix: `job_`
    - Example: `job_nightly_processing`

    ### Library
    - Prefix: `lib_`
    - Example: `lib_common_functions`

    ### Materialized View Log
    - Prefix: `mvl_`
    - Example: `mvl_sales_summary`

    ### Materialized View Rewrite Equivalence
    - Prefix: `mvre_`
    - Example: `mvre_inventory_calculations`

    ### Mining Model
    - Prefix: `mm_`
    - Example: `mm_customer_segmentation`

    ### Operator
    - Prefix: `op_`
    - Example: `op_text_extractor`

    ### Package and Package Body
    - Prefix: `pkg_`
    - Example: `pkg_user_management`
    - Body follows the same name as the package

    ### Snapshot
    - Prefix: `sn_`
    - Example: `sn_monthly_sales`

    ### Synonym
    - Prefix: `syn_`
    - Example: `syn_customer_view`

    ### Type and Type Body
    - Prefix: `tp_`
    - Example: `tp_address`
    - Body follows the same name as the type

    ### XML Schema
    - Prefix: `xs_`
    - Example: `xs_inventory_document`

!!! info Shared Practices Across Platforms

    - **Consistency is key**: Choose one style and apply it throughout your entire data ecosystem
    - **Document everything**: Use comments, README files, or wikis to explain your naming conventions
    - **Include a version number** in your naming convention documentation
    - **Automated validation**: Consider implementing tools to validate naming conventions across different platforms
    - **Migration strategy**: When adopting new conventions, create a clear plan for renaming existing objects

!!! info Quick Reference Table for Additional Database Objects

    | **Object Type**           | **Naming Pattern**            | **Prefix** | **Example**                   |
    | ------------------------- | ----------------------------- | ---------- | ----------------------------- |
    | Analytic View             | `<prefix>_<descriptive_name>` | `av_`      | `av_sales_performance`        |
    | Attribute Dimension       | `<prefix>_<descriptive_name>` | `ad_`      | `ad_customer_attributes`      |
    | Cluster                   | `<prefix>_<descriptive_name>` | `cl_`      | `cl_order_items`              |
    | Context                   | `<prefix>_<descriptive_name>` | `ctx_`     | `ctx_application_settings`    |
    | Database Link             | `<prefix>_<descriptive_name>` | `lnk_`     | `lnk_remote_warehouse`        |
    | DBFS Link                 | `<prefix>_<descriptive_name>` | `dfs_`     | `dfs_external_storage`        |
    | Dimension                 | `<prefix>_<descriptive_name>` | `dim_`     | `dim_time`                    |
    | Edition                   | `<prefix>_<descriptive_name>` | `ed_`      | `ed_quarterly_version`        |
    | Evaluation Context        | `<prefix>_<descriptive_name>` | `ec_`      | `ec_alert_conditions`         |
    | Index Type                | `<prefix>_<descriptive_name>` | `idt_`     | `idt_spatial_index`           |
    | Java Class                | `<prefix>_<descriptive_name>` | `jcl_`     | `jcl_connection_manager`      |
    | Java Data                 | `<prefix>_<descriptive_name>` | `jdt_`     | `jdt_customer_data`           |
    | Java Resource             | `<prefix>_<descriptive_name>` | `jrs_`     | `jrs_config_files`            |
    | Java Source               | `<prefix>_<descriptive_name>` | `jsrc_`    | `jsrc_utility_functions`      |
    | Job                       | `<prefix>_<descriptive_name>` | `job_`     | `job_nightly_processing`      |
    | Library                   | `<prefix>_<descriptive_name>` | `lib_`     | `lib_common_functions`        |
    | Materialized View Log     | `<prefix>_<descriptive_name>` | `mvl_`     | `mvl_sales_summary`           |
    | MV Rewrite Equivalence    | `<prefix>_<descriptive_name>` | `mvre_`    | `mvre_inventory_calculations` |
    | Mining Model              | `<prefix>_<descriptive_name>` | `mm_`      | `mm_customer_segmentation`    |
    | Operator                  | `<prefix>_<descriptive_name>` | `op_`      | `op_text_extractor`           |
    | Package                   | `<prefix>_<descriptive_name>` | `pkg_`     | `pkg_user_management`         |
    | Package Body              | Same as package               | `pkg_`     | `pkg_user_management`         |
    | Snapshot                  | `<prefix>_<descriptive_name>` | `sn_`      | `sn_monthly_sales`            |
    | Synonym                   | `<prefix>_<descriptive_name>` | `syn_`     | `syn_customer_view`           |
    | Type                      | `<prefix>_<descriptive_name>` | `tp_`      | `tp_address`                  |
    | Type Body                 | Same as type                  | `tp_`      | `tp_address`                  |
    | XML Schema                | `<prefix>_<descriptive_name>` | `xs_`      | `xs_inventory_document`       |

!!! info Oracle Examples

    ```sql
    -- Oracle Package Example
    CREATE OR REPLACE PACKAGE pkg_order_management AS
    PROCEDURE sp_create_order(
        in_customer_id IN NUMBER,
        in_order_date IN DATE,
        out_order_id OUT NUMBER
    );
    
    FUNCTION fn_calculate_total(in_order_id IN NUMBER) RETURN NUMBER;
    END pkg_order_management;
    /

    -- Oracle Type Example
    CREATE OR REPLACE TYPE tp_address AS OBJECT (
    street VARCHAR2(100),
    city VARCHAR2(50),
    state VARCHAR2(25),
    postal_code VARCHAR2(15)
    );
    /

    -- Oracle Materialized View Example
    CREATE MATERIALIZED VIEW mv_monthly_sales
    REFRESH COMPLETE ON DEMAND
    AS
    SELECT 
    TRUNC(order_date, 'MM') as month,
    SUM(total_amount) as total_sales
    FROM tb_orders
    GROUP BY TRUNC(order_date, 'MM');

    -- Oracle Database Link Example
    CREATE DATABASE LINK lnk_reporting
    CONNECT TO report_user IDENTIFIED BY password
    USING 'reporting_db';
    ```
