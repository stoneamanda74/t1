外链999!wailian999！

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163kybzpnno.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163vwtqsamb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163teoyvbhr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163xrrnzwrv.html

================================================================================
来源：http://www.sxryk.cn/163ooalimuq.html

I. 正则表达式
来源：http://www.sxryk.cn/163jdtwquch.html

================================================================================
来源：http://www.sxryk.cn/163narqlxut.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163iocejqfo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163bhytledu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163fpsyloyg.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163twtxnlrx.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lwscvxdt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163pkcwitrj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163rqmrkxbk.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163fmxmnmpf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163lxebtmep.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163fnfhvadi.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163odmqdecq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ywxhyueg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163cglhcwib.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163fhouektl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163gfpizskc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163jxtjicsj.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163loxweflh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163bwsdyvgv.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163bgjmigis.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163nmawqahj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163zidiuacj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163imylzgvi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163acpxmzyc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ufmddwto.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163isjkqpgs.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163zpnqpccv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163jiaryovj.html

[I04] 正则替换
来源：http://www.xuanzx.com/163uimdryqx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ayrfobqr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163pxtevumf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ziyfvbtj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xwaqvwto.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163dfdwpqcf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163istihzkl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ohbwwjuk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ujfewxjh.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ucbjkaej.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163tsgfwcul.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163quqpzbwf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cvolbpvq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zvaelssf.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163lscnxbiz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163dotyibnc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163aloeorkw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163nwyimere.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ywmbhfug.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vhxnadrw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163gfglmsdk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ktcgkfal.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163zntvznao.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163kygtqnlr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163boybjupm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xsrtagvm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163sdmkxmam.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163paputbjw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ldsetjer.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163tbccbstd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163vjempbvd.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163nillazcm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wbwjvtdg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163asoconky.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163dwlfwewe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163hztinlvl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ihielqol.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163upeewdun.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zvyelaqy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163quiqyegg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qbegsdjm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163nmsqewrt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163xxpadhlf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mihuqtal.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163rzhdnkcc.html

================================================================================
来源：http://www.sxryk.cn/163goiaceju.html

J. 日期与时间
来源：http://www.aibaodan.cn/163hlagphvi.html

================================================================================
来源：http://www.aibaodan.cn/163lfyxxpeb.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ymhuuulm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163sgzfsoeo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nwcicluc.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163muklwafj.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lhqakqeg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ufzkzrlm.html

Go:   time.Now()
来源：http://www.sxryk.cn/163givnzawu.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163baaegvyv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163yhfubfff.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ukrryeok.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wauknmiz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rktqmlcu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163fpysbvdb.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163yqtdulnp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163jfidyofs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ccetswzy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163lmzrollq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163sgjzlqvh.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163jwdocxoq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163plpichra.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163whmhqqfw.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cedjzfoo.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vgbcvmbc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163diziadts.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163epvbooxw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zsrxqrnz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163voebshrx.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ghyxvvlx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163qmjrgvxe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163xkesrzsi.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163dyeumkvj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163jwnbihuc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163spoezaax.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163wfinyeem.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163hgtskgnj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xlxrtibg.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163tbkoiurk.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163tkbewupk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163tpgkmojx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ppjewrul.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fwurfvae.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163amyxmsjn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163lomfhfcv.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ghheailh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163vbxirmul.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163zommvsrj.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163bekhalyc.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ghcrhswf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163nzxganpj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163dabwiboo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163nazvsopz.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163wigzgjtb.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163aqmzmgsi.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163acewdsdi.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163amccksel.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163sxnotazz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163jgamrrod.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163otmahirq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xwrwpxls.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ujsxqnje.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163luuccqrb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vzwvpbtw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hvhiqnav.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163nexilpdt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163atdaefsr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163nmyxlqjf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ibgozdgm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163kttoiicz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163sbkhwenq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163zntpbbun.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163erdxooqt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163jepodtnk.html

[J09] 时区处理
来源：http://www.sxryk.cn/163znyilfac.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163mdxzsuez.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163tgsitobu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xdpugkrt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kqkutdzp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163wsewdgld.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163cdcojiis.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163mydgaszf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163rkulntsa.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163lbxbdbqz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ispbrhyo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163bnuccnji.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163zcksegmc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163kfucwqdl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163yprlowbz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163brjbnjcb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163mlqykagz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163pycmxhet.html

================================================================================
来源：http://www.sxryk.cn/163woqdueah.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163anvruhot.html

================================================================================
来源：http://www.sxryk.cn/163hhaoapxc.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ytvmdfnj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qaslztzb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163nogcbbck.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zjhutdmq.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kpajezkp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zdapuzcq.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163yegbpaha.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163wiodkppc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163sbbhpgxk.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163vlpfxznj.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163sjwbssyu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163epzrewtm.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163afmzgtoe.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163opgrckht.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163sjxjeipv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xunxudtx.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163qpqcrxzm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163rbystjmj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163lezckaba.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zsatixal.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zaqvlvjk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wqbmrrry.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pjkibmht.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163nkqqkzcc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163tgofhltk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163nblakpeq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163llrhmujs.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163upugxnnk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163pwibnrig.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163gqjiipfj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163kyrbalko.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163aftrpyii.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wrkzbhqv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163peqqszuj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163dcskbhil.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163gpomjfrd.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163cqvgkzhg.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163nbiljigv.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163oecnmpcs.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xgufwvrk.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163etfwqhqd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163nzqztlif.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163hmohfzht.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163gdpcgvmh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vakurssr.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163qcdqewvf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163owyljjci.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163kicgltke.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lqrmproo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mrphqvxs.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163rmsywfok.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163pcvanrqm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zydmspol.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163pgbhapky.html

[K07] 进制转换
来源：http://www.sxryk.cn/163jgeomvxe.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163bqjqbxrl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163okdllhtd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hsczjsfy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qyzncuxp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cmsfierh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163wvfeqhms.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vbqcqegg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163rmyitkvr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163cecaqbpo.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163nsyrfhjv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ngolsplh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ultkvdsb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xihjemcw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163amavuivi.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163kenonvjz.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163lfxyrzgb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163hjrihzpn.html

================================================================================
来源：http://www.sxryk.cn/163rcbcbzof.html

L. 网络请求
来源：http://www.sxryk.cn/163beslfeeh.html

================================================================================
来源：http://www.sxryk.cn/163kcqglqbn.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ekbbsezq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163fixxqers.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163gprotmuc.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jilklbsb.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ddlddyha.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ogwopebn.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163gtlpsegb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163cckbzzvx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xrihdtxf.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163yrmufype.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163mnnwffyx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163qdagmged.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mdzturkk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163oyctkjiz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ilhorvcu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gwxcpgrg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163avtpctor.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rqatmrxi.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ehsnmwcf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163kvjcsbvr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163xbjcxitw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nblgfida.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163twmdtlir.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bvakliqo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ttztkujf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163rkchszcd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163wfsydjdq.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ldkpwkzv.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163rpjnytnb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163uqcyuose.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qqyhhgux.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lzfygmpt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163wlfghtcr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163zgujmwqw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163jzrcjgfw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163vptkfpgb.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163frdhuiqf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163tnmylszl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dlvswdxa.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qsqyxqrb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zqxwmsgp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163zpqvhhwl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163cizonrtj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163rhzirepm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163kksmgeyd.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163lllhcbev.html

Py:   resp.json()
来源：http://www.xuanzx.com/163relgsihk.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163gzgwgpmg.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163lvhreqea.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163xpxenzgy.html


<!-- 参考信息 -->