import useTitle from '../hooks/useTitle';

const Blog = () => {
  useTitle('Blog');
  return (
    <div className="container mx-auto">
      <div className="text-lg">
        <div className="flex items-center justify-center mb-10">
          <h1 className="text-4xl font-bold text-black">Blog</h1>
        </div>
        <div className="bg-primary bg-opacity-10 rounded-lg p-3 mb-8">
          <h1 className="font-semibold mb-3">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <div className="p-5">
            <p>
              Access tokens and refresh tokens are two types of tokens used in
              OAuth 2.0 to authenticate users and grant them access to protected
              resources.
            </p>
            <br />
            <p>
              An access token is a short-lived token that is used to access
              protected resources. It is typically used to make authenticated
              requests to a resource server. Access tokens are typically issued
              with a limited scope, which means that they can only be used to
              access specific resources.
            </p>
            <br />
            <p>
              A refresh token is a long-lived token that can be used to obtain
              new access tokens. Refresh tokens are typically issued with a
              wider scope than access tokens, which means that they can be used
              to access a wider range of resources. Refresh tokens are typically
              stored in the client-side application, and they are used to obtain
              new access tokens when the old access token expires.
            </p>{' '}
            <br />
            <p>
              Access tokens and refresh tokens should be stored securely on the
              client-side application. They should be encrypted and stored in a
              way that prevents unauthorized access. Here are some best
              practices for storing access tokens and refresh tokens:
            </p>
          </div>
          <ul className="list-disc list-inside p-5">
            <li>
              Access Token: The access token is typically stored on the
              client-side in memory (e.g., within the browser's memory in a
              JavaScript variable) or in a short-lived storage mechanism like a
              cookie or HTML5 Web Storage (sessionStorage or localStorage).
              Storing the access token in memory is more secure as it avoids the
              risk of token leakage through vulnerabilities such as cross-site
              scripting (XSS). However, storing it in a cookie or Web Storage
              can be more convenient and allows for persistence across page
              reloads. Remember to set the HttpOnly and Secure flags on the
              cookie to enhance security.
            </li>
            <li>
              Refresh Token: The refresh token should be stored securely on the
              client-side to prevent unauthorized access. It is commonly stored
              in an HTTP-only and secure cookie, which means it is only
              accessible by the server and not exposed to JavaScript or
              vulnerable to XSS attacks. By storing the refresh token in a
              cookie, it helps mitigate the risk of it being stolen from
              client-side storage mechanisms. Additionally, the cookie should
              have a longer expiration time and be transmitted over a secure
              HTTPS connection.
            </li>
          </ul>
        </div>
        <div className="bg-primary bg-opacity-10 rounded-lg p-3 mb-8 ">
          <h1 className="font-semibold mb-3">
            2. Compare SQL and NoSQL databases?
          </h1>
          <p className="text-lg">
            <strong> SQL Databse</strong>
          </p>
          <ul className="list-disc list-inside p-5">
            <li>
              Structured Data: SQL databases are based on the relational data
              model and store data in a structured manner using tables with
              predefined schemas. Each row represents a record, and columns
              define the data attributes.
            </li>
            <li>
              ACID Compliance: SQL databases provide strong ACID (Atomicity,
              Consistency, Isolation, Durability) properties, ensuring data
              integrity and transactional consistency.
            </li>
            <li>
              Schema and Data Integrity: SQL databases enforce a fixed schema,
              which means data must adhere to the predefined structure, ensuring
              data integrity. Any changes to the schema require careful planning
              and migrations.
            </li>
            <li>
              Query Language: SQL databases use Structured Query Language (SQL)
              for defining and manipulating data. SQL offers a powerful and
              standardized way to query and manipulate relational data,
              including complex joins and aggregations.
            </li>
          </ul>
          <p className="text-lg">
            <strong> NoSQL Databse</strong>
          </p>
          <ul className="list-disc list-inside p-5">
            <li>
              Flexible Data Model: NoSQL databases offer a flexible data model
              that allows for storing unstructured, semi-structured, and
              structured data. They can handle various data formats, including
              JSON, XML, key-value pairs, documents, graphs, and more.
            </li>
            <li>
              Scalability: NoSQL databases excel at horizontal scalability,
              distributing data across multiple servers and allowing for massive
              scalability. They can handle high volumes of data and traffic by
              adding more nodes to the database cluster.
            </li>
            <li>
              High Performance: NoSQL databases are optimized for high-speed
              read/write operations, making them suitable for applications that
              require low latency and high throughput.
            </li>
            <li>
              Querying: NoSQL databases provide various querying options,
              including key-based lookups, simple queries, and some support for
              complex queries. However, they may not offer the same flexibility
              and power as SQL for complex relational queries.
            </li>
          </ul>
        </div>
        <div className="bg-primary bg-opacity-10 rounded-lg p-3 mb-8 ">
          <h1 className="font-semibold mb-3">
            3. What is express js? What is Nest JS ?
          </h1>
          {/* <ul className="list-disc list-inside p-5">
            <li>
              Purpose: Node.js provides a runtime environment for executing
              JavaScript code outside of the browser, while Express.js is a web
              application framework built on top of Node.js that provides a set
              of tools and abstractions for building web applications.
            </li>
            <li>
              Core features: Node.js provides low-level functionality for
              handling I/O operations, such as file system access, network
              communication, and process management. Express.js provides
              higher-level abstractions for building web applications, such as
              routing, middleware, and templating.
            </li>
            <li>
              Modularity: Node.js provides a core set of modules for handling
              I/O operations, but most additional functionality must be
              installed as separate packages using the npm package manager.
              Express.js is built as a modular framework, with many optional
              features available as separate middleware packages.
            </li>
            <li>
              Routing: Node.js does not provide a built-in routing mechanism,
              while Express.js provides a powerful and flexible routing system
              for mapping incoming requests to the appropriate code.
            </li>
          </ul> */}
          <p className="text-lg">
            <strong> Express.js:</strong>
          </p>

          <p className="text-lg mb-4">
            Express.js is a minimal and flexible web application framework for
            Node.js. It provides a straightforward and unopinionated approach to
            building web applications and APIs. With Express.js, developers have
            fine-grained control over the routing, middleware, and
            request/response handling.
          </p>

          <p className="text-lg">
            <strong> Key Features of Express.js:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Routing: Express.js allows developers to define routes for
              handling HTTP requests and mapping them to specific functions or
              middleware.
            </li>
            <li>
              Middleware: Express.js offers a middleware architecture that
              allows developers to add custom logic, such as authentication,
              logging, error handling, and request preprocessing, to the
              request/response flow.
            </li>
            <li>
              Extensibility: Express.js is highly extensible, enabling
              developers to integrate various third-party libraries, templates
              engines, and databases to suit their project requirements.
            </li>
            <li>
              Lightweight: Express.js has a minimalistic core, making it
              lightweight and efficient, with a small footprint.
            </li>
          </ul>

          <p className="text-lg">
            <strong>Use Cases for Express.js:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Building RESTful APIs and microservices</li>
            <li>Developing server-side web applications</li>
            <li>Creating lightweight and fast web servers</li>
            <li>Prototyping and developing small to medium-sized projects</li>
          </ul>

          <p className="text-lg">
            <strong> Nest.js</strong>
          </p>

          <p className="text-lg mb-4">
            Nest.js is a progressive, opinionated framework for building
            efficient and scalable server-side applications. It is built on top
            of Express.js and provides a modular and structured approach to
            application development. Nest.js embraces TypeScript as its primary
            programming language, offering features such as strong typing,
            decorators, and dependency injection.
          </p>

          <p className="text-lg">
            <strong>Key Features of Nest.js:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Modularity: Nest.js encourages a modular architecture, allowing
              developers to organize their application into reusable modules
              with clear boundaries and encapsulated functionality.
            </li>
            <li>
              Dependency Injection: Nest.js provides an integrated dependency
              injection (DI) system, making it easy to manage and inject
              dependencies into different components of the application.
            </li>
            <li>
              Decorators: Nest.js leverages decorators, a TypeScript feature, to
              define and configure various aspects of the application, such as
              routes, middleware, validation, and error handling.
            </li>
            <li>
              Support for different protocols: While built on Express.js,
              Nest.js is not limited to HTTP-based applications. It can also
              handle other protocols like WebSockets and Microservices.
            </li>
            <li>
              Scalability: Nest.js promotes scalability by utilizing
              event-driven architecture and providing support for horizontal
              scaling through features like microservices and WebSocket
              gateways.
            </li>
          </ul>

          <p className="text-lg">
            <strong>Use Cases for Nest.js:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Building scalable and maintainable server-side applications</li>
            <li>Developing APIs and microservices with TypeScript</li>
            <li>Creating real-time applications with WebSockets</li>
            <li>
              Building microservice architectures using Nest.js' microservices
            </li>
          </ul>
        </div>
        <div className="bg-primary bg-opacity-10 rounded-lg p-3 mb-8 ">
          <h1 className="font-semibold mb-3">
            4. What is MongoDB aggregate and how does it work?
          </h1>

          <p className="text-lg mb-4">
            In MongoDB, the aggregate function is a powerful feature that allows
            you to perform advanced data aggregation operations on collections.
            It provides a flexible way to process and transform data, enabling
            you to perform complex queries, calculations, and transformations on
            your MongoDB data.
          </p>

          <p className="text-lg mb-4">
            The aggregate function takes an array of stages as its parameter,
            where each stage represents a specific operation or transformation
            to be applied to the data. The stages are executed in sequence, with
            the output of one stage becoming the input for the next stage.
          </p>

          <p className="text-lg">
            <strong> How MongoDB Aggregate Works:</strong>
          </p>

          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-2">
              Matching Documents (optional): The aggregate pipeline can start
              with a <code>$match</code> stage to filter and select specific
              documents based on specified criteria. This stage allows you to
              perform initial filtering on the data before further processing.
            </li>
            <li className="mb-2">
              Transforming Documents: After the matching stage, you can apply
              various transformation operations to modify the structure and
              content of the documents. Some commonly used transformation stages
              include <code>$project</code> (for selecting specific fields),{' '}
              <code>$group</code> (for grouping and summarizing data), and{' '}
              <code>$addFields</code> (for adding new fields to the documents).
            </li>
            <li className="mb-2">
              Aggregating Data: The aggregation pipeline provides several stages
              for performing aggregations, such as <code>$group</code>,{' '}
              <code>$sum</code>, <code>$avg</code>, <code>$max</code>,{' '}
              <code>$min</code>, and <code>$count</code>. These stages allow you
              to calculate aggregated values, perform arithmetic operations, and
              summarize data based on grouping criteria.
            </li>
            <li className="mb-2">
              Sorting and Limiting Results: You can use the <code>$sort</code>{' '}
              stage to sort the output documents based on specified fields or
              values. Additionally, the <code>$limit</code> and{' '}
              <code>$skip</code> stages allow you to control the number of
              documents returned and skip a certain number of documents,
              respectively.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Blog;
