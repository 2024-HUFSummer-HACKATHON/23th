
package com.example.hufamilys.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Participate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Participateid")
    private Long id;

    @Column
    private Long postid;

    @Column
    private Long memberid;

}
