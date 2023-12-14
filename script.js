document.addEventListener('DOMContentLoaded', function () {
    fetchData();
});

function fetchData() {
    fetch('https://blog.resumebuild.in/blog/home-page') 
        .then(response => response.json())
        .then(data1 => {
            updateUI(data1);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function updateUI(data1) {
    
    // topTwoPostsContainer = data.top_two_posts
        // Assuming data1.data.top_two_posts is an array of posts
        const posts = data1.data.top_two_posts;

   
    const postsHTML = posts.map(post => `
        <div class="carousel-item">
            <div class="col-sm-12">
                <div class="box-container">
                    <img src="https://blog.resumebuild.in${post.image || 'placeholder-image.png'}" class="d-block w-100" alt="">

                    <div class="box-container-text">
                        <div class="container-resume">
                   
                            <a href= "profile.html">
                                <h4>${post.created_at}</h4>
                            </a>
                        </div>
                        <a href=" profile.html" class="caption-link">
                            <h2>${post.title}</h2>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    
    const topTwoPostsContainer = document.getElementById('topTwoPosts');
    topTwoPostsContainer.innerHTML = postsHTML;
    const firstItem = topTwoPostsContainer.querySelector('.carousel-item');
    if (firstItem) {
      firstItem.classList.add('active');
    }
    $('#myCarousel').carousel();

    const post6 = data1.data.mid_six_post;
    

    const midSixPostsContainer = document.getElementById('topSixPosts');
    const midSixPosts = data1.data.mid_six_post;
    const midSixPostsHTML = midSixPosts.map(post => `
        <div class="col-sm-4">
            <div class="card1">
                <div class="resume-guide">
                    <img src="https://blog.resumebuild.in${post.image || 'placeholder-image.png'}" alt="">
                </div>
                <div class="navigate navigater-system">
                    <a href="${post.profile_link}">
                        <h2>${post.category}</h2>
                    </a>
                    <span class="light">${post.date}</span>
                </div>
                <div class="resume-build">
                    <a href="${post.profile_link}">${post.title}</a>
                </div>
                <p>${post.description}</p>
            </div>
            <div class="details-div">
                <img src="${post.details_image}" alt="">
                <h2>${post.details_title}</h2>
            </div>
        </div>
    `).join('');

    midSixPostsContainer.innerHTML = midSixPostsHTML;


    const engineeringPosts = data1.data.mid_one_post;
    const engineeringPostsContainer = document.getElementById('middlePost');


    if (Array.isArray(engineeringPosts)) {
        const engineeringPostsHTML = engineeringPosts.map(post => `
            <div class="col-sm-6">
                <div class="crafting">
                    <img src="https://blog.resumebuild.in${post.image || 'placeholder-image.png'}" alt="">
                </div>
                <div class="links-engineering">
                    <a href="${post.profile_link}">${post.title}</a>
                </div>
            </div>
        `).join('');
    
        engineeringPostsContainer.innerHTML = engineeringPostsHTML;
    } else if (typeof engineeringPosts === 'object') {
        // Generate HTML for a single engineering post
        const engineeringPostHTML = `
            <div class="col-sm-6">
                <div class="crafting">
                    <img src="https://blog.resumebuild.in${engineeringPosts.image || 'placeholder-image.png'}" alt="">
                </div>
                <div class="links-engineering">
                    <a href="${engineeringPosts.title}">${engineeringPosts.title}</a>
                </div>
            </div>
            <div class="col-sm-6">
                            
            <div class="big-crafting-box">


                <div class="make-crafting">
                    <div class="list-crafting-text">
                        <h2>JOB APPLICATION STRATEGIES</h2>
                        <h3> ${engineeringPosts.date}</h3>
                    </div>
                    <a href="profile.html">Crafting a Standout Resume: 3 Key Ingredients That Make a Difference in
                        2023 & 2024</a>
                    <p>${engineeringPosts.title}</p>

                </div>
            </div>
                            </div>
        `;
    
        engineeringPostsContainer.innerHTML = engineeringPostHTML;
    } else {
        console.error('engineeringPosts is not an array or object:', engineeringPosts);
    }



const mostReadPosts = data1.data.most_read_post;


const mostReadPostsContainer = document.getElementById('mostReadPostsContainer');
const mostReadPostsHTML = mostReadPosts.map(post => `
<div class="col-sm-4">     

    <div class="carrier-jobs">
        <div class="logo-image-carrier">
            <img src="https://blog.resumebuild.in${post.image || 'placeholder-image.png'}" alt="">
        </div>
        <div class="text-box">
            <div class="job-text-btn">
                <h3>${post.category}</h3>
                <span class="bright-text">${post.date}</span>
            </div>
            <h2><a href="${post.profile_link}">${post.title}</a></h2>
        </div>
    </div>
    </div>
`).join('');


mostReadPostsContainer.innerHTML = mostReadPostsHTML;




}