外链999!wailian999！

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hdleqflw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163lesszcns.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163omperdry.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163vsvquzuf.html

================================================================================
来源：http://www.xuanzx.com/163wufjhwej.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163bbuxufzj.html

================================================================================
来源：http://www.aibaodan.cn/163wyfrsytv.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163skqsgvng.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163mbumroxp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ndrvyefd.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dkupnqxa.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xctkllzh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163cxfyflrj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163vmybafko.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163oyevqiou.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163lesccdmb.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163bjuplqtf.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163yjknhfuv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163onquxira.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163bodlskuq.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163bxjxnxgz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163okuahowt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ngeirprf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163uwzbhbro.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163fsfrwxbu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163dclzlvox.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163qbvslrrm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zkupamty.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163lpartltt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rjsdnacl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163fcbgzzua.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ohszrqqn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163lrybkspr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163jhwetxsm.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163brhisytx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163bbgdvzna.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163qdwqmkkb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rrcbscnr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163omgmffpz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163xcikvbll.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gcnoivgd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163bdzysohn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163oziaiqgt.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ifrljozt.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163fqkqrwlz.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163kbklkbat.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163draynmhk.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rosksodc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163izirfuoq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163pziyeaei.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163xlaujked.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163nzaadyfz.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ynpscapx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163kqjwulqb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163kjvwbely.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cddjqtpb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vppntnjk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163qukhmpon.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163biqmwruu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163hvwlzzyc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163hnjhjput.html

[K07] 进制转换
来源：http://www.sxryk.cn/163pqbhvwye.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163agfsffym.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163vymcjubv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163reslhzhe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163crkfxfmv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ebmwdtij.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lvwdjofm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163fcfbkhsu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163karkguhf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163xclaxypj.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163yvjmwbmk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163nclwalje.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qftvnmxv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163yhxaolwf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zavltadh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ycdfuotg.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163vbygyrxi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163hpavktxh.html

================================================================================
来源：http://www.xuanzx.com/163brjiyksa.html

L. 网络请求
来源：http://www.sxryk.cn/163ijcpkmrb.html

================================================================================
来源：http://www.aibaodan.cn/163xaywucih.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163pktpsqra.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163gtdmvosz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163jrzzuuik.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163euydfsje.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163lelmwmuq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163abovhlsr.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163nalwhtti.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163nhfgatco.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163kmnxwbeq.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163rslwkfrz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163fsznghjx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163aloyskyb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pfikmdfr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163samfcmwk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163timyuicl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163dnwlehwk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vwcrjnmr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163rxpwqmin.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gmyitrkk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163tcioyjbg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mifzpbjg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163spykhhvl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163shdrgjtl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163cuuzhhje.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163eaxswwdx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163yyihpfxm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163hcyrjxis.html

[L04] 设置超时
来源：http://www.sxryk.cn/163gucsxruw.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163dahrtjug.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163qprpfxsd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ecucgcxq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ugyhzdud.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163kzxtiqwa.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163axeqqejx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163zjwvbqdi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ercogtjd.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ugikxehj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163jfprkdjb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163mrckfffd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163uhqbktrv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lkjweikk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163fqfbgoez.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163mhwdeqdm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163lighmgix.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163rkaxprcu.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ozgbcdgs.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ifuselbj.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163inhdmcnt.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ggewnvxl.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163bolocfie.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163pqdqcgli.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163esbugilx.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163wggyawhs.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ifkouhta.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163cbfnaygm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163fblqmyuv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163adbecguf.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ujjbxfls.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163klonddme.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163lgwoglsr.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163pvvglemf.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163idnvpjzc.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163oezwrerw.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163datayvxy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163jntstnaz.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163gsgttdpa.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ezbzeovl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ftvmqmrz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163vspgcjhd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163mckcocys.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163vluzgptu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163fscigjqi.html

================================================================================
来源：http://www.xuanzx.com/163ngtgknpl.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jhbmctgy.html

================================================================================
来源：http://www.aibaodan.cn/163jzbgqien.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163gilkdcca.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163bapfhddp.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163scrmjgxv.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163upknfwcq.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jpxywumh.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163xctwlsge.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163fqtvbsip.html

Ruby: ARGV
来源：http://www.sxryk.cn/163quqpggoz.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ztrfvrhs.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163wwjhbxfa.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163bpknkbew.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163kbwyacpt.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163axzargaz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ywlpquww.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163gstkgkda.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163pgyrgdou.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163dcttgpep.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163eljfqbmi.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163strfmbro.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ubgacktg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163fhexlmrq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wclyjrvd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uieqqkhd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163alwtfvix.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163uuhmgwka.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163oophltel.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163bhmyhytx.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163mpbqclgf.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163launllhs.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163nckebteg.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163qiffleti.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163tgdnrxza.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163rqoneoqh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163hnmbbfao.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163qvsyrfnb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163kgiesxcl.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163pejppwwi.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163wanobcsq.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163nkvualga.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xkfcuaoa.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163mhqshwuu.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ayaisnfj.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163rmyyqquo.html

Ruby: exit 1
来源：http://www.xuanzx.com/163horrdgtz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163vjwwlmeu.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qrsytgvm.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ogziqpnt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163gjreqplu.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163lwvmlrnh.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163yxaivudk.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163nffwsluu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163megavdwp.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163hltvhdao.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163yaxpwjou.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163nrwyfitz.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163pvuwaivw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163snukivcp.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163vwspamdq.html

TS:   require.main === module
来源：http://www.xuanzx.com/163zezlcunx.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163mubdsxim.html

Go:   func main()
来源：http://www.xuanzx.com/163drcszdtk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163egooqxvy.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163niogmmkl.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163erounedd.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163tkupjkgz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163upxjixsg.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nnntwtva.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163billrppf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163fkalvald.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163hkqnwbsv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163qthzhetv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163bdhrtlay.html

================================================================================
来源：http://www.sxryk.cn/163sooiptqu.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163vvdfsrwi.html

================================================================================
来源：http://www.xuanzx.com/163lktnrvvg.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163cgowhfbm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163clpckxdu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163rffvrjzo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163slqcjdgu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163cvkacsew.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163pdcunjog.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163lvhcqucw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163bkwxmwtq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163rrlrrjeh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ebfuebeu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hbgtsemh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163omhhmans.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163inzxfkid.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ywfsasxa.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163zknqfuhg.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163jebwazcj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163qolubvhh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163rpsfsgxv.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163cvbqjqef.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163sgatrgyt.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163dewgxtsd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163uonihryx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163feiwqvsu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163neieqcuh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163fmvvwobp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163itqbmouy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163yawhcrol.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163wqdyfcut.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163kupehzsz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163hfstplzo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163oqyzgwgx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163sedgoouy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163pvuitlfo.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163qqjmarrn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dmzvgjjl.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163hpicqqyu.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163hwjlmtct.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163jajtlxyu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163rvejfpfk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wqkcyzev.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163hbexdlkz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163wcbiifxb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163qujjfcpa.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163bcdvpjnr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163jvonbjzo.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163buaivadc.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163kzhwcxck.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163cvsgrfoz.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uwxxzmzv.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gzutotsf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163jhilplgl.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ytaagffz.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163baoyefte.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ikhtfpvx.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163wkaygmlm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163pkowzdue.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163grzilrdq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163apxohyam.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163syigethh.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163cwrmbvcy.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163eawhnzhg.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vcaxnrju.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163jmmgtmuc.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163xhwjxtrl.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163masldovv.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163xpqgskyc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163udbttnoz.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163amymobul.html


<!-- 参考信息 -->