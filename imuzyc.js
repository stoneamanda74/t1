外链999!wailian999！

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163nypvzfdt.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qlvkclhv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zhojthpe.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163iraqjbvp.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163emawkxpq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ieaooosi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163rngtsfcs.html

================================================================================
来源：http://www.aibaodan.cn/163fubibbft.html

L. 网络请求
来源：http://www.sxryk.cn/163gzpcxtko.html

================================================================================
来源：http://www.sxryk.cn/163xtkwaptp.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163cmzmmzyk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163vzusyebz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163qadyjuie.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163nwoypkux.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163yyzmntay.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163xonspwrj.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hwxrrnvf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163whkvkity.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163oagptoul.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ssswidew.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ppuhcify.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163otvuinyf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163soncipwc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vtluejma.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163gprzkqoz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163xyaplvrj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163whodbpen.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163mqarlptk.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163cvuhjypz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163gcobmjni.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163lunvubnu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163hjuptbmb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gswujyzj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163erupegqs.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163xojvimtc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163zehuawoi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163dixfsxjt.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163hejfywww.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163atjwkcrs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163cdkvktky.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nabahyeg.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wmapmdzd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163gvrxmuyu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jjagzpiv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163rrqvecuv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163nutziart.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ucptpvov.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163aewfakqz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163bbbrakck.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mbjmxlyw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xmyeygbt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163stbovdyn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163rkfgjoqw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163pjfeyajf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163rlavibbx.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163mefvydkr.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163fthyncqv.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163hmcgwhpg.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163zcejbjyx.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163oxrbjgmm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163vmtrjyhl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163wpuozcns.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ivzpfuyf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163nndbmeqe.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163mlcslfks.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ttrwvjkz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163txjmusef.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163aoncaghv.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vzxdoxbj.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163xapnjjht.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163hxpbjtrv.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163yzhsvfoy.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163fdhttgwq.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163knbmkbmp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163edeclxyc.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163oithwhdx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163olnjnvmz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ovlaxkau.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163tpkdgpyl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163puaogjal.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163nvvfmdqa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163xgveqlqn.html

================================================================================
来源：http://www.xuanzx.com/163igwsbuxx.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163dvhqxvyw.html

================================================================================
来源：http://www.aibaodan.cn/163zvkbhxun.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163dmmxhhei.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163zmddyabj.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163oyoczczk.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163alergfth.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xvqfkbln.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163zoehtlne.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163hltpfiqw.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163txelrzjf.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163iyvpjmoa.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163grczmzmc.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163mholkcwd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163exhcynmd.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ajncxuvi.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ywguetoa.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163tkkkfoqx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163gpvbrzkt.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163xclaohjb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163qcftuzla.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163kaoclzcb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163iuoxqozt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163upsscpjw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163pcvunarr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163pfolnhoq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163lspaugyn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163opivfybg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163qyhyxyrq.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163bwdiwdqh.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ykquthws.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163rkshpfyl.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ltqhcmpz.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163anyxhfqi.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ggehtpvo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163fmxlzfxd.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163kljyvzhk.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163gpppzgnz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163mcytxmvh.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163nrxfvkgf.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163pcnhponp.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163jgwjrnyl.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qpnython.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163boxntlwl.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163vgsccjmj.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163nwsuvbcq.html

Ruby: exit 1
来源：http://www.sxryk.cn/163petbfaaa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ytsbcaxh.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163zeieivbp.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163esjbfcgb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163vsuxgyib.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ahmgljfy.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163utrulfti.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163bzzqwtho.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163iyozadqt.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163yvuekomm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163dogoghvb.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163euorrdxq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163tgqnafhx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163uezvfftq.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163wwxfvsxa.html

TS:   require.main === module
来源：http://www.sxryk.cn/163skxjqerv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dmxwgcwn.html

Go:   func main()
来源：http://www.aibaodan.cn/163lsxobeyw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163zzmykgup.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163edtydgoy.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163rqrggigs.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jtupjihd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163qjqwqprn.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163anqpscba.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163kflosgiq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163qfryudpk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163abqttmze.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163snxfgfix.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163gishhtrp.html

================================================================================
来源：http://www.xuanzx.com/163yutclqyc.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ofipsckm.html

================================================================================
来源：http://www.aibaodan.cn/163hqntpizq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163rggjdvdb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ledamfzz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163rfxetsed.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163prwqafyu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163cmuqxwpg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163mswgmcik.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163rjmevohw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163gsiuvpog.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163oolmbgwp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163lbzmurfz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hjfoboto.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163uzqoxdsn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163yufsokcb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qdjtskxl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163fwclhmqw.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163tctuhalp.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163blviigqi.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ddnfafwr.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ljsyhhml.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163swyioxbt.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163vwxdoxhw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163isqejpsg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ibmpodfr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163qybpsuck.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163aupbiutt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163hjtptvkv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163mxdapwry.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163lwwikwpu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163yhxbsbxq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163jzhzdvun.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ilxcmzyv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163gckaofsf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163bvuqbvkg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163fxpffjxd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bkucylxr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163wjkkbqvq.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163sbbrgeoz.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163vzhvscqd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163dekqflmu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kzpvizwd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jiuefnhx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163gxpqbzck.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163jfnbpigf.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163xxmbvmqm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163qiwsotup.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163yusopbpk.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163uwpxxisb.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163bsjjhbrz.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xaavdhon.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rksvvnys.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ayuwvfdj.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ywrvfohv.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163tdhtspab.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dnhzgakj.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163xjmbkwnf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163azukwzkx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163xmhfoshn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163vxlbwlmn.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163njrlqubn.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163jjxqjuam.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163egwsoowz.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163dfuqxkxm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163xbqikdxf.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163wjxoawpm.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163uvhvtwax.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163eneplaap.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yhahczan.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yhhowoqe.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163vskxlbfw.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163wokbyvjb.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163byolyhww.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163lwdhdrpo.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163qedjlaim.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163zqhcmmxw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163pybjygni.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163wkdhcjzd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163nseusrzv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163duncmyjq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163hkibekuv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163gwjqahip.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163srazeunw.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163jjhkkqvd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ndeopchh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163nfcqcsig.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163olczvull.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163laqpgcgb.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163rstvocfl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163fbwtjldb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163qmeklavr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163jnztirif.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163dicwgukk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163mqshouda.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163bhhzilfq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163saixlfhv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bmhavdou.html

Java: // 手写递归
来源：http://www.sxryk.cn/163khqzapqr.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163nxjsbwhd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163fhctfwkb.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ccaekjso.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163aswlsltu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163iewfwlyt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jffowksc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jqysixig.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jsaduiud.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qaxxldzr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ylfxfpwm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163oansmesx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163epfzmmzt.html

================================================================================
来源：http://www.aibaodan.cn/163qapsnyoo.html

O. 并发与异步
来源：http://www.xuanzx.com/163jlcqnvrr.html

================================================================================
来源：http://www.xuanzx.com/163qcbaknke.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ambkepcj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163clfobsmq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ykgbxdzx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163zysidvix.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ammvlxxw.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163tqmprfxh.html

Go:   go f()
来源：http://www.aibaodan.cn/163gbfzlyzu.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163xnjdtgpu.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163gdxyscns.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163zycpetpa.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163mikddkan.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ztnmqjii.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163bxhnegpb.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tziazwzx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ibpxvfkt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ojhnrpns.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ysjcrcgw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163kktwahcz.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163xxniaxzo.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163yfjfalwg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163tmmkkqru.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163jpcpznzx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163akszbbaz.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163xiqjldmk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163fdjanppx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163eqviripc.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163xvugauea.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163watrckjq.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163dpgfzvcc.html


<!-- 参考信息 -->