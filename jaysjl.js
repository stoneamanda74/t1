外链999!wailian999！

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163otyilvmo.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163hzazolih.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163dwiymkno.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ldbiukgl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163mzrbykzo.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163gshvovoc.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163elsnosol.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163rjplnaca.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163kjdofpbj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mjzwrahj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163meczxqzk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hhpjemiq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hnrwbqdu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163kynmxkie.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163zggjynwe.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mwcgnepu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dihfqbkn.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163mziljzya.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163sgvlcrwi.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163phcoboos.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ytzzfkjy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163akcgxduh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163elnbybym.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163yysejpgx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163eyzfafsj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163lrtpkndt.html

[J09] 时区处理
来源：http://www.sxryk.cn/163eyyeybnw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163zrdjmnae.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163lcdvhphw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163kmcmqgeb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kflhhijf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163tgaznugl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163htkphtzu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163irvpstxp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jhoancmr.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163tcirvbib.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163qgjefxgt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163txxygjyz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163sqlfipsi.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163tcqmyriz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163edxglzww.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163qzkgpcaw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163qwwdkhpa.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163otsefjpj.html

================================================================================
来源：http://www.xuanzx.com/163epycldvy.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163rwiiyojr.html

================================================================================
来源：http://www.sxryk.cn/163kggxtjvc.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163lsbejzhu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163eztbxajs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163murczwnz.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wbrnbsvl.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163eogdjkuu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ltaolvvq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163mkdffbji.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163qpcmzibc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ykeitjld.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163blbnaxqz.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163onxmldgl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163numvpysi.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lxpcwuan.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zaztubxg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163gsxgqccq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vxmxhynu.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163jgqlrcal.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ootdzbam.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163rvbfvpxk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163gjtxhujs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mbgceqma.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163yznhrfpd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163coprswqc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163lyxcjcau.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163hcfvofzj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163irvtnime.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163aqyfcnko.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ijrppoav.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163dhfvsdzd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163tiqblujf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163cfhvedjw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163slksyseb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163botasmcb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163cnkwnssr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163tfimvgmt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163venturaw.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163zaejgwdh.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163hvwdgugm.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163hohudyon.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rzgjvksz.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163bsgdqmek.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163aqslruni.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163mppbitmy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ljcshzav.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163giwxpnxq.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163scjzmame.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163gqrzksah.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xlmyclcv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yvymbbhj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ruvbvhof.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163zbywjepi.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163zgphqwov.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gmryovhh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163xgauxdgx.html

[K07] 进制转换
来源：http://www.sxryk.cn/163xkzblzmy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163kiqjkius.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163adbeectc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mnjjtgul.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163utugnzhf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163wktybpcm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163avbqjduo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163szjawekv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163hjkvoczv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163mrlbbxgf.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163iqwtvgke.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163srxcvnpk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qvazoeul.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ladtbxyq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163eyuucczy.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163yjoemdwq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163tieprfbf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163talsemiw.html

================================================================================
来源：http://www.sxryk.cn/163gzzymrer.html

L. 网络请求
来源：http://www.xuanzx.com/163bjhalacf.html

================================================================================
来源：http://www.xuanzx.com/163lnvyrtbj.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163zkzpvtjf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ychyrnps.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163hhydfzhz.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163wkmalkqh.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163uifyvwfr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pqewjvar.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163htuckjur.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163hzvkkqtj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163fkkykrxq.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163rwdjwbjy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163tjrbyxoh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163kwtgspyp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xdywxjlw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ngkwlqex.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ovewmiqr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163gqvzmkto.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163xikzmemy.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163czmnawak.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ojdhsxkh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163cntgxzhp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163gjkwxbwx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dvfuxadg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nauzfycm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163efelmlro.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163mxjaeynu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163zpuhuhag.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163shnpgccl.html

[L04] 设置超时
来源：http://www.xuanzx.com/163usliclfo.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163lgsyjkpf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163nitvmbiv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cbufjzwv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163sttqykpy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163lygvwkel.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163dznmsljn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163jqwuakns.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163okwuhinw.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163rgbkzurg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ksbmogek.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163gursmnym.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zmgclgzh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163trjrzjys.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163emjtrmjo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163yzprpcjz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163qwiwiula.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163uzdqoosu.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ibsodcnj.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163rvcspyay.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163qzpvhxbm.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163qsmevgoi.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ssdxeuyh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163srmexjoj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163wqrffvfs.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163zjqbkvyc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163kfaunldj.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163khbykcpf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163jwrkjeti.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163wirkuekx.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163sfdpljqd.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163pdhmmyfn.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163acwvnari.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163mswymmaz.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163vurlskhi.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163fvbptwhm.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163likjfwjv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163aqulzamd.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ppampeij.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bfjefqen.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mbtpkpjg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163dfmkycto.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163eddwllig.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163vdbzpurg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163aauitcuw.html

================================================================================
来源：http://www.sxryk.cn/163oizupkpn.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163xmcdrvlu.html

================================================================================
来源：http://www.sxryk.cn/163cerxbufw.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163qqlcxxom.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163rtclvzyt.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163mxmcuvap.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163stcsvpcx.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163fxqjgqas.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163vpovkfdf.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ykexcpja.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163lshajmqc.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163imksswcr.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163wiznmpbl.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163cjoqwksv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163vnpyqalx.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xkrymdpl.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163elelanha.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163xsarkicq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163oabzlnvi.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163srvqgxyp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163fbmdyggf.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163whqhkjxi.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163cwpxwxfv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163wcqdthut.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wmajiudu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163vnhbkpbb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163kyaqoves.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ovvrtujy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163qpxpapje.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163bziqwcwj.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ivfnudrj.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163fkclemlb.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163amxdlceg.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ikgmifrn.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163aplibgth.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163bcbezgny.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ppnsrgks.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163mjrpazze.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163kxznyvzy.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163tzrsepcc.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ikmzewkt.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163lebgoowr.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163fsuxenyr.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163fsugzbig.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vuijubjs.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163zqfovtnb.html

Ruby: exit 1
来源：http://www.sxryk.cn/163elqyyqld.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163wturcqdd.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ukgmdwki.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ynelxwej.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163gisgnuaf.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163azjvohlv.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163qafdbsbd.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163bfvdzrti.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163mmadggug.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163mavldemi.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163pwwiyxfe.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163botgqkhq.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163icyibdia.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163afqgfyxc.html

JS:   require.main === module
来源：http://www.xuanzx.com/163uxulgcwe.html

TS:   require.main === module
来源：http://www.xuanzx.com/163jisrkgid.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163qlivkkom.html

Go:   func main()
来源：http://www.aibaodan.cn/163tccijfvk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ysgvuoqy.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ylwqlncn.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163fozsffmq.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163kewstavr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163sopamvhj.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163usuvtmoo.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vzxcdhza.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163hutkbgfi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163uiqwwpwm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163lwfugwds.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163lceasiab.html

================================================================================
来源：http://www.aibaodan.cn/163oenzuykb.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163gcjffldz.html

================================================================================
来源：http://www.aibaodan.cn/163xibtgrmx.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163enbqkmrt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163jtlpqfzo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ztuvjmpx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163biqvajqe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163jajnmxjt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163yayyqfdm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163cqdqffth.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163xvxfdrwe.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163usznkcrl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163pbbzyhhh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163sevctayn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163lwnpylsn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163syrjxque.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gjauynom.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163bqsflxwc.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163awwvdvok.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163tyutgvka.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163kpywckmz.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163wshvyccr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163xozorvuf.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163kbwurakd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163doejbuvv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yqlmywce.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163cadgcsab.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163jrvvchfg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163holifacy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163jyauoidb.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163dvdfhcio.html


<!-- 参考信息 -->