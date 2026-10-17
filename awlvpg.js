外链999!wailian999！

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163shaxoygm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163dipcwwle.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163oxhgwefe.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163iufjphmb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163arnptvxi.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163eafkkwok.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zbjiuzfd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ikmyfqih.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163qrysjmvx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163sfsunfqh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163figskjck.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163dfimixwn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163vldvohhy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163hszlmtye.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163joekirdz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qzcdilqf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ramlalfm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ccdojvez.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163jtncdhth.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163tbsefpmy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xzzhvitx.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163ehqmsdxs.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bpyuwbhv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163byvnkvjg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163gagclqyj.html

TS:   /error/gim
来源：http://www.xuanzx.com/163daydhwdq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163xqoxjmnz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ocificeo.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163erwbioip.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163feucvvdc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ncqbphwy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163vhpemlqy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163tiqtdffz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ctbjksyp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163rsgyayal.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163asdugejs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163mvzlwxzz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ieylzyzo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163wxbvufro.html

================================================================================
来源：http://www.aibaodan.cn/163mwgvqqfe.html

J. 日期与时间
来源：http://www.sxryk.cn/163wnlxcrmh.html

================================================================================
来源：http://www.aibaodan.cn/163eyfkeofz.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163cbxyuvpm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163jkzdnxhf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fbenzxox.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vofkodrd.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rxcwrhne.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163gidblkec.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163tdenhmhq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163fsoclkgd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ohzlwzkm.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163dsstomte.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hatmdwau.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sxhilzqy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163jdexpqah.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163eromexqd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163rcgceipt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163cjvmxhol.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163htlpquko.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163vuggwpbs.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163tdfeyimc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163kmvkrsza.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163vuojypff.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ycbczbjb.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jpowpusz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163qzghxhdi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163mwgejeia.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163otagytak.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163kxdoaoii.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163njerfhvz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163upwyxjlc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163bqwoeymr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163atuqpzeg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163vscgmtcd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163elebgvit.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zbbtlcpz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163mumhocfh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163pjxgskvt.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163iqgeiydf.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163lcrqnolc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163zttpigyf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jeffwcxc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163mwjpanud.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163rnaxtoqv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163bznorvkq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163pczddrbn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163vmfdmovw.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163rjgtocgv.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163tamqtruv.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163geqigfak.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163tjowflsl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163fymtxboc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163qkqotqab.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163lwkexwoz.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163vuwwoqvv.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163wztgjwgg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163iyxzzyxi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wjpvinyh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163knskdppa.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163gyahjzid.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cvbkbhmf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163jfcjrzmg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163tmolevqi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pydnidvk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kbzejicw.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tasycnoj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163kxdzhbvl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163phgjnnwc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163pphfdkts.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163vpvhashh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163pnfnxhtn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ypghaxdy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163yqjiheys.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163hrmluayp.html

[J09] 时区处理
来源：http://www.sxryk.cn/163nokgsrht.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163dmsqphkm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ddubvlhw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lkfdjmqc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fremzkpj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163kduipfiy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163mlqifvtp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ycergtqm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163fzkpdusx.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163fcuctvly.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ccuijmop.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163gurvzvgx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ymuachfa.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ohmelyer.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ujwdmqak.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163wofanzhb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ereaewvn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163tlphzcys.html

================================================================================
来源：http://www.aibaodan.cn/163nrpmaboj.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163xymmbtqf.html

================================================================================
来源：http://www.sxryk.cn/163cgemqxvb.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163eiawnjzd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jfhnvryw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dyxvjcrb.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ogagfprb.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xijgpdtq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163bdfzdtaq.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163efgkceud.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163clsefkre.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163qiecyggb.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163hjclfxzv.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163jotpeefl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163vpxclkjl.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163adowpurk.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hwltgkrj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163fduacukv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gpwplwen.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163jtkvbulu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ccjxvopw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163cvahsstk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163wkhrdydz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163iesgvqib.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kctajjrl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yflivzmf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163jaicajky.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163vevubtak.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163mnhrvenn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163iiizpjvk.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163aztteqbh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163kdsqefve.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163rsihczuy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mkcrvnrf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163njfuzxya.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163sofxhaqd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163whhvfrgv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163vpbjrusr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ticrenot.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163hykdfymq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163hawibbdr.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163kncdhxbw.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gpghwxom.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163snlpkamo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163olizuyoa.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163sapxrops.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163aibscvcf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163amlwxthx.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163mlzgpynd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163oevbcxhn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163flliwlyl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163yurkgukz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163exemhjnc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ltumyydl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163armkovno.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163flgetgoo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163arzkarda.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ihjmzdcu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vxgowmse.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163travnkui.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zcozflbv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lxlfthdz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163deuadfeb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163utfsjwon.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163zhtgudmu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163fhndhsvp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163halsyviu.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163rqfkjbrj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163gmndwdbi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vnjjsiul.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rmkxrfmz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163buzrwfyw.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ppncqfdq.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163flmcmbpi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163wkihdnex.html

================================================================================
来源：http://www.sxryk.cn/163mtciessa.html

L. 网络请求
来源：http://www.xuanzx.com/163sioehgeb.html

================================================================================
来源：http://www.aibaodan.cn/163vizubqyn.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163unntvchb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163rvdcgpfg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163rxlyjdmu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163nixqbupp.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ocksuwnx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163idfqyevr.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ihimyodu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163whnukbjw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163msrohxyz.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163vhhbcmoy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163hlkszhvi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ecioiakg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163rgsgokkc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ywrxrvgo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ognutbis.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ajtoocgo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163yfungpdx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ctqjnugh.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163qdnfstmv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163lkngsosn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163daxffyae.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ylkxwslr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qlcykufr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163altqnozy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163otuvjhcu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163uafskhaf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163nhosdynz.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163txmorgpz.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163gwcusono.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163crxqmnvg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jvlutjij.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163rkvedsxv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163axppmvxk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163hehydbrn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163rlbyplvn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ansqoqpz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163kygsxjtt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163cvrifmgk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163piifyiqu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jebuzcfg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wvknsppz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163kzpzirnp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163irqnahfq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163htnbxmlw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163kxcxsonv.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163zrpqeifc.html

Py:   resp.json()
来源：http://www.xuanzx.com/163pmgngekt.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163dstunlgc.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163utknwcnb.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163gupzpqkv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ukdilcib.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163dfpiwjbl.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163uxnwhiof.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163gzdoyiud.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163zvisjmjt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ixmnwslu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163mpkayfho.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163upyyhpdi.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163yueemurr.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163emiybjqf.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163xqktismq.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163olhwthhs.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ssahqpxp.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163rmzaclyk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ulclprmt.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163wxgeqrqj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163bluwjzyn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dixxqozg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163dokaemvx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163gcxdwepc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163aopyaudp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163gwlafmbs.html

================================================================================
来源：http://www.sxryk.cn/163hsitcbzu.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jfohtqxs.html

================================================================================
来源：http://www.sxryk.cn/163yyfuuluq.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163yxrqniqs.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163wuytvljj.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163zssbwbyi.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ilyuhelj.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163umjusvxv.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163wcqxefcc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163tnaoxyeh.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163vvweauhr.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ubowpvpl.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163hppavvxz.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163fprekiss.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163seohicbj.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ruszggij.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163lweobgqv.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163wczoicul.html


<!-- 参考信息 -->