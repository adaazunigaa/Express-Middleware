# Express-Middleware
Are express functions that run during the REQUEST/RESPONSE lifecycle

        REQUEST         -->>
                                *Middleware are just functions 
                                *Each middleware has access to the request and response objects
                                *Middleware can end the HTTP request by sending back a response with methods like res.send();
                                *OR middleware can be chained together, one after another by calling next()
        RESPONSE        -->>


## Middleware funcitons can perform:
        *Execute any code
        *Make changes to the request and the response objects
        *End the request-response cycle
        *Call the next middleware function in the stack

## An express application can use the following types of middleware:
        *Application-level middleware
        *Routter-leve middleware 
        *Error-handling middleware
        *Built-in middleware
        *Third-party middleware


### 