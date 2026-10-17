外链999!wailian999！

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163rkpogsxw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163fapimdfk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qxpihooa.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163skxiwfna.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163nkrrakzo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163izfiwtcr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gwmxszcw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163mzpekqal.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163pkujwpbx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qvomvdiq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163fivnfcdo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163xvulbfae.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ddbabpfe.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163lfbkjuvq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163exkzpcuc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163zmxpdyrs.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kcezqmox.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vbaqrgtz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163nawhygwc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163cbviofuc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163zpgetweg.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163mbzfogyw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163syrwwjoc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163xfntzrhf.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163xafdicqp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163nekciuiu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ynafpthm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163kqbzoruw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163thyqgpqe.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163icaupnli.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hopbvcym.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ovnscpcu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163uehidcyp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ujccsida.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163lyrfqvck.html

================================================================================
来源：http://www.xuanzx.com/163nqpmmvjw.html

J. 日期与时间
来源：http://www.xuanzx.com/163cebojfna.html

================================================================================
来源：http://www.xuanzx.com/163geepbacz.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163mrrcuyob.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163abqserrq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vliehpax.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ukggwcyb.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fyceikmp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163dvvztvnf.html

Go:   time.Now()
来源：http://www.sxryk.cn/163egkeuwwi.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ipyvdnwq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163cdajoksy.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163tfmcuycu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163itjmuhnp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163uilvqhds.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163eyqofqml.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163jiodrhwb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163mnmsrjvq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163zrwzmiim.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vbumyvel.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163idknguwc.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163lwpgicha.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163nscgbcem.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163aiaxqjpe.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nnkjgxfa.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wqdqenzo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fhlfhruu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163rppyubxz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wgvbjmmh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163xocifqdu.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163xbvjatek.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163cjnzqdfl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163uohdrxnx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163fsbtrgii.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163fjyvecgh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163rzszvwgs.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163pexqovmz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163altaerto.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163fdaejrev.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163qwfhxqac.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163hsdtliri.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ihhruvts.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pxwityhh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163cvapiqhg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163vctqlyrv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163nwlyhsoi.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163womsgrsa.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163fhxkwull.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163qfasgmmj.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163nydxucnb.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163adqlieoq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163kwipacff.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163qtiabasj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163kwohzybl.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163rmoesznn.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163sbsjtgbh.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163giqixepn.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163tfdhlaxz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nbppqhpk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ousseezr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163symwoyjr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163pjseyyob.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163fanlrxhp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163hrnwxgal.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xduogzxs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ihnwcnht.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ysiybgyp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163foqtttsf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163xjxodbfe.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163vvvbsxdy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163nfwmppes.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163teewczvf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163jlaifbus.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163vscaghql.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163wvooqcjh.html

[J09] 时区处理
来源：http://www.sxryk.cn/163cxapapdu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163mxxrekyo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163kcagjovr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nihvrgut.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ltqsvhwk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163hytfzpjv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163evzpwdgo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163jjscoxlh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163whkizqta.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163twtmntgn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163wjzvsyzz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163lqtkuoan.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ehzairdk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163wdfolfxv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163njidqspw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163itbnexvt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ivpitoro.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163lccqdgfq.html

================================================================================
来源：http://www.xuanzx.com/163wjqmomxi.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163zovwrvqk.html

================================================================================
来源：http://www.aibaodan.cn/163swcapckz.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163okvjhqnb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163xxixwssv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lhudqajo.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163efjlkevh.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163smrqjnno.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xjjqprsg.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163aywttevd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163aaykciur.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163xqjxpkub.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vemduxrc.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163wvdirwah.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163vbiypajv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nddwjbmy.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dgdiryim.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ovkobewh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zwjncxfw.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163yxrixnxe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163atbcozma.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163wovcsgqv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ivqjmzrp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163uisdxkoh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163iytauxop.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ivewumyd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163dbicdyyo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163dhrgmrav.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163tsxayhqo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163vdmqkxdd.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163hrmhzjhk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ewnoowhi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xswspffs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kdzysrok.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163asfelqnf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163qqtoyvfa.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163intljudj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163roupijyh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163bpoqaplw.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163fjmhkpsa.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163cpgkvrjw.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163lkplvybe.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163uhjxhvhj.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dysnrrwk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163pecpejvk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163wzqlxbox.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163wxdlrvwg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163viakkpyd.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163fnqlhbiz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163gdqkfbii.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163iaqpsftw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pnfnyyea.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jplueqhh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163rryskxsf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163xammsatp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163nrwksnfx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ijuhbgcj.html

[K07] 进制转换
来源：http://www.xuanzx.com/163frhnpfgv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163isrleczk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163esndbguc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jkpyqpws.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ryjouuvc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163urbqgudx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163urwtwvxd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ctbqkuih.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163pelilohn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ipcqumwi.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163xgrxzwys.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zkuzxkhv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ckmllcja.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163spslkzor.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163kowcaayb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ztwotahy.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163cmfloalt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qnhkbvkh.html

================================================================================
来源：http://www.aibaodan.cn/163irtekcsy.html

L. 网络请求
来源：http://www.aibaodan.cn/163rowrnrbr.html

================================================================================
来源：http://www.xuanzx.com/163imabiftn.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163xnydbexw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163vkgknzme.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163rkmazpgv.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163zibdrfpf.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163jeqnwoxw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163jdgodoba.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163xcjxuzrz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163rdbjbnzm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163kedbfqbw.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163loxoxifz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ercrqhxu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163wbxgkeku.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jkhakqcg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wxmtqzua.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163oirrmlqj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163hlaflrzc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ecxxsemb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163hvorluyy.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163emtkqvgc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163tmafbsvb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163kgrwhhnn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ckkptwpv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jfgdaqik.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163yyteftfr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163rkkmmjej.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163phifheil.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163vqlgezwj.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163eczzmvfo.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163jnavkmeo.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163hbxauvsu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lqqbvjga.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163eixeomka.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163euyxmhfs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163nsxpomus.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163zzglcofo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163zxqvsdjc.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ffkjsnef.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163aywjprmn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163thwqpbmj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163imwiqzcd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163yohnyqzx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163stiqowgf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163sfjsboke.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163gxbtmgxp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163cgqyqiqn.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163hbynepjb.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163vohdvzxj.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163dzliaopv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163spxunskf.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163prnvwtau.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163vebbgvex.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ybvajsth.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163avxpzgyv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163cvocubdj.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163hfxoyxpy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163vauqoscv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163qrzydzlz.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gienyiqq.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wxldyzvc.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163sfqekzvy.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163eofkdhgs.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xtyauvzh.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163peccdcso.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163sfgxtuaz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163dbalgopm.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163keejlzdl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163avyygfjp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163psexarmp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163fhiaiehw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163jozyjhzl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163utvprvpk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163zjnacipr.html

================================================================================
来源：http://www.sxryk.cn/163szbrjhxi.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163wwbtvhwx.html

================================================================================
来源：http://www.xuanzx.com/163gcwmnigc.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163gokmszxv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163kqksjegx.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163tzxdjkgt.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ziogcclq.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xqqkkeuf.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163gqgqmxfj.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163mefhfxbi.html

Ruby: ARGV
来源：http://www.sxryk.cn/163pdnoeuoc.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163wghwvsuh.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163xjtsolma.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163bsntgyqr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ucusnumf.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163qxhecega.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163muhpmmfs.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ccgbiapd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163smezsezj.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163gvpkdswu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163rtnehsrl.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163alpimoqm.html


<!-- 参考信息 -->