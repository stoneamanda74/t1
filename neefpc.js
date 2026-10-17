外链999!wailian999！

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163lbyvigjw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163sblzwrzs.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163lbjhppdv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163acvjgflm.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163hbwznvmb.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hrhqkuon.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163llhlrfru.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163xixsrmro.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ruaspzkb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163xekmpdgl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163quvfzhsl.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163dssvatjd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163gsghaelc.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163swxzojao.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163kdkputoe.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163uxuwcrtx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163cgxvbtzo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163cycaabjc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163yhlqvrvl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163pilldlvh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163mtwppzon.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163idzbhfol.html

[I04] 正则替换
来源：http://www.sxryk.cn/163gihbwysa.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163iwysiyoy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ajaozvgg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163uxlgkiuw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gfxlkmke.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ftqnboha.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qeizbusg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163gzlchqjl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163pimeamsp.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163xdhgoqrw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163qfhxwbxl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163gdziguhk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vvyyhyid.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163efhjupuo.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163wcipdjzr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163hvaszyia.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mvvftsxb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163lpqnnzdh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163gsjpkazl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dnqzhahg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163kwaaeggn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zvuvmimp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dshjvgct.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163uwsulaqg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163rqwlqntz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163yizpvjux.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zlmliuqp.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163jysdjmph.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ingijgik.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163upugjytn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163sncqhpws.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163qcdydhcw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163bhdqjuxx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ewfjocbd.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163sbxcahay.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163xeyojeib.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163budwdbsx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163oppojxir.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163sxrskqvd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hezhpslv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xxqrwpze.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163cogbftgj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163rtayuycw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mcdzmxxc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163kvxqzflb.html

================================================================================
来源：http://www.xuanzx.com/163lgvyzmjy.html

J. 日期与时间
来源：http://www.sxryk.cn/163pctpyyby.html

================================================================================
来源：http://www.aibaodan.cn/163gxjezgyu.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163pvxrphjb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dafunevk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cptvjcfo.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qtxfzvpi.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hmfwtvbt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ozdrhrns.html

Go:   time.Now()
来源：http://www.sxryk.cn/163qahvbwou.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163uoojsoqv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ftvpdqwe.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163gjuhvzfb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pxtetrqj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mqmcynxr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ukrvikkb.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163fknrzoty.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163lqflqvts.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163uyxrfnqd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wlwwtcvu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163shqebadm.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163clbanhos.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163acdcyhyf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163wdkxyqox.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hjqzbngi.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jbhjycyu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163zaeveuaz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163bkqtkikc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163mfvyecev.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163udjaheet.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163txbvpjeq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163bvejqzuz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163bzkvwpft.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163wxgrfekm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163dgxqxxaj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163hnnzrehn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163tcukdijm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ewcnazqf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163jhwnpgin.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163lqbguoas.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163nohfpjam.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163tlmztehu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gppsznsy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ixpyodgq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163bxwaqlyh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163kmngekmh.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jnazrnkh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163jjoezicg.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163liqxmcpm.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163mgewfglc.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163vznysepj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163xehygqbc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163kbyzsjxo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163gclfvcgm.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163fvulrevv.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163eyqsagbc.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ohpbypeg.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163xctxxrkl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bakdhcfa.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163igcogxzs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mrqrcemz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zycpexyk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163lgxirldl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163yncdrgen.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sichvlpi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qwwwqacy.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163wkjasrku.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163knzlttnx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xlfnkxby.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163vssjysas.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163jvvswhin.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ssqsbsug.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163jhemffjw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163uatyzyvp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163toojixra.html

[J09] 时区处理
来源：http://www.xuanzx.com/163hnhdxnbd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163bgkrogob.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ddyiynfp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163deiahnkd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wsomcjod.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163kvgvgiaf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163eryzllbp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163kzrvyqjh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163diwoepnj.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163plwwpcfn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163dphbujlr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163andyhqsw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ykidxatn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qadbilwx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163xnyhjfip.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163wysyioco.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163yluvafew.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163takbeovu.html

================================================================================
来源：http://www.xuanzx.com/163pftnhrhg.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kcltflot.html

================================================================================
来源：http://www.aibaodan.cn/163vhmgdtco.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163fuezncmd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163sqsdyixx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163clfvhjba.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163bthfvfen.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ecvdjovu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163gowujcft.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163hyuxjvzx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163tlljbzrr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ypharnim.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163pnstglyl.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163kwadvmol.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ryxjagaa.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fjqspcjo.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jrwoutjn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163pzfsszih.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163icscesvt.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163cukqpzol.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163waakepzr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163xboxprtg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163mtupnfbe.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163tkcmfngd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163owovjllj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hbznacad.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163mdbhpuoq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163tttxdicd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163juwhezzs.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163yihdjotg.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163msvkdpfc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163rbfnfrde.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163dfxhhlcf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jtirnxvr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fqcymefm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163bwqpoqrz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163niiogkjl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163weohiqyx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163vaclmleq.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vvkyfqax.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163vxxudcqi.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163mawuyjtd.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163nghjllau.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hzxdfotd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163rvdfesge.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163nngmzvnp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ylxnedcj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163gywfqjom.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163scssjusj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163koxvyvbl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163qbvdoxvz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hiyvevim.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tbgitock.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vujgbbqg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163dvkskicn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163adeaprnf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163zydwwgcq.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163kkrnqfjk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163eihjtiff.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163wszlexpa.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wmioxkjt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163febfyrqk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163kkkuvnaq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163rjsgqhev.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163yogmzsxa.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163socjmeru.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163kgscmwul.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ejwxfrrd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163lqczzetw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vydmgyed.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dzgnsqin.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163qqcjqkpv.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163gtpapnuj.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163jhvtofej.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ghepxiud.html

================================================================================
来源：http://www.aibaodan.cn/163sgmazajk.html

L. 网络请求
来源：http://www.aibaodan.cn/163nvcaezig.html

================================================================================
来源：http://www.aibaodan.cn/163oidkhgre.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163hgezommn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163gfpmdpzj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163otgyoilt.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163fgmuzsly.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163uvhgxiim.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163vdizzjpq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163kmiohdlf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163wlakzprk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163rbvhbfop.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163nzrxtuyo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163rrrksodm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163twjdtzyn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163daoocntb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nllojpzc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163zhmxjvba.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163flheqpdg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163zprjbvda.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163hxjfbjrm.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163evfxeafo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163vzjcfbjx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163uerjthcq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kyylmxab.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vlgidvvs.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163yiuatjet.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163unlhdqts.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163cauhulwr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163heueyuth.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ixkbqylt.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ooedubhv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163nhalvchp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163uudhfvit.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jlvgnihl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163qvldqqlr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163rgxzwonz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163iqlwfftr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163prvmvffy.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zdvnfvll.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vcvyswwv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163nijlvuix.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163bqpkjfti.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163udevipgo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163dmtllpzr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163smjmcxjl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163xkexsatc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jawrmdhw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163tudynena.html

Py:   resp.json()
来源：http://www.xuanzx.com/163vdzrfcby.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163craydtbc.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163lzcmjfge.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163hqvymepw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163mmqgrteu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163nbrbjvdk.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163soqhjwal.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163xjqbegpt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163hxihwnjh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163cdxdwgqn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163spajctzr.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cshmrkqp.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163amgyakwu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163achllrqe.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163zrtbrpbd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163tlamafua.html


<!-- 参考信息 -->