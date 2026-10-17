外链999!wailian999！

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163dhbwmsvd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163hluhagfc.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163gyjbebic.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zjzrmuvp.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163rgeivoum.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163vwciproo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163uuowlswt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zedbigvp.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163lhrujcji.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163adwtxlvi.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163sjzaygxc.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163fjgrvlvq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ttvazroi.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163lbgtfhir.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163mrzskhkb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163unslpyqk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163iavwjcvl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163xowqtnbo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163hvvabjlt.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163jrmvfvhu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163eydxxlmc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ixeanthr.html

[I04] 正则替换
来源：http://www.sxryk.cn/163naiccdwg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163mmjmvjgt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ivcqctbo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163oweubjrr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163pqgwmbyp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163odzsactr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163rxepfrzm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163yycnmory.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163cfdimdmd.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163rkubddlf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163oncorcmd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163nhlyczdg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tviqatyo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163oclmkuxl.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163rphlaprd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163jrqprdng.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gefkzcpo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163nrqibolw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163liwuugex.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163yrbacwgn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ycmlcaud.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163irdzkmnk.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dqyuscsi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163vdmedzac.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163hlpxcerw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163akdfceww.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163txezzapt.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163efocejnr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163omzsactf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163grgiouiz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163sswkmzcz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163jzheebbm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163imssknzn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163miktqwnt.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163pepedzlw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163jfqgdrho.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163jcgpkpoc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163njusdwut.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163klsejqdk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163etqnombj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vwhgtzgb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163tkxfwtyq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163hxjhmemi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163kiiyfakj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163vbentznv.html

================================================================================
来源：http://www.sxryk.cn/163mgngregm.html

J. 日期与时间
来源：http://www.aibaodan.cn/163soidccwt.html

================================================================================
来源：http://www.xuanzx.com/163myuydqzz.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163kzhjwicr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163qacgitbi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163nqmpqnpe.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ysmpoury.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vckqblcm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163mlwwvbhu.html

Go:   time.Now()
来源：http://www.sxryk.cn/163esrtujie.html

Ruby: Time.now
来源：http://www.sxryk.cn/163gfwqfkdx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163tbjtoezl.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163vazfdfks.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rdfmzufz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163quecmwyc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163fowmijkv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163xmihlvoo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ioxvvkmd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163nztzrnni.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vyvvfozc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163hskcoaxl.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163nxfiuzuu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163todyaoge.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163uuhdjnci.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tsktrilg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vxtvpcqd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bskztsnc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163mzrkbdzm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163bviyqbwn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163xiljflcn.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163hmxlivtt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nbffwivu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163uwjntbyd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163rtwyzsat.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163vncpibai.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163jkgzymkb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163hkborkjv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163qvgkhebz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163syycfmkx.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163mszhhnvn.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163slemgcaf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163uctewenl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rjtwwuoc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vccazzlw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163yelzmexj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163kskkumcr.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163hvemlkzu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163zulberoa.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163wiiygrrg.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163allbpntv.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163kemasxau.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163dmwjjimt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163polmvmdj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163vobdnirq.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163jezwhnfx.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163qyfdgmel.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163exfvhjuz.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163dbmebyly.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mdxicjar.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163zbexkqaw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wwpmdsyf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hqovrbte.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163oeoqyszl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163sndthwee.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163aiqdsoab.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gpjoxhkc.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163wzbaacap.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163edieuexs.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lwbpfkei.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163qczmdaep.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163xrvnmdkg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ogqivlzy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163sadtabed.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163fuqhwtrp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163gefhrpht.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qceqfsyc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163rqxugqya.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163pyckzyzf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163sidchziu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163pbkfgilg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ccdprxdn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163kcujvgdr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163lcoslkfi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163efsfaqgl.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163iimhjdnn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ghrnyukq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163cnopghlq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163hzljfqnf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163gswkxyhq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163miczyzfl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163dcgnochq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163kyeztxca.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163qlwhiqgr.html

================================================================================
来源：http://www.xuanzx.com/163haykwfdy.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163muswegks.html

================================================================================
来源：http://www.xuanzx.com/163jrbabujq.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163pqycckiq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163upmzrhcx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hznnzves.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jsxcwqld.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zkzphykz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163psicykvw.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163sdoglbnq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ybbxxdti.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163envzvbgt.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xfvyxbiv.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163nfqglnmt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163egjbcwhy.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163akloddwh.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wywltaph.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ruhuymeq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nmxhjiza.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163iwinnbag.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163guzawesj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163bphyxhlo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ubvcfuzt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163pyxczhgt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163phwoaemt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fqnemszy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ihmmochi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163cgtllizs.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163khiowbly.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163cmtscuhs.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ykunlhiu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163quslvfdh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163xievpqiv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wfribjxe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qsscxvqc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ncfqwupy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ltlpoosl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163gwvhrecv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163taoniabo.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163rbgzceii.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163eurlkacr.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163gkhexfjk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163oyifnjvw.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163bqsxjmog.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163rykgotql.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163bggfzceo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163znmfhyvj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163utpadjah.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163uaifeern.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163vczzxizi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163hapfsrpv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qvvliukz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xvgrzfqu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163hfgrpjhi.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163qwkwgcty.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163uwfgwzxs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163xayicfwu.html

[K07] 进制转换
来源：http://www.xuanzx.com/163sjmlpxic.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163cjukwtjt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163jmezhfig.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fqdjopww.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163tdgtkesg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nruqwlwx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163issbosel.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163qedrkidi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163suvhjjeh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163kuludejo.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163hwpaaksb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ouwwubew.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mblaooia.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163biuflxgc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163fdyvtmjr.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163wicwmdpx.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163lbrmyihg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163scbhospe.html

================================================================================
来源：http://www.xuanzx.com/163mljbdpfb.html

L. 网络请求
来源：http://www.aibaodan.cn/163toxdgssc.html

================================================================================
来源：http://www.aibaodan.cn/163rdztlaot.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163enmyeawc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163iovlqsqg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163yblxrfjf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163tvvvufsj.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163eumdihkm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163xnhupwwv.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163hscpqtbo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163hhcqhzxe.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163wwvubtcj.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163uqotzndj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ibkvmizi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163hhajhyqc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gzywabyh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163idnaawia.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163eytsjnnl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163dsshsakz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163qbimhqee.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163tadwdjpc.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163iyvslcto.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163khpmmsvq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163cciqxrqh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bgqelazh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163tvhmzghr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163khbthwwd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163izbsbkrl.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163tpxikafn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163kfjcccpg.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kqijuucv.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163tggsthrb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163etoscohi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xglsbduw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ntrzuncj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163qhntlnnc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163wfwmzlkk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hpoqehah.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163aammwiba.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163wllrttir.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163bftlgmzq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163xrcgcdmx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wzldpchn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ydfroeoj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163oydlmido.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163zuhxfons.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kycydcqa.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163pkcgsddz.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163jsxextnl.html

Py:   resp.json()
来源：http://www.sxryk.cn/163rbtnxaqh.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163pomrmxog.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163timcuuxw.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ffkbrztd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163dpnluokk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163vtybvhoe.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ugjwbbbj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163bqsjdjtk.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163qlrydtwk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163wqqiohbs.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163fxuayzvz.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xiarhjae.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wnmjzqgo.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163kkesaaxj.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163woekpaom.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163jnymanzi.html


<!-- 参考信息 -->