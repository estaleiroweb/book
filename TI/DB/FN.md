# Database Normal Forms

Database Normalization Explained

Normalization is a database design process that organizes tables to minimize redundancy and dependencies, reducing insertion, update, and deletion anomalies.

- **1NF (First Normal Form)**
- Each table has a primary key
- Each column contains atomic (non-divisible) values
- There are no repeating groups or arrays
- Each record is unique
- **Example:** Transforming a table with multiple phone numbers in one column (555-1234, 555-5678) into separate tables or a one-to-many relationship.
- **2NF (Second Normal Form)**
- It is already in 1NF
- All non-key attributes are fully functionally dependent on the primary key
- Eliminates partial dependencies (when an attribute depends only on part of a composite key)
- **Example:** In a `orders_products` table with a composite key (order_id, product_id), the `product_name` field should be moved to the `products` table because it depends only on `product_id`, not the entire composite key.
- **3NF (Third Normal Form)**
- It is already in 2NF
- There are no transitive dependencies
- Every non-key attribute depends directly on the primary key, not on another non-key attribute
- **Example:** In an `employees` table with department information (department_name, department_location), these fields should be moved to a `departments` table and referenced by a foreign key `department_id`.
- **BCNF (Boyce-Codd Normal Form)**
- It is already in 3NF
- For every functional dependency X → Y, X must be a superkey
- It is a more rigorous form of 3NF
- Applied when there are multiple overlapping candidate keys
- **Example:** In a `professor_course` table where a professor teaches only one course, but a course can be taught by several professors, and a professor can be qualified to teach several courses, it would be necessary to separate into `qualifications` and `course_assignments` tables.
- **4NF (Fourth Normal Form)**
- It is already in BCNF
- Does not contain multi-valued dependencies
- Solves problems that arise when an entity can have multiple values in more than one independent attribute
- **Example:** A `student_sport_instrument` table where a student can play multiple sports and play multiple instruments should be separated into two tables: `student_sport` and `student_instrument`.
- **5NF (Fifth Normal Form)**
- It is already in 4NF
- Also known as Projection-Join Normal Form (PJNF)
- Addresses complex join dependencies
- A table is in 5NF if it cannot be decomposed into smaller tables without loss of information
- **Example:** In a system where representatives sell products in specific regions, a `representative_product_region` table should be decomposed into `representative_product`, `product_region`, and `representative_region` to avoid redundancies and anomalies in ternary relationships.
- **6NF (Sixth Normal Form)**
- It is already in 5NF
- Deals with temporal or historical join dependencies
- Decomposes attributes into separate tables, usually used in data warehousing
- Useful for storing historical or temporally variable data
- **Example:** An `employee` table with attributes that change at different times (salary, department, position) would be decomposed into separate tables for each time-varying attribute.
- **Denormalization**
- In some cases, especially to improve query performance, it may be necessary to deliberately denormalize:
    - Add controlled redundancy
    - Pre-calculate frequent aggregations
    - Combine tables with 1:1 relationships
    - Use in read-intensive queries where consistency is already guaranteed by other means
- Denormalization should be applied strategically, not as a standard solution.
- It is usually implemented through Materialized Views or batch processes.