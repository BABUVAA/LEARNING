public enum DayEnums {
    
    SUNDAY("ITS SUNDAY"),MONDAY("ITS MONDAY"),TUESDAY("ITS TUESDAY"),WEDNESDAY("ITS WEDNESDAY"),THRUSDAY("ITS THRUSDAY"),FRIDAY("ITS FRIDAY"),SATURDAY("ITS SATURDAY");

    private String day;
    DayEnums(String day)
    {
        this.day=day;
    }
    public String getValue()
    {
        return day;
    }
}
