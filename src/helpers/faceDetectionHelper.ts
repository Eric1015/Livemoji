export const isJoyFace = (faceInfo: any) => {
  if (faceInfo.joyLikelihood === 'LIKELY' || faceInfo.joyLikelihood === 'VERY_LIKELY') {
    return true;
  } else {
    return false;
  }
};

export const isSurpriseFace = (faceInfo: any) => {
  if (faceInfo.surpriseLikelihood === 'LIKELY' || faceInfo.surpriseLikelihood === 'VERY_LIKELY') {
    return true;
  } else {
    return false;
  }
};
