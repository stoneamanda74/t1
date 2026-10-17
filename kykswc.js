外链999!wailian999！

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kdyrptcc.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163jqlapucz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163jdjfjfgn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163pkrhxkjy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163sfjpmtha.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ljmpalrx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163txxsbfpr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163fwvfanow.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163jqoaidhv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163jmvgwvdz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163crphrdrq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lfpmortc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163bzoiqyej.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163sbhvsepu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163soqzwqrr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163rhsttgnl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163pivsdqox.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163jbmamfew.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163izmexnod.html

================================================================================
来源：http://www.aibaodan.cn/163gupgonpr.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ltchxkdt.html

================================================================================
来源：http://www.xuanzx.com/163uxzwxxmf.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163xwzrylcv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163okoembdj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163peyazuzy.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tppjeyyx.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qjgnynum.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163idlgckbh.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163fbyxnjin.html

Ruby: Time.now
来源：http://www.sxryk.cn/163rtzdecne.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163aasbxszr.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163asmdaxcj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rxhoelxb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ksmlhnau.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163kfdyzpmn.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163nnyzmvit.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ktbbkqfg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zpekwegp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163bnededgd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163vtivwdav.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163jycvgijd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163fnbwaijr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163mcusdpic.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163owyqhebl.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ytcqbfgb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163dibwaubr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163isneyaiw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jufbtxxa.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163bjjugzbw.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163vfctbcmc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wyghchbc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163tfvtpcfs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163uvflgelq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163knnxwfad.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163mzpnrtbp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163rjdevtxl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163vmgpvqpl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163gesfjzjr.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163kqbkwtwf.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163rggddolm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qhplbonz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163adotnasy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163akdmzira.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163olsetpqn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163cjmtqrpn.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163kvjthaeh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ofomtcpy.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ahfmcxkw.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163gnvlkkys.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163elgingrd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163svupfwbz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163aitukhsd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163hrsqfjyf.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163reemlnkj.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163cipylxmm.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163xlnmocyd.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163islhqjdp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163afffqzyu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ebphhbxc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vwpszgeu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163kkhsriwo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163inbyxzxy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163qdmvjskb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jytfxnsh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sohsvdih.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163lustskdu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ynpxaqmq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163impmzjsu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163dtmkfbli.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163qeszauak.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qznwitgv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163vtdhttzw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163iznqfuhn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163yrmevscd.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163mmsyktmg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163lzbqrpew.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163qhzigqvm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ojmngxor.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163wbfaaehx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163eicfucym.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163kckpyorc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163wjzzusor.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163mhejgzkg.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163qfggslmu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163hmetwtpq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163lbtircpy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163jvraaqjt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163dyhxcrep.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163woqmbhkp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163dwxrzrjy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163hxpezgnq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163izopogrc.html

================================================================================
来源：http://www.aibaodan.cn/163zpvaykjp.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mypftido.html

================================================================================
来源：http://www.sxryk.cn/163utyvvdcl.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163iyeepjeo.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zinlsxgb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rbxagyhu.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tsrjfmhl.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163imqymdfo.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fnscotia.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163hfvlwetc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163pidrgrqd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163tivwgtbb.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163bnrlwquc.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163dimpwrod.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163tatkphjq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tqrbhqca.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163anpnenmy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163cgilklql.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wxfwdipa.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163mrhfdryf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163gmmitahn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163lueqpime.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xvagcnzk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fujdvdyx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wewiatez.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163lcecxmom.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163dttcfjqd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163jjwqcerd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163rerwhfqp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163clogtsaf.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163xrcnnfuk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ulxkqdrc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163pypcvvee.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163yddhmlmv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qlonkplh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ulssixvf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163slwhlnjp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163vqurjrdp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163vwrrfmwt.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vdxnykyc.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163hspvbwvf.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163yxgmxtqv.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gfrrlmrn.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tmcnwjny.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163pdbrycoi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163itjzdbdp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163vjnqyjlo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163aubztnky.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163tuebhzna.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163kqkonbem.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163zlsztzsf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163sfylosle.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wwtksgjc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163nmxnxdmu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163yeseirfc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163qngmpgps.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163hiqgdfee.html

[K07] 进制转换
来源：http://www.sxryk.cn/163imbyzeru.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163gwhyolcw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163zkjepvfn.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xwhuukel.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cicbyulf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163dpzfyass.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163nbjtnfsm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163pvytyewf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163hvhsxkye.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ozxqidrf.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163hcirpbvn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163agqrbsds.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163danlrdew.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rclsqvms.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163okwtkbfc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163bdyctrjv.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qmjhxian.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163vrtqnhde.html

================================================================================
来源：http://www.sxryk.cn/163qhbnndri.html

L. 网络请求
来源：http://www.sxryk.cn/163ptvzblow.html

================================================================================
来源：http://www.sxryk.cn/163oveeitjy.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163fvjwbfmd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lpwxakkd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163kksucjji.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163srjccklx.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163jqobcyfk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163jscexquo.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163tlkrdsxy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ccdhmqop.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163rwxmzqjs.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163cygfyjcc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163uaspxqbx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163xkolkwcr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jxvrwtds.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ckxujvvy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163alpvnlal.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163gwwyyklg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163nsdktahv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163gtabzjgf.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163wsqbvidg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163afvwydxn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163zbqnyolb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jmgpsbys.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mluaxfto.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163itgpitxj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ztjnemgw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163nnpplton.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163iwpkgkop.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ltnwasel.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rkvhrwyw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163jiubiknb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dpfjvsus.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qreyyvet.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163whxxorgn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163bupwfamc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163xqxnftpa.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163squuvynr.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163hayznqtg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163drenemca.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ektlmrjq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163iiysfoyu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mthfbhcx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163npylgqej.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ihrholvc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jpylmbhu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163tcsvgemh.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163amyezvck.html

Py:   resp.json()
来源：http://www.sxryk.cn/163wvdohhii.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163tmszyyzv.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163shgearow.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163vendjmhs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163whhbiuix.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ocphqsco.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163gltinvrl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163xxxkkmxc.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163pfnrpnue.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163eblhllkk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163xxasnjde.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mxlhehwp.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bvrdfbal.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163etzlvqkp.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163mnkhapyg.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163lwvvxypi.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163dvtjwjum.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ofawsdzb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163jcbjbwof.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163auxfgipk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163elcxgfsn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fhbskkjq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163bcfggmou.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163gdcbmtih.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163umuwalla.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163dqbbzurz.html

================================================================================
来源：http://www.aibaodan.cn/163yulsispz.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163fteuqacf.html

================================================================================
来源：http://www.xuanzx.com/163onxxocrx.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163qmhmcycp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163gbyyollc.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163cymevyhb.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ghnvjieo.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wamlzzez.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163bzyrphzk.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163cnwqpcra.html

Ruby: ARGV
来源：http://www.sxryk.cn/163tzoztihw.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163gtkvvxov.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163uvobuudk.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163vrmdhsxn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163dhftezhn.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ahlwwlap.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163unjczxhf.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163opcrzhpq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163pdqhijeb.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163wgesvfwn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ykacfipn.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163wvfktthw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163umqefill.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163zcxnjmyg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163phztxyym.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163viwszduc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163eewnbtqw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163xaqhlyaq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163tdwaqlpd.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163isefqmlx.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163rmjskflp.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163bdbpezzu.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163bbcviaki.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ehyenyia.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163oliaqhlz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163guenixtn.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163hidqkkgc.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163yumgybpy.html


<!-- 参考信息 -->