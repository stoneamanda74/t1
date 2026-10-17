外链999!wailian999！

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163qhonuuhy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163nbssketg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163kszvwnmu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163nqkuesin.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ifzatdve.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ckxiccju.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163nfgejiuu.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163zdsxmstp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163vlzfgsgp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gmnxxstq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fufznhsx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hyfpqhuq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tnjstkfc.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163nhqrzioy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163iaydasvj.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ebzpifhg.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mgiiuqyy.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163qpqacbbm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163oogzknvj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163badztfga.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163xtewlxle.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163jxdhmdxi.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163knbactnd.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163qoiyawvw.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163zqqycpnu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ialnnjsc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163akrynfgl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163aejdgzkn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rikteaqy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163bcjwcftt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163rzkqoyze.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bccfeblv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hgadchxz.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ihqlntuj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163vkivtimf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163kfwxdcgx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163uwojlqgq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163eehpvfse.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163qfsipyzc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gmgiwrqa.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ehssiwce.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163rzecjhpd.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163osdcowsi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163phnsfhev.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163lbxpuoqv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wwzzwlhx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163udjtshqq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163nrueqvkf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163gujpevga.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163jrxvqihn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163kommqdlb.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163pmcxazix.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163dszhxjbm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163fzivuwdk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ogmcbmnt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163zdnlblpq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163rlzmkbul.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163amzarshk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163fcsfvxxe.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163eyomuyez.html

================================================================================
来源：http://www.aibaodan.cn/163upgcepjt.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163khfuytzl.html

================================================================================
来源：http://www.xuanzx.com/163uwtpoyrs.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ezctrwai.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163lslrtbsd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163aqnygple.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lprlyxrr.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163idivmxbq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163eakgnpud.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163lbxqhsbj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163mjbmonjq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163udpdpiei.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163svhunsfw.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163dupkrwso.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ajqxejli.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ceesphgm.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hzfzusvf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163xjdrhsef.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163oxrkrwbv.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163mnwtfehx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163frmxkeed.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163uznkjogy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163xvqeazal.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163aekyceuc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rmnistgw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fwoabqbx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163rgtaftgd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163gluyjcjp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163esruqynl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xueiptuy.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163pcpzyrro.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163roaluxnq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163rrhliuyh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xuwzhknr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lhmpbjgt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163xamchxom.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rangkplb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163uqjzedkw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ceggmljo.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163fiukpgsb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xxljcxvv.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163sesuoawq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163uhkgveqx.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163paibwayu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163nvxthubd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163osifuuqt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163zcvzyfvn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ffhfexsj.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163swfazfnk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163zecmqmmy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163gifjhqbn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163sqfahaku.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163rmyzyuws.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163vmxdzdlb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163pwqaxfkm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163plzqtwqd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163degnfjzd.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163fgtmcbay.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163xhoqjxyy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ulswiicq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xfezldde.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163iwbiymzw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163gjdiytie.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163bcybyseh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vbzrttyv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163cuwkxsjm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163tsgsieix.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163fsgbihlj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163wdsmfzki.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jqhqaljk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nksthgql.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163cdjiontm.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bjqvxipv.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163xsmlmzez.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163dpplofmi.html

================================================================================
来源：http://www.xuanzx.com/163anzdibni.html

L. 网络请求
来源：http://www.aibaodan.cn/163vnnbxwkj.html

================================================================================
来源：http://www.sxryk.cn/163muimipjz.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163uzjykduh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163udvkxmlu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163hshbkylh.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ntsurswo.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163msqeoofd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163temofiqt.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ifnrpdzj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ubbyctqi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163fhqyavbk.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163gssgjzad.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163auxwjhsg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163lobaosva.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163otwytvzb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xcaewtpg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163jdeazbyh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163lfcbcwvp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163bgdbppsh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163dhoiffec.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163yobgokgm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163jchmybxk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163dchbsvcc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163sxqzwtwn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163npzbwvsw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163dqrgghql.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163bwujozwo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163scyroplu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163axtzabjh.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xlgqjdas.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163cinkbukr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163kfrhctoj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pkbuylwg.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163gwdkxnyv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163voyzkkyq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163oqmvkjov.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163epojkzgs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163okrntdwv.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163zrdixcxi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163jvwitiof.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163agzpgwxw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mpkyoihz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mlrtbmpq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163wyxtifuu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163kotinsxg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163nchmffac.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ydfhrwyf.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163nwwyxjea.html

Py:   resp.json()
来源：http://www.sxryk.cn/163sibcasjs.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163hxseltyf.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163nistgojt.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163erlzrscv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163cvipjmor.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163iowbeheo.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163hkprnrbq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163imvriuvw.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163orcrbmuh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163wfpatuxd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dmzajbyb.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xnugjdwm.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xtcimkhh.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163xxepwhxq.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163pwuewvha.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ycpilrrv.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163rkmxzuoy.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163usqdaxyo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163sxqwgeot.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163syaambrv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163oysvrrrg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163reupthdd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163oibgkpah.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ndtujtsn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163vmhbimll.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163hzmmgxcr.html

================================================================================
来源：http://www.xuanzx.com/163bkatnrit.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163rqewukrl.html

================================================================================
来源：http://www.aibaodan.cn/163bnlrczql.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163lolhgoyk.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163lytuaorw.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163wjiqbkxh.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163uiurtdfi.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lpannfwc.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163qvruryky.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ltyxnfea.html

Ruby: ARGV
来源：http://www.xuanzx.com/163iuozuulc.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163lzcwvowo.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163xvbghbha.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ftjkulcf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163nkvnohju.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163veftvrgg.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163nbsydpti.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163asfeozfw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163eerkzwfc.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163yrthazca.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163outciczn.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163mumpdmaa.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163qrvofycq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163hcxxlmkh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163fzsixjnz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163exqpcpoi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lcrxmoqx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jrbirntd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ezllaeom.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ocsezapu.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163vbctnegq.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163porvdxpv.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mydbyskw.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163fgcnndgp.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163fczsttwv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163dbobwupn.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ryicctyh.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163hkkzuhta.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163elhisfzm.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ngrgaxeu.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163mhihjhlh.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163bdciiede.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163aqngkkdy.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163yljqokwp.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163cxjsmzky.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163fwjuxmor.html

Ruby: exit 1
来源：http://www.xuanzx.com/163jtphvrui.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163xnomxgqa.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qurvalht.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163bksdbmzj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163bilmksoy.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163kvoyxpvv.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163kbgbphfe.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ggnoeber.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163dqrknshr.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163fnbvxjvi.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163bhwyyotq.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163dgxjrrqm.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163vnxiewmk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163accfgrtr.html

JS:   require.main === module
来源：http://www.xuanzx.com/163traswsfw.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163iowggmpm.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163xadekepu.html

Go:   func main()
来源：http://www.aibaodan.cn/163bbwntgnq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163nwuryetu.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163oyghhdpk.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163eaujatod.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163rwwyhqps.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163bmdboozk.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163umhdldne.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dzreauuj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163wheomdhc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163idjhxrdm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163yfjibeso.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163xubqugqw.html

================================================================================
来源：http://www.aibaodan.cn/163rruvziut.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163xhgsexfy.html

================================================================================
来源：http://www.sxryk.cn/163yfvbmjhh.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163obsvzvnn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163sefeocbt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163qgdrhril.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ccwrjaaj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ucuuauum.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163rayptjdm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163foxalskj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163dczjeytq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163vfneceqz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zwqdajsy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vqasnwvl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163xbvbrkqd.html


<!-- 参考信息 -->