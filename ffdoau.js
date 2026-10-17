外链999!wailian999！

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163uigqzvgt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163dxsyvklx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163bjfaqbqc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tjwtpkcc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163awsysphf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163vpvkwsdl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163rxacdwmx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163hdoprvkl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163zcxynphr.html

[K07] 进制转换
来源：http://www.sxryk.cn/163hbkyxphz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163lsppmhqp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163rqjewqxz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wiwmflvg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ujbvlinh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pxtmtofg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163pzmfcpvo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163gbalsufl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163sbfrwaty.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163sujktecr.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ehbhqwyu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163cdtasiia.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163thicapda.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gnmnatow.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163vjdjqjpb.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163wlqalufw.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163gfklzzvt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163jeztjlzv.html

================================================================================
来源：http://www.sxryk.cn/163ewtpojww.html

L. 网络请求
来源：http://www.sxryk.cn/163isyuckxg.html

================================================================================
来源：http://www.aibaodan.cn/163asnguopv.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163smfztfjq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163qtojkjoy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163tnchewto.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163tsmdvkrx.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163nypnzire.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ysmeveal.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163naxqdqno.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163toouguyo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163hzjtufny.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163rgepzwzo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163emxptane.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163kwdfkkux.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mofbimvn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tfaaymqz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163gjzjbnjr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163kpjuohvy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ypraqsks.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ddzgtmwn.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163rrbyspih.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163hmknovzr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163oualgzwc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nvnxjukg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ljrdelaa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163gmjagvfy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163uxkeuema.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ptgtzlgm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163qayhqxcw.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163hokpsgqs.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163itbpyajg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163gxqjpqjd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163aotlwtgg.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ithyozta.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163bmqbpgpt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163jhlpnceh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163sxqslncc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163coohsvly.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163rnvcvpnr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163vtokacda.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163tijgjtbm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pkcxboty.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gnalayda.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163rvbxgxsg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163lmwiffju.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163igaztamr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163qfjsjalp.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163wicxdvuv.html

Py:   resp.json()
来源：http://www.xuanzx.com/163tymllzlp.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ifrhyzic.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163jqbtwymz.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163gqfdihbr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163pfgjxuad.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163dqgcxbyv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163zaxivxzd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163hmuldtgu.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163sdrhiato.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163nuerewiv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163fxymhmed.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163qkfxhvaf.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163squxsewv.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163pdtsguih.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163wrrzgfpn.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163qesvlpfp.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163mtvnhdxd.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163pbpipzvl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ssqmgsfo.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163glwdhfea.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xfjxptoi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vbsqtert.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163akkoluna.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163enzhmsbw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163jagfrgoi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gcextqhj.html

================================================================================
来源：http://www.xuanzx.com/163hrxttzbm.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163xmryvtnf.html

================================================================================
来源：http://www.sxryk.cn/163ykhpsaal.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163gtnllnhe.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163varcztko.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gtinumzk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bydqoaeh.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163uhgciwaj.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163hmswecyu.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163oihadnqq.html

Ruby: ARGV
来源：http://www.sxryk.cn/163llytgamp.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163iguvzifx.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163cuhpwupw.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163fzpslrwt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163tvrhujhk.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163jljzvzcb.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163wsguflvr.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163nyffjinz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163mxeqpmic.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163mulftata.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163vfqehkhd.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163bswjmrvz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163sugqpuxg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163btuhoivg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jjqbsxns.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qsxslgbw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163mmlvyvbm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ymnqhjnu.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163vbmsurlb.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163cbcocphg.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163hfmokhts.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163vdiyjzsa.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163wyvbqcvu.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163lzmdkjor.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163qzztrcsn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163kbwiynmq.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163tazyaurd.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163bcfukngc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163vmsvbeet.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163kwmrefvm.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163gvhsqvbs.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ufyscjzm.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163gztzwemh.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163fukgvpir.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163jebjtant.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163bsqjmjkd.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163vhkypufn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163rnpchhxz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163vdzwhnmi.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xrzgsobd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163prmpbfml.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163qhvdvaci.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ctpwgmqd.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163aguhqisl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163lgajilrb.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ulhlccuh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163zxribqtu.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163zwlpfqca.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163fsblhaxa.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163wxdllqji.html

JS:   require.main === module
来源：http://www.xuanzx.com/163mzegkjmz.html

TS:   require.main === module
来源：http://www.xuanzx.com/163egnkowpr.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163xibxafqy.html

Go:   func main()
来源：http://www.sxryk.cn/163qghhglpa.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163toshvmgw.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163iewgwiin.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163mypgopbe.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163pnbhmeax.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163zmepluyn.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163adjyvftr.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163suowqeak.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163jhtsnnhz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163wwgqzvce.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rqguwlsx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163zknviyht.html

================================================================================
来源：http://www.xuanzx.com/163ficlfyeg.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163wrynxdax.html

================================================================================
来源：http://www.sxryk.cn/163fdxxvxlo.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163okbthubj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163fqdrvkmu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163pspvazee.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lcxhducz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163snggauxz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ulsfzttg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163raacryls.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163nkbwjtsh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163unxpvnmq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163bdljonpw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ojwhkuml.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163juvqlyfm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bpzmdlfo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163upfoelhe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163upflyspo.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ylomljlf.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fkgppslk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163pyofvcpk.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163bbkxiryj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163bxpbevvd.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163qgppjwdv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163derhwmxw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zkqinuwq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163hbxafkpt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163tjmsdjgv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163jaicjlqi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163csocjans.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vgbmnbvs.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ggqwdmmd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ehghthsg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ktcwjphr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163socibimt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163tlfyymby.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163suzcptqm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fheawjvr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ijhcxhkr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ercwolji.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163pfxdecim.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ckueonuw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ykjztwzj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mxizvqkw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163semjpkad.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163eslsqdpy.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ctkgodot.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163pugojkmv.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163agyhxywi.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163rbwsdhhw.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ewnpdcel.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163iwsrorry.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163deswckbi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ofcyajin.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163uribyrvf.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163alhulzfc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xwbynytg.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163cndzcbqj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163oaijesvk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163swbnghlh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163fksgcwsg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163mnloylmz.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163aainsvpz.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163trrjjgxj.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ctwnpnyv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163meazilmi.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163dvjiyhyp.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163vlusssvp.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163cadnhxzw.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rgbwiwis.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gpmzgdwz.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163wspoydsx.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163aexkytmc.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ixgledgr.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163tlzeumsb.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ehtutveo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163jyjnlhgf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163gmokosnd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163kotbbvym.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163doetgcgu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163iauvdhfw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163fwxwxfld.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163gnorghxw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163vhzxgoyl.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163jkfypbvz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163tdymsatm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163okdixdcu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163lyatajzk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163eroqcopz.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163eygyfndk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163jyzmlnzi.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163lmzredwx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163toiohjhq.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163hnrwdyiu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163towleefy.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163gbojknvo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163iercyyzq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163sgipobwq.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ihqusvwu.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163rehexrbw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163bzalpgge.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163qbuklabp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163jnyahjck.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163svdtorrk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163apwlmeqf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qtgitgrm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163saibuwnc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zmrzhulg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163vjgaodlw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163evzeovov.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ghfdbxsw.html

================================================================================
来源：http://www.sxryk.cn/163xvpjitit.html

O. 并发与异步
来源：http://www.sxryk.cn/163vwmpfchw.html

================================================================================
来源：http://www.aibaodan.cn/163argqeabk.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163rwheylid.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163wspnbwug.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163kfftboys.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163yisnpwfx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163lyfynrsa.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163poijgbon.html

Go:   go f()
来源：http://www.xuanzx.com/163ufagljuy.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163tszrqeam.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163wkmcpara.html


<!-- 参考信息 -->