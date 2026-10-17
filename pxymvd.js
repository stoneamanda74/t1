外链999!wailian999！

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163iomcemqm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163rccdwbvs.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jkwhijba.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163wzupbgpa.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163pshiwfmy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163bbcpauws.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163sbbyjpfc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fubqlaxo.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163rgbzzpvu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163rndzvjpk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bnigvmuw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163tiaswgaf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163jxalsyks.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yxafedag.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163gfwrupxh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yaykwobu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uyvkkycl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163fjwuzucl.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163gkenicul.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163qsxdmsph.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hmylyrxk.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163cqlcjeoq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163qqfahgdk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163jefnjrir.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163pllxsupr.html

TS:   /error/gim
来源：http://www.xuanzx.com/163qjfeqgpz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163teltkrww.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ilklsxjd.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163dvhstuon.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163sjfztmze.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163mmainblq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163pftwpjzw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163gmasmxvq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bbxisfgl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163lhsllyfe.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163dtoegpgw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163xtppsnkt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163xnhfgkzh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163eoxuhvtx.html

================================================================================
来源：http://www.sxryk.cn/163asatfuie.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ixkcqnkf.html

================================================================================
来源：http://www.xuanzx.com/163tfzvfmyt.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163lusirydi.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163didhcgbs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fpazivia.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ffxfljdv.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qlyyiexl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163zymydgct.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163zlhjjyhf.html

Ruby: Time.now
来源：http://www.xuanzx.com/163jhjtufwg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163bdhuxzqe.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163gtwwjvba.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rdvceqbk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163iqldoqez.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163owojezkg.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163pjmnmtkt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163scjfdmob.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163zinkvvbs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163myatgzta.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163pwbzebwh.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163iyzsmrow.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zxajrqns.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163bdfezaqu.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163apufyuum.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163yegkolgr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163puumgjom.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163jcxgefas.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163hjkwjoyx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163pizslczr.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163tfktzomh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163gczvbtur.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ouwntmye.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163nnwvglku.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163zpznsbbo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163szleugfq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hrtypjiu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163hcbinmxq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163wpnssuqe.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163vomloooo.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163rdygwlsj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163dtjrqumd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jnkrlewa.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163igsykgnk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163lochrynk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163nddopwyl.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ksujjnkw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ecikafze.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163jrjmldvl.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163aeviksku.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hxvydroi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163zavmrrwa.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163arlsnuyx.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163coxwqmuq.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163zllrtako.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163sdvtiwlz.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163eiuxjjbi.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163duqduxpt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bpfsjveo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163bpeetpbi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163nyubviru.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vttzpldd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163aapukxwz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ozciwiyv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163cqzufrdb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xnsvtqif.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163fxqqktcu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163cckyaahu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163bqxgegrb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163qjjijtzc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ouwycsqh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163lbdebofm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163urnbmfpi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163hvbaluhw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163mnpyfrqv.html

[J09] 时区处理
来源：http://www.xuanzx.com/163alysmshv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xzrvzauo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163huzclcmx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rzrcvxfa.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163whzhjygl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163zyxdqxqs.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163xpyyaagt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ahzhonja.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163pkyknbzi.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163gljikmgx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163xlbhapno.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163smpxuzjt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ryfpfsld.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163swinigmq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163iaernktc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163nvhfryvd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163fgdonzzc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ybbupgpq.html

================================================================================
来源：http://www.xuanzx.com/163cfrmaies.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163tyzdpofz.html

================================================================================
来源：http://www.sxryk.cn/163trhzrqck.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163wsuaphhy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163gsozjdun.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jidgolbl.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xfixceaj.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xmliavee.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163wyqkqxek.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163pauwwozo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163vubwmdkp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ucnwkoql.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163yzthdgbt.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163mbjgxpva.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163aygiqdsb.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163magbmpcl.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163uizhwspp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163omwrvwkg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mjrgxccs.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163cquxavgb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163hjjaavlj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163pwxeiayk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163jgzsxduy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jduzsbuf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vmpvwumr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163igsbwuyk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ospimulu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ebmppdnk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163igmzaqee.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xmykojdc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163suxnwwxm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163jnafoixg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163hcsjjmld.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hmrahlhl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ccmzrrdc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163piaxkukb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fvdiuktc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163qfveemru.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163bliowylj.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163wyxzxccd.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163hitxehai.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163zgkkztbl.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nqsohhtj.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hodetmhx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ladeshav.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163phecnrhp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163eivtftdl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163qqcwepju.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163niowtdjn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163xssyqjnz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163dukrmwmk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163bijhhxlq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pxolhela.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163sfbdlure.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163kjfplczu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ukneudfs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163bwjyzqml.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163jxgdyfgm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163pmeniywg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163yngurssg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xidrmosg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163intllagz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163usoyotdt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163hcsxcyxu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163aslnkcgm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163kvpfixci.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163adtifpzx.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ynymajca.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163izhdtnbf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zcvbfllo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mvbjyfzk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163phwgirub.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163nkiyeaxs.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ifvnhyww.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163tnyljlks.html

================================================================================
来源：http://www.sxryk.cn/163yqqsnnyr.html

L. 网络请求
来源：http://www.sxryk.cn/163yovppija.html

================================================================================
来源：http://www.sxryk.cn/163quftlubg.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ufmnyhos.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163oqczcmuv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163zcahdtap.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163cbvydoed.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163dkkahesw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163shnyshik.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163xbvpgipd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ccjmvuns.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ivyfsjsr.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163btwezmyy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163xlwwbotf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163noteinvz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jsjydxwu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gyxobesw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163evjvvkim.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163yvtqlawq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163sivbptbf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163izhhkspf.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ixolpsyc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163lhtpovdq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163dupinxgv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163kkhmthmf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ztqonpet.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qcbmcvfm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163rihywgnq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163spunqhfs.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163mmezvicw.html

[L04] 设置超时
来源：http://www.xuanzx.com/163xavrhsnf.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163tqqjfcar.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163gjpbaxhp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163rnnghtmp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163rchcutru.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163cpqkunmv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163soapfjol.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ewcyamlw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163tonlebpt.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163nsjombcy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163dlmtezsc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163wciezbzu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ebxjfare.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163tbqcbbnl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163lafjxsng.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163iwacsdbc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163htmiboxp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163scsvjtgh.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163mwfmdmag.html

Py:   resp.json()
来源：http://www.sxryk.cn/163htlzjtdq.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163anxieywu.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163urakkokd.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163lkjixdlt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163xajkivly.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163tfosvncf.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163dvotpwzf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ycjiinju.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163toravzuq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163muysggfy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163mofliloo.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rpmlhbfm.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163doiaqhdu.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ovcobtps.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ftfkpzkk.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163fibiikob.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163mcmzeavv.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163zsigcuaq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163cmzfucxa.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163wrdnyhof.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163phppxqzk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ddvvnhmx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163yocuumzn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163dpixcbtk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163bobfigde.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163rjvmtwwu.html

================================================================================
来源：http://www.aibaodan.cn/163mglfhabp.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163drpkacxk.html

================================================================================
来源：http://www.aibaodan.cn/163ugtqfedb.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163eumkvjyk.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163lqubusla.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163gtebbrvp.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vaclobqc.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bguphgjz.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ltvrohrb.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163xupukbrz.html

Ruby: ARGV
来源：http://www.sxryk.cn/163akkiprkt.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163fhtjuaqs.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ipcnstgs.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ytyenyvs.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163fxvitxin.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163lxseyqqn.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ostcbyfg.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163nzghkujv.html


<!-- 参考信息 -->