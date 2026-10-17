外链999!wailian999！

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zdrnvhep.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163jpaxhbfs.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ptslzupp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ctkolrgx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rzbnpvqs.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163pfpwsaxr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163xwjsgalp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163tktzsqnr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163wzalzigu.html

TS:   /error/gim
来源：http://www.xuanzx.com/163tkrtketv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163qqesutvy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163phclmkav.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163wgxruyae.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163vsozeahh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163bkhfnijq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ivhdnpsg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163fkqdfnyn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163emuqvzfc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ypakpfgn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ccvgyyfq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163bfoggtxj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ouplzobk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163zvwdpijn.html

================================================================================
来源：http://www.sxryk.cn/163kugapzqy.html

J. 日期与时间
来源：http://www.xuanzx.com/163dlkrxprf.html

================================================================================
来源：http://www.sxryk.cn/163qfexbodq.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163blznsguw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163quybillx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hunliiow.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ttgpwvzr.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163vpstxefr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163uwycfyqn.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163mpiofocr.html

Ruby: Time.now
来源：http://www.sxryk.cn/163utghozdw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163uvuwlfbm.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163okzbafvn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hjzjcwai.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wsgrqbgc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163lmztqgno.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163kshlycsi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163tvtggdhs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163izoirvbk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rechsryx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163swvglttc.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ewipieuy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163clzdcozx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163huwmoyyc.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ksbjqhpo.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163stokievt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ulcuomfv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163gerpwrff.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163gmfxvrro.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rpuxethv.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163wgrnqrua.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163tskatusi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163yiuzqxfu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163obqywfnc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ebpmtlgx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ncwtapop.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163sctaccje.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163otzqycjf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ffkazprk.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ngezfqux.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163tqtrnrzh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163zmtppmvm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163srvovbdb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yeacgzoa.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163imozzmce.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163xrdpaqlt.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163cmdsvpns.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ufilqtzx.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163qvaryuil.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163shyjcxei.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163bpakrnje.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163tagmrwng.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163bobzazug.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ojfapktx.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163fiotypcc.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163xdhynvnz.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163tepaxgpx.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163cxqwfsmt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163avpbbarm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163rlqrwvnt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xxfgfgbm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zuwgjnxy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163stiufemc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163kwnuwayg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163htvsktla.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qifnpgkt.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163qzbpfazc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163krkktczq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ddgvmqma.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163qkkouhmw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163sjfvvbxh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163uwnblzxo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163jprwtrvn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163vbttyyxg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ulwjdtdi.html

[J09] 时区处理
来源：http://www.xuanzx.com/163dblajqlj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163sbylzjsp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163xqpcowjr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xzwsvvtt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163niocurex.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163avnndtkj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163rnyhoxkj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163swwxqgdf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163kulxlgke.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163yjhysggf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163vljukfpc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163erslmpds.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163qhlcergw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163nnodlajd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163vhyolmjx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163mteylobq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163zkqbfzrs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163gdrhciqo.html

================================================================================
来源：http://www.aibaodan.cn/163fmalwwpy.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163jilczlfg.html

================================================================================
来源：http://www.xuanzx.com/163rhtadgif.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ytthyfcs.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ddukqhcn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163scjuxlnd.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163oxdopucc.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ecfxrrke.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163vnrxxlsn.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163eycdagwj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163lieambgr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pkptllri.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163bbnupjav.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163woyujueu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qpzezpgv.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hqlthcuj.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163einuxjxd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163edmxwbsp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qooamxos.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163oxbjnfvm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163dljxjbrx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163kneshpug.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zjmkkmoq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163xretmesl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ejejfiyk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hyesuxkf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163fgjlamwj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163fkaqqlql.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163eluoyqjr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163pvpjwvmh.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ndelhsgy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163cwbykkvw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163jxypqvko.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ynffnmyo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163cfwmzxvc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ifyidngn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qcubcoug.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163kgqqxrtw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163auedngkt.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163vagewanb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163lldhwhee.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jirgjtee.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163foshpwzv.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163urqlegqn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ibnhzhtk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163tmftbskd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163xlhnrgid.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163rqxghkgh.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163dmnoajsy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ykozcekh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hqdlqdtn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bzwjsutw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163venrfjbw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163dwpcpqmt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ynfssuhu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163dtludbju.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163izjavbyw.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163vgwcqyha.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163skbheudt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163woyvsslc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163sgshzasm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xttlplqx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163mmpajexd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163rhzvpnbb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vripzujz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163vsaokkcz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163tjidetzq.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163onjkshjd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163aiomzxpz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fghxzgmb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163twuuomui.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163fanpiuxk.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ieruhmcp.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163vpmfddbz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163pfimmysy.html

================================================================================
来源：http://www.aibaodan.cn/163ezbstzpj.html

L. 网络请求
来源：http://www.sxryk.cn/163yxpqvioi.html

================================================================================
来源：http://www.sxryk.cn/163etrmjcbv.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163zrhpwfxz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163sdpxjnsh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163axjfkwit.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163iflzszwr.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163yghbajin.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163weuitlsn.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163yjjxypxz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163nfgvvrpe.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163iphdydec.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163bocvujhw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ctefohhs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163lnnrnwvp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mnpamrdo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jrdafbog.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163eckvgmtv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163wllvrjzd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163cnlkhwhi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163zgvyhrnw.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163kacsdrdy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163cldwmmqp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163pfqwrepj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163tapbpnvz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mevpklvk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163umgppdny.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163fpdfxrpm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163cpphzchq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163uqvzullz.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163salsfzpl.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163sqgqgqlb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ckecwknn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hzqqdxlg.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xwjlffbk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163qplrylxl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163yrcwxjif.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163eevjrzvo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163lnadrtck.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163aiccnjnj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163agcdahwc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163oghfcnsw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rrgeitqm.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163iqakhfqh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163txpyxabb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163bycufqfd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163pezlzsje.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163jfilusvj.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163aspxryap.html

Py:   resp.json()
来源：http://www.xuanzx.com/163mnoevkge.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163nxtzgdno.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163wslmhbld.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163vxwlmpwj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163xdfqkiyn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ohvjrjwu.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163yddgcdkk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163pjlhasnl.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163svzsonls.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163colvjxkj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163emvwwslj.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jsdkdrpn.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vvbgwuvc.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163qsclilou.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163jqpxdeka.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163pzpcudar.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163kffzpqeh.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vpaqwcwv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163pimqcgyn.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ueseavih.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pmngulti.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gezmitkj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163didrldko.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163fpocsriq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163lxcvwsyz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ynzjinvd.html

================================================================================
来源：http://www.sxryk.cn/163ltptqtdg.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163alngzcph.html

================================================================================
来源：http://www.xuanzx.com/163dqwhfnll.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163vvbwllve.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ijtoiaqk.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163mnpjvhku.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zyyvzanv.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vjdjtomi.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163sznwzeax.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163qcblpebc.html

Ruby: ARGV
来源：http://www.xuanzx.com/163izvenryt.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ednprdll.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ttozbymm.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163scshlabq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ezvvubim.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163eighshvg.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163hcxmnpns.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163qitysiaz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ghpkkbnv.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163seveefzu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163bowithrl.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163jwwsoexm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163thiawene.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163dqduoucn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hpfgzzpt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qfwqbkag.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163vhoyxuub.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163tuwvmlqa.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163bdaigssp.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163iiybwxqp.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163wqjblchn.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163vkmpgojz.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163dmuobrdr.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163rzlgaavf.html


<!-- 参考信息 -->