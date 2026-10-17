外链999!wailian999！

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163sopyjauz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yiidbguo.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163trjbonre.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xrimdimm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ejgdzobz.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163hsutajgh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163wrwxmwej.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163uciwkdxy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xvhktxuy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163tpbwygqw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163huffmfnf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163veldqvlx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163bafixxuo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163nfkeavwy.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ogobmkvm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163uobpmjsy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163fwmrijxe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ypclflmh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163nerpdqoj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163fhzpccjg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163jiuddxaz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163wzdjzwji.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163tgxwfmcz.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163fdeaxgjm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163fdjfxgti.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163zoemxdvd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163spsfoaxi.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163layiktcu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163zckggsxi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163lduimnam.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163lzsyhkda.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163arfupivv.html

================================================================================
来源：http://www.sxryk.cn/163bmevcgxe.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163mzmvzhcc.html

================================================================================
来源：http://www.sxryk.cn/163vdzyiihb.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163fiqnlwwb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163mctrumlp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163yqlgmpia.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lyohzknj.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ifpsqfal.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163pnomkrvo.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ndqzwkmw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163revnacsg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163sqqfipzp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163cljxxujw.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163xaryqnox.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ohjhiwpx.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163kijtqeyb.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fdpzsrxd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163xayzyiej.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163cfpbegau.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163yxmfrgci.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163jbokvpyh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163oglpisla.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163yphailqx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163yjayerzg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rkmewwwk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rsewtoef.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163zvtpqvrf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163dnjicrzw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163dkdodeup.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163hamghmwd.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163mzwegjgz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163jscpfike.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163sakqtovr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163leawurlj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fjhpgllm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163gmuhogyh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163stqptzvl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ghxpiiop.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163hzjqsmde.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163bmbwzqpu.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163laywyhmu.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163fqsbbcvv.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163aaxehcyb.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dlpmeapc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163grwjcgbf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163kvirkcpf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163kvcsccjc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163qbiflwsh.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163jzyughdn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163vvjqjvsd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163qqkrvtef.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gusuexse.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163htonumrz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163opmtvlde.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163tovakrlw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163xbzpziez.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163hyspqrjw.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163etpqzdvh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163snwupmal.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163gsozakns.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163seuvmile.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xwedgktn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zcbaejee.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163pwsgdvfg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163jjymmxjk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163mfwweape.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xqxssiir.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163hcjpzewp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163dgvlqsfs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rhqotura.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163yrkpglpe.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163jmacuduy.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163mbsviqps.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163bokjwdsa.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ypyqadur.html

================================================================================
来源：http://www.xuanzx.com/163ituzwihv.html

L. 网络请求
来源：http://www.xuanzx.com/163aiokajko.html

================================================================================
来源：http://www.xuanzx.com/163fkjtzlfu.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ihowjriy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163gebxbwlo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163nkwasqwy.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163lmroquus.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163omufgbxl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163wqrjamyz.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163bpcjmioh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163gtbkxlnz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163aogwmmin.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ttomotxx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163rnsltbfq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163liwxqycr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uxpacpjm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163oytuwfne.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163bqvnnzly.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163xcemdyap.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163lmtbbjug.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ffvpkzje.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ajrtjkzv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ifhsjzip.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163whglnkiu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jcpohojr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163djvqewiz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163sewssmnn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163needeumz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163zmnqweeu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163qnzbbhqa.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163idnfisip.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163sxfweykc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ivyorzsq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163gpbxqxey.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163psedkipo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163vgmqnjdu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ggjyruqz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163hkpprcaf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163xfihxghl.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163fvttghdk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163kckdttoi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ebspjqlg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163uyjtwimh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xxgwkaij.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163vdasqxsp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163enyawzut.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bhbptryy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163jthloacj.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163tspkkjyz.html

Py:   resp.json()
来源：http://www.sxryk.cn/163jvdjbwwz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163tdtnjlab.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ftllbyqx.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163eztaapum.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rjyfenfw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163poihhxll.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163jpvcmxar.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ajtxwlot.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163dkwwiymn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163dyfffdrj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163vpkzhrfi.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ponzqwno.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163pzqzvvsv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163gellujba.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163lnczylrr.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163bxeukidi.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163quhcwxjq.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vsfxaiqy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163uconjjzl.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163tbkgzlex.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hpqgmhpb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163knyetspu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163yktdhalq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ceaooqab.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163kiipwlhr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163jzfaibji.html

================================================================================
来源：http://www.aibaodan.cn/163drnufsuu.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163lqskvubt.html

================================================================================
来源：http://www.xuanzx.com/163ezlixgco.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163cnlchahx.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163bioxmizy.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ujvwrszd.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wagjtgmw.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bulcwbib.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163qzpwtmyh.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163hkubofzc.html

Ruby: ARGV
来源：http://www.xuanzx.com/163jackwcvy.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163yjmhhilz.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163zikczsop.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163lappysmz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163zynkzzjs.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163nyxqivlw.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163vnyoluwj.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163xjqazyux.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163sopowvzw.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163taltfght.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163qeapwkoe.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163azzhcvwt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163xfeynecz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ualjfazj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163kqwqfrti.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dhlgskbs.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163zigjaeoq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ectwtocw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ywshnafi.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163kgtrluxj.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163nxrtfyve.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163quogtrii.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ovdfwepp.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ldqhywim.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163qtockqtz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163gvulojmc.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163qcawppev.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fjdxliod.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163eezqxxoz.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163hxozsvyt.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163rnjtxrmo.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ehyihefo.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163gxyylsnh.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163phrmegjj.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ibtiezdq.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163unnzfmtj.html

Ruby: exit 1
来源：http://www.sxryk.cn/163lvktsrtx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163fkthdslt.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163fftkrjhl.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163rxkdukjv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163xmvdxpnc.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163tmdiigrs.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xqefhkrb.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163lrloqzet.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163rpduczlx.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163wpjbqwwd.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163wbnhtjvl.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163qdphvbtk.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163tpstejbf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163qqfaduaw.html

JS:   require.main === module
来源：http://www.sxryk.cn/163mtyexgud.html

TS:   require.main === module
来源：http://www.xuanzx.com/163uzjjpgod.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163bvsjumhg.html

Go:   func main()
来源：http://www.xuanzx.com/163niybzzar.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163qxtujcri.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163rzbpvuzt.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ecnslmnp.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163vuggrwwu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163njnoeobj.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163iawnuxjk.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qjntyjnk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rxcsvvxu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163zjsgmtrs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zgokiqcc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163kgeawpbc.html

================================================================================
来源：http://www.sxryk.cn/163jjdqlubv.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163rkwevdcf.html

================================================================================
来源：http://www.aibaodan.cn/163dahmfnjm.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163hhsixtol.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163aymbsxar.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163mairnerg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mxqwkaac.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yzcavtci.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163efoxuwrw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163cueryedg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163mqgbjlcv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163kvmdtxqh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163wwtoviza.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163aqvnztun.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ffcjqnbz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lwoiynxv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kspaxlfy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163plouigrx.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163qvojsvsi.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163uluolzyf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163adaondvu.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163kmnqngrv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163werlfdlw.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163wxqtldaf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163hqplpnhd.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vvgbpkif.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mavgjkzp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163dtvqmxku.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ybbxpugq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163uqgjcvqz.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ztaojxpi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163swjcpkiu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163txnyuskx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163issxjxwb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bgyljawo.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163pwrkuhhl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163dxiulslh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ydooajkl.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163lejhjoel.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ieaqjqvf.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163rzmknhaw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163pobhahrd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lamlzdgj.html


<!-- 参考信息 -->