外链999!wailian999！

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163evecyqoz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163mozkgsst.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163mtpvcapi.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163iimqkcdw.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bxnlqqiq.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163rkckqpgs.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163fnonaopz.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163pxvhyeug.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163kfjkftsv.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163irbjtlrm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163hlvxmdzh.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163aimubclj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ixvmatil.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wdvhqzhx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fjcrzyju.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163dxsmsues.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ptnxhuwk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163jykkhfhj.html

================================================================================
来源：http://www.aibaodan.cn/163atdlzqqa.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163lnktxigd.html

================================================================================
来源：http://www.sxryk.cn/163cksvyvgg.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163whmosapi.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163rdkhljhd.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163lmqgrjbq.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ggrjhbat.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163lrxtwspz.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163wqwzqvho.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xutmwfdw.html

Ruby: ARGV
来源：http://www.xuanzx.com/163jvedbcvo.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163gyxshdub.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163qdupunka.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ppfxvvav.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163cjztaceg.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163gkajxmdb.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163brnebptd.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163skaneggp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163tqsnveci.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163gqfurtkz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163fwtvarxv.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163fxupatiy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163dbjgespq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163hudbgpwj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hccmoctx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fgmlgkny.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163naibopeo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163iaeldujw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jpdzdcdt.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163wkkjbhlk.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163mfzcgnqa.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163pfsytvaq.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163xbbbqjvk.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163zutengyz.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163gtpswitn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163kdhmpnsj.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163xzyneykh.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163iuvzszxu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163obcxacxg.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163sfoiqvbc.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163bthhhkic.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163hyvgofek.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163hyribxfb.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163cuszgqnb.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163pwhmkkay.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163btlanrfm.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163qspnvgcu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xrnpwuud.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163shjepbro.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fjddtlno.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163tkynwwnh.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163mtfnfvwj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163cxbjpzat.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ainwqiyi.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163yawrrnwz.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163yugoexzp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ogmxrjiy.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ieqetdrm.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163fetqcefr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163zqwkgbxe.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163nhxilmlw.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163zffzllci.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163bhfnbemo.html

Go:   func main()
来源：http://www.aibaodan.cn/163ydjtfvgp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163mutayvpe.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163muwdvtmc.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163hkvfnhxn.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163zcdhtrin.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163pvgpkpmj.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163fckjymqe.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163rutfedwo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163smbswvuv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163fflyslin.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163gcmksvxk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163asssjnqk.html

================================================================================
来源：http://www.aibaodan.cn/163znarkdso.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163kftnxvht.html

================================================================================
来源：http://www.sxryk.cn/163ehutyrbj.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163fnujdmkk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163loyehqmy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163nsoyybcr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163utjuzgaz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163aembkcqu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ehzzfmpd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163flvrwddk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163glirwlcm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163fzftwtmp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163nkdynvht.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163koiqqglr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163rdjeywgi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ctichcdq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vruxdobp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163potyjisw.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163jhkhxzkn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163pntzwing.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ldjojysh.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163qcalrqjn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163zcnurnzi.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163zkglibot.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ndxvrgzp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zlgjkare.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163enyxcpmz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163nfcbcfst.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ekffedsw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163gzxxtjln.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163comrychu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zpjxmzuj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163lybsjvda.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163psokwpts.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163rsntyxxk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163nfrhrntl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163idaqapme.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zggirwbp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163mlqiiozl.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163hgcoqcel.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163imznvpyn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163okvzreww.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163uqtaddkk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163tcauurfi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163pwosafro.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163mapnkckc.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163tjeszmys.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163tmozerqb.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163hgyzfnbd.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163dllhnwyg.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163owdlhbuu.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163apdxfard.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ftamiani.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163vieklzmz.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163qvpaaegf.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rzlbxpqb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qbgtiaxh.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163nvqxljyj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ddeawdbp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163rrabsyde.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163sukzuidu.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ynglspte.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163hdbaneji.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163jvaxxatg.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163rqanjkkx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ijqmuypw.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163hroypjee.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163vhaxxkuw.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163nrrbvzsm.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163nvrpydkx.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tyrmasru.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qvamcvmv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163bbsesfyo.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163gtjrwafm.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163euxiqqna.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163qcrqwkam.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163wwkxrojd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ffczczna.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163fyogpaec.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163agujtujq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163lyobcpjf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163gpbkjcsm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163pyugrlgz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163oirohtcs.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163cckgvfmo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163jhmznkrq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163csvgwags.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163igvwysnn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ebdoerwc.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163gvybayzd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163pilezgqi.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ikmczpvr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ezqbayyd.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ktoyqlgv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163alpkzfhc.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ocwpyxdt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163esdvzzrj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bgigkbhn.html

Java: // 手写递归
来源：http://www.xuanzx.com/163dcchcyxq.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163fyjbwtxw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163iudixgpq.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ltvtzczh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163zzvbheev.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163jpljhflr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163xbmxnoxt.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qohxanfl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163oszhqdeg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163risaxszx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163qkbzkarv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163eeslrmpz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cplpwtrs.html

================================================================================
来源：http://www.sxryk.cn/163xkbrhpbb.html

O. 并发与异步
来源：http://www.xuanzx.com/163mwnoxcoj.html

================================================================================
来源：http://www.xuanzx.com/163rozzxtuk.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163dqqespmo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163cqwvgctc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163cncejlfd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163scououuq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hishxmyp.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163htxtvgkp.html

Go:   go f()
来源：http://www.sxryk.cn/163atoscunh.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163dznukgri.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163oreqllvt.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ajxyefuh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163avxghuen.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xsxdvrzp.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163uuxeqjub.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hzhapbsx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163rrvlbzrm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163kpgozhba.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163wtxgihyv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163mstbdapi.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163oxzlpjai.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ogmrfove.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163udhteukk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ewkchqpk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nmythkhl.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163mpjfefyb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163zlsshzwl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163cjxtouhj.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163pxwyjnrw.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163holadhfb.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163edfezktq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163sxkxqgup.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ogwpcvky.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163lvzynnrm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163qdsqvzti.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163fglbufrg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163qmtcyldh.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163aqemgxfm.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163gzsvxzfa.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163uxvsimfi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163nlcblpmq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163rjycyizx.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163unstewsx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163jifbfuqf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163qbuqgyeo.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163nqyrngts.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163iyeyjwyn.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163wenlqxhr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163yejsjkkg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163gxsrofyi.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ynygiuvh.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163drcynmog.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ndrlxjia.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163xmllnnmb.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163kpdjwqup.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163kcdpipua.html

================================================================================
来源：http://www.xuanzx.com/163osdqrjkv.html

P. 常用工具函数
来源：http://www.xuanzx.com/163azgpszjm.html

================================================================================
来源：http://www.xuanzx.com/163ffydmuyu.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163lmtyocoj.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ktzwpkvx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163exgrnsyr.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163uoiwqgey.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wruusjkp.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163wzyhtufd.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163qoltldke.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163vrvhujqf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163mguckgzc.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163fmtfteni.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163xsgsectx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163yiieyyvf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163rdhgnsna.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163anypaezv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163wapzkxzg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163grjkvdqz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163zvlkkntv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163wkyclhmb.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163iqlhdpqs.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163hgkccaws.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163xpjmozkv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163athiaqff.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163afhttriz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163zzpfynyo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ihnzvbqb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163jtdbyxxd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163knyftwfa.html

[P04] 求长度
来源：http://www.xuanzx.com/163htpnuyis.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163tntusclh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163infcsjay.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163utcgvlir.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wbvkyrki.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ownqpcdk.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163mwkkicny.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163puieehaf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ptmmuujl.html


<!-- 参考信息 -->