# MongoDB Database Naming Conventions: Best Practices

See [MariaDb](../MariaDB/naming_conventions.md)

!!! info MongoDB Objects

    - Although MongoDB is schemaless, consistent naming conventions are still important
    - Use lowercase with snake_case for all names
    - Singular names for databases, plural for collections

    ### Databases
    - No prefix required
    - Use singular, descriptive names: `ecommerce`, `analytics`, `user_management`

    ### Collections (equivalent to tables)
    - Use plural names: `users`, `products`, `orders`
    - Prefix for temporary collections: `tmp_`
    - Example: `tmp_import_data`

    ### Views
    - Prefix: `vw_`
    - Example: `vw_active_users`

    ### Indexes
    - Naming convention: `idx_<collection_name>_<field(s)>`
    - Example: `idx_users_email`, `idx_products_category_price`

    ### Functions (Server-Side)
    - Prefix: `fn_`
    - Example: `fn_calculate_order_total`

    ### Aggregation Pipelines (if stored)
    - Prefix: `agg_`
    - Example: `agg_monthly_sales_report`

    ### Change Streams
    - Prefix: `cs_`
    - Example: `cs_order_updates`

!!! info Shared Practices Across Platforms

    - **Consistency is key**: Choose one style and apply it throughout your entire data ecosystem
    - **Document everything**: Use comments, README files, or wikis to explain your naming conventions
    - **Include a version number** in your naming convention documentation
    - **Automated validation**: Consider implementing tools to validate naming conventions across different platforms
    - **Migration strategy**: When adopting new conventions, create a clear plan for renaming existing objects

!!! info Quick Reference Table for Additional Database Objects

    | **Object Type**           | **Naming Pattern**            | **Prefix** | **Example**                   |
    | ------------------------- | ----------------------------- | ---------- | ----------------------------- |
    | Collections               | Plural names                  | None       | `users`, `products`           |
    | Temporary Collections     | `<prefix>_<plural_name>`      | `tmp_`     | `tmp_import_data`             |
    | Aggregation Pipelines     | `<prefix>_<descriptive_name>` | `agg_`     | `agg_monthly_sales_report`    |
    | Change Streams            | `<prefix>_<descriptive_name>` | `cs_`      | `cs_order_updates`            |

!!! info MongoDB Examples

    ```javascript
    // MongoDB Collection Creation Example
    db.createCollection("users")

    // MongoDB Index Creation Example
    db.users.createIndex({ "email": 1 }, { name: "idx_users_email", unique: true })

    // MongoDB View Creation Example
    db.createView(
    "vw_active_users",
    "users",
    [
        { $match: { status: "active" } },
        { $project: { _id: 1, username: 1, email: 1, last_login: 1 } }
    ]
    )

    // MongoDB Function Creation Example
    db.system.js.save({
    _id: "fn_calculate_order_total",
    value: function(orderId) {
        const order = db.orders.findOne({ _id: orderId });
        if (!order) return 0;
        
        let total = 0;
        for (const item of order.items) {
        total += item.price * item.quantity;
        }
        return total;
    }
    })
    ```
