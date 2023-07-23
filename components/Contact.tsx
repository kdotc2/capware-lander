import React from 'react'

type Props = {}

function Contact({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center" id="contact">
      <div className="flex py-4 text-lg font-semibold">Contact</div>
      <p className="prose flex">Want to work together or interested in learning more?</p>
      {/* <div className="space-y-4">
        <input
          id="name"
          type="name"
          name="name"
          required
          className="flex w-[400px] rounded-md border px-3 py-2"
          placeholder="Name"
        />
        <input
          id="email"
          type="email"
          name="email"
          required
          className="flex w-[400px] rounded-md border px-3 py-2"
          placeholder="Email"
        />
        <textarea
          id="message"
          name="message"
          required
          className="flex h-[200px] w-[400px] resize-none rounded-md border px-3 py-2"
          placeholder="Message"
        />
        <div className="flex justify-end">
          <button className="rounded-md bg-blue-500 px-3 py-2 text-sm font-medium text-white">
            Submit
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default Contact
