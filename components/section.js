import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import Image from "@material-tailwind/react/Image"

const Section = (props) => {
    return (
        <section className="bg-[#F8F9FA] pb-10 px-10">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between pt-6 pb-3">
                    <h2 className="text-gray-700  pt-2">Start a new Document</h2>
                    <Button
                        color="gray"
                        buttonType="outline"
                        rounded={true}
                        iconOnly={true}
                        ripple="dark"
                        className="h-15 w-15 mr-3 border-0"
                    >
                        <Icon name="more_vert" size="2xl" />
                    </Button>
                </div>
                <div >
                    <div onClick={() => props.fun(true)} className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
                        <Image  src="https://links.papareact.com/pju" layout="fill" />
                    </div>
                    <p className="mt-2 ml-2 font-semibold text-sm text-gray-700">Blank</p>
                </div>
            </div>
        </section>
    )
}

export default Section
