/* 
aáàãảạ
ăắằẵẳặ
âấầẫẩậ
eéèẽẻẹ
êếềễểệ
iíìĩỉị
oóòõỏọ
ôốồỗổộ
ơớờỡởợ
uúùũủụ
ưứừữửự
yýỳỹỷỵ

dđ

DĐ

AÁÀÃẢẠ
ĂẮẰẴẲẶ
ÂẤẦẪẨẬ
EÉÈẼẺẸ
ÊẾỀỄỂỆ
IÍÌĨỈỊ
OÓÒÕỎỌ
ÔỐỒỖỔỘ
ƠỚỜỠỞỢ
UÚÙŨỦỤ
ƯỨỪỮỬỰ
YÝỲỸỶỴ

aáàãảạ
ăắằẵẳặ
âấầẫẩậ
eéèẽẻẹ
êếềễểệ
iíìĩỉị
oóòõỏọ
ôốồỗổộ
ơớờỡởợ
uúùũủụ
ưứừữửự
yýỳỹỷỵ

'o',
'ô',
'ơ'

'ó',
'ố',
'ớ',

'ò',
'ồ',
'ờ',

'õ',
'ỗ',
'ỡ',

'ỏ',
'ổ',
'ở',

'ọ',
'ộ',
'ợ',









*/
const finalObj = {
    'a': { siblings: ['a', 'ă', 'â'], tones: ['a', 'á', 'à', 'ã', 'ả', 'ạ'] },
    'á': { siblings: ['á', 'ắ', 'ấ'], tones: ['a', 'á', 'à', 'ã', 'ả', 'ạ'] },
    'à': { siblings: ['à', 'ằ', 'ầ'], tones: ['a', 'á', 'à', 'ã', 'ả', 'ạ'] },
    'ã': { siblings: ['ã', 'ẵ', 'ẫ'], tones: ['a', 'á', 'à', 'ã', 'ả', 'ạ'] },
    'ả': { siblings: ['ả', 'ẳ', 'ẩ'], tones: ['a', 'á', 'à', 'ã', 'ả', 'ạ'] },
    'ạ': { siblings: ['ạ', 'ặ', 'ậ'], tones: ['a', 'á', 'à', 'ã', 'ả', 'ạ'] },
    'ă': { siblings: ['a', 'ă', 'â'], tones: ['ă', 'ắ', 'ằ', 'ẵ', 'ẳ', 'ặ'] },
    'ắ': { siblings: ['á', 'ắ', 'ấ'], tones: ['ă', 'ắ', 'ằ', 'ẵ', 'ẳ', 'ặ'] },
    'ằ': { siblings: ['à', 'ằ', 'ầ'], tones: ['ă', 'ắ', 'ằ', 'ẵ', 'ẳ', 'ặ'] },
    'ẵ': { siblings: ['ã', 'ẵ', 'ẫ'], tones: ['ă', 'ắ', 'ằ', 'ẵ', 'ẳ', 'ặ'] },
    'ẳ': { siblings: ['ả', 'ẳ', 'ẩ'], tones: ['ă', 'ắ', 'ằ', 'ẵ', 'ẳ', 'ặ'] },
    'ặ': { siblings: ['ạ', 'ặ', 'ậ'], tones: ['ă', 'ắ', 'ằ', 'ẵ', 'ẳ', 'ặ'] },
    'â': { siblings: ['a', 'ă', 'â'], tones: ['â', 'ấ', 'ầ', 'ẫ', 'ẩ', 'ậ'] },
    'ấ': { siblings: ['á', 'ắ', 'ấ'], tones: ['â', 'ấ', 'ầ', 'ẫ', 'ẩ', 'ậ'] },
    'ầ': { siblings: ['à', 'ằ', 'ầ'], tones: ['â', 'ấ', 'ầ', 'ẫ', 'ẩ', 'ậ'] },
    'ẫ': { siblings: ['ã', 'ẵ', 'ẫ'], tones: ['â', 'ấ', 'ầ', 'ẫ', 'ẩ', 'ậ'] },
    'ẩ': { siblings: ['ả', 'ẳ', 'ẩ'], tones: ['â', 'ấ', 'ầ', 'ẫ', 'ẩ', 'ậ'] },
    'ậ': { siblings: ['ạ', 'ặ', 'ậ'], tones: ['â', 'ấ', 'ầ', 'ẫ', 'ẩ', 'ậ'] },
    'e': { siblings: ['e', 'ê'], tones: ['e', 'é', 'è', 'ẽ', 'ẻ', 'ẹ'] },
    'é': { siblings: ['é', 'ế'], tones: ['e', 'é', 'è', 'ẽ', 'ẻ', 'ẹ'] },
    'è': { siblings: ['è', 'ề'], tones: ['e', 'é', 'è', 'ẽ', 'ẻ', 'ẹ'] },
    'ẽ': { siblings: ['ẽ', 'ễ'], tones: ['e', 'é', 'è', 'ẽ', 'ẻ', 'ẹ'] },
    'ẻ': { siblings: ['ẻ', 'ể'], tones: ['e', 'é', 'è', 'ẽ', 'ẻ', 'ẹ'] },
    'ẹ': { siblings: ['ẹ', 'ệ'], tones: ['e', 'é', 'è', 'ẽ', 'ẻ', 'ẹ'] },
    'ê': { siblings: ['e', 'ê'], tones: ['ê', 'ế', 'ề', 'ễ', 'ể', 'ệ'] },
    'ế': { siblings: ['é', 'ế'], tones: ['ê', 'ế', 'ề', 'ễ', 'ể', 'ệ'] },
    'ề': { siblings: ['è', 'ề'], tones: ['ê', 'ế', 'ề', 'ễ', 'ể', 'ệ'] },
    'ễ': { siblings: ['ẽ', 'ễ'], tones: ['ê', 'ế', 'ề', 'ễ', 'ể', 'ệ'] },
    'ể': { siblings: ['ẻ', 'ể'], tones: ['ê', 'ế', 'ề', 'ễ', 'ể', 'ệ'] },
    'ệ': { siblings: ['ẹ', 'ệ'], tones: ['ê', 'ế', 'ề', 'ễ', 'ể', 'ệ'] },
    'i': { siblings: [], tones: ['i', 'í', 'ì', 'ĩ', 'ỉ', 'ị'] },
    'í': { siblings: [], tones: ['i', 'í', 'ì', 'ĩ', 'ỉ', 'ị'] },
    'ì': { siblings: [], tones: ['i', 'í', 'ì', 'ĩ', 'ỉ', 'ị'] },
    'ĩ': { siblings: [], tones: ['i', 'í', 'ì', 'ĩ', 'ỉ', 'ị'] },
    'ỉ': { siblings: [], tones: ['i', 'í', 'ì', 'ĩ', 'ỉ', 'ị'] },
    'ị': { siblings: [], tones: ['i', 'í', 'ì', 'ĩ', 'ỉ', 'ị'] },
    'o': { siblings: ['o', 'ô', 'ơ'], tones: ['o', 'ó', 'ò', 'õ', 'ỏ', 'ọ'] },
    'ó': { siblings: ['ó', 'ố', 'ớ'], tones: ['o', 'ó', 'ò', 'õ', 'ỏ', 'ọ'] },
    'ò': { siblings: ['ò', 'ồ', 'ờ'], tones: ['o', 'ó', 'ò', 'õ', 'ỏ', 'ọ'] },
    'õ': { siblings: ['õ', 'ỗ', 'ỡ'], tones: ['o', 'ó', 'ò', 'õ', 'ỏ', 'ọ'] },
    'ỏ': { siblings: ['ỏ', 'ổ', 'ở'], tones: ['o', 'ó', 'ò', 'õ', 'ỏ', 'ọ'] },
    'ọ': { siblings: ['ọ', 'ộ', 'ợ'], tones: ['o', 'ó', 'ò', 'õ', 'ỏ', 'ọ'] },
    'ô': { siblings: ['o', 'ô', 'ơ'], tones: ['ô', 'ố', 'ồ', 'ỗ', 'ổ', 'ộ'] },
    'ố': { siblings: ['ó', 'ố', 'ớ'], tones: ['ô', 'ố', 'ồ', 'ỗ', 'ổ', 'ộ'] },
    'ồ': { siblings: ['ò', 'ồ', 'ờ'], tones: ['ô', 'ố', 'ồ', 'ỗ', 'ổ', 'ộ'] },
    'ỗ': { siblings: ['õ', 'ỗ', 'ỡ'], tones: ['ô', 'ố', 'ồ', 'ỗ', 'ổ', 'ộ'] },
    'ổ': { siblings: ['ỏ', 'ổ', 'ở'], tones: ['ô', 'ố', 'ồ', 'ỗ', 'ổ', 'ộ'] },
    'ộ': { siblings: ['ọ', 'ộ', 'ợ'], tones: ['ô', 'ố', 'ồ', 'ỗ', 'ổ', 'ộ'] },
    'ơ': { siblings: ['o', 'ô', 'ơ'], tones: ['ơ', 'ớ', 'ờ', 'ỡ', 'ở', 'ợ'] },
    'ớ': { siblings: ['ó', 'ố', 'ớ'], tones: ['ơ', 'ớ', 'ờ', 'ỡ', 'ở', 'ợ'] },
    'ờ': { siblings: ['ò', 'ồ', 'ờ'], tones: ['ơ', 'ớ', 'ờ', 'ỡ', 'ở', 'ợ'] },
    'ỡ': { siblings: ['õ', 'ỗ', 'ỡ'], tones: ['ơ', 'ớ', 'ờ', 'ỡ', 'ở', 'ợ'] },
    'ở': { siblings: ['ỏ', 'ổ', 'ở'], tones: ['ơ', 'ớ', 'ờ', 'ỡ', 'ở', 'ợ'] },
    'ợ': { siblings: ['ọ', 'ộ', 'ợ'], tones: ['ơ', 'ớ', 'ờ', 'ỡ', 'ở', 'ợ'] },
    'u': { siblings: [], tones: ['u', 'ú', 'ù', 'ũ', 'ủ', 'ụ'] },
    'ú': { siblings: [], tones: ['u', 'ú', 'ù', 'ũ', 'ủ', 'ụ'] },
    'ù': { siblings: [], tones: ['u', 'ú', 'ù', 'ũ', 'ủ', 'ụ'] },
    'ũ': { siblings: [], tones: ['u', 'ú', 'ù', 'ũ', 'ủ', 'ụ'] },
    'ủ': { siblings: [], tones: ['u', 'ú', 'ù', 'ũ', 'ủ', 'ụ'] },
    'ụ': { siblings: [], tones: ['u', 'ú', 'ù', 'ũ', 'ủ', 'ụ'] },
    'ư': { siblings: [], tones: ['ư', 'ứ', 'ừ', 'ữ', 'ử', 'ự'] },
    'ứ': { siblings: [], tones: ['ư', 'ứ', 'ừ', 'ữ', 'ử', 'ự'] },
    'ừ': { siblings: [], tones: ['ư', 'ứ', 'ừ', 'ữ', 'ử', 'ự'] },
    'ữ': { siblings: [], tones: ['ư', 'ứ', 'ừ', 'ữ', 'ử', 'ự'] },
    'ử': { siblings: [], tones: ['ư', 'ứ', 'ừ', 'ữ', 'ử', 'ự'] },
    'ự': { siblings: [], tones: ['ư', 'ứ', 'ừ', 'ữ', 'ử', 'ự'] },
    'y': { siblings: [], tones: ['y', 'ý', 'ỳ', 'ỹ', 'ỷ', 'ỵ'] },
    'ý': { siblings: [], tones: ['y', 'ý', 'ỳ', 'ỹ', 'ỷ', 'ỵ'] },
    'ỳ': { siblings: [], tones: ['y', 'ý', 'ỳ', 'ỹ', 'ỷ', 'ỵ'] },
    'ỹ': { siblings: [], tones: ['y', 'ý', 'ỳ', 'ỹ', 'ỷ', 'ỵ'] },
    'ỷ': { siblings: [], tones: ['y', 'ý', 'ỳ', 'ỹ', 'ỷ', 'ỵ'] },
    'ỵ': { siblings: [], tones: ['y', 'ý', 'ỳ', 'ỹ', 'ỷ', 'ỵ'] },
    'A': { siblings: [], tones: ['A', 'Á', 'À', 'Ã', 'Ả', 'Ạ'] },
    'Á': { siblings: [], tones: ['A', 'Á', 'À', 'Ã', 'Ả', 'Ạ'] },
    'À': { siblings: [], tones: ['A', 'Á', 'À', 'Ã', 'Ả', 'Ạ'] },
    'Ã': { siblings: [], tones: ['A', 'Á', 'À', 'Ã', 'Ả', 'Ạ'] },
    'Ả': { siblings: [], tones: ['A', 'Á', 'À', 'Ã', 'Ả', 'Ạ'] },
    'Ạ': { siblings: [], tones: ['A', 'Á', 'À', 'Ã', 'Ả', 'Ạ'] },
    'Ă': { siblings: [], tones: ['Ă', 'Ắ', 'Ằ', 'Ẵ', 'Ẳ', 'Ặ'] },
    'Ắ': { siblings: [], tones: ['Ă', 'Ắ', 'Ằ', 'Ẵ', 'Ẳ', 'Ặ'] },
    'Ằ': { siblings: [], tones: ['Ă', 'Ắ', 'Ằ', 'Ẵ', 'Ẳ', 'Ặ'] },
    'Ẵ': { siblings: [], tones: ['Ă', 'Ắ', 'Ằ', 'Ẵ', 'Ẳ', 'Ặ'] },
    'Ẳ': { siblings: [], tones: ['Ă', 'Ắ', 'Ằ', 'Ẵ', 'Ẳ', 'Ặ'] },
    'Ặ': { siblings: [], tones: ['Ă', 'Ắ', 'Ằ', 'Ẵ', 'Ẳ', 'Ặ'] },
    'Â': { siblings: [], tones: ['Â', 'Ấ', 'Ầ', 'Ẫ', 'Ẩ', 'Ậ'] },
    'Ấ': { siblings: [], tones: ['Â', 'Ấ', 'Ầ', 'Ẫ', 'Ẩ', 'Ậ'] },
    'Ầ': { siblings: [], tones: ['Â', 'Ấ', 'Ầ', 'Ẫ', 'Ẩ', 'Ậ'] },
    'Ẫ': { siblings: [], tones: ['Â', 'Ấ', 'Ầ', 'Ẫ', 'Ẩ', 'Ậ'] },
    'Ẩ': { siblings: [], tones: ['Â', 'Ấ', 'Ầ', 'Ẫ', 'Ẩ', 'Ậ'] },
    'Ậ': { siblings: [], tones: ['Â', 'Ấ', 'Ầ', 'Ẫ', 'Ẩ', 'Ậ'] },
    'E': { siblings: [], tones: ['E', 'É', 'È', 'Ẽ', 'Ẻ', 'Ẹ'] },
    'É': { siblings: [], tones: ['E', 'É', 'È', 'Ẽ', 'Ẻ', 'Ẹ'] },
    'È': { siblings: [], tones: ['E', 'É', 'È', 'Ẽ', 'Ẻ', 'Ẹ'] },
    'Ẽ': { siblings: [], tones: ['E', 'É', 'È', 'Ẽ', 'Ẻ', 'Ẹ'] },
    'Ẻ': { siblings: [], tones: ['E', 'É', 'È', 'Ẽ', 'Ẻ', 'Ẹ'] },
    'Ẹ': { siblings: [], tones: ['E', 'É', 'È', 'Ẽ', 'Ẻ', 'Ẹ'] },
    'Ê': { siblings: [], tones: ['Ê', 'Ế', 'Ề', 'Ễ', 'Ể', 'Ệ'] },
    'Ế': { siblings: [], tones: ['Ê', 'Ế', 'Ề', 'Ễ', 'Ể', 'Ệ'] },
    'Ề': { siblings: [], tones: ['Ê', 'Ế', 'Ề', 'Ễ', 'Ể', 'Ệ'] },
    'Ễ': { siblings: [], tones: ['Ê', 'Ế', 'Ề', 'Ễ', 'Ể', 'Ệ'] },
    'Ể': { siblings: [], tones: ['Ê', 'Ế', 'Ề', 'Ễ', 'Ể', 'Ệ'] },
    'Ệ': { siblings: [], tones: ['Ê', 'Ế', 'Ề', 'Ễ', 'Ể', 'Ệ'] },
    'I': { siblings: [], tones: ['I', 'Í', 'Ì', 'Ĩ', 'Ỉ', 'Ị'] },
    'Í': { siblings: [], tones: ['I', 'Í', 'Ì', 'Ĩ', 'Ỉ', 'Ị'] },
    'Ì': { siblings: [], tones: ['I', 'Í', 'Ì', 'Ĩ', 'Ỉ', 'Ị'] },
    'Ĩ': { siblings: [], tones: ['I', 'Í', 'Ì', 'Ĩ', 'Ỉ', 'Ị'] },
    'Ỉ': { siblings: [], tones: ['I', 'Í', 'Ì', 'Ĩ', 'Ỉ', 'Ị'] },
    'Ị': { siblings: [], tones: ['I', 'Í', 'Ì', 'Ĩ', 'Ỉ', 'Ị'] },
    'O': { siblings: [], tones: ['O', 'Ó', 'Ò', 'Õ', 'Ỏ', 'Ọ'] },
    'Ó': { siblings: [], tones: ['O', 'Ó', 'Ò', 'Õ', 'Ỏ', 'Ọ'] },
    'Ò': { siblings: [], tones: ['O', 'Ó', 'Ò', 'Õ', 'Ỏ', 'Ọ'] },
    'Õ': { siblings: [], tones: ['O', 'Ó', 'Ò', 'Õ', 'Ỏ', 'Ọ'] },
    'Ỏ': { siblings: [], tones: ['O', 'Ó', 'Ò', 'Õ', 'Ỏ', 'Ọ'] },
    'Ọ': { siblings: [], tones: ['O', 'Ó', 'Ò', 'Õ', 'Ỏ', 'Ọ'] },
    'Ô': { siblings: [], tones: ['Ô', 'Ố', 'Ồ', 'Ỗ', 'Ổ', 'Ộ'] },
    'Ố': { siblings: [], tones: ['Ô', 'Ố', 'Ồ', 'Ỗ', 'Ổ', 'Ộ'] },
    'Ồ': { siblings: [], tones: ['Ô', 'Ố', 'Ồ', 'Ỗ', 'Ổ', 'Ộ'] },
    'Ỗ': { siblings: [], tones: ['Ô', 'Ố', 'Ồ', 'Ỗ', 'Ổ', 'Ộ'] },
    'Ổ': { siblings: [], tones: ['Ô', 'Ố', 'Ồ', 'Ỗ', 'Ổ', 'Ộ'] },
    'Ộ': { siblings: [], tones: ['Ô', 'Ố', 'Ồ', 'Ỗ', 'Ổ', 'Ộ'] },
    'Ơ': { siblings: [], tones: ['Ơ', 'Ớ', 'Ờ', 'Ỡ', 'Ở', 'Ợ'] },
    'Ớ': { siblings: [], tones: ['Ơ', 'Ớ', 'Ờ', 'Ỡ', 'Ở', 'Ợ'] },
    'Ờ': { siblings: [], tones: ['Ơ', 'Ớ', 'Ờ', 'Ỡ', 'Ở', 'Ợ'] },
    'Ỡ': { siblings: [], tones: ['Ơ', 'Ớ', 'Ờ', 'Ỡ', 'Ở', 'Ợ'] },
    'Ở': { siblings: [], tones: ['Ơ', 'Ớ', 'Ờ', 'Ỡ', 'Ở', 'Ợ'] },
    'Ợ': { siblings: [], tones: ['Ơ', 'Ớ', 'Ờ', 'Ỡ', 'Ở', 'Ợ'] },
    'U': { siblings: [], tones: ['U', 'Ú', 'Ù', 'Ũ', 'Ủ', 'Ụ'] },
    'Ú': { siblings: [], tones: ['U', 'Ú', 'Ù', 'Ũ', 'Ủ', 'Ụ'] },
    'Ù': { siblings: [], tones: ['U', 'Ú', 'Ù', 'Ũ', 'Ủ', 'Ụ'] },
    'Ũ': { siblings: [], tones: ['U', 'Ú', 'Ù', 'Ũ', 'Ủ', 'Ụ'] },
    'Ủ': { siblings: [], tones: ['U', 'Ú', 'Ù', 'Ũ', 'Ủ', 'Ụ'] },
    'Ụ': { siblings: [], tones: ['U', 'Ú', 'Ù', 'Ũ', 'Ủ', 'Ụ'] },
    'Ư': { siblings: [], tones: ['Ư', 'Ứ', 'Ừ', 'Ữ', 'Ử', 'Ự'] },
    'Ứ': { siblings: [], tones: ['Ư', 'Ứ', 'Ừ', 'Ữ', 'Ử', 'Ự'] },
    'Ừ': { siblings: [], tones: ['Ư', 'Ứ', 'Ừ', 'Ữ', 'Ử', 'Ự'] },
    'Ữ': { siblings: [], tones: ['Ư', 'Ứ', 'Ừ', 'Ữ', 'Ử', 'Ự'] },
    'Ử': { siblings: [], tones: ['Ư', 'Ứ', 'Ừ', 'Ữ', 'Ử', 'Ự'] },
    'Ự': { siblings: [], tones: ['Ư', 'Ứ', 'Ừ', 'Ữ', 'Ử', 'Ự'] },
    'Y': { siblings: [], tones: ['Y', 'Ý', 'Ỳ', 'Ỹ', 'Ỷ', 'Ỵ'] },
    'Ý': { siblings: [], tones: ['Y', 'Ý', 'Ỳ', 'Ỹ', 'Ỷ', 'Ỵ'] },
    'Ỳ': { siblings: [], tones: ['Y', 'Ý', 'Ỳ', 'Ỹ', 'Ỷ', 'Ỵ'] },
    'Ỹ': { siblings: [], tones: ['Y', 'Ý', 'Ỳ', 'Ỹ', 'Ỷ', 'Ỵ'] },
    'Ỷ': { siblings: [], tones: ['Y', 'Ý', 'Ỳ', 'Ỹ', 'Ỷ', 'Ỵ'] },
    'Ỵ': { siblings: [], tones: ['Y', 'Ý', 'Ỳ', 'Ỹ', 'Ỷ', 'Ỵ'] },
    'd': { siblings: ['d', 'đ'], tones: [] },
    'đ': { siblings: ['d', 'đ'], tones: [] },
    'D': { siblings: ['D', 'Đ'], tones: [] },
    'Đ': { siblings: ['D', 'Đ'], tones: [] }
};

const lowerString = "aáàãảạăắằẵẳặâấầẫẩậeéèẽẻẹêếềễểệiíìĩỉịoóòõỏọôốồỗổộơớờỡởợuúùũủụưứừữửựyýỳỹỷỵ";
const upperArray = [...lowerString];

const upperString = "AÁÀÃẢẠĂẮẰẴẲẶÂẤẦẪẨẬEÉÈẼẺẸÊẾỀỄỂỆIÍÌĨỈỊOÓÒÕỎỌÔỐỒỖỔỘƠỚỜỠỞỢUÚÙŨỦỤƯỨỪỮỬỰYÝỲỸỶỴ";
const lowerArray = [...upperString];

const medialObj = {};

upperArray.forEach((char, index, arr) => {

    let startIndex = Math.floor(index / 6) * 6;
    let endIndex = startIndex + 5;
    let tonesArray = arr.slice(startIndex, endIndex + 1);
    medialObj[char] = { siblings: [], tones: [...tonesArray] }
});

lowerArray.forEach((char, index, arr) => {

    let startIndex = Math.floor(index / 6) * 6;
    let endIndex = startIndex + 5;
    let tonesArray = arr.slice(startIndex, endIndex + 1);
    medialObj[char] = { siblings: [], tones: [...tonesArray] }
});


console.log(medialObj);




