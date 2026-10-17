外链999!wailian999！

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zathqxop.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163enflshmx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ptlaohcw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163dqwdtrie.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163izwrsama.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163lgfpcjwa.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163axibeikm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163bjaaobew.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163olgtszdf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163lblkwprd.html

[J09] 时区处理
来源：http://www.xuanzx.com/163xtysxfzf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163besbedlt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163kupqfgtq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163csnbjxas.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ojbjzepp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163xbaoyhny.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163hhekabyu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163gxrwtpep.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163wkfgxmog.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ahiihkqm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163fkljygdn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163unoewaaf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ztkfljof.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163pjalylmb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163biyefvam.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163cyonnekp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163iucfjszw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ehupgjlq.html

================================================================================
来源：http://www.sxryk.cn/163yrsqncqh.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163laufktxk.html

================================================================================
来源：http://www.aibaodan.cn/163rzzurqfi.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163nrabynfd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163pgulalhe.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mrxyhhik.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nscgqmma.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dwlgkeor.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163tfuvdnfp.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163gkqzpdwk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163tgjbbycg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163xjavrqxs.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wtvdtmsz.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163xgsweaoy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163dwdgxghu.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vimxgovw.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163pynkfbjh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163njbfmyjb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qjveoumm.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163rpcjbkcn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163eyzoysuw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163snjazkli.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163wswbhbnv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163tidwensw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163svlffckm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163skensigw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ganwooxs.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163jryjpmzm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163cbrrxfym.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163subvnxst.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163nhbxrwbh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163equjnvsj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163lspxheoe.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xrlzilaq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163lghdujcq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163bwagndsz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ukvtrsdo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163avndlgps.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163iljvmmdj.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163pzcvqpue.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163lguiexza.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163eputahse.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hmpbjtsw.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vvotplqg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163phqdhrsk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163tcmfxbcw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163bejxmvqo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qxbchuga.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163lybqjtzd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163kgbhujnk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163mrxeweya.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163snsesvue.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yrdopoec.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163smybfknm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kgdylkjl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163foncgxsh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qmkxbhqy.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163alpzctqm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163tsfkrhyz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ljwusmxo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cusszaqq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fwcxgodx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163bapuoryh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163rtrfcuck.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163tpyalbip.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163fwwkmfmc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163rrdywicb.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163phpdumkk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ymenfefb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163avikmkuz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vpayqhzu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163bpuvhppq.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163jnfrtnem.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163slixyaor.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163anfbeisa.html

================================================================================
来源：http://www.sxryk.cn/163rdnlqpjn.html

L. 网络请求
来源：http://www.sxryk.cn/163knubilcv.html

================================================================================
来源：http://www.xuanzx.com/163nbmpqyen.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163viuzbfsr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163bjprwinx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163wcpnsvpk.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ddxrybpk.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163toirfhum.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ouzixhlc.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163insspxvc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163lkwglcjb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163qxjrviqg.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163iqshckkq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163mzkenmfe.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163mdzpkmvn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163daypabtb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163elnwjpbt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163qtijzuqc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163orywkilx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ovsdrddc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163bxogqnqb.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163yfnpkfzl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163rkfhsyqh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163opifhtmp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163neffzknl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yewylokv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163idfwlgbh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163qsyetmkj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ypjenhma.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163xdveqgxy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163swbcfysz.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163pysqgegl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163hjtctfvh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163tvkgnded.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vqsopzyw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163pizhrcpo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163sydgvukz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163onkxwoxb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163oifiohlk.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163flbfzkrr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163nyfdevwv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163xhupjwtf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163abibggky.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zpkkglio.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163qgroprst.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163kfojrxmz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163njvxuplh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163hdiwjcgu.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163nijmxuwm.html

Py:   resp.json()
来源：http://www.xuanzx.com/163alygzimu.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163kpnrvtpt.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163gkwdvonp.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163cyclobqz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163haxcyquw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163kgylvuwb.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163kmnpoicg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163riqoudop.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ykrlezei.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163drvjfdqr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163wjwkqboi.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163bngdkurz.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163szcbmcqd.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ibrmfsxs.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163adazvcjh.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xcilqtgi.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ovimgzsq.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163usrsnsfl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163fnvguxoi.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ipivrtyh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163focrlzun.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dqkoejyj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xhqqnayq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163pmzdcftz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163yjqrechs.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ecrmwcwc.html

================================================================================
来源：http://www.sxryk.cn/163bxddwaka.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163cmiummmn.html

================================================================================
来源：http://www.xuanzx.com/163exmoswho.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163xpxuklwn.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163hvesaaml.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kpvizkrr.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yvsipvqp.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163rjrnlacb.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163qdzmvxwg.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163zyyozjei.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163qrwgwijw.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163etwqnbwh.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163zcmqjoaw.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163qdstzrcc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163kzzczzyu.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163dxzchjai.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163fwfkkuke.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163eolxmhai.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163akysfuko.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163zbwlsqxv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163fpeosrrg.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163nmjkpwbl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163jjnuptkk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163kbkgddep.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qbjgrxnz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zgedufwl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ztqcclbw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163xyhbtvcz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jnfxsvdd.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163lzapdald.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163butizkgx.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163kdeberdw.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mutasezk.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163drlqmlzf.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ubwkqehe.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163mahgupjv.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163dhlwikux.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fgrhscnv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163qhczvnyi.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163qeqiccjy.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163lcuyerza.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163milycngn.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163gnygigks.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163danyiodr.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163pvzjdsll.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163cigplzzv.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ipxpvpel.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ifodkgae.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163yztsgyfw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ilslimlr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163pbuvpevk.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163jiwuldup.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ivahzdfv.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163lzigcrtw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163izqgbsqw.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163xfpvaumh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163nqdgrofo.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163soujqshl.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163dshrbrwp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163vgeymevd.html

JS:   require.main === module
来源：http://www.xuanzx.com/163mefcvtlw.html

TS:   require.main === module
来源：http://www.sxryk.cn/163znglswol.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ycxycxoo.html

Go:   func main()
来源：http://www.xuanzx.com/163xlijbvkm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163bbzcfdfs.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163rytcxlyc.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163kxdtaxtr.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163kcoqmlbx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163biwahkgq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163evlicjgd.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hnnjhalp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163kzeonewb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163sxzfzkha.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163mbwfofpo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163qrofjdni.html

================================================================================
来源：http://www.aibaodan.cn/163thguheev.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163kqhzdpru.html

================================================================================
来源：http://www.xuanzx.com/163vmnatqlf.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163tafxzvtc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163nzsiombg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163dfozgxfv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uedazxnd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kbtwpzdf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ddcbiept.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163crlmpztx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163nmlerzlk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163eubkaamo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163rixpducl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163oicaqlix.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163vlrcyihr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cnhadkwm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uxaeoayx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163eaoxktqk.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163mwzfohzr.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163aoygcapk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163undtnxvr.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163pnlroecw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163blaqfnta.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163wcuyqcvy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jsmcdhis.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163hwlflpky.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163iaaiphfa.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163mapndfzk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163woagaxpv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ktweoobw.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163hornztuh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ksumhsur.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ewjbrpaf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163oaietgaj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163iyfwiudi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163nvirzwif.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ppxpwzrs.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wugodasu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163dwckiysg.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163wawfngjx.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163uerqpgcj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163cvpejkia.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jomfbvqp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163bejpwjmz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ciondwjc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163fihznpll.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163inxdnxjw.html


<!-- 参考信息 -->