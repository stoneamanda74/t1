外链999!wailian999！

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163vvpzfcpl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163babqbtqg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163oxoyyqkl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163byibjecw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163uzlwsavm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163spezpdtn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163rksdklsx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163oewdghdh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163bqprlqtw.html

[K07] 进制转换
来源：http://www.xuanzx.com/163hcqiowph.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163zhgahish.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163dygjutvd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mwzrffzp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163kgnbphuc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163jxshlgay.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163tytlkucj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vtqsawiw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163hpwhyqkt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163cxoixbds.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ixnrgxvp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163edpeporl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163grsqvjyv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zgaoyvxn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ahhsticp.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163qbierpqm.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163tagsowcs.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bhvhsihl.html

================================================================================
来源：http://www.xuanzx.com/163xknnzvrp.html

L. 网络请求
来源：http://www.sxryk.cn/163tvqjizkr.html

================================================================================
来源：http://www.sxryk.cn/163ztasqzoi.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163qpmtqkaa.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163tlbrkflj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ghcjezdc.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163dhbnafza.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163vodjjlwi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163xznbdzxz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163rhukvyfn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163hykqkzer.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ljxlokfw.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163cwxzlxrg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163uaxfiqsy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163slrfqpsz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163arszcsxx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163exrhnbzt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163amprowip.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163amrqleub.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163dpmihncn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ctoyhsiu.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163otcvviqh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ckdulgcc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163myntdydn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163tlwsybml.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ububdibu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163pakhzmgh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163trhpxqcg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163volmtmyl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163djhtuadw.html

[L04] 设置超时
来源：http://www.sxryk.cn/163lgpatktv.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163luiuypnl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163bnpocdai.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hgbvuurx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163yngzmmge.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163eodeltvy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ozmfhhqp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163vkmtvzme.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163gfwfspor.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163egvihfld.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163aijwbaej.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163hwsloggw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163binrjpeh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mujmxrzm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163thghljin.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163csdkzepp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163lfzpbvog.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163uqjxltcs.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163mrkkypgc.html

Py:   resp.json()
来源：http://www.xuanzx.com/163cvpieoij.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163mziexvmr.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163zvkmgbej.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163bejqbggc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163oxtkslex.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163bpsvegvs.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163wcccexmu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ibiehgnr.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163yfclsfdz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163woxzuxcf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163cnfmrvlv.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jcswpkjk.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163guojdkjx.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vfikkykp.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163orwabmdv.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163cskkjkzz.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ejszkcbw.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163cafxioug.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163oodmlcsl.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163lrcfvrkg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163memtgtsi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ytjqgozn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163xnangndv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163pcnucnwv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163yocptyac.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163muaroyxl.html

================================================================================
来源：http://www.xuanzx.com/163wwjyteen.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ljtkukur.html

================================================================================
来源：http://www.sxryk.cn/163tiaihhgh.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163dgcntwzs.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163icgyoscc.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kdzqtjxd.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163shazaeja.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bzzxkfqt.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163yaqasngc.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163caggtnmj.html

Ruby: ARGV
来源：http://www.sxryk.cn/163puepgepc.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163vkngrrsv.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163uerkobxy.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163iktevfeh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163nwvbutwm.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163vpotccsy.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163rxvjefmx.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163xgzqrtti.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ghgfzkyq.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ofulwgzk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163rukmqkmi.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163qsfpeybs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ttttdbgs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163aeseheje.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ypogtclp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qnbxkwfi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163plyqcfqn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gjztynkk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163kshrkufr.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163sixfiogt.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163zygcimmg.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163rqimokkx.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163qjilwlbz.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163bbkaivqv.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163pibwquks.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163mejdtkqi.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163hsebqglu.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163hfplvglf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wxeoceem.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163vnlwnswu.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163cbypnyvk.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163xxcyyiou.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163lgnktnkd.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163hddlgqdh.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163zrweshxa.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163jypiamtf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163oeyxccsi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qetwiwir.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163usitiawt.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ojitgxzu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163crqqiasb.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163kbukbmzk.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163dvouboxp.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163reblkwtw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163yoswoguf.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163bhqhupbh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163abervfaq.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163sjjoxczf.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163aaqidsps.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ryxrstcy.html

JS:   require.main === module
来源：http://www.xuanzx.com/163gmmkcoql.html

TS:   require.main === module
来源：http://www.xuanzx.com/163qohnurqw.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163vnrtvhrj.html

Go:   func main()
来源：http://www.aibaodan.cn/163xxiqpmnr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163tngqiwcc.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163wkdikmwx.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163rriyoius.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163gbxsbaxq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163rzbghmnl.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163gogexjth.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pgmkmmdb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163gzbycslm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163hmfhqujy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163twupdfbf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163wuoziizv.html

================================================================================
来源：http://www.sxryk.cn/163dngvmioz.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163yjpokiiv.html

================================================================================
来源：http://www.sxryk.cn/163fsoqiyfs.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163fwquyalz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163yjaukdkk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163zkfoinui.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xwywtoyc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163fhcutpai.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163taqlgixy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163kyjspjax.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163prswnxdd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163cvjvrwzv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163qaobfvsv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rqetceks.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163nqsqyblx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163uygexfdn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bwpntclx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163grpfgmun.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163zamsnmfj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163dlfbquak.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163tvhbpbnc.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163rzhusucu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163cgttoppz.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163dcwtqrav.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163icimyiie.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163djdxbwda.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ctpxsrxk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163lrgibwit.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163pjpgcfve.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ciigvvnj.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ksxfeqnd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163arqxyzds.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ysburjwc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lhckyefe.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163rwfwrhgy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163bnpwuhnk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163sduwjwts.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xzvrkxcs.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163canpbytn.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163dbmarcur.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163mnoamvgb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163gqzgalrv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ldqkhwwl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bhqckdom.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163srxwzsxa.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163yqwbhjnp.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163wqefgppt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163capfvsvt.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163uaeexelx.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163eihnvzom.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ivskyhuq.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dfgfunkc.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mjomfowm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163pmekccdq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163gzrwjyap.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163kcarnbyn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163oibwmdwm.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163bfvzqpaz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ujgxiqgj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ofkdeaoj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163plqszuzg.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163nintsjax.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163wmqhwhsd.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163arpcrdnq.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163lnuqghsk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163wtcszjhg.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ujctntjb.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163zskfmrpd.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163uijnijsw.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qbbdlqut.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lbsbnlsa.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163dpolrxpq.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xzlnyrxy.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163vqqvwrbl.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vwsdkiov.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163vrhdvklz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163xqzkilbc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163kpfkqjyy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163vwdtfyjl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163qpwvamow.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163xplbzqxh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163xfibqboq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163vudluajn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163hjdkadel.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163gvfdquhr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163vtlctrpb.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ajssreeh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xnrnprqf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163aydfzryh.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163cxnpfzkc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163cvggjctt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163vdhyyekl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163vzobjpop.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163cknpyasa.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mxpqcdxs.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163aswlevwd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163flztaxjg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163yyrrhwvi.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163azluymgp.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163xgnngvcl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163dpsdpjjn.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163dhpyimrj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163frnflnyt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163iicqozvc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163pqplaeem.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lqknmycj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vxltpfvb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163thsbwddv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163tswprgfp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163cxzrvjkd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qjqrkzep.html

================================================================================
来源：http://www.xuanzx.com/163ecsidkef.html

O. 并发与异步
来源：http://www.aibaodan.cn/163egitwjmr.html

================================================================================
来源：http://www.sxryk.cn/163cufpaaqj.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163lghrsphn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163rmjmgvtd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ickjlqch.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163tsampqrj.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uowmrorw.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163itirhwir.html

Go:   go f()
来源：http://www.xuanzx.com/163opdxlyry.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163kzmrwfhc.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163blquzsxp.html


<!-- 参考信息 -->