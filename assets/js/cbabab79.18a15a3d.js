"use strict";(self.webpackChunksupport_phoenix=self.webpackChunksupport_phoenix||[]).push([[1576],{4058:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"dna-knowledge-base/coding-standards/sql-nomenclature","title":"Development Standards - SQL Nomenclature","description":"Midas Enterprise Program Specific","source":"@site/docs/dna-knowledge-base/coding-standards/sql-nomenclature.md","sourceDirName":"dna-knowledge-base/coding-standards","slug":"/dna-knowledge-base/coding-standards/sql-nomenclature","permalink":"/docs/dna-knowledge-base/coding-standards/sql-nomenclature","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Development Standards - SQL Nomenclature","sidebar":"coding_standards_sidebar","sidebar_position":4},"sidebar":"coding_standards_sidebar","previous":{"title":"Development Standards - PowerBI","permalink":"/docs/dna-knowledge-base/coding-standards/powerbi"},"next":{"title":"Coding Standards - PHP","permalink":"/docs/dna-knowledge-base/coding-standards/php"}}');var r=s(4848),d=s(8453);const c={title:"Development Standards - SQL Nomenclature",sidebar:"coding_standards_sidebar",sidebar_position:4},l=void 0,o={},t=[{value:"Midas Enterprise Program Specific",id:"midas-enterprise-program-specific",level:2},{value:"General Naming Conventions",id:"general-naming-conventions",level:3},{value:"Table Naming Conventions",id:"table-naming-conventions",level:3},{value:"Schema Naming Conventions",id:"schema-naming-conventions",level:3},{value:"Column Naming Conventions",id:"column-naming-conventions",level:3},{value:"View Naming Conventions",id:"view-naming-conventions",level:3},{value:"Common Columns and Nomenclature",id:"common-columns-and-nomenclature",level:3},{value:"Advantages of Using Prefix-Based Naming:",id:"advantages-of-using-prefix-based-naming",level:3}];function a(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"midas-enterprise-program-specific",children:"Midas Enterprise Program Specific"}),"\n",(0,r.jsx)(n.p,{children:"This page elaborates the standards and guidelines for snowflake developers that they should be following when naming various tables, schema, views, facts, dimensions, and any other objects.\r\nThe guidelines in this document are specific only for the database and its related schema for Midas Enterprise."}),"\n",(0,r.jsx)(n.p,{children:"For DNA initiatives such as SPEND and CPFR, please refer to their respective guidelines."}),"\n",(0,r.jsx)(n.h3,{id:"general-naming-conventions",children:"General Naming Conventions"}),"\n",(0,r.jsxs)(n.p,{children:["All database objects, including schemas, tables, columns, constraints, and aliases, must strictly use lowercase letters to maintain consistency and enhance readability. ",(0,r.jsx)(n.strong,{children:"Avoid using uppercase, mixed-case, or special characters in object names."})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"table-naming-conventions",children:"Table Naming Conventions"}),"\n",(0,r.jsx)(n.p,{children:"Please follow the prefixes below for clear and consistent identification of table types:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Fact Tables:"})}),"\n",(0,r.jsxs)(n.p,{children:["Prefix with ",(0,r.jsx)(n.code,{children:"fact_"})," to clearly identify tables storing measurable, quantitative data."]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:" fact_"})}),(0,r.jsx)(n.code,{children:"sales"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:" fact_"})}),(0,r.jsx)(n.code,{children:"inventory"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:" fact_"})}),(0,r.jsx)(n.code,{children:"transactions"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Dimension Tables:"})}),"\n",(0,r.jsxs)(n.p,{children:["Prefix with ",(0,r.jsx)(n.code,{children:"dim_"})," to identify tables storing descriptive, categorical information."]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"dim_"})}),(0,r.jsx)(n.code,{children:"customer"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"dim_"})}),(0,r.jsx)(n.code,{children:"product"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"dim_"})}),(0,r.jsx)(n.code,{children:"time"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Staging Tables:"})}),"\n",(0,r.jsxs)(n.p,{children:["Prefix with ",(0,r.jsx)(n.code,{children:"stg_"})," to identify intermediate tables used for raw data loading or temporary transformations."]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"stg_"})}),(0,r.jsx)(n.code,{children:"orders"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"stg_"})}),(0,r.jsx)(n.code,{children:"product_data"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Bridge Tables:"})}),"\n",(0,r.jsxs)(n.p,{children:["Prefix with ",(0,r.jsx)(n.code,{children:"bridge_"}),"for tables resolving many-to-many relationships."]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"bridge_"})}),(0,r.jsx)(n.code,{children:"customer_order"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"bridge_"})}),(0,r.jsx)(n.code,{children:"product_category"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Lookup Tables"})}),"\n",(0,r.jsxs)(n.p,{children:["Use the prefix ",(0,r.jsx)(n.code,{children:"lookup_"})," for tables storing key-value pairs or reference data."]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"lookup_"})}),(0,r.jsx)(n.code,{children:"country_code"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"lookup_"})}),(0,r.jsx)(n.code,{children:"payment_status"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Mapping Tables"})}),"\n",(0,r.jsxs)(n.p,{children:["Use the prefix ",(0,r.jsx)(n.code,{children:"map_"})," for tables managing relationships between entities."]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"map_"})}),(0,r.jsx)(n.code,{children:"user_role"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"map_"})}),(0,r.jsx)(n.code,{children:"product_supplier"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Intermediate Tables"})}),"\n",(0,r.jsxs)(n.p,{children:["Prefix with ",(0,r.jsx)(n.code,{children:"int_"})," to indicate tables used for intermediate or transformation stages during data processing."]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"int_"})}),(0,r.jsx)(n.code,{children:"sales_cleaned"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"int_"})}),(0,r.jsx)(n.code,{children:"customer_temp"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Audit Tables"})}),"\n",(0,r.jsxs)(n.p,{children:["Prefix with ",(0,r.jsx)(n.code,{children:"audit_"})," to store metadata about changes, user activities, or data operations."]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"audit_"})}),(0,r.jsx)(n.code,{children:"sales_changes"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"audit_"})}),(0,r.jsx)(n.code,{children:"customer_updates"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Log Tables"})}),"\n",(0,r.jsxs)(n.p,{children:["Prefix with ",(0,r.jsx)(n.code,{children:"log_"})," to store system-level or application-specific logs for debugging and monitoring purposes."]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"log_"})}),(0,r.jsx)(n.code,{children:"data_load"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"log_"})}),(0,r.jsx)(n.code,{children:"api_calls"})]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"schema-naming-conventions",children:"Schema Naming Conventions"}),"\n",(0,r.jsx)(n.p,{children:"Schemas must also follow consistent naming conventions for clarity."}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"fact_"}),"\n",(0,r.jsx)(n.p,{children:"dim_"}),"\n",(0,r.jsx)(n.p,{children:"stg_"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"column-naming-conventions",children:"Column Naming Conventions"}),"\n",(0,r.jsxs)(n.p,{children:["All tables in the schema shall use ",(0,r.jsx)(n.code,{children:"id"})," as the primary key, including log and audit tables. Foreign keys should use the format ",(0,r.jsx)(n.code,{children:"table_name_id"}),", where ",(0,r.jsx)(n.code,{children:"table_name"})," is the name of the referenced table."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Fact Tables"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Primary Key:"})," ",(0,r.jsx)(n.code,{children:"id"})," (Auto-generated surrogate key)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Foreign Keys:"})," Use the referenced table name (e.g., ",(0,r.jsx)(n.code,{children:"customer_id"}),", ",(0,r.jsx)(n.code,{children:"product_id"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Measures:"})," Descriptive names for metrics (e.g., ",(0,r.jsx)(n.code,{children:"sales_amount"}),", ",(0,r.jsx)(n.code,{children:"profit_margin"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Dimension Tables:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Primary Key:"})," ",(0,r.jsx)(n.code,{children:"id"})," (Auto-generated surrogate key)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Attributes:"})," Use meaningful names (e.g., ",(0,r.jsx)(n.code,{children:"product_name"}),", ",(0,r.jsx)(n.code,{children:"model_name"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"view-naming-conventions",children:"View Naming Conventions"}),"\n",(0,r.jsxs)(n.p,{children:["Prefix with ",(0,r.jsx)(n.code,{children:"vw_"})," to differentiate views from tables and other objects."]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"vw_"})}),(0,r.jsx)(n.code,{children:"sales_summary"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"vw_"})}),(0,r.jsx)(n.code,{children:"active_customers"})]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"common-columns-and-nomenclature",children:"Common Columns and Nomenclature"}),"\n",(0,r.jsx)(n.p,{children:"All tables should have these columns:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"id"}),"\n",(0,r.jsx)(n.li,{children:"created_dt"}),"\n",(0,r.jsx)(n.li,{children:"created_by"}),"\n",(0,r.jsx)(n.li,{children:"modified_dt"}),"\n",(0,r.jsx)(n.li,{children:"modified_by"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"regardless of whether the table is ever going to be modified."}),"\n",(0,r.jsxs)(n.p,{children:["All date columns should end with ",(0,r.jsx)(n.code,{children:"_dt"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"advantages-of-using-prefix-based-naming",children:"Advantages of Using Prefix-Based Naming:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Clarity:"})," Easy to distinguish between facts, dimensions, and staging tables."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consistency:"})," Ensures uniformity across the database."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Maintainability:"})," Simplifies debugging and understanding data lineage."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var i=s(6540);const r={},d=i.createContext(r);function c(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);