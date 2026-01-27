"use client";

import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function PropertyMap({ properties, selectedCategory }: any) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/standard",
      center: [46.6753, 24.7136],
      zoom: 15.8,
      pitch: 70,
      bearing: -30,
      antialias: true,
      config: {
        basemap: {
          lightPreset: "night"
        }
      }
    });

    map.addControl(new mapboxgl.NavigationControl({ showCompass: true }), "bottom-right");

    map.on("style.load", () => {
      map.addLayer({
        id: "custom-3d-buildings",
        source: "composite",
        "source-layer": "building",
        filter: ["==", "extrude", "true"],
        type: "fill-extrusion",
        minzoom: 13,
        paint: {
          "fill-extrusion-color": "#0d111c",
          "fill-extrusion-height": ["get", "height"],
          "fill-extrusion-base": ["get", "min_height"],
          "fill-extrusion-opacity": 0.55,
          "fill-extrusion-emissive-strength": 0.5,
        },
      });

      properties.forEach((property: any, index: any) => {
        const el = document.createElement("div");
        el.innerHTML = property?.title || "Property";
        el.style.color = "#ffeb3b";
        el.style.fontSize = "20px";
        el.style.fontWeight = "bold";
        el.style.textShadow = "0 0 12px rgba(255,235,59,0.9), 0 0 24px rgba(0,0,0,0.9)";
        el.style.background = "rgba(0,0,0,0.65)";
        el.style.padding = "8px 16px";
        el.style.borderRadius = "10px";
        el.style.cursor = "pointer";
        el.style.border = "1px solid rgba(255,235,59,0.4)";

        new mapboxgl.Marker({
          element: el,
          anchor: "bottom",
          offset: [0, -10],
        })
          .setLngLat([46.673 + index * 0.005, 24.713 + index * 0.004])
          .addTo(map);
      });
    });

    return () => map.remove();
  }, [properties, selectedCategory]);

  return <div ref={mapRef} className="absolute inset-0 h-260 w-full rounded-xl overflow-hidden" />;
}