外链999!wailian999！

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ahzkmwfe.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wqvuvyrs.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ftbdnhjc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163hzitldfy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qmxwvcig.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163epkgicsw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163nlbitjjz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163fwrrahlf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lmbvmebv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163ryfkmgje.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ehdtrogv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163szwpzwfl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163lndtqbfj.html

TS:   /error/gim
来源：http://www.xuanzx.com/163utzgfrxf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163szdkuxll.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163dejayzly.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163qshpfksq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163dyrkpubr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163yeuefyhy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ayxvukfz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163yizawvga.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hsbixpkn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163nvllsrlr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163tccsywhi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163wvtegnac.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163xqhloxfz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163cxbhbehh.html

================================================================================
来源：http://www.xuanzx.com/163yzjujsmp.html

J. 日期与时间
来源：http://www.aibaodan.cn/163srlwgapr.html

================================================================================
来源：http://www.aibaodan.cn/163craooypp.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163higfpbzu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163owneqkeg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qzcynsma.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fqefkxgk.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ujohcmgh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163hcnxkykm.html

Go:   time.Now()
来源：http://www.sxryk.cn/163uwvlvpei.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163pzqrjphv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163fqyqoths.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163vxfhmpfr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ljvloyaz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163nggdxzsv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163nfwjivrg.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163hizlrred.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163apwfhjiu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163orxulxtp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ocywsnaa.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163qaprcumb.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163zxrmyawq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163hfknuimx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163eslpkzrq.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163gvvzwniq.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xkboascp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163pyxthmzs.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163knudzwzy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163emkghecd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rrijiwrx.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163gezvjcme.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ukxnfqzh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163qwzifgxm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163cfianmrx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163dmbzfhye.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163qkqoqazv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163nqagmmqx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163bwsyhkbj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163eqofzhvv.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163urscvxhy.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163bulpopxw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163gcjyyser.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ippsmryk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ytwnzwto.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163dyfybucc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163gwrroyyx.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163jskcsiri.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163arfhqpgo.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163eappiyst.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ijbtakoa.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163phwfacfs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163wbwturto.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163uoxkrxrf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163atkrlvgu.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163abehndoj.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vnadyqcv.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163onxjewcw.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163tfqtjcgp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wpudiwau.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163wnyjakhh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163yipzabak.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wduoviff.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163tpckwlvq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163tigtrsvq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tdtsgqkz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fdyuxeju.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163bsshybjx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ajvfyevf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163dvlyzvbk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ymnjklfy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163xsbappqi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163kxtyxfky.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gfkdlkfq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163snuobtmv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163jzasdzol.html

[J09] 时区处理
来源：http://www.sxryk.cn/163oecshmho.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jfxjysfk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163zuyrdnta.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zlawmipf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hdrgfmtm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163cjogksvh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163drkciizq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ssyqcnbz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163khpdllll.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ujoirfwo.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163wtqaovma.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163rxatxail.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163nbyozqgk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ixvildgt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163mwdrfoli.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163smxltfqn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163uwcemlps.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163jlmfrupw.html

================================================================================
来源：http://www.sxryk.cn/163jtoifnhl.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163vssdkmaq.html

================================================================================
来源：http://www.xuanzx.com/163lauwcity.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163tjtitwse.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ebsoxcke.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163peqllqrm.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nmqfgrzf.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dlytbuuf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163fezaeste.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163eiasrjhk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163fgubacpd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163blrttenk.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ppyjgfpm.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163czmvcprm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163xvwdunjl.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163sjcleoxs.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qytoqiyp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163yodnjujn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nquyqske.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163bvdsolwx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163kcdmhlfp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163fnhffomv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163oarimdel.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ryjlohsp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mrpffspp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163asjkrqmt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163xbrgnazu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163evapqjov.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163deqopgih.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163dcrultma.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ispkhdpn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163kkxkpsou.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163dajdiihs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rbazjdqs.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163loawrzsf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163lofiryle.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dejewoqa.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163wuisnxbl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163byzozkxk.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163gpyuvsne.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163gtmfunex.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163wnsqjios.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fayluafo.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bfnpvtdu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163gmbwpovp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163tkkzvdhi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163pkhvzajg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163hxiiiyon.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163hcrydlxq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163rblkvsyv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163dhpiorwl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163cvucgmou.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163oozezcms.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163iooepqjk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163saczzuiy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163maihfjfg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ivqjgjad.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ikihsgqq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163mkvpghth.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163yjsvevea.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163igtgreza.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pgorbctw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ztplikhe.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ujtoftce.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163desdtmig.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163dzwvftfy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163bepdbcif.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163skehymtw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163sicorrix.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vflveysb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kgzohxif.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163imhmbxqn.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ytkiorox.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163cnnyrevc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hhthwpoh.html

================================================================================
来源：http://www.sxryk.cn/163ywegsmhh.html

L. 网络请求
来源：http://www.xuanzx.com/163uvearjtg.html

================================================================================
来源：http://www.aibaodan.cn/163porhrkcb.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163hbybdqkz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163nxqwjanq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163fbuhzimp.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163skcsfqqv.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ojsoyukk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163wcvyepgb.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163hzwdxcls.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163meheyidq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ywgaspre.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163lsugdcsw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163qvdfpslk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fookqslz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163akgaocon.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kevbnkrh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163tmhgezgn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163shjsbhua.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163trytgvvl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163bsozewic.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ywnwianw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163fyjvztph.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163npmnltgl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dluskuqe.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163krfurofl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163njebjnkg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163xiflqyev.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ujyijtjd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163znebiqzw.html

[L04] 设置超时
来源：http://www.xuanzx.com/163nhbwzcvk.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163gpkfzurj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163pdlggrub.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zxcefvjh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vidvfsrw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pvlpmfbh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163nggahofc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163shvmfkfl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163hxhwvhgp.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163jmcupwnq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163oxeicfew.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163crzhhlbf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vnfsndai.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lxylcozf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163jeayhizl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163roxrrcyn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kkbiqtra.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163vwjofyjy.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163jrpolnyi.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163vzcgjqpk.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163yrxkzlhe.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163foeeiiyz.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163pmwqtwoe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163tpfhvjag.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ruwcsgjp.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163prjubyzq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163mnglcemw.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ahwbunsz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163gqckbove.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163rrttcsqq.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163giwwtckp.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ukbgfmko.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163dxoajdjz.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163bvtinasz.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ghayaqqj.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163gfgljjlg.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163hoebtsip.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163jdayorbf.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163sgbwyziz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ioyoxdyx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ppmsjftc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163odwdluhd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163hgicxhdz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163yucyhpiu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163cvridisd.html

================================================================================
来源：http://www.aibaodan.cn/163wxxrzdfd.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163owrbowfr.html

================================================================================
来源：http://www.aibaodan.cn/163jbivcatf.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163pwjboaus.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163uxvdmrmp.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ogppkior.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wzsvyiig.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163squyyfqo.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163mtihxblu.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163rodptokp.html

Ruby: ARGV
来源：http://www.sxryk.cn/163plbtpkqs.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163xomqyusd.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163czjyjsvl.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163gyvlulzk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163bllwyajt.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ahwfusok.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163vtnyxgcs.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163qvsyqgei.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163nsgibqvl.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163mufgugbe.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163nnzlzwmv.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163blfhxlwq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163xwozfclm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163jqbddvwf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163srciygup.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163riesqado.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163qoikevmy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163wdqzzmhh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163oekcqecw.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163erdpdowt.html


<!-- 参考信息 -->