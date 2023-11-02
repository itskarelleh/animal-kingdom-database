import Animals from "@/components/animal/Animals";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {Landing} from "@/components/landing";
import { put } from "@vercel/blob";

const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });

export default async function Home() {


  return (
      <>
        <Landing />
      </>
  );
}
