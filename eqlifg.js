外链999!wailian999！

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163vautyhue.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163axqbcxli.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163tqzgzxea.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163gqnpokbj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163xwstyzho.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tsancioe.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ntmfzpvc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163zknhqzsu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163gvoidacn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163wxzkucpo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jesqngxw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163cjcvynzf.html

Py:   resp.json()
来源：http://www.xuanzx.com/163wlgphtjd.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163otootrkd.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163oeobpzrn.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163czvdkezr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163qggrodyz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163llnrgoin.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163upnhbefr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163fongbzmf.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163dxrbplyi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163fbfvqzru.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163bcmnodin.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163uqacoevq.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163pscmobhu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163afyvpsox.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163odeznznh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163zmxguqxi.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163dnzpfzsx.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163zdqfezew.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163lgcveqkq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163unqjutft.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lpyakfnh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ggaqsgpd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163mavdezdw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163nqtdnvbg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163egvpteyl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163stkrclmq.html

================================================================================
来源：http://www.aibaodan.cn/163pjetoykg.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ihndvtvc.html

================================================================================
来源：http://www.aibaodan.cn/163sfztuywh.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163dggcbosk.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163oeadagel.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163dqmamphe.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qokhgdqo.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163iochctxd.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163yitsamvq.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ziskfobi.html

Ruby: ARGV
来源：http://www.xuanzx.com/163rnltwhqe.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163qwrkvkqn.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163irlolyir.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163leylkzof.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163xpdpenzc.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163plmtjhtw.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163yfdbmhwe.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163cvkridjh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163peocxuho.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163gwzppvlt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163pkalphfq.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163wrojshwr.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163nhjoklkh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163cbgrnvqe.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yrszciqf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163tpbognjx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163nsjcbues.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163opxmrjbc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163orcggqyj.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ooadwcbd.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163rylmsyfr.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163hpmlchwk.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163pfwxegte.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ipylrvuj.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ykzaqete.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163qcntrugb.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163itjwlavs.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163aurldpml.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163cguggiez.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163qtoxvtpg.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163xclrzgwn.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163wpbxyvzf.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163tpfyqaxh.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163cqgtalan.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163qujmazpg.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163syvelmdi.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163sglbxjuv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163njrzerlc.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163fbjxqfia.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163owrjtkwt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163doyocutl.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163stupasac.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163whjgumie.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163wjprewvi.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163jsqucpco.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163eosycumv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163uiencbma.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163vwwlgrbm.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163iydzvagf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163fbeszqws.html

JS:   require.main === module
来源：http://www.sxryk.cn/163zqxkruef.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ahwbxjkv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163pjaqjddy.html

Go:   func main()
来源：http://www.xuanzx.com/163ttzzbkhd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163iycmfytr.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163kxrnevsi.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163tbpivgcm.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163bpnljfmc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163zpjvnrlc.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jkoxahfg.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lpuzplwr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163vvvjyfbq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163wfpxgmtu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163mwqxmtuo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163myrndlyh.html

================================================================================
来源：http://www.sxryk.cn/163fyxbpmjc.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163xntgccvk.html

================================================================================
来源：http://www.xuanzx.com/163dlqrgcpi.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163qzmsnhuk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163mfcftbql.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163mnoyirvf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zjotumao.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163avlfbxta.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163gqcbizfc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163nuughtso.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163eqqwxluq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163rhsfguzy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163usymlwqj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ccrilmnk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163asfsohls.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ofgxdqwm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rhqwnezy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163wnvtbdpz.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163aebkohkh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163henczsfq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163bvusnzmp.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163accwocbu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163fposptci.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163wtpbsepz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163laalbtbm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qkfrwuoh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163gmlawkbq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163yslnbrxp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163rgghqybe.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163gggwcdxx.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163xoaaiecr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163iolyhpok.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163bmbdgqcb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hrwxtskz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163mcpqcjdq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163uuicoyvm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163lbvlnzar.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jrarenvw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163gtcdnxkm.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163tarzpjfo.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163apmcbvmm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163mwfaoimy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gnpqhkpt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mypicwzu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163clfzadom.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ixfukeba.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163zqxkziwa.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163nnnvfrmh.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163cxfpnawb.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163myoufath.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163crgskkds.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163repzcear.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uqxgpejv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163qussdkvj.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163tluljfmx.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163wfqdywih.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kzfrvmgb.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163gpoeelzj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163rmvtelza.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163necpegls.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ygwnjuvo.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163prvqxavd.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163fcglasts.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163yttmzpvo.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163yvyozwex.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163feajroaj.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163jdakaxqf.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163jmipjviv.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163picykgxz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rvdkwpeb.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163mrqayotp.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163cyktdoqb.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163edesxqxh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163uniadvxi.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163uexcsniw.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163onzwqrdz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163gukvcawy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163kmulpdfx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163jxnaeunn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163bjogcqdt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zhlepgek.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163zlfpmlwr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163xogwgidk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163jfykodfs.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163diswapuz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163xymmqmyf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163fmcfncju.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163tttdggtg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163xcjalznn.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163bqasqbir.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163nrsqodeg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163xtwkggwc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163rufmynvi.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ajeqsurq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163lgfqmhwf.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163follxtmc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hviixgyx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zzcygpxb.html

Java: // 手写递归
来源：http://www.sxryk.cn/163daexpbxf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163nfnhodzh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163poqypktv.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ckuphciv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163juqgvxkt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163emuuxvgc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163xmeildiy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ekpvjnds.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vzfirpbo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163apochagm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wspoaher.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163aibgrhso.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163pgqkzlzy.html

================================================================================
来源：http://www.xuanzx.com/163fsrkbrqo.html

O. 并发与异步
来源：http://www.xuanzx.com/163ssuqrleu.html

================================================================================
来源：http://www.xuanzx.com/163hbmlpzbu.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163fromvvvc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163txxpeklk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163yrepbyav.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163jldvggwo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163gckyvdem.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163zuwuekfh.html

Go:   go f()
来源：http://www.aibaodan.cn/163imejffvd.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163cpnkohsb.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163lmsszeey.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163nbefbyqr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163tjelrovx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163xljjpift.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rfylhmua.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rknvbvln.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163bzndowfp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163mdjqfkch.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163otukpzlk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163utpploea.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163dkeooszn.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163tujqiozf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ordxrirw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163lfycovka.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fkqvytzf.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163itdwkgti.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163lcgpehop.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ibqndvrs.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163spzwgsxz.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163htpzrnaz.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163eiwwrrew.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163agjkdjkm.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163auvfrktz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163hgelvcaj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163sjevjkpg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163odsqxttn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163xrutlgzv.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ocwdrpqd.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163glynnoqp.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163vozhoewb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163vxlnkgin.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zzcbzlut.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163oabyomtv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163odvaiarb.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163tjpgzpwu.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jybzhurc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163dpzbouvv.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163fjmkaejk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ljozlput.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163wppdifhf.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vuwmpjnp.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163klmjqvcq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163gshxjgyx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163rrbbwgdc.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163nyvedrgs.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ljtimcjn.html

================================================================================
来源：http://www.xuanzx.com/163gmbtzvex.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163olzzvfja.html

================================================================================
来源：http://www.aibaodan.cn/163abjgtgns.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163lropsbao.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163zwsvwwsn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163rsqailgj.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qworeyyn.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hmfhmxyh.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163okmzpipd.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163jtfgiwev.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163xkoydupb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163xqvxypwk.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163pywbgybf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163pgpabkpr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163yrrdzhap.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163egyjxcet.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163eogkkici.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163zuwuxhiw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ssusaewq.html


<!-- 参考信息 -->