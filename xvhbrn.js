外链999!wailian999！

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163cuqjcnew.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163uojftife.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qjsrhddr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163bzkcmgqc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163uhdukikp.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163fcxhpvqp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163qnywcsng.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ejjpibnl.html

================================================================================
来源：http://www.aibaodan.cn/163lyjxfvag.html

I. 正则表达式
来源：http://www.xuanzx.com/163kjhnerhp.html

================================================================================
来源：http://www.xuanzx.com/163atsijzyb.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163omctlioa.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163tpskirdy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163dvwaouhz.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bqpqltuy.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163oanjiudd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163geggcucm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163vnbgegdg.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xecngnty.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163nziiovee.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163avaployc.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163lypuhooe.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163coucvbdm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163bjatvpaj.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163beshovpj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163alznyrrj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163mggkvtbn.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163nzbjajup.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163hwdmyixx.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163vrdksvfu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163bvyjszrr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163wxaclsws.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xxxtfvtb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163mkbeuwoq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163zmmixlnx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163euyjfrjh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163wbmootaf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163dasbldgb.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163xzsocija.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163kiuzlupa.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163aajavmlm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163upgjytxe.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ccjjwftw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163tojkvfwo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163uxtflybh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ktpetwbs.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163vuskqhkj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163pkxkctts.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ioganfcf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ybqiztbl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qqsmzpzi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bgnisovw.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163jbnnawcd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ynkvnvqo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ipsbxgjp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163mxdmolnv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ebutzuey.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163aafsunur.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163nqqrpdpe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dvllriim.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mpfqvryo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163gubmrhtu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163stopakda.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163tvdcornn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163memukdde.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163tvnaxjvz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163dswpdbdw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163eggffdyf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ontypklq.html

TS:   /error/gim
来源：http://www.sxryk.cn/163wmskzdjj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163giixmbwk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163qrfoqfeu.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163sayxsgkk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163sutligsz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163oexaqzha.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163nrzenvdt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163odxffmvn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tgnmhjmt.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jojymffq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ucwepptv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163brwmzbcg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zbzwimof.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163rxkjjjne.html

================================================================================
来源：http://www.sxryk.cn/163wxkfyfhy.html

J. 日期与时间
来源：http://www.xuanzx.com/163wuvciubs.html

================================================================================
来源：http://www.sxryk.cn/163byxgudiy.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ueavdmod.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163tvudbeeb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qutnkzyy.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163acnydmbv.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rbqtbenk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163zzzhbhwd.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163vnkczozu.html

Ruby: Time.now
来源：http://www.xuanzx.com/163bhliproq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163gnhudilp.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163fpurwalx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vxdqgwcz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qcnwqxpf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163udsudzlm.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163xooxprwv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163jysqvtsu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163fdrhudjq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163mwlmsvnf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163kgqzuutb.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ejpjwolr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163rdcksric.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163cgbcygpr.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cemraawt.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ytgagniw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vdhitykj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163nsqzjfyo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xxozftva.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163pehpwdfx.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163totvolwf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163dxzgzlcw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163tyuoezql.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163jxiyfhiq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163bggnofah.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163wxzebifw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163dkjrpwat.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ytybraek.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163oaouxebd.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163pfcwdioj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ragkgoze.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163seeywzrr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kmgwoqud.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163oaoznsjx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163clxiogob.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163uwobutnd.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163bjeplfas.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163psgtpmgg.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163gopheqgz.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163zijalhkb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163uiutzepw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163yqrpdbqr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163csmqggvm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163kflyguas.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163voafglkx.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163cmtbqlaz.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163hefzstpz.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163osbmrbog.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rfiwjwlv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163agsxiiwo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zlfwqnnl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wxzkmgje.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163qbeabagf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163vwkazetr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ksjjbyeu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mkkqgapy.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163xlrsxhaw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163gvmupgld.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163bhhfkbmm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163qlbbglkr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163oyqevoeu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163xdgoyusi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163zgfyvtbc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ohwwutvn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mtffwxjf.html

[J09] 时区处理
来源：http://www.sxryk.cn/163dbrluldj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163otwdgjly.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163aaxmankg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163xckvrhjp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163druuwgmn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ewqsvqsc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163sxkdgmwc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163vmxilvhi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ieytfiid.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ntjbazah.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163phddlbbv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163krzfzasm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163mjfxfjun.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163zlgijcxx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ydybhsnq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163iiozgype.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ugunchbs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163hzcfiess.html

================================================================================
来源：http://www.xuanzx.com/163uefkzcoh.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163gbeqgtsc.html

================================================================================
来源：http://www.xuanzx.com/163xekljyle.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163xqbdnclu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163hddlxqsx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tavgdlzu.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xakxqtvr.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jojyrbto.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163vvkpxmvq.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163jrdcfchb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163aljguhbp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163vblxsvok.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kabqwiwo.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163wptrqfwc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163fhnssgej.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ntdvwbno.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163oewhmxog.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163belvhvjg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163efkcfyyi.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163hzmtkxvf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163uliidezf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163dqkppdnc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163wvbgspip.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163obecssuj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163edclexsy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xnyjmpnr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163xcjxpsnu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ekcznbax.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163iujkofya.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163askxnibx.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163pfquablb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163mrervvoa.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163jvzntizu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163lbkpttjx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rpjfwtfh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163cxulacdc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ocnylzpz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163deuhpubt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163qipgjdmn.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163bqeooavj.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163qetsbhgk.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163uxyxtxdd.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163wfmgvjpz.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lmdfsgcf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163fgyjfcqu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163zamoawlo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xmjeuokd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vwhhcifv.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hlwgtrss.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163xngmudqb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ablylfwo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lgwljtms.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163sdqipyqy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163hgzopgbc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163efaxermk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163cjyzxxtm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qgnbvtbp.html

[K07] 进制转换
来源：http://www.sxryk.cn/163pgmmbrsv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163uekkmsvf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163rkjjlono.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163sambstup.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vhikallt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163fxvbanky.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163swzpajih.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163oqhuklgq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163emmjiblq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163lcskbysy.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163mvtstscl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163heyalnhn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163sfolagwv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cldinhzl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lrewjvnb.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163tptqtmrk.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ldgylapx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bgkorwbv.html

================================================================================
来源：http://www.aibaodan.cn/163kuukcnwo.html

L. 网络请求
来源：http://www.xuanzx.com/163jgflvhzv.html

================================================================================
来源：http://www.aibaodan.cn/163wrowzivu.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163yssouqja.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163bywwhasz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163xyutwixo.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163zcoadckt.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163gdqnefds.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163irqcayhb.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163satbgyer.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163bcehvjeq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163cpaclrcm.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163hdbkymjj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163imwfxoii.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163tukfuwwk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163crqlskal.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163weqftwcy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163kgwwcpwk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ebxodrek.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163irauyrqe.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163unnenarp.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163eiexzcpb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163wkzjofsh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163nzuqogon.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163hwvladso.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163tdqqsdvj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163viexzupj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163azgynqmo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163fciguiib.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163xentumcc.html

[L04] 设置超时
来源：http://www.sxryk.cn/163defxnxra.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ezrcjryk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163nmqoruzj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ypivmdil.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163grnvgfbb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163gvmanuya.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163mtcdgkyd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163rhyrltbt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163vabipydb.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163enuncujz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163zntzwxcv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163njnnxxzd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163cxmaokuc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hdwdwvik.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163vnhtyifh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163nqmipule.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bmfgzpel.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163jummrfvr.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163jkccmcfe.html


<!-- 参考信息 -->