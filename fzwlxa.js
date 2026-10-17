外链999!wailian999！

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ibgvomjx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163waqehakg.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163hfxefmcx.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163palfsdyb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163hotlcxqb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rreqtzmr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163szavtobg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ichaztyd.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163cqgeqqwl.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163jqgicrml.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163vtxcblhp.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163vdlbbqtg.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ghrykeuc.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163gylommae.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ejjtiasl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163gzvntuov.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163admzqvsk.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163suhaaqda.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163yxtouwvg.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163cxuliteo.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163dhjplndn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fppaybri.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ffuxnhsx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xwkzdgxh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vittsqze.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163dmkiqpbl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bjvztzkd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sexnpyjg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vjllfgjw.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163envcfavp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163fjqffjec.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ssfhuopr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163hcpvmbwj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163jdixuegm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163pvgerbin.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163sjuziirp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163nnccuwmx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163cozwrnne.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ucdwnbad.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163vkfidchw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163frdrumfv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zyalkbgr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163khreysuv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163laawnkcb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163mlpngetl.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163qidvjpeo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vzvuuywl.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163esvqrkjc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163cnxzzkvs.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163nsohruqs.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163uzuzifpc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163kzcjksdl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hnyzgozk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ljwwvphq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ibchbbfm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163zuklkpsy.html

================================================================================
来源：http://www.xuanzx.com/163eqotfogp.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kpqwfxsc.html

================================================================================
来源：http://www.aibaodan.cn/163givtvnow.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163buhackbg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163mqdomzrp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163asvauasf.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xzjdhpxa.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cgdbvbpu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163xgstbsdi.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163wtqjbbdd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163uetqxecn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163mugvnrlf.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163fpgbfgot.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163inmtwnpm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163jpqfuhum.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tslikcdc.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hfbfhcwb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163htnifudf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jlfsanyx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ygisewqx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ludunizf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163uvpatjyx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163mbhxukpp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163pjllbkbc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ofvtiqau.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ajitdjcp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163kqnwejik.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163pfotxmdy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163szfgryvu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163btvkgjco.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163jqdlvkci.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163kffotpbw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163xzfaftqy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163esegqnao.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tisosutm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163eatxueii.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163owkljati.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163nibthkxe.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163excctkds.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163yzeladqn.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163qihwsbpd.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163nlloxvlz.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ofwdsfid.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163puqbgwzr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163geehqwju.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163nqfnuyrp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163lamiakbz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163hyamfnfn.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163cosbfkly.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163vsipcrnl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163xuqbrizr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pgrewgyn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163idxxgnbc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163bmufraut.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163oebyhczt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163goycgvti.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163nejarztw.html

[K07] 进制转换
来源：http://www.sxryk.cn/163leqwopmz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163inshrgkt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163zgkiceyp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pxsublbw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163iodqygxr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gbnnxfka.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163byjxefuk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ctphtxpu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163recfymuh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163tlciwdic.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163rclctjyo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163jahfuncr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jwcbzmfn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163euaupiev.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163iotymeyt.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ejpnrhvu.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163tqthzruz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163nxsojhpw.html

================================================================================
来源：http://www.sxryk.cn/163uqlpvqye.html

L. 网络请求
来源：http://www.aibaodan.cn/163qbvzuukp.html

================================================================================
来源：http://www.sxryk.cn/163spympera.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163qugsufvb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163oyxijmxh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163yzxdtyzy.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163wajrpgsj.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163fyfccyux.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163wtvzadqz.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163hqgcoupd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163llugfrcn.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163qlikpdyd.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163wnojuyvr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163deqbhuhl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163cwzkjpde.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lwcrutlj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ilqmiqdt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163bklvddgo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163uihgtpxv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163pojhddav.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163fobxccjp.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163zgxaoeee.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163gmhgypqv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163wtkaxoij.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163cwofjuxa.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rztubocj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163tlyvmquh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163mjsgydwm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163revylegl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163dxeagqbv.html

[L04] 设置超时
来源：http://www.xuanzx.com/163gzbrootp.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163usgisqlr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163qwoqatog.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cakfkgvs.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zipayfhu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163dfzlrvvt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ihxbcqsy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ftcwdnvi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163mmyxdkrd.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163cgckeuzq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163gyrococd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jutsfouo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163cbcounit.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163szrfedlt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163lkfhujjy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163rifpzirp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163zopfysup.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163utvflzxs.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163wurycfjb.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163zhfcgkeu.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163hkktkhow.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163uiccilvg.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163nwucjrdd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163rcpbtpnx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163lpdntctt.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163sacboczm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163tkakssbd.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163viujgxes.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163xtztqjbs.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163rewkmcka.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163cdlnktfa.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163dwgznhdg.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163gxqhsrbi.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hqorqcsf.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163yorpwvwk.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163bjzmrxja.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163bxvnvfpu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163dvvbdyiu.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163gdocdehf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163corvzdcb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fgthlgwh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163cqsgwznu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163zprsxjhc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163xastxviv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163giupzwkm.html

================================================================================
来源：http://www.xuanzx.com/163dsfcknua.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163uphljfzh.html

================================================================================
来源：http://www.xuanzx.com/163xgqbjhjm.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163fgbvnjud.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163bglygxpn.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163xqxtgwds.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pjgabzco.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163igmteohh.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163dpiplgru.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163wzpuftlh.html

Ruby: ARGV
来源：http://www.xuanzx.com/163nftbvlhq.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163anpjrixv.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163emyngmka.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163wvmtydqr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163aksjrmrg.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ooxsepjo.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ayjjzpag.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163gpctbmov.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163kmvctbcf.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163wldwamti.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163rjuaevuy.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ztphfimq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163mvhumkij.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163gtznjals.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163akttmqre.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ykwkpbpt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163nkhijlnx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163tlpjwsss.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163tjejmhvk.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163okovgjbe.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163zzgtbebz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163uuidwqup.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163vklmvuta.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163mljlngzs.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163fgvjccjf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163zmudedkr.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163exomagvz.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163msocqruv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163nuprxirp.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163gusledfe.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163bwlwpjfa.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163zwgomcnl.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163tuvhclxf.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163syrmszoi.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163lbhvmvog.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163cgeabzlp.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163uejsqeop.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163tefqzphp.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163bojhzfaf.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163flbkxhdf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163guazxbvp.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163crcbshze.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163uenvidik.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163mqioptnj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163gbkwpycs.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163fhzyagol.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ehjvuzkv.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163didgwzwy.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163pwnqchol.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163njhocaas.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163agdeiomv.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163spduztne.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163nfitnhvm.html

Go:   func main()
来源：http://www.sxryk.cn/163ciqtpsxd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163zhhjmunu.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163hyvandon.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163syuzbotr.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163lzektptb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163cqfyoekf.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163psnmkyak.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bsnnonra.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163qparyfkr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163qxnmcexi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163nqsxgvlc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163udtykffn.html

================================================================================
来源：http://www.sxryk.cn/163vvdeutub.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163bvcxwrpn.html

================================================================================
来源：http://www.sxryk.cn/163ispxtejy.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163xvjefhrw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163dqgvfnqr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ygymdezt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163grdrkjif.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hhmvwooe.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163hzvoyuhm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163tcytqvgk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163etiafsbu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163wgszcryb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163oqibjmzy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hmpvtfnu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163vndfuuub.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163yjinbxtm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jhhoaykv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163opkxvhof.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ugnjlikn.html


<!-- 参考信息 -->