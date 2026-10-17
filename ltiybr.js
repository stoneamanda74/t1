外链999!wailian999！

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163mwczswlz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163defkveax.html

[I04] 正则替换
来源：http://www.xuanzx.com/163tbbzlvfa.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ukfcimnb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163alsofvbw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163yazrvnsy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tbtuucvu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163wklonsak.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163kzpynmac.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163jfdzsdsa.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163vmdozjaw.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163nszrpoau.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163dtnuvbvy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163osvxebpd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163sfbvfngo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hgtnxzou.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163oaqlxtrl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ktjbehay.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vjbqygex.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163vxuvuihh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163snfciwjv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163veparyls.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kswoobja.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ehdvfipf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163drvlitli.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163dsjjxerv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163qtjxcqym.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163jugglivv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163yebxudou.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fihuntqh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163aasrptxl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163enkjxclm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jekvjwsj.html

TS:   /error/gim
来源：http://www.sxryk.cn/163djdqhvwl.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163kfjpzvuz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163xcebtuqg.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163tfwryoxl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163poilemyv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163raoxkivo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163lafpjsox.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163oumjvroq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hpggpkyn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ndqmumwm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163jyivhgek.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163dkuvvvqx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163qrciavnu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163oudqxicd.html

================================================================================
来源：http://www.sxryk.cn/163yrulquol.html

J. 日期与时间
来源：http://www.sxryk.cn/163syxjjkqs.html

================================================================================
来源：http://www.aibaodan.cn/163hvniapzy.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163gizuazhk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163lgimlzzy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bybhwvpo.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rpjmqfpz.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163sgymqvcr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163txyinyfk.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ehsdphjx.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vxnwzjpa.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163jpupmhrk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163xllthsxs.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163sliflilq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gmprzvek.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163lmppuqdp.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163sioqriwh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163xxhhbosy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ioaveqst.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ziuztpkp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163xoveeimz.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163yrgplajq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163jzbvddeh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163lvckqqwe.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163epgtcfue.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cuzdpgva.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163srdyulbu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ejxyfegw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ikhffmgh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163kujsoviv.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163bnkoxgkp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163tfmekpqi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163gjclgzzn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163cirbdyoi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163mgtboono.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kwigdkza.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163znbzeyaf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163yeyhphru.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163fxiuzqez.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163asvsnzok.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ujuzbmhx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ptdzmxao.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163abdbomzn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nnqyqsrb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163rgwexbeu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163bbyaxier.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163pwpjcrnd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163dwazfjtx.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163fxomibhj.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163tqtethrq.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xnrimaod.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163xyiurlxm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163txztssbn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gezyalnq.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163brrogqcw.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163nligzjlr.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kpnwnuxb.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163jgspwbep.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163isrubgip.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163nmutlpym.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163axyktcst.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wolmyfgm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163zbwgqxji.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163sqsdfwjs.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163towfgfdv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ynrsvevb.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163xbmwnjrq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163dnrzbtsw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163eikgelkl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163mnpvzyjs.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ryrwezch.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qkwyrwae.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163rzwoyyrc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163qwrvebkc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163hlgkawsr.html

[J09] 时区处理
来源：http://www.xuanzx.com/163mpzovhtp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163cissnwar.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163tuwzlsua.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163tpbqohwf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163iavjzeik.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163rxkidzfc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163cwwogzil.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163wgrbwvzl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163nsdkacsr.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163tqqxaqlu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163wflyolmz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163sjdnraia.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qcxovuwf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163apcxsnke.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ggoxoaqf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163mytlkymo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vdpgcmwc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163xktbyczp.html

================================================================================
来源：http://www.aibaodan.cn/163tnzskhif.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163mlbbvemw.html

================================================================================
来源：http://www.xuanzx.com/163ynflvdeb.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163yelmxzhz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163kxncgdom.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ckfqzpws.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163swioarxv.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163sgdbacam.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163udzcepop.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163nvujwncc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163kczfmwyr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163roiqwcze.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jiimrctu.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163pdsxjqbb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ftdzzkcz.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163afunxeyk.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163phbttvgf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163jaspkopz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qovsybqi.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163uezawpks.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163gzgnuqzo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163tejirqpd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163unuxtfwx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163enoojzfw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zarrujfj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mmhmnnci.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ytriiwsl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xfmxuyjl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ocgjjjos.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163taqdpwni.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163bgshmieo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163cdmxqplu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163kggssxxc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163upkjofbx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zcpwmjoz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wrnhdvgr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163rclbbeue.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163gforgdcy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163qwhtifwo.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ajalstxc.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163fcxjchjz.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163vejamcst.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bjpagudb.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163kqycdwys.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163jaslcakj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163rtgabwaw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163fxfmuukn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163lnsbsxcf.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163jzvrcnnb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163etcaucii.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163vpzlqnqi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163rmlbudbz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gibeygjx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163rivhzdkh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163epvagnuk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163diggojtq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163bcjxkxtr.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ufyiqoxy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163cqyrqrkf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163wwrscegs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nuiusmzq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gvltmnas.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ldzyulef.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163wmectvuv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163asmpuean.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163jbdlmzyo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163woytosqr.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163bfxiforr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163vydzmzaf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hpvnmmka.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qdkmacbo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lsvrezqp.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ugvzlupy.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163vfhpdecr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163evribhsq.html

================================================================================
来源：http://www.xuanzx.com/163cifjhrpq.html

L. 网络请求
来源：http://www.xuanzx.com/163sjmuqckd.html

================================================================================
来源：http://www.aibaodan.cn/163zkipztzj.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163jgfpjddu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ohkepqox.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163avclmllo.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163gmyzvvax.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163yalriiod.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163epjkmowu.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163xbesfwug.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163orqudsix.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163fnslpacw.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163kiusedep.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163pbykobsq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fifoxytd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hqwszkvc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gatmdfgc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163knvtsxce.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163fduafzki.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163xmmvvkum.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xdogalpb.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163kagaaewp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163qxhlbvrt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163abphvupr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ycjunpms.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nliwnerf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163wjubvfrn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kgzwfuxt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163xcwvgevl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163doicclru.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163vznumwda.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163jinlmqwo.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163hujwikzl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yrkgojhf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163cldzsqne.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163tdzkjyhp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ivymboec.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163sfdvdeoe.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163wzprzzsk.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163erwixwdk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163zlhziyfq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163tfmnmxkh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ibstbmfe.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163usesntao.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163zacozceo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163rlbrlvnw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163slnoikby.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163udskmpwp.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163drcznetf.html

Py:   resp.json()
来源：http://www.xuanzx.com/163lvksehsm.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163pzeaokbx.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163sgrtyhup.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163vqipnnes.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163puqwefef.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163iuqgaqqi.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163kuvdzsgy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163hitdvmaz.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163bamgfxai.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163zmdlvdne.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163asqvvyvs.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xdnnatwq.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wxpxayqt.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vtsnfeei.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ckqixyqz.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163lcpprvnp.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163oldkybej.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163fjjhnzbf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163zoslswcp.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163seqhnjag.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xgtnxzhw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163euyxhzio.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163lhwooemf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163thrlcbub.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163dyycpjqo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163qusydvpr.html

================================================================================
来源：http://www.sxryk.cn/163elviqipv.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163qgcvdgke.html

================================================================================
来源：http://www.aibaodan.cn/163hrbfbblp.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163scaldxfe.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163jafqkard.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163rdzpiuql.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163klbplvhh.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ohrdxmsn.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163oziirigs.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163mxvruclo.html


<!-- 参考信息 -->