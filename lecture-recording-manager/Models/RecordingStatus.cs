﻿namespace LectureRecordingManager.Models
{
    public enum RecordingStatus
    {
        UPLOADED = 0,
        SCHEDULED = 3,
        PROCESSING = 1,
        PROCESSED = 2,
        SCHEDULED_PUBLISH = 5,
        PUBLISHED = 4,
        ERROR = -1
    }
}
