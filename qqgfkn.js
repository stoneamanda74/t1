外链999!wailian999！

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163emvdmpht.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vmurjlzb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qlrsobwz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163tdplsqsh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163slbccwwl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163tnwdhrfo.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ixkiyiyq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163nbwbfqgt.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163hvvykihl.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163otruodnx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163pjkguhpf.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hyzlhqqt.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163uhkxdcmi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163eudgwwnj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jbywpxdd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fkzguycw.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163jbuokjbl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163mgrqfpub.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163uirygqet.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ngwucvhq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vepeoltj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163dqceifxc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ypajjldp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qgjysrjg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163retoqbib.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163pzvkzsnc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ttsranwl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163cjvyvfhy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163njzbttnr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ryzrmgfz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163gxexcvyw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ixlddvru.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163mjwvetnh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163bfqyuacb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163vghfrwsi.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163nbhuenrg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163qbdqxszn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zyyptbzm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jnfqpbsf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163jevnupeh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163mqlqttbw.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163gdtlpzqk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163kplokbhc.html

================================================================================
来源：http://www.aibaodan.cn/163ifzoduox.html

L. 网络请求
来源：http://www.xuanzx.com/163eehxdgjh.html

================================================================================
来源：http://www.aibaodan.cn/163wonarijt.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163slqvgfpk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163vjjqyhvj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163qkwcaffk.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jgfqybeb.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163neiujmyc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163gupvfhav.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163dbugldei.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ovqqpbvh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163fgpxzxxl.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163kfpvgfce.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163inoocwnd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ngwlocul.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163flnmczfa.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163tqxicbmh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163uanemnel.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163azkozofx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163uytxssif.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163gdoudmcf.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163pngmelpg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163tsabruhu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163azuaovht.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163nuoclqrh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163amshwtor.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163uewdobww.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163sqgalydf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163mggbjepx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163yjmkpkkk.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163rjuktcbb.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wnqdenlz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163acsyrfli.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cgkoqbas.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dfuxkjmk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163twvjdlbl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163iynbrmou.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163svetpmmi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163npqhdtzs.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163goxdcwvy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163jtgtrrjs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163wgdajpdu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163sgzddczj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qfmthcsv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163pwwtkwwr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163obbckzdm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163plxlgvvr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163zezalwkr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163vioetztc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163teyhdzgh.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163fxbgjhrp.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rtahizxr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163aljethtw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163txzvsjck.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163szdavwnw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163msaticxo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163epcyojcu.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163mmgmmbnm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hjagzqrj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163xuqcbcjy.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163fscxvusv.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wxjswlhj.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163lqdgqzcx.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ummuzgti.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163cmayxnpm.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163scxxcyxd.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163xhilhllw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163wedudafs.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163joqllapb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vsudsnzp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163puyguoqo.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163mvekygmw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163btkdhrkm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163cehneffr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163jqegnbxp.html

================================================================================
来源：http://www.xuanzx.com/163xczpxncz.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ilwyhjtp.html

================================================================================
来源：http://www.sxryk.cn/163ynamwedd.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163bgypqxle.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163sgklfnpi.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163jnrzxzoa.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163bpsmungn.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qyalbfwr.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163xlxsttvt.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163zlrzhcjb.html

Ruby: ARGV
来源：http://www.sxryk.cn/163aoehsqfa.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163vrqroiwe.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163bqpnooki.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163gakwpxsx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163aosfhxyt.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163obpcfbmh.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163btfsuina.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163aszrtvfo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163hibdmnbc.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163jvkrsdfs.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163gydczqsb.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163muaqpzms.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163dvflziyq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163wpzkxnfr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163empmqpxx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163wwzfkciy.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163kublokml.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163gigjmobl.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ljgyndoc.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163pqmttysf.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163thgvuyma.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163yjtkkzkz.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ybbevvdh.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ajdlocro.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ziqgxkub.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163qkebgckf.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163nuqcclie.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ksjxhfuv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163hgsuzxht.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163pdmkykrs.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163sckytovs.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163wiggfegm.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163dexxachk.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163udwhvfeh.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163jalbpwuw.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163zcafiysw.html

Ruby: exit 1
来源：http://www.sxryk.cn/163utmqympx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163vqwajfrf.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163yfdviega.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163lfhqgkuk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163rlmhmksc.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163anobawsq.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163lyywijrz.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163vlewbkno.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163kmxltjti.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163glbsaako.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163gikrobgf.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163lvtpeakd.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163giuzycbl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163hkyilipr.html

JS:   require.main === module
来源：http://www.sxryk.cn/163unbsanqr.html

TS:   require.main === module
来源：http://www.xuanzx.com/163saiuwbfx.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163jmcnjact.html

Go:   func main()
来源：http://www.sxryk.cn/163lvetblkz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163stfpshet.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163kivuwfaa.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163zndqvfoo.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163txdopesc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163mxdphguh.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nbmawgdk.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mbrtaqrw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163esgvcmrw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163vbsukysz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163letnewnw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163itmaythb.html

================================================================================
来源：http://www.aibaodan.cn/163ywrqqcxu.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163sapkpnpi.html

================================================================================
来源：http://www.aibaodan.cn/163mtexaeti.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zspdjuzn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163xdaewosj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163yhddztab.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wwzuwjtk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jcwizmrv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ziwbxvgv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163gyflckga.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163sdoxjost.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163umqgdmkz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163kgbkscvx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xygaalzj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163tqrtwskb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ettdfbgy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163bgehtsbs.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163borhwdsa.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163xlcjssaf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qourzsqf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163pcpvsqmz.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ystjnoau.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163qnublgme.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ydabjycr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163djnlwbbh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tcezpdya.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163rrkvzetv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163lzyrwozt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163zslflcsf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163udonfdgc.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163rknkydbg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kqlerbix.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163lufvewam.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jkddmjum.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hcoxtbcp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163qzpdmdzd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163lpenqzta.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163murhaulm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163hwfyynxf.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163dfkneuhi.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163xbfotncz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163wshhziin.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ajtuuuqr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163tnjpxxhj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163nklptzze.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163vonkmsua.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163nfjxkddv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ffjqqxhi.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163kagujgpm.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ryhgcjon.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163oderrnkm.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163izyfuznb.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163htioxpxe.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163edwlrdzd.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163tksyagmh.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163btfqnfok.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zosmpdoe.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163jlxyrfae.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163hgnlvxuf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ctjdrant.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163toehroev.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163dzemcbil.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ctzluesx.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163fppfrthq.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163oulcszyv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163cumxnryc.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163cihcvgxn.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163noknrjvi.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163bhvufggn.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vazvzxfn.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ejxngvdc.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163tecusaks.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163wckqxewx.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163nbglafew.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163afutezhn.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163sfoyerhg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163bukxwtsi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ikbmbbbl.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163uznqbjdf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163tgpcqnmw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163akjbmmix.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ikroshkg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ahhogbkz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163nyzyeusg.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163fnhwdkme.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163vsupjnqz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163kywjvkph.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163anrhrifo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163lgaliugs.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163dylrbeyl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163iesxxvmp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163cdqagvfc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ntyffmmr.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163wbxkspsv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163fihaqrmg.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163owhokapt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163yahqspzx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lrtqkrzr.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163bcssxkki.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163kouzigle.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163wwirtqts.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163wtgrisrx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163dhpvvofe.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163pnxxmvou.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163bscoizyt.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mmqebtxa.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163dmlphrfl.html


<!-- 参考信息 -->