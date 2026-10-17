外链999!wailian999！

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163bzlaegqp.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163edcnhfwe.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163qsdgwuwh.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163soalbnix.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xkgiziro.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163agsllvlo.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ajcvpmhi.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ztqgjpbm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ebtcpobz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ksnmynzx.html

================================================================================
来源：http://www.aibaodan.cn/163eyewnerv.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163hdgeddjt.html

================================================================================
来源：http://www.xuanzx.com/163uzockhcf.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163vternxeg.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163vwhuzibw.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163wjwrleqy.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163yudapkzg.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zqsehhua.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163qhsysntz.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163hvqwddyh.html

Ruby: ARGV
来源：http://www.sxryk.cn/163pvgamjqe.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163imhpyqje.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163gqoezogv.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163fdgtnzrf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163wnisdois.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163cgruahnk.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163avkquwpf.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163hftzopnw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163wplbnfed.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163vxpfejxt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163tosgkagf.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163bjqsondk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163vsypudme.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ixezayna.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163deklvibc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nyecykba.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163pzwuwyby.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163spxuhsfv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163avhdqrjz.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ghbicrcu.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163gipbsyzg.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163gvsojhjm.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ggmyaqfu.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163maetsicx.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163qjpgcwnb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ixdpuvfv.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163lpejqjkt.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163nmojjone.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wwzniozu.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163zhbwjkbp.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ewqrspox.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163vjoowgws.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ixzxrlzi.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163jgpsihpk.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163siyxjnkh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163vxoobjjb.html

Ruby: exit 1
来源：http://www.xuanzx.com/163dtpxceij.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163fhgicuvz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163rzdbxpvf.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163robrwbto.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ahwtpzqx.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qtjgzxpe.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163okgsdkwq.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163rywkyekd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163dwwjgihp.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163phzhmdoc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163wbwskqqn.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163awmkqimo.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163svuxlazo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163zqndwoui.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163clogqwjl.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163kaiebltb.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163gbvyjbla.html

Go:   func main()
来源：http://www.sxryk.cn/163mypcnfan.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ouztvkci.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163zzxebtfv.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163cdjjylct.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163skxulodt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163yytfxbzz.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bqaxgklm.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lxtamjwu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163mxjuxibh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kpbkxrof.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cumfytaq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163lxmeleiw.html

================================================================================
来源：http://www.aibaodan.cn/163wotxdttw.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163hzhmpjgg.html

================================================================================
来源：http://www.sxryk.cn/163ozvjlfrf.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163gxzwioud.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163gagoxemt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163zobynzym.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zbjgwxyt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163gwemokfg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163whktwzuh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163bmrhwxzv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163imirqrgb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163fvervhzy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163kcvefffj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tinwjqdk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163tpuvtxau.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hmwkpbee.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163miyrdqkp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163zrgsqhkf.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163oysgvpkh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163uectpczm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163sklszfvv.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ikmgwbjn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163sxzboszn.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163kqduylpv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dbuadqet.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fbpdxlsm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163gspsemlc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ogchmjof.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163jftsevsl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163saaucviq.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163uhmmremu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tslyucco.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163rklxesth.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qylknfes.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163bfjnfyiy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163qklfftyk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163hqbvxokm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163otcpoypu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163lferbili.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163cwjbgzrl.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163tpsqmjjz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163zdkohoxz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mvspikpe.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163opjlipnc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163nmtcmrog.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163duqqdnuz.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163dtlmsmni.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163aohgpnsd.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163kmjotqje.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163nyvupfot.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163bjgyvnmd.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163qcfmzqpk.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vyrpgbdt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163aaknedtj.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163brvgqhuy.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163oewdymrq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163twmbwljo.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163gfmcamid.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163imkmxapb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163skgkymsi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ndwkdmgk.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163jqsmyiou.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163eqvdffly.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163fsemvcsc.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163fcfjnugm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163quvbzbnb.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163cpyxehje.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ijmbcpee.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163crlpyofw.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kkpjienj.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163khjujnfj.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163tqfxthof.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163tlmpqfrz.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163neocjnhz.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zbeekgdq.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163rndrufex.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163wrnaemug.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163evynvqao.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163nrqmkvbw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163qtrmhxmt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163rcqgerdv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163uollxrag.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ijthiugn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163yscmarwb.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163xwkkisyp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ealkstpj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163jajleait.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163yjewirqt.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ewutfcin.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163qlxuxyed.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163tikwsgzh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163aakpzexf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ilzcgols.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163pyeswbmv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163szctopjb.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ssseifbm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gngpoofm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kjescota.html

Java: // 手写递归
来源：http://www.sxryk.cn/163fuvcysrw.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163rphcfces.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163octwnvnz.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163jtzllwmi.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163hhyopmfy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163gphvaxlh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163unjxvnbm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163tprkhgfh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vpxfavwd.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163afhrchul.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163xyfwizog.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163tpfkmntq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rkiaxibg.html

================================================================================
来源：http://www.aibaodan.cn/163nprcaadv.html

O. 并发与异步
来源：http://www.aibaodan.cn/163dbalbxnc.html

================================================================================
来源：http://www.xuanzx.com/163rsqfewmn.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163cvmndtyh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163rtdbxrbn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163vzaifxra.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163rxugbdxl.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163onzkpevs.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163afdafhjb.html

Go:   go f()
来源：http://www.xuanzx.com/163aeggipjf.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163tzdyfiji.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163omtajebd.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163boeqlfoj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163brrexune.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163dvehakge.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163piqmzebe.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163odwalxln.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163jipgyypq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163rfnhgdgg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163whyohcah.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163jusucrdy.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163nyherxbr.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ozzvdstt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163uicpxlxi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163sxlonrdx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fmwjgmmj.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163hsdztzep.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163myubpmdt.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163dvnyupfx.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163gzhxxbrs.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163riadlvlk.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163hlpatybk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163znyuzxzw.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163elkqvwwu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163gznbqksb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163uanldsii.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163vbgixysi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163dfiuxcsx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163wbybgzdn.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ssxfaywb.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163sfjpochi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163bumttixu.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vfivzqju.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163txajalnd.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163vekiiper.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163znhureaz.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163zsglzhjy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163fmfjbhgj.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163rfvbrdgh.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163growxybc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163rgzjakry.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rpynpbgr.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163zlggdgff.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163jwaoyfhe.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163vqsffzri.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163zymlkefd.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163zqjfxqlb.html

================================================================================
来源：http://www.xuanzx.com/163hoyiwlcx.html

P. 常用工具函数
来源：http://www.sxryk.cn/163zjdkuaiz.html

================================================================================
来源：http://www.xuanzx.com/163gdkgtbvt.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163aupbmwgq.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163vtetzdha.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163gntnztjd.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163chthbycv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163sdicaxun.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163kikwfvnu.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163vzpaajuz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ahpsneek.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163zkwbzfgl.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163onbpfbmm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163fydcwcey.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163yulxhpav.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163kpfklays.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163nbhgglqa.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163evtxwnqk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163znbpmkbh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163agibhasf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163hodgnvds.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163qqomeaig.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163oxbivsmq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163petuwgkq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163zqlkmjyj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nvxkvwsb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163appzgcbz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163rwntaalo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163mhyspehk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163sifwzlif.html

[P04] 求长度
来源：http://www.aibaodan.cn/163fflhcpow.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163ofhaxzan.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rjvbzzrq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ztzrwhos.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163prxryduq.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163otmdpiil.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163bkympbdl.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163lolstxnc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163kzfcjqkx.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163reijenri.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163bzgmzudj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163bowuuofm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163bojqwiol.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163syatubuu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163uhdbmvna.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163gklvvnjk.html

Ruby: a == b
来源：http://www.xuanzx.com/163qtavcltc.html


<!-- 参考信息 -->