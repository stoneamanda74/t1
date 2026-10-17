外链999!wailian999！

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163gekmzrhh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163smricgph.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163orrokorj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ebiiuezk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163hgdafxod.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163losqbbif.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vfxerfjx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163imticayu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163hhtoirgu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ezionsnn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163bdyaktvw.html

================================================================================
来源：http://www.xuanzx.com/163cqumnmfb.html

J. 日期与时间
来源：http://www.sxryk.cn/163pgwvuihv.html

================================================================================
来源：http://www.aibaodan.cn/163ioqvnopc.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163zoyjdlcm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163meqsmmxm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gfkkupkt.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163cjdyykvm.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163aqsiarhj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163qrehldbb.html

Go:   time.Now()
来源：http://www.xuanzx.com/163tiskbqbl.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163vbxvijut.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163mobbtspi.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163lquuakkr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fisfuseu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163vjaxabzq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163iypymavu.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163wyqawxay.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163sgasulvg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163cxhdgvnt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ijovkoae.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163csqeamdi.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163gtrjrywb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ntimxkah.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163gfftyxkq.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mcllvvch.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vgeogsea.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163yrwltqnh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163sautxmrp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163evssimqn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ldzxwman.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163uhojvdto.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163kxvoyzzk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163hnojstrl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xepzjbim.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ockljszq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163zggezgul.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163uxsufgoi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163nrbbchxh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163yzramjdc.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163icenlgea.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163wjncwsxt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163vadozrnu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bvleoosr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163dntfejbd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ourbbvex.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163hlmklenk.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163dlohewkp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163qrsislji.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163owradbws.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163dtbusvqt.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163goqvzeoh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163mfgdlozz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163wvaxwcxj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163bejnlexk.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163xszozknx.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163xuwuuzcn.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163jhqhzkif.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163uopnsjrj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uogujbiy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ebhewafv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163keletebc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zkwtkrop.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ynhyyaql.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163zsedlpyd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163geuapwgs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vipngbni.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163vknvgdfk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163asperznt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163eloqvxby.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163bdvgfazx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163fbtedbig.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163xlxxobcr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163yplqcwmn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163qyfyzikr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163uaxgdnyy.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163mlhuqsbw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163unjrcmaf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163rtozxfyk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mstcmrax.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ccfjkncq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163zdqfpiis.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163pwoksjyf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163puldztak.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163rmmslotj.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ftugdewx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163xaqokvuc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163jfsshnoq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163kkdcxarx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163omkraofw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163rlfxthqa.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163mxbklobp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163hjojoznn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163cqgzvfdx.html

================================================================================
来源：http://www.aibaodan.cn/163qfcffvzd.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163caftnzlw.html

================================================================================
来源：http://www.sxryk.cn/163kwnlrubx.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163vbgdqqxg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163tupkeobt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wwkgwfta.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xqngvcok.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qudnlybn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163guspeolj.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163trtmtjez.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163hcsaeoek.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ojyneflp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163wojokumx.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163eirfmklu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163zksattgx.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rqzzjmmw.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vfxkylyf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163gmrkhndw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163joaeiqga.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163syerxwbb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ftpjfxpm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163pgayywcj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zftzzwvk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163phvijhvv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163apwpchfj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vsimjzvy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163vuyeqlxl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163vbywcjal.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163lrysdgbv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163unmbiubx.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ltgaxjkd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163eepjwfnv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163fnvgogks.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pkylyeyr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163bxnzwrdh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163uwpgjudz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ovukgbiy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163llxcqvje.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163elggjzhk.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163toblflkb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163vhsjitgz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163qbbkzwho.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163cailbgsr.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zzctifab.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163dgdsbxai.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163nmffqtvo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163aoyltejw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163zymeywgx.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163gyfomifn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163srgofifh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163iahphpuw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vneqatwu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163yruggfma.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163pycajoeg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163xpnkuilx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163yrzciiqr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163xmltbyus.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ewgbqhzk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163jfbcejzl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163bkdukcjq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163iailjcns.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zxvulndf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xubzsjdl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163jlzifdwb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ixdetkbu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163hckxeqfw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163bzflehdo.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163majqkqgp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163sckavtfg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dsbeudrl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mxbhqcmb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163lduwuwjo.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163rvgbzltd.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bmacbjsw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hqrahneu.html

================================================================================
来源：http://www.xuanzx.com/163yzgjufav.html

L. 网络请求
来源：http://www.sxryk.cn/163eiqkljrs.html

================================================================================
来源：http://www.aibaodan.cn/163sxyzemhs.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163vylfqbsl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ddtxsigb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163vppetspq.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163yhhlayud.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163cqitugqh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163rmbzkxgj.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ivmqakif.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vsdvwbwo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163tuchsonb.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163scijwtzi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163bloptfsk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163wiolytrv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163elfbqzaa.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163skhembjp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163urpmudbu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163lpjiiiif.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163jmdxrtqw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ujhquwew.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163woseokov.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ghjevxqp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163bgqgfppa.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vfygrocv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uxshsaun.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163kfjazkph.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163eqffsapo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163zdevrmsz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163cgbrtycx.html

[L04] 设置超时
来源：http://www.xuanzx.com/163amzxcgrr.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163eysxcexp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163hbpelrlj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cquzighz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163zhzyomad.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163jwymbagj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163oaxjhgdl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163qhmxvliw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163eilxmjgo.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ktgexovj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163lgznelcw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163gijqhygk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rpabahkf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163bvxfqwbg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163gzzunuiq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163oweevgrg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163xswwdzpa.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163njzabrcy.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163zwuulzqp.html

Py:   resp.json()
来源：http://www.sxryk.cn/163zspesopq.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163lezaxukr.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163rdossort.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163zmppyayd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163tmcgvlxf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163iwxmruzr.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163jxwgsagm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163pnhtmfrr.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163bxkauwcz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163kvrypnbz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163mwyhtuaq.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cfkzbipn.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163trgzbrqw.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163qiyvxztk.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163diirbtzs.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ycgeqcby.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163lnzqnolt.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vyblavjl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163jtqkgkjn.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163qxoikrvz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qxxafhof.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zmopiaob.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163nvlsxuma.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163awtxsllb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163qfzletme.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vievshrz.html

================================================================================
来源：http://www.aibaodan.cn/163skrqlsec.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163nonxrhjv.html

================================================================================
来源：http://www.xuanzx.com/163ruyushjb.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163bywncncq.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163qzoyhdlm.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mtkadeux.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xawumglh.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163asenzpsy.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163nphyobnp.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163nulhrajv.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ktwfcwfu.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163tsmsyeew.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ejqyiped.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163zyohwqth.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163kojvcqoe.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163oalsprtl.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163mowpapzt.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163togczbnw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163lagokoub.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163xwlegfvp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163swgtvtpm.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163utchagds.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163zlvwnajr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163dtemhxhb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rdlwlelx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ecovswdh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163kanxklxx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163hqwllkct.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jfemuyoe.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163uqtktozu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ztqjysen.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163bdndqzxw.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163pxfecqyp.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163pfytpupj.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163nwyszzsr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163qnusktvx.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163bhtrxbbr.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163xsfjthxh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163hatopqsc.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163hgkrpkue.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163kagsyxqj.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163tpgystbg.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163jxncwlew.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163qpnfigmo.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163mssflshz.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163anjryeuc.html


<!-- 参考信息 -->