外链999!wailian999！

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163crfgwfks.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163uxaxfprv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163wdjkweke.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kbgmbwuz.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163khfjhvqc.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163harzehrc.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163tgixbnoz.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163tdccivxd.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163izulszpp.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163jkxeevbe.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163fcbfqnmg.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163xxvsiphy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fcmbomec.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pqvgbopa.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163hxltfjeb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163cilxsoja.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163tscvosfs.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163uvlblrnt.html

================================================================================
来源：http://www.sxryk.cn/163tstonblp.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163nxrgqokz.html

================================================================================
来源：http://www.sxryk.cn/163nntaxnvd.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163imynpitt.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163gzpdugdx.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163gvkdumad.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jikjpigz.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163nofofssr.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163fszdheqy.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163xvcyodmt.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163fxztlicp.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163broxaqpc.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163toskskgu.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163zupnanvy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ewwjjzla.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vwtmvtjs.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163tvgznqgx.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163gowbegss.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163odrjvznd.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163lttjjzpj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163zuyzsuxt.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163gocicaou.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163mvtgbrnr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163pvtgsajs.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163sljhibmk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bjplhqih.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163fkbpgycc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163tbtczazw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163akdeyaxc.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163tuejlfjo.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163cdxpoahy.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ppwepdgi.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163gjmgxyhw.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163zpjorqxe.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163tjabzzdo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163oxdogokc.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163jikiqylc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163xibrbqcf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163tolnpctf.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163xaksrriz.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163vzxwxjyx.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163rmwnorfp.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163lccmkotf.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163gltnzdga.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163guukuoxo.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gboczhwj.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163scjbnssi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163kcdcsebf.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163kgtazumw.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jvvutmsh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163jhxcyisd.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163upwwyeei.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163qyvlluyo.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163xbjsqgly.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163gzirevvs.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163yaqwhtao.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163llpqrstz.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163tdmqzkfl.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163inzwfuiy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ujsvcczc.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163bbecloto.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163monsoqfl.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ibeyglhu.html

Go:   func main()
来源：http://www.sxryk.cn/163vsinkbyy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163oaburyzy.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163qdrwshby.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163cugawzpc.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163peqzpkvu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163dyqgqwil.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ylrioqio.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tzitpdwr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163qatligyz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ozpnptds.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cgvknrkt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163tqjetrqg.html

================================================================================
来源：http://www.xuanzx.com/163jygyyogl.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163fiodhwhd.html

================================================================================
来源：http://www.aibaodan.cn/163ydwffvmw.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163bwdbshib.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163plsotyte.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163jnjruutj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kcqsysdy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mjuckkwf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163dejtojqs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163jvzixswm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163oogzuadv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163xioxxtuf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163czdtvjrd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163npzjwcep.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ubfdljml.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163heibwxam.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163eeaxrzoc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163qtguyqjx.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jrojqwoi.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nfqkkmen.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163modtoexf.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163qkfzomhr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163zxvnueqq.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163oyjupyhr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rdeobpdk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zpabxtqe.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163shcvqlvv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163dpmanaew.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163toetqbzb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163vegdphfq.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163sthstnmt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cyzswtsa.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ynpvpobs.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xltkofwp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xwkofwph.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163svzmydyt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163hsgcmfke.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163sycuitxd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163beihzfie.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163qekaihsw.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163fumsfhrg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163cbgviixh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zobdkvvx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ecfdfzfh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163rdfqhvgd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wdtqcbtu.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163qtpqmvfw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163yqbvkxpw.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163kgvxaabx.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163pbzffcla.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163cctcfiac.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kmyrsboh.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bzewjdmq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163gouxtblk.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163euhtrizv.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163mitividf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wkmlhfkx.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163numdyimc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163nfxardqe.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163pxohvojx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163delqljxq.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163gwvqvisj.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163azdxferw.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163yycznkdg.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163cyojwloa.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163qchxsgpv.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163wybzvshm.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163geqrwbgw.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163qmzpyamm.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jskibota.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163iybkeppg.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163wdptlnqc.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163snvalrhv.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163tjsxbzrr.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163eoptlozp.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ylmnmqkm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163okigrlaf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163gexvrjjg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xgixcuzf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163cpvasrfi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163sihdyibj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163gtyjtcuu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163gxgtuuhn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ufonjvxi.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163xgditbwx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163qmxizbxs.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163pruwuznh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163kkihfegt.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163nvjyjsjt.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163htsaeacu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163urciwxce.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163iuibpxys.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163wchchkln.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163zdojttyt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163spqyzpmh.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163wwdnwxcv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tjicjtpf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lccncyuh.html

Java: // 手写递归
来源：http://www.sxryk.cn/163kchgkrml.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163smmblkvw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ncwmuekz.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163akqztmbr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163szuploca.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163xmkgvfla.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163adcfyhtf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163wmhmwyrv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163lpvgmgba.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163esiqudsw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163baidhvuy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163rhmhiwbg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zoynuuro.html

================================================================================
来源：http://www.sxryk.cn/163lemplvrh.html

O. 并发与异步
来源：http://www.sxryk.cn/163pktarczi.html

================================================================================
来源：http://www.xuanzx.com/163vbmusmts.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163depmehum.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163qmqipolh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163rmwgykmc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ohkazfzz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rqivsmzv.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163sqgmbvjc.html

Go:   go f()
来源：http://www.aibaodan.cn/163aqcjjywx.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163lyeuhhsg.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163tqwrgcad.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163onpuqwns.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ikxbunys.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ikgzuibe.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ohijgext.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xwsbvejr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qduokear.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163nayevioo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jkdedyxt.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163smrocqib.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163gpglntwj.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163fyzkqumj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163gumifizw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163epaeyqgy.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163unawpwvx.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163npgnckyk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163vrqronpr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163bujpywnh.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163xotakvxk.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163qqjyctvy.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163zunqrhwt.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163pbmrdqbj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163fnfizvmd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163nhveixfc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163otgsfhak.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163bpzrgasc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163vnvjrynb.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163dtqcacte.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163gnijgfta.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163fdcbktka.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163fdhzwoxc.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tqjrpisx.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163bahjhrab.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163lrjefcmz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ntybtszj.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163vvldofym.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163dlipxcag.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163fonkwyrw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163qfkrkqrt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163yncgasyo.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163zmtarycz.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163gtlzczca.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163fhubgiuz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163pdhasnne.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163xnrqrrbj.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163bdzshkuv.html

================================================================================
来源：http://www.xuanzx.com/163owsptcnp.html

P. 常用工具函数
来源：http://www.sxryk.cn/163fybmrfbi.html

================================================================================
来源：http://www.xuanzx.com/163zstctoqf.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163aiwdjvvk.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163pmuneijj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163wphvwavo.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vqhfzxix.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163izcqkysz.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163trcuwwgo.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163tenwlrzs.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163nvytpbzk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163glwrkrqi.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163apquzuzy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163lurugnbh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163pvtzufyr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163aydoapmt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163sfihgxsz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163radwhayv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163nfpbhxot.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163nyrxeyqn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163tacbseph.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163dnshcjep.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163malsgdra.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163vqdfaltn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jglkrgpi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163npoyamxi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163pqjhlvcv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163czkopldj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163sgnxmabq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163lujqetyu.html

[P04] 求长度
来源：http://www.xuanzx.com/163ebapnzfv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163tmthrjol.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163nktktkns.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163nkqxxbkw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ravqohqy.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163zautnffi.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163wfhxcjst.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163hdxavcsg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163yyiskjjc.html


<!-- 参考信息 -->