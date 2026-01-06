import Container from "@/components/shared/Container";
import { BrainCircuit, CheckCircle2, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "Precision Through AI Intelligence.",
    description:
      "Navigate Saudi Arabia's evolution with AI-driven insights. We transform market data into foresight, ensuring every investment is backed by mathematical certainty.",
  },
  {
    icon: CheckCircle2,
    title: "Uncompromising Transparency",
    description:
      "We replace speculation with verification. By syncing directly with the Kingdom’s legal registries, Sakk guarantees that every asset is authenticated at the source.",
  },
  {
    icon: ShieldCheck,
    title: 'The "Digital Seal"',
    description:
      "Verify. Seal. Secure. Our digital infrastructure employs legal-grade authentication and advanced protocols to lock your interests, safeguarding every step of your journey to ownership.",
  },
];

export default function Services() {
  return (
      <Container className="py-16 md:py-8 lg:py-12 bg-neutral-800 my-8 lg:my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-6 max-w-sm mx-auto"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-gradient-to-b from-emerald-500 to-emerald-900 rounded-full flex items-center justify-center shadow-lg">
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-white text-lg md:text-xl font-medium leading-relaxed">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
  );
}