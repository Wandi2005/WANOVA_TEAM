"use client";

import { useState } from "react";

interface Props {
    order: any;
    onClose: () => void;
    onUpdated: () => void;
  }