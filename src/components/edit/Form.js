import TextArea from '../ui/TextArea';
import TextInput from '../ui/TextInput';
import { useState } from 'react';
import { useEditVideoMutation } from '../../features/api/apiSlice';
import Success from '../ui/Success';
import Error from '../ui/Error';

export default function Form({ video }) {
  const {
    id,
    title: initialTitle,
    author: initialAuthor,
    description: initialDescription,
    link: initialLink,
    thumbnail: initialThumbnail,
    date: initialDate,
    duration: initialDuration,
    views: initialViews,
  } = video;

  const [editVideo, { data: editedVideo, isLoading, isError, isSuccess }] = useEditVideoMutation();

  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [description, setDescription] = useState(initialDescription);
  const [link, setLink] = useState(initialLink);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [date, setDate] = useState(initialDate);
  const [duration, setDuration] = useState(initialDuration);
  const [views, setViews] = useState(initialViews);

  const handleSubmit = (e) => {
    e.preventDefault();
    editVideo({
      id,
      data: {
        title,
        author,
        description,
        link,
        thumbnail,
        date,
        duration,
        views,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} method='POST'>
      <div className='shadow overflow-hidden sm:rounded-md'>
        <div className='px-4 py-5 bg-white sm:p-6'>
          <div className='grid grid-cols-6 gap-6'>
            <div className='col-span-6 sm:col-span-3'>
              <TextInput onChange={(e) => setTitle(e.target.value)} title='Video title' value={title} />
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <TextInput onChange={(e) => setAuthor(e.target.value)} title='Author' value={author} />
            </div>

            <div className='col-span-6'>
              <TextArea onChange={(e) => setDescription(e.target.value)} title='Description' value={description} />
            </div>

            <div className='col-span-6'>
              <TextInput onChange={(e) => setLink(e.target.value)} title='YouTube Video link' value={link} />
            </div>

            <div className='col-span-6'>
              <TextInput onChange={(e) => setThumbnail(e.target.value)} title='Thumbnail link' value={thumbnail} />
            </div>

            <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
              <TextInput onChange={(e) => setDate(e.target.value)} title='Upload Date' value={date} />
            </div>

            <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
              <TextInput onChange={(e) => setDuration(e.target.value)} title='Video Duration' value={duration} />
            </div>

            <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
              <TextInput onChange={(e) => setViews(e.target.value)} title='Video no of views' value={views} />
            </div>
          </div>
        </div>
        <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
          <button
            disabled={isLoading}
            type='submit'
            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500'
          >
            Save
          </button>
        </div>
        {isSuccess && <Success message='Video was edited successfully' />}
        {isError && <Error message='There was an error editing video' />}
      </div>
    </form>
  );
}
