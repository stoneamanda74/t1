外链999!wailian999！

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pbzmwshi.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ewfhmtxe.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163tfxknrfo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163qfkftarn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163hstkjepr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ijcveksi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163hoofnmfq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163drxehssb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163nejqjjbn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163snqcrswf.html

[J09] 时区处理
来源：http://www.xuanzx.com/163bllyyxyd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163hodpozge.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ddliuyyl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rhesqqmr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163yfpzeefk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163guhfswwh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163dtirlvlh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163tcginmvq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ituioxwu.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163txtopoui.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163xlvuiflv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ntlveutl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163niscqlsk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163pzntqxpt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163xfufjzgc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163mqkjyter.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163mokkfwhs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163htljorla.html

================================================================================
来源：http://www.sxryk.cn/163cfkjiles.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ihazmivx.html

================================================================================
来源：http://www.sxryk.cn/163fkhgarmj.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163tcmodmmr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vgowkfkf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ormahfxh.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163huaapzor.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qckplmds.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163olboufyg.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163zvxpsjir.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163lokfxmjh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ypvhzjhy.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vzoysqwz.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163gmmbznvs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163loypimre.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kbwoflwt.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tiqwkvvi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ovdfsxwf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ulqccvij.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163mxafkzhg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163jxdjuoje.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163pmksvlqz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163tydriees.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ldylamnt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cezhghoq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rjfzprth.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163cqxjnbry.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163lwdjjcxt.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163zaosraxg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163vuuqsqow.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163yrcmqkxg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163krfolxlq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ghajjyjd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qfoegkxv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163gijpcdis.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rlyulvwj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163swvkfbyx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163mbeiaqox.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163yvvqqars.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163immjomer.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163mnbhysys.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xkgllbel.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mrsxsemy.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163yhbfgxbh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163zvmjigoe.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163rzeczcwl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163yifiznvs.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163uivonzlq.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163pdbyxcwz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163sphpmzpo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xzspcbqh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163omeupqvx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mheslxwd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163kcegszgc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163mnzvuwjz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163skxquxvf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163fntyctuq.html

[K07] 进制转换
来源：http://www.sxryk.cn/163mrrsixwh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163nhsxipld.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163uadlxofb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vroxupew.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qmqvkvta.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qzqrnucs.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163bbxuogom.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163tkmaizlm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163bqksljjr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163xlgshpsv.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163amlenkpa.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ywgfymav.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ydbuekae.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fsusuzhi.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163xempxzpk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163stsevogb.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bcirvrva.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163xnxyonjs.html

================================================================================
来源：http://www.aibaodan.cn/163oktjfcsv.html

L. 网络请求
来源：http://www.xuanzx.com/163zsjubazo.html

================================================================================
来源：http://www.sxryk.cn/163jczsvoru.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163tbcowrvk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163covptlre.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163qnmpbfeq.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163wqhqcxyi.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163lwlrchpx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163jfxurpcl.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ewjlixba.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ahrrwfom.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163kakrgcvx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163yicgruft.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163nhyyfjvh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163rtnrahiu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xcrscuol.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163lfgdvhhh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163qrhnlimk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163hlbijswh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163uwnmimsh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163zblqavhv.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163thzhzkyo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163qsbwqpib.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163dtygwubi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163eupjivsg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163meqvnaii.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163bixgwayc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163piwtpxyj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163wttmibvb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163utscfufm.html

[L04] 设置超时
来源：http://www.xuanzx.com/163xuthuwhd.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163cuwfzexb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163plxknnid.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163onxyfcyr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gkabgjpu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163dervmkzk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163pvaprxqu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wknqjpof.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ucdeswuw.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163bczygbqx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163skccbtqk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163qkmdvlzx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163nutydeor.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gonkiwsr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163qfanvlas.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163gulybepn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163oopnfrjd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ytthmjly.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163rntweiqa.html

Py:   resp.json()
来源：http://www.xuanzx.com/163rdpcynlg.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163swohmmhb.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163begbmczq.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163thisbwpx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ewvxcksw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163pljbnlyr.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163kcnelley.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163espwmtcb.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163bvnxurzi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163exbsmjql.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rvtovcet.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wxwkncms.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wxywtzhu.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163afuafxbh.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qkswphxi.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163sidjrnjj.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163wmcvyifg.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163mwpsqhyb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163tynzsnpk.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163bkfziexa.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pzrvdxyp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fgyhjeip.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fwnffdze.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163myjbygkz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163alzbgmls.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163bfwgzzuk.html

================================================================================
来源：http://www.sxryk.cn/163ujklzyzh.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163wekgfugd.html

================================================================================
来源：http://www.sxryk.cn/163hwnwuqtw.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163mujywhyv.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163efdtdbtu.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163jydiqykm.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tjzvqswj.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hjbysgew.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163bdremohn.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163rbpwhbzw.html

Ruby: ARGV
来源：http://www.xuanzx.com/163qkvxpval.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163dliflxse.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163zjmrdcel.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163fcthewma.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163vsyulejd.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163cpdcqxdq.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163umkdkkjn.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163trrswnsk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163gazuunhx.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163mgqmuast.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163aryuaaqs.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163pnxnxwuf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ythpflje.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ipywmify.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vcfykpwa.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163atexbhrk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163pgirpefm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vugmbtsz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163mdmiiqvu.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163raliwynh.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163yxctkrhp.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163igawsdss.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hvargbzt.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163kolvteqw.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ujcnnzgd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163sxdrbntk.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ydiznkpx.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163uincpzgj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163yhungdvt.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163rpusdshy.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163jcshwaiy.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163atwetniu.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163rzblbuaw.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163psrpcgas.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163lcojiymp.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163beaawnex.html

Ruby: exit 1
来源：http://www.sxryk.cn/163vkjnarjp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163kwpkanau.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ldobvsve.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163jhgneust.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163vjditevd.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163sznwnhfv.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163xdvbpzde.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ondcqxus.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163frcqsugw.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163vcfuuofv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163kmqgoktk.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163jzclkynq.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hjefznuu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163otjycqjo.html

JS:   require.main === module
来源：http://www.xuanzx.com/163xkxuplsr.html

TS:   require.main === module
来源：http://www.sxryk.cn/163pbcfaupp.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163tbeywaly.html

Go:   func main()
来源：http://www.xuanzx.com/163rkrnikww.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163nbaywpfm.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163wwrfnnmj.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163potyegro.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163quzqhsgu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163tztcdror.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nwfhqhxx.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wrmvvbzj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163wdopsdrx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163tpdcmicb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cifmmnkj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163obcecxnm.html

================================================================================
来源：http://www.xuanzx.com/163jkbttfjc.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163afubzjvj.html

================================================================================
来源：http://www.sxryk.cn/163nvyycjua.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163woqyefnf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163yczbfxdl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163bhvoftwn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rrxzzzkj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uvzrwenh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163uuogucvh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163tkxbmrcr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163qstwfnye.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163wxnnzqpy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163jnwzvnso.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ewqlrkxk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163sadlpjay.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pwqzojur.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163glyzcdtu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163lkmbonzo.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vawhxwfh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163gosbexwd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163xpvkrwrr.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163nshcwcih.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163cnrdwblb.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163uzovhpgr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qibotwmm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jpqlwntg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163lkimcmtl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163aulbkvwb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163vbgbjdms.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163gansywag.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vhcszsax.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qyilfbac.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ayskepph.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163gmsxvjbi.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163cnkghwes.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163rnipljny.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163wpmkepxz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163skfrtaro.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163oqqrazby.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163vxzpzlvu.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163hxctblbe.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163byqeyoqh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163spevfnpt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163yqbxqcgz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ydcclogq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163vkgjwlps.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163uxcqeohw.html


<!-- 参考信息 -->