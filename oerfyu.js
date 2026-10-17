外链999!wailian999！

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163janrzckv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ivlxpqet.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pklvblan.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ypvyshtt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163gjnzombt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163psecpoux.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163sprfqdxn.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rcvixcac.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163pofciagq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mlwmytje.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lnuchbyu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163qubexogq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163lieczbte.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163kahjrjlv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163hndhitdx.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163aoxeysuv.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163fqyiacme.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163utpakdip.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163kuxoxjst.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163emmqwwhu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163batacjgx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163czcrupoa.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163flbwkcyw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163xaninlqj.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163hhkwtlge.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163sxjulywu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163llqtzvol.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nlzdjmfc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dbvtmkvm.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ollkwkxz.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163bnssrpgy.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163aubwpfzl.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163bcxzwxbf.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163iaykxxpf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ynplynym.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163jjirlsdj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bamwpsew.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ttkmhzpx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163gcxtamsf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163okabsgnw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163cdunzqqr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163tuerorjs.html

================================================================================
来源：http://www.aibaodan.cn/163bumwtami.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163xxofitlp.html

================================================================================
来源：http://www.xuanzx.com/163clokmabj.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ottiypke.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163iebdyoob.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163dyaphtkm.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qerzrqbh.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163yvribvhh.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163rblnlzzd.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163cjpkwzfn.html

Ruby: ARGV
来源：http://www.sxryk.cn/163xlxgnrbl.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163kjcdtejf.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163sznwdhxm.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163hbzsvonx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163lieyovhc.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163qkjvrnqs.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163vyqrdhpu.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163johykuak.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163uarewdyr.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163sbykdwbm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163wvhvpkhk.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ceygmaoa.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163zauwzwyr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163azrhzgxw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tgwctfnu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163burpczzw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163spqcnbrw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163usehgdyz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163vijstprh.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163spcomasm.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163rcbuholp.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163lewpfbom.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163vairwoga.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163zrfxrnuu.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163duifsiqe.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163mnrondau.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163gvrikrdp.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163zszijssd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163nsanqgch.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163vnhiqynf.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163rqmvheap.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163dsvcrfwi.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163nvlpjfnu.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ywlluofe.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163nbvijcxj.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163tnznlmbn.html

Ruby: exit 1
来源：http://www.sxryk.cn/163tejsuvsu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163dupzsgml.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163fwjnkqrw.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ffotunxg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163uohectqd.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163iyedmdga.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163vopmufgs.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163mkkzvjvo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163cmhypclg.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163semtolbr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ucxtwifq.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163dopmafdg.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163dnystlbw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163mdjylnvw.html

JS:   require.main === module
来源：http://www.sxryk.cn/163rbfzslnj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163iogmdzkl.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163rbnqnnek.html

Go:   func main()
来源：http://www.aibaodan.cn/163snvjckhv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163nrtxtiab.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163bhyhxedi.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163nupfvtwe.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163dkuphbyg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163pplpxbfr.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mlsdznon.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163uytuvscd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163qikxxlqf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163hwyuxxzk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163iseicfuj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163trlrhwya.html

================================================================================
来源：http://www.sxryk.cn/163zpppkvyg.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163cbkajqpz.html

================================================================================
来源：http://www.aibaodan.cn/163svxftbpp.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163fanthbvi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163qkbwlfgv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163erwxuhpp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xrimgsxa.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xplemkuv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ivgpiern.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163rieoejla.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163fonfuifb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163qduumgjj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163gyyofddf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wdqhzdut.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163gkyizkph.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rsnzfnmq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xpciebdj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ymeukavi.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163wqrixjmk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163sverbvls.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163mibzyfya.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163znqmicue.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163mggxuafy.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163wnhuvfis.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cjqbnmov.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vytnqtta.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163brkbylyd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163drrjzyjv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163zykaojdr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163alkgywmo.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163httompjd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vphyagdr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163aeywsgbs.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ikwctiiq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163rvesjokb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163jfigcciz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163luomdgpn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hnmmqqta.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163xsdkyryd.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163clbtbskd.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163vkvnobib.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163rtmwsjrc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xxqgrfvv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ifgficrk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ipbiifsr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163vazojvws.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163daqikeof.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163cxzjkrfe.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163wjqqwmjr.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ryqozgcx.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163tsqvjbyr.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xylqmsxl.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163eudbxbzh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163eqnmllgq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163hssyjvqo.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163wjkprpfa.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163niajurbe.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163vmbumnqr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163tvelhmum.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163fpnuvnrc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163nhiobxwm.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163blmulsqr.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163riqgpjsv.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163mtjobbtm.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ddjfqunn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163jtjmgpne.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163sczcjaiu.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163aemngeon.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163yupxqwoq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163pkfqdnwm.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hskdpgdg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163utfedeic.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163aciebxfo.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ayxfzvky.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163osaylypo.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163hcyjwppc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163yhckcsjl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163jmazctec.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163jrfmsnhv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163djntfpbp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163mnetlnfy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163qunbuplw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163hwizahhx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ruxzpmlh.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163lkxdyotp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163dsgjentw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163nqorciys.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163wwrszvuz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163exboasnp.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163hgekjlms.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163tkkyubxt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163tekrtkwa.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ultdryuz.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163xzqlmzne.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163yvidrsqs.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163kaenirvu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163emkzgyht.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163omrrotgf.html

Java: // 手写递归
来源：http://www.sxryk.cn/163zszselra.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ktyekxkx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163xvnywvat.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163hvvbxcoj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163yldsnfxp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163cnsggtch.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163fzljunbl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163abzkxywq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163keowcncz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ywqoxcqb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ktjsnprc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163jefllzqm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163purvmivg.html

================================================================================
来源：http://www.sxryk.cn/163vclfzrgt.html

O. 并发与异步
来源：http://www.sxryk.cn/163hvtjypec.html

================================================================================
来源：http://www.aibaodan.cn/163rtfvnmsl.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163jeiqkmxs.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163hjfkkksj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163dtrqxyly.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163auqeuwdp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tgswerss.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163enhfxvgf.html

Go:   go f()
来源：http://www.xuanzx.com/163jbqfaezr.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163qunqodny.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163mlckfteu.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163bzpwvpyg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ovsomqbo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163sevpvwbb.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fyzuneog.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hghhigvh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163wryvsfoq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163bvcaueqg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163qiedlpvx.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163dacdeybn.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ddtapldk.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163xdjvbtpr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163mjyelabl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163esdxdsxm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tyvnubjy.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163dhfkrstm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163kjfeuvvo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163uiukqnqm.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163cnepsuku.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163toyvgwid.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163uwazfrhi.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ewlnyesy.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163jknzrekq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163daqbxwax.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163yaozbqxf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163nrlbhuzx.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163hzulyuoz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163bddbuayd.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163lqepqtag.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163zzswvsdy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ycuvpcbe.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kjydrtjs.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163fqfxpkly.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163lcraadbo.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163mzhgacze.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ecjqxqjq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ruhudrdz.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163teapdjvd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hkqheokk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163oaxhuiye.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163sopbzcig.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163avpptdpp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163hpucqpfh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163sfplwrrn.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ppnraiwp.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163fzifblzn.html

================================================================================
来源：http://www.aibaodan.cn/163jhrwncxl.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163enxteope.html

================================================================================
来源：http://www.xuanzx.com/163lhtzlyda.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163fhdaaknc.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ykgnubka.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163smnyiknf.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163hburegzf.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ijcqlhpi.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163rigkgegg.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163mqilvvwt.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163tbeqqfia.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163rianhnyl.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163hjukskrj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163fjtsdvpe.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163mnvtughr.html


<!-- 参考信息 -->