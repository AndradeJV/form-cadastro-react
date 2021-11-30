from selenium import webdriver
import time
import json

driver = webdriver.Chrome()


class Objects:
  def abrir_pagina():
    driver.get('http://localhost:3000/')

  def click_button_CADASTRAR():
    driver.find_element_by_css_selector('span.MuiButton-label').click()

  def inserir_nome(nome):
    driver.find_element_by_id('nome-label').send_keys(nome)

  def inserir_sobrenome(sobrenome):
    driver.find_element_by_id('sobrenome').send_keys(sobrenome)

  def inserir_cpf(cpf):
    driver.find_element_by_id('cpf').send_keys(cpf)

  def finalizar_teste():
    driver.quit()

  def mensagem_exito():
    print("Teste realizado com sucesso")