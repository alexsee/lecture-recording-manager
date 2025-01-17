﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LectureRecordingManager.Models
{
    public class Recording
    {
        public int Id { get; set; }

        public int LectureId { get; set; }

        public Lecture Lecture { get; set; }

        public int? LinkedRecording { get; set; }

        public RecordingType Type { get; set; }

        [Required]
        [Column(TypeName = "varchar(255)")]
        public string Title { get; set; }

        public string Description { get; set; }

        public double Duration { get; set; }

        public bool Published { get; set; }

        public DateTimeOffset? UploadDate { get; set; }

        public DateTimeOffset? PublishDate { get; set; }

        public int Sorting { get; set; }

        public string FilePath { get; set; }

        public string CustomTargetName { get; set; }

        public List<RecordingChapter> Chapters { get; set; }

        public List<RecordingOutput> Outputs { get; set; }
    }
}
