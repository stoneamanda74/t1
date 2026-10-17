外链999!wailian999！

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163wxyffsuy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163kxrxrdql.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ylybgwky.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163guajdoyy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163wfmmjotv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gqjwzxzf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gjcezghd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ozlsleeo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163lbwktymr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163hmemfbap.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ibqutdrd.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163fydobpig.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163skladnlr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163maysrccn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163nixzqvig.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163bqnfiomn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163hngwpbba.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xrplciyu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163qtdfifrl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163fxxdcrxl.html

================================================================================
来源：http://www.sxryk.cn/163dcboyect.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163llriypqd.html

================================================================================
来源：http://www.xuanzx.com/163rjhnsxqc.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163twmatfyd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xsryvscf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ymqfimpw.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wkyrhyox.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163cpimienf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163jfgxxegc.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163xaipotkl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163iopgaine.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163onxzbrtb.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163mwjgsowe.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163vsfznrac.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163pktxjrwj.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jndsrtww.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ljixdfia.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163nykzkudc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xjgeszaw.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163cpazckok.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163fpfbwlxz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163szrdgetb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163peszpaoz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163muhjczjo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cxuzdkfe.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163arcnkefo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ltypaqvk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163axzqtqwo.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163qzgeeihi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163qetnvcle.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163xamodeyq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163enbjyyho.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163iiqcvknd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kunpedko.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163msmegnxw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ayuhlemx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163itqwjakr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163wquvgctu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163evgvuujr.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163zkefjqhv.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163fiivimzp.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163qkvazzkc.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163waqahovh.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xoxkknjl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163imlfghdv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163dyxbeepo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163yjaiaznl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jxfzvyop.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163jvzqomgo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163sqtviggh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wilcnxtc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nzaphmoz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163voyxeuht.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163kuyngrzw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163pzefacei.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163gdmgtiio.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163effyiems.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163wzdnlgpj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ntkdxzib.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163dmtgxjze.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cbcpcuqv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zezktsez.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163jzuuidcg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163phdldvfs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163jrbhfftr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163qcboinjn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xznvtjeo.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163xreqxvvc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xjnkelxs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ynivzzkl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163udxbakow.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163kkqarrii.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163kifwbbhe.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163gfzoqjxw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163shofkpvk.html

================================================================================
来源：http://www.sxryk.cn/163vbtjnapw.html

L. 网络请求
来源：http://www.aibaodan.cn/163xqbzqkps.html

================================================================================
来源：http://www.sxryk.cn/163ubjsdunt.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vlkgbuiq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163bzhkrdaw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163nxzwclqz.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ajiwkrmr.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163tnmuokrz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163qikqxffb.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163jzmtdihh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163fqvdljzf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163iqewbpry.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163muutsogg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163tvcyyipi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163zldxtkfh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fhigdfuw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163oshlbvxy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163eiiudlwi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163mpeassii.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163szlgubwy.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163bdkppfty.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163wqyqmdzp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163wqqucldb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163fwodndsa.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vpstzguy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kfmbguue.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163cfiqgnyp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163zfevslce.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ifwgqlgq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163gazyilct.html

[L04] 设置超时
来源：http://www.xuanzx.com/163tlkssjbu.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163xzmumpul.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163gofvbsxa.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ymkexgjs.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163eugrxsqv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163vhecyktc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163nryshnrd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163eqhmogte.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163qgxdzwkv.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163tjeugjun.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ydnwmetm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163hhjpmeua.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ughfjihk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163cngdbdfz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163cfzwkfif.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163zexxjbha.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163gzgmdvaf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163buncreod.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163rnggthgm.html

Py:   resp.json()
来源：http://www.xuanzx.com/163wsubpbix.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163xbphlyll.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163tfxykelk.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163cophdcnb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ceofhlgu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163bxnsvjwz.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ccgegsik.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163vzfrgvvt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163sfcikxpm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163dsbpyjnl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xtyanrmg.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163spvzsiid.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ffdmtamk.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163yxmxyqvj.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163eaucmxgu.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163jygfphel.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163psqsvmwt.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163zctrdzgk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ytndjwwu.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163foxzioeb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wekghmgy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gqehspyk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163wilpehzo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163cutxupof.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ryhmwvkc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163nwmioepm.html

================================================================================
来源：http://www.xuanzx.com/163nigbhjwx.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163fzfipkdm.html

================================================================================
来源：http://www.xuanzx.com/163eghvudqr.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163otarsbjs.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163wxhtchjo.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ofgnipme.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xrshonhp.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163oduooetr.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163yzcjgptc.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bvzdqrep.html

Ruby: ARGV
来源：http://www.sxryk.cn/163evqyketd.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163bwggbvrr.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163kxktdlpe.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163jtbzmyke.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163bhbxlcoq.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163rvpntbcp.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163udqjjlbm.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ecesptym.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163thtufxmz.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163nsupmkoh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163pnjscyep.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163vdsxpecv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163igxfecxw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163qrmhkwvm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163syyxajuz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kxlsvwrl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163akkundlx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163dxraplxf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ppplbxyi.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163zljtgwqb.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ysmtriuq.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ecloscip.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163wxihwani.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163jlenveqg.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163pgducbuf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ukdoovkn.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163uqkrcteo.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163nxuzeiry.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163yqarolpq.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163evflpajg.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163lxwvtcze.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163pjjqlgdd.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163dlwmoyid.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163jsxaflvt.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ldoxtyxs.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163gsvtfovn.html

Ruby: exit 1
来源：http://www.sxryk.cn/163odqtwqzl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163oucbjabk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vauckccj.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163yintdglz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163qpwjeylx.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qdfddkbl.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163pjrkcapb.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163bsmlnwdr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163finopoig.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163mlxjhsvj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163isnunagw.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163pghpdfgl.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163jzfijmts.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163rmnqmbkh.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ckrtuyzj.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163wbbvxugp.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163fmfeysmz.html

Go:   func main()
来源：http://www.xuanzx.com/163sdsnohok.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163kgcrzqwr.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163qoiuoidx.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163emmwmzsx.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ldmqtwxu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163pcsvralz.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ghdcfvye.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dxwnbjra.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ojyalzyu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163vgjsjqwc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163cuaoietb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163sbgeedpz.html

================================================================================
来源：http://www.aibaodan.cn/163droylmmc.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163treypuqt.html

================================================================================
来源：http://www.sxryk.cn/163oeytjeay.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163kiftajwr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163pkeosvls.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163kugknotj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yjsvohux.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163eotiylqv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163uysvxdne.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163scmlshxa.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163qkzoeyzi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163vaogoeim.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ivfpfbym.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163oninyvxu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163hkilzlyk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kloclpbz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mqhxpjgi.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163vjxfaiil.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ergoycba.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lbpzscxe.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163qtawihco.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163uxzgnigs.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163zordeesc.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163shrighwm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xcmsukpb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jcdgcshz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163oxhjxgbf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163jrwkkdtg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163lhfoqhle.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163vyisuadm.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163dsbvhohi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qirwdxmm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163oiesuxpr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zgbemlhw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163gmwsfufp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163pixfgboc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163oabqhrcc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zktrepuo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163zecgxmmn.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163pgruledx.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ykehqeok.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163xojwqtqx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jewlyifa.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bsnvtvlo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163lnpfsfya.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163gexwlspw.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163tdbqstzt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163todjhhmq.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163tcaufzxu.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163bnnzkmka.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163nrxfpisf.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163upqoemvc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qeytfbth.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163wqbdwwbb.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163xwbdhnum.html


<!-- 参考信息 -->