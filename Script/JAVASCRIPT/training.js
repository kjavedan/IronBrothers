// questions database
const trainingQuestionsBank = [
    {
        id: 1,
        questionTitle: 'When to start Working out?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 2,
        questionTitle: 'How to start working out?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 3,
        questionTitle: 'How much time should you spend on working out?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 4,
        questionTitle: 'How often should you workout?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 5,
        questionTitle: 'What type of workout fit your body?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 6,
        questionTitle: 'How to schedule your workout?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 7,
        questionTitle: 'Training system from beginner to advance?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    }
]
const nutritionQuestionsBank = [
    {
        id: 1,
        questionTitle: 'What is nutrition?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 2,
        questionTitle: 'How does Nutrition work?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 3,
        questionTitle: 'What should I eat to lose fat?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 4,
        questionTitle: 'What should I eat to gain muscle?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 5,
        questionTitle: 'What should I eat to lose fat and gain muscle at the same time?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 6,
        questionTitle: 'How to plan my diet?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 7,
        questionTitle: 'What are the benefits of nutrition?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    }
]
const goalsQuestionsBank = [
    {
        id: 1,
        questionTitle: 'Why you need a goal?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 2,
        questionTitle: 'How to set a goal?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 3,
        questionTitle: 'How much time should you spend on working out?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 4,
        questionTitle: 'How much time it will take you to achieve your goal?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 5,
        questionTitle: 'What type of workout fit your body?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 6,
        questionTitle: 'Why do you need to build a system?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    },
    {
        id: 7,
        questionTitle: 'Is it worth all the scrofices that you will make?',
        questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias, asperiores aut commodi cumque debitis dignissimos explicabo fugiat impedit labore maxime molestiae optio possimus quasi qui quo quos recusandae sapiente sequi sit veniam, veritatis vero voluptatem voluptatibus! Maiores, quidem.',
    }
]

// determine which page is calling the function
let questionBank;
if (document.title == 'Training Tips'){
    questionBank = trainingQuestionsBank;
}
else if (document.title == 'Nutrition Tips'){
    questionBank = nutritionQuestionsBank;
}
else {
    questionBank = goalsQuestionsBank;
}

// display the questions when the page load
window.addEventListener('DOMContentLoaded', () => {
    displayQuestions(questionBank);
})

// getting the values
const questions = document.querySelector('.questions');
let question;

// display question function
function displayQuestions(items){
    let displayEachQuestion = items.map( item =>
        (` <article class="question">
<!--        question title-->
        <div class="question-title">
            <p>${item.questionTitle}</p>
<!--            icons-->
            <button class="question-btn">
                <span class="plus-icon">
                    <i class="far fa-plus-square"></i>
                </span>
                <span class="minus-icon">
                    <i class="far fa-minus-square"></i>
                </span>
            </button>
        </div>
<!--        question text-->
        <div class="question-text">
            <p>${item.questionText}</p>
        </div>
    </article>`)
    ).join("") 
    questions.innerHTML = displayEachQuestion;
    buttonsFunction();
    
}

// buttons function
function buttonsFunction(){
    const btns = document.querySelectorAll('.question-btn');
    btns.forEach( btn => {
        btn.addEventListener('click', () => {
            const parent = btn.parentElement.parentElement;
            parent.classList.toggle('show-text');
        })
    })
    evaluate();
}

// evaluate the reffering link in order to find the question to scroll to it
function evaluate(){
    const title = document.querySelectorAll('.question-title')
    
    if(typeof(localStorage !== undefined)){
        const refferedLink = localStorage.getItem('link');

        console.log(refferedLink);
        title.forEach( e => {
            if(e.firstElementChild.textContent == refferedLink){
                console.log(e.parentElement.getBoundingClientRect().top);
                const position = e.parentElement.getBoundingClientRect().top;
                window.scrollTo({
                    left: 0,
                    top: position
                })
               e.parentNode.classList.add('show-text');
            }
    })  
        }
    else{
        console.log('browser dont support');
    }
}