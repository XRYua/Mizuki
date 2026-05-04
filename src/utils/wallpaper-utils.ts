import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "../config";
import localAnimeList from "../data/anime";

type AnimeLikeItem = {
	title?: string;
	name?: string;
	name_cn?: string;
};

function loadAnimeDataFromFile(filename: string): AnimeLikeItem[] {
	const dataPath = path.join(process.cwd(), "src/data", filename);
	if (!fs.existsSync(dataPath)) {
		return [];
	}

	try {
		const fileContent = fs.readFileSync(dataPath, "utf-8");
		const parsed = JSON.parse(fileContent);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}

function getAnimeTitlesFromMode(): string[] {
	const mode = siteConfig.anime?.mode || "bangumi";

	if (mode === "local") {
		return localAnimeList.map((item) => item.title).filter(Boolean);
	}

	if (mode === "bilibili") {
		return loadAnimeDataFromFile("bilibili-data.json")
			.map((item) => item.title || item.name_cn || item.name)
			.filter((title): title is string => Boolean(title?.trim()));
	}

	return loadAnimeDataFromFile("bangumi-data.json")
		.map((item) => item.title || item.name_cn || item.name)
		.filter((title): title is string => Boolean(title?.trim()));
}

export function resolveWallpaperApiUrl(rawUrl: string): string {
	if (!rawUrl.includes("{keyword}")) {
		return rawUrl;
	}

	const titles = getAnimeTitlesFromMode();
	if (titles.length === 0) {
		return rawUrl.replace("{keyword}", encodeURIComponent("anime"));
	}

	const randomTitle = titles[Math.floor(Math.random() * titles.length)];
	return rawUrl.replace("{keyword}", encodeURIComponent(randomTitle));
}
