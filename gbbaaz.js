外链999!wailian999！

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163whnjyonm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163vybmhklv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163wvugycqf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163myatkzak.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163pksqfrcb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163lfrghjkc.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163zhxgqpbt.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ecbnodoj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163fwdsnjvu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jfmhonks.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qlttptsb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163yumhduvg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163jdlsfsfp.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163jzfonoet.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163rkucznhb.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163bngolfdh.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163tujenisw.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163jxbahdjc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163dogwpjgc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ifedkwzk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163quqtwbyl.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163eeijvder.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163htpmrggo.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163brqwmxpc.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163onqdjfhk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gsnirmpk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163sbtljacn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zhwjrtgm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163drxnhzwz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163nsvljobj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163xvmjvyny.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zdiaiple.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163baxeiaxi.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tbgmgrzk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163cbgsqfxy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lljdszwi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163dpndazec.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163mtietoag.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163qwhosjgk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163mrudahsn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163udcofxgh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163lkyelnnn.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163xxhepyrb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163qewzwrnk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163yddyssjw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163epvcpeaz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163octtfnys.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163aijuqmzf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ekdwwvcl.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163rgeqqzvb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163uqzsezag.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163svopdsih.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163hxcszjik.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163dialeftt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163xftgirmj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163khduynze.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ckypoivk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zbanhfri.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163hsdmutjb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163nmittnrc.html

================================================================================
来源：http://www.xuanzx.com/163tbxorqzw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163iwmnquaz.html

================================================================================
来源：http://www.xuanzx.com/163qxubjrvv.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163umxuliqj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qjqyurff.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163pxcoigvx.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163kgftrtgm.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jmuskhzw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163tpvdmdhx.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163cbajdplm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163vghouvyi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163jeyqcsjj.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163htdeejus.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163dooxftos.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163pyvsobuh.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zerifxtc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163pffsswow.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163fkkuviqy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cfcbywai.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163bhoblqur.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163edlooobw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163zvznhjlq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163hwpzvmji.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mwvaiaai.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hnlossqd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zurcyjyc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163hodrjivc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163fdvkldgi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163knfbmxfd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163goylfgoc.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163tdfwdioq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163yjmtszry.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163kvxcnhmu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jjrodehh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163khsfgshr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163lzhcaena.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jllmdvza.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163flyfrxjy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163secrbdpi.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163jejwxmsd.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163wlawdcxf.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163fslqngit.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163yqxkikcp.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163yoqqcmmr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163enywgfmn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163xnyiofrz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163hjldgynk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163jfittpxm.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ltdjnukz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ilcwtvma.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163bfabtyzg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gbdqejik.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fwcbfofs.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vofdthfe.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ttdlpvjn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163enudkevc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163robonqos.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163jtijhpvy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163oonknjln.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163krfbyvbg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ijyjcdpx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ocbspvtg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163cbpqaoez.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163viavwulm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163jmyomtzs.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163wcrxhwbe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163arehsmov.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163xenfpwyf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163cbzczrkm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jjngiwds.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163lclajggy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163iefehgvv.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zqeirare.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163hcfbjahb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163pagybwnb.html

================================================================================
来源：http://www.xuanzx.com/163xlytjvjt.html

L. 网络请求
来源：http://www.xuanzx.com/163entmnlmg.html

================================================================================
来源：http://www.xuanzx.com/163gvrhsafl.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163iakvtwog.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163khcyddha.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163duwpilxf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163htnpzkgg.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163jvekjets.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ajmmthhx.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163gsvcbqfi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163qlukgwla.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163qvqdsjwb.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163jezdaohv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163lyldvwjo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ttqcekbd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163lplwkwzz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xphqsjvw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ifjwmslu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163tcftilgj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163pdjkgfkc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163qydcoyzo.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163xvmaljlp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163figroyog.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163debzlgdj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pdiajdsy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dyccyhnu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163crmxkznc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163xukvrapc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163fuzdfdnc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163adodctcx.html

[L04] 设置超时
来源：http://www.xuanzx.com/163erhlrdlt.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ppyxaoqy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163bjgcplug.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jlxppckm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jkbwhwra.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163hrhxmdht.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163tbckmjap.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163uezsyrrb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163nijxegnn.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163klvcoziz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163etglxhqr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163grrabxuf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163brianfsl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163htsccjen.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163scnmwvhm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163tvkmicjx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163pjmjsmuv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163kmrdmppe.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163tffubvws.html

Py:   resp.json()
来源：http://www.sxryk.cn/163yoegskdn.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163yqjqcpzf.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163cchkoiuy.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163fjvnxlnk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163vdziapxl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ftnpmann.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163xdmhkamp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163mjfctjrg.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163dinoptlq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zkztaanc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163fzekptfv.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163shqtvtcy.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163yqtmonil.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163tvwibiyf.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163jwxxzpld.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163rekwofgg.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163knxzcvhe.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163gvedewlg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163fyuchajq.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163syfikxhz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bezraxmi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163trxquvyr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rphojsdh.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163betmwzei.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ppjzobjm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163dcaxrerx.html

================================================================================
来源：http://www.aibaodan.cn/163bgzhbeja.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ddadwxpc.html

================================================================================
来源：http://www.xuanzx.com/163ckbvflyd.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163cpgjkvmk.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163hauwesov.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163pyyovzob.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163gszksppb.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lvdpkfkj.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163hbbpzciq.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ffkktbfc.html

Ruby: ARGV
来源：http://www.sxryk.cn/163gvygjwfw.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163dmsvcopy.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163nexhdjzb.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163pgqnuzth.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163oexzdtzm.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163wlhicstf.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gxvhzsbq.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163dtdwghgn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163zkacqtis.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163xtivfkwy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163vbsqxxco.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163klyqpkgi.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fnwhasqk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163awlotljd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yiihstla.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mwzlucck.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163bvfoufxg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163votehayi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163tzspgaip.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qdqhgwvg.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ufrqchca.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163qyofisye.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163vsolfxbw.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ieqhkegd.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163awobsrmd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163harelzbk.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163rzofbhno.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163lrgaharr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ayfzbore.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163yubqwlrx.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163rwlgniiu.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163mflwyrqi.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163pwbqnzrm.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163sygctvru.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163wvyhzcho.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163delcylpy.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163fuqzjeyt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ahobeunh.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163zoxeioys.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163yajqwcax.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163zgyotkqf.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163iopharbh.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163eddmkhsy.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163jdafilvb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163qoyojrne.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163dptiidzh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163atjxeycf.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163zvbozkqx.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163uwuhngln.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ptpzuobt.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ovytjmmy.html

TS:   require.main === module
来源：http://www.sxryk.cn/163dnvinfli.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163vwnopplq.html

Go:   func main()
来源：http://www.xuanzx.com/163stqjqkka.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163eusdrzux.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163twqdqtft.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163espavqzi.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163cfwxwtql.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163czmrvbyg.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163mdqkddfd.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nitdvnqi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163aqejofyz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163hvzuakxa.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163smtzxmqt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163qixwmruy.html

================================================================================
来源：http://www.sxryk.cn/163lcsfgchp.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163xnijdyhq.html

================================================================================
来源：http://www.sxryk.cn/163hsvhuybd.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163yabeofzc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163eqljvatz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163igwgelev.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zsjmbgjv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xyjumhcg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ruzusbyg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163xpjbwqui.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163xzaqjszu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163atgsfxbt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163jgjdgszi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xofkcvyp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163hgummksc.html


<!-- 参考信息 -->