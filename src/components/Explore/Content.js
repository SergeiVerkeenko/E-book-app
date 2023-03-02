import ExploreItems from "./ExploreItems"

function Content({ label }) {
    const wrapp = [
        {
            id: 1,
            text: 'Internal editor',
            title: `While reading, you can easily change the color, font, text size, line spacing, and other attributes. 

            Mark up and annotate text passages, bookmark your current page, translate selected parts of the text or copy it.`,
            img: 'img1'
        }
        ,
        {
            id: 2,
            text: 'Compact preview',
            title: `Each book has a compact menu with everything you need - starting from the rating, the number of pages, language and a brief introduction of the book, and ending with the choice of book format - read view and audio.`,
            img: 'img2'
        },
        {
            id: 3,
            text: 'Convenient search',
            title: `The app has a separate tab on the main panel with several types of search and selection of books.

            You can search by the title of a book, it’s author, or a particular topic. Also, for those who don’t have a specific request, you can find a book in top categories or by top book authors.`,
            img: 'img3'
        },
        {
            id: 4,
            text: 'Audio version',
            title: `The Pocket Book app delivers a high-quality ebook-reading and audiobook-listening experience. 

            Parallel to the audio track, the text of the book is broadcast. You can pause the audio at any time and switch to independent reading of the book. At the same time, your book progress will be automatically saved.`,
            img: 'img4'
        }
    ]

    function showContent() {

        if (label === 'Internal editor') {
            return <ExploreItems imgClass={wrapp[0].img} h2={wrapp[0].text} key={wrapp[0].id} p={wrapp[0].title} />
        } else if (label === 'Compact preview') {
            return <ExploreItems imgClass={wrapp[1].img} h2={wrapp[1].text} key={wrapp[1].id} p={wrapp[1].title} />
        } else if (label === 'Convenient search') {
            return <ExploreItems imgClass={wrapp[2].img} h2={wrapp[2].text} key={wrapp[2].id} p={wrapp[2].title} />
        } else {
            return <ExploreItems imgClass={wrapp[3].img} h2={wrapp[3].text} key={wrapp[3].id} p={wrapp[3].title} />
        }
    }
    return showContent()

}

export default Content