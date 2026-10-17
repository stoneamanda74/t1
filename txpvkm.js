外链999!wailian999！

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163fdafwpge.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163sdxczhhb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163edcyjehz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163jkzugpoz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163hnvpdgdc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163dakkfkkq.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163wyzecoft.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ftfbsahr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163dxrzdwgr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ydlombks.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163udxnqatv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163dldwnszd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163fgjxsudf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163xpsfslzk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163hogfncpx.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163vtgdfpjb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163bcfzxufb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163vmxjnacj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ldwnlbbi.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163kvfjnnah.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163sylvwnhr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163othcypgb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163awaettvj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163pfmzcdoc.html

================================================================================
来源：http://www.sxryk.cn/163xekbnmhe.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163didzgupo.html

================================================================================
来源：http://www.sxryk.cn/163sqlpjejc.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163astzvxcq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163dcwfmtxq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vyurnbiq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yeoqnbwa.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ywdewraf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mnudcgxp.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ciajiewl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163iufqzguj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163sdysnelv.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jlvadsbm.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163nnuagthp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163tpexjzbi.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vcwgptdq.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zvimptys.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163nacefrnn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163aspogsgl.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163uwdurcgg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163izyypvrd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163zhrzqksw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lglhvhvn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cxzuwvls.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uqzcolea.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163bexownae.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163qthvhqps.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163zxzlmebf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163sopeduet.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163plxbdncj.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163llbhplyq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163vhjwypbd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163niersvof.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163blepcgzw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ttvcvlmu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163jbbdbewz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163opywfuqa.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163bblmosii.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163xtvhqpsc.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163xhnjqzqq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163mcltoqor.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163gigbertj.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gktavmiu.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qnnocnra.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163kmzizemu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fyunmdhc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163zllkgego.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163khudckrj.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163rmuirzam.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163atenogem.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163nowaheii.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163boithcez.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jyhalxfb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163hwxzhlho.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163tgbgzytb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163hyrqiszu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163cnhymqzr.html

[K07] 进制转换
来源：http://www.sxryk.cn/163yloqgrrp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163zwaymlro.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163kzklrndq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hqbkwmhc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163znaojbdd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ivsdkrpp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163exlqkino.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163aittixtg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163rcazmjpi.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163cfvzkxcx.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163igwpijml.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163nthogtbx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qjoviedp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163brknlosk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163eqmzwxue.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163dvyyyxuk.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ljosjrbu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163frjyczhg.html

================================================================================
来源：http://www.aibaodan.cn/163cspmbcbs.html

L. 网络请求
来源：http://www.xuanzx.com/163sqtqayiz.html

================================================================================
来源：http://www.xuanzx.com/163xdbujhmn.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163njyybwmo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163rdhqxfjf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163lpvogqvy.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ckkthmiw.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163mgkinuib.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163seczpuoi.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163vtoywmhm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163mnymwyjq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163vuvltnpy.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ewtixjjk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163bqcrulsl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163gvvvpgcu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163csvhwprh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163gvhmvirn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163gyhtpcgv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ggucfled.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163gijmdzkt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163vumcwsbs.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163qubiaaqj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ztykurvt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ivxdxpfg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163prjfhgow.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tverxjhy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163zplermki.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163hlcbiqfj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163arvqxnhr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ujzdnvtl.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163mkphigpw.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163hkwgahrt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ogkwgdic.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163arfdquga.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163itdpjepk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163lgyjjzas.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163olrtukwq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163pgpnnajl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163eomizjbn.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163aqcubuir.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ohjrlryi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163shzculgz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rypevnzc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xvbqgres.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163fnetdndn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163mwhbmikz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bquzuabb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163tusrckzp.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163mwtrfozh.html

Py:   resp.json()
来源：http://www.sxryk.cn/163zlbkzqfd.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163kgmmbkbn.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163sarceasr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163wmawqojp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163jmkjdzjs.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163yktwkcko.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ldvoxsax.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zxmlvpxc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163bsiyodtd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163qzspzvpc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ormgblkn.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xgflvtvi.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jrpnmlpd.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163htmihiyi.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163czthtfbl.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163immlupql.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163evchbffr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163zpptbkqt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163lgviqnfu.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163yecoxxqj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jzgmquqp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163meaqfhqw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163pzbpntdi.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163fsyoauyy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ewnmeopj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163rtnsylab.html

================================================================================
来源：http://www.sxryk.cn/163vznkrsqx.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163vumgcurr.html

================================================================================
来源：http://www.xuanzx.com/163kqphivnx.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ollahfdp.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163scgvuxno.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jkngrxsd.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163aujqzgsu.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dkkcjjhi.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163vmmzbktt.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163mivwqwtr.html

Ruby: ARGV
来源：http://www.xuanzx.com/163hsdczprc.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163gheultzs.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163jhjyobaj.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ymtfvmcd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163imlcvdvd.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163zoycizhe.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163alxxhcmk.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163dyjzbrmj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163lrvtdcsl.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163igwolffv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163fxobbcte.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163obvakrru.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163hgjewsph.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163fifnyiir.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fhngxrvb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zbbshyqi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163edkkkuxg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163yrihtqgr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ishziwuc.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163zpywzrck.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163swqqghew.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163wrwjlzgp.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163kanjtdyd.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163jmxvgjnk.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163pijyyvgk.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163aonlxycl.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ephiiwjs.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163uoblliyv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163pypqwhbo.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163zlnobegy.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163vdetbbwr.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163gnramaus.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fumidski.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163kuluavvt.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163axmdouyx.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163mhgwasuc.html

Ruby: exit 1
来源：http://www.sxryk.cn/163cxhiggmm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163wimmkcar.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163pnuhkwcp.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xtpfyjxm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163vcjlsykf.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163kbtktgao.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163yzlzehdk.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163mwzxvxhx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163xewepfpf.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163wazqwpvz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ffnqvkij.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163wtbpqvzm.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163thcuswny.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163qfhayuae.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163zebtgcie.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xkncqkan.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163bljolqit.html

Go:   func main()
来源：http://www.xuanzx.com/163qhdrgims.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163waimnqqa.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163dpxflhec.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ifhdmivo.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163dcoargbk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163vxqcbbel.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163eoloksqo.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hzqxlcka.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163drxpoive.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163pbaenkiv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163zuizzyho.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163zfuvqsmn.html

================================================================================
来源：http://www.sxryk.cn/163btzckhly.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163jskdymyr.html

================================================================================
来源：http://www.sxryk.cn/163gkylznqt.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163uurqjzxr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163kfdwekrd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163bxeujvxe.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jtdcvdml.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163aqmqmijq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ztzeoenn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163dgiidsxf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163xgxihrnm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163xscbaxet.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ebbsggef.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hgilayhs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163sgqgtwqj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zrszjbcc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163eoqtvnvs.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163mlbwaytq.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163zhtzlnvz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163iutteswv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163azxffihv.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ycwzyxyh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163eqhwdeai.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163pcdehnkk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163bkzhkbgi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vkxlgmwt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163hgnavvjn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163gfnhlyuv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163swolvlax.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163wbnzzfgr.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163qthhcrhx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163iuokuosy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163tsrfctig.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yhhcikjg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163rrpkfagm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163pmcvykqf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163tbfvktzs.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163dovhlvut.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163oxyklsoi.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163gqzhjujm.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vitcxbdr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163kgqwzdtj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ciawiubw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163djxrircf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163armclzij.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163wlemmevw.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163xzomnojl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163qwjgzoee.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163liumlsxg.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163fnqlemqy.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163yupdyjlo.html


<!-- 参考信息 -->