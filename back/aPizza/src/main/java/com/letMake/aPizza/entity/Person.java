package com.letMake.aPizza.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Refer to Person table
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "person")
public class Person {

    @Id
    @GeneratedValue
    private Integer personSequence;

    private String personName;
    private String personPhone;
    private String personCpf;
    private String personAdress;
    private String personAdressNumber;
    private String personAdressComplement;
    private String personAdressZipCode;
    private String personAdressNeighborhood;
    private String personAdressCity;
    private String personAdressState;


}
