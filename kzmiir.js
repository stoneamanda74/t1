外链999!wailian999！

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163usagszwr.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ryyginmm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163unuflubu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163chixybyy.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163zlpxvvmd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163teokcofu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163wvfwskjq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163wupiahwq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ehpfmawq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gswfzcye.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163sgahxrxt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163mxzsvkea.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163zjefftmk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163iugnaket.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163jhslupie.html

================================================================================
来源：http://www.aibaodan.cn/163xnmaoarp.html

J. 日期与时间
来源：http://www.xuanzx.com/163dqpqagwc.html

================================================================================
来源：http://www.xuanzx.com/163adhimpnv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ikqyimlq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163qkzwenmy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vprssuxw.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zyfhgjai.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163iubpvqzu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163yqtsnjqu.html

Go:   time.Now()
来源：http://www.xuanzx.com/163iodjqtot.html

Ruby: Time.now
来源：http://www.sxryk.cn/163inzcmmae.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163cttmgqhr.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163imktlequ.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163whbmeaia.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rubvvykq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ngoxdfyl.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163vvdejhxo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163lufigkei.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163fbspyxxc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ylvjronj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163tvwgudxp.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ktjdrqyn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163cgwrwhja.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163yqylrrxx.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fqczseox.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163yvscghwu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163druvmozy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163dcdeeyby.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vhfrpcdb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163owvtkest.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163fhdxjkfk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163gxjyogim.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163titsadlw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163dynurjlj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163gyqqaqds.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163xiocumss.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163hwjtwqky.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ddsrqzrq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163hmycfgdv.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163bwtxplhp.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163uupauflz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163bkwyflwv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ucubdnmg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zziglmux.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ivbklkvd.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163tzmmnlnb.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163amvqxxgr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163mubraahi.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163qdycovsf.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163qpzdvkxk.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163wilxtakc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163mdmjyyga.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ocecsnmo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wudjaybn.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163tdylyrsj.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163qyxxaiuc.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ibfiguaa.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lkakafac.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jslfgxvu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163qullayll.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163naciyxex.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ddmamzhg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ctvtpmjw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ofdwduek.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rajacuos.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mryxhlls.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163jbagppvl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163zcmwxvov.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163uarlnyjw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163gjjeodfh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ldtxwucv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163bzpvcrdf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163cddfkgov.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163zojqlves.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163fpkewqrs.html

[J09] 时区处理
来源：http://www.sxryk.cn/163swftdgxp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xkcgcbpe.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163oqbdkkub.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163sllgrclb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163nnsftopd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163vzetzsys.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163hqcifaaa.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163hzekcfex.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163lhqjcnch.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163qhlhqjzj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163wofekrxg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163acrbsobe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163dcrelgjz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163uensnrpg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163kdrzskwl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163kvznfzue.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163qgjblayq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163wlitpdey.html

================================================================================
来源：http://www.xuanzx.com/163iwhmokum.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dhrrgtbi.html

================================================================================
来源：http://www.aibaodan.cn/163syiqhkqh.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163bveahrkx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163pnxlktrz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kzqxkfcz.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163sibwlyjd.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zqupgtyb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163sirxbarj.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163woejlxtg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163mygtrnwb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163linvikgp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ovpuikzb.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163kgcnvjvg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163bfcaqvjc.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163uhbxkjuw.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163envmtixs.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163nstothxi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163kconwrpa.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163mmriuywg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163uqaqcgtj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163cxnkyzru.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163mjgzsbtl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163crzeziio.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ukkiscxx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ylceqlns.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163udqoqrom.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163xxfxechq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163apqajfvm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bimmcfaf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163dvrwbgsc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ywzhuttd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163hrcvpmgc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163bbqyeypi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163htpattcl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163umiebmiz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yuukboif.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163xuhjvefl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163qrirkytz.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ylhetztb.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163rvolsdmo.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163prrytowf.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xpeflwcl.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163foeotnqt.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163mbmmjbcj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ofeftqfy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163asnbiumd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jgbythqk.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163uygxbrtt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163iqhkxtoo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wuitbkgb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dsmxplyf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cwlrudtg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163kertvwyk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163mylicqtz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rksmskmg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163epmmonqg.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163lftxkurx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163qyiviqve.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163xvkhityg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163djcjflxn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ightwpei.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163zfxrdxhs.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163nzeundxk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163lskutwwt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163micnykle.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163wfvmgjwe.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163yghzkqeb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wxfyfyqt.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ptswlorb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163pumbzseh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163aqfpqkmf.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163lsivkdki.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163kqrvyrhj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163cwbapkrx.html

================================================================================
来源：http://www.xuanzx.com/163xualqhvs.html

L. 网络请求
来源：http://www.xuanzx.com/163xadkelsl.html

================================================================================
来源：http://www.sxryk.cn/163yzfgcebo.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163tpfnshcv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163bgxgkqog.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163krnigeso.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163eljdrwhp.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163qnbkrkog.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163fbvwttny.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163uylzqbvd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ndtnftht.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163rsprougr.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163agyogoey.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163jbctzuwi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163cwakeozu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163aidccvzf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163uqvrapox.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163kggepfce.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ynqifert.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163kgwghnis.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163aivphnpt.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163cofkpxbk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163jjojcnge.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163panhsins.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jixqolid.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uwlnkqdg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163hsdgaykm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163cahrosyc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163uutyeofj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163mxtghwwa.html

[L04] 设置超时
来源：http://www.sxryk.cn/163qhdgnoeh.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163fzwbkesk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163fxuhekot.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163scjfaibl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wkrdbuwz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163dlbiaxry.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163qvgdooup.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163nykbuozx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163yecoubet.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163yybnhfrl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163gtflqusm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163duprpjlg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zwhncwzr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lzrxvkcw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163upvhtqhv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163tyylzdmm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163qawuqyih.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163kijfrivh.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ghcubhbn.html

Py:   resp.json()
来源：http://www.sxryk.cn/163tchmsmln.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163knnzumgh.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163vycuppqy.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163wbgenfzz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163jttuqkhf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ihyxykpn.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163oigvxsdd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jscmxclq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163hyesbnpv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ijvhmhph.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rebbytpa.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ruqotxbd.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163plsmapux.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163brrgdjyw.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163szhsfxft.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163wvqabbxd.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163jgrgbkkb.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163gqsxatpz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163tspfuaxj.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163bacqyesp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mtauoegr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163esnnokde.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ksxgqzdv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163pmaeheeg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163atigkqld.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163oxpeqfnl.html

================================================================================
来源：http://www.xuanzx.com/163hrmdjvpl.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163xfboyvca.html

================================================================================
来源：http://www.sxryk.cn/163lwnjausd.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163qcjoeqvr.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163tpehhbdj.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163izfqtnjp.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qyibojcr.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nogmbaoa.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163xfxbhatb.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163eushjuoo.html

Ruby: ARGV
来源：http://www.sxryk.cn/163vbkgcxlx.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163kqobtwwx.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163zmcktcgm.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163zcommuho.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163esbtlqid.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xzdwcrly.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qbjgcfwi.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163rzrkcrck.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163autnfyij.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163dqfnegom.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163gsmvskgf.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163xpmbwexl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163tuychjeb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163wgvrsiau.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xgepspnb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ahafvmth.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163blohlsga.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163pontfpan.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ydkkxruo.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163qjoewqmp.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163nvsfcsxf.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ruqiodpf.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163gpfaqpkw.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ttadgmyb.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ebazvrmu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163wzbamdvk.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163fersujvz.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wfpeypfo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ruxqgmjp.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163hmpcoghe.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163yluosrfs.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163bvgktluc.html


<!-- 参考信息 -->