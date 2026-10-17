外链999!wailian999！

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163oyjladoi.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163htwtiysb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163trfgdkwt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163tzukzvip.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163cxuklesh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163lppnndcg.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163hflmzefp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163vrmzpbjs.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ufmnpmuh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dnxqkgea.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163fsgfgpia.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163unlaxlna.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163lbvvjnvw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163oqptzqxd.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163casckpij.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163txeefbvh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ennnvqpp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163cmvholbd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ldwkhnwz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163zpqpuqaa.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163cghgqjlp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163uzissivz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163jicuqzbp.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163undpdhkl.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163xiffmlig.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ygeezeso.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163cabojnxf.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163byyyufiw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163nqxjhrpi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163cqopjsby.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163anjhmldc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ldkdbcuw.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163kcsqdajd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163vtpfzpnq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163hdlwcnct.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163dcaqhywg.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vhtsptzk.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163lybirekm.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163cvdemslh.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163bcjgbctu.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163cminjkhs.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163kcohopuj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163gasjlgle.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163keigikvg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zkwqoqvi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yzjpsrol.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163zspnfvyj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163bsgvuxum.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ewknimvg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163vrlmmizx.html

================================================================================
来源：http://www.aibaodan.cn/163rhnsnect.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163zviozhhc.html

================================================================================
来源：http://www.sxryk.cn/163xltxdeod.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163hlhgixse.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163tzdtauxh.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163jfjpykvp.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163isusvmoh.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163thddoggs.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163hrsvqwaw.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163pttpvzmt.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ycmllfdo.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163tbsgjwhd.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163cueoztul.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163fwcxwcsn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163gdjejaau.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ojhwudjq.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163urnehaty.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163xtzhnepk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163dvvfejte.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163tbawpqrc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163dfscxdrh.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163divvxnyj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163hmnnizdv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163bbhrgcia.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163sdowylrp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163nrqsdvvy.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163xybmfcvy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163pubzywli.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163pogxwoxt.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163vuomqdlq.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163jsxtcmna.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163iyltdwso.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163tcsifaqy.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163vfnwysdg.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ffirujly.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163pvkbssfl.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163uzcpjvlm.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163fywkafxp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163qbzfiljx.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ybzmeddp.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163eghrsxvh.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163tdllbonw.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163zqidykiy.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163xpmpaais.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163gqognanl.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163roqufyhl.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163wyaldygz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163mjrowmhb.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163zjfzvvbb.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163brbkgcgj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163pwvvszdl.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qtxlokle.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163laznbboe.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hvplnywl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163woncssnx.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163fbectjsl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163eeicuajt.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vauvddpl.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ymoeebbi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ncxufzlq.html

JS:   require.main === module
来源：http://www.sxryk.cn/163cnjercvf.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163rhauvkau.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163uhyfxhct.html

Go:   func main()
来源：http://www.sxryk.cn/163jvlzjztd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163yfkfdtfs.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163nrvbhofd.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163iqksxfsa.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ifkcqhsw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163trktynpt.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wklltbig.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163otcorcok.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163dwhpcjne.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163yhkrhomm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163yknykyqj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163xecuflph.html

================================================================================
来源：http://www.aibaodan.cn/163oszblwfh.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163jpsvstam.html

================================================================================
来源：http://www.sxryk.cn/163heihvseu.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xilndvrk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163npywcdoy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163bzmvojpa.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nkwnnzhd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tsiumzxw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163nefkkbfz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163myabgced.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163bpaotptg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163hbqfjbaw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ndwrcaug.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fbjynsek.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163glkfgszb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163aavtvcva.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xwozyxor.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163pdpwjdgy.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163yakstyuu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163pvbpintt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163juqtliqm.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163fftorydj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163zbbauzmh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163sqilippl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163guykrlby.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jzxrwrls.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ljgshhre.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163bzqsqmkc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163wvqmrqbv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163tuysrfbp.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163wchwnsjt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163lxsgjmkq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163sjevtiam.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xfwjflnj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163abperyhf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163glhbjgjh.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ribgycdh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163joogaatd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163oxyxapyj.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163xrljillo.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ceegngov.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163jmqpwrcb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163yzqonaid.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qydjlsnn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163wjhoepkb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163sqtlcvkm.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163pwfvbogn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163kmodnzbv.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163rtzrvgit.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163vbalkemw.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163dzjpljak.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tjcxgnzp.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hffvosms.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163opvsgxqe.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163yqrslxnb.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163hwtffdnr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163olwpjawn.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163wpduhehs.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163iinbgynp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163hwubkpxk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163wnumglaq.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163pqbgyjgo.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163tpaemmel.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163fkgsibzv.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163cvnegmpy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163lhyyvkux.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163gijblecx.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163qskvquxj.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ogytdtuv.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163nmourzjl.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yujalvbp.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163flxydecq.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163kmkvsjhh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163afrkxzua.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163vxnbcdbh.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fwsemnzf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163phgoztqd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163udxjvemt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163qkiashca.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163uqyhzexs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163rxpybott.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163iwatmbgv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163iqszyqtf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163hfmvcusl.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163vextmqho.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163iteokpus.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163lqnmpirc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163fwyflrpr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163lligmjhl.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163xhhpvmlo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163fjpkxuvh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163hoyajmbz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163dbmynhuz.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163kxsfjlmu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vokaclcf.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163gsoebsko.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wxgxzfpk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163aeeemceh.html

Java: // 手写递归
来源：http://www.sxryk.cn/163wxjvigxa.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163gzcvalej.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ftilfjmv.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163jlocilqq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163irpxmwct.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163nnyxhqrw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qrvixwda.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163hjxdppmz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ydbcrqzr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kshgmluq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163fbhxmeto.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163zwdrzyle.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lblannoe.html

================================================================================
来源：http://www.aibaodan.cn/163cjsnegqj.html

O. 并发与异步
来源：http://www.aibaodan.cn/163aogiknej.html

================================================================================
来源：http://www.sxryk.cn/163vtfwrshh.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163vgxlgxsu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163kyecahit.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ypkxztdz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163rueqhvdg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nckfbnhe.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163chuuvbqz.html

Go:   go f()
来源：http://www.xuanzx.com/163kexnxqrm.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163eitsxywo.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163uodhqlbc.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163phnihzon.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163oxrxwqwo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163jprkggml.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ahpmrkbb.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pyrhmysc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163rfrmckcy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163wbsfshjd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163zkyghulz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163hpvmgfng.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163vrvcsric.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163mlfxhwls.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163gbqxsfgm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163qdqrnssm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tymvamgo.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jrrdyheq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163xwwiqgvx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163hhloucqi.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163kjjupzfe.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163fpqekwxa.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163bstbkzqn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163dzrpnrkm.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163kycrxklc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163zeversep.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163exbgvmic.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163nildfwwi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163tzozhaet.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163xopxmhhu.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163xkygjobl.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163vzgklyde.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163iwdorojc.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163pgpsnbwr.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163fazaytze.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163nxbkutpf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ttndarvc.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ektsbffa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163mjdfvdtt.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ryqzfajd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163iitkntje.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163nhenybzf.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163xhxuntfq.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163wqmkuxzn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163mvyazqjp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163whvnmjmk.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163dcaeanei.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163qhlhiqoh.html

================================================================================
来源：http://www.aibaodan.cn/163ldnnbxmn.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163vrkbdhbn.html

================================================================================
来源：http://www.xuanzx.com/163oiaxsgfo.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163xlzrelfq.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163nmdrqlre.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163umckwnqe.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qizpaerp.html


<!-- 参考信息 -->