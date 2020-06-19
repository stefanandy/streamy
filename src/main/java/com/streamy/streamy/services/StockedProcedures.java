package com.streamy.streamy.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.StoredProcedureQuery;
import java.math.BigDecimal;

@Service
public class StockedProcedures {
    @Autowired
    EntityManager em;

    public BigDecimal avgRating(int id){
        StoredProcedureQuery st= em.createStoredProcedureQuery("avg_rating");

        st.registerStoredProcedureParameter("movie_id_parameter",Integer.class, ParameterMode.IN);
        st.registerStoredProcedureParameter("rating", BigDecimal.class, ParameterMode.INOUT);

        st.setParameter("movie_id_parameter",id);
        st.execute();
        BigDecimal rating= (BigDecimal) st.getOutputParameterValue("rating");
        return rating;
    }

    public int countRatings(int id){
        StoredProcedureQuery st= em.createStoredProcedureQuery("count_rating");

        st.registerStoredProcedureParameter("movie_id_parameter",Integer.class, ParameterMode.IN);
        st.registerStoredProcedureParameter("count", Integer.class, ParameterMode.INOUT);

        st.setParameter("movie_id_parameter",id);
        st.execute();
        int count=  Integer.parseInt(st.getOutputParameterValue("rating").toString());
        return count;
    }

}
