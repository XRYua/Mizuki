/// <reference types="mdast" />
import { h } from "hastscript";

/**
 * Creates a TXT viewer embed component.
 *
 * Usage in markdown:
 * <txt src="/files/example.txt" title="示例 TXT" height="560"></txt>
 *
 * @param {Object} properties - The component properties.
 * @param {string} properties.src - TXT file URL.
 * @param {string} [properties.title] - Accessible title.
 * @param {string|number} [properties.height] - iframe height.
 * @param {import('mdast').RootContent[]} children - Child nodes.
 * @returns {import('mdast').Parent} The created TXT viewer component.
 */
export function TxtViewerComponent(properties, children) {
	if (Array.isArray(children) && children.length !== 0) {
		return h(
			"div",
			{ class: "hidden" },
			'Invalid TXT component. (Use leaf-style tag: <txt src="/path/file.txt"></txt>)',
		);
	}

	const rawSrc =
		typeof properties?.src === "string" ? properties.src.trim() : "";
	if (!rawSrc) {
		return h(
			"div",
			{ class: "hidden" },
			'Invalid TXT source. ("src" attribute is required for <txt>)',
		);
	}

	let src = rawSrc;
	try {
		src = decodeURIComponent(rawSrc);
	} catch {
		src = rawSrc;
	}

	const title =
		typeof properties?.title === "string" && properties.title.trim()
			? properties.title.trim()
			: "TXT 在线阅读";
	const height =
		typeof properties?.height === "string" && properties.height.trim()
			? properties.height.trim()
			: "560";

	const viewerParams = new URLSearchParams({ src, title });
	const viewerUrl = `/txt-reader.html?${viewerParams.toString()}`;

	return h("figure", { class: "embed-txt" }, [
		h("iframe", {
			src: viewerUrl,
			title,
			loading: "eager",
			class: "embed-txt-frame",
			height,
		}),
		h("figcaption", { class: "embed-txt-actions" }, [
			h(
				"a",
				{
					href: viewerUrl,
					target: "_blank",
					rel: "noreferrer noopener",
					class: "no-styling",
					"data-no-swup": "",
				},
				`沉浸阅读：${title}`,
			),
			h("span", { class: "txt-separator" }, " · "),
			h(
				"a",
				{
					href: src,
					target: "_blank",
					rel: "noreferrer noopener",
					class: "no-styling",
					"data-no-swup": "",
				},
				`在新标签打开：${title}`,
			),
		]),
	]);
}
