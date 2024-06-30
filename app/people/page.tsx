import { title, subtitle } from "@/components/primitives";
import { Placeholder } from "@/components/placeholder";
import { peopleList, PeopleList, Person } from "@/config/people";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { Card, CardHeader, CardBody } from "@nextui-org/card";


export default function PeoplePage() {
  return (
    <div className="text-left">
      <ExpandPeople text={"Director"} people={peopleList.director} />
      <Divider />

      <ExpandPeople text={"Postdocs"} people={peopleList.postdocs} />
      <Divider />

      <ExpandPeople text={"PhD Students"} people={peopleList.phds} />

    </div>
  );
}


function ExpandPeople({text, people} : {text: string, people: Person[]}) 

{
  return (
    <div className="p-8">
      <h1 className={title()}>{text}</h1>
    <ul>
      {people.map((person) => ExpandPerson(person))}
    </ul>
    </div>
  )

}


function ExpandPerson(person: Person) {
  return (
      <li key={person.name}>
        <PersonCard {...person} />
      </li>
  )
}


export function PersonCard(person: Person) {
  return (
    <Card className="py-4 border-none" shadow="none">
      <CardBody>
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <div className="relative aspect-[500/300]">
              <Image 
                src="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=6fqNXooAAAAJ&citpid=1"
                alt={person.name}
                height={2}
                radius="none"
                // layout="fill"
                className="h-full"
                // classNames={{ wrapper: "w-full min-h-full"}}
              />
            </div>

          </div>

          <div className="col-span-3 flex">
            <div className="flex flex-col">
              <h2 className={subtitle()}>{person.name}</h2>
              <p className="text-justify">{person.intro}</p>
              <Link href={person.homepage}>Homepage</Link>
            </div>
          </div>

        </div>
      </CardBody>
    </Card>
  )

}
