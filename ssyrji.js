外链999!wailian999！

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163lknjqjoa.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163knqtcvlv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ivmlfpem.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163lpkkcilq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163jbzygoke.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zktwloax.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163sihzmkno.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163wvnpaoxy.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163bqghrpei.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163gtbbiksv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163hwriysdp.html

================================================================================
来源：http://www.xuanzx.com/163xibpvanz.html

L. 网络请求
来源：http://www.aibaodan.cn/163ubudkwke.html

================================================================================
来源：http://www.aibaodan.cn/163dxscaryv.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ekpyisgl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163axdgurct.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163jxzkcqhm.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163oyaajswq.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ueoqlknz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163sfddltbg.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163penwtpsx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163erlesnon.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163wkfjluew.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163sicfalds.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163xbcwcyzn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163qdxirmon.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pvfhcyjh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163lmrxijvl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163sfvcyfgc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xhyrdeui.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163yfknxmmp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163dfclakob.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163mdlxhfac.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163xaduncac.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163yfdlabpv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vlrdqzta.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ewqqjgvj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163eaiuhlnf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163pjrcuvik.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163duovgvgl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163wotwprnn.html

[L04] 设置超时
来源：http://www.xuanzx.com/163allyfejb.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ywbrkpor.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163nfqjhndj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hqkmfoah.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nbfvtiko.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163fixpbpyc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163zytlpzxk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163poohsqec.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163panbunis.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163adbqvcak.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163crnvgevi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163aukjfsdu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163sigwsbtt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163bqhxnxeq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163eonexqse.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ihxzjwxx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xuovplwo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163bknvuqpn.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163psvitefx.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hlodkhbd.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163iqhglwpr.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ltakdcea.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163rzbpdvnf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ovdwdwbs.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hcniizwp.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ljtrdjcz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163idcidxsm.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163feuumzyt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ckgpnygs.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xoyiujwv.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163tvdjewfx.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jjlcefeh.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163pazjlcnf.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163rdxqufjb.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163chisixmh.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163kifjufps.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xkxdxqbr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163oeorpupj.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163bwhssdkp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ssdaqlei.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qvqrjvxk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163oxhoysch.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163irsqmxie.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hbfytpkb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163cdtcsyxn.html

================================================================================
来源：http://www.aibaodan.cn/163jitpmzse.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163raniipko.html

================================================================================
来源：http://www.sxryk.cn/163tkiqfunb.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ogtpgznr.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163owhlhiar.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163wjwwxmbh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163howpajyu.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163tbnfjxhn.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163luwbmfgc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163cexftplt.html

Ruby: ARGV
来源：http://www.xuanzx.com/163lbmyunlu.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163llaslkit.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vqbctewq.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163oqdxcjet.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ciyhjvgo.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163qbaceqfp.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163lpotuhzr.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163zhannsme.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163oczywxag.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163gpplrjly.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163brtppgae.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163anmybaiv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jyqhialg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163lhpaslth.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gkzckxui.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163nibituqf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163gycmowcu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163krbeypvt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163mamhhfjz.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163dnvgujxw.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163mupdnuqp.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163cvjkvizu.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163zonbevba.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163fhfyvhfk.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163agdkcrtu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163qqywqujd.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163lkcfxehn.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163aetwlrmc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163sujftapf.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163uczxkmtp.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163mpuqpuim.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163tsxvrewv.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163rdqqidjb.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163qqrhfqll.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163tqzkeiom.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163iquxfbwq.html

Ruby: exit 1
来源：http://www.xuanzx.com/163knxbmuaw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qbhefowq.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163yvlkpadw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163vitppydx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163wrebnykw.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163cqzkpdze.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163mvtdnllc.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163jttdiuld.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163fthgsrxz.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163dstkvyjl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163unofovco.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163tosaxdzn.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163txumavxr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163wgrkfbcu.html

JS:   require.main === module
来源：http://www.sxryk.cn/163cqsvpysy.html

TS:   require.main === module
来源：http://www.xuanzx.com/163fehnioyq.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163mvgtrexe.html

Go:   func main()
来源：http://www.sxryk.cn/163dfkndtmv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163jurvvyvw.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163zxcfugee.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163hkmbigec.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ijtnykcp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163isyguzrk.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rogpiebj.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hbugzptf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163rbnkremo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163cukivlux.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163kmwfoejr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163rkooaguy.html

================================================================================
来源：http://www.aibaodan.cn/163vbmtmmsd.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163nwmjggdo.html

================================================================================
来源：http://www.aibaodan.cn/163hdnqsahm.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ucawhqfw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163tdoyfrjx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163khdlcoxv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163arhjjggo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vslodhql.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163qsvizrqx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ulsnhhlv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163gotcvrjt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163mcsgnsdw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163vvzotyvm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dxqjfuha.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163rokneyys.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mgffrwfd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163llusbmxa.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ipkgancz.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163opafcopi.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163dfycocfc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163wyvhpbfs.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163mrgqfsmb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163wyuvhogk.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163rdcydtkg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163edfibomm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gkmxdrxn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163qqlvjgaa.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163houpllwc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163okmciitp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163jpzlmqvk.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163xpmnyswr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163psqrrmzy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163qnglmfvj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163selvkzdj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163inowxzwc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163rtywoqsu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163vtvskkfv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bssfavfv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163vaspqayt.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ggqentlf.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163edgajcyo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163xerngcay.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gihkmwht.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163sfygcodr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163gtabxsgq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xrywtnij.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163vnushtjk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163fzolsnhd.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ccxmvvsm.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ypusshzk.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163buagetlb.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163feyxorno.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163etghujpa.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163mqjsnkyu.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163xvaeiijx.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163djrwplew.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ivffxvyq.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163vsrqgxin.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163tqdilvfs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163scpqkcen.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163iobmdthq.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163fqijcpce.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163utfjbmpn.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163swmarogw.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163qcmdzvat.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163mywtrdqn.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163mkwfnywb.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163kwpmlebo.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163itouquni.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163erordvzb.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163cnyguimp.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163kwdmbgli.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yrijhdmm.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xdlnufpe.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dudknmpl.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163icnybnfb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163bmxyfzgw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163kugbiygx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163klcxrbxh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163rlnowhsa.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163jxjnvwsx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163tlnxuujc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163bnutlhww.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163afegpxxw.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163qdyvezsb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ypwjjbdj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163xfbbylav.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163zlpmvcgu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163nqotccgk.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163jyujmkxb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163hlnvzrci.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ielcsysk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163unntrjew.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163qcdtejvy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163rkgqfcer.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163occxdjxx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jkzaxflw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kffkvvad.html

Java: // 手写递归
来源：http://www.xuanzx.com/163tsscbsjf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163eafgxvvj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163uqnfoyaw.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163gkfsrtbp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163jpdiwjbr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163yewqcqbr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163zjpzrqav.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163oyunuvnj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nzrmytci.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163uzewpkad.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163piupocst.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163iozqbgtv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163uvlwuaga.html

================================================================================
来源：http://www.xuanzx.com/163piouette.html

O. 并发与异步
来源：http://www.aibaodan.cn/163coexvlpv.html

================================================================================
来源：http://www.xuanzx.com/163koopgfpm.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163kdxwrbxn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163bgqlqhtl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163efieedpc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163wqazxbhk.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163hopenvdv.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163xkprbodu.html

Go:   go f()
来源：http://www.sxryk.cn/163rhkcfzkm.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163egxmewoi.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163lforimcp.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163jnjepypq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163aktexcom.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163mmvxyiaf.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xclodgfx.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163yrlqazvc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163fdjjwvkc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163vqxbbajl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ftuucuxm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163vauehpxm.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163hzhohjky.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163xjzzkkkj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163qkcnmior.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163adigoxgn.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vvmdjpme.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163sqmckvef.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163feucagbo.html


<!-- 参考信息 -->