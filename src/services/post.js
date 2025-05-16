export const posts = [
    {
      id: 1,
      username: 'Alice',
      content: 'Enjoying a sunny day at the park!',
      avatar: 'https://i.pravatar.cc/40',
      timestamp: '5 minutes ago',
    },
    {
      id: 2,
      username: 'Bob',
      content: 'Just finished a React class, feeling great!',
      avatar: 'https://i.pravatar.cc/40',
      timestamp: '1 hour ago',
    },
    {
      id: 3,
      username: 'Charlie',
      content: 'Any book recommendations for learning JavaScript?',
      avatar: 'https://i.pravatar.cc/40',
      timestamp: '2 hours ago',
    },
];

export const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
}

export const getDataAsync = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}