import { useSession } from "./use-session";
import { SERVER_URL } from "@/configs/env.config";
import { useCallback, useState } from "react";

const useFileUpload = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const { session } = useSession();

  const uploadFiles = useCallback(
    async (files: File[]) => {
      const imageURLs: string[] = [];
      try {
        setIsUploading(true);
        setIsError(false);

        for (const file of files) {
          const formData = new FormData();
          formData.append("file", file);

          const response = await fetch(`${SERVER_URL}/file/upload`, {
            method: "POST",
            body: formData,
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${session?.token}`,
            },
          });

          if (!response.ok) {
            throw new Error(`Upload failed for file: ${file.name}`);
          }
          const imageResponse = await response.json();
          imageURLs.push(imageResponse.file_path);
        }

        return imageURLs;
      } catch (err) {
        setIsError(true);
        throw new Error(`Upload failed: ${err}`);
      } finally {
        setIsUploading(false);
      }
    },
    [session?.token],
  );
  return { uploadFiles, isUploading, isError };
};

export default useFileUpload;
