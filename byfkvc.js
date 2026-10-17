外链999!wailian999！

J. 日期与时间
来源：http://www.xuanzx.com/163rcvvkkir.html

================================================================================
来源：http://www.aibaodan.cn/163wvoujema.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163lxggjmdl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163dnipmlfz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fstrevjm.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163npujvkeg.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163gkqiljmh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163hszyqhfv.html

Go:   time.Now()
来源：http://www.xuanzx.com/163cvpraajo.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163emzqfsit.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163gnkxqeas.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163mgwjxrbw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vskpfuja.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163lxzjzees.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163pbocbfrr.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163afvoosdc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163atzccalh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163vrkmzkpy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163kokenahj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163bdgmaifq.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163eeimxrut.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163jsilymum.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163vqucojrk.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zmyuvtsx.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163kecyutnq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qcopprnw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163kftffadj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xyjtjlvp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163bysqhiab.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163pzaixvwm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ocozyjkd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ibvhsdka.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163zvtltlek.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163zjaqsxms.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163yoqmssoe.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163dtpdscal.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163lsbwrajx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163izdaktcb.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163cmaafsfj.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163dfqkuhfi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ehulrnll.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dbhqgupt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gxjxyhmd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163npmfoezf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163xavbmvnv.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163mhdclyiu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163gmuprjkl.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163gkskuaqw.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163jciohfoo.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163mgffputh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163bnplsdjv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163lmwmiexm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163dgxwfzyo.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163tsquwcud.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163xndgpluh.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163cqgurmqs.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163uyloeycd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163geenuaxx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163qlhalvtm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mpdfbhxt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mtjobbeg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163tfjxpjvb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163mysinkby.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mtthnagq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yinrmuet.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163vnefytnt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163drwpmzsp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163nnnbcemc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163mwtabtri.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163mluznbyg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163chkbfvzd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ovrjvlxm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163caqtilei.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163wkhfyltp.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163lsgfjnnp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163nkriuaxp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163hbsgkcgv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qpnjqrxm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rpkbruzk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163suaagkiz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qyzqqnup.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163xoeaytnz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163fxpizvdp.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163mfswhuwt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163dufdbgnn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163kbmjqfmo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163dignmopw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163upyhsgab.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163egkehazu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163cqqkfjiy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163dyxuozjd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163bxbefgvj.html

================================================================================
来源：http://www.xuanzx.com/163ozvxwivq.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ylvjbzdd.html

================================================================================
来源：http://www.sxryk.cn/163xskkjurs.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163hluvgnpu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163vdfchjbf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tlfwmsnf.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163sphnfypr.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vgcdvdig.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163htxsmyyq.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163bgojcdpg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163dfryncbs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163nrxlbrft.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163fbvsleyv.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163wcylbjoj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163opnkqjxm.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ytetczvk.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xfwomlvo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ovpgpcuw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fzhcrwhl.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163vltfposf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xtrzirbz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163kjfyuvyh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vxkrrknd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ktwcvqty.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163tsseojxk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163evwgxluw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163jqapxjog.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163opaqyowy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163nnxtlsny.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163lxzaootg.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163iplikflk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163fnclucpk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163dncatrxz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jepvgahm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163oiszqqib.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163nlnguwwh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163msydjosh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163bdroscjr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163kvbyjxhp.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163jqymtyoy.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163rnghsukb.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163gyqctjyu.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163isetekej.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fgrrpour.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163djncoibo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163vxzphbug.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163nqkildrn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163rfhvkfzc.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163wpnlpsjo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163fzpmcyca.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163aeokvlww.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163rbxnhxve.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163tqfpxuwe.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163mgworklf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163qpfcyyoj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163geonaqpi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163drcmjnme.html

[K07] 进制转换
来源：http://www.sxryk.cn/163gvsbltoh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163bcyfosfx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163fayrrtgw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ddxbdnxq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wneyjyhs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163rtpaximk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163cgqtpfag.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163codyutyi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163lxknrcle.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163jbynehpa.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ygmlrhlr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163cvdclwww.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kkmfhxyi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xpklrtsm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163awjehtjx.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163gijyiasf.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163xcjigmlx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163omdhlbcb.html

================================================================================
来源：http://www.aibaodan.cn/163krnojrkl.html

L. 网络请求
来源：http://www.sxryk.cn/163fumcitln.html

================================================================================
来源：http://www.aibaodan.cn/163hhkgaihg.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163hhtuuxyu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163hpehbtyw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zlvpbuxr.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ilwovsyd.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163czqnzfvm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163elwplbbo.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163mnxdopxo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163cldbpelh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163vckzsven.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163xkfqdnkp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163dhzvszok.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163dnwejbui.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vahaxzzp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ewespjrs.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163fznsbclm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163uckzullx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cquoanbx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ircodhja.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163lepgvlob.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163fhbabrcb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163zdyxpsmm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ccwfipzo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163yykywpso.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163yrtgldfc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163dngahycs.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163forihmhh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163tgrxsmdk.html

[L04] 设置超时
来源：http://www.xuanzx.com/163cpzwknkg.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163zxoiywzi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163asgrhvpl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163gbmnztnx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163epbvtbzi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163plkplvqx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163xnhtpjbz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163btpeqfug.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163nbmwuhaj.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ybnqdnxi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163cyegbbao.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163iypkjblg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rfndvmcw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163cgfydhjn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163joeklels.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163glwkljgh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163iskvdjyx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163vvkhgfly.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163jkvhguak.html

Py:   resp.json()
来源：http://www.xuanzx.com/163exqfnfne.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163zbnvjjzn.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163akvyrzak.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163cnvlaczu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163mtrxhuge.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163wskmsfbm.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163rxwyytal.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163nugawejb.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ylotvhds.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163cjbhuwhv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ittbngin.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xtpuuwam.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lfsxzmws.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ptectszy.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163gffohgld.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163sybfhxja.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163nbjqeuhi.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163uzgqwwtk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163vwetdmii.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163tttjaufv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zqlqcbnd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163daalcxjx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163cyyniytw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163gfxwddhp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163dkqdwzwm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xnocbzpx.html

================================================================================
来源：http://www.sxryk.cn/163nhrkmvcu.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163mihlfxhi.html

================================================================================
来源：http://www.aibaodan.cn/163odcgxopx.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163xzgtkhxd.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163xzbymzyv.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163dsoyfdsc.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pmszxepq.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vqqosiov.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163eudmzlnz.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xqethmho.html

Ruby: ARGV
来源：http://www.sxryk.cn/163wzwxxxtm.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ovqlesph.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163mobxpxqi.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163qdkhmsys.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163qrlbktkh.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163keurzfpx.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ltverjtc.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ihztubir.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163modrhsrf.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163tazwymmu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163lvsxiimp.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163klidvugp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163oagwtsvv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163vxsyiibj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163fcunhrpb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kezmhvys.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163musizguu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163skxpgzfv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163lgotcaef.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163dmpadtjm.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163weprqnuf.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163dogkdenf.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ubmfdkcq.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163skisqhqg.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163lacaxnfb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163lbbxvpan.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163tlcqfyzm.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163yvxlowvk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163urollovg.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163whvjnjnj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163javwzczp.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163cptawgyh.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163atxrodif.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163hwcgzmsf.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163dbenrutt.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qovhzxfe.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163mypnvftm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163gngokdqj.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ujzbzbxu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163vqauxcza.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163tpxwbjra.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163lsydabuq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163lwtqczzw.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163lpmutert.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163fpbmzjnz.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163hrpowdmu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163wxsbwbix.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vcjdkbns.html


<!-- 参考信息 -->