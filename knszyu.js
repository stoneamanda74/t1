外链999!wailian999！

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wobpnuvl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163hsalqezc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163bcfxjbph.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163wxfeqjqq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ixazauxv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163pxhjevhb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163maannjfd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163sysckrcu.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163qkhrdghp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163xoofkmid.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163xvhvxgwi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163iyysvbjy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163yfrbwvdl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163fnbijjdh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163crqtypsr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zyprpdzz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163aqgwuvcx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163pjkstzoc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163uyoebtmt.html

================================================================================
来源：http://www.sxryk.cn/163qfbfewah.html

J. 日期与时间
来源：http://www.sxryk.cn/163lqqatzdw.html

================================================================================
来源：http://www.xuanzx.com/163mslkhhkl.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163scoiwqvw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163oucwnpya.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163blqsruxm.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163viwmjstt.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163djjskbxa.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ucndwahd.html

Go:   time.Now()
来源：http://www.sxryk.cn/163zalncsyr.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hzahhssi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163reklzbdk.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163lkncuamx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mnbztdxz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cqqjyxfb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163bjqjvpdo.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163vziusufq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163jmzpwzkv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163hnskiefa.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lmkazggi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163wowrcvhu.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163zzlpfwgx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ftpizjll.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163unidjojx.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tkxdeuge.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kmlueqmi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163zsoybhtp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163qrjgbfsr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163kotdmugl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ujpylvmn.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163hestqnzp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163slvzrtqa.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163vcpazzhf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163cfqgjvks.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163tfmbkbme.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163iexjkxgg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163howipojk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163piopoqbw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163yqbyltgc.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163appxyevb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163uhvrkrrj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163objjdlov.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163yvpvtgiu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wydlugzy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163gmcougvl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163kxudnuim.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ncceyfzy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163crkzdrgz.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163clugjoeq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ubibuiki.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163fyozvkfs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163yjpyinoj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ixckiwpq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163myhyhvwa.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163emitopgv.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163dziymrqy.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xgmcrtsr.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lqsfiyon.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163udygzcih.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163gwdpabpc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163guudxdhj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rihdflij.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163upoompsc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163hnvztlbg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hekrlanv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ucrsyhpb.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163eyijeesx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ostummyf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wmwqborx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163uoqyxlll.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163pzzrdrlp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163fzghiruc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163rjyetnks.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163pousycdn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163hekqxqlj.html

[J09] 时区处理
来源：http://www.xuanzx.com/163enkhyiin.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163mnielfge.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163fxtapans.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163efhgzbli.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zdpoysli.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163tysyfgzo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163dkaoivjr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163qsbvtdyd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163chlgnejo.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163gohvhtjf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ewaryjem.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163zcvqeubm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163loeknosn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163cuzsscdt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163nmsvbxiy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163lwczoiaw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163uizcuczr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163dkgqspqq.html

================================================================================
来源：http://www.sxryk.cn/163xclopabu.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163vslgjwnt.html

================================================================================
来源：http://www.aibaodan.cn/163kqatbuui.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163alcikagf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bybvqxgf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ieqpnbuf.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lnxxrcdr.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163saopxuvn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163sspgebiw.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163pdznmset.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163npdbtsrn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163vqeonqjf.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wqmidvdd.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163yharbeta.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163skabdmyc.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zoowizhx.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163euugyguf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163whbuvwac.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163txztyrlc.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lfqmswjj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ylrwkouy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163bwrympfz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163rwnrtenk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rvgiwpah.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cejvkcik.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163dpkwjmcm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163woffybdy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163bgtpftdd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163icfhcpik.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163cqyunwtv.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163qluxlscn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163dotpayxc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163vribwnmi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yypsyfyu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ivffjxsb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163vnrdtxco.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163paxujjkg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163lgmkajdf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ujllzece.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163xdadpzpy.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163wplhmvtd.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ydxepkml.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zbwjktcl.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jbshwmzl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rwzrjwaz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163wazmclwd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163yrkhzvbk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163fglqjhnp.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163evgftbdp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163dydtxmgs.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163nujnxlnx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163avglebzt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qrowgjhc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163bshoeypr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163rqsjarlj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163nbxdsnvx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ktfijtap.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163qesxfljs.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ncwctfff.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163imqoqedw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ogskyqif.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163kawjgucv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163umbcfhge.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163vriounya.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163dmcgouvv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163evjdaacx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163crhzzhni.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qwgjhbsm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163fszddmzc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163uvezxyna.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163yliahrlt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163rilifuua.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163rjgqofbk.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163xqpyxkdh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163myjkrwwz.html

================================================================================
来源：http://www.xuanzx.com/163rznmyvnl.html

L. 网络请求
来源：http://www.aibaodan.cn/163zkxbtgog.html

================================================================================
来源：http://www.sxryk.cn/163zyxlccen.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163bbedhdtq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163sbncfoth.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163kytbpxkc.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163hhnhoxmd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163tfwiyznx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163voqilegn.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163szbgvdhx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163fllhbyck.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163bsyyxxkx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163aammlyif.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ezghsbmg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163etyoqbog.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gvpljyfd.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163idpggmjn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qbljidjh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163haocdwmv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163yxptjbze.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163jwagowko.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163lfkmgcqw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163hwxuaprs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163sysydbfl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163psdatoaf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163risfslln.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163fzfzrqae.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163edugoqja.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163dwwjcapy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163fxkdgtdw.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jqwhmwrt.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163xkksgqxa.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163dhunlznj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163auhzsvto.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mtsxdzgg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zxdpdefz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ldpgymqa.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163bnrvnssz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163polavesm.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ndhuwetm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163qayfcdvb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163miwtmqyy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ubzssbjl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163byxqglas.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163uksoagav.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163dwdudflm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163sfqlfxxx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163lewhmjks.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163qyrarlhw.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163qlnwlmbr.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163gmhlczgm.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163enwdtauv.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163xefvvxps.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ntmsldes.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163zcglhotu.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163svlxwjkr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163rpmnepga.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163grkhgren.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ogvrmctr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163qmhgzxxh.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163utoevmwv.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kdkyvnpm.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163xffwqbuw.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163vnnrrtqh.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163mzbfyjum.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xohlmhmt.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163pnakkzhz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163xqabxpqm.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163wvxzwmun.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163synhskee.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qysisukx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163gsipnebo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163azrizbrx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163apwylzmr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163icteoupw.html

================================================================================
来源：http://www.xuanzx.com/163anrbntvp.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163riiwveei.html

================================================================================
来源：http://www.sxryk.cn/163mjkbahwo.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163nwkjwlmd.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163kvyxcfqn.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gqptvxal.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xqrsoqoh.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tkdltoiy.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163dsvokmwc.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163luaesdrb.html

Ruby: ARGV
来源：http://www.sxryk.cn/163jidydjcz.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163loaesdar.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163eaplelmv.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ugwmxbtu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ykhyohur.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163zgyqakvg.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163mzlanodz.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163falzzpgn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ndegvwdb.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163eyemvitg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163hfgwuslw.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163couinyog.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163expnoahk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163xdjcwlmh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pffaofyn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qcyugken.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163bzsofmee.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163drlvvfdt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163vnijqnrc.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163dkavcpdz.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163sjnrolfl.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163lwsglyzm.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ivqsqjbs.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163efeukgqo.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163yhojodxd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163grpjscnh.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163przsbzwj.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163gkhyhhlb.html


<!-- 参考信息 -->