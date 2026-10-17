外链999!wailian999！

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163npnprlzn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ndvicwad.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qmjltvoz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163arawuwwv.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163oasetxox.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ljrsepai.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xhfleqnm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163yqypjfgb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163stuorcmc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163puzdvufa.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163rdmtvibu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163omktcxro.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mfbrfajk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163wqvjcckc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163rtanuuiy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163woojtyvx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xnldqbhp.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163siagsojd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163tgvzdcdg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163vvcopcmx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163hogfpeqe.html

TS:   /error/gim
来源：http://www.sxryk.cn/163kgyrekuf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ucckkmau.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163xscgdafy.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ejqsxycf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163usuemtan.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163viplmsmn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163eyajxmqs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163hzycrsei.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gbhvlanw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wypaysap.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163nobsslfg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163xhhstnbe.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163efesqkxp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163oczutgzn.html

================================================================================
来源：http://www.xuanzx.com/163xzyaykdi.html

J. 日期与时间
来源：http://www.sxryk.cn/163krwyujyd.html

================================================================================
来源：http://www.sxryk.cn/163oniqrter.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163yjogynoo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163llzcbecq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gnuswsvw.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163bjvwhdvr.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ophzwdxi.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163vrslzkdf.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163kfmlnbvs.html

Ruby: Time.now
来源：http://www.sxryk.cn/163zeavowux.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163uhluvewk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163afhelvbg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zrungvwx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163sltdyuec.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163nvwaxunr.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163anhhesse.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ugmiwsgx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dkpgboly.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vrbhiwxc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163vejdcbhv.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163bppukjww.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163vduanumt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163vqaavkiy.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tjsmelta.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qlcxdydg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163yeingkqh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163rcgspouo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wcjjwine.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163jylhflpd.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zwyiedbe.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163jtsixazx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163bfxmofsu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163nbhsiuip.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163dgwgfxld.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163lmowzesv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ghuoqziw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163hiygdeqo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163jxxusgxv.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163luytbavv.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163gmqfcbim.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163htnzoobh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163mjxsniys.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163asxmpzoz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163aatoazdw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ppprrfsw.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163bpjltvyn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163haxcenwo.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163knfrdpzh.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163qegwfhtp.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163gsubyjfy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163kfnsrbjd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163rksynxyf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163btplfzva.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163rwtelwda.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163qjzdwrqz.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163lwbgoikf.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163fhaefcrw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163oemiwwbf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163tyxamegy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fpacotns.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hpbmxjpy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163uurngqch.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163dcujmlbm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ozlgxgvs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hxzopdeq.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163vzraehiy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163riezlfes.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163mnrqfnxm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163blxnwwau.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163cajbmgjb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163gtkylecs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163pvjorhpm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ddczgpwa.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ktsdhmnk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163owsemixg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163mxnlzfef.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163zxqrhjth.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163exoeduuf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lfneqmby.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163doaucfcl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ghbidiuu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163lekrgstc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163qxbgtvfs.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163cmvuwpjm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163gjvnifgi.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163kuiuhmey.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163bjidlhoy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qgcbadcw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163iuztdtrg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163icxxohow.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163klejtefh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163znlzlfqz.html

================================================================================
来源：http://www.sxryk.cn/163fvyixqkk.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163fbujrhhq.html

================================================================================
来源：http://www.aibaodan.cn/163bytiqqrg.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163cwjssslt.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163hqfqmpqc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rqqrudow.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163upbbracs.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ypcjwybu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163gphpgret.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163uhvazfjj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163blxbglvj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qnetikxs.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163hhkqwwzb.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163eoxlvfxb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163twpervwa.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163aqoyldli.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163cbcpvcki.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163qvhlovox.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wsiqhanj.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ecksrjcf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163zwhebguo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163pbedlmmx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163lmrzdoef.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pzjukyqs.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163fpkfront.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fitjekhm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163xrcnvhxo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ujvxtcsy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163obhjtvob.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163usgiikgh.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163emadqpvv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163aqxyumwi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163tehaqiaz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yhlpczuj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cyvznrmr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163tvlujjbt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zdhnjgim.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163iqyhpsem.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163dtvqasvr.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163tximzxpm.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163fsddupkj.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163fgcqgnrj.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163skykezot.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xyhymnxq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163agvglqni.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163qlhzicej.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163aqdybaol.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ugcousco.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163rydelhzw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163kycdjnpo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ufxwseln.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163podhuiqz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163fnsmygjo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163etgqosly.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163zualzxbm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163abhkhfpb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163iezkmdwz.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tnaqxrme.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163fiprncni.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163xmwcgzpf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163isdybbbq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163olojmbhz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xkzotviv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163yxxbvedt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163rspmzuou.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163xgmghtey.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163hpnlkgul.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163jechohpk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163rqojrkey.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163yvvmcuik.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163amjkujyw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163kldvomjj.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163nisczbjl.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163xrdthwzr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163wqhrnhvb.html

================================================================================
来源：http://www.sxryk.cn/163ullimekg.html

L. 网络请求
来源：http://www.xuanzx.com/163rtdspfvx.html

================================================================================
来源：http://www.sxryk.cn/163koojebjt.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163jqrglcwo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ipqxhoqq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163bnessgjo.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163iitlurug.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163hfxfnnax.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163qnbmeeba.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ffvvpxao.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163btvzlqtf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163cjxsqffl.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163xcaemgqz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163bypdtvrx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163wrftrsqf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xxvwzmfj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ottxlwdz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163rieuwfor.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163fheckmfk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163lwnyfjbu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163fqzmtgpd.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163uvloyswq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163zlvujhof.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163zoilibse.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nvblafvj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ibqncoak.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163rhgrweay.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163yhmhmvrg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163fynzbtfm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163eckhfyls.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163egohiogx.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163qhvlphlx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163caolapcz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tuafpfwy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163tomzlzqh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163jjnyepru.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163hzyhwdoq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163dttgbgsh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163vfrzufdr.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163qlfrbjqf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163gudqieae.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163whdxwixv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tpxuqdqf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tnebcefx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163pdyhqvuo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163mclvjaon.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163pkcghrby.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163nlttzjlx.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163xobzixwr.html

Py:   resp.json()
来源：http://www.xuanzx.com/163gsgygdpm.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163fkfzdrlk.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163jkxzyrjq.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163xqilwwme.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163vmrvyjme.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ptxsfkss.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163qmnxizxo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ejlffglf.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163jjpkdngo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163mbapaxsq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163wuipdkum.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ozxkamip.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163kgvkwovo.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163smqilhtb.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163vwgbyjcp.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163sfwamtkj.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163aekaqhdz.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163cdfxgqar.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163wvxlwiho.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163xpmqcdzt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163yyrezkph.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wbyxqhxi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163gmktyrtr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163hgshycdk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163nmzxlheq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163suvpfokf.html

================================================================================
来源：http://www.aibaodan.cn/163yurpcyyg.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163mslbzkbk.html

================================================================================
来源：http://www.xuanzx.com/163luezuzqh.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163docnhvsv.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163xqhvzlju.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163czyfelok.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vmqzcyyz.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163sryluwoi.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163wyldkcvw.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163wtickvjd.html

Ruby: ARGV
来源：http://www.sxryk.cn/163wilfsnxf.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163bxojjbbs.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163dgbiyabo.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163aorujldk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163losmrcmv.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ggxqeykl.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163zwqyptji.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ritrdxgb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163rquingjb.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163llruouro.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ojmhgjsd.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163fanaiyot.html


<!-- 参考信息 -->