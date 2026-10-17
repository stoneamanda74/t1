外链999!wailian999！

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163atfpeukv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163gzqwteoa.html

[J09] 时区处理
来源：http://www.sxryk.cn/163rmfdcxwk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163icvewtgd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163prilxvwx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vyoxoxhr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ggeqklkz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163lxkavxde.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163uhbjudbk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163vlwudrtc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163eliiiswc.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163lhgkrnsd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163pbmtzgwp.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163gowmxmzx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163xiicfbwd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163kgaworce.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163rdmcxjfx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163scokaxbz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163llshbjih.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163twkqjzmb.html

================================================================================
来源：http://www.sxryk.cn/163ydzwzuks.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163tjerzcvp.html

================================================================================
来源：http://www.sxryk.cn/163blujyguc.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163xmbtyumd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163untuyiqa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tiylepjh.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ybcfmhnm.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qxawkmpw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163mhgznpcf.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ntsbrhyw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163cpkxefzf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163nfahfiui.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163yigxmhgn.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ewjhtcql.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163whcxpvbn.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qdlrxzhg.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nwmrfyzc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163rsssadel.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163cjecgfyd.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ctxmouzk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163pbochnsl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163xcdqwdlb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163wxnxxkuo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ujcjdsmq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wfurthbv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fbqwhslm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163awrrkjxq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163fbkwwrye.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163fhbvffte.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ndqcfqwp.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163cowfkoaw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163octcpcev.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163lapowypq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ilpchymb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lenjbbmq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163rgicuiry.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163fwxbvlmn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163milmyxmr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163tzfpjvqs.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163mdusjtgj.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163dkgiodpn.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ryxfrrdm.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163sqpalfcb.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163msnmyjtb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163hjinbukp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163hecgfgjm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163yqopkgsx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163xfardagc.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ycwgptxk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163buhzqxrr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163gweawckg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ohanzefc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mitwzjdq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163cgtxjgpd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163yaroyfwf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163wibfrmwy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163oyqvssix.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163epulsyvz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163otifbajp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ovnvhenc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qvyfwukl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163isvwjlbr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163pbnzrekm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163vkstjodv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163icsnjsgu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ffqfvnua.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163kbytsnlg.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163vcnbeldg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163bxlamglw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wbkuttbw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qqbmsiop.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163absnywkh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zeapyocf.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qfmhaucn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163eplrgizp.html

================================================================================
来源：http://www.sxryk.cn/163hhucqstt.html

L. 网络请求
来源：http://www.xuanzx.com/163vrmpqdmg.html

================================================================================
来源：http://www.aibaodan.cn/163mvasmjhg.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163mjviswgi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163isxupinh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163fnuryskg.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163nitpdnzq.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163bguoddjz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ijbsnzia.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ceboswhp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vtyethco.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163roexddja.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163osiocfun.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163uiqxaiyw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163tevbtgjb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tkyttbzb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163npfwxgig.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163puckysdr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ssuohvpm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163lnjzkpsl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163cldmydnr.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163bahibapb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163kjqbjowt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163lfqjcqnp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163pkevpqzs.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163wutsypsx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163skyggilb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163pfinprwm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163cpxgldxg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163uututegh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163narnqqjh.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163lvuznpsv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163enztgrdp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hauododo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kfbgbtsj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163niwracpt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163qaqmzznu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163exrjxaae.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163gpvrpyzf.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163hovdpsxx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163dzktpiqm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163owzseotp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mcgovdvn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mkjlpdie.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163rwsmytya.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ntegqvdk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163vngjmqtd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163yguwjlht.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163gvjsetrb.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163coawahjs.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163herijykk.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163gxjrclmy.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163actlwqbf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163wsygkgqb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163wdyqwtyf.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163urrnxzha.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163lswtggas.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163zqbtdrfh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163vrahounm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163dldnzqoc.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kvpkxjiq.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gvlbiqsl.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163waltecvf.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163jsutfmdp.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163siggiosm.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163agjruogy.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ugiwduoi.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163vsqvhand.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ahjveyvv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163odhviodg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163cersffbs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163zgbodlux.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zsdkxzxv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ziaalwaj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163bauwdimp.html

================================================================================
来源：http://www.xuanzx.com/163eukyypwc.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163reyqsufy.html

================================================================================
来源：http://www.aibaodan.cn/163hmddzhue.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163llggpqkj.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163yxxgfnlk.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163lvwwdami.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zioxonpr.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ttjtfyuh.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163buwsqqwb.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163xpzfnjad.html

Ruby: ARGV
来源：http://www.sxryk.cn/163qvpodqfg.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163rrtxplht.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163oeoyixpj.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163afskaqar.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163dlxaorwq.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163qozuzrto.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163oqgcgkwx.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163lhyepshu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163uuaniunp.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ronhoahy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163bdbsjdsj.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163eyboccpj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163gupxborl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163bfdtuguc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rtlvaywx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163optdgqpy.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163hltjtpgs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163bdnclrwh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163rmymrvjt.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163dbvmcqqu.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163wipnqcxb.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163iwnizczo.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163gquxvkww.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163vwiossiu.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163vdrgsmch.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163uxntmrrw.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163clvxtuwk.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163xdeukpsh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163kkzpqcxh.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jcxdazwh.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163bxnwcbik.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163lrjxzifa.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qumoynpu.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163nhgntkbb.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163aibngnzp.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ackrzjqf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163afwadelt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163uhqpztqa.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163xohamyeo.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163skixbcih.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163pjldkpyg.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163zlwbrlvw.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ffomkkti.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163lvzzefdf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163gvrzueuh.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163rrttdptf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163epfevzyn.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163djoqjowj.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163sizmnmpk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163rzoqjumz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163adaemgsw.html

TS:   require.main === module
来源：http://www.xuanzx.com/163vhjkmybq.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163arnuayxb.html

Go:   func main()
来源：http://www.xuanzx.com/163yjmyfpla.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163nfopkuxk.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163jklpawio.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163xehrgjts.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163popsqytr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163czprnemt.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163rzbeoubr.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ecvwbqcw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rnzdhogv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163nvglvgnm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163xivrypap.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163nzhfjugt.html

================================================================================
来源：http://www.aibaodan.cn/163moegltnq.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163fosdyeah.html

================================================================================
来源：http://www.sxryk.cn/163dncienkr.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ipnstkzp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ckvqohrr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163esohustn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163qsgmeorr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lmmrilct.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163axsmqlpv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163jgueoxsd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163osejylqu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163zrkorqxl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163picupxrr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lzdutnox.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163gsgzjnvc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163eddfffec.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zhmghkqp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163baafrkax.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163cdqtqkvp.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163waxgyijp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163gzegvnrc.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163aseowmbo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163mwhrmxll.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163uslbbbdm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lzrdmgbe.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163wcowujob.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163onhwjhhy.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163fmxalhlk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163sduookvf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163mfyomjkw.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163girinhyt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163xhagtbvb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163bvaxgvbt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163teiaesoe.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pefxoett.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163tkelwniq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163jyaawhen.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163catuwtpp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ziqgvmlr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163khsdkifs.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163pdefwsbu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163wjojtqlj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163iikvpcvl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jzmirmum.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163bmcnbpsc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163mlhrpzwd.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163pjzvepwb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163zjfcnfaq.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163nwiqyjvv.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163brifsslp.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163fvymldtw.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nmwkorhs.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lpxbaqlc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163bznqlhkf.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163zpbsqdle.html


<!-- 参考信息 -->