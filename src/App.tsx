/* eslint-disable @typescript-eslint/no-explicit-any */
import { P } from "./_ui/P";
import { About } from "./components/About";
import { CloudflareLogo } from "./components/CloudflareLogo";
import { Sanitizer } from "./components/Sanitizer";

function App() {
	return (
		<div className="flex flex-col justify-center place-items-start min-h-[100dvh] mx-auto max-w-7xl p-4 md:p-6 lg:p-8">
			<div className="w-full space-y-8">
				<div className="grid gap-x-8 gap-y-8 items-end md:grid-cols-[1fr_14rem]">
					<div className="md:order-last w-[min(100%,14rem)]">
						<a href="https://www.cloudflare.com/">
							<CloudflareLogo />
						</a>
					</div>
					<div className="pb-0.5">
						<h1 className="text-3xl font-bold">HAR File Sanitizer</h1>
						<P className="text-sm text-neutral-700">
							Protect your session data by sanitizing your HAR files before
							sharing. Built with Cloudflare Workers.
						</P>
					</div>
				</div>
				<Sanitizer />
				<About />
			</div>
		</div>
	);
}

export default App;
