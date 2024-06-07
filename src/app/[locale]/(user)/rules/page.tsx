import { PageTransition, BgWrapper } from "@/shared/ui";
import { Rules as RulesView } from "@/widgets/";

export default function Rules() {
  return (
    <PageTransition>
      <BgWrapper />
      <RulesView />
    </PageTransition>
  );
}
