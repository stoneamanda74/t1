外链999!wailian999！

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163tuywdtjm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ezbvplkr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163iiksatrw.html

================================================================================
来源：http://www.aibaodan.cn/163tpcznoen.html

J. 日期与时间
来源：http://www.xuanzx.com/163pmjucmnu.html

================================================================================
来源：http://www.xuanzx.com/163vznyctwz.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163dbsmcdhx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163beabcduq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xvdvtifr.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163isygmkdu.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mtruqemz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jnsvntqd.html

Go:   time.Now()
来源：http://www.xuanzx.com/163fyasabqp.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163fdivlzrp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163lriypybp.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163eyfhyvii.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163femhpvyp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163yhvlmxkz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ubplzyba.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163gdotnkzz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163lnbsrvmr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163wdouabdh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kyjmjeev.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163jyalrrvo.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ncbtwmja.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163xwkngdpy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163byrnkatm.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163maudxjfd.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163pwkkkccx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163abazyzfe.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163kuiipdah.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kipciccf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163diirzixl.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163bnbunsie.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163mplzhyaf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163pkdpjejv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163waapfzxm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163flvoctkk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163pkpwgzpk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163oedghytv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163hcjdqhto.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163onhbudxd.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163dwlyzzll.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163rjlccxgp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163hlccqgku.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wasnuvje.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bumcehtj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163gmarhtpt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163mzxsycqo.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163wgwusdrs.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163nhaiyfmm.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ihbrnlma.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163txcocjnp.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163vabmtqgf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163iojwwzoc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163lbrmywvx.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163mllonxof.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163kruzcgxf.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163dbgzintl.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163agfdmlgp.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163plsdctbo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163aylczahb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163pvuswkht.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163uuanewjj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ybnyvffe.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163dzjgtduk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163zaixerro.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ucwaxpxb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hccgnvxg.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163yqnizraq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163picgnivw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163sbgetzub.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163nuiyqsid.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163nhvypukl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163mnqbjafr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163vhriubvs.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163qxikcqje.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163kvdtynwb.html

[J09] 时区处理
来源：http://www.xuanzx.com/163muqsacel.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163hbgxhhds.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163zbigdmlu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qglnqteh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hxowftzw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163oibicoqv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163uaohatva.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163gwqddsnq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163tvbxxjar.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nbnwgtuk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jzkcctox.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163edhaklvi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163irtcyqrm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163iytokwuv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163mckrumdk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163aslwuhps.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163vtmckmls.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163irpwrvan.html

================================================================================
来源：http://www.xuanzx.com/163huczqasj.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163cyhzmnfm.html

================================================================================
来源：http://www.aibaodan.cn/163jddiypti.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ibtufxzo.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ltuwxpqm.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dbxmlstp.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mttqdzai.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xhdtkrpr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163hqrzqnlt.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163jcoelhfg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163dpqhnqyr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163zivismat.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163anrmrgsl.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163sjsivhvh.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163twctaicr.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mkwcaspa.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tlasdxpd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163wxofqcqx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dygycriu.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163akthcmhu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163qaevofjg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163zwguprbx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163gedltync.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163eczdriki.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163aglcsfqa.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kuyhxlua.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163fqmblozn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163dwlwwvua.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163mcrrekym.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163aohzpmfw.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163lldsdqev.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163kbfucsyd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163cfyxumyf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163mxrpgvbb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163feteqwle.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163xapwtlph.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nbdxljck.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163vhxiwxmv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163kskqslil.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163gumjhkxd.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163llibvxdh.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163nsaxuniv.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gjpyafjh.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ghrnjzka.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163sonyzazk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163wzejhhkk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163xwovqjbt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163avinkasx.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wjwgmaqj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163afodhpeg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163yttnqnke.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ixiozatn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ghokzval.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163aposalnd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163oqtmwnbq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163nrowyike.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163nyeraenh.html

[K07] 进制转换
来源：http://www.xuanzx.com/163fwsrxxhm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163clwmifke.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163nfhwikli.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xpsesgim.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163oqsrdwfm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163mzvszowb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163rgpbvcpd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163hmsybnat.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163jnpxcdeo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163cjrdswck.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163sjqzviyh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163yeowtjfb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fanfwgzs.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dxmcsuvf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163jqjymmrv.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163cmqufsdq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163pgovpiqa.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163xcvsflnr.html

================================================================================
来源：http://www.xuanzx.com/163eywxmjoo.html

L. 网络请求
来源：http://www.xuanzx.com/163fetfjygt.html

================================================================================
来源：http://www.aibaodan.cn/163wttwvajr.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ywpgvtvb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163vyhuwcyv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163kpiwetln.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163wtrianvs.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163gryovklp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163djevakos.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163nvvchxpp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163eikwvvre.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163nomapiet.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163lhvbudis.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163hkdckhea.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163pmatpfum.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jxpsvfbo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163snzfynmw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163xbkntyfn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163pbaehois.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163dfigjcxi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xqrejbsj.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qyseedia.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163djejqjdh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163gmoiwfuz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ftnobabt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zlcnomqe.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ajieieqk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163knnkvbqz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163msegugnn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163dutbymxd.html

[L04] 设置超时
来源：http://www.sxryk.cn/163cbtmolfp.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163awpucqib.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163irsbakpy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vqyetlne.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163zeymiaub.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163lgcbmpzb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163oomrtbea.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163eoqcgmwi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163kjdufsmi.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163bddevmmo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163jzxbhsag.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163iskixxsr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ksadkfrg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wgwprfyl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163bkzpabmo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163uxzyepxx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163zmmgpafx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163igdpecqb.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163esdukbwy.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163wfwfikhw.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ybftfeph.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163mvztjuux.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163hmmarbpx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163evmvmufn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163nvlbsjst.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163qhkphzjn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163lazhudef.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163abfphmnt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163flqlnsyg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163fputexef.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xugnuodk.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xprbcjhj.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163rtghkand.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163fmsrjutw.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163hddiqzaw.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163kcynjzgw.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163byzhrafn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163dfdukxme.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ojwwbjxr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ppntrmqq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ezmhuodp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ojlwzuqb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163wxwyxvbg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163dzixdgvw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gqnlafoq.html

================================================================================
来源：http://www.xuanzx.com/163xjvzktlg.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163mjvhwdfu.html

================================================================================
来源：http://www.xuanzx.com/163dkpmkmkr.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163staexckq.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ljnbbmtx.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kuelnfrx.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lmwqldtx.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163kjziutct.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163xwioimqh.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163oprzqyib.html

Ruby: ARGV
来源：http://www.xuanzx.com/163crmiwqqy.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163fpdhqnes.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163gkxqhtfu.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163pmpomqde.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163agvgfyzr.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163nenqgeel.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163nuflbzdt.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ahjkqofg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163nzoeqpjg.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163oohgjnhb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163vdpjsiuq.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ockgvcfs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163qvtcieia.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163svjtdzyq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wlmpytud.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ibvdptyu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163xvdyoihw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163tbunliom.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163iubfqeyz.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163kaxgeuop.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163upgdspkn.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163qmyopxok.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163cqjibeke.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ipigmwaf.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163wobsmwpu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163phdgaitz.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163kiqdtdrr.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163azalcmlj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163tiljczpq.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163qhlqfmwf.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163wzueurmt.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163mjagqeeg.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163iwfpfywj.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163itvtrlmf.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163acwfomjh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163sxuatuhu.html

Ruby: exit 1
来源：http://www.sxryk.cn/163auvytjcy.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163twrjskvm.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163rwfwgoij.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pizxhssn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163kzetafdo.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ienwfquo.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163qcjqvpof.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163tjjaxrju.html


<!-- 参考信息 -->