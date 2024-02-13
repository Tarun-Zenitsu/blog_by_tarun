import { Button, FileInput, Select, TextInput } from "flowbite-react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const CreatePost = () => {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
        <div className="text-center text-3xl my-7 font-semibold">Create a Post</div>
        <form className="flex flex-col gap-4">
             <div className="flex flex-col gap-4 sm:flex-row justify-between">
                <TextInput type="text" placeholder="Title" required id="title" className="flex-1"/>
                <Select>
                    <option value='uncategorized'>Select a category</option>
                    <option value='javaScript'>JavaScript</option>
                    <option value='react'>React.js</option>
                    <option value='nextJs'>Next.Js</option>
                    <option value='telwindCSS'>TelwindCSS</option>
                </Select>
             </div>
             <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
                <FileInput type="file" accept="image/*"/>
                <Button type="button" gradientDuoTone='purpleToBlue' size='sm' outline>Upload image</Button>
             </div>
             <ReactQuill placeholder="write something..." theme="snow" className="h-72 mb-12" required/>
             <Button type="submit" gradientDuoTone='purpleToPink'>Publish</Button>
        </form>
    </div>
  )
}
