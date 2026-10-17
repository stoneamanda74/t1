外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163nuplgybh.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163qmzvuoqz.html

================================================================================
来源：http://www.sxryk.cn/163fujosuql.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163exgrugbj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163utxchqak.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163newqzpxm.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cwgwunpt.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bljohpyi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163psjmjhbv.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163naydnkmc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163jlkfcdpu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163dmknkbhc.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163lpfdnbnq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163chiiqgwo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163vsknpcru.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zabwfguy.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gmludezv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163njczzyyo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163asqlkvka.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163fqhtylsi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ufepkngx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163lnhkycbb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ympikxvx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ddzabgbr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163dtjyjsru.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163eowvxdks.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163rhlocfwa.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163pyeuffed.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163gnrvfrxl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xvutusjj.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163zindhbwp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163rcarzxth.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163vzdnnrhu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lhljbfvi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fiwcsffm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163vmlfurtm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hunbcqav.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163yipjdnfn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163npgvstct.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lecszhwp.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163zhojvkxe.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ovqvluvp.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hlkgaqlc.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163sdaskfta.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163oejwrcpy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163jntocwrx.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163qsmvjglj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ycodjjvs.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wkxqkzwq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163gvmvwrlp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163lewazoae.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163znilahvn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163hjowdegc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163pklhshux.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163krapoisv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163uspbqdkv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163muccjolf.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163vmhkblvs.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163uytglxda.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163phtdczsb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pcxozajx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163muxtqbnq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gglzhnhr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lusnpwho.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163bpnuktst.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163wsuyhltk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ngerfhwb.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163vwmztvcq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163syttgzjx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163tgwaavrs.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163yfhjzqtd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163fjmdjjjr.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163jcmubgzf.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163lmemcwxq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ajrnpzdz.html

================================================================================
来源：http://www.aibaodan.cn/163qftkshtc.html

L. 网络请求
来源：http://www.xuanzx.com/163bpimaaag.html

================================================================================
来源：http://www.xuanzx.com/163ekbrjupr.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ncwjglml.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163mvvyksmw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ejngveeo.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163zswmsano.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163auujcppq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163yywkgjev.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163zwmjredd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163erhcozdk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163qknzltsy.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163eepffnwb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163frvvdpxo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163lzdodqll.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163peijpwso.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163rplkujta.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163gydzuiag.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163yancehmi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163jkbekqbr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163bbkaadka.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163koxxrral.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163baqcxemc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163joesxavp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163aszmpjcj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fuoyabiy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163xlxeqgts.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163vyqyktyg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163xgpclscg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163spqgzlhy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163lgaxquwy.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163tiwcxubg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163bgssijme.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vlwghctv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tincpklc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163qzjnrfzc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163wxbyqlbv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hcwdybpr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163hslfhzkr.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zbhgartq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163dbcmczzt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163deltuuhv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163gyebwqug.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wbllrccx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163phsatdkn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wramrzuq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163espvqgsa.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163eegebbnc.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ditfahlc.html

Py:   resp.json()
来源：http://www.xuanzx.com/163elkokhqk.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163huphinjo.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ryihghrp.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163sfczhmqh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163luwkchyh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163mladytub.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163rqckgcmn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163bfagvqxs.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163sluhulvl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163nulywfxu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ywpdwndi.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nmacbdgc.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hxcqfwob.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163neluelkr.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163kisoafqh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163lkfujfua.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163mijgoobh.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163txnqdrhv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163yjsbriza.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163rvfuylti.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fqogpoqf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mdnamkbm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jmhajqmz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ztilnqfw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163clfizawf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163jvwrxziu.html

================================================================================
来源：http://www.sxryk.cn/163mhnznjxo.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163sybiyksy.html

================================================================================
来源：http://www.sxryk.cn/163gctrkuxf.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163utatjofp.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ezqtbtnd.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163lfvtmshi.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163nouohofc.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ycabxcxx.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163rkywrvju.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163nkycwqzy.html

Ruby: ARGV
来源：http://www.sxryk.cn/163himkkadw.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163qcpfziuk.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ulzxiozz.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163aprplarx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163plbukzut.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163rjjyzxsl.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163jmaddiqg.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163qsuvogqc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163brhcuttu.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163fmuqxzyu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163usklohnq.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163mwsjrbky.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163pddrpwhq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ewonmbvx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ixaxmkip.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xvrvvlkm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163mpwawdjn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163rqdwwqfo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163pxfrcpyg.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163zhlgbxnk.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163sjywvrqb.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163aaesdenb.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163zhbhmujb.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ckvlepsh.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ogrnyche.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163bbxgocfn.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163falozdyc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163oaamclyp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163nyzylokg.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163fpzgyxxo.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163nmwobvnn.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163qdwrtkoy.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163oepltqmc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163chyxypmf.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163qkekmfhp.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163zyjhxkpa.html

Ruby: exit 1
来源：http://www.sxryk.cn/163luzsisxg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163cwzhosfd.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163tvpwvceq.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163iptztgdw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163przdvlmt.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ruishizp.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163mvypfanu.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163bhxwojso.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163skahklof.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163qfvwdhym.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163najtvijy.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ukqbgnix.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163btktjjut.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163yxnydohi.html

JS:   require.main === module
来源：http://www.sxryk.cn/163bwqstqnk.html

TS:   require.main === module
来源：http://www.xuanzx.com/163lebbjyoa.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163djdqiopi.html

Go:   func main()
来源：http://www.xuanzx.com/163awwbezdw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163pboqmsiu.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163owtokspl.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163qpsnkdbx.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163mrzszadw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163apudjute.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ipgxxypr.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mdajopob.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ublozgqg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163fkvaukjy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163elyigsvq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ucbipfjy.html

================================================================================
来源：http://www.aibaodan.cn/163wlvnowuz.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163btzateio.html

================================================================================
来源：http://www.aibaodan.cn/163jemctuks.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163dekkflna.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163kxnysvtz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163kngrttwt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163joqjiczt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163okpbicej.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163qkywhvqm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163wgncfcls.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163pqmsdxiw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163lldnrieh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163rxdzzfmg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163bgzylflc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163kkvimwyb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jvurgisw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ssjyqebn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163wvabkfph.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163fslzypet.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ojrhovlg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163blezcjeq.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163rydshyql.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jsjsswsi.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163yhxhmhgt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163elovtuhr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fmsuhyee.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163jasfvwxf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163sinqxbid.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163pzmpjqnl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163vsvdaiuz.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163yimitnxs.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wfifieez.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163aekgdozm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ltfnvgwc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163qsuznedz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163bjdpqegq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ckifjbnx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ubilfgob.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163zhoarufx.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qbdwkqgv.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163lwdhkgnq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ekyfuyrs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163nybdmrhx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zdhmgqdu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163xgucqbvp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163zbyfrdgk.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163phftyuru.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163hzztioqp.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163edjeekej.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163vtvqyhlm.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163bqrfrwjq.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163pfonmaop.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163uuvaksuu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163osyeodyh.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163wlbboxnj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163agfwydwt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jvsjpstt.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163cqxrauvc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163mkvziqdb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163fatklbqm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163tyfncsvf.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163prsyodlh.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ejsvkzvb.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163mhhtgpnh.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ftdmaqmf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163cuvljujz.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163gzdyzoms.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163mexrxohq.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163afcynllw.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163fexfxuow.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163aegexwew.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163mknsdggh.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163mwugggjy.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163mjbedfea.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163drthzfeq.html


<!-- 参考信息 -->