---
title: Coding Standards - Snowflake
sidebar: coding_standards_sidebar
sidebar_position: 2
---

This page elaborates the standards and guidelines for snowflake developers that they should be following when coding for DNA using snowflake.

### Maintainability
 
All Snowflake code must be commented for maintainability.  

An example of a file header is given below: 
- - -
/* <br />
**Procedure:**          Stored Procedure Name<br /> 
**Create Date:**        05/06/2023 (MM/DD/YYYY) <br />
**Author:**             ATTUID <br />
**Description:**        Verbose description of what the query does goes here. Be specific and don't be afraid to say too much. More is better, than less, every single time. Think about **&quot;what, when, where, how and why&quot;** when authoring a description. <br />
**Parameter(s):**       @param1 - description and usage <br />
                        @param2 - description and usage <br />
**SUMMARY OF CHANGES** <br />
Date (DD/MM/YYYY)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Author&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comments<br />
2018-03-22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ATTUID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;General formatting and added header information.

<!-- |Date (DD/MM/YYYY)|Author|Comments
|---|---|---|
|2018-03-22|ATTUID|General formatting and added header information.| -->

*/ 



- - -

### Creation of Files and Tables

When creating new tables, please make sure to include the following columns:

Use this example to understand:
- - - 
>CREATE TABLE  TABLE_NAME <br />
>( <br />
>ID NUMBER(38,0) NOT NULL AUTOINCREMENT, -- Surrogate Key <br />
>INTEGRATION_ID VARCHAR(50), -- Unique Source Key <br />
>-- COL1 <br />
>-- COL2 <br />
>-- COL3 <br />
>W_INSERT_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP(), --Default Sysdate  <br />
>W_UPDATE_DT TIMESTAMP--Default Sysdate  <br />
>) <br />
- - - 

### Custom Objects

The following standards should be followed for custom objects. 
 
- Custom Tables must begin with CUST_* 
- Fact Tables must end with *_F 
- Fact Staging Tables must end with *_FS 
- Fact Temporary Tables must end with *_FT 
- Fact Staging Error Table must end with *_FSE 
- Dimensional Tables must end with *_D 
- Dimensional Stage Table must end with *_DS 
- Dimensional Error Table must end with *_DSE 
- Dimensional Temporary Table must end with *_DT 
- Dimensional Hierarchy Table must end with *_DH 
- Aggregation table must end with *_A 
 
Use this table for understanding:

|Table Type|Table Prefix|Table Suffix|
|---|---|---|
|Dimension|CUST_|_D| 
|Dimension Stage|CUST_ | _DS 
|Dimension Temporary|CUST_ | _DT 
|Dimension Staging Error|CUST_ | _DSE 
|Dimension Hierarchy| CUST_ | _DH 
|Fact Table|CUST_ | _F 
|Fact Stage|CUST_ | _FS 
|Fact Temporary|CUST_ | _TF 
|Fact Staging Error|CUST_ | _FSE |

Following are examples of how the entire table name would be:
 
- **Name of a View**: CUST_ff__V _where_ V=View, ff=CPFR
- **Name of a table in SPEND**: CUST_GBL_LOCATION_ALL_SCM_V
- **Sequence Table name:** CUST_table_S _where_ table=Description<br />
// Table name, unless the table has more than one sequence. S=Sequence
CUST_WARRANTY_RECORD_ID_S  
- **Stored Procedure/ Function**: CUST_ff _proc <br />CUST_PURCH_SUPPLIER_PROC  