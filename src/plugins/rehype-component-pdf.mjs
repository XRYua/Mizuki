/// <reference types="mdast" />
import { h } from "hastscript";

/**
 * Creates a PDF viewer embed component.
 *
 * Usage in markdown:
 * <pdf src="/files/example.pdf" title="示例 PDF" height="780"></pdf>
 *
 * @param {Object} properties - The component properties.
 * @param {string} properties.src - PDF file URL.
 * @param {string} [properties.title] - Accessible title.
 * @param {string|number} [properties.height] - iframe height.
 * @param {import('mdast').RootContent[]} children - Child nodes.
 * @returns {import('mdast').Parent} The created PDF viewer component.
 */
export function PdfViewerComponent(properties, children) {
	if (Array.isArray(children) && children.length !== 0) {
		return h(
			"div",
			{ class: "hidden" },
			'Invalid PDF component. (Use leaf-style tag: <pdf src="/path/file.pdf"></pdf>)',
		);
	}

	const src = typeof properties?.src === "string" ? properties.src.trim() : "";
	if (!src) {
		return h(
			"div",
			{ class: "hidden" },
			'Invalid PDF source. ("src" attribute is required for <pdf>)',
		);
	}

	const title =
		typeof properties?.title === "string" && properties.title.trim()
			? properties.title.trim()
			: "PDF 在线预览";
	const height =
		typeof properties?.height === "string" && properties.height.trim()
			? properties.height.trim()
			: "780";

	const iframeSrc = src.includes("#") ? src : `${src}#view=FitH`;

	return h("figure", { class: "embed-pdf" }, [
		h("iframe", {
			src: iframeSrc,
			title,
			loading: "lazy",
			class: "embed-pdf-frame",
			height,
		}),
		h("figcaption", { class: "embed-pdf-actions" }, [
			h(
				"a",
				{
					href: src,
					target: "_blank",
					rel: "noreferrer noopener",
					class: "no-styling",
				},
				`在新标签打开：${title}`,
			),
		]),
	]);
}
