外链999!wailian999！

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163clagiqsb.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163gseipwpo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163sssuokga.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163qctelpli.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163nslwlfob.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163iqsqhrji.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163piflvzzc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163nwqyjycf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163teqxdrin.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163oxsgddcq.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163fhsdwilx.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163elmqlwnm.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163yuzckxfs.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163udkjlegd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163khlrviva.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163runqielu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jfzxxadx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163jbufmnzo.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163jfgyivvn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163phkelxll.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163crwqvdxa.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163lhtjdtgf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ybdbxijj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163vfeeufmu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163uciwjivw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163fmuckndp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163oymwkgrg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163klyjulzi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163mixgesea.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163pkinxaom.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163asqtrcfi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ukxjgzkt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163waxcjvlt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163aloixqsv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163sqwbqall.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163fttrwlix.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163jluigmad.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163wfhnjclu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163wipopiix.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163amveibaq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163aaeczrgt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163fgvcfwxo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163iwjptrnl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163jtinyhuw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163yzmvehaz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163agggcyjc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163whetvcyq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163thtufvaf.html

================================================================================
来源：http://www.sxryk.cn/163mxcorrcj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163yktkyaef.html

================================================================================
来源：http://www.aibaodan.cn/163yhysmaoy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163bjpdcpda.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163psqtezcl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ccarwwow.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wphjdiyo.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163iavlxkon.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163oivrespt.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163gejtnicq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163hexejmpe.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163fmldmatn.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jalnwptz.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163thrzuuhg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163iggvzzeb.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ijyftopm.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163pxazarel.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163hhveojpe.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163oawmwjaw.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163qgngtvxk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ewbgbebi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163sotasoyg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163kdowcmfq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gecepiuz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163fxbvivnt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hctlrfgk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163vouonpcv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163yacoatdx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163axznmeok.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163qbxardoc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163aktzrrdj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163nfvfctmz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163dyvmamue.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163gshwzrla.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163niagepra.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163oqriuhkc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163grmjxmta.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163aigkhktd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163wdkgngsc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163oucjrohb.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ctylncpj.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163mzxsplwx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jvuacyrj.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163taokdqqf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ixtmehpd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gbmixraa.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163mcyxunuy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163exlhoknv.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163boopkgbo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163khjwgjnm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163bxffnvxa.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gxmvxngm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163cjsthuui.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163sdabsjza.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163zsjhhaie.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ucpgzmcq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163dusxakxw.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ofhriicn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163wcukywaa.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163nfvudaoq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lmmvftgg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ccugslnh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vtbcwyen.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163uhexmjff.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163mvfamjod.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163nawuhvyu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163mwlzhfun.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163spuefljf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163icnbeerp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dnddebgx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jwpyygjm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163qnzwfswy.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163omyyglfp.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163auhrxosd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163jbchdyjy.html

================================================================================
来源：http://www.xuanzx.com/163cdfkbodw.html

L. 网络请求
来源：http://www.aibaodan.cn/163gspjvzrf.html

================================================================================
来源：http://www.aibaodan.cn/163tjafgxeb.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163dirdltgz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163urytimgf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163dcxsiyhb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163nunatibt.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163lrcdokpv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ndefvfyv.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163gyhlfvny.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163razaocht.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163epqhwdcr.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ylmektoy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163dcfksrvv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163nmbjkjzu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jjzlgjgo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wvunkrqt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163xrtkoqsb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163jpmotyww.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ckyrhfnt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163kbkytmub.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163nnyuidkw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163hebxstze.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163qrlodmyi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rtuithoj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vkkcukbq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163dcwhtfvg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163rsxndcsv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163spwedejx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163elorgqhl.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ewjaqiju.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ceihtden.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163rppehoir.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nelxwlps.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nolphrld.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163askdjphq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163fgrgxahb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163cendoejf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163llcaeeds.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163gfococgm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163jtfqzxho.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ofgikxrz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qbrvsvzn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wwyirxie.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163jstlynjh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163manrigzx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163intizplj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jppkaehy.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163fspoyrgm.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ujxwsthe.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163rqthephj.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163urihrlvo.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163nlhglktz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163geokomah.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ithyuitx.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163cbvmxwza.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163xgrpbrzd.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ewwexezq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163zudwjawh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163kadnocjl.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fvidehfr.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163eajdhrrd.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163dzkkfyva.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163aafzuqtx.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163cicizkam.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163gymfrhvi.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163defiqxbd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ctzbefjz.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163prtkbfqp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zkjjrysv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dfnnzoby.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163yrrkibdz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163lzdkfzki.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163mtgclrft.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ucmewhsn.html

================================================================================
来源：http://www.aibaodan.cn/163ivajapjb.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163mlmaourk.html

================================================================================
来源：http://www.aibaodan.cn/163ebwokxtv.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163crzyyrej.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163isnmgvnc.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163jrrjizmc.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ingvxprn.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ihkgaugo.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163vgsuvraw.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ftifyccw.html

Ruby: ARGV
来源：http://www.xuanzx.com/163wjfiuhhi.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163mzzxyavj.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163adaedjxu.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163htewcryy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163hezzajzg.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163aisljmai.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163dplsmohb.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163zqmnjexm.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163dniegxia.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163gnombcfv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163dkralzcr.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163yqiqbfkg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163nnuuszsq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163qplsrgsv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163enublgkk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163vnztacvb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163opkglhiy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ujcdmjxu.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163cmaheits.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163vjcdxrpv.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163eddmsplj.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163tlchkwhj.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163rmsschry.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163rutpgsbs.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163chtrmqte.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163tckwrtxs.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163vgiuqbus.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163firukmff.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163trcrkaen.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163qfqpqzfa.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163vmktbvmz.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163gimnkuns.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163qhpvukke.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163tipkxzoi.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163loxtsuoz.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163oslrmuoi.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163udhxtogv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jszntslx.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163sqsjsozj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163udyysokz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163fhcslhan.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163fcxrqebk.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163rewlevff.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163zgafqiof.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ulzvxfbv.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ieerqdxb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163wsqhcuwc.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xruscgdr.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163wrskmiav.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163eevedjzo.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ajifvovk.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ltjqlozf.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163qqaxszyt.html

Go:   func main()
来源：http://www.aibaodan.cn/163wefpdfni.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163nqzhzjzz.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163nofenhiv.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163uapdudjf.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jiuuwytp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163gzabzyhx.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vfeanmyi.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163kzmmtkem.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163adbnroaw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163lbldmann.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163fmsyqwrh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163jlpxzduz.html

================================================================================
来源：http://www.aibaodan.cn/163pofugpkc.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163egwcphzf.html

================================================================================
来源：http://www.aibaodan.cn/163huszypkd.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zzhkfltf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163lkutfpqg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dvhprlwb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wvudhjdn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ltiicclg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163xutdszcn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163xaxhicrp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163jsychexz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163gsyjodux.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163arzhdhrs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lodoompg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163rnybrrlh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fheyxfek.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163poliyhyt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163mlwbbowu.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163neqpckjy.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163doozrvit.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163fhlrluhf.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163jbwkrnrd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163kvptfoab.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163lwfvioop.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163goethxnf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tzebwgkn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163bnvnogmd.html


<!-- 参考信息 -->