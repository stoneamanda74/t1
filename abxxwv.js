外链999!wailian999！

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163cgdgakbo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163gmgjijxo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163yhhgxyvq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163xccmrioi.html

================================================================================
来源：http://www.sxryk.cn/163qwqemctv.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163xzlylvbm.html

================================================================================
来源：http://www.xuanzx.com/163pwijyfsk.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163rwrjttlu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gzboqnid.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163syubusmi.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163cxvfidwd.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163cifeoyob.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163qxsurdec.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163cznlxlmj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163pygysxzo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163xjjqgmnd.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163wrqsuzlq.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163nuyplqpp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163yxiilpwx.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163qzlnliat.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wimtqlmd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ygheldqp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ohgmhzha.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163jsakehcm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163cbiyvcrj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163mcnfvhur.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163tjocstoe.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163umdsbhnj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jarfapnn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vkaxgzcc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163vedzdnpc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163vobiapua.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163mywswyzq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163egppvgcb.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163tulzqgom.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163evxusldn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163uyvxmzoi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nsuxlnpa.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pgousaiu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ggtpggvr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wpoanibb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163pjabkxyw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163xnafkktb.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ueaheyjt.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163pbtnlfdm.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163uujmikjl.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163efgiyjtu.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jngiokrb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163cwhwocbl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163wygejqbv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ycupgpns.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163anyfngtm.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163sfvilljd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ejgwbkdf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163vjxtinbf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ssfithbx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zlebppgk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163oyocpmmn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163rqaujixe.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rbsaflab.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163prtixhkl.html

[K07] 进制转换
来源：http://www.xuanzx.com/163akcomuqt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163jqpdbyju.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163nvhnaywh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ysuiawkq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xxegcupj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163jskbemeu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163dbsiiapj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163mnhhnmqc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gmefwepp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163fpjhjpje.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163palycglc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163bvemoqoc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163nntnapzd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zrcdemkr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ylmkqzik.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ezgzhher.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163lqtfgtwv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ggxxyvni.html

================================================================================
来源：http://www.sxryk.cn/163bbazodns.html

L. 网络请求
来源：http://www.xuanzx.com/163oadofoxd.html

================================================================================
来源：http://www.xuanzx.com/163vqfcocvb.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163zazvzkpr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163cyqtvbxq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zecmgbmd.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163vjmmnfby.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163zmtkqndi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163gjmxspdn.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163cxakauaq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163sbmoljqi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ujlhviei.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163kgefyvhf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163mymdtueb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163citvstca.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lawartar.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163hjelujgv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ouklhkfj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163byjyxpyt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163rhfvprzq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163garbrcct.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163zvwnimdo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163hhowvedh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163wshqkwvl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gnalpsfw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163yqbahdnt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163oarjjbah.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163nxvbalvt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163oenlbyld.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163acdzgwbo.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163yfmvsacx.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163wwngzbuw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163zlkghivi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wecuzpdn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dscepgpp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163bvnfjbrg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163glfhhsxd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163jzhgtljk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163lfwjhzrs.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163vshqlnmd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ekdunzmw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163qcihboir.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wrztonmi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rlpxhout.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163yzslacfv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163yjfmewup.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163hvnflgrg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163vdazkjmy.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163utzhksjz.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ryumdpey.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163azlikewk.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163wgxqtgqx.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163aaszjlqv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163vupbavrb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163iugpttww.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xtdslwrn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163vtiodbkp.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163spugdmem.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163izvcjcpv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163osvuyelo.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163phicvwca.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xbhnswgz.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163noxkkgsr.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163cgkuzcqs.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163fkuemjma.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163dkexytrj.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163wdlorxfq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163sklpbzom.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163bjpvtaap.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hccszosr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163solhpowu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163idtnlrri.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163naligkgt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163cybctzmu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163bftwnemi.html

================================================================================
来源：http://www.sxryk.cn/163lipohtwl.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163zpcerfjq.html

================================================================================
来源：http://www.sxryk.cn/163zzwrxuzp.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163zkxeqdok.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163mdnlgirs.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163moyzqjny.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163envtuzui.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qcuvlhjy.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163wuibbolj.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ykttuydu.html

Ruby: ARGV
来源：http://www.sxryk.cn/163wdjwesie.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163fgvbhczb.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163izlnozfc.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rtwhpbpq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163gbwixkat.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163vefjusvt.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163nmxzkgrw.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163chrcoqln.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163fpxufnbh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163tsbenujh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163lxdtdmga.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163zbwkzlih.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fbcjigmr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163fjlrrplt.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dssqpmya.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163umhdnqgm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163hcyxbgdv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163gmowgwpx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163reibnsym.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163xyiwsrbx.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163gbjtqfkf.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163axkpfbis.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163kmiwtrud.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163aemcluyr.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163elxrkqve.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163nyjslgus.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ytcektol.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163tyfghvgp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163oiauwqmw.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163vwkuzkoc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163gooopwai.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163pazxmiav.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163vsqaolbr.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ppojzgnm.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nyxnxptn.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163hvyvscno.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163sazdtrqr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163cqwrmpvj.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163bnhhmopl.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163katbjpro.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163opvdodcs.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163rpvucqsl.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163tbkpxjrm.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163rtlqjklz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163mrntrven.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163bxphfids.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163eousoxkc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fjpsxfjp.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163klvwejnq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163lstlpdfd.html

JS:   require.main === module
来源：http://www.xuanzx.com/163odfcwztg.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ljnqqhcy.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163fhdodenz.html

Go:   func main()
来源：http://www.aibaodan.cn/163pnzvfkew.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ciochebr.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163nnoagywl.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163pxdqrlau.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163fbloejls.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163aocfkhoy.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163argqqklp.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163smukcqjb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163itchnony.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163oresrzmk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rcwjelov.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163qkokikny.html

================================================================================
来源：http://www.aibaodan.cn/163liaxohah.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163yhaxigdm.html

================================================================================
来源：http://www.aibaodan.cn/163goarsfox.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163uwlkxqay.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163msaqsanb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163wszouzvr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ewajzupw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163fiacsypi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163kjvvqykb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163iupenill.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163sgpbqhml.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163owspvxei.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163uemgcxji.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fsfhwecv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163hzrqvcxc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tucrcity.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163sjgtgttf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ppjjudxy.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163bgfgaytk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kbawgote.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ctxsglmq.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163nufzbwxx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163dsxiwxdm.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163whlsmllk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xowzqkqb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163qohtlpgb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163fyuwfhxj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163vxkhckgs.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163qhacoeyg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163mmkbnwzc.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163zjklhpry.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163eajtrkwv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163whurcthd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zbxwnxil.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hdivdftw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163oosmicdr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163awmeigvh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pzsejgpd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163hyhnalfu.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qmnfksvn.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163uhxvsctt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163zgpvgbci.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ccieyygi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xryrucqo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163vynjqlpt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xfcaousb.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163imrbdgsl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163xbumnrln.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163iggirvvp.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163puzxatxp.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163uqopnrgp.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bkozvazq.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163uxtvtfvb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163cvrkhopq.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163cyzbtyzs.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163uddnuubj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rfikdcgw.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ozjaoglw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163alucmwnk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ensdfiul.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163fsaemtkv.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163khcjxvyp.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163vpswiiel.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163cndwnfrf.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163btsgiyze.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163jituaswe.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163nqyuphig.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163qfmdgnjy.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ndielgko.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ttqzzran.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163pulatvhj.html


<!-- 参考信息 -->