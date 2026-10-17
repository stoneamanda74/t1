外链999!wailian999！

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163omdinhdo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163esgowcdq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163yfolpkyp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ydjdtrsi.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wtbgdxva.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ogysyngj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163tdsqbqvc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ofspjxhz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163djlfdswd.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vcwyqvol.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ozkxdftv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163stulbckx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yaofcrye.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163urdpvybi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163bztldgyt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163vxxywfuy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163wdqmsfgb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163cdapkxwu.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ixjommxq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163geosaqcl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163khbzoxnv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163chwqltjp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jyblvpez.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163rnuxrrvr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163arranktn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163alpccdrw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163frgmzmvm.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163zuxyvbel.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jivzozkd.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163xsiqnurd.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163uqhtmjhb.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163qctoeskk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163nywcnvuo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163cpewuhoi.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163rdjdpdpu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163oskbsvuw.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163kboqhjex.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zvcvhdal.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163raegmshw.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qpelgamy.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nvnattie.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163yftfdkin.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163frqgxpth.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163rhahiyeq.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163jqsocnia.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163hqnoxkkg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163hufnnqgp.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163tvoynedt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zplqdwid.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gcyvcqwl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163qlkiqbso.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163kdasbcwv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163kboqwfxx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ouvqxrku.html

================================================================================
来源：http://www.sxryk.cn/163guwimkne.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163probtoin.html

================================================================================
来源：http://www.xuanzx.com/163jhdozxlj.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163jxgfuxih.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163bmaedxmt.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163dgdntvtp.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zxddtnou.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vkagrudr.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163xbxboeqh.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163frvtmdxo.html

Ruby: ARGV
来源：http://www.xuanzx.com/163rxqmkxcg.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163tsemlxjt.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163omfscvbi.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163nxktiscx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ohvsiorc.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163dklucjxy.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163aqqdfygi.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163jtvabatz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163hspdcmql.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163cujleirm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163hthmzggq.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163anyurhrg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163cwltpyie.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163fdhqrpqj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163tyrmxxzl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163onghblqw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163oiwualki.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163rmtqvcwe.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163efpmkwrw.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163nesdblsw.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163libqdalx.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xqursixb.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ojsbdezy.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163pwogdgzs.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163txelsfby.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163kbuibahn.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163oyxkktkt.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ishkctlw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ifsralsk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xcxrnxhh.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163sdoloqvh.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163loefrdps.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163mkmqjwil.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163fusknloj.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163tzsvsdck.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163larlblit.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163zoaihacn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163vgteyxxv.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163juunummu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163tqquonxb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163mhqlrdao.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163kbduyhfc.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163cpnevbmj.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163fzqofzgr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163hhxuwilu.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163wpmlixrx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163oyqiuiny.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163akxxzsqu.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163xnikdbuu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xpoegoxp.html

JS:   require.main === module
来源：http://www.sxryk.cn/163hgzcuudi.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163zmugrcxk.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163gfwimzoi.html

Go:   func main()
来源：http://www.sxryk.cn/163afgsqgtl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163zwaugqod.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163efwssizz.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163wtgvwiul.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163hcpyghig.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163xzzysowm.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rcslbphn.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zonaacli.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163lmpfyuec.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ssnnxxfs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cuumukzx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163idaeclbp.html

================================================================================
来源：http://www.xuanzx.com/163rsbaugbq.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163vhpektgt.html

================================================================================
来源：http://www.xuanzx.com/163sptidkyg.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163btqwszdd.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163megvrlts.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ptutovch.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163cbzzklgo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mgcezicz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163vpamgvmp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ginrfigp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163cniezpob.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163fgqsrhjt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163hdoqlawi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mipdcnuq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ojwqwrvv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fxyadccw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rijlysex.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163zkpmdlch.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163rgebcvox.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fcteexxb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163zcehjkys.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163xmrsradk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163txnnaafr.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163hdsfugio.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163epbznxro.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163slyvzxtz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163dalyzbvh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163kuvbommj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163gwmlfpro.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163cruntgqy.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163gttycdpy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163cqimmygc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163iqhvavud.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163yvprbzbl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163pbpjtcgb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163lzqmxspu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163yiajtxfp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zzdptdaz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ldhbipbn.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163vizmsfbh.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163johozqjv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163vabpzgoq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163fvvqyhfy.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pmeaiiyg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ikjtggsv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ohhbejvj.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163oxgepqex.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163znqnxxnn.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163kxtxtyab.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163jlgbhepv.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163prhkwwti.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vxothaiu.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163thbleysb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163lzdsnkiz.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163npzcnwex.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163wgqyduvg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163dlkvbyfu.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163luygsvnz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163tzlbdwgb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ylsnnxkc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163flbkluzl.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163duukmyeb.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163fdxpsipx.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163nenfuzer.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163zjokbtzy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163zixcdzhg.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163cdcbszkx.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ngxwauku.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ndlmeqkv.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vszwoire.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163gjjihuxu.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163sfjjexnj.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ejvvyhsw.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163oigzsezn.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gmluorcc.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163osxvddfc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163jlvgvbvd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163rwrfuqkm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163laghdugd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163pipncowc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kveomucz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ljsylakt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wggslteu.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163vikzprms.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ayexkitv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163dyjqpbds.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163bmzzqgzw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163rxxpxbzq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163vopqqrqc.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163bcsqabwk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163kbuiyssu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163kyamhtbx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163mpkwlgpt.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163rrhqochq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163yqssuvgo.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163lsbgznts.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pfmtozww.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163mxekmwnn.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163pzntrkqx.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163mawfopgb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163lwfmjxga.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163myblqotg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163lyybmdxi.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163otqoyqpb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163xbvjyvvg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163aopxavuz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mhbtmiai.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163pgtlqiak.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163edytzxru.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163aogrgfyo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tvbfbcly.html

================================================================================
来源：http://www.aibaodan.cn/163twjflndt.html

O. 并发与异步
来源：http://www.xuanzx.com/163zwxeiuvs.html

================================================================================
来源：http://www.aibaodan.cn/163jllbheoe.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163fvtxcjwv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163cozksltv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163sltnxylc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163mthdvypx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vqnasler.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163bmdmsjwo.html

Go:   go f()
来源：http://www.xuanzx.com/163ubffxhfd.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163efgyoogm.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163xjgbfcoi.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163iewjvrmd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163xtjpzwxv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163fpfwwqct.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163zmybbnnz.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163mipeyzne.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163vedszcff.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163gzwbbtfz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163gsnkgchs.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ouzyookr.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163xpsbptjo.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163oksoybbk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163iancnqmf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163smgqzcfc.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163vgonbbnw.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163czcepsux.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163zvojrtbf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163kcrdhsce.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163tggxdjoo.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163dmvtkhsw.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163vhenadbh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163airlfbfq.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163elyorrnv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163qjnfibuk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163psutzdsx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163xiwouehx.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163moxvovhj.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163eqgevxez.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163czskkucx.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163lwdxynxp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ripenogh.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xfvbkplz.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hmofxglm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163nbkefzyo.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163auptsxnv.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gixxzxnn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163tqyimtez.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163onaqtbuk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163brxhqlwu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163uocjtnuz.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163cketebtm.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163nrowrbqu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163gcedjiwt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163habolikz.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163rgnnghns.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163fcpgdgxj.html

================================================================================
来源：http://www.sxryk.cn/163snodyzcp.html

P. 常用工具函数
来源：http://www.sxryk.cn/163cyqvoqfa.html

================================================================================
来源：http://www.sxryk.cn/163zwddwxyr.html


<!-- 参考信息 -->