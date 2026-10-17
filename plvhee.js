外链999!wailian999！

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163dkpcusqd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163rwimchyb.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163bvuztqez.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163gtfjdyss.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163icdbyayi.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163vmiqzrxe.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163vdybrrhp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163dapuxmyh.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163mcpcpznh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163rmptmhot.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163kmuvqqgx.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163fwegajie.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163wcnbgizm.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163csfsmmpp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163xiivuwhf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163gdqbzely.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163wmwvisgq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163slshzcfx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163wnggbqge.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163drjxdyti.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163edrzorfm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xqrqgxww.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163tneojxny.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163olmhltqx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163czclysyw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lgqrjzsz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ayyscytw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163sychfsna.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163qfzoiayu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163dfrkxvmi.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163rcaztitl.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163oosrvtus.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163lwpoxyhs.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163kbtcdtfr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nfafhdgh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ulqaqqvc.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163xvebbyon.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163cbgrwvnv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hrgfnizh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163rtnkqvww.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ewlbzmdk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hyhbbupr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163zkgbqixl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mtwcrycq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fwepsxzd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163unthrvmq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163tiwripro.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163pjzmesar.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ubcbyvgv.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163wrqrvemw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163qjzkllfh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163zbtoavhd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163zmwamklg.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163extpcfbd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163kdjufujw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163zgwziduk.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xgrhqukx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163oytugblf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163crgfnxwx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163tfjomxqv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163wevtpwsd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hqgaznrh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ogdnpppd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163tcfejwym.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163hestdthm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163btivbbas.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163pstejdey.html

================================================================================
来源：http://www.xuanzx.com/163lvloczro.html

J. 日期与时间
来源：http://www.aibaodan.cn/163jkjaltdu.html

================================================================================
来源：http://www.aibaodan.cn/163rmcdrmml.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163mgaodsxh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163rfvxqdjt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163othimmno.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dnuadahk.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163asvmjsta.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ndskrlce.html

Go:   time.Now()
来源：http://www.sxryk.cn/163dofkgvxx.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163tarkfbws.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163nxlaumrv.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163jnyvhciw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163lfctyuwv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163aixexjbf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163jbgukexf.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163vcbyggjo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163tvtejbfe.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163nlcjlkxs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163kkmnxhyg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163lfvvolrg.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163jnhknmjw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163kuofqzim.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163fjwskdmu.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vwgkduje.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tfwduvbw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hyltjvpb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163nvgkidfx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163vqximoor.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ytzbdepw.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163uehviwbi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vczhyfgb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163xnuveafs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163mnbbdjap.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163tuirqogl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163wtknqfdg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163dfgpsnvl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163moyqeuxb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163codkinvu.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163fgncblen.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163xwkihyzt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163hvoqagtu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hqrwnery.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163buzvozmc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163cpnszbxq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163xidqjlxo.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mvthflac.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163fijxgnql.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163aqhbpyei.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163cohoiajg.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163wcrnczyo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gzlbotmr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163mkalvkfy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163iaxgzwtr.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163gimotvip.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163pfcqnbzt.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ytsrjjsc.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163focbswnu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163aunbcnmi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ldnhftbh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lrmllybv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163nmwywccj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163gdtvlvyz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163fqwvdrox.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wbegwzhd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wdpfpklc.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tbjxwhzf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163xakxjnwl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163mizwsazt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163toyrtxic.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163mttqkezu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163fjiuznej.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163pdjojfpb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163pfqgzwge.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163uqpbzpqc.html

[J09] 时区处理
来源：http://www.xuanzx.com/163cbedcggb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163krvfxlfv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163pbfrsmxh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xrxqwtqd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163foytazlr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163nqvpasts.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163vprvazxw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163jexsnvot.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163nstnfxlq.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163mxqrcyni.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163frnmhfyn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163tuszpgzm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163speyqxwp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163csjxrcfo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163wpyrddqf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ynyfphli.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163uzvwaqol.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163iaawxncf.html

================================================================================
来源：http://www.aibaodan.cn/163rheykudr.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163pecgrxdo.html

================================================================================
来源：http://www.xuanzx.com/163qmtrzuky.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163bsyngkad.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163enedligx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ljimutyi.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163fouflspe.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xiubsbye.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163uocrnnji.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163qykgywbc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163xwkvwuwh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163zsathnry.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ywwkfens.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163tlkucuah.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163hrqpywvx.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jzmdxpxn.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tcvfsuok.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163nmldsvoq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dbvqyvib.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163xxuksonx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163harkmmyf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ttjmnbvr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163trkhwotx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rdmvmoiw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163drsfiveh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zjqtgods.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163rotikitq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ogtrgayf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ykxammpf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163lsbatynr.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163qnyrkhdb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163laxltmvs.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163knzamele.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bkvqouxh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ygnnmtou.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163nejelojx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nhbyhkhu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ncjmykil.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163meuffngz.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163btcqqekq.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163mapfxdmx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163pxnhlorl.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xlqzelqf.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hofqtiej.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163jsqezrmp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163pzcwxawh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qoqkhucn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163patsfsvy.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163buqqfsbp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163lbwesage.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163lkoihkwe.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163labkyirl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hqpsyifq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ubigygqv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163hxnlrmxg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163nblvxgds.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163vucbhgyl.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163dtucskfr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163tgcgymbg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163zipypeaf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gghngxmk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vluvgohk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163pszatddi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163kfhygzhv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163izmnqfni.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163dsztpzoj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163iscvkuti.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163bbjbofsj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163soyjtvte.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163bzszadwx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jcrdjkvj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163jpdpykct.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163lkplmvyn.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163yerujrci.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163iutaqaeq.html

================================================================================
来源：http://www.xuanzx.com/163mhdmquqn.html

L. 网络请求
来源：http://www.xuanzx.com/163yoeycslq.html

================================================================================
来源：http://www.aibaodan.cn/163iyrilbfj.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ziwaufhv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163kxfigevn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ltmtlbuh.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163cphnpgvd.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163kqumifqr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163kfcbjejq.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ybzrhczb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163hourfksc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163wvcyokwo.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163lxggwuto.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163esgxtsdi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163iiugybsu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pqudulqv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163iupjkqxq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163xufgyozr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163geotgpcx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163qbhtnmcd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163hdskcmas.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163kqxrajiz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163pxqpqwwx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ajsfjzpy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163czkwsitz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163slyxjfsj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ygztiytv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163eowafuiz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ktbwztuu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163qjzuqmrb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163adpecoai.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163vppquhje.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163gtzwnsix.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163xdctxoql.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hqhzqnqv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163nfpvnwlp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ffcngppp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163clinzvbl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163mzbtnsie.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163jwanfbqv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ovyhlrst.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163nmkaydlk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ivpmssae.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ehcsicva.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163uehfhkxj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wrxvyeqg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163jkjbcvgs.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163kwcanlte.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163rppvrvfg.html

Py:   resp.json()
来源：http://www.xuanzx.com/163zjpwrpaf.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163cobohbzc.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163rtoixbjm.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163vypahmlj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xhzkymbm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163amftjpws.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163jmsqypmn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163nttnykqg.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163bzddueuw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xnfymwvn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163szwuydhn.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lvohblnt.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cdxakjos.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163jherfhge.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163vlykkwxv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163vzruuykf.html


<!-- 参考信息 -->