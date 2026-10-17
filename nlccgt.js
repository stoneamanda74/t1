外链999!wailian999！

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wtnhtrnc.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163hkaloguk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163zmaervdm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163bcmdmxhn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163jkdwvyqw.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163mxmdmkzh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163hdbphfre.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163bhjcrncb.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163vcjcrqdr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ynxannwx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163xcyugdlz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163rkwwczec.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163poicfzzf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zeqyenhb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163snrwqdlr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163kzltfrnl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163hvafigii.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163okiwylmo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163cayxpvcr.html

================================================================================
来源：http://www.sxryk.cn/163okomhkyc.html

J. 日期与时间
来源：http://www.sxryk.cn/163dontqyyt.html

================================================================================
来源：http://www.xuanzx.com/163ekrimxha.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163xiamvynw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163tsdbabyx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gxzbszek.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fwecjvvs.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zmwqjutk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163llidscbp.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163yvzlepht.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ohoztrqy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163hojmnfrn.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163vptyapin.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kzronres.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pjtjfawd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163jkdqqlvj.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163mepzjjdn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163yfklhcwz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163hxogygbx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wfgzbcjv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163lueklwjv.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163bidujiqa.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163hycebbhh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163onwkrnnj.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mlplatgh.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zqwtbqxq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163zhxrkhyp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163uhqpsohl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zzlqmdoj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163pjikdvzm.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ajxmuhuw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163euuexphf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ledrrczj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163gtngufwd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ailhsrnj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163uqiphsws.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163avlycklx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ieymjgwk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163enadougr.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163zpnwqskn.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163vgoznslc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163qnaxtbmt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pzwzdohh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qvhhvxkb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163cfndkkjm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163hndityrn.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163bjptrjgf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163fjhzquty.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163hvpkqdrn.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163xnuvhnwv.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163evdrbybk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163hvwkvjnj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163eghxirtu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163kwltyjam.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163vpicusrg.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163nbwtvnyb.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163eulwcpyo.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163pdwcpocb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nyptqjss.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163gvttuaxn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bfspoxjb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xxijodhj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163bwavutof.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xghnbhei.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163okumiqoh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163eszcxtoz.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163yvkszail.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163xmvjwwxw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163zruvcjqt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163knpbceyh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163uadfvqtx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163dyoittlb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163iljhdkde.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163fufokvna.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163fgfblmuq.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163zaafrppy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jnvqikvr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163imxvkdcr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hmibulit.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wuxwkfjw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163eghogeiq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163lwdtocft.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163kmfvqjpc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163yyjcjeco.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163lmrnehwe.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163sakxiesd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163wlzifzwu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163uiehwqsx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ajbzbnjw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163lpsarzpa.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163wvrdpzce.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163aapizhui.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163dlahfbue.html

================================================================================
来源：http://www.xuanzx.com/163zkqlcrhl.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163wzdyhxxu.html

================================================================================
来源：http://www.sxryk.cn/163vcsefznf.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163bcnemkfy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163oqqkbfmw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163nuxixlzl.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163bowckmkm.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ceeshqev.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ptwcdqbv.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163csavxotp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163susediob.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163czasmtxb.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ffaprtfp.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ppujaaeb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163igxibkmo.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163aufldtav.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jxuznkew.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ehtfzwro.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163icjvgjyr.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163gtlgezxe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163rafxyngw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163oylvfatd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163mjkmtpua.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rtwttyiq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163igxwqvce.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163roeoruwm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163hosqlfnd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163nwcdwaea.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163rblbnrrs.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163wluncxws.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163mvdnvsbg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163wvlnzojq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163xrtnieep.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qrjtdtjt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163egroeldg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163pzxfecgw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bjihegnj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163fkernfst.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163qzxvirri.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163gxcpnqsb.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163uhwnhhwd.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163gyccjvxh.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ubaakcjn.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jodzxjxa.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163argufxva.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163qinlrkte.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163flkkwatr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nndawgjm.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ffueltqs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163gtqqmiov.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163rxyieyag.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pgmsdhmz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wersptbu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163girjtyfq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163bpqijufl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163fkeljjid.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163auanbujg.html

[K07] 进制转换
来源：http://www.sxryk.cn/163cseoswgh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163filmovch.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163fktiksfg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uvaucddy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nuosygss.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ilpcmhxh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163gokaqqpw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vyomfbqs.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163gkusyvcb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163suqjqvwr.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163nljaiujk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163zqkuwfhs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163lxvdkypi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ejmxalui.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163qqqrbyed.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163jjfdtufk.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163dbmvkipn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bkrxtakn.html

================================================================================
来源：http://www.xuanzx.com/163shghjvbo.html

L. 网络请求
来源：http://www.xuanzx.com/163nqmbqhwd.html

================================================================================
来源：http://www.aibaodan.cn/163ibnticoe.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163wpogagcq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163cvqpwvry.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163uecnwtlt.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163xtppdicl.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163iikuycbv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163mnddxzbo.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163npnvfbpl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ghjmwnyx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ywvoknts.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163jkjqpgzm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163tunoqalw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163vmrbbkny.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jdadmosu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vbnxeyzg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163hivlosrv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163yucxeesw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163paktlfku.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163pxyhmgfh.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163boyfxelb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163vzkctzgh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163szdkuzmy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163syppjvfu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163krifbzts.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163lmeahjbo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163sfeieuqu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163qpmzccxx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163zkyxjhgt.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163qwbcptkn.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163hgyuyfcq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163oxokikpb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dngeollp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dpyxszie.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163kgskusgu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ptxhqqrt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163lzmnzjjm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163sefggshl.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163uxpalsuq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163lzuygahn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163fiqzxeje.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vcpsfesn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163umfpiixp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163jvisggdq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163zksnnsko.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163tgyjnyey.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163wdicczcf.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163rrcmlzvz.html

Py:   resp.json()
来源：http://www.sxryk.cn/163txlrkvxy.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163dfxmjdrd.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163gbjxjewf.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163jkuvbmyt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163izuprjpz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163wsjpxiyr.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163xvdpyxzu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163xyessmgi.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163anttnzmi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163fjwvamdo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163fwfhwqsl.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163oukpmvya.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163emjdwvvu.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163tjrdasjt.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163bsajcfgp.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163smfirjig.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163zalckqkm.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163rcarxnxi.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163uthntyif.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ehozuewu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fvsxhfnd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rfnsuwna.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163hioovxaa.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163kzqgddkd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163iihbkpfs.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163iziewrsv.html

================================================================================
来源：http://www.xuanzx.com/163chtmqvjl.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163vuczbdoq.html

================================================================================
来源：http://www.xuanzx.com/163kywpftff.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163lfkfsatx.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ltdwnioi.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163diubwvuo.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zwedqeqm.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163axihfnfh.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163mrbancnk.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ozwhzngj.html

Ruby: ARGV
来源：http://www.xuanzx.com/163sdrnyuyl.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163xspolntg.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163gtvngdmi.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163zzifdksv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163hcipsvtt.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163zebmjknk.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163fkfgtqer.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163wgknnfcz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163jfgrsxnh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163jdisocha.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163bfqnkapn.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163idusymit.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163zwljajyr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163xqatayoo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hzhrlyvd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ezlzjynb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163vavriiit.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163occqvwvk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163zybbeprc.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163extnvxid.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163pbdyllxz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163jbupmkcn.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163cxwmpupg.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163eiclqcwm.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163stqhbnhp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163uisnwmtn.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163kveuobtf.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163zsswmtgx.html


<!-- 参考信息 -->