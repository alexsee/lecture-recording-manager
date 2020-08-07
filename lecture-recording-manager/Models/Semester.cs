﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LectureRecordingManager.Models
{
    public class Semester
    {
        public int Id { get; set; }

        [Column(TypeName = "varchar(255)")]
        public string Name { get; set; }

        public DateTimeOffset DateStart { get; set; }

        public DateTimeOffset DateEnd { get; set; }

        public bool Published { get; set; }

        public bool Active { get; set; }
    }
}
