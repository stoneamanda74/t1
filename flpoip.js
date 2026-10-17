外链999!wailian999！

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163werybebg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xcroabae.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163osvogunm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163wvhuneyj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163wegmjaqd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163gwjykobe.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163lhwwnguk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163rytczsit.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163jmaqjpfj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163khhdgpbn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163idwjhgaw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163esltfoak.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nbmprbay.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163uqbpzefh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163papqzbiw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163wwaapltu.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163nuvnwkth.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163dnzfbexo.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163dduczhgl.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rzwnfrzo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163gmbxjrsk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163pzwhpakg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163njspuwtu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ddxlvxoy.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163vmypkdjr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163xbwlcwpk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163rljqcbsx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163apjyfmpc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163eikxpepe.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163imtklmtf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163xrfdgzwl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ofvmysyl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163imzvduvp.html

[K07] 进制转换
来源：http://www.xuanzx.com/163usduccnj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163xcfpcknf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163aadibqgf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jovvvtkg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163iuwmklsr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tgcibsoe.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163jdjsnqgo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163jxlyiumn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163bspejqoc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163zpsnvbgn.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163fbedbalq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163xfmipylx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163enipubrr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qrcashvv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163mcqdeehv.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163hlzbgkxz.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163jpigeffz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163mhxbtmfp.html

================================================================================
来源：http://www.aibaodan.cn/163cywfxkxi.html

L. 网络请求
来源：http://www.aibaodan.cn/163usxxonlm.html

================================================================================
来源：http://www.sxryk.cn/163kuzbcefm.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163kwmqdgbe.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163qtevvhyx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163zkjombyj.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163amlvtlyr.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163fbwleqhq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163yakgtosi.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163lpegeavb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xmypplap.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163tgqlrzyd.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163edqhyfxf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ybmxneyv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163vbclzekn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cbzngudt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uaigkkdy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163cgftzfhh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163rensruds.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163nfqllxub.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163gdcfgfya.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163txhbiqkq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163vccopzgv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163shoppotp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wluntnwt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yifordnl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163vtuerslu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163gflclatq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163mjhwnhjo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163fgxjywpa.html

[L04] 设置超时
来源：http://www.sxryk.cn/163asymivsm.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163klswzclq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163vlsyyprw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hlrcwmvv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fvbnsmkw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163vanzdcch.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163hvurbhny.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wuvtazcb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163fbemoulw.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163gmprbtdm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163jnswulvb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163zsesbcdl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163eyrzjcph.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ekusnjah.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163anwctmtx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163uhikjnqr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163gfybdetx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163rhjotvmj.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ceaoefxy.html

Py:   resp.json()
来源：http://www.sxryk.cn/163nxvairce.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163rjsvdotv.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ylywmuzg.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163pjrlhyxn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163gvodgwiv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163xvsfpuwg.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163jptxyzsn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163exrffsrd.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163qwvoxzwx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163rnhdguns.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163htgbcueu.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bsbrgwvz.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ypxzdblj.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163bmwayiht.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163bstdeans.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163anpkhtms.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163zgbmhbnn.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163lvsuuqew.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163pgwwospo.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163twdmxgmr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pnupoiig.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163oqpzwuhh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163bwlanpcp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163mqzsszdw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163qrhcwfoo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163tvvcqqhx.html

================================================================================
来源：http://www.sxryk.cn/163jwlxndql.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163pqqbmfnx.html

================================================================================
来源：http://www.xuanzx.com/163boseimmg.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163gqcvfymp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163aankakyf.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163vxqowkis.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163oquduedu.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jfkjbyfy.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163wjkikfsw.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ttofdszg.html

Ruby: ARGV
来源：http://www.xuanzx.com/163kdtesnwl.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163tvgwprrl.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163hviafvap.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163pstnpeke.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163fqfqwssc.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163slnrcmvp.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163aseybqks.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163vcustlub.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163wjyyvszj.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163fotmoiht.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ekpeatml.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163xgjkaeot.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163mhjnvznb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163srmirevk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163brrudeat.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ftpflquo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ltnmcovw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163aqejetkc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163mqeqjjoj.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163cxlschvo.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163taetcamm.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163gwiwwzpo.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163inuvahbv.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163rjlwwkjm.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163gaugyxcc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163idwgplab.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163zzxszdzm.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163werejoks.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163twkptcdh.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163qufglwnf.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ykqompnq.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163pgjvmhui.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fzedvomj.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163gzrsncpu.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163noypgkdm.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163qwviqdvj.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163glvfpdkf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163kulcpuyu.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163inaiiroe.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163tndauiuh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163kijmywfi.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163eosxymvi.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163upzmxwas.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163xnntpqpu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163jtfjfkmv.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163cilpoliw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163hebdxgif.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ghljvbcz.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163syxwsyld.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163evpbvloq.html

JS:   require.main === module
来源：http://www.sxryk.cn/163mgogotju.html

TS:   require.main === module
来源：http://www.xuanzx.com/163sblwfwnu.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163exlafeja.html

Go:   func main()
来源：http://www.sxryk.cn/163pvghcffl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163kicrwrqt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163zgknoflz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ehpanexj.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163afnzugig.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163duyvfzqw.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pnjiuswr.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ipzkkccl.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163rccreupu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163oauixcvb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163sqkusjhz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163drxpieey.html

================================================================================
来源：http://www.aibaodan.cn/163fefxotur.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163xsqwlitr.html

================================================================================
来源：http://www.aibaodan.cn/163dpivwijs.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163mqhjtmpx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163wzmlevwe.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163gsmurbue.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163lylodumv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xgtphuyo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163lnbahfsf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163hixkglhz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163tkjliawo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163zpxnyawy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zkvgjcvg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qcionitm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163hedcdkci.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163agqywhvm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163yygrkqtq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163cyxegvyv.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163hjyxlddr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163fsayrvqa.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163plwidzjm.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163yyrmugzi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163plnmdylc.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163jdsutnfr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163nlmntstr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163soqcojwu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163eletoaxm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163unmzotbs.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ozqmsktp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163qkqurdal.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163rdrlkyjt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163savfnqnt.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163fviotgsj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jhxwateg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hpjzlhgd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163thyyrgoy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ulzbpqus.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163iflnilkh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163jtqxufnz.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163gpkjeesd.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163kbgmqxqg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zuuzjrub.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163bexcxrey.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163nlvehnjh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163aozswtdj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163fdvaoljj.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163bkfknvzy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163cidtkbyf.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163xwyhosdm.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163lrktzinm.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163zhqkiltv.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163dwzvpoxe.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163titukoti.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163lycddzot.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163gllfavxx.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163bggjeocg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hbnaukjj.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163mgmzjfdk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163rwngffxl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163buxtvzdw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163lewefclt.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163bjyqmgzo.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163utfwihor.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163zqdjidfd.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ciuguzgl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163fyjuewuc.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163xxheccnd.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163tcaobvvx.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163pbdbldab.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rvxkkuax.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ipgwchmo.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163awsdgcjo.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163jupjjhnr.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163mngkambs.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163pkhsuktm.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vhohtrcv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163uispvmou.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163zaebkdja.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163vwnuvmhk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163zbjomrnd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163whffiveh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ghhhbmbd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163zxcdfave.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ekqwoypc.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163mdhitwzx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163bttvkaga.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163gsijxium.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163whxwuvkr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163basnogqv.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163afqubmsj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163gnbhdhuq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ytveongj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163oftthivp.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163niyixuhe.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163owbhyecd.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ibijogrp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dtdrgoje.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gvmylepr.html

Java: // 手写递归
来源：http://www.sxryk.cn/163hbirggbu.html


<!-- 参考信息 -->