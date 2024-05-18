import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { questions } from "@/constants/data";

export function AccordionComponent() {
    return (
        <Accordion type="single" collapsible className="w-full bg-secondary">
            {questions.map((question) => (
                <AccordionItem key={question.item} value={question.item}>
                    <AccordionTrigger>{question.question}</AccordionTrigger>
                    <AccordionContent>{question.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
