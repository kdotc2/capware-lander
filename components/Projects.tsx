import React from 'react'
import ItemCard from './ItemCard'

type Props = {}

function Projects({}: Props) {
  return (
    <div className="sm: flex flex-col items-center justify-center" id="projects">
      <div className="flex py-4 text-lg font-semibold">Projects</div>
      <p className="prose pb-10">
        {`A showcase of the projects we've built... Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book.`}
      </p>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
        <ItemCard
          image="/placeholder1.jpg"
          title="Project 1"
          description="Lorem Ipsum is simply dummy text of the printing
        industry."
        />

        <ItemCard
          image="/placeholder2.jpg"
          title="Project 2"
          description="Lorem Ipsum is simply dummy text of the printing
        industry."
        />

        <ItemCard
          image="placeholder3.jpg"
          title="Project 3"
          description="Lorem Ipsum is simply dummy text of the printing
        industry."
        />
      </div>
    </div>
  )
}

export default Projects
