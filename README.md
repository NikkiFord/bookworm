# Bookworm

The Bookworm app allows users to come and search for books. The app makes use of the Google Books API to retrieve search results and display them neatly on the page. Users can then view the books using an external link or save books which can then be retrieved later using the Saved Books tab.

## Todos

The app works as intended but in the future it might be nice to add in some kind of authentication and let users save books under their own account. Currently all users see all saved books, which isn't super useful if this were more than a homework assignment.

## Development

To get started locally simply run the following commands:

```bash
$ git clone git@github.com:NikkiFord/bookworm.git
$ cd bookworm
$ npm install && npm run dev
```

This will run the dev server with live reload for both the server and client.

## Deployment

To build for deploy just run:

```bash
$ npm run build
```

This will create a `build` folder in the root of the app. This folder will contain the built server and client and is deployable to a hosting provider like Heroku.

## Credits

By [Nikki Ford](https://github.com/NikkiFord)
