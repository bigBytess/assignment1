import { Box, Skeleton } from "@mui/material";
import React from "react";

function ChatSkeleton() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}>
        <Skeleton
          variant="rectangular"
          height={40}
          width="30%"
          sx={{ mb: 1, borderRadius: 1 }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
        <Skeleton
          variant="rectangular"
          height={40}
          width="40%"
          sx={{ mb: 1, borderRadius: 1 }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}>
        <Skeleton
          variant="rectangular"
          height={40}
          width="50%"
          sx={{ mb: 1, borderRadius: 1 }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
        <Skeleton
          variant="rectangular"
          height={40}
          width="40%"
          sx={{ mb: 1, borderRadius: 1 }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}>
        <Skeleton
          variant="rectangular"
          height={40}
          width="30%"
          sx={{ mb: 1, borderRadius: 1 }}
        />
      </Box>
    </>
  );
}

export default ChatSkeleton;
