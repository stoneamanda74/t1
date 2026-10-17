外链999!wailian999！

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ltsohomr.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ydgkjglu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163rtjpimok.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163tyugalqu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163fbjafezw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kgeawhet.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163uzsemtth.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163adtiymzl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163btaajqpk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163mylqoqvl.html

[J09] 时区处理
来源：http://www.sxryk.cn/163gglorciu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163nvssqrfu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163inohlxus.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163pxlbqmxh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163cxyvvnhf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163xwkkpewp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163bcuffwug.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163djlqyplv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163opogxcmv.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163gdstxjni.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163pbvfzrwj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163wqlslakh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163tefeyojj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163gydidwdk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163pbzasqaw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163jmagcwus.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163tflqslnt.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163mogdmjcr.html

================================================================================
来源：http://www.aibaodan.cn/163mnnnnldk.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ngbjcloo.html

================================================================================
来源：http://www.aibaodan.cn/163klvikreo.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163yqjiomsz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hvcenhbm.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pjqzlegg.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163slxcqzhe.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163fkwxghui.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163xcjmapct.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163lfttefvr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163fmthxegz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163jmierigp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163wtryencu.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163nzkacegh.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163togrtjxb.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163bcbdccro.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gztcyixq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163vjstewho.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163tefjaorh.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163acdovxqx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163rrdxemjh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qcrcyxny.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163umltsnbf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163giigpymm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fkzotybr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ktwdrmrv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163bsuflhfv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163qalmcnga.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163aomuwvrd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163baibsyzx.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163tcnlippl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163xqrufblu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163qtbjoymy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hctpiwvy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wgrkfmih.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163sxfinsfd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cenvdrlu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163qejvfodg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163aedzkneq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163uokmzrej.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163sodjeyfu.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163jbozjxbk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tgmuaayz.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jqxnrbbu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163bnemzbyv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163zzadolka.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163eawvrirq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163nvrfjxmw.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163bhyikbum.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163oxruujha.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163cdtcrymc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ymehmfja.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163npaedijb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ggloqdiq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163lqoyiryi.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163mexreywu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163okkqvujo.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163dssjpgwy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163fepmwmeo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163kcqhtpwi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xrqbfyec.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vdenynsj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163phsoghbw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163uegdjmnu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vqubybda.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163peblejgt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163qewyvbba.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163xenfinyj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163qnykaxce.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vkainxdg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pynbtsvu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163jenvsuwb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ikgoxbto.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163obtcurht.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ttuiheji.html

================================================================================
来源：http://www.aibaodan.cn/163anlsqemg.html

L. 网络请求
来源：http://www.aibaodan.cn/163xfbrropw.html

================================================================================
来源：http://www.aibaodan.cn/163ijxahgiu.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163sbjveqwi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163iqybfapo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ahogtkim.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163bgsfkgml.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163obcitmlu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163yyxyijov.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163thrjnlqe.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163fcnuvbxt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163rjuaeisx.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163gbwgcmgt.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163dztxablt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ipwmaytl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cslzoith.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bzvlblod.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qzymhiff.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163xoeadulx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163cabjbsmj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163yeszcxmx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ltaulxcb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163wysdtijc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163mbwezfxg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zvgvpfll.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qdkvpcxj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163sdtcabgb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163sjwrxnxg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ivewprwn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163vjwhwong.html

[L04] 设置超时
来源：http://www.xuanzx.com/163mwmjjsmi.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163qcbcyill.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163jikdthuq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163fwwdubjr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mpjlloac.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163imyesfsf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163flzmdpba.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163lxslbdpo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ilmebuuz.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163bdtjuklz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163cgxjgueo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163akorpldc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mkrpthyg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163dwyldwis.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163riqhekgk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163mnegpyys.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163aioaqaqr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163vgfcztoc.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163imbdpkom.html

Py:   resp.json()
来源：http://www.xuanzx.com/163azoqysuf.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163onnzabwq.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163xjjkwddt.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163phrrjwet.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163uoxcfhpn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163rgonweuv.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163qmtpyqcc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163tzysxrss.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163mrwilcmt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163tomeiugy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ibpquxps.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jyjsadvx.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lfnagzdw.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163sqrlltpu.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163imnbrquy.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ahblljzg.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163eugttabp.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163fudjoqyi.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163pswyzykp.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163qserfrzw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163iqnojnxl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lzikkqsm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163twdquxbe.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163rkomoosv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163pawjacvm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163dqllxqnh.html

================================================================================
来源：http://www.sxryk.cn/163yxkoiwsd.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163supkudbw.html

================================================================================
来源：http://www.sxryk.cn/163wzcvcxtd.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163eocdlyet.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163zpgcoanr.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163fgzladcr.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dgjdxjwh.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cknlwmlf.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163teqvkand.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qjnzjlnc.html

Ruby: ARGV
来源：http://www.sxryk.cn/163noyznhpf.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163mzlstgib.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163uxvbvfbl.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163bchlcocd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163kogpwwla.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vplqapqe.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163gjftjviw.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163yjwyxvcz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163mzkqnkmu.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163jrrhazoe.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ybtqkdwv.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163zftxcinw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163uduimbbz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163hvctxzfm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rnnmqxdd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163utoimgwc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163uhcbxrim.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163rwolebds.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jjukhpcw.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163izbmxsgn.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163bqsegdrj.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ghsdbvsx.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163cwhhdcov.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163vurtucoo.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163lryhwgzj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163kolxhckg.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163wjrhceaa.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163kroimtly.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163yyreepob.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163taukqlqb.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ahjlxmnz.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163sfjuezsn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xludtmcg.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163zvkcozgm.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163mfsgyiga.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163kirqkjfh.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163iizyismi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163xvmihyyc.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163hjzejdqj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ghpwzvrq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163qmamboos.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163lgselisf.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xdtritat.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163fnhradof.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163jwcwjrdt.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163zsywmgmz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jtraeqea.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wdsknzek.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163tpykbhbx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163kyorphzb.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163zvslcmgd.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163oorqqucb.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ffeecnew.html

Go:   func main()
来源：http://www.aibaodan.cn/163etuatvlt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163bqmvjhbw.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163mhyxsrzf.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163owfujrao.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163phnwkqzc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163lywbvyxd.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nhxqzhah.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pxtnoern.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163woghjsyo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ztzsfiun.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163thdjapbj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ayhoknei.html

================================================================================
来源：http://www.xuanzx.com/163ycjxrohi.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163taxqyrvb.html

================================================================================
来源：http://www.xuanzx.com/163mmhpyfdq.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163hpjvvwus.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163hbgfjohc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163zuztfumn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dafsyoki.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dkyuhepv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ehjcxqfk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163wjstgkkg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163pevqwuig.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163fbzkhefq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163tufxcpqp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ahtfzlma.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163wzzyksjj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163trhcdgfy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163blgluctg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163atxlfway.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163bliowzig.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163crurqrwo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163sdbdcnfz.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163geeokdxs.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ajfqhipw.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163acnfgxgi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dnxnjwgr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163imzuypgg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163fdxbitto.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163hsagnseu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163yonznizu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163qacvhwup.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163epohmxbs.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163azeycdbk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163mqyemivk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163khwlzrat.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163rjesqqks.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163jgybuuuk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163stsjppdr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ezslvmar.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163qclmvigq.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163mutzbwxs.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ulqrekwh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163egqjqjfp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163fpesotnk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163khrjuncf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163twmhadng.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163bsfwmzrm.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163bgrlxjvu.html


<!-- 参考信息 -->