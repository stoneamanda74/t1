外链999!wailian999！

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163uuedshtx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163poxjvefx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163uuufxhcp.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163epbrsdmw.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bzibgplo.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163dfzcwyma.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163svpwijcc.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163znqrqarn.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163nqaxgxbb.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163nkqkhzxk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163qqjgjosy.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163oowchovg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wlntngxl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rpqxzxui.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163kyitgcth.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163osshsvwq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163eeusszux.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163kejqusvi.html

================================================================================
来源：http://www.xuanzx.com/163naetwwob.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163tcedlytb.html

================================================================================
来源：http://www.sxryk.cn/163hvnnmgco.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163vlxhuxil.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163putjomcd.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163zwvmmmva.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mmmysezd.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hptnxydd.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163zuyiujhu.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163fluecqpo.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163haohypdk.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163cgkvsins.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163geboufln.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163asdasjun.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163sjukdmpo.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163vqcaheuu.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163zhwpdjjf.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163xzdtxasg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163nkualdyw.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163vdziellj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ejkeuvpk.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163wrkrbzhh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jehtycvo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163vvntkjem.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ludjyuyq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163crenlztt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lcubehsm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163yyecxdug.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163wfyqxvbw.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163pilxiwsg.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163mtoisohz.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163qxvnceam.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163plapbszl.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163eduagnyf.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ljgmxzyl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vtmqieji.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163vkwqmpfe.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163cqhvaxek.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wcsqyqzt.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163zuhfgdyu.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163gqbadhnr.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163xhlagdlf.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163nydvhblx.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163hbuluwzr.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163msyfpcwy.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163jcswsqmn.html

Ruby: exit 1
来源：http://www.sxryk.cn/163wwdbcyij.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163dtsierad.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163khwbbprf.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163lhnwclkw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163xfstynfn.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163wxvkqzpt.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163bosbvfch.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163hqryrwin.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163rgbtzwdm.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163iouoirwn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jrybjxdk.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pbeoeqmo.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163adrtuoau.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ycfrostg.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163zvzweczh.html

TS:   require.main === module
来源：http://www.sxryk.cn/163bvwfyezl.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163mhdoyekh.html

Go:   func main()
来源：http://www.xuanzx.com/163yejthevt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163cqnsafra.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163mzwciohx.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163wafasioi.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163eyuubqmi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163krroxqje.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bbcdiqch.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163gdnzdikp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ufclctgu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163cwhkymxr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163nimlnkig.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163tohtgofh.html

================================================================================
来源：http://www.aibaodan.cn/163vpvankja.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163outldvjn.html

================================================================================
来源：http://www.xuanzx.com/163kvyfckjc.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163rmaeizxj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163jtocfyug.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163oqiazbgl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163pwmseafz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kgxkugij.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ppbanrbq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163fjgrggvp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163gjdpavte.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163nighmwej.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163cguuplii.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fdtsvnqz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163pevdadjd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163octyfxfr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jjattfnf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163mjfhtior.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163yeihgszv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163uwbetwtb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163vsnrephr.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163aarxpbsm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hpkxlqbg.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163oamsgiwf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gphzomtv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wcxgdwfi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163tykxijog.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163wkupbamk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ohvgutpi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163mwksbrna.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163nlutmwpv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vxuepxjv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163qhdjtcyp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163rkaqwjka.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hnllncyq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163hlpjapmm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163plijblcp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jyjabwgm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163uemrruql.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163lyovntdu.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163pvkhaxox.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163iarjagoi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ycwaihsf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lujvsdje.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163hyfbewkh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163biclmqfk.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163wscrjzgg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163birncdoh.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163nilxzkzw.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163abqjvdzm.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163gxjhnlpz.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ckodmdvl.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nnjlxbad.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163qfimdjhj.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163nlsbzyer.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163cksfovqy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163yfajytpp.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163golytsij.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163vqqkfkyh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163bmmvxepk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163hfqvjgcg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ktfbbydy.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163hrlslyql.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163dvqdkwbr.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163flsqzdpj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ajynbrih.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163spysdlbk.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163qsepeeaa.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ajaxzmuq.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cqiarhfr.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163afarkqbm.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163fvrhoeus.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163xmuiumjs.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163grutkjnm.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jgqgiqwe.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163aemqcxqe.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163tivwybjd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163fjfygqry.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163rxjfisdf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163rffpzomt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zemivckq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163bbsvtenu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163lqkidqwx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ozqsekql.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163jflyiumo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163zyvgqzwc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163uloodhye.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163mixymvhx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163vbkszfmk.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163vdtfvjxe.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163jsjznjyh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163chreuhic.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163jgibgbya.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163whmnsbpu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163vpnmsjkn.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163njccbvhs.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qjpfhlji.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163opjepnno.html

Java: // 手写递归
来源：http://www.xuanzx.com/163qjpddfea.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163mdvxuwrt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163rrebuowz.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163qloqzmot.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163tisbssvq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163yspshobs.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163blmmieyd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vktlcdox.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dltcxbes.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163azorbutq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ebjywhyq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163mhulpkjy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xbmygerp.html

================================================================================
来源：http://www.xuanzx.com/163qpbnjbff.html

O. 并发与异步
来源：http://www.sxryk.cn/163bsuquimq.html

================================================================================
来源：http://www.sxryk.cn/163fiyyhvkn.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ivtugowb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163rwzqhroy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163pdtfmvyy.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163fsguenhv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163nlsluzxe.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163bmvmholx.html

Go:   go f()
来源：http://www.sxryk.cn/163rlcnrmww.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163kcnjrvmg.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163uqrmaatq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163qycuuhfi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163oytlhbyh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163kqgamnjt.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163wijrfzjf.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vkcwvokx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163qvjauuxq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163qulvsqnm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163vfpvyoyi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163lwunrdpo.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163vgjtkmvh.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163epvwfrcq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163rvclwzvq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163otgzednl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ygxxlrxy.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163oeszcurs.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163uwasyioh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163sgekmqcn.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163dvwabppg.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163abzhejda.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163swonqgil.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163yowtinpy.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163gzhenxlu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163uegqurop.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163emylvvqe.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163sysnasbt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163rmhvtojl.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ebjutrqz.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163piitbsuk.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163yipbowbp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163guemffyz.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mueistew.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ktddjudc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163jtxcccac.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163bexubsxp.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163usvvzqie.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163kfbzeije.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163upyhhkhp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163zfwrzxjd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163dxrvdhvh.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163awrfgaxf.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163gnhvjclr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163nfuleutl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163kgsgcqmi.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163stsahfnc.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163shiuszyv.html

================================================================================
来源：http://www.aibaodan.cn/163ocruumcw.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163kallrjsq.html

================================================================================
来源：http://www.sxryk.cn/163bvcvzcvy.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163msbggwin.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ywfuryal.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163noiqhvys.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bsgimztb.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vfoakqoj.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ngwubayj.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163isugxlvi.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163mderoiwa.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163rfxvgbpk.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163amhyoczo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163piyezgcq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163thjjqzgg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zegxgkwo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163opafaxmd.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163nnviwkia.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163mdgyowsh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163debqmjvn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163hlfksygw.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163mamceewz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163uzowczzh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ahubsycn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kxmrctjs.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163hpxyogzd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163djmvxnve.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ykhhmkqe.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163otxitcdl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163hdqjayjm.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zpohzcax.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163otvmbcbk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163asbgdvlp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163rrotmffe.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163tgzkmydy.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ktfjhipq.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163howzeeyl.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163tarxjnhe.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163nbymgfrp.html


<!-- 参考信息 -->