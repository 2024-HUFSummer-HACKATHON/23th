package com.example.hufamilys.entity;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Postid")
    private Long id;

    private String category;

    private Long memberid;

    @Column
    private String title;

    @Column
    private String link;

    @Column
    private Long maxPeople;

    @Column
    private String endDate;

    @Column
    private Long price;

    @Column
    private String account;

}
