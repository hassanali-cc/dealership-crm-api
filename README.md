Project setup

    npm install 

# Prisma Setup

    npx prisma generate (it will generate prisma client)

Optional Commands FYI:

    npx prisma db push (it will create db in case you want to use your own db host)

    npx prisma migrate deploy (to apply migration if any)

    npx prisma db pull (to create schema from your existing db)

    npx prisma studio (to open db gui)


# Development
    $ npm run start

# Watch Mode (like nodemon)
    $ npm run start:dev