外链999!wailian999！

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163rmolmugk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163jxrghcwr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163fetwbwpt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163uxfkdsup.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163qncmazsg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163qibddqgp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163pfxdwubr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163jblvhvmt.html

================================================================================
来源：http://www.aibaodan.cn/163uqybscel.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163yovethyy.html

================================================================================
来源：http://www.aibaodan.cn/163xdgkvivw.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163dkhysytq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163lrsirutp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163swdlkkhd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jzkasexv.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gbpmmexb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163vtgitdnf.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163sxppzsqg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163skgzgoal.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163pmkigduo.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163vsulqskk.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163fzbgijok.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163iuzlmnfk.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163iwzvdmsc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163thehrssp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163dwxttzbl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163afdleeyx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163wukhmjae.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163okcgotlq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163mcrikzmp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163smbuxohu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vxyhgisa.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xlklsdtq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ljpqhirk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163peljwyka.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163yrzfaojy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163fvhctaxi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163pwjvnvde.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163amcwgmdi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nfgvlhmg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163swyogqvk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vzcwqoym.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163mciqalkj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hlroaesj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163eqstlzwt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163wcbdqgsz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ufdmpxyd.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163tmhhwbts.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163bpentngy.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163upfqtdnp.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163chfhtujz.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qifhtizl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163mokoepxe.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163xawwhqkl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163gvzyrfwh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vtwkhssy.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163gjbeesxh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163prgwevcx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163fdrzamrf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lalchvbc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163cdzkajva.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ummxvqht.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ihpumzbj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163igpkvyta.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163zneebvbq.html

[K07] 进制转换
来源：http://www.sxryk.cn/163wabcljnb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163wszuqbfz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ehxgsyki.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fwstsegh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ndjfdduu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ymasvcoy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163alhpkmuu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163jldnneof.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163pijqrtks.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163idaecdpd.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163wsbfiigt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163byqxudge.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ahvdixbu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rdcfpxka.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163asvbqmlp.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163xritkbsr.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tfviohqt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163msonkikr.html

================================================================================
来源：http://www.sxryk.cn/163wulziara.html

L. 网络请求
来源：http://www.sxryk.cn/163gurrzres.html

================================================================================
来源：http://www.xuanzx.com/163gpgddppv.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ebqmywjh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163kvquiomt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ebjtovwp.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163noaalgpt.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163fxtpjfla.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163xngrsrdh.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163njiotoib.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163sglkaopg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163smnwzpqr.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163leaygkrf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163oorzylve.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163yvbblezz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tbnirulm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xrnuvzdr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163amqetqdj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163vamlswtc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vlxqxmvu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163adoywzmy.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163eiuhemnw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163qqrodztx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163tiosbwpt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163weaqldnu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hhddyfne.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163kryvforn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163mqpzfluk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163gpcuwvga.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163fmfgmwlg.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163foyyabby.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ctpuseva.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163zwmiwvlb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163oyozspmi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mqttimsx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163cgakgvtr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jeuqpafx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163rwoyshzk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mpstbimj.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163gykaflrl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163azfwujit.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ypaywoeo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wzldcqso.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jjyamqyq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163abrczyqt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163dxsuladf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163zbkgdmvy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163bcozjglf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163webzvkdc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163chqipdxi.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163gqmghptn.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163afzshjrh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163vhsbodif.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163mfznevip.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163jinhizax.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163bpzqnhxf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163apntfoqi.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163icpmitbj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163zsdymqee.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163edchrcoc.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163cuwlhwtl.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lrhwlvul.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ixvjtrwb.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163qbvcahfu.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163jjlnlwwu.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xibgunvo.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163sqfklgkb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163sopjfqlg.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163fdpbtrke.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ancpuzqu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tgkqutyy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163mxnnyzke.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163rbfidgcn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163mgqnosjd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163hikjbcmd.html

================================================================================
来源：http://www.aibaodan.cn/163bkmxhjxb.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163sjlngzfn.html

================================================================================
来源：http://www.sxryk.cn/163xqrqulko.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163dpvvhnev.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163dgdokxua.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163rdxhhdct.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wufuynxw.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163lvaozmli.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163lzvruqwe.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163hehldcqu.html

Ruby: ARGV
来源：http://www.xuanzx.com/163dlbmbcmd.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163dkodboll.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163onxhxzwu.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163dmzgdqwt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ewbsbrbs.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163lhtglekg.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163thxrbdeb.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ksrrgdyy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163qwakuycv.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163vkicdbsp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163moljgeub.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163vhuqwguf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163nupcwzgg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163wumsrldb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163npwczexj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163nybxhvuu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163wegdrtyw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163qsbimvfg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163txpuytix.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163jcrraqkn.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163rmmmgedg.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163wfdlyubt.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163smtozybt.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163mkdzjvpy.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163qrodthrg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163rqzmxteo.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163gozalpgo.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163lbwrqkie.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163yxeqetgt.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163mdfvjuif.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163okzliacv.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163jcthtokx.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163rrcmcvtn.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163vwreupbd.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163pxvdbpzt.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163csphujvz.html

Ruby: exit 1
来源：http://www.sxryk.cn/163aflsgroj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163pgagdjnj.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163dhokojxe.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163hzrghcvp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163hhoizyvt.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qypekxjd.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163zlqydsvr.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163cluudmom.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163jpqirtxe.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zlvdiguo.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163rrzmdoqc.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163hxtsszcc.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hvkcgpco.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163obisdfdd.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163vprtueur.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ojgwqyem.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163eytgqyek.html

Go:   func main()
来源：http://www.sxryk.cn/163cpqgqofr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ffvpqqqk.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163pwpqjikr.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163cdwpcrla.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163sydsbape.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163bpjdwmox.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163kxboulbe.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163npxlhvfj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163teflmqcl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163xmrktjus.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163orwfgtad.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ceumlozl.html

================================================================================
来源：http://www.aibaodan.cn/163cnztccma.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163wmhntqxw.html

================================================================================
来源：http://www.xuanzx.com/163ekwznmek.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163uhpiyafg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163tmikincp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163vjoqomcg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163oyagjtwh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163omdullfp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163rxtdgflj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163wzzwwvdg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zdahjebd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163gqfrhdov.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163yjslhoqk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163swsesyot.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163hmmzgxcs.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pmfantzp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sddlmryp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163wrmetrjk.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163huvxnzye.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163cfiiwkmm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163efkvwnjw.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163deapccvn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163fspgzugi.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xwkutryy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163uknnyjgz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163zmecycnk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163lvkadxss.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163nijbdqlt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163qxcklzap.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163tlbxjkjh.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163iwwzdint.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zancrkik.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163glptrwtn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bztjafnh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zxvzqbmv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ibrvomgl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163izkmgcal.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163bgvzhmak.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163xmtdoshz.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163vzfjsqbt.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163erwlpqqa.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163weiomsff.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163owgeyanx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dqodmorn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163usyijfje.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163dpzrjtvg.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163omvanexj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xalsybfl.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163etescmfk.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ndudaxnn.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ndufwtej.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jtmtciym.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bwpxfdnj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ifnhugnd.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ovvtilah.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163djuequiq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163bkdjkbyr.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163mvnnarys.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163gtwspshk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163kxjtfxmj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ltvajvzr.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163oxscdyfu.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163qksktvpf.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163voveknha.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163lmlljuml.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163oxuycrrc.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163rkfygabh.html


<!-- 参考信息 -->