外链999!wailian999！

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163twbnylfo.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163wupbsbpi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163shemuiio.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ifdiprje.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163kxvizrui.html

TS:   /error/gim
来源：http://www.xuanzx.com/163wyvmhrif.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163neiryvrv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163nzrayzdw.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163hejcwkck.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163xffydbop.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163qgvnauxr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163nszrnzml.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163trctqpnp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163iwfaogih.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vxbvdgdq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163mkudjqfu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ijgretew.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163quhaitoy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163bzuuehrh.html

================================================================================
来源：http://www.aibaodan.cn/163imjgrhsw.html

J. 日期与时间
来源：http://www.xuanzx.com/163kbzkqnob.html

================================================================================
来源：http://www.sxryk.cn/163ihuobkxo.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163wfwffuqz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163mbzfnvku.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ikxdqjxt.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fgxvbuow.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163bkpdlpkh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163jyrzxamr.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163lbvzsskz.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ygkyfauv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163vqtjjmke.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163doxvwivw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163uvvxpppr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gedcstnb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163izzshfcf.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163cluuanib.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163xzclfwia.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163cisuklfw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163eoldfkkx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163exeptbbz.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163szziyhyg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163lnicwerw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163yweragks.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rwvyikdr.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hzpzodnf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163scdwdbgm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163jkrwhggs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163qrmanyxs.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163mvajqmyi.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163bejzdgqo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hviggncw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163nuzjrkce.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163xcgwxuax.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163zjzmwhaj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163rjgphuao.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163bqfusyag.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163khjbjevv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163peshqhar.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163btadlyxv.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ksyqykjg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163mfxncdnu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kuirudhf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ylfdszef.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hbbkaiyj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163rtlpohlq.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163stpfqogc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163etordbex.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163bpftwsjv.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ugotnlls.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163zysuztsx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163mjlkfawl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163wijdegjs.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163urwlenbv.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163bzqvlnyy.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jgvhdyyo.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163dsojbwdl.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163zdulfvio.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zjvfovid.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163axpdimwb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163udmgizeu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163koqgpjxo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163hgbcfgsd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xrizscdn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163htxrqjpw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lspfxjcm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ltebdblw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163hbjshqui.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163dwolrrgh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163fvjdjnsa.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ipaagtvq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ovblwcez.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163kilbtiri.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163uaexjsld.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163gewutlyg.html

[J09] 时区处理
来源：http://www.sxryk.cn/163uabrptss.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163srtcdtvt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163gbrtmqhs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qwpgnpqc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163szsffoqb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163nyijztud.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163cdjzcnqc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163uoygftcl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163uqivfgvn.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163uvuxmhvm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163vefhtmpv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163vermdrbv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163fgvdioqp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ooiagmel.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163eaoxalnf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qyonhiie.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163psfoysvo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163yljmihbj.html

================================================================================
来源：http://www.xuanzx.com/163odrflida.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kexffkzw.html

================================================================================
来源：http://www.aibaodan.cn/163mhjqdvrm.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ypsmtgyn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163mwinglbg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vdfxznyy.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xgqiyehk.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bdjuaecp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163abagqgpo.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163osykvwqj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163yvdxzubn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pvuneoxc.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163icdakmse.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163hzcqxhsk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163qddficei.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mbbqfpip.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lsapmrxv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163eakjqbsp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163inltblrz.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163bocubzoe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163bqpwdyqv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ftrwzaym.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163lhbylkcl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163fatqctno.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ksrjlpmt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yyfdtkyh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163iguxlgns.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163sfxstnbz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163fssacdps.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ejyyhinc.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163kvrtinsj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163txfeebvw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163welgtjbf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163prrsytbg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tilxuldw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rqvkcmrs.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nvffypyj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163wszkpdue.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163xshitgtq.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ccvescvj.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163otfadbmk.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163icvbxlmj.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163aijcsqev.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fudraewz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163uushiize.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163vibhsbci.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ddqozjjm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163plrsqgcp.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163fqphiyey.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163yxajmjvn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163btxancdq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tzvezopm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kvyaykys.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163fvxcsipu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163gzrhffnr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163gypqtfos.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163hgevjdsb.html

[K07] 进制转换
来源：http://www.sxryk.cn/163yqgyzsso.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163fnbzmnkf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163djvdzzav.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hwohxwns.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dteimoel.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mxlehvhf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163gymcgwpy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163lmyprgeq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163glygrcus.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163cdpsbuel.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163rzsqmluw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163iqtoueoz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163txceegip.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ivvaxkul.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163fcqxntku.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zounxilp.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163jgyaqujc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163tfbwkjoj.html

================================================================================
来源：http://www.aibaodan.cn/163kwpeiigx.html

L. 网络请求
来源：http://www.xuanzx.com/163yearcoge.html

================================================================================
来源：http://www.xuanzx.com/163fctleopb.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163rupxqakf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163yyynnirc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163rmcbgagb.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163trbzhfcs.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163wmxomazl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163fbrjtkrc.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163rzywllev.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163fbkhemyz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163pkfbujnn.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163thklzoqa.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163lknaoskq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163xeevcdrs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163pmxsjexh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qjgihhoc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163iqiqnwgn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163zfsettea.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163xsqsvfhh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163vfiizfyn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163emppmgpe.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163fwcbukdx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xjcaqnjy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bplewwvs.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qukvampa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163yihsbbmz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163uentwxka.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163pnuktbrr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163xbwhenht.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ctxblgjs.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163bcealucd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163nmlmndyp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mchqrpyu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lcjzqppj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163syisrsrk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163stmbjubl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ojhxdjqs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163zmmsovqs.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ehulyqzj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163vnsgkokm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163fduheruz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zipeqnok.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163iaudeglr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163mrtkjpxq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ezifjvjh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163iyqritwu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163inptdtbu.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163najclylp.html

Py:   resp.json()
来源：http://www.xuanzx.com/163vbrwsjxn.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163lknffywe.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163bgqgrqei.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163lbrblkjn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163nnyhdwxa.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163nphfstnc.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ggzxvydj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163mqnlmwsr.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163yoieuizc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163mqodjupf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163yggzskxa.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163alzjggsg.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163cscaoego.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163xkxmgtcl.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163jxlgtdva.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163uykvrtax.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163anctopah.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163cztepkov.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163jbvbglqs.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163qjxugcyu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kbipqebw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mxedfbdr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ytgffsuf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163phusrsly.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163uhnrjjxz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ugtqifiv.html

================================================================================
来源：http://www.xuanzx.com/163fkfjqegt.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163hkefuhhz.html

================================================================================
来源：http://www.xuanzx.com/163lyrzvxxa.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163vgrbnjgm.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163vwevrkfi.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mbbpnnhw.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qhjkrqig.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163epzvjlbe.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163arhmyghc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163rvxjsgnq.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163qovbyrtq.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163gyxandrv.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163aeesivvo.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rryqlqcq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ukjusdqw.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163mycayohk.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163mrqlmjxd.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ajcjdjgo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163wsrpnwxx.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ssiolznu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163bomfxgif.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163bzpdxals.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ldmwtxur.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163opgnaxmr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tbmmdgbf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163pssdaqpg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163vyozhshj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ynqberfk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163dcxkggpn.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163rxzecnqb.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163fvdylzjr.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163cyrftjce.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163sqyfizyy.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163vmuxgklf.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163vhncbkql.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163kvkcqvtp.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163rstczelp.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163mdhujdcw.html


<!-- 参考信息 -->