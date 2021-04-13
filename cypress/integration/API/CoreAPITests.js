/// <reference types="Cypress" />

describe('Smoke Suite', function()
{
    before(function() {
      globalThis.url = Cypress.env('apirooturl')
      cy.log(url)
      
      cy.request({
        method: 'POST',
        url: url + 'oauth/token', 
        form: true, 
        body: {
          grant_type: 'password',
          client_id: 2,
          client_secret: '6q0AgyVd2qZQzzBv76BeZKfwvHKdyfRKFrLiGeJX',
          username: 'admin@demo.com',
          password: 'D3m0U$3r'
        },
      }).then((response) => {
        globalThis.x = response.body.access_token  
        cy.log("create session " + x)
        expect(response.status).to.eq(200)  
      })
      })
    
      after(() => {
  
      })

    it('Get all Companies', function(){
      cy.request({
        method: 'GET',
        url: url + 'api/companies', 
        form: true, 
        headers: {
          'Authorization': 'Bearer ' + x
        },
      }).then((response) => {
        expect(response.status).to.eq(200)  
      })
    })

    it('Get companies by search', function(){
      cy.request({
        method: 'GET',
        url: url + 'api/companies', 
        form: true, 
        headers: {
          'Authorization': 'Bearer ' + x
        }, body: {
          term: 'General Communication'}
      }).then((response) => {
        expect(response.status).to.eq(200)  
      })
    })

    it('Get all case studies', function(){
      cy.request({
        method: 'GET',
        url: url + 'api/case_studies', 
        form: true, 
        headers: {
          'Authorization': 'Bearer ' + x
        },
      }).then((response) => {
        expect(response.status).to.eq(200)  
      })
    })

    it('Create case study', function(){
      cy.request({
        method: 'POST',
        url: url + 'api/case_studies', 
        form: true, 
        headers: {
          'Authorization': 'Bearer ' + x
        },
        body: {
          sequence: 0,
          company_id: 73,
          name: 'Case Study - Test',
          description: 'Fugit eos commodi quo et vitae. Itaque rerum omnis alias. Sed est sint rerum voluptas.',
          redacted: 0,
          tags: 'Rerum aut ducimus quia velit. Sed sit nihil accusantium et.',
          active: 1,
          default_off: 0
        },
      }).then((response) => {
        globalThis.caseId = response.body.data.id 
        cy.log("id " + caseId)
        expect(response.status).to.eq(201)  
      })
    })

    it('Get testimonials', function(){
      cy.request({
        method: 'GET',
        url: url + 'api/case_study_testimonials', 
        form: true, 
        headers: {
          'Authorization': 'Bearer ' + x
        },
      }).then((response) => {
        expect(response.status).to.eq(200)  
      })
    })

    it('Create testimonial', function(){
      cy.request({
        method: 'POST',
        url: url + 'api/case_study_testimonials', 
        form: true, 
        headers: {
          'Authorization': 'Bearer ' + x
        },
        body: {
          sequence: 0,
          case_study_id: caseId,
          contact_id: 1,
          description: 'Pariatur cum molestiae recusandae recusandae error assumenda libero. Soluta quos architecto ipsa. Est autem enim et rerum ullam dolorem. Enim non et similique',
        },
      }).then((response) => {
        globalThis.testimonialId = response.body.data.id 
        cy.log("id " + testimonialId)
        expect(response.status).to.eq(201)  
      })
    })

    it('Delete testimonial', function(){
      cy.request({
        method: 'DELETE',
        url: url + 'api/case_study_testimonials/' + testimonialId, 
        form: true, 
        headers: {
          'Authorization': 'Bearer ' + x
        },
      }).then((response) => {
        expect(response.status).to.eq(204)  
      })
    })

    it('Delete the case', function(){
      cy.request({
        method: 'DELETE',
        url: url + 'api/case_studies/' + caseId, 
        form: true, 
        headers: {
          'Authorization': 'Bearer ' + x
        },
      }).then((response) => {
        expect(response.status).to.eq(204)  
      })
    })


    it('Get all Companies', function(){
      cy.request({
        method: 'GET',
        url: url + 'api/companies', 
        form: true, 
        headers: {
          'Authorization': 'Bearer ' + x
        },
      }).then((response) => {
        expect(response.status).to.eq(205)  
      })
    })
})