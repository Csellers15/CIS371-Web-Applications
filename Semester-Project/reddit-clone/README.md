# reddit-clone

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Needs 
    - Authentication
        - Visitor (Can view posts but not write)
        - Authenticated (can read and write posts)
        - Admin (Can read, write, and delete all posts)
    - database Tables 
        - User table 
            - Name
            - Username
            - Password 
            - Level 
        - Blog Post 
            - Title 
            - Body 
            - UserName
            - Timestamps 
    - Messaging 
        -TBD
    
    - Pages 
        - Messaging 
        - Home 
        - Profiles
        - About (Maybe)