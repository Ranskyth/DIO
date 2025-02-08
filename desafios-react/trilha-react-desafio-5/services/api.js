import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://wavtesfpvtfsibnhedxe.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhdnRlc2ZwdnRmc2libmhlZHhlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDU5NDUyNSwiZXhwIjoyMDQ2MTcwNTI1fQ.85nynUV-iLXhb9NUkdzbDLItAUepAPUIJkc7LqnoeyU",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhdnRlc2ZwdnRmc2libmhlZHhlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDU5NDUyNSwiZXhwIjoyMDQ2MTcwNTI1fQ.85nynUV-iLXhb9NUkdzbDLItAUepAPUIJkc7LqnoeyU"
    }
})