package br.com.dio.model;

public enum GameStatusEnum {
	
	NON_STARTED("Não iniciado"),
	INCOMPLETE("Incompleto"),
	COMPLETE("Completo");
	
	private String label;
	
	private GameStatusEnum(final String label) {
		this.label = label;
	}
	
	public String getLabel() {
		return label;
	}
}
