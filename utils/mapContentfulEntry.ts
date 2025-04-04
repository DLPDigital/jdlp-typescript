import type { Entry, Asset } from "contentful"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { Document } from "@contentful/rich-text-types"

const isAsset = (value: any): value is Asset =>
  value?.sys?.type === "Asset"

const isEntry = (value: any): value is Entry =>
  value?.sys && value?.metadata && value?.fields;

const mapfields = (entry: Entry | Asset): Record<string, any> => {
  const { fields } = entry
  
  if (isAsset(entry)) {
    if ((fields as any).file?.contentType?.startsWith("image/")) {
      return { 
        title: fields.title, 
        src: (fields as any).file.url,
        __typename: "Asset" // Add explicit typename for assets
      }
    }
    return fields;
  }
  
  const entries = Object.entries(fields).map(([key, value]) => {
    if (isEntry(value)) return [key, mapContentfulEntry(value)]
    
    // Fix the array mapping to handle non-Entry items properly
    if (Array.isArray(value)) {
      return [key, value.map(item => 
        isEntry(item) ? mapContentfulEntry(item) : 
        isAsset(item) ? { ...item, __typename: "Asset" } : 
        item
      )];
    }
    
    if (value && typeof value === 'object' && 
        'nodeType' in value && value.nodeType === "document") {
      const options = {
        preserveWhitespace: true,
      }
      return [key, documentToHtmlString(value as Document, options)]
    }
    
    if (key === "url") return ["href", value]
    
    return [key, value]
  })
  
  return Object.fromEntries(entries)
}

function capitalise(str: string): string {
  if (!str) return "Unknown"; // Provide default value
  const first = str.charAt(0);
  const rest = str.slice(1);
  return `${first.toUpperCase()}${rest}`
}

export const mapContentfulEntry = (entry: any): Record<string, any> => {
  if (!entry) return {};
  if (!isEntry(entry)) return entry;
  
  const __typename = entry.sys?.contentType?.sys?.id;
  
  return {
    ...mapfields(entry),
    __typename: __typename ? capitalise(__typename) : "Unknown", // Never undefined
    id: entry.sys.id,
  }
}