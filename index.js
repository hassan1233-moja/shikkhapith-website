// Tab Show Function
function showTab(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  const tabs = document.querySelectorAll('.tab');

  contents.forEach(section => section.style.display = 'none');
  tabs.forEach(tab => tab.classList.remove('active'));

  document.getElementById(tabId).style.display = 'block';
  document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// ডিফল্ট হোম ট্যাব দেখাও
window.onload = () => {
  showTab('home');
  loadCourseList(); // কোর্স লিস্ট লোড করো
  loadVideos(); // ভিডিও লোড করো
};

// Academic Class এবং Subject লোড করার জন্য
function loadCourseList() {
  const courseList = document.getElementById('course-list');

  // ক্লাস এবং বিষয়ের তালিকা
  const classSubjects = {
    '৬ষ্ঠ শ্রেণি': [
      { subject: 'বাংলা', videos: [
        { title: 'Part 1', url: src="https://www.youtube.com/embed/pBpsf5bTG9w" },
        { title: 'Part 2', url: src="https://www.youtube.com/embed/Pc3F_9u8lwQ" }
      ]},
      { subject: 'ইংরেজি', videos: [
        { title: 'Lesson 1', url: 'https://www.youtube.com/embed/videoID3' },
        { title: 'Lesson 2', url: 'https://www.youtube.com/embed/videoID4' }
      ]},
      { subject: 'গণিত', videos: [
        { title: 'Lesson 1', url: 'https://www.youtube.com/embed/videoID5' },
        { title: 'Lesson 2', url: 'https://www.youtube.com/embed/videoID6' }
      ]},
      { subject: 'বিজ্ঞান', videos: [
        { title: 'Part 1', url: 'https://www.youtube.com/embed/videoID7' },
        { title: 'Part 2', url: 'https://www.youtube.com/embed/videoID8' }
      ]}
    ],
    '৭ম শ্রেণি': [
      { subject: 'বাংলা', videos: [
        { title: 'Part 1', url: 'https://www.youtube.com/embed/videoID9' },
        { title: 'Part 2', url: 'https://www.youtube.com/embed/videoID10' }
      ]},
      { subject: 'ইংরেজি', videos: [
        { title: 'Lesson 1', url: 'https://www.youtube.com/embed/videoID11' },
        { title: 'Lesson 2', url: 'https://www.youtube.com/embed/videoID12' }
      ]},
      { subject: 'বিজ্ঞান', videos: [
        { title: 'Part 1', url: 'https://www.youtube.com/embed/videoID13' },
        { title: 'Part 2', url: 'https://www.youtube.com/embed/videoID14' }
      ]},
      { subject: 'গণিত', videos: [
        { title: 'Lesson 1', url: 'https://www.youtube.com/embed/videoID15' },
        { title: 'Lesson 2', url: 'https://www.youtube.com/embed/videoID16' }
      ]}
    ],
    '৮ম শ্রেণি': [
      { subject: 'বাংলা', videos: [
        { title: 'Part 1', url: 'https://www.youtube.com/embed/videoID17' },
        { title: 'Part 2', url: 'https://www.youtube.com/embed/videoID18' }
      ]},
      { subject: 'ইংরেজি', videos: [
        { title: 'Lesson 1', url: 'https://www.youtube.com/embed/videoID19' },
        { title: 'Lesson 2', url: 'https://www.youtube.com/embed/videoID20' }
      ]},
      { subject: 'গণিত', videos: [
        { title: 'Lesson 1', url: 'https://www.youtube.com/embed/videoID21' },
        { title: 'Lesson 2', url: 'https://www.youtube.com/embed/videoID22' }
      ]},
      { subject: 'বিজ্ঞান', videos: [
        { title: 'Part 1', url: 'https://www.youtube.com/embed/videoID23' },
        { title: 'Part 2', url: 'https://www.youtube.com/embed/videoID24' }
      ]}
    ],
    '৯ম শ্রেণি': [
      { subject: 'গণিত', videos: [
        { title: 'Lesson 1', url: 'https://www.youtube.com/embed/videoID25' },
        { title: 'Lesson 2', url: 'https://www.youtube.com/embed/videoID26' }
      ]},
      { subject: 'রসায়ন', videos: [
        { title: 'Lesson 1', url: 'https://www.youtube.com/embed/videoID27' },
        { title: 'Lesson 2', url: 'https://www.youtube.com/embed/videoID28' }
      ]},
      { subject: 'জীববিজ্ঞান', videos: [
        { title: 'Part 1', url: 'https://www.youtube.com/embed/videoID29' },
        { title: 'Part 2', url: 'https://www.youtube.com/embed/videoID30' }
      ]},
      { subject: 'পদার্থবিজ্ঞান', videos: [
        { title: 'Lesson 1', url: 'https://www.youtube.com/embed/videoID31' },
        { title: 'Lesson 2', url: 'https://www.youtube.com/embed/videoID32' }
      ]},
      { subject: 'ইংরেজি', videos: [
        { title: 'Lesson 1', url: 'https://www.youtube.com/embed/videoID33' },
        { title: 'Lesson 2', url: 'https://www.youtube.com/embed/videoID34' }
      ]}
    ],
    '১০ম শ্রেণি': [
      { subject: 'পদার্থবিজ্ঞান', videos: [
        { title: 'Lesson 1', url: 'https://www.youtube.com/embed/videoID35' },
        { title: 'Lesson 2', url: 'https://www.youtube.com/embed/videoID36' }
      ]},
      { subject: 'গণিত', videos: [
        { title: 'Lesson 1', url: 'https://www.youtube.com/embed/videoID37' },
        { title: 'Lesson 2', url: 'https://www.youtube.com/embed/videoID38' }
      ]},
      { subject: 'রসায়ন', videos: [
        { title: 'Lesson 1', url: 'https://www.youtube.com/embed/videoID39' },
        { title: 'Lesson 2', url: 'https://www.youtube.com/embed/videoID40' }
      ]},
      { subject: 'জীববিজ্ঞান', videos: [
        { title: 'Part 1', url: 'https://www.youtube.com/embed/videoID41' },
        { title: 'Part 2', url: 'https://www.youtube.com/embed/videoID42' }
      ]},
      { subject: 'ইংরেজি', videos: [
        { title: 'Lesson 1', url: 'https://www.youtube.com/embed/videoID43' },
        { title: 'Lesson 2', url: 'https://www.youtube.com/embed/videoID44' }
      ]}
    ]
  };

  const ul = document.createElement('ul');

  for (const cls in classSubjects) {
    const li = document.createElement('li');
    li.textContent = cls;
    li.style.cursor = 'pointer';
    li.style.fontWeight = 'bold';

    const subjectList = document.createElement('ul');
    subjectList.style.display = 'none';

    classSubjects[cls].forEach(item => {
      const subjectLi = document.createElement('li');
      subjectLi.textContent = item.subject;
      subjectList.appendChild(subjectLi);

      const videoList = document.createElement('ul');
      videoList.style.display = 'none';

      item.videos.forEach(video => {
        const videoLi = document.createElement('li');
        videoLi.textContent = video.title;
        videoLi.onclick = () => showVideo(video.url);
        videoList.appendChild(videoLi);
      });

      subjectLi.onclick = () => {
        videoList.style.display = (videoList.style.display === 'none') ? 'block' : 'none';
      };

      subjectLi.appendChild(videoList);
    });

    li.onclick = () => {
      subjectList.style.display = (subjectList.style.display === 'none') ? 'block' : 'none';
    };

    li.appendChild(subjectList);
    ul.appendChild(li);
  }

  courseList.appendChild(ul);
}

// ভিডিও লোড করার জন্য
function showVideo(videoUrl) {
  const videoContainer = document.getElementById('video-box');
  videoContainer.innerHTML = `
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
      <iframe 
        src="${videoUrl}" 
        frameborder="0" 
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
  `;
}

// লগইন হলে admin স্টেটাস সেট করা
function login() {
  const userIsAdmin = true; // তুমি যদি admin হও, তবে true দিবে

  if (userIsAdmin) {
    localStorage.setItem('isAdmin', 'true');
  } else {
    localStorage.setItem('isAdmin', 'false');
  }
}

// admin link দেখানোর জন্য
const isAdmin = localStorage.getItem('isAdmin');

if (isAdmin === 'true') {
  document.querySelector('.admin-link').style.display = 'block';
} else {
  document.querySelector('.admin-link').style.display = 'none';
}

// logout function
function logout() {
  localStorage.removeItem('isAdmin');
}
