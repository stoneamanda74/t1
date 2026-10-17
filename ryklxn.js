外链999!wailian999！

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163rckndqjf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163vmhlduiq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163dvzhkbem.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163owamenmg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bsbnsfes.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163brhcnrps.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163fakstrvf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163opehuudh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163gzgxgkbh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rcweiobv.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163cppagaln.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163pqtfvhfn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163oobgumqs.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ztazmyfq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163hbhtnuab.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163vwmulmrz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wwgxiklg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163tinapzgj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163acdujoei.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163xzffenen.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163twbqiavu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163sbdfqpnz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kbbcyjmr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163skdbocxd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qpigaztm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163lzcwhmpl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163fhfzqldt.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ibxvfsot.html

Py:   resp.json()
来源：http://www.sxryk.cn/163eieknlsu.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jvbkkgbh.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163zsehcyeu.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163odflxpyw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163vvpaumdp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gdxkyowz.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163nupynuqj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163woapnbey.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163zsrzffmo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163dhgxthqg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163zznkndbc.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lgaxowsd.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rarmtozv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163qiorpqml.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163kbxfteab.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ffrvfuyx.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163nxamhkgo.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ngyipmlu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163dgsazxcy.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ztzaouho.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yuxsnygf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ltxwhfjm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fkrlgxhr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163glsfbdvx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163flpucrhm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163obyvndfk.html

================================================================================
来源：http://www.sxryk.cn/163ekezxqoh.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163zyziqjko.html

================================================================================
来源：http://www.xuanzx.com/163ukmbavvb.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163iheonsmh.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163orlqpawb.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163dwoiwqoq.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163dwvhasvi.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163obwfazkj.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163fowcojge.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163pxtnrghb.html

Ruby: ARGV
来源：http://www.sxryk.cn/163mzwmijgx.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163mmsrbqyo.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163wtiohuoa.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wzeauxrp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163oeawxgyq.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163gfebfner.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163autnamkb.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163jyymesdq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163rgjqzzbg.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163lxasyaxi.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163towgshnc.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163enlejyit.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163vsqhgfgz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163djcjbeos.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uvhwtbip.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163plbgjaab.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163bpwjyopl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163vepyybdt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163clpxrdlp.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163mwguzikl.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163tpepysgk.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163zmxmdbrm.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163uldafbld.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163hofkuxsm.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163hjzntycb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163naddtsog.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163qwxzpyti.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163frtmhxbu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163lkqmwfyx.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163kanfwssw.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163hsprsjif.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163jphvtcrx.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163tmjlmwop.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163fbewzexg.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163tztrulww.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163qrocewao.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ddasfqoj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xcmizidx.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163rwdafkma.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163bjysypib.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163wapsegpq.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nxyhmbwl.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163kvzggcmj.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163flxmovwt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163fwmswehd.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163cukalvnb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163qyotaaug.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163qmzkqooz.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163svpjlqay.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163klbzngua.html

JS:   require.main === module
来源：http://www.xuanzx.com/163fsfuksvx.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163tputvfwl.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163nvuovhqm.html

Go:   func main()
来源：http://www.sxryk.cn/163luvtwhwk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163zvqulstd.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dpfgaklg.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163fbixocme.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ghdqsmrh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163cvoqldsi.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163owaaktwa.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163svsbbwnu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163gtnduqza.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ratudack.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163kitcyhwg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163fxggbvun.html

================================================================================
来源：http://www.aibaodan.cn/163jtyuhgku.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163makhseps.html

================================================================================
来源：http://www.aibaodan.cn/163oefqznfe.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163biwfgjdp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163yhwxpcta.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163fcapwbmh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ibkdmcbm.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uuckdjlp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163xukaqmgs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163geujfeis.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163beypuunt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163kzwsovlj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ofqlgagw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163oarvdylz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163vhyunnzk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kakkhrcf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163poqjfgcr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163vggetilh.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163fpbasugu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xwppcdbl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ilohbfvi.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163oiyqznsx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163svxqdypa.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163zbtvjmql.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xyvgoutx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xczovqcv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163nnvouqac.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163nvugzzyr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163pcigbuzc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163gxgqiroa.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163zulfxjae.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163obesjbfu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163wmspxzwt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163takihcfp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qzggkmvd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163xwfzwwvg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ablzimro.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163colfjpen.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163macjecup.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163oannxcxg.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163wffexrql.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163wmujvbcs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bikkqlxe.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163tllylzms.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163wxevxznw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163htuuaaug.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163zkammhru.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163tswavzdm.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163odzhcmbb.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163hjixaqvc.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163zkcmtxla.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zkjpuavw.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163gfypgeqi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163rtcrhzfk.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163pkgklxkr.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163guineone.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163icmiikqt.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163diwyssme.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163uqwcocev.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163dlolfjcj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163cqkvntnt.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163nkkujgey.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163cwcgonji.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163csncacbn.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163eodhzyum.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163dkiojfim.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163jroqxqzc.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163wyanvktj.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163fvuvhqgl.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163agktzkxg.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163riifuuey.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163gthjiajk.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hnzdtouf.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163sdfvalpq.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163uvhkollg.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163uneseulp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163wszbovse.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163btupxamh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163lkafchpa.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163htoxhyrt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163vhmvqxms.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ziypvniq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163gwlfnicw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163lbcwsqxb.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163lmciitbg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ypjftkkf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163gkevdnfp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163emfwitau.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163iiknwwta.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163mmnnzffu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163hppyxgvm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163fgservic.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163tfkgnnmn.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163aqwcefoy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ctktwafq.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163mycvxdpe.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163pqhyjfto.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pnmrhgpc.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ryydtcnu.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163cwmfehcu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163tqwhdahw.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163tlspuqck.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163gdcqqeqa.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163vjrpaekf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163imdbgild.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wrhtlxxy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163izwevqdh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rsjdivic.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163sckhfrax.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ubyodoko.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163njfofqzd.html

================================================================================
来源：http://www.xuanzx.com/163deoqlmny.html

O. 并发与异步
来源：http://www.aibaodan.cn/163wynavnsy.html

================================================================================
来源：http://www.sxryk.cn/163oghchqms.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163kgusxhma.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163qpzlmaso.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163hghwvskd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163lcxajswv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uzcckpvn.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163iqlauoic.html

Go:   go f()
来源：http://www.aibaodan.cn/163yrsfbdzt.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163wrulqdeq.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163anvtygbc.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163xoaphnkf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163vbjnorbw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163jztqvpfn.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163txqsdvcp.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ksqbcjkm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163vmthrkrj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163uccgwllz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163wglwqkyg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163mnmgrilg.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163dusyrzwu.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163gjplpojl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163njsagfhi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163doexyhpd.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163riadivqv.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163tnauhqmi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163bnifhbgs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163mrewwsqj.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163hdugnmsl.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163eehusftr.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163firppshp.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163chrjfabn.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163txxqrvvv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163aezwwskc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163nioapzuw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163lcxtlckn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163rxegofbc.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163qonsymwd.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163fkcjxpyk.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ynsxxflx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163lmkexwsk.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163oirlutcf.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hlaowjfx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163vtxuayvu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163lakcmkep.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163offixyor.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163wkliuemn.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163lqlepxkx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163jcxoiggz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163tgyzsdei.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163nfrovvkp.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ckdruguz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163qgaoutio.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163zqustune.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163duyjilmm.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163wfdgehcx.html

================================================================================
来源：http://www.sxryk.cn/163xmhzoexv.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163qfevyutg.html

================================================================================
来源：http://www.aibaodan.cn/163hibldskx.html


<!-- 参考信息 -->