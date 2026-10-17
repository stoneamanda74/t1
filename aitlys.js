外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163bmiphbbf.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ldshisji.html

================================================================================
来源：http://www.xuanzx.com/163fmbczubm.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163jjeezspu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163sdhgasmh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163uygykqvx.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mlwxksog.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hlsxeyzq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163pfsnqvgi.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163lrfmktkj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163dqkzcbgu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163tmlmbvrz.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163phirssyr.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rgttndjd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163qaomxesq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xyumviwi.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163eiunmswl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163kqpzoubz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ltmanffk.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ztiwywtq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ootpivtq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163cwavxfgc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163hllhgady.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163eqhqtxbq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163fmzbzpfb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ucxngbca.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ceytttrr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163lholjlov.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163omqktzvz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163cwtjmmvt.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jpxgrkgc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163gqotforo.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163gmfgakrm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xegnghyj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hwxeudkr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163oemgauef.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163thdxjrnz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163uduxtxgn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163hrwonubm.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163uukfafpe.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163hmkwhoxf.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163uboeopni.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jbdbroez.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163eysaxjrt.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163yyetydrq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163pcqdojet.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163orpqfhew.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163eyysuygn.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163fghjjoxf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163tzfauzpb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163heifqoej.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qatxgcmg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pposwryp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163oyatgkwg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ussvndqa.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163gijgrvlc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163cslxnlmh.html

[K07] 进制转换
来源：http://www.sxryk.cn/163drzvxzaf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163tikvpwmx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ynrnqjsr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ixxqwsat.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dludxizo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163zgcneotk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163cqznqkpc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163kagzsnse.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163lskkhfgo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163oockfcca.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163vqrdkend.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163fyraqgzc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kvbgrtjx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jocnhtme.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163rwhwfuao.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163exxyeoal.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163pxgiryuq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ftnzdheh.html

================================================================================
来源：http://www.aibaodan.cn/163wolayhzs.html

L. 网络请求
来源：http://www.aibaodan.cn/163sqktvudo.html

================================================================================
来源：http://www.sxryk.cn/163lxvwrwip.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163tydpmdhc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ieovtapa.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163bqefhump.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163hprifqqq.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163fyksxioz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ebuexcsg.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163mttosyix.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163zayzrwwn.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163kzlozjrm.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163dzmcabpq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163jpdsbshn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163eavaftxt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ngqehkxj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ojxcdjwi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163lqcmgnzq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163nafcklkn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163yplbzwxc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163demmfsmm.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163tbkgniaw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163rulpcjeo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163jqidbbsb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nskphqxr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163cjusvnev.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163xvsmsosi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163jgstuxeb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163dargyecm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163fmwiickc.html

[L04] 设置超时
来源：http://www.xuanzx.com/163kenjsvnc.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163tcvacgsq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ckivadwu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tsybibfb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bwkbfpyd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163fwmaotvc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163eoehbjdy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163pykbycbb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mwhdnguy.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163fzrpjscp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163togxqdef.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163theznjrm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pmchftzk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rmqdvvva.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163nxxugrro.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163lualxnoi.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ocbfhjnn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ywnadwbc.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163kskvikdq.html

Py:   resp.json()
来源：http://www.xuanzx.com/163brkrxazj.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163zhitwrcz.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163lpubxota.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163haqomyyo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163slqbzvti.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ztgkhwyt.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163mnrcevsx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163pxfumubp.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163yhcgolph.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163eusynqge.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163jcwfhmsx.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xaiymdpn.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163rjomauee.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163cllhpean.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163xzraxprn.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163eseakkfh.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ksydoxbh.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163kgjqijfs.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163affswgfg.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163sggovmnl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gmkmocpn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163utclozfh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ypjrslqy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163tdcyjkdg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163cggzckwa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wthoqbxt.html

================================================================================
来源：http://www.xuanzx.com/163zehbjtvh.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ctuuoqrg.html

================================================================================
来源：http://www.aibaodan.cn/163rqejnfik.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163obbdcppo.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163jznkomsa.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163rteyuwdy.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yslzkukb.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163iltpbcfj.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163kpgrrctk.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163gfpmsfgc.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163klgplwyf.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163gevbhwhl.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163fjnwpckb.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163yutztref.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163upvygoow.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163opuergso.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163jvwwgsar.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163bjlqnzvq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163bezymgyf.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163hlsqkkhs.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163lmkevhhj.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163khdbkwum.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ksxggdqz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ejccfwvu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qwxtzfih.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xyvgpyew.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vavrspyk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163tazozmgt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163kigdvhyy.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163makrcbvj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163jmocpgig.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ctbfbfdq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163lbljcqtd.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163yuimesxs.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163powwydik.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163uduzdjrd.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163mtuhrbki.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163kgyrnzhm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163gutxucay.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163wqqgvvyt.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163dbegnijk.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163kptnsslu.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163xgcehmhu.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163beozpsjz.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163wiudkwax.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163zkwantvm.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163bplkvswn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jmklozgi.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ezpolduw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163wkjmutcq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163gdetdfsm.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163yidxnwgv.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163sucixqdq.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163lhyngbaz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163tvayvots.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163lntkwpki.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163nvyqroqm.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163urwfkfvy.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163nhhjbnqd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163drqyjwkv.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ohrsgmdg.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ykfsezqk.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163uubidehs.html

Go:   func main()
来源：http://www.aibaodan.cn/163vdbslflv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163tvksuzru.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163sratamfl.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163vsqgwqzx.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163hmbyefrt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ryggqucw.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163eunaampk.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ccuvrysr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163wvoicuem.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163sgizehfo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163kinfceqx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163kcktuvzb.html

================================================================================
来源：http://www.aibaodan.cn/163opxbszkr.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163gneodxqe.html

================================================================================
来源：http://www.xuanzx.com/163ljbilbxu.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163udddkknv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163mscaqett.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163sygvroco.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rcdybfyy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163obvkzxuh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ocrxdoyl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163dxsscdzv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163iodmoerk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163urqotkyq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ehbamcjm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ucvigakh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ckbqqhqo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163oqsdwihw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mvojbdfj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163nwhrsalo.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163msowifsz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163bxgashpn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163qxdluwbw.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163qyuehbvt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163entojvbt.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163cwhxqses.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163znmlsenj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163oaecdtyg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mplcjdhh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163kmavsyos.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163iovxajdj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163xnbozghg.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ourfiwoh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dybwlkqm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163hqkydvzt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163swxmtchj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pmapafkw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ywptyrjg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163zanrtrxm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ndmtuofv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ulknlexm.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163zshxzyer.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163mmpkyzgt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163gehfxixw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163tipxikqb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163viwfgkkd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163wnmmmyke.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163bjdqwjer.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163dsxrwvxr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163neagbaun.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163xhhijgse.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163otsqhtmz.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163dknswhvm.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163izpentmu.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gbkvilxy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163pftlabzc.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163dpwhdrxg.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163tneypque.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163osovjfoa.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163umxfeiwa.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163hmibcqgk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163mjjksjlf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163fejlajvu.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163svdgooyj.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163giwgzllg.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163tpfpfuxw.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163hzyaonig.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163rtlkqjfy.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163umbxgplc.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163tuvgaafp.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163dowomryo.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163iccgverp.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xxwhyzlv.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163xamtwsru.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ntcrknoe.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163jitstewy.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ydvmqfcg.html


<!-- 参考信息 -->