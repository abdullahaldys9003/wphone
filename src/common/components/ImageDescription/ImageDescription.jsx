
import React from 'react';
import { motion } from 'framer-motion'; // استيراد مكتبة framer-motion
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ImageDescription({ description }) {
  // إعدادات الحركة
  const descriptionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      key={description} // إعادة تشغيل الحركة عند تغيير النص
      initial="initial"
      animate="animate"
      exit="exit"
      variants={descriptionVariants}
      transition={{ duration: 0.6, ease: "easeInOut" }} // تحسين الانتقال
    >
      <Box
        boxShadow={4} // تعزيز الظل ليكون أقوى
        p={3}
        my={3}
        borderRadius={4} // إضافة زوايا دائرية
        mx="auto" // توسيط العنصر
      >
        <Typography variant="body1" color="textPrimary" align="center">
          {description}
        </Typography>
      </Box>
    </motion.div>
  );
}