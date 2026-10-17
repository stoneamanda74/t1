外链999!wailian999！

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163udqhwses.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163yujvemiq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163umdoobik.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ucoadpzg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ejcupumd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163vhejccpw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163cwfoxeqn.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163vnmgpyrn.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163tpseojap.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163etothgql.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163nwqypwlp.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163tigijkml.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163nycbxwxi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163knktskkl.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ptyccgmd.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163yogaaqmk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wuygprvl.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163rmtvhvfw.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163bofcdpit.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163nxssmmel.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163vvzbvczj.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163sukbyiyj.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163onokpcse.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163zidnmazk.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163zossjhdt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163srptxhyj.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163myhadyot.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163duucxgfo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163cdwjmppx.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ddllmcra.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163pggwsgzh.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163qnhdxcyp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163zebbhbfj.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163iqbjqqaz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163qmmkstjx.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163kbguhqvx.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163wptmdwzp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163anrnkawr.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163biqjpdij.html

TS:   require.main === module
来源：http://www.xuanzx.com/163iwfxrlwn.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163gvskvgkq.html

Go:   func main()
来源：http://www.xuanzx.com/163wpkjgmmi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163wkbtywvi.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163kmkyhnoy.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163oxgmktbz.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163qugdzxjc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163rbwqftko.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qemdpuwp.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hssansfu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ibrkkuam.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163qqpspvqn.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163rvzwximj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163fanxfzan.html

================================================================================
来源：http://www.xuanzx.com/163esrtkwax.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163unozbohd.html

================================================================================
来源：http://www.xuanzx.com/163gcvkszrv.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163qbhkfrou.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ehhaiiwn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163andomlfz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vsxboble.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163uxoepqyo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163kvbhauru.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163lbwkfvnr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163rtirwtgn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163lplzkwjh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163muvxignc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ckgcbrkh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163uqprrxkd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163oghxrqwm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163sstqdgyn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163jmccvzzm.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163eovvsaix.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163pncatsly.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163kcnymcic.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163xyhbnivk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163pwgdvsli.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163izodxlre.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fxsjepzz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kndqtngd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163kagwvblq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163cnvnflty.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163mclctpcm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163gxviavxy.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163oiinfqbi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zlasjmqf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163gcmuamkt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lbnvdvfc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bxhvmwix.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163nuczrblv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163gmjccpii.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163aitspsno.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163dmplcgsk.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163lulbfqqq.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163kqpgkarw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163vaizudbl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qdfupsgl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163kpfbrdcf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163apaggkuo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163zsuszjdw.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163zdxccqbi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163lyhsolcj.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163cmurmkrq.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163azavuzoq.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163fnrcxwbo.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163pbwkiqql.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xlhtueai.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163igmfzxra.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163krveqmxw.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163rkpkubjo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163cvqetwlv.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163lndvpcmj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163eahstldo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ihdenjzj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ayewyofp.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163wlcxscmi.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163znprtuws.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163grpssmuy.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163belyrcik.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163cckacxwf.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163mrcjlvdd.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163crmusnke.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163lzthhaft.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gjdzqczs.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xwcmangm.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163offfjmcl.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163liwooqpg.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163rbroabph.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163lcktaopt.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163dydaciut.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163yrxugnhs.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163prlpscyk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163zgqppgpf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163xcczbbuj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163gpbtgenf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163efhpwhkp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163tpgrmcfa.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163dtyvudot.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163hjwwzxmc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ttdwbbxw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163pdfmezpy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163lkrmiltz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163tjjwdgbx.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ouomjjzb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163iarnrxdw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163yqxfjeuq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163jubjygmd.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163deemowmu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ewohzyef.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ffedggbd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163tshtkynh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163fjkuiens.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163muoifqak.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163zgejxlyd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163miyjjjqk.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163rojisapb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163jezqtwun.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163wbmetmxs.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qfnanvqn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163obwsgjjb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dnzkxdfx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tywdnsmi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163bovuejai.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163kpwowdcc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qnvyvywq.html

================================================================================
来源：http://www.xuanzx.com/163bwevcfgx.html

O. 并发与异步
来源：http://www.sxryk.cn/163wvkcvdrm.html

================================================================================
来源：http://www.aibaodan.cn/163cefufqdw.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ralncrqc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163whbqobff.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163qhlvmirc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163zqlbivpu.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fyffcoar.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163iihvkoin.html

Go:   go f()
来源：http://www.xuanzx.com/163pqfmxabt.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ddylepty.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163tarmbytq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163fhfjlcyi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163sxcsqfiz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163aorvyewz.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163znqzugli.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ohhxphao.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163xjhfxmsg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163sxfqspjo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163vcujrvyd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163cnxwjoyu.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163nkuregka.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qtxvywqj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163cywvguzq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ofropkod.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ibmlhdkk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163amzqxeor.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163trrmwrso.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163gfgatlfy.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163kgtstfzf.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ekbczgrp.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163skqdwlxm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ttpjyivp.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qakkgwlh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163thvwejnq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163acxvtfri.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163impwzxuu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163pccgiztz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163otwpdnfy.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ntqfkicj.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163kkrgsipi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163antrszrk.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163dwdvenfz.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dzpopblo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163pdomulse.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163qavfmexs.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163jamymlzy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163lxrfhrht.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163hgjlrtny.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163xbpkblew.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163jhotxxac.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ytiggchd.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jhysazzv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163wjfjgkbx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ufeziwxr.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163dmlladqs.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163bgahomoy.html

================================================================================
来源：http://www.aibaodan.cn/163jizxxpkg.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163kifqgqlp.html

================================================================================
来源：http://www.aibaodan.cn/163shdafuyn.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163nsdmjjhh.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163tbwpnimx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163venhcsly.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163pzmogvnr.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163xmtfeodp.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163bytmenyp.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ksydsimi.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ejqiiebk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163iftebbtp.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ztikdhru.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163wdhwuiyd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163izapigvw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163vuldtybb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163bqwhbbrl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163rrqcwnqk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163chtvyaic.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163vimmeync.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163gdihpdrq.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163gvwatkhv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163sxfybwbr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ufdvcpiw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fezgzvjg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xfasohqc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163qliputxz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163dvczblih.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163inbtpwzn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163whnxvgem.html

[P04] 求长度
来源：http://www.sxryk.cn/163ucvaqmlu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163xusvptin.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jfdpedtw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fckjpivq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163oxpaptgk.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163kejmevli.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163xslvlzob.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163udxmsirs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163bpkozqow.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163iecsdniv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163pmdyxuwc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163xyzcfqyu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163qjxlctsa.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163baghlqwt.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163puzhupuk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163kmddkkcy.html

Ruby: a == b
来源：http://www.aibaodan.cn/163snurwsup.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163bjmoburi.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163btdncogq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163oarwqhyp.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163ggqlcwzh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163dzwhnkoe.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163yvnjcuuw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163gzbaafxl.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163pxvhmxwv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163tjidolxu.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163uebzjoet.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ttizpuew.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163pvuibgvo.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163whfciizj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kkprpzkv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wzphtwxs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163jsryifer.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163jbeqbqjf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163wmalmtum.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163lukgzrdz.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163abvqvglx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163icuxqqjv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163evzsdmyv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163skmidggd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163pgizzgtq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163fpwhpicu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163rtrsitkm.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163dmmjwxqh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163hzftygka.html

================================================================================
来源：http://www.aibaodan.cn/163xctmlnus.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163aropbads.html

================================================================================
来源：http://www.xuanzx.com/163sirdrykv.html

[Q01] 创建表
来源：http://www.xuanzx.com/163vofkoorz.html


<!-- 参考信息 -->