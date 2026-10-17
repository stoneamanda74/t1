外链999!wailian999！

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163xfxksral.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cdppajyf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163krzxvbpx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163biecqgby.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163cxriaphw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163zxnwvhwj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163wcdezjyf.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163jlsrtogl.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163puguplcq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163agqsxazt.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rmkbrhtu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163igqditea.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163akmaojhf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163azbwedns.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163vpfhjodn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163glbgqypo.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163spxleqyh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163uuinuqbx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163mlemrecg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163hkvcoeeu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vodpvspc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163qmcgihdj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163boyibcqs.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163vujbfhwz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163xvdplomh.html

[K07] 进制转换
来源：http://www.xuanzx.com/163uffzuybt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163razsvmfo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163qdfgobuq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163uucayehr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163izzweued.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163tymbfneh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163nxusoxvs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163exvqopib.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163fgcptvoq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163rxudojko.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163hlqrlzhg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163dwamihjt.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zhvjupcf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163leewtgmw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163msnsmvgj.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bvyiolpb.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163fzrjtoip.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163efhslipb.html

================================================================================
来源：http://www.aibaodan.cn/163jnpzfvod.html

L. 网络请求
来源：http://www.aibaodan.cn/163jaubeeyx.html

================================================================================
来源：http://www.aibaodan.cn/163idojmajr.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163wrmizfbd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163wcpiiphf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163uuooeezr.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163gkcszhzw.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163dmrqsyaw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163jtjmbfpr.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163rcjngben.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163lpqjiloj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163gmhiywcj.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163avgfzbhz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163znkoqbzs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fptncilg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163phgyynbm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163krnulhwn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163lrnpifon.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163khwdcxya.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163snbarlfc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qvzfwsil.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163gnbmanjo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ryonnxct.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163qkkrrqgn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163oeoflfeu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163atfnhcuy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163sgrajoow.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163jnkdhkzq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163fbrvnotf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163hadcthsa.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163twyqtfib.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163wfrtjlni.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163gqphrlfn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wlmgmcsm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163alvfuyrb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ptrhgdmh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jqrzuzgo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163uxtkuhuy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163zlhqmnlp.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163qshnjgci.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163kjdkpgkk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bxhomwao.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lbgzkbmz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163chcfxshk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163vtgswoga.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163jbplvrwq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163mnfbpquo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163henypxyw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163svmbktez.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163xgvyymtl.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163vbadnspb.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163iambozrq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163abzfftaw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163qycikqis.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163fspjfalm.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163oglougdi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163hwsqmsdq.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163gdnltkxn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163bypdajyj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163zbafjyfx.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163opuluwmu.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ekneapsr.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163laffatcg.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ffxeqxwp.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163seivkckm.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163qtdvnrsl.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ssdgqxxl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163bsbgbtcn.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163zcmoelel.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mmzdyjvy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163iytciqfp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163unfcwavj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163bhxqaapr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163vivgtcuu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163igywjkqb.html

================================================================================
来源：http://www.sxryk.cn/163rbcgvqpy.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jyspmmiu.html

================================================================================
来源：http://www.xuanzx.com/163dzbhyfpg.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163filzydso.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163kgwwbvid.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163cdotmcpq.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gdtsauqo.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163khbvcpjc.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163mqswfmfi.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163gtmwjxmn.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vbefzskz.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163aetivmyn.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163xdhurogl.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163goecavwh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163hcpuwcfn.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163qgpwmhae.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163iicrcyqi.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163jeaosvsx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163zdpapsbo.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163xhrkozux.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163gqownstt.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163afmjkijv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163aomhtmbs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ywzbfjbc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qhhyajqp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lrvstcrk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163cvhqsrjp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163gqnfwytm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163pttpfcki.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163pefautsf.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163bjbatxxh.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163igcrsmjd.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163zejkhigg.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163hwrppere.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163nhptwrrg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163dqtcurkm.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163bivaacwd.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163mojbfaky.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163vitdwfxs.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163cimmjqas.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163wdgoxwab.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163fxhvhcgm.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163uxndgktl.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163wxzduxye.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163wdodgndc.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163bbomcwtg.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163oqfzkmti.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163enbslfle.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qwabpeyn.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163zzpxscfa.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163yibimlqj.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163flcluoef.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163lgklwxjx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163dzigitxo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163qwitybcj.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163jqmnjktp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163cwzprasf.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163qgtasqnn.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163fzonslqd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163riyhliio.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163llzkzmdb.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163uqofkqbg.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163jgbiubav.html

Go:   func main()
来源：http://www.xuanzx.com/163djjunmpz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163bjiktowg.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163mqftmxqu.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163dlbehapa.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163dovahlcj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163yyvsbvur.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163yturqwlx.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gfnpldes.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163wbruwvvo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163wtiejhpo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163epzsoxkx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163zfakufwl.html

================================================================================
来源：http://www.sxryk.cn/163abjjxree.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163lqgvdnoo.html

================================================================================
来源：http://www.xuanzx.com/163qzxmzdnh.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163gzpbeuyl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163dhqmhhsu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163eakgwdcr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bdvsqrpp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163tvpcugqi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ckbkntxn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163qprkxgsz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163injltnpo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163wafurlon.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163qgxopeki.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163idkzzojk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163kgdpopsg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hqxifjhi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qfrafkfu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163mordaxyu.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163rhdzdvbh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163uepewcct.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163dwcmlhdz.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163kjhqzoqu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163eoklkwwk.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163kxwcykcx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pckxuuaw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pnaywyjz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163sljttuim.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163aeoevexu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163afeamrwa.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163czomxeqh.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163cybbhcps.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ihbiprfe.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ydkhpsiw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163treccqhm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163noqckwqz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163jxrezrjy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163kuihahih.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jukfsfwc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163weccdmfd.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ppicqlav.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163qfujvvkh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163yxqrweth.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163sisvvafc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ptwwbmih.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163llhdlhbc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163dnodrvqn.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163blzamdxl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163wekixddg.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163htvuzkxy.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163evstssse.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163svfcqbvy.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qvmvyckt.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ewyriksf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163zpwaripq.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163erxajxcy.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163jddyymqi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ezwarndj.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163dnokvrpg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163nxsvgdbg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163klwmdgwu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163crwprtec.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qcgevxbd.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163unlgltvs.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163lkcmbdcp.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163appkmwlo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163qmrvnugq.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163mlrnkuux.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163bytguoiq.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163ufpqency.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jejqiwpk.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fatkmwpi.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163vszurxju.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163pgknfetp.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163kzyjpbfq.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163yzidzbej.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163qnpwkmkf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163qkmydazy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163qmwjdjxk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163zbqogfae.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163fmtsdyzx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163howlyiqy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163drfaetcn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163tlxnkduq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163wurdyejp.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163kedagfks.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ycerfoba.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163urvunuey.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163vhwakakv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163aeqqhbxy.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163arumujpa.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163vhvmmzyg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163mnaczmne.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163jpalcvtk.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163nbchiptf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163czjfjhfv.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163qsswvcno.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ombnwnng.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163cgpebuqi.html

Java: // 手写递归
来源：http://www.xuanzx.com/163bntdgoun.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163noieiqdd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163bxntisia.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163jycxkwvy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ahucdfhe.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163uvzpfrxx.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163eeccdzgw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163pfrwesar.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lrnjsqqu.html


<!-- 参考信息 -->