---
title: Development Standards - SQL Nomenclature
sidebar: coding_standards_sidebar
sidebar_position: 4
---

## Midas Enterprise Program Specific

This page elaborates the standards and guidelines for snowflake developers that they should be following when naming various tables, schema, views, facts, dimensions, and any other objects.
The guidelines in this document are specific only for the database and its related schema for Midas Enterprise.

For DNA initiatives such as SPEND and CPFR, please refer to their respective guidelines.

### General Naming Conventions

All database objects, including schemas, tables, columns, constraints, and aliases, must strictly use lowercase letters to maintain consistency and enhance readability. **Avoid using uppercase, mixed-case, or special characters in object names.**

 - - -

### Table Naming Conventions

Please follow the prefixes below for clear and consistent identification of table types:

**Fact Tables:**

Prefix with ```fact_``` to clearly identify tables storing measurable, quantitative data.

Examples:

> **``` fact_```**```sales```
>
> **``` fact_```**```inventory```
>
> **``` fact_```**```transactions```

**Dimension Tables:**

Prefix with ```dim_``` to identify tables storing descriptive, categorical information.

Examples:

> **```dim_```**```customer```
>
> **```dim_```**```product```
>
> **```dim_```**```time```

**Staging Tables:**

Prefix with ```stg_``` to identify intermediate tables used for raw data loading or temporary transformations.

Examples:

> **```stg_```**```orders```
>
> **```stg_```**```product_data```
>

**Bridge Tables:**

Prefix with ```bridge_```for tables resolving many-to-many relationships.

Examples:

> **```bridge_```**```customer_order```
>
> **```bridge_```**```product_category```

**Lookup Tables**

Use the prefix ```lookup_``` for tables storing key-value pairs or reference data.

Examples:

> **```lookup_```**```country_code```
>
> **```lookup_```**```payment_status```

**Mapping Tables**

Use the prefix ```map_``` for tables managing relationships between entities.

Examples:

> **```map_```**```user_role```
>
> **```map_```**```product_supplier```

**Intermediate Tables**

Prefix with ```int_``` to indicate tables used for intermediate or transformation stages during data processing.

Examples:

> **```int_```**```sales_cleaned```
>
> **```int_```**```customer_temp```

**Audit Tables**

Prefix with ```audit_``` to store metadata about changes, user activities, or data operations.

Examples:

> **```audit_```**```sales_changes```
>
> **```audit_```**```customer_updates```

**Log Tables**

Prefix with ```log_``` to store system-level or application-specific logs for debugging and monitoring purposes.

Examples:

> **```log_```**```data_load```
>
> **```log_```**```api_calls```

 - - -

### Schema Naming Conventions

Schemas must also follow consistent naming conventions for clarity.

Examples:

> fact_
>
> dim_
>
> stg_

 - - -

### Column Naming Conventions

All tables in the schema shall use ```id``` as the primary key, including log and audit tables. Foreign keys should use the format ```table_name_id```, where ```table_name``` is the name of the referenced table.

**Fact Tables**

- **Primary Key:** ```id``` (Auto-generated surrogate key)

- **Foreign Keys:** Use the referenced table name (e.g., ```customer_id```, ```product_id```).

- **Measures:** Descriptive names for metrics (e.g., ```sales_amount```, ```profit_margin```).

**Dimension Tables:**

- **Primary Key:** ```id``` (Auto-generated surrogate key)

- **Attributes:** Use meaningful names (e.g., ```product_name```, ```model_name```).

 - - - 

### View Naming Conventions

Prefix with ```vw_``` to differentiate views from tables and other objects.

Examples:

> **```vw_```**```sales_summary```
>
> **```vw_```**```active_customers```

 - - -

### Common Columns and Nomenclature

All tables should have these columns:
- id
- created_dt
- created_by
- modified_dt
- modified_by

regardless of whether the table is ever going to be modified.

All date columns should end with ```_dt```.

---

### Advantages of Using Prefix-Based Naming:

- **Clarity:** Easy to distinguish between facts, dimensions, and staging tables.

- **Consistency:** Ensures uniformity across the database.

- **Maintainability:** Simplifies debugging and understanding data lineage.

---