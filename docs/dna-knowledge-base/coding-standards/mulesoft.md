---
title: Coding Standards - MuleSoft 4.4
sidebar: coding_standards_sidebar
sidebar_position: 6
---

## Introduction

This document outlines the coding standards and best practices for developing applications using MuleSoft 4.4.

Adhering to these standards will ensure that the code is maintainable, readable, and efficient, facilitating collaboration among developers and enhancing the overall quality of the integration solutions.

### General Guidelines 

**Code Readability** 

- Use meaningful variable, function, and flow names that clearly describe their purpose. 

- Maintain consistent indentation (2 spaces) and line length (maximum of 120 characters). 

- Use comments judiciously to explain complex logic or important decisions. 

**Version Control**

- Use Git for version control. Follow a branching strategy (e.g., Git Flow) to manage features, releases, and hotfixes. 

- Commit frequently with clear, descriptive messages that explain the changes made.
    - Use prefixes such as ADD, DELETE, MODIFY, REMOVE at the start of the commit message to make it easy to trace commits back.  

**Documentation** 

- Document all APIs using RAML or OpenAPI specifications. 

- Include inline comments for complex logic and provide a README file for project overview and setup instructions. 

### Naming Conventions 

**File Naming** 

- Use lowercase letters, separate words with hyphens for file names (e.g., ```customer-service.xml```). Do not use spaces while naming variables as well as filenames.

- Use descriptive names that reflect the content or purpose of the file. 

**Variable and Parameter Naming**

- Use ```camelCase``` for variable and parameter names (e.g., ```customerId```, ```orderDetails```). Please note how the name starts with a lower case letter and then each word has a upper case letter. 

- Prefix boolean variables with is or has (e.g., ```isActive```, ```hasPermission```). 

**Flow Naming** 

- Use descriptive names for flows that indicate their purpose (e.g., processOrderFlow, fetchCustomerDataFlow). 

- Use a consistent naming pattern for sub-flows (e.g., subFlowName). 

**Package Naming**

- Names representing packages should be in all lower case. ```org.mule.application```
- Make use of the package naming conventions used by Sun for the Java core packages.
- The initial package name representing the domain name must be in lower case. 
- Package names should be singular rather than plural. ```org.mule.runtime.core.transformer```, ```org.mule.runtime.core.processor```
- The 'org.mule.runtime.api' package tree should be used for all interfaces that make up the API/SPI ```Org.mule.runtime.core.api.lifecycle.Callable```.

**Flows**

Use lowerCamelCase (e.g., ```processOrderFlow```)

**Subflows**

Use lowerCamelCase with Subflow suffix (e.g., ```validateInputSubflow```)

**Configuration files**

Use kebab-case (e.g., ```global-config.xml```)

**Java classes**

Use PascalCase (e.g., ```JwtTokenGenerator```)

**Properties**

Use dot notation (e.g., ```db.username```) 


### Property Management

Use .yaml or .properties for environment-specific configurations.

Avoid hardcoding sensitive information. Example: 

```yaml
db.username=admin
db.password=${secure::db.password}
```

Exception Handling in Java uses custom exceptions for better error tracking.

Avoid generic exception catching. For example, the public class ```CustomException``` extends the following exception:

```yaml
{
    public CustomException(String message)
    {
        super(message);
    }
}
```

### Project Structure

 Follow a standard MuleSoft folder structure:
 
 > Mule flows and configurations | ```/src/main/mule```
 
 > Custom Java classes | ```/src/main/java```
 
 > Property files and other resources | ```/src/main/resources```
 
 > Unit tests | ```/src/test```

### DataWeave Standards

**Formatting**

- Use consistent indentation (2 spaces) for DataWeave scripts. 

- Keep DataWeave scripts concise and modular. Break complex transformations into smaller, reusable functions. 

**Comments**

- Use comments to explain the purpose of the DataWeave script and any non-obvious logic. 

- Use ```//``` for single-line comments and ```/* ... */``` for multi-line comments. 

**Performance**

- Avoid unnecessary transformations and use built-in functions whenever possible to enhance performance. 

- Use map, filter, and reduce functions effectively to process collections. 

### Error Handling 

**Global Error Handling**

- Implement a global error handling strategy using the Error Handling scope to manage exceptions consistently across the application. 

- Log errors with sufficient detail to facilitate troubleshooting. 

**Specific Error Handling**

- Use specific error types to handle known exceptions (e.g., ValidationError, DatabaseError). 

- Provide meaningful error messages that can help in diagnosing issues. 

- Use global error handlers.<br />

- Standard error types: ```ON_ERROR_CONTINUE``` and ```ON_ERROR_PROPAGATE```

- Include error logging and meaningful error messages. For example,

```HTML
<on-error-propagate type="HTTP:BAD_REQUEST">
<logger level="ERROR" message="#[error.description]" />
</on-error-propagate> 
```

### API Design 

**RESTful Principles**

- Follow RESTful principles for API design, using appropriate HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).

- Use plural nouns for resource names (e.g., `/customers`, `/orders`). 

**Versioning**

- Version APIs using the URL (e.g., ```/api/v1/customers```) to ensure backward compatibility. 

- Document changes in the API versioning strategy. 

**Security**

- Implement security best practices, including _OAuth 2.0_ for authentication and authorization. 

- Validate and sanitize all inputs to prevent injection attacks. 

### RAML Structure

1. **Version**: Use RAML 1.0 version.

Organize the RAML files into a modular structure:  

```/api``` - Main RAML file (e.g., api.raml)  

```/resources``` - Resource types and traits /schemas - JSON or XML schemas  

```/examples``` - Example payloads 

an example of this is given below:

```RAML
#%RAML 1.0
title: Order Management
API version: v1
baseUri: https://api.example.com/v1
mediaType: application/json
```

2. **Resource Naming**: Use nouns for resource names. Use plural forms (e.g., `/orders`, `/customers`).
<br />for example: 
```
/orders:
get:
description: Retrieve a list of orders. 
```

3. **Methods and Status Codes**: Include all relevant HTTP methods. Specify expected status codes. Example:

```YAML
/orders:
  post:
    Body:
      content:
        application/json:
          examples:
            orderRequest:
              value: !include /examples/order-request.json
    responses:
      '201':
        description: Order created successfully.
      '400':
        description: Invalid request.
```

4. **Query Parameters and Headers**: Document query parameters and headers. Specify required and optional fields. Example:

```YAML
/orders:
    get:
        queryParameters:
            status: 
                description: Filter orders by status.
            type: string
            required: false  
```

5. **Data Types and Examples**: Use external JSON schemas for data validation. Provide example requests and responses. Example:

```YAML
types:
    Order:
        type: object
        properties:
            id: string
            amount: number
            example: !include /examples/order-example.json  
```


6. **Traits and Resource Types**: Use traits for common headers, query parameters, and responses. Use resource types to avoid repetition. Example:

```YAML
traits:
    paginated: 
        queryParameters:
            page:
                type: integer
                required: false
                pageSize: type:
                integer required: false 
```

7. **Security**: Use OAuth 2.0 for secure APIs. Document security schemes clearly. Example:

```YAML
securitySchemes:
    oauth_2_0:
        type: OAuth 2.0
        describedBy:
            headers: 
                Authorization:
                    description: 
                        Access token type: 
                            string settings:
                                 accessTokenUri: https://auth.example.com/token
```

### Testing 

**Unit Testing**

- Write unit tests for all components, including flows, DataWeave transformations, and custom connectors. 

- Use MUnit for testing Mule applications, ensuring that tests are comprehensive and cover edge cases. 

**Integration Testing**

- Conduct integration tests to verify that different components of the application work together as expected. 

- Use mocking frameworks to simulate external dependencies during testing. 

**Continuous Integration/Continuous Deployment (CI/CD)**

- Implement CI/CD pipelines to automate testing and deployment processes. 

- Ensure that all tests pass before merging code into the main branch.

### Performance Optimization 

**Connection Management**

- Use connection pooling for database and external service connections to improve performance. 

- Configure timeouts and retries appropriately to handle transient failures. 

**Batch Processing**

- Use batch processing for large data sets to improve performance and reduce memory consumption. 

- Monitor batch job performance and optimize as necessary. 

**Logging and Monitoring**

- Implement logging at appropriate levels (`INFO`, `DEBUG`, `ERROR`) to capture essential information without overwhelming the logs. 

- Use monitoring tools to track application performance and identify bottlenecks. 

**Java Integration (JDK 11)**

- Use io.jsonwebtoken for JWT token generation 

- Avoid using deprecated Java APIs 

- Use ```try-with-resources``` for resource management 

### Logging

- Use MuleSoft Logger component instead of System.out.println 

- Define log levels (INFO, WARN, ERROR) based on the severity.

### Mule Development Naming Conventions

The table below describes the various naming conventions to be followed by developers when working with MuleSoft.

| Mule Component | Naming Details |
| -- | -- |
| Mule Project Name | The project is created for high level Business Process to be implemented. <br /><br />The project name should explain the high level business purpose of the project, and an optional version identifier if you want to maintain multiple versions of same project.<br /><br />The project name shall follow lower case as below syntax.<br /><br /> Syntax: `<clientname/program>-<businesspurpose>-v1.0`<br /><br />Examples:<br />The Mule Integration that allows to manage order processing `customer-orderprocessing`<br />The Mule Integration that allows to manage products with version `projectatlas-orderprocessing-v1.0` |
| Mule Flow Name | The Mule configuration file name should explain the purpose of a flow within a Businesss Process.<br /><br />Use combination of Verb + Noun to define the purpose of a flow. Each of the Mule configuration file should refer to either of below 5 types:<br />- Main flow (Each interface in the project will have a main flow)<br />- Error handling flow (Error handling strategy defined in this flow. Only one flow per project)<br />- Config / Global flow (All the global connector and other configurations. Only one flow per project)<br />- Common flow (Any reusable sub-flows across other interfaces. Only one flow per project)<br />- API flow (This will appear only while using API kit router. This flow should have only routing logic, actual interface should be coded in individual interface main flow. API will also be only one flow per project)<br /><br />The name should follow lowercase, hyphen or underscore separated.<br /><br />Syntax: ```<purposeof>-<flowdetails>```<br /><br />Examples:<br />The HTTP service to get token from SFDC: `get-oauthtoken-sfdc.xml`<br />The main flow can contain source and target information `app1-itemdetails-app2.xml`<br />The RAML based main API kit router flow: `api.xml`<br />The reusable sub-flows across other interfaces: `clientname-orderprocessing-common.xml`<br />Similarily the config and error handling flows are `customer-orderprocessing-errorhandling.xml` and `customer-orderprocessing-config.xml` |
| Endpoint Name(Global/Local) | The endpoint name should explain the operation that endpoint is performing. The name can follow “lower Camel Case” or “lower case hyphen separated”, but should be consistent across the project. <br /><br /> Syntax: `<Action><Business Entity being processed>`  <br /><br />Examples:<br />The file inbound endpoint to read employee data: `readEmployeeFlow` <br />The file outbound endpoint to write product data: `write-product-privateflow` <br />The HTTP Endpoint to get Sales Order from Request: `getSalesOrderSubflow`  |
| MUnit Test Suite | The Mule MUnit configuration file name should follow same name as the corresponding main interface flow. The name should follow lowercase, hyphen or underscore separated <br /> <br />Syntax: `<purposeof>-<flowdetails>-testsuite` <br /><br />Example:<br />Test suite for get token from SFDC flow: `get-accountdetails-sfdc-testsuite.xml`|
| MUnit Test Case | The individual test cases should provide test case description along with success or failure testing. The name should follow “lower Camel Case” or “lower case hyphen separated”. <br /><br />Syntax: ```<positive/negative><Description><Test> ```<br /><br />Examples:<br /> Test case for one sample success test: `successGetAccountDetailsTest`<br />Test case for one sample failure test: `failure-getaccountdetails-test` |
| Property Files | The property files are usually created at the program level in a common project and usually injected as dependencies into individual projects under the program. However they can also be created at the project level, if the environment related properties are significantly different or not common across projects under the program. <br /><br />In any case, the property files should be created at environment level and should follow the lower case syntax as below. They should be added as reference in the project config file using property placeholder. <br /><br />Syntax: `<clientname/program>-<env>.properties`<br /><br />Examples: <br />Properties file at the entire client/program level: `customer-prod.properties`<br />Properties file at the individual project level: `customer-orderprocessing-dev.properties` |
| Property File Values | The properties should be grouped based on the functionality and properties should start with a contextual name. None of the passwords should be put in plain text, they should be encrypted. The actual property should follow lower case syntax with DOT separated as below:<br /><br />Syntax: `<application/entity>.<endpoint>.<property>=<value>`<br /><br />Examples: <br />Property for a bank salesforce Endpoint: `bank123.sfdc.host=[host_name]` `bank123.sfdc.password=[encrypted_password]`<br />Property for an application DB endpoint: `retek.db.host=[host_name]` `retek.db.port=[port_number]` |
|Transformation Name<br />(In-Built abstract Transformer as well as `DataMapper`) |The transformation name should provide Input Entity Business Name, Input Structure, Output Entity Business Name, and Output Structure in the pattern given below (see syntax). The name should follow lower Camel Case. <br /><br />Syntax: `<Input Entity Name><Input Structure>2<Output Entity Name><Output Structure>`<br /><br />Examples:<br />The transformation of Sales Order OAGi model to SFDC Json model: `salesLeadSOAP2LeadJSON`<br />The transformation of Product CSV File to SAP Product Model: |
| Scopes |The scopes name should provide the entity on which the processing depends. The name should follow lowe Camel Case.<br /><br />Syntax: `<Scope Name><Entity Name>`<br /><br />Examples: <br />To process each record retrieved from Select Query from Database: `forEachOrderRecord`<br />To cache parameters if they already exist: `cacheUserName` |
| Components | The component name should explain the operation that component is performing on a high level. The name should follow lower Camel Case. <br /><br />Syntax: `<Action><Business Entity being processed>`<br /><br />Examples:<br />To get OAUTH token by making a Rest call using Java: `getOAuthToken`<br />To make a SOAP call to external Order Processing web service: `processOrder` |
| Filters | The filter name should explain the action as well as the reference to the variable on which the processing depends. The name should follow lower Camel Case. <br /><br />Syntax: `<Action><Business Entity being processed>`<br /><br />Examples:<br />To filter the product records on `isActive` variable to process only the active: `processActiveProduct`<br />To filter specific message payload from HTTP inbound endpoint: `filterFavicon` |
| Flow Control | The flow control name should provide the control activity with the criteria on which the processing depends. The name should follow lower Camel Case. <br /><br />Syntax: `<Action><Business Entity being processed>`<br /><br />Examples:<br />To spilt an xml containing multiple products: `splitProducts`<br />To choose the destination file endpoint depending on product family: `routeOnProductFamily` |
| Global DataSource | The data source name should explain database business name, RDBMS type of database (Oracle, MS-SQL etc). The name should follow lower Camel Case. <br /><br />Syntax: `<Database Business Name><RDBMS Name>DS`<br /><br />Example:<br />Customer Core Oracle Database: `customerCoreOracleDS` | 
| Connector | The connector name should explain the datasource it connects to. The name should follow lower Camel Case.<br /><br />Syntax: `<DataSource Name-withoutDS>Connector`<br /><br />Example:<br />The connector for Customer Core Oracle Database: `customerCoreOracleConnector` |
| Cloud Connector(Local) | The cloud connector name should explain the operation it performs. The name should follow lower Camel Case. <br /><br />Syntax: `<Action><Business Entity being processed>`<br /><br />Example: <br />Create SalesLead using SalesForce Connector `createLead` |
| Global Component Configurations | The configuration name should explain the context object it configures. The name should follow lower Camel Case. <br /><br />Syntax: `<Action><Context Object>`<br /><br />Example:<br />The script configuration uses Groovy script to calculate total order payment amount: `calculatePaymentAmount` |
| Logger | The logger component name should provide the name of currently processing entity and whether it is a request or response. The name should follow lower Camel Case. <br /><br />Syntax: `Log<Processing entity>Request/Response`<br /><br />Example: <br />Log incoming SalesLead request in OAG format: `logOAGProcessSalesLeadRequest` |

### General Naming Conventions

The below general naming convetion rules to be followed: 

- Business processes or entities should be singular rather than plural.<br />Example: `CreateLead` (NOT CreateLeads) 

- Provide description of a flow in the flow description section. The name should avoid abbreviations.<br />Example: `OrderServiceFlow` (NOT OrderServFlow)

- All MUNIT functional test classes should be follow the suffix  `TestCase`<br />Example: `CreatLeadTestCase`, `DeleteLeadTestCase`

- All the variables names (session, flow, invocation, inbound, outbound) must be in mixed case starting with lower case. This rule is applicable to all message properties as well. 

- Underscores and other special characters should NOT be used in variable names, method names or class names.

- `is` prefix should be used for boolean variables and methods.<br />Examples: `isSet`, `isVisible`, `isFinished`, `isFound`, `isOpen` 

- Negated boolean variable names must be avoided. Example: `boolean isError` (NOT: isNoError)

- Do not use `mule` as prefix for project or deployment artifact name.

- Avoid being too specific whenever not required to limit re-use potential.

- Increment major versions if you break backwards compatibility.

### Common Development Naming Conventions

| Component | Naming Details |
| -- | -- |
| JMS | JMS resource names must be unique per resource type (e.g. queues, topic, connection factories, and JNDI names). The name for JMS component should follow pattern given below (see syntax):<br /><br />This pattern provides a unique identity for the JMS component in question, when there are multiple business groups and domains using the same JMS Server within an enterprise. The business group and domain should explain the logical business group and domain within an enterprise.<br /><br />Two different (business group + business domain) can have (message type + version + resource type) that can share the same name. This business group and domain within it is owner of the component.<br /><br />Syntax: <br />`jms/<biz group>.<biz domain>.<message type>.<V99.9>.<resource type>`<br /><br />The syntax shall follow all lower case.<br />The version number provides unique identity for a Queue or Topic, when there are multiple versions of the same application having diverse message models, or services exchanging messages. <br/><br />Do not include the "application name" that provides this component, or “consumer” or “publisher” of the message into naming. These can change over time (e.g. change or addition in consumer and publisher) although contract (and pattern) for business domain remains the same.<br /><br />Examples:<br />`jms/ck.ckint.cif.dim.v1.0.queue`<br />`jms/ck.ckint.catalog.v01.0.queue` |
| REST API |Well named APIs are insightful and far easier to use due to consistency and an easily identifiable pattern of naming. The RESTful APIs is collection of URIs called over HTTP, and provides JSON or XML representation of resource.<br /><br />In RESTful API each piece of information is exposed as a resource having its own address or URI. And so, it is preferable to name each resource as a noun in contrast to verb or action.<br /> Your URI should follow a consistent hierarchical structure for ease of understanding and meaning of the resource for the consumer of an API. <br /><br />Examples: <br />To create a new catalog: `POST http://www.elearning.com/catalogs`<br />To read a specific catalog with catalog Id: `#123 GET http://www.elearning.com/catalogs/123`<br />The same URI would be used for PUT and DELETE, to update and delete catalog respectively.<br />To get all registrations for a catalog 123: `GET http://www.elearning.com/catalogs/123/registrations`<br />The same URI with POST would be used for creating registration for a catalog 123.<br />To get all payments against registration 456 of a catalog 123: `GET http://www.elearning.com/catalogs/123/registrations/456/payments`<br /><br /> Below are some rules for URI design:<br /><br />- All REST service names should use strict lower case names.<br />- All REST service request and response fields should use strict lower case names.<br />- Build URI using hierarchy of entities (resources) that is being operated upon rather than the operation being performed.<br />- Use domain entities' names and their relation to define consistent hierarchy.<br />- Use plural of an entity.<br />- Use nouns, not verbs. The power of REST comes through the fact that there is a limited verb set (operations: `GET`, `POST`, etc.) combined with a large set of nouns (or resources).<br />- Services offering a uniquely identifiable resource via a key should use basic REST notation (e.g. `/catalogs/` (cataloged))<br />- Service having mandatory arguments over GET should have them as path variables (e.g. `/catalogs/(fromdate)/(todate)`)<br />- Services offering optional search/filtering capabilities should use query parameter (e.g. `?key1=value&key2=value`)<br />- Keep it intuitive. URIs should be human readable and guessable.<br /><br />**REST API Versioning**<br /><br />There are multiple techniques to define version for REST API. Some of them are:<br /><br />- Include version into API URI.<br />- Use version attribute into HTTP Header.<br />- Use domain name into HTTP Header.<br /><br />TODO: Best Technique for versioning for REST API or not to use Versioning. |
| SOAP WEB SERVICE |SOAP uses WSDL, XML document that represents the SOAP service contract including protocol, endpoint, methods and message structure.<br /><br />WSDL document uses the following elements in the definition of service:<br /><br />_Message_<br />An abstract, typed definition of the data being communicated.<br /><br />Web service Message name should clearly indicate what type of data it carries. The Web service message name should follow Camel Case.<br /><br />Syntax: `<Verb>``<DataType>``<Request Response Fault>`  <br /><br />Examples: <br /> Messages to perform addition of product to product catalog: `addProductRequest` `addProductResponse` `addProductFault`<br />Messages to get product information: `getProductInfoRequest` `getProductInfoResponse` `getProductInfoFault` <br /><br />_Operation_<br />An abstract description of an action supported by the service. <br /><br />Web service operation names should clearly indicate what they do from the client's point of view. The Web service operation name should start with verb and follow Camel Case.<br /><br />Syntax: `<Verb><Operation Purpose>`<br /><br />Examples:<br />To add product to product catalog: `addProduct`<br />To get product Information: `getProductInfo`<br /><br />_Port Type_<br />An abstract set of operations supported by one or more endpoints.<br /><br />Port type name should be similar to service name appended with word Port. Port type name should follow Camel Case.<br /><br />Syntax: `<Service name><Port>`<br /><br />Examples:<br />Service to manage Product data: `ProductPort`<br /><br />_Service_<br />A collection of related endpoints. <br /><br />The Web service name should be a business noun, concept or process. Avoid verbs when naming Web services.<br /><br />Examples:<br />To create Product service: `ProductService`<br />Avoid names such as `CreateProductDataService`.<br /><br />**Web Service Versioning**<br /><br />Web Service versioning is achieved by changing the version of namespace in WSDL and XSD. It is NOT recommended to use version number in the Service Endpoint URL as this may result into frequent updates to the Endpoint URL configured in service consumers programs.<br /><br />**Major Version Change Scenarios**<br /><br />The term major update is reserved for updates that break existing service consumers. i.e. clients, or invalidates previously shared (and consumed) documents.<br />Major version updates have to be shared with all consumers of the service to avoid the failure of existing interfaces that are using the service.<br /><br />Updates to an XML Schema document are considered to result in a major update if:<br />- There are changes to the type of a local element.<br />- There are changes to a local element or an element reference requiring that it become mandatory (i.e. changing the definition from optional to require).<br />- Adding or removing an enumeration value.<br />- Renaming or removing a global type or element.<br />- Changing the type of a global element.<br /><br />Updates to a WSDL document are considered to result in a major update if: <br />- Updates are made to existing binding, service or portType definitions.<br />- Updates are made to a message element with a reference to a schema type message, message part, portType, binding is removed from service.<br /><br />Major updates may NOT be backwards compatible for existing clients. Hence always share update WSDL/XSD with all consumers whenever major version change.<br /><br />Syntax: `<Service Namespace></V><Version Number><.0>`<br /><br />Example:<br /> http://www.productdata.com/retail/integration/service/ProductDataService/V2.0<br /><br />**Minor Version Change Scenarios**<br /><br />The term minor update is reserved for backward-compatible updates of an interface which does not break existing clients or existing documents such that they remain valid if continuing to use a minor update to an existing document.<br />Minor version updates have to be shared with only those consumers of the service for whom the change has been implemented. All other consumers can still continue to use the previous version of the service.<br /><br />Updates to an XML Schema document are considered to result in a minor update if:<br />- There are changes to a local element or element reference making it optional (i.e. changing from the definition from required to optional).<br />- There are addition(s) of a global element or type.<br />- Documentation or comments are added.<br /><br />Updates to a WSDL document are considered to result in a minor update if:<br />- A new operation, possibly with message and message parts definitions is added.<br />- A new portType, binding or a service to a WSDL is added.<br />- A new, optional, behavior is added without changing the message signatures or types.<br /><br />Minor updates MUST be backwards-compatible for existing clients.<br /><br />Syntax: `<Service Namespace></V><Version Number><.n>`<br /><br />Example: <br />http://www.productdata.com/retail/integration/service/ProductDataService/V2.5 |

### Java Components Conventions

Mule IDE studio should be configured for Sonar coding guideline tools. Use default Sonar rules. 

Please refer to the links below for Java Coding Guidelines. These links also include XML Schema Best Practices. 

- https://github.com/mulesoft/mule/blob/3.7.2/STYLE.md 

- https://docs.mulesoft.com/mule-contributors-guide/v/3.4/mule-coding-conventions 

### References

|Serial No| Document Name |
| -- | -- |
|1|https://docs.mulesoft.com/mule-contributors-guide/v/3.4/mule-coding-conventions|
|2|MuleSoft Alliance Partner Portal documentation|
|3|http://www.w3.org/TR/wsdl|
