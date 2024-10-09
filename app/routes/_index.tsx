import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [{ title: "الصفوة كوبي سنتر" }, { name: "description", content: "أهلاً بالصفوة 💪!" }];
};

export default function Index() {
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-16">
        
      </div>
		</div>
	);
}
