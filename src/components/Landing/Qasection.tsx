import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const items = [
  {
    value: 'billing',
    trigger: 'რატომ არ გაქვთ სხვა კატეგორიები?',
    content:
      'ამჟამად ვფოკუსირდებით მოცემულ კონტენტზე, მაგრამ გეგმაში გვაქვს სხვა კატეგორიების დამატება მომავალში.',
  },
  {
    value: 'security',
    trigger: 'წერთ თუ არა ქართულ სპორტზე?',
    content:
      'დიახ, ჩვენი გუნდი რეგულარულად აქვეყნებს მიმოხილვებს ქართული სპორტის მოვლენებზე, განსაკუთრებით ძიუდოსა და ჭიდაობაზე.',
  },
  {
    value: 'integration',
    trigger: 'ვინ წერს ისტორიებს და სიახლეებს?',
    content:
      'ჩვენი კონტენტი იწერება პროფესიონალი სპორტული ჟურნალისტებისა და ექსპერტების მიერ.',
  },
  {
    value: 'integration2',
    trigger: 'გაქვთ თუ არა მობილური აპლიცაცია?',
    content:
      'ამჟამად ჩვენ ვმუშაობთ მობილური აპლიკაციის დეველოპმენტზე, რომელიც გამოვა მომავალი წლის დასაწყისში.',
  },
];

export function QaSection() {
  return (
    <div className="my-12">
      <h1 className="text-4xl font-extrabold tracking-wide">
        ხშირად დასმული კითხვები
      </h1>
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="mt-4"
      >
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="cursor-pointer text-lg font-semibold hover:font-semibold">
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent className="m-2">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
