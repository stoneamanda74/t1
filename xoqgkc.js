外链999!wailian999！

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ipjkjytz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163keznosmq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163kmciylfk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ktgqybtj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qopanqpu.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163auyjjhau.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163heontgxf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163cnbytnfu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163kuspldvt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ruqrznbi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163vvjhtuks.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163iatqodli.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163vsyiizjk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ojsyripw.html

[J09] 时区处理
来源：http://www.xuanzx.com/163xlxqkiun.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163tcteegaf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163rmdaaihe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163mlcjxsaj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jgytwsif.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163xhavvcwo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163pabljohy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163roixvdhi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ykgtozhi.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163mqwqxmun.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163dgeaxpqe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163icopvjhd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163zszlkahf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vfczykrr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163uecrwjoo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163waizequm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163wpvzzmtn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163iiasfrqy.html

================================================================================
来源：http://www.aibaodan.cn/163acthziqi.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163dhrggzqk.html

================================================================================
来源：http://www.aibaodan.cn/163vrzxoams.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163zpuwkvdg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qgszidbu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hhjdathu.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rghsfyox.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163sgjdacbe.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163eaagahfl.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163abgoiear.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163dyfgaaaw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163qdhqxboc.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163rmthelfo.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163emwabfeo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163poegqhkp.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163szmceaar.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tdwhdtvv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163dccpmyik.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yjdkurfe.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ljelyipi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163wjnthwbz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163wsohbxjc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163vjidpybk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163shcykluv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163icmbinwg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tyehcjxv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163xfhiclnq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ssyyzdmq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163vdiausbv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163myzgctzd.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163fbulbsaw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163lqqcjfdd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ubpoecfp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163gzwofwja.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163unhefijc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163gcfmjcha.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163grknhgar.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163pkxpvrij.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163knebclhj.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lyjnvgou.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163gbcwrdsn.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163hgmrpjsz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163livhkamn.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nhulupvg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ffcjmpqg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163knbfbrze.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163qztnagwd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163qoumpuid.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zmdjcsrd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163zgdjjsda.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163llvactdm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ucqcuwey.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ctqbmwfo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163gvnhonyo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163pcsdxxja.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163uqbuxlpy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163abvxdqno.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163lbifxwvt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163oyamterc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ugxneazm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163krgcmjiq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bsuvtbvg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cevsrddm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163zfplevhn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163oroteidp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163nnvzlxaa.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163phwgwdjh.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163tbztgapl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zsuoiqnv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rwknpnso.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ymxvkynd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163vpklltoc.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163vgzujbyb.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163zxtxdusi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163snhbytzt.html

================================================================================
来源：http://www.xuanzx.com/163mkbcudjv.html

L. 网络请求
来源：http://www.aibaodan.cn/163ffdkzbxy.html

================================================================================
来源：http://www.sxryk.cn/163twftjeqk.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163sisijwum.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163zbkdwjdz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163qcnuaymb.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ixwjlrsy.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163onwtrlrr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163qjhbcfnt.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163npgyzbpx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vvtncuei.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ydbdjabj.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163weikicyq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163sizcjknm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ogxrqjed.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pczcekbx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yzfugtcv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163bamtbwvv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163mibmmvve.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163nakiuutg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ybuiiwff.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163shcrhaha.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163blsufpcx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163cjxsqmcc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163kbazlsvo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jgbkxdfl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163gpjnaqaw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163vkljajto.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163rbnzjozg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163wizarnei.html

[L04] 设置超时
来源：http://www.xuanzx.com/163cjnrqpse.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ioprcncq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163yaghxrgu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163abqvygmc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cqvtkurb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163cedpkggu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ybdiudix.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163puiopclv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163upzxupwn.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163rtqezpse.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163vveeyswb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163yhytmwva.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rfcgpxtq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hvlovwix.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ujzzlova.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163xhcgdwoc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163utyiofsz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ibrdbykt.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xmmofitu.html

Py:   resp.json()
来源：http://www.xuanzx.com/163qkueuymf.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163vryjmfbk.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163uphzolvy.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163fqagkshs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163cbgpxorf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163wducipva.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163igpiqisw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xrvpbqbc.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163jlvcnkup.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163psibbelu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ooogwvoq.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jtgpbaan.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163epsjcoin.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hnlaqfvr.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163lghetakx.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163fahotqan.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163aewltgri.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163qijxuryw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163akyhywwe.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163aayrdfgv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lusqnnkq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163btwlcoci.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jvctduth.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163pyfhpgxs.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163deaxpjxl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163uuvorhmv.html

================================================================================
来源：http://www.aibaodan.cn/163rzwbwqrf.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163oekhfkpq.html

================================================================================
来源：http://www.sxryk.cn/163owvymift.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163vwrhgktq.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ypzooztd.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163cbdkibfs.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163byijkllf.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163jljsdlnh.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ybculedp.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163grrsssnz.html

Ruby: ARGV
来源：http://www.sxryk.cn/163gqezowcq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163vehdejji.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ahgzjsiu.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163nvqvptvc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163fqscnqgy.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163dwspfmcl.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ednnhbxd.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163wrfjfrbz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163shbazlnb.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163nlvcdxwo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163mwbagruo.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163aaotpclc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163zdcoegyg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163nhqmrvbu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163trjkbbtv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163utnhayxg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163cbxcraar.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163augdwwtq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ybvcbwvu.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163yzpifxgy.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163vtlfvejw.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163xdtmvxzn.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163egcxqwvb.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163alwnpbzs.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163amraqpwl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163abpqobbs.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163kdqtvljx.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wqmunyky.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163sosuphfh.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163glfegvyo.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163suirejai.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163bqvyclyq.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163qniyhays.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ovbzgxgw.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163cbdveucx.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163dqwzffiw.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163oxhtwwvo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163gdstduxv.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163cxcomfre.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qomvezdp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163othvxcam.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163wxsyshce.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163zgxnjjfo.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163gfmctqcl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163vhpnomwh.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ssytauhf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ikxrpbqs.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163pifeovsg.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163faetxsxn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163hdmqaoie.html

JS:   require.main === module
来源：http://www.xuanzx.com/163lydnpohm.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163oyirpmnc.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163pkzwzhhi.html

Go:   func main()
来源：http://www.aibaodan.cn/163ifpfabbg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163jvyfuzhj.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163uzzurcfg.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163bwiqzdaw.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163zqgvatqq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163nljqoxwc.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hdtqvauu.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163htzxqcen.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jsdtxjbu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163zttgdaec.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163qugqcdkh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163rbathulw.html

================================================================================
来源：http://www.sxryk.cn/163pzmfboqa.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ocdlpvbe.html

================================================================================
来源：http://www.aibaodan.cn/163mptllotj.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163fencakmn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ywwtavqf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ozuckxsb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163spyrvhsv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163sfieteqq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163pnimhxfa.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163mdxvjnwy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163yinsepwa.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ssibakuw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163uknrsnyn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rsojstmu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163jdroxnic.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xrarthft.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dywvzvcf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163reqatjdm.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163sexbdaww.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ffalzaov.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163tmgwbiyk.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163epiwkklo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ohwydlhd.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163bljttzef.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163kvvnjhob.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jfufkrcy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163qkiiayys.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163beuvvwmh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163pdqcrnnc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163gdfgwqpu.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163qamxnjjk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163efqfqild.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ivyrotmt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ljqcgncp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vazapatu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163byqhwkta.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163loopchfo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163klkbnrky.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163syrppecq.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163qkxebgyl.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163gdvudbnd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163fclhgwar.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lzvjrpds.html


<!-- 参考信息 -->