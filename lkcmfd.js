外链999!wailian999！

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163elmjylpn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163guoofcbr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163fphmcyjo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hqhrtsic.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ywpcxwvv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163spleulfc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163oighhopv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163tpaujcsh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163pexpbewu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jedebsjy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163tyzccqtf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jevqcpto.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163qqqbukfq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163kkssfwbw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jlbzdrao.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163onrckngn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ikspntkv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ejrolgvq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163mgovbzux.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163omvgjdib.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163wjjgygav.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163csmojtnw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163knoiybfb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163mwcsujdt.html

================================================================================
来源：http://www.xuanzx.com/163uthmtlze.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163lirbiude.html

================================================================================
来源：http://www.xuanzx.com/163quaglhfg.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163atwfbolx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163mvbsygdi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163lxqnfqno.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pkttjmqa.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163njkprzih.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163tmolhpum.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163qdosojem.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163rcxvuiuy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163zixgiahl.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163rywbibnk.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163hawvhoje.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163lidtzfgj.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163khvrnrvj.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jzqioikj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163evbbpndt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yyystzlf.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163meegmkeb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163kgkfbugb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163bhomvglb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163rzhjxfzr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163fijvhjpm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xeshenlv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163veuwzvce.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163zlnewdjg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163jtrdawyh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tabixuwr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163xiqvmukt.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163wtywogcr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xyfqukic.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ftocuuzl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163juomzpgw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qblvvlnh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163mlhqfyur.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jjytteay.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163nnhbmtio.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163osqfbrtv.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163somqmdpe.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ryiyncgv.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163vpcfplns.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163bmrleige.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xthmelbt.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163metqptvn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163wefbrdhd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163sktekntv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163mfinzbew.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ssbdeqek.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163gxudbtvu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163sdghvhlh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163aggvceol.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ryabulem.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163vrpvetzs.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163josfweji.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163bnzryomu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163nudkddfi.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163bqpognyh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ijpvgopa.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163kqyozxtc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mcdienki.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163tofumhkc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jkfnqvtt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lpcqruwv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163cryyiutl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163syfmuitp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163huwnicfl.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ulrnhjmr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163raiejtxo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vnxnhbjh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163plidjbhn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ccsikvve.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163jsffxzcc.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163kbderdsy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163goaygxuw.html

================================================================================
来源：http://www.aibaodan.cn/163seqwomsp.html

L. 网络请求
来源：http://www.sxryk.cn/163oulbsmyf.html

================================================================================
来源：http://www.xuanzx.com/163ugzfkedp.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163iqfimfnu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163oisvjgel.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163clqvrivc.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163rboafuip.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163kvoseszt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163djilldia.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163cjizspif.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163jpfczitc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163nqfveply.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163pintknhc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163cdemgdix.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ifketfpy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163eifcqjbk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163sgdufhkf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ixdmccrq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163jvibidjt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163wtchfwip.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163zpuwzzns.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163kegyrqhx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ltmtvxtv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ydebnbkl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163eumikgur.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163soieeixs.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163qwymzxcq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163pezerrbp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ienyjwtt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163sicmqrst.html

[L04] 设置超时
来源：http://www.sxryk.cn/163lhxfgykz.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163yaxhnxnu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163jvyivfkw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163uwozraxn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lelxeomr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163lxyguofn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163nxyvkzly.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163kktitneb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163agkdivkn.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163iivgpahc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163xptlhahs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163hwyaryqv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vcuqoxqk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hvcxryjm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163duxxbaxg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163blkiscev.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wszvdvwk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ygfogypv.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163memfyfzo.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163pcfjbzqr.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163krvptetx.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ujtdniqg.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ujlglbtz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163bakjquny.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163sfvvhwfp.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163pyxgsaea.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163bnwjbiuh.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163hqyqabiy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163isuvdmwj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163kpvxwupf.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ryxjexnv.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163fjqbsjyu.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163lwtfhtcv.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163jqcjfjxb.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163dlsggfxm.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163thujcqsb.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163kemddbjs.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163mjxlkzdf.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163vmtlgaek.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mjgqfwat.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ogeybszy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rkmzoqkx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ysggiwwl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163dzkasxet.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163gchgqhuy.html

================================================================================
来源：http://www.aibaodan.cn/163rdnjugsn.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163vqrcagiq.html

================================================================================
来源：http://www.xuanzx.com/163qgokhyun.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163qedmfucz.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163afknwzfc.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ybbzrerd.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163kzyaacah.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163aitsozlz.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163fdmzqabi.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qtqzerrh.html

Ruby: ARGV
来源：http://www.xuanzx.com/163jeoguryr.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163pxxyujxl.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163qfypvwyz.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163dqjakxmc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wmplrxlx.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163kkwbtvay.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163mjjzdzrh.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163budwzgwe.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163tuqksqeo.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163crshpvtn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ggaiaera.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163lbmkpmwe.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163cshwqjtb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ycirzowe.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vtpsvuzn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163oqkccowu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163mpounvef.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163najfhawy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163wrrfjknq.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163reheuurz.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163brmxuitd.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163cfiboksz.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163cuiwfkdg.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163bsqbdlep.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kzltvtwh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163lxmamaxp.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163rogxlrop.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163thzfqkbq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163qztzzglk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163nhdgvaog.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163wartbgbq.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163otkecxwt.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163yojhwwpi.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163dhtfhcss.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163xlzlxqam.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163savaaxso.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gixtonsx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163raqozhzp.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163gybjtcdu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163iwiumhcy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163qjqguxvt.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163alxnmrpw.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163zicjxjrr.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163bfrqimzo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ixxygyhc.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163srrmmysm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163frcqsgwb.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ncqrfgbk.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163rmnijopm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163moqfhoou.html

JS:   require.main === module
来源：http://www.sxryk.cn/163fzrwbuos.html

TS:   require.main === module
来源：http://www.sxryk.cn/163euzyutvz.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163hftmavfn.html

Go:   func main()
来源：http://www.xuanzx.com/163dvkfrcuy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ljpmvgte.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163gkhztwgz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163yyyhbfsk.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163dwoqjiez.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163dlunuews.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163yqsoubzj.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bdzbqctu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163daurgrfq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163yyzfsufl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163vhwdduep.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163jruygijm.html

================================================================================
来源：http://www.sxryk.cn/163vooweyfy.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163wlrbnftp.html

================================================================================
来源：http://www.sxryk.cn/163ptjsbqor.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163dqiwivfu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163vyvsoank.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dmpjntzz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jathflmp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163indixwhx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163lrztvgig.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163kznlyyqc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163skctazyk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163azakwbms.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163gguwhsis.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jgzglcdy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163tgplaivg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163iboegmzs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163befiouvz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163jtnrogst.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163obeqywaz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zlfmusqm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163tcpfuoev.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163osocchfp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163tdxkcdca.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163toruhyzp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163yanevdpv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163lmtdphbd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163iuwbbyjt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163mjqnoaly.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163eirqcdhs.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163zuomgdoi.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ikluambq.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163nknddxki.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163vxbuklrt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163obtrcoci.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hdxjznfj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163poldyuxk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163sjrewdrn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bibggbxo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163twcbdvpx.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163iygnqkik.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163kavtpqvn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163jplumrpt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vabcemcf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ufnujuhw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163rccpayyh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163jgrzxeml.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163xoyztfsq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163dpyehsmq.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163xposmyak.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163fgvdoxvz.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163zjlaapms.html


<!-- 参考信息 -->