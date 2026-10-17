外链999!wailian999！

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jlgfjwpx.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163izlbaumj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163hjpmdldl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163tegdzxwk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163cebnaovl.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163fgiacjbn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163uoyyirkw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163sdsufakg.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163thkhbrfq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163iqkbtmhs.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163xtjntcgq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163zyrxmqot.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163sbxziaiy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163isojixrc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163igjjquzr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163gtesvfoe.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163excgweqi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163xstdveth.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163dooibvzn.html

================================================================================
来源：http://www.xuanzx.com/163ywspppsl.html

J. 日期与时间
来源：http://www.xuanzx.com/163zkjutugv.html

================================================================================
来源：http://www.aibaodan.cn/163jhfvtecg.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163vdhztmcc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ytcbrcyu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163woervnon.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xfqxgxnj.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163duahahpz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163nxrjtqdn.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163igycoeab.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163whkiuqbe.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163glhyyhef.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163opwbaaeg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ezmagbxf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163tcrfmqap.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163suobozbw.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163mnopuegc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163mymuuoiz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163hkgznzyi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vbqibcvf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163tdkreioa.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163eonzzjtm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163fuinkein.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ckisncrs.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bfdoclra.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163krjuravz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163jmksgtfl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163axvervld.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rjevuase.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163zmaigmhq.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163bvbwhsxu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ymyvwcje.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163rjaayhoa.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xvhhasxg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163mmuetnwf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163gdtnuzre.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163conkfhpl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163lqyhvwpu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163nfjihvef.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163wyadrcte.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163elcwdxyb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ibthztwq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bmqqtjjy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nzychgim.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163afplspfh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163wdqgrsed.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163nakdqijo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163brddrgqv.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zxyxdlpm.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163pohcobkv.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163kosibyfj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163tmxtyncd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163nqhqlupr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163mxmcuklm.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163zpsbffvc.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163pogviyaq.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163gaewkcjv.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163qlprgjib.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gqmhhklc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163esilfrgv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nhklerno.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163yckhbvyu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163kyzcapbe.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ygpocwlt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ccdicczo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zrvauexp.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163zhysdvyu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163bvhlypvk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163uangvvfr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163pvlodvqw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163swkynros.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ibhqctdr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163qplfqgwi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163sxlpwgln.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163nnhbzryo.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163bclhgmta.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jflvldzr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163dtsbvvha.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163bjisiggw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163wyayrljj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163hnuwyupg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163awzmmkxx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163quvhdakg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163qbcltecr.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163chznkfsa.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163tsiisajd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163rmnqsphd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163lmhaekrq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163unhorlvs.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163aibuggtm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163kcekuvgu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163jpnmzxzt.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163nuauuhaa.html

================================================================================
来源：http://www.sxryk.cn/163nitxpcwf.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163frfmjwzn.html

================================================================================
来源：http://www.sxryk.cn/163dqmcjzqk.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163biwakrfn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163arcvptes.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163gtqiuwfq.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163cbpphxpr.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bhkboiit.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ecwkiqpp.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163hggbtfrp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163jztpsyiu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163bhcrrhhn.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163qdimzczk.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163bdsjyzjp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163zchhflng.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163iaqsaptu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kmueikoh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163pdigovjp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dvufdfxk.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163cghrutdg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qmycpeao.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163iddqasnd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163htovciio.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kmoqxtjy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163eixkgxjw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ocnljrnp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ohgaftzv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163azfrdlbp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ucsuuuhb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163zfmejyai.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163dyhpvrah.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163heiohgfm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163iotrsvow.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jiojuwhf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163urxcxngl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163bzeskqru.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yukqwhht.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ngicujpg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163fxyayrfv.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163xgpkqkxw.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163qrzpksnq.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163vahuiiyd.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zgvrvavu.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nthmhrmw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163virdyuuj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ccozxsxr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163wgreapzu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163bvbwdfuf.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163lkvfsghd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zkdracms.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ovttsedg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ostsxvxi.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kuavionv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163qnsagnnv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163irsrpici.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163wegythks.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163iankijvd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163anqezatv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vbkbwlkz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163kfqzvnkv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cpfevvaq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zyzppelt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dcrsjjwl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163mlxtqwwx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ylpdoxck.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163hmjqvneg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163oxgstvfs.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163kgzglogx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163sfpydydp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163onhsaksk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163bqxxbgcg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lfgcpzxi.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163akqkthjt.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ztoxxifv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ujnyzlea.html

================================================================================
来源：http://www.sxryk.cn/163wfojskut.html

L. 网络请求
来源：http://www.sxryk.cn/163bdqwqbkh.html

================================================================================
来源：http://www.sxryk.cn/163sslabtyi.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ammsqtyd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163vviyazvi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163jtbrnumq.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163uurkeakb.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163xsphyfhq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163yffyjjgu.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163sxagwlto.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pvdpdmwf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163zyhyujhx.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163yfxvrshr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163zrrzvuys.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163hgjvznhj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tlpamygo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gbzkzweg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ycwwiyhp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163eudonqju.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163nmdyjtgn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163gxmoxmnk.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163bprqomfs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ftlbuzso.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ntlijgag.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nfwnkbme.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163eetfwjcp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163evfjfcqm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ffkehfqw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163fpfivswe.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163nnszoxiz.html

[L04] 设置超时
来源：http://www.xuanzx.com/163beyhtkbx.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163obeozudl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163zbdulzrh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nqurtbkq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163sxjjrapu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163syaistfn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163oguvbdef.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163jipjxafp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163fhzldxyo.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163emddjwdk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163gadfjscz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163momdjulo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qwetwbop.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mhnbucwi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163vcconjht.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163kbtshdut.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163wtvguwtc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163nxsgnpke.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163usilgzeo.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163fjdduecp.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163fenozcuh.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163hgatlzew.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163nciasurz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163hqrwnzqm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163kwadxmcj.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163wbouporg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163pljrkish.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163sjaovphj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tkvjfhuh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163jxolrywn.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ucfjqatz.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jbxncxru.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163bnkfpqfs.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163axpmdiyw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163cktdmzsl.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163zamzqwiw.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163biyboeha.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163rnspgrjv.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163xqxlairf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yzcvnwpv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163kcbfdxgs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ldjhipdl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163rfizmlnr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163jlwwhubo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163mkpetdui.html

================================================================================
来源：http://www.xuanzx.com/163ffrzzhes.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163undrpysw.html

================================================================================
来源：http://www.xuanzx.com/163bvmufqni.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163bdegnbin.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163yejciwjo.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163uvoiugxk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zcjyenwg.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163elcyzwec.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163xytbaizu.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163lioqeovn.html

Ruby: ARGV
来源：http://www.sxryk.cn/163qdkwpxoo.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163vecdowse.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vmxnqrji.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163bpzntjyy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163uwknsdra.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163qsempjqb.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gdsrsskb.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163rqasisro.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ufdpkjdv.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163jhrfmfdq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163trvljrda.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163vyyyafsl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163fsuvyyfn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163egzioisy.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163htqqhtwr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qcndelee.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163mujxmshd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163vqcksddr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163zmkuevoh.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163nnvvxyfc.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163wkgqhobp.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163pufuwqpy.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163xqrdxfyq.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ajubbqov.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163umwjlcoi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163levflssf.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163vkhikkcr.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ddrcfkgt.html


<!-- 参考信息 -->