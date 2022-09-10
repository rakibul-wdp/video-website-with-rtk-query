# Video Application with RTK Query

## Advanced - Introduction to RTK Query (Module 8)

### What is RTK Query (8.1)

#### What problem does it solve

- RTK Query is a Data Fetching and Caching tool

##### What problems does it solve

- Tracking loading, error and success state
- Avoid duplicate requests for same data
- Optimistic updates to make the UI feels faster
- Managing cache lifetimes as the user interacts with the UI

### Project and Server setup (8.2)

#### Setup React project and json-server

- Convert html template to react component.
- Add server in this project.
- In this website have home video description page and also add video or edit video page.
- For related video showing we use tag by video title.

### Create API Slice (8.3)

#### Configure the store

- Create api slice by createApi and createApi have object and in this object have reducerPath baseQuery and endpoints.
- baseQuery have fetchBaseQuery and it take url.
- apiSlice have reducer and this reducer included in store file like `[apiSlice.reducerPath]: apiSlice.reducer,` and also add middleware like default middleware.

### Create first Query (8.4)

#### Getting videos on home page

- api slice file have endpoint and in endpoint take callback function and in callback function also take query key value and it's value is callback function with dynamic params like this...

```
endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => '/videos',
    }),
  }),
```

- apiSlice give some hook in this time we export useGetVideosQuery (it just like custom hook).
- We just call hook in videos component and conditionally pass data in video component with map function.
- Receive as a props in video component and show it dynamically.
