外链999!wailian999！

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163vcrdmrgm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163nykgbuvg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163oaewhvqy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ifunzryd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163shzdmnke.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163jpgcttqo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163cczdfmin.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163nkyvvtrn.html

================================================================================
来源：http://www.sxryk.cn/163ufxktrni.html

I. 正则表达式
来源：http://www.xuanzx.com/163wjqvhwch.html

================================================================================
来源：http://www.sxryk.cn/163zroxmqze.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163hjhgjflh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ofjwhtil.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163oebnpxhd.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163byqofjka.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yzdmgfzz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163nbfckfsc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ovduhoie.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163hrtgkbep.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163kmbvasvq.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163befdybir.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163kmwqmwqg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163qfkwaxie.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163xsssbsng.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163mioqrrcv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163wxabmywp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163tmglcpyf.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163mfkmzvps.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ucqmpnnq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163lnbmaeeq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163nrugqwfx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163mrsewdrf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163hhnnjpyj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163jlbgizgi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163degxbpja.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163yybtxmlo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163abkqiyoe.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163wvumnrgs.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163dmrhicpo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163tfgddzjf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163gopdcvgf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zqohqxis.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163foziyvei.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163jfaotzjr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163paulytnb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163fosumutv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163moprocuq.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163jjmcllkg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163dvgzcfhw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163bqdqcdko.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rkmsxitr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163khczqdie.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163vrwezlwn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163xtnjpsdc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163iprrorhm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163zhnddobi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163qjcvummh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fmsibnyj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163pdgzgciz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163icrmcuwm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kopsvjqe.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163sdoctweg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163sjiuapou.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163tpxlxcsa.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gpjtongf.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163jwdgnvjq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163bzazqxoq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163dbmqzpzy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163akmfchfv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163vbudjrul.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163erbozeif.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163vnkurunc.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163gvblfjlj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163pjkdnevj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163vhdzizjl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163dxykwllk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163qsywaird.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hijouund.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vvrfjmsr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163qrzexndy.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163oqddukvv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163lruyuhyl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163sozztvtq.html

================================================================================
来源：http://www.xuanzx.com/163zofdsvoa.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ejmfddxt.html

================================================================================
来源：http://www.sxryk.cn/163ucjkrymq.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163oxkduiyx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163sdahmfed.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kicahtcg.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qlxhhfod.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163coxpahkq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163pfwlbhnd.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ssrkhumk.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163beietrrg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163xywherjq.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163oxcqgkao.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vegppcso.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mdqoxdwk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163mabnuiqr.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ulcnxuxb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163egkhjkek.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163qkzmpror.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wgonykkb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163urzqtefd.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ctgjxeyc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163seujsccj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163lnohcwgd.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163aushaxye.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163brwlaoys.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163bfhubowv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163kjctpems.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163uagrlgfs.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163xxaoboio.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hlkwbilh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163qthhhwbe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163kezjceqg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163pyfmuxsl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163dqwsmwnw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163tfmqeyps.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163bzxhbvkz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163lacekfsg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wqtwoayz.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163hsdjeyux.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163xndsiunz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163vxxfszdv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wicqsbmp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wkpdpibz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163enrftfnz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163utlrlrbk.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163rsdtvfpy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zfhzbccz.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163fsptfgtp.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163eqtxetbj.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163uabaxnaq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163aredfaad.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163nitcthte.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163spuzplqh.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163xjmmdagb.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163tegmqxfl.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163cxfcbkhs.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163xvcdojtp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hpxrpvlz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163kmfmpuvf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yuhihphx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kuywcqgt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163auknrjbr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163mayqwytn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163arqsiynn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163laqlcuqo.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163camtkcjk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163aythcfvx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163erosddxh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163hnzakauu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ncxhtbna.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163otznykos.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163nhbczkbm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163udcijddc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ufpusiwx.html

[J09] 时区处理
来源：http://www.sxryk.cn/163cfcllbso.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ksgvbktx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163izznrbar.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tgumrpfv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qbyruryk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163iwfhjuar.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163bwvwklxw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163jdjfrwob.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ktvjsxsc.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xiwfjazh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ygnkhcad.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163rzkxontm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163demuhwvl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163zouihyyz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163mnzwnlsb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163lxfdrsci.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163zqbhfvus.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163xwdxgjwr.html

================================================================================
来源：http://www.sxryk.cn/163omwtgefg.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163fqiustma.html

================================================================================
来源：http://www.xuanzx.com/163hwtutwzi.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163tqbuyhmj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163fxvwgkqo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kfpeqiwq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yqlpgzuo.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ifweykgg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163nmcmfwlm.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163dwschmjk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163hkzcyahq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163kepgnnpo.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163rsufmhvm.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163zjkkjvuf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163oozjgjkg.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dvibyozd.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hssomrpi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163xreixwju.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163smtqwmsr.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163chmhdteu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163fzwibqoq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163bssakbgw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163hdkefpwi.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163srrzgkdi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xckifuno.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163jgykemyu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163fuzonxti.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163zvsasahy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163prtbvkpg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ebiubmlt.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163zytlyzds.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ywmiuvhk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163loiqnyoc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cwvqgcrt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zeqafzfc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163kqzbzoug.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hpvwtjlh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ukqtemnp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163plvdvral.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ffkvcngg.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163sqanhhjz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163rjgzobxx.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dwbggmiv.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dqqzcnmc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163mrhjokqd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163dtbamxkq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163oyhmafcf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163hukzkwyj.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163cxnzmste.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ayzqemyr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jizyxbcl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gyjltxyw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163lsoxluha.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163mmexdqwq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163hvsfwaqb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163gbksnrna.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163spdfdtlb.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163sqtkypbw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163muapvmbh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163wzdhxjij.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rhnvlfay.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yixgwoji.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163nxabxyhj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163zcivsdgs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ktuzfkaq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ojmikkcj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ldotiqru.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163rcnskudx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163sitwjtxx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163trasldbb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163imqiavhq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163hldeazqj.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163spapurul.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163qozzcnzf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163fjycrxyd.html

================================================================================
来源：http://www.aibaodan.cn/163pvqxcuht.html

L. 网络请求
来源：http://www.sxryk.cn/163endyrhlh.html

================================================================================
来源：http://www.sxryk.cn/163qhcyiiuo.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ohcqbonp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163muvcxdcf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163yavmrhdn.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163vnlgasyv.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163abprjprf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163wcxbknjt.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163fczuvoic.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163eielbnex.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163wawnwrkn.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163pihotzit.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163gmvxujaw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163bfeyneds.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163raqrdzpr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fyqulqwn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ynkmicml.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xpcgwfua.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163tmgoymra.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163kxoxwagc.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163axyhfede.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163vtjwlocp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163rlybzvzv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163whdfoxeh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jfbxpjxe.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163eyofnuzu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ylwbgcvt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163vufkjuwk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163bsqolsbo.html

[L04] 设置超时
来源：http://www.sxryk.cn/163btmchckh.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163yfchzlwi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163kxkwaxmt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163obfnzxcs.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mabbrtfn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163kucfnnnf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163lhseagus.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163uxdfjitw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163mpcbyrtk.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163vvkandtw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163syghwgts.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163gjlwjnqj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163blzjrdtp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qufhcfcs.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163icpqkmnl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163bitxybgy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xxakzyst.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ckqrkxcr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163tzetynlt.html


<!-- 参考信息 -->