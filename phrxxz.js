外链999!wailian999！

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163swyafwyg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nduiuyuc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vrkdudyp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163eintjcsm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163whbbrcdj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163wignwgyk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163pdszlpeh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163nqyqsunv.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163pxtezben.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163vbuocbdy.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163udelqrid.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jtguaztk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163obentbcl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ckijyoon.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163etyhrsac.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ywnwbepu.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zscgjksu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163jsgcyikk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163hqxgvuzd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jpapiaoe.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wykuvvkm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163izoaojnt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163rupzsbgd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163kjonomsy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163abqkfsil.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163zafavkcf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163mfqwmfrg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163uyeosvxz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qeuvhuxb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dodbfhka.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163xhuwktnx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163vrhbqudw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163edpnebmu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163kbrugzup.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163yhhmsdac.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163gltyjbrw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163lvcjflil.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pkyvyjiu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163yegfcatk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163brmypdbe.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zmrlnftu.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163fcwerwen.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163hqoituzg.html

================================================================================
来源：http://www.xuanzx.com/163jxzaytie.html

L. 网络请求
来源：http://www.xuanzx.com/163udukecmi.html

================================================================================
来源：http://www.xuanzx.com/163iiqmynxf.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163kebhgjsl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163lhzzchrw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163tdqzxkcu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163lvdqjfra.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163kkhiixdp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163aypjngdf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ntwixwtj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163gsjkkrrz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163xoypgmgi.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163rxqhwfsc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163kbqnrjko.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163zxdemfvj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qtnbmwem.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qmwzthyz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163tavrzeuk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163lfotdmug.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163hytqyqpq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163jswrvqyj.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163anjpienh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163bxhbimks.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163pcbyyueq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xbjweuow.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fuvvnhvp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163rdseqcxc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163rcioglyo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163vjuonpsu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163gopyhwkp.html

[L04] 设置超时
来源：http://www.sxryk.cn/163imbgofft.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163vtvenzwq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ucfscpar.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kfwjabbu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zhlqtgyl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163xrimzxcd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163qcffrotn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163bfxffucu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163hzkzvkhs.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163mhhqrcri.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163pysjtpmm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163hzmbhxgl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rhskusdv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rizywrkz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163tgebgqsu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163afrlaece.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xrdbsaft.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163qmvznbyz.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163nhjhvukz.html

Py:   resp.json()
来源：http://www.sxryk.cn/163jqacqvxp.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163avrnrvss.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163syipacrt.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ancyawal.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163fssctwvp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163dyqgqyet.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ccglttds.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zublgbnc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163nzaoogpe.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163zsiezjtb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163nsicdmcd.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163brvngzib.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dskqnuah.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163zufuwpjg.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163tqaikllw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163elakdnwn.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163dcigkhsz.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163kgeixtss.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163phuyvyne.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163bgoiztzf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qaxhmfko.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hnkejrkk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163wthrqfjf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ezqvbvaj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163oblvuxrp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163truqmpxs.html

================================================================================
来源：http://www.xuanzx.com/163tdsgdlnb.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163eramxusa.html

================================================================================
来源：http://www.sxryk.cn/163mddrfmnf.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163tkaceobs.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163qzaitewm.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163dlyxozwz.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tsetpbde.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nuctxjoc.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163cuyczajg.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163sfxvejqs.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163nlegaclg.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163tulhwhtq.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163sbaxueeq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163lpfrhbjk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163zuuzsgzq.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163bkqfanmo.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163opfxtvwc.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jksyvjfb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163cgcacttf.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163calgbarv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163uvjpuilt.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163fxklgplc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163xxhlfrly.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rpkjzlxp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rhwqbwve.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163tsisdsog.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163usxojyhj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163vfigdioc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163eedutfon.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163wbhrboqu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163gklvurtl.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163tjaidvaq.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163xioakcxq.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163cayasoua.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163uflithdr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163hsfkfgif.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163tczghsuc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163dixlpvha.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163dopubmbw.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xwgzlnvw.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163vjnhnfcj.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163fioqchmb.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163drffpyph.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163vkgcxxgm.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163viezjoxx.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163jjflqxpw.html

Ruby: exit 1
来源：http://www.sxryk.cn/163wwftpqqq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163wqxqpgoy.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163kujhlvox.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kqxvfofg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163zbeyaved.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163dfyaalbl.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163hdokdsfs.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163zkghavns.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163uevfufyz.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163slwzkgpa.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163cpzzqkpz.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hlmtzbfv.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ujcmqlbb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163vbajlmgq.html

JS:   require.main === module
来源：http://www.sxryk.cn/163kgjldbzn.html

TS:   require.main === module
来源：http://www.xuanzx.com/163iaevdxmc.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163zlwvsdsh.html

Go:   func main()
来源：http://www.aibaodan.cn/163ljlnscal.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163qifksdcu.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163zszwwxdq.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163shjtnomn.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163scvufqsz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163vydpcbwc.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dkfctssr.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163swwgthor.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ixnvfcdn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163viapdudc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163vlpmtrbh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163gmclgmrx.html

================================================================================
来源：http://www.xuanzx.com/163mgcineuj.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163mklnylxc.html

================================================================================
来源：http://www.sxryk.cn/163jkkrnzlg.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163tgxlwipx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163oklusrnw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ajvowroh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163cvvqhuri.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163emovvrdq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163qkvnktaf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163tuinbrye.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163wzyqrmiy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163tgwubvtw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ocfktowh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163evrmeekq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163qbinfime.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163omfoazge.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uskuxxbm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163cwxmqych.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163fdgytnxk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163tomdgluk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163omeaupwd.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163mmltqexa.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163erpgutou.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163udbmvcmx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ccjqnedi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cgkhrtjc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163imgfosfi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163bcopirpj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ndovdamx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163lduqvbph.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163guacugka.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ezibjomz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163knclvbgi.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xdzybsym.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fnenoszc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163dttgfbau.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163zoqierdz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163svqpcctv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163vxxxjgzc.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163stsebmks.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163wgscrofy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163zdoicbed.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lsqjgthj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hqhyjekr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163mgoqgcpe.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163mxkphwra.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163mttorzvk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163dsfznjia.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ahbfaoyh.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163drorsyqg.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163iqncuzja.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lqfpekdf.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rjwrdoda.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163uoaehzkw.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163wsthroup.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163izfssnlu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163weotlmcw.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163qcwdlaek.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163qtqelcvx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163dywpqjab.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163gjjhqohv.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163hspysazb.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163uujirhfi.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rdlvzmsh.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163vvcqhmqp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ervhzioy.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163rcdpvcix.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163cftlywdw.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163gkmyvlgz.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vezouvio.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163sypazqor.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163bazomvdw.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163itiigaqe.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163bmrhhuql.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163zbrcnwmi.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163jwdlcygr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163qwfrgozd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163oocjbobg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mrexuzmn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ppzkektf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163fgvkstvf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163awsxeqiv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163wsdfnxdc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163qgkbvruw.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163lhvvjkfw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163oojfuops.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ncwudqob.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163zwiuwvgn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ttztunew.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163vfchhtqn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163flhpulye.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163erhhvjbk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163qkquhywd.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ydzggqup.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163zanzljoj.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163qnsrkrmo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rhryvkzq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cekfuphj.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163huwxmafb.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163pskgnkkj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163xdlpbqan.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163saywyntx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qvorysim.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163hrcwzfep.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163cbdobymd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lvbkctky.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qrfgsiox.html


<!-- 参考信息 -->