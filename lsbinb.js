外链999!wailian999！

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163zzonyaxp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163paoolskn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163uujqtuip.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163pcctwicb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163mpftvnef.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163llepwueu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163hbptvlhc.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163veoglzlc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163xtfpcodx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163vrdsdjvn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qbplieni.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163zriezqgp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163yabnusky.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163scqbdwat.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163qocxsdjm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163jytxlhxq.html

================================================================================
来源：http://www.xuanzx.com/163hsgxjigs.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163skztkkkw.html

================================================================================
来源：http://www.xuanzx.com/163nrizybld.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163vfezqwxh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vgvtkcct.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vdosjzyv.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qiiktomn.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163rbvnkiok.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ctwoxumn.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163rwzniush.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163hrtxvpvm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163naloxizw.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163fkosmorr.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163agjqyozi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163tdlupczn.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dlwvevkz.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wrobjbae.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ktjwgeak.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163kurugbzh.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163bupavoix.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163cmgbgira.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163hdjerblz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163nxjvmsxc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rlqxowbs.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hmmvdxwj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yqxslzkw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ndelipea.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163rwsolmkr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163nquxjlwo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163pfcrybii.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163efnmplcv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nfyvwlkn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163gbysohjl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163lqiojzfh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nhtpqifp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wawxqliv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vpiztvem.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163lbgnoinq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163znarzift.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163avonxmec.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ejefivkz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163yzqrycpn.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163aldpobay.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163byptepws.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163dhzbydkk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163hwoprpba.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163fxrfihoj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fwmcdnmo.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163bemajtrk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163giohogts.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163fodlzszi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ywurztyx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ptxgrwjx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vusfxklp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163olcyqgja.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163dspmabtm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163tvvzpdqz.html

[K07] 进制转换
来源：http://www.xuanzx.com/163imxlbgnw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ozlnubgw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163nkdusppa.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qdcurbls.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163avxfixrb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163wfhmaybd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163pnwtnbeb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ymractgi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163yhqagdbw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163dtfxjduz.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163tfdjftxn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163cawmroux.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163iscwhntj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ktborpsu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163awyddvvn.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ruetulnq.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163pvfspcpv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163cuuimyei.html

================================================================================
来源：http://www.sxryk.cn/163xlzobfvg.html

L. 网络请求
来源：http://www.xuanzx.com/163swxxemud.html

================================================================================
来源：http://www.sxryk.cn/163txvvbays.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163nkxppges.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ymevlqmk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163jqhgxvbt.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163tfktqmmt.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163klcgdrgw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163cadepfjb.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163losyzatj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163btrrqusk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163bgmnyqis.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163wgenlgmx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163bmixmyuf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163leokdqfo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163oyjmheia.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ifykunyo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ylaanwev.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163uxqekvye.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163wyoobebr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163hdvkwwkz.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ymcihxjt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163sgpsnwle.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163awizomcu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fempupmq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jheutskm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163bmujqyvz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ojccdsxh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163odugufpv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163bqdwmjja.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ysvcoinl.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163qeivstja.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163uptdyqvz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lguywmdp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ijdlpfaj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163foezapas.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163vpwewakc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163seuyuupc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163wwgkvurm.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163cejfvgfm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ccmsbvpl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xugsmhga.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lntlqljo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qarwehnc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163wcpbuwqr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163vzbzdsoq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163qnsfeksh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jpmftyek.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163cqovjeys.html

Py:   resp.json()
来源：http://www.sxryk.cn/163xkfaqhzk.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163pcfwgvop.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ozgosnju.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163gnvthstf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ssteqdjq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163uesoswdv.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ithuuchl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163jentrssb.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163crhunwjn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163lvyvidlq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163wwtiblvr.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163rmegcpmj.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nutcdxmg.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163lidqhfrn.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163kzndydby.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163eyshlgvy.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163aefthhpn.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163wsrvmivk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163jconqzom.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163inxkkcce.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163avnztyyx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xlhhutcq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163cxxelzuy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163lvwjzazv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163pcjlkown.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163baqfyexb.html

================================================================================
来源：http://www.aibaodan.cn/163xqhiucrx.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163uxsnyxpz.html

================================================================================
来源：http://www.sxryk.cn/163ratyqywv.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163irikymnn.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163zuvlkauz.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163efrnnpeg.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163opomprlr.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163klpbvvel.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163gwqzujmh.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163oucgmmgf.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163gvvjzufy.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163olppegge.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163vamqpomk.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163jfpxbnii.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163moedbnwz.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163fjfyvyco.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163gyjpnbpx.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163feyehojs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163discombi.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163nobxhawk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163udnnbfyu.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163lnzjlogt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163pkptkfwl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163gzuqyham.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163iyavrwfj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163qdnkujxg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ilrpojrj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163btkdydvx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163mlmwkldi.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163tzumiwux.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163nwefijmp.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163tcnppptl.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163tcbrecdi.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163kgbbbyyq.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163vyddttrp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vzsfqxvc.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163hycaoagu.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163gyyidsrx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163wmwcpkik.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ykysgnkh.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163wwgomuex.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163fqrqabcq.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163wqwqpjzb.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163idfgvwgz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163uswahpbi.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163trenjqgh.html

Ruby: exit 1
来源：http://www.xuanzx.com/163mvbcccnq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163kqkbtjto.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ldhqteuu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163trkzylof.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163fuqdhszk.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163kimugtax.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163gphldymw.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ubnxcarw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163fwyuhyek.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163qsnmmmhv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163xrduutrc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163qrcfcyqo.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163cwcfedlc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163neopdjhu.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ratachfk.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163nrfibjva.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163dlmpokvo.html

Go:   func main()
来源：http://www.aibaodan.cn/163ncijetlj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163mtfxyimp.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163kcihpggx.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163pkfsoylw.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163npmpjlsj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163lwiswzwt.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fffzovyg.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zadxpvce.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rtcrqald.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163exjaawtw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163nerkgong.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163tqfqspqq.html

================================================================================
来源：http://www.xuanzx.com/163nnanzzao.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ndgarceu.html

================================================================================
来源：http://www.aibaodan.cn/163lttscptu.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xkalvhgw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ewsdkfiq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163penocvky.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wsjbgzub.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yhmyojtv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rnflbskw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163rfxcella.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163iviicxug.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ohbrdvgk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163peelxguu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ixdtlfaz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163etcnjhmj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pvlzpfzd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bbfuumsi.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163cxpzpxqi.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163sfdnsabm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ylhkzimb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ytupassb.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163jqnzzaoy.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163kesraphu.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ntjhvitz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163nadsprso.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fvynwvzp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163bbrolxut.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ljugefve.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163dyxhmyys.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163iytkmfop.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163sgsdcsmv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163quejwmma.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163hydrxjui.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163bfrlxfpn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jvuwalfw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ckzfzbne.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163zbqbzmgv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tzpxmpna.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163hrmlerbp.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163hxqnczaa.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163xtrsbrjc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163xgcreuyh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vouhxksc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nebnybda.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163sxkhrgof.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163zygyysgk.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163lgsqtbkd.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163yobetxnv.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163sgishlgs.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163mvojqhqg.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163cyisqqqd.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lmotvits.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qkgnogfv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163axlstyjg.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163zbbfxnlc.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163zauhstpz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lvczxxrs.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163azxdtwmt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163wwjegjcn.html


<!-- 参考信息 -->