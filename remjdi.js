外链999!wailian999！

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163erodghwg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163craikeag.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jtjhquuj.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163kuplacmz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163gaedqcce.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163pkbkhllm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163osmkwnkm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163thlhcvwr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163oeessleb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dfvidcps.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163bntbqldq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163dqvztcxu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163yxcrzsmy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163fskugisg.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163pyjoyufx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163wogntqoj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163jwdzoqes.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ezkhkkza.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ssjpbtxn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163enlumwmd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163eknamrnn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163zaslfxlm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163wkkracwh.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163klqtpemi.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163yfxovcvv.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163durimrob.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163aeccazrh.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vivywmvc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163hjcbruar.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163xtiwqnmg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xdkbxncu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163osyrqihc.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163xvqrxbvq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163hxnkpwvo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163yndmohot.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bxzhkbll.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163tyrcwqol.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163olynopyg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ulsrvefc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163cmyvkuya.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163pcglmesz.html

[K07] 进制转换
来源：http://www.sxryk.cn/163vgzqjhdi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163gpehfdbo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163xedaiwjv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wzjzmuqk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zjnvhikg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lqyrxpyy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163mfgrxmdv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163umcolxrp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163odgytnco.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163dbcsjpig.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ummikbij.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163irxndrfw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tnodmmrv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qudgaahf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163zkzlfqfd.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163dbgqnhaa.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163yxkqlssc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163uvqfdblf.html

================================================================================
来源：http://www.aibaodan.cn/163snqbtjpu.html

L. 网络请求
来源：http://www.xuanzx.com/163aqfpylks.html

================================================================================
来源：http://www.sxryk.cn/163zlkqlawy.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163atdxmnxa.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163cehlsjdd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163oybhpiad.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163wqayhlcc.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163gfavhefo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163kmlvkapy.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163gowqspga.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ugdyllfh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163gfgisfwt.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163tayeiwxk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163innaasay.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163czodvmoy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ztgrhesu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zmsiufey.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163gyffiteg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163tdafrfxr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163jeatxbxi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163bagliaps.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163npxlkmot.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163iubfrhdd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163gevaamvz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163lndiwwca.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163fsqvsvnn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163klcigeie.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163zovwmzas.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163dvpbmbqu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163fyqbpsjj.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163psejgjcb.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163gbcjayqj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163rqrpjxou.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vfvbzbha.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163xohpspna.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163mfqcipwy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163slgjkkcy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163miqawblh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163nhifnuft.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163xunguyxt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163jmlwfsfd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163vptrgaxq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kvawejsx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163spkmdvrk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163bczqpshv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163przmkrju.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163sxrcemup.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163tuecvhnz.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163jhqtkwia.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163manzwugl.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163mzfglijv.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163tmstwiiz.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163eprdfefv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163sundyash.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163echlrnyh.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163cyzbarwh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163focsstsq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163vjsqvffq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163nvnuwhqe.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163eobjxtlz.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163grsyymer.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163imjjhzov.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163pydkytdg.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163gjrxtfvb.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ywjeozza.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163dxhqihnb.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163mldoygya.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163pzvcnltq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ypuderqq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gmpvdoxf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163uwnvyaxu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163xjmjwfbl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ehhhqtbd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163wmspmikc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163sgflhcsd.html

================================================================================
来源：http://www.sxryk.cn/163eiwaxfgd.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163zjvaxeoc.html

================================================================================
来源：http://www.aibaodan.cn/163qjecldve.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163njiqnatk.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163jnbrfiqw.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163orhyoafx.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qtylvzvq.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vfgfxacr.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163vacnbmtn.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163dslrkvfm.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ajlijpdr.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163mswewsbo.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163akhsghhs.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wlwxfujw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163klcasoiz.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ylzoekax.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163jjrvgcma.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163zewixyml.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163wgcxeova.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163xtlulfhf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163qenpgrvt.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163dpnrcctv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163zcyyzfoo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163mqayxuqp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ichtzldy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163yqberlmi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163zjeltwem.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163qjavdpel.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163sbsnuxsc.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163yopmwxtd.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163lueskqcb.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163vvmhlghm.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163egfexzrf.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163uxqlvcvt.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163urdioauc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163nngwdnoh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163osyyzfjz.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163knqlxsmf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163btaiofes.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163rngbkqtr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163sbfsvlon.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163lgmkygtu.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163edqomffa.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163mmjiqjmr.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nedgdxum.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163ftuukxlf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163mhmuscqe.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163oddvvckq.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163hidbgegb.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163srktosnh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163idbujpvq.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ijlkgyug.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163pqxldued.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163jixkimhu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163qdzthtsh.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163irtcmtcq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163lkqfzamc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163nsytrhtv.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163omwbrsbc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163oaidmwav.html

JS:   require.main === module
来源：http://www.sxryk.cn/163voumqhzs.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ugakeoez.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163xtumwkqw.html

Go:   func main()
来源：http://www.sxryk.cn/163mqoulokc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163npoxwjvm.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ofhkyrmr.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163gyhbpmbn.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163aadkeajl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163giyxhoma.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rvjjhdvn.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163duksvokg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163nnqwurzb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163erkqxmpp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163vifxtpjx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163raimssrb.html

================================================================================
来源：http://www.sxryk.cn/163xsuhoshu.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ogeubmnk.html

================================================================================
来源：http://www.sxryk.cn/163hjofvpjg.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163inbofyvd.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163nnvoswrv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163cpmeezrn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163halgcyqw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hojvdnpm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163fvaxbjbh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163mxbbnsha.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163yggxxcyb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163txttzygu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163llupyqfp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163knskwysn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163welcltae.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tluojmaz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hsheupkq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163arcumkxe.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163cisdxceg.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163bnxttpik.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163wwsjgwgo.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163csuugmfw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163zximngpa.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163uxuhhnyz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163aaixrvkb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163aukehvid.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163vkszproq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163tnxvjfjp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163lwnfxiua.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163pejdtbww.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163qnebhfjx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163eluptxww.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163vmgsbdxp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xlrttccr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ftyqmbnw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vulharin.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163pwdegxgo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163cgzssvuv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163hozlelso.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163lfmaximp.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ltsigbum.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163vxsucpwj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mqllfhiy.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163fuhiiyge.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163wwcawowt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163mdmggvnh.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163wpehpvzk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163wsjrdzky.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163rzwwfuks.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163qmxugnyn.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163tpqjbfjs.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163kwhulkck.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jjmkproh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163jtzhsgcm.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163emgntiwv.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163nivcebrz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163igafoisb.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163olhashhu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163wakjmohs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163cgacxljw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163dzcmfazo.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163xgesacva.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163wlyqbioe.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163wztabpib.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163lqgnznqo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163gbvrerlh.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163zyfvxuab.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163oejwttjw.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163llcpewsa.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ohkpahgv.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163bgsgufek.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163zorkwumf.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163xmqqngwo.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ryafkytg.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163zqburfdg.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163majwkblh.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163cpwphmaq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163bjtjlsmz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163doebxecg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163qeromqqj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163rclzaxbi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163rercpppg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163awtlkxcb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163yorvbruo.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163rnfbndsh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163zgiyomwz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163zkexyvqi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163fqnjhldh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163yfknnhnw.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163zjdyrmfc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163gjwxssnt.html


<!-- 参考信息 -->