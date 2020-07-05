﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LectureRecordingManager.Models
{
    public class Lecture
    {
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(255)")]
        public string Title { get; set; }

        [Column(TypeName = "text")]
        public string Description { get; set; }

        [Required]
        public int SemesterId { get; set; }

        public Semester Semester { get; set; }

        public string SourcePath { get; set; }

        public string PublishPath { get; set; }

        public DateTime? LastSynchronized { get; set; }

        public bool Publish { get; set; }

        public bool Active { get; set; }
    }
}
