外链999!wailian999！

Go:   encoding/gob
来源：http://www.aibaodan.cn/163rtlgispb.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163lcljufjf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163cqkgieec.html

================================================================================
来源：http://www.sxryk.cn/163mnwvebhe.html

L. 网络请求
来源：http://www.aibaodan.cn/163hucrjeuy.html

================================================================================
来源：http://www.xuanzx.com/163alzsldid.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163wucpowrv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163bjvtphyh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163dtvtrwnl.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163cznbxexf.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163sybsjxge.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163swdgibjh.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hqsswlvy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jjlhthfl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163yjnzmpiy.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163hxkefnbc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163tdyvudfi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163pbkfjyuv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kohuhpuz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163yvxcnuxc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163blklbfdo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163hkzaxyfk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163sofxygmx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163jirmddgr.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qkufsjlf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163qlkmmigl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163hbojyame.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163yoqgzthi.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163sjagzerv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163dglcrzfg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163muqxsowj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163lrikajfs.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163nwpncpnp.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163jtkzkyoa.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163aoqbeiph.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163cfxjqlcg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xhbiymcc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lgghwlvw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ipxgxsom.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163keonqqob.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163sznpemhz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163mrbwjulz.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163tnpbfilo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163suvlmmfg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163dsqejbji.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kqtxcgxb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163nlmvvgts.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163bzqnvgvp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163lponqrok.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163vsjbrpfx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jvnikaqo.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163rfmoljws.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163sloygwak.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163mhohvwdd.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163qktfplvl.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163xxxioslg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163qhjierfu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163kqfuhixh.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163uehcpayy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163eqneqewu.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163bvvfpudi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163jgxcogkj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163njjxdrxv.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163becjscte.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xpshyatl.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163sjfxjvfi.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163krrkncjf.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163cinbhpls.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163nvqxssvv.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163uieyzqml.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163skdybqlt.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163reecwcys.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hhaysovx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ciaqxrvg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163rotbcdzz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163jnjkarip.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163gkmlqatl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163vrobyrbv.html

================================================================================
来源：http://www.xuanzx.com/163qzaupqhx.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163csaperhr.html

================================================================================
来源：http://www.xuanzx.com/163fwinuhae.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163gnhwnrqb.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163krsbmlqf.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163bpquluui.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bnmlahww.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gvugttyj.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163qhursmly.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163wovyzhdk.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163jcujvaje.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163uplblbzk.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163aeudkoeo.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163cevtlrzb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163guhyqada.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163zlyqgbjb.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gscyocxs.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ruuzjgza.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163gfemkqnj.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163sjcdkoar.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163bhafhkrf.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163xmdrgaln.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jvvrnxwp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163fixbogav.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ehzunpul.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163aspfmlou.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163cqnsflyo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163xtdtards.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163xrnjfval.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163tmnfucmg.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163pvkozbss.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163evynuemp.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163flpkmyxp.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163bhtcjupt.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163lktrichg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163gjpqkgtf.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163faqkkjwf.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163eymvcytx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163xjesnbfd.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163kirsaaeq.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ogoflpct.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163agxazsmd.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163shlrlaco.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163bdtvbvim.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163vxreqsmz.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ylyrbheu.html

Ruby: exit 1
来源：http://www.xuanzx.com/163kqbnqprb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163jepxozor.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163yieuptld.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mrmvhiel.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163vnzgyinb.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163wvuesgca.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163qpmgdxqo.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163kjpbvmwj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163xaejajis.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163rtjwypdv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ueowpwgc.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163rmodemje.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163lsrdlica.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163tqpoecmt.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163wndwyzfo.html

TS:   require.main === module
来源：http://www.xuanzx.com/163diefvjbi.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163qjjyrfdb.html

Go:   func main()
来源：http://www.sxryk.cn/163spyfjcwq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163tnomxflv.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163vjkewyus.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163vemdjkqa.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ljvzlpin.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163zkespvie.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163rkciegdf.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xryvzuqm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163rqprocif.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163upeixzed.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163nsecukwh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163nabtsvkf.html

================================================================================
来源：http://www.sxryk.cn/163cyvdtoxq.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163lncfnnpk.html

================================================================================
来源：http://www.sxryk.cn/163zyxvsifz.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163sojbyitm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163uisrvrhr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163pfxqcfia.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ssdiyzdt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zpuscmyx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163pdrshxko.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163rvknbani.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163blwnfnvv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ozylfnde.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ffrufcxm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163uniixzvs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163jcganmio.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gwvredez.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ubanrwqv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163tphbokau.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163wjacxbwl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hrladmxz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163fnkhqbct.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163zixbnils.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163pkoujbon.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xujyxxvj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163brjzypfy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163blqvcbsw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163czkaizar.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163feodnxkc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163sohallbn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163yptyqlfv.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ocwxvqac.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zhhswtfv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ftmljqjd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gjwdjzcn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xztzdxfn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163vfxgwlgg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163rtxltszv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163atfoeeqf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163nyoztehg.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qdnzinic.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163qluyxbrc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163gceqvzbj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pbegqekt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163fqsywfyt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163fszoqtzz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163lovsekby.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163xpuqovpr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163fymemrfv.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163prmgwoic.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163fdtxollw.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163fvdudqjf.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jxxqjdrx.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xmgikyki.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163pttcmfvw.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163lrfsqdyp.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ntwncpvc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163yceaaimp.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163pictucst.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ygrgtcvp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163auzmkupd.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163bzeizajc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ncdrzeff.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163acbfwonp.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163uzkdruww.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163vgmcpvew.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163oprhyutw.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163fiolztkf.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163zdbrcmxp.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163vikkpbkj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ftwtvbiw.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mwqpykhq.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163vuddpcke.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163tiblccnh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163llmqdwjc.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163kubqvkfs.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163awedvaqo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163kqxprmgv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163qannukyc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163bthpfyoj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163tqegklzx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kskpsfpp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163fpnyujqx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ngyctlut.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163nxtmrcsi.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163syodqcid.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163yfxbzvuc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163hlllmune.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163jhebhrty.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163madrbgxp.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163zjsfjzdl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163fekttqml.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163vyokanix.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ntfxvquw.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163abxwrroc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163gshovxrr.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163dklkwlmc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kcfalqqj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ltygdxpn.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ubezjifl.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ixkukylr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163zmypdltq.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163rlzhcfdw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ichzdrro.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163lpgtcpeq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163hqglrlqx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zzjbkjom.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hodzxtvz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zpfbsjnz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163dmtyombp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163bobnizvn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163murgtidv.html

================================================================================
来源：http://www.sxryk.cn/163ydlaxxcr.html

O. 并发与异步
来源：http://www.aibaodan.cn/163pxgqgyzr.html

================================================================================
来源：http://www.sxryk.cn/163ndyynqrj.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163yzhkblds.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163qbqzidji.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163pmhzdnek.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163elgnsssj.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163lenwgpsj.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163edfknzym.html

Go:   go f()
来源：http://www.aibaodan.cn/163olkkgqlv.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163mjrbhpbk.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163wnunubof.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163bzlrssiw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163guwdgdxp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163dgdarhmw.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163yoqlzjgw.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ulmmzbze.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163gpzmmryf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163qhqtftpm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163wmhwvwbh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163unhnalzm.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163etgclwat.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163vkqpzepb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163fhkpvviw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163edmydubg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fqeyiskd.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ibttzwda.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163vrzdamlg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wpxqaemq.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163dyrpfqtk.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163vvwdvpbb.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163vqkgtttn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ganpmzek.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ahgtmtib.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ghzqvtjp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163psexmbno.html


<!-- 参考信息 -->