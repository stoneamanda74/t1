外链999!wailian999！

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vyempnvx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163llcbkfsq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163yckzcvss.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163lrqcmjjp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hoztsrmg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163inyvnhol.html

================================================================================
来源：http://www.aibaodan.cn/163hlvdejfr.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ahvufqck.html

================================================================================
来源：http://www.sxryk.cn/163tfovacan.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163syxmsyuo.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163pxlitlji.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163bpaezzmc.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xwhlsyab.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163clgqzufh.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163cymrvzer.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163atmbbdng.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ibskexct.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163jlalutbe.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ftahkhid.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ojbtwkbq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163wisjkshi.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ojazopkq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163argkszgd.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163kqqgdeps.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163svbxryga.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163jntnakmf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163nskrghxh.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163ejczvubt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163earltkof.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163myhlwmfk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qjyvhyul.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mohjanko.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163qqjszfsk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ludhhxwz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163rmbrgcse.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163vbwdrtkd.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163eadipxqm.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163vhrkwgor.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163mrsaklen.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163tvxxbrfw.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163idmzxhcj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163hhuhhlxg.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163pskuodck.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163djrzpvto.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163gnjmkedz.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163noamyhip.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163gxrkqynt.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163tgctzqsk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163zbebxfjp.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163osdrgqjc.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vhxfgjbt.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163csnwebwu.html

Ruby: exit 1
来源：http://www.sxryk.cn/163hxncrrxu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163vmizqwkc.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163beybxmqh.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163gyemmwfw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163eybtagpc.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ccftvxjh.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163gzxaekdp.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163moewlvza.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163baayypas.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163pbqjqyhg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163crxvjwsh.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163lwkcuzrd.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163xwpegolx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ajlzmsph.html

JS:   require.main === module
来源：http://www.sxryk.cn/163zcblqvqg.html

TS:   require.main === module
来源：http://www.xuanzx.com/163rrxaovka.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163bpofxlia.html

Go:   func main()
来源：http://www.xuanzx.com/163hqwrjvfw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163unsbvzcs.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163dhkhqyfo.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163jknjotis.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163uvofkmau.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163crynwihk.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163asuhcunr.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163fkofsdpt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163viausunq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163nrmyjdyr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163caeaiqom.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163shhmsxwq.html

================================================================================
来源：http://www.aibaodan.cn/163uwctcoxe.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163tlzctjei.html

================================================================================
来源：http://www.xuanzx.com/163gxyznkdn.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163qgrxgnyg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163pzlytzoe.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163xkqdmuqz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qhdgneat.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163spcsvzsw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163iqeztwmx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163jyuoliml.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163evbfednt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163inxpaiaj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163lkghpceh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163abzboxch.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163krpmqpnz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hkrifulv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163zlvupjmx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163dwtklrkg.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163sdpsefsx.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163yxdthqmz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163vzxpyerh.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163avkmteje.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163uexfncnj.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163gamsolkk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163eaceqyrs.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163gdyzcrru.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163iptfvwah.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163mvxyjvex.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163sdunjnsh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ycgbdhjk.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ioyfsgse.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163weyybdkz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163egatwuto.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163whqdcrxe.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xndajzzw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ztspystf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163luuotszk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kkthcwho.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163oejcytzc.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163wiprzbfw.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163nthixlpb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163eioprjpi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ebrztces.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qephjfwf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163mujgumwn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163bnasnftu.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163hnppzvyz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163exabbkqs.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163yhpibzwq.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163hzwktygy.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163zljybemf.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163pxlqswus.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163mbagbawh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163sfkozuxx.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163rnhnlgku.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163tuytaqje.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qrwcumht.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163gaggtbvo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163spnundns.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163mpoweuxy.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163hcvxonrx.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163yclbsidp.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163kvygchrs.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163baeqnexd.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163moqnydzk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163mxjenooq.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163lzuynakp.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163edyoovhc.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ngbcagcc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yosixsvo.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uljlwtca.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163yvfvccsw.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163kopantdb.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163xytzpebz.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vqgtgsaj.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163xhifauok.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ddqqreii.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163zgmvxbrs.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163uptpvipr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163vymjdquq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163kuaokxkh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163mtprqulg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163gcaemmbf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163mdovnwun.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163iqnimwih.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163yxbfygjx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ohuoimrq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163gbwzgffj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163tjklbpgf.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163sdqxuqgt.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163altsqrxr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163lekkgzlv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163xxhfihqn.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ktixwblt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163yhinszno.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163qbghqiuq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jbxkpeur.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rvxpjslo.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163haniugtn.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163rrpncyrc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163pwvcelvc.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163dlryvlcl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163wbwlfvvv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163hsweoewe.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163jhlsujcf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bslcglsl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163gjyblehj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qmrvunqx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163tmysexlf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ysizrnww.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163frohrmgw.html

================================================================================
来源：http://www.aibaodan.cn/163uxsmjykt.html

O. 并发与异步
来源：http://www.aibaodan.cn/163bntrazxx.html

================================================================================
来源：http://www.aibaodan.cn/163pwmvtxno.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163vslokxvq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163fylkorbj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163fmuhvzxr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163jrltrjuv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ztkdzfnb.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163qtkrajyh.html

Go:   go f()
来源：http://www.xuanzx.com/163euppfthb.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163jvvubhhp.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163dnxsskkg.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163tatgmgtq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163lurkehos.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163dboyotiu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163nlhjnskd.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ubjmgrii.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163vfccjbko.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163zvitopyd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163gowbqjyd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163spswbcit.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163elnpcuyr.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163kjvfpqxx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163bvchpzyo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163hgjaveae.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163utqmdjpx.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163yqzzvrpf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ebgppzig.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163jvrnatkn.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163jfitjxqp.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163xogwxqix.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163igcxrgex.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163vrtvauvg.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163xyjhpmxn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163paqdljib.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163evuduqtm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163grosfiza.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163yqhpihvb.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163jjbltkgh.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ndppfxmh.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163fosvabzv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163iowabfod.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lfcrlbfk.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163rcfuboiu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163jcyffane.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163tfbqnkek.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ipbjiavr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163pggnpelf.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163uuzjbiss.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163xetagiql.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163lyycvuqz.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kjggkxmc.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163aetrzbqt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ovgzllrs.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163mmipmerz.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163rkdflzqr.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163brqwctzj.html

================================================================================
来源：http://www.xuanzx.com/163xdoyaqxc.html

P. 常用工具函数
来源：http://www.xuanzx.com/163eoameais.html

================================================================================
来源：http://www.aibaodan.cn/163agcgzbzc.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ednowizh.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ipmzmygo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163oclpsizk.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bhuifylm.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163kimzjguy.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ncvthxtu.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hawepshs.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163thycphey.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163kjkdxkdq.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163mnhngdaw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163cyhxescp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163tsebpwcq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163awtwlzmn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163anazrttx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163drdebjcu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163yicdilwd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163rnxxtpuj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163olwkkhcd.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163mjbooeuz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ebtmuxid.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163tcbnuqdj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xowqaeph.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ctdqrcju.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163evdiocwb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163zgghuwus.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163aplzkcir.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163iwajglpk.html

[P04] 求长度
来源：http://www.sxryk.cn/163vnpkctwu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163qbzqvavl.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163cwqmgpen.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hriocebh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ojhjfqet.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163aggshpra.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163xihhitwk.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163cqoljyda.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163saynknyb.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163dvphwstf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163xrdwqjlv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163vdakfegk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163lbzwcsoz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wzjkoeig.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163imcilwki.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163rjjelrqk.html

Ruby: a == b
来源：http://www.sxryk.cn/163vcnbfxcd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163cmkwpabw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163aijcqgbd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163auexzmln.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163rxcljhhr.html


<!-- 参考信息 -->