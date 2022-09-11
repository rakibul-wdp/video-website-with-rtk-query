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

### API Query - Get single video (8.5)

#### Getting single video from server API

- Add another endpoint in apiSlice for dynamic route.
- In Video component we use single video hook and also pass videoId for dynamic url.
- And conditionally show every video with Player and Description component.

### API Query - Get related videos (8.6)

#### Getting related videos from server API

- Create another endpoint like getRelatedVideo and this endpoint create queryString for related video showing.
- Show related video by RelatedVideo component with conditionally.
- So, related video show beside of main video by create custom query string like url or params.

### Advanced Configuration (8.7)

#### Caching, refetch, request cancelling and optimistic update

- In this class we see some rtk query topic that are awesome and increase user experience.
- keepUnusedDataFor, refetchOnFocus, refetchOnReconnect, refetchOnMountOrArgChange, skip, pollingInterval, etc.

### Adding Video (8.8)

#### Mutation - Add video to server API

- For adding video we create another endpoint like

```
addVideo: builder.mutation({
      query: (data) => ({
        url: '/videos',
        method: 'POST',
        body: data,
      }),
    }),
```

- We use mutation in add Form component little bit different way. And also, we take state for every value.
- Create handler for form and pass every data in addVideo.

### Cache Behavior (8.9)

#### Automated Re-fetching

- We just refetch or reload our videos array or list by adding some keyword.
- We use providesTags in getVideo section, before endpoints use tagTypes and lastly use invalidatesTags keyword.
- Actually we create some kind of tag that hamper inside of rtk.

```
tagTypes: ['Videos'],

getVideos: builder.query({
  query: () => '/videos',
  keepUnusedDataFor: 600,
  providesTags: ['Videos'],
}),

addVideo: builder.mutation({
  query: (data) => ({
    url: '/videos',
    method: 'POST',
    body: data,
}),
invalidatesTags: ['Videos'],
}),
```

### Edit Video and revalidate (8.10)

#### Mutation and automated cache revalidation
