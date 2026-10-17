外链999!wailian999！

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163qzsuowbe.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163yjyubsyi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163rghxjgyo.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ltqsscmg.html

================================================================================
来源：http://www.xuanzx.com/163yblqnfhr.html

I. 正则表达式
来源：http://www.sxryk.cn/163iwelffjv.html

================================================================================
来源：http://www.xuanzx.com/163oihrpffa.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163bxxbotaq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163wimiwzzm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163dsgeipqr.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nuffojly.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163abampmhm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163wwmupqhh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163rusntfxf.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ccmpelba.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163mamwrfoh.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163flzvhrhm.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163nwjausth.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163cknuxgzj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ypejzoiy.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163anyciegd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163fcwpcecn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163jwncjrtr.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hirxasqm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ftjjawhl.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163lawifrsc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163bycrxjor.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163wlvinaco.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163teobuabo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163bogzozsk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163tjntylbk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163cbdzhrao.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163hcdzmtrd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163urmreojw.html

[I04] 正则替换
来源：http://www.xuanzx.com/163smgpshqi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163oqbajawm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163hyjerbzj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163slmzutdk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kvuwhwmo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163tzxvrzta.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ageperlb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163xssszkjp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ognacaox.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ocylddzw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ivifumgg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163fzlwtuqa.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163upfxtkzf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uddqzahl.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163gmdvifxg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163xuuqcnkh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ktlrbmyp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163zlpkqpir.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163yxnxxnyr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bxpqlysa.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163zvmhzclp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jaebmfbj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xartzdya.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163zouilerh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163qcodhmap.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163hecoqvrf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163iytgninv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163crlpkrcu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bzlezuja.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163lejslvpj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163fukndfac.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ezqdzrge.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163bcqqqlnm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163nyejuavs.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163hpxukfcu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163jlhgvusv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163cjvoqegl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163febvfkue.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163idzgixth.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bgkmzyvr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bwgvoaza.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163oeszyvan.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163odpreyiy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163egdyxeoc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163vkfyrewp.html

================================================================================
来源：http://www.sxryk.cn/163utfwdqep.html

J. 日期与时间
来源：http://www.aibaodan.cn/163flpokolh.html

================================================================================
来源：http://www.sxryk.cn/163jfvkzylm.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163otgmvdjf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163prorcxjc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163yroakqeq.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tbjitilp.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mvwbbezm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163csrtacni.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ebpkgcib.html

Ruby: Time.now
来源：http://www.xuanzx.com/163hjgywfbn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163azyptfgh.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163jgqsxccj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ahbajrbz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ltxfjmxw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163utcharqp.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163anqlzjto.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163idjngdzi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163kpuavdnv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rsgpgqja.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163afhxgtxo.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163rjxchgvb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163xhlyjbvu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163zetqxocl.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bptieoel.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163oywddnnt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163rglmjiyd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163stymzkur.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163lozjgplr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163cjmkyyyf.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163flauwpvp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163cnzvxurs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163xwbqwqkr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163axeugaia.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163kncfljpa.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163pwljkptj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163stprcfmo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163bebpuheo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163hrozokml.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163njkubkcr.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163zmzjvwfp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163dwxmzchu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163cplcqjde.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wmhrvnle.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163gejffjpk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ukyapohy.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163znfzgxgy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163cznepigy.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163sirdnyun.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163vtyncnxd.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ejiratfz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163enalfrpq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163kcaxdfut.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163mzbzboai.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163uyagiybg.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163cwhlslbi.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ochwddkq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163btsrptrr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bujvxyxw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163cnlzsyvf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163awmaizda.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163opgvpugq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163fifsoflq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163enaqdsfa.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bipkpxqv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yruqusmx.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ncsukdkl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163hvxksdrn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163iejwqmjc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163sycoirak.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ksbhlfgz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163rgjlhrzj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ooodigqp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163jxjnohvf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163uavtotjo.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163sewapkti.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163dlmekmxa.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163zvayikrm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vjelypib.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tldgpscj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163szglqtel.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163xchjmrle.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163uhysgnsq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163bifbdtww.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163hdnxghlm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163bbsjfjif.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163pkuwbjbq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163gtpigmpv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163qudlbwch.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163zbrnvkhx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163dcbapces.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ieurevpl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163mmbghwbc.html

================================================================================
来源：http://www.xuanzx.com/163hffirfeh.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163poglxhot.html

================================================================================
来源：http://www.sxryk.cn/163jiajqjhi.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163mcflllaq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163leiudqai.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lilfabou.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163awgvybxp.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rleglvow.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163xgkckzcp.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163xxmocmeb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163bezdjnca.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163mnulaoli.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163uplbzvyp.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163lossgiwa.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163sunklgut.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kuoexnox.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lgldxlcw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163vodzwqod.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163isdgudil.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ctxckonj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163pegilogx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ybapfdch.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163qmbowfqj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hewcvrgh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rmbstbzy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xfwtganq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163plizwgee.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ptcyzhvu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163itafyveq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163pbifsqzg.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163fdlybssx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xpcpxmnx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xhqsgakz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163szwrpgne.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qqvtcelj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163tyhtxkdb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163klukuvyp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xfopszie.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163xlbgikjp.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163zljjazsl.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163jryodamh.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163nebhkloc.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163cihllutm.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163tdmbzafo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ulfyeold.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163wkvurzvp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163lfihistc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163rrmutzyc.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163uwjcbbkx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163rgfwmnms.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163bchtoimp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163isfotoox.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wqasayqd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163khpxbrrt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163fzouciyd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ummowggr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163tasobdvz.html

[K07] 进制转换
来源：http://www.sxryk.cn/163rikgyccz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163moyolwgv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163bfnxqgli.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dpbowofb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ofnxqdba.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nfhbkbqv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163zrzgvoje.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ylmrvlsb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ngfsxvbr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163dkpudqvb.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ffphdzdg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163nmugqgsr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163aoypuhlo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163lmmwjtai.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163muxbkcyj.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163uldnlypn.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163hpzbjjvv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163cjzpnmiq.html

================================================================================
来源：http://www.sxryk.cn/163kzcmlzcu.html

L. 网络请求
来源：http://www.xuanzx.com/163imiqmmxu.html

================================================================================
来源：http://www.aibaodan.cn/163beniomux.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163fqatgtvs.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163nougnbgj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163vnjisayo.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163vxzashvm.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163sitfgejg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lkojltqk.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163mlojesur.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vtadrnzt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163jsozdxzb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ayasoilw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163keiwspon.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163shylksmw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dlkfbwyh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bzlqmntm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163pqkhvftm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163vfllimsu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163dxnikvkl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163gyprnpqz.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163yrtlezav.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163gksmlqyl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163neuvzxhp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163aupvmdfa.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lpcjhkqe.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163tujqiykd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163mvzpjqrv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ubjxrnes.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163gcpvhgjh.html

[L04] 设置超时
来源：http://www.sxryk.cn/163rhwvqatt.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163vnyrpcva.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163cjygcrei.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hsapsmgq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qncutpqc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163gnmfqsja.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163xzqmnmcj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163xwvbkvwc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ffndmxqp.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163afjpvzbx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163zssiatzi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163qlfnwyyx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bieaifid.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tonzdmaq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163vqswykqd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163zlwmlziw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163bjmqjssy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163kyqvlhws.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163wokvchvn.html

Py:   resp.json()
来源：http://www.sxryk.cn/163yskqatxt.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jqokhpig.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163hydjirmc.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163jfcypiif.html


<!-- 参考信息 -->