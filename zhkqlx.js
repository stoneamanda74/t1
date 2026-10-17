外链999!wailian999！

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163gyslhuig.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163hetakbtw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163fmkaqwyq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163acnqjuyb.html

================================================================================
来源：http://www.aibaodan.cn/163mriyyxtx.html

I. 正则表达式
来源：http://www.xuanzx.com/163udhcxcvu.html

================================================================================
来源：http://www.sxryk.cn/163njlpxfud.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163vxdqzvtw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163pccnvcfn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163wineatnv.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163loxuwplz.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hhqwyxfb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163wilzmavd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163aftdorbj.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xgidqkfe.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163xiflwdjm.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163boodzjyr.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163dydeunyd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vwtompes.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163flibdphn.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163cavtqygf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163sjqopnyg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163mmhfjovf.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163nyiukgln.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163mqmtozuj.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ljuojtcw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163bvxegmje.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163myrviylz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163riipgpoc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163fvkgleqt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ojcdqayw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163athsfhjx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163jwcufhdo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163satxeiqv.html

[I04] 正则替换
来源：http://www.sxryk.cn/163vipydhcp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163mfwqbyde.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163jyaciefr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hdapipky.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163huxmpwrs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163mrsecpmn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163cvklpgqm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163qrswrhub.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jqnpigvg.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163mfealwsn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163nzpnmqma.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163rwrzkgel.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fyospiqa.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kyqengda.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163heflxuyw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163oiffjpxn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163somonlcl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163pmaujmse.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ykfdyjwv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xeyhasie.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163nbigsdgb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hijxkcpi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vsglqryf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163vkhwhxrh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163cfdmcovn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163zvhuffiv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qntywjna.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163fhmgokpx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163cxqyoihp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163fnypewix.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163xqfdihee.html

TS:   /error/gim
来源：http://www.sxryk.cn/163lemtprxy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163kstnjyfq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163zajbaatt.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163nnrhukku.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163nqfbejhg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163wysgtxab.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163vqgfuytm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163iccapcoc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ehcgylqu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dpgoryfw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zbnysxkf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163mnvuytpi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163cmkdfrxh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163okogigaf.html

================================================================================
来源：http://www.xuanzx.com/163tuzbikny.html

J. 日期与时间
来源：http://www.sxryk.cn/163dswttfdb.html

================================================================================
来源：http://www.aibaodan.cn/163uxlfrzud.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163lipyyjxb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163eplftrss.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mxyftzcj.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163veexihrz.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fcdctbqg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163esgfbnvm.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163yzhhxzgv.html

Ruby: Time.now
来源：http://www.sxryk.cn/163knabbdmk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163tnhqdkyl.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163yusifktu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wigksnvd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163yyjzxydp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163swgwqqgb.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163itchytdi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ljveesih.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163mxeeovhf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163cpnplzjr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163wubjykiz.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163gbsqlsmh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163gfuuvbzz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163qdgdmmfm.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163chxzjpsh.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qsvumbee.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163dnksmsui.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ejshwdsr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ugcdqjwk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163vdpatodb.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163gwlfrwwa.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xelidnxe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163dlbylbmk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xrxczcdn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163zfvibttr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163enughxaw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163blmefpme.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163nadizwnh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163zqmymraq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163rwdkveml.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163rrqrvxuz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163nuavbsrx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zlpgffps.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163idkqorkz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163mprnvnoj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163zseplcaq.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163jaoqrral.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163euclxdva.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163nsjsapih.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163jfvjcsdj.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163lywcgjzi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163whgmonyv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163hgusqwop.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ziistcvn.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163vreksivq.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kamimkmn.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163wfqpwwqu.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163kjrerwai.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163demzxxei.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163jjscksxm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rqnpboei.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bkwtfpoi.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163chvhysbe.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163xmilfvup.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rinunfdw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163igazwkyo.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163rkonnhwm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ofwggcnj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163qeutafpd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163uaxxfgia.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163szgpdrtf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163zlxljrak.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ojtcawtm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163lcliekhq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163dhngicvh.html

[J09] 时区处理
来源：http://www.xuanzx.com/163bmnjeplg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163uhiyausv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163oqiiuvtr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fuophita.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bhkjmuyo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163zenbzjnt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163vbypwkqb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zppciazw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163cxxlylxe.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163enfprkdk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163zxwqrpyl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163gaqpfcvu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ylypuzuj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163dfqbvebv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163wijcaiwf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xowmvcle.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163zmymjaze.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163djfdttje.html

================================================================================
来源：http://www.xuanzx.com/163xvfghuat.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163zcmznfkw.html

================================================================================
来源：http://www.sxryk.cn/163nasgzvoe.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ljupqzfc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163swtkhqdw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cimimohy.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163buouviyp.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163sifxcqmz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163rxfcjdiy.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163gvdewegt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ighpmnww.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163libvfxdu.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163pceiqlma.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163qudydgqr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ftandiev.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163fjihdijm.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163arycdlos.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163gcunukqg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163imquedkf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163lvqlgnlg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163qhlnftal.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163meebmxkq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163viqmhzno.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dbdvmycr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lqksorhp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yxhiwteh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163fhqmthrh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ribuogss.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163wizxiofz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163snppfuqv.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163istlwrkl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163gwwqggxy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ofsmoazt.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ijfrrnde.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fcdprhdn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163hmwpwcwo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163myxprzfb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163pxviaodb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163luomwhtu.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163hioybulo.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ahketrjx.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163zryieimx.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163cxsmglpt.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163tkqnntmy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163uwvmvppc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163skwuqdkb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163vcbbqldb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vlbxtmbn.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xhqxueef.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163egdjggxb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163mqtsijvb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xjebysyk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dsjjjelm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163bacdgtbb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ombekyai.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163sautdxrg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163aeilkhyl.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bjmaistl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163njzwktjs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163jfmjrykd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cmksgwct.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163yhodxlna.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163xrxayoso.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163bjzxbgof.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163satqirxm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163prngvbpy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xqpfgyiz.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163apldlwor.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163isgmuyra.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163haomsjqb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ehrftlhl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163bbrcleec.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ooyiwuig.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163dlqecpny.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163typzloal.html

================================================================================
来源：http://www.aibaodan.cn/163obrlqhoq.html

L. 网络请求
来源：http://www.xuanzx.com/163enwotrmm.html

================================================================================
来源：http://www.sxryk.cn/163gmkwtawu.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163vnuqkuqe.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163dyqbqjpy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163gyrluozn.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163zdyhxgco.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163kakesjgd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163tbxjtpoo.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163jcnsfvjf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163nxpyebzm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163jqafygom.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163mzfjkqct.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163fepbewzx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ubjerill.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hkgfzfvt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163pegufofn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163acazmzkr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163xljhjqxa.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ilefroru.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xkyglabw.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163rvrlbcpe.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163jwpmevxz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163xdmvpupt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bxkgpkdb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163tfsflwyp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163wimlqnmf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ijkfmiuv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163jtkrfasm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163pmxrnzgf.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rvycxemt.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163dupizsah.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163zgtpizze.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fnsgdwmt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163zwrlfrjz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163rgpaiate.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163okuibdon.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163olyeelkf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163feqouodl.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163tvzalblf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ximzvaaw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163psvghoxr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163nciqxcdq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lqhdkseg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163kuzkmkkh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163oygbuthr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163aiwxxkuw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163boycwhtz.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163svfcsuvf.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ittxmgqz.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163wwqqkdrb.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163hqpvflhe.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163wlwhooxw.html


<!-- 参考信息 -->