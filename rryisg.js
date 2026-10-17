外链999!wailian999！

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163lqnwvvoo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163lzmvdzsc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163etkytvng.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gpvthzat.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163csbffeyx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163bjeqrvsd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qewndrxy.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163atxnsnip.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163jlogvwtq.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163hmiixona.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163fzlnapye.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163iwvywxyc.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163vmxrbzmv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163rplffixu.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163usegcrxs.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163annguwax.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163skvfzaxd.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163tjncjnke.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163iutplpka.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163abxexbls.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163pxywhpcz.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163vdfkjqav.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163mfducbgl.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ktqrhdgn.html

Ruby: exit 1
来源：http://www.xuanzx.com/163mcoepxqd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163fcojyvwg.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163lwbhdrzl.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163atchqqqi.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163unpmjqfe.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163cxqkeben.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163oiqfacmi.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163eyvfduxr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163wyptzsah.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zmymxhmt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ibdgzvnt.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163xzfiwvop.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163qqdvsmbe.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163oknjspku.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ulgddafp.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163bfvfbret.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dxvbiqyc.html

Go:   func main()
来源：http://www.xuanzx.com/163tcdwvapg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163sltbnapz.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163trwrficb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163nnbpjnwp.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163jbctswac.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163hbbudfjm.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vkjtkqyo.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163knngexkq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163whsuzmrp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163lfscladk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163khezfomk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163vpanohji.html

================================================================================
来源：http://www.xuanzx.com/163xbbfgets.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163jdqylxnz.html

================================================================================
来源：http://www.aibaodan.cn/163hemmwxlh.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163powmqlgf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163mqcqwdlm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ggsuiltg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yehczdbt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163fqfoknbb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163uxstzwah.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163wcounpmd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163wqsnupvh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163kucfiabo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163rlrotmsw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vnwbqmek.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163rpozvyhv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lruwymsp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ktkfzcwe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163zouzspnf.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163hwpunquq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bkoggtre.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163rttvbngw.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zpyxjbmf.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163hayrkbsw.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ulinqqvw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mdpdmnam.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tlckddqk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163hndrakun.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163vipcgyjr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163qskiiijs.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163jyhbsbkl.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163vpqygaip.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ekthwexb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163tpkfodkf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bffaoibz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yrxcmdrn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ghhoswcp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163wmhaylfw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jdlvzzzn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163bojrmstx.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ukrjgver.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ebncsdwy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163xkeeseag.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qzvedbzh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ccylhxrc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ivzwphih.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ilvdnbbh.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ajdmrisq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163mukqyoen.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163mmrswelm.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163jdytywus.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163pkshudqg.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bnalqdjr.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zhyoqddg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163aqowryxi.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163owopbbma.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163qcspyeod.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163skcbhbzx.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163eghgxqqp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163bouhfczg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163hyuejzhd.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163kedzyeoj.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163lbzxhxac.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hbspjbph.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163dorvepcf.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ksvibtyf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163iibsyofk.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163phpromwt.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163tsevepnl.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163vvqxepeg.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gitpudqa.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163dywggwgi.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163rlpmkthw.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163juqxtbbu.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163oahbvcwz.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mbkvweaw.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163papmqptt.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ajokuack.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163guwmpqkh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163nxhsrrps.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ifaaonjt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163vhemkogk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163smsqthdv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163eyjejaji.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163zqimgwbr.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163snvxoctq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163scazyniv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163cpjugjdf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163klpjtvqs.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163uqenafon.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163aedsnxqn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163tqhpvype.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163qcjvcpmm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163kcotbxfu.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163laaymzna.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163fnyxuysa.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163pjeubejy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ehrgbilc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163yaxmaozs.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163blfiduve.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163izdisdsh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163xppxmqbd.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163tnsqddfc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163flljgibs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ezswjolt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ylogygah.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rpbcfskb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ihllcecu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tkmebuur.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163audqqqsq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163tyygfonk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163klkoaavs.html

================================================================================
来源：http://www.sxryk.cn/163zjdvwrut.html

O. 并发与异步
来源：http://www.aibaodan.cn/163npeyjabr.html

================================================================================
来源：http://www.aibaodan.cn/163quhpzjks.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163xlhqwhrh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163lweswmhy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163wioycgpn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163jycnnvde.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ruiiitcr.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163lnzmxslx.html

Go:   go f()
来源：http://www.aibaodan.cn/163ucjbrjle.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163yefojbye.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163eumajwge.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163lziqeiiv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163voqldelk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163gklgbtpo.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163wtvyqlss.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163veibedpe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163evvotfhw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ruyvwslf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163pmdlwvtu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163xzqovmis.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163nsubgvow.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ozngkzxj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163jggxdwtq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163dbfhqmiu.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wwaxhwai.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163raekigen.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ubdselnj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163okirodpv.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163zzhjpodp.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163locawhtc.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163dyyhygbe.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163orhlcpws.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163czfwlzxs.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163itgoivog.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163crugxlgq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ekkjrpdf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163cjdkgacs.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163vlrioztg.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163jsgawypp.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163gvzveewh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163tplyoaff.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ucgzwxds.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yhwzihst.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163xmhtlbdg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163tjwssrbw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163fuhsrwzc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ktgownmi.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163fcimwxxc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163vbderrng.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163kmjwmolq.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ttaiqqyo.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163aoobroiw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ysmmuzbz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163hajhvjdh.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163avedlins.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ndumwupq.html

================================================================================
来源：http://www.xuanzx.com/163ywlvkbix.html

P. 常用工具函数
来源：http://www.sxryk.cn/163frecsnru.html

================================================================================
来源：http://www.sxryk.cn/163jhgatipa.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163jhdwvprt.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163hukjcvja.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163psdbrmvy.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bjjhbsml.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163tlokaujr.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163aftevmbi.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163nutmpsmf.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163gwhkrgtm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ycummpao.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163jhhtsncb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163lcqrwtyi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ulewulen.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163hzzqfali.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163avzytkwz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163swsmfntl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163xiogkevf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163vmeeoont.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ytygmifc.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163hrefzkmf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163qggcfwne.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163alkjtprs.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cxnacgvn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163svkunmjo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163mjnanpjk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163yjeeeidh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163fsbhncib.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163qczvkyvf.html

[P04] 求长度
来源：http://www.xuanzx.com/163oqctmijt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163utpbiabj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mknscvkb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uvzlmpzg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163btsbgzlx.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163eusiauiw.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163kgargrpp.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163dbinfvsa.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163tilmubqg.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163knnpvlmo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163hoicumyw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163zqkxxyzh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163yszlatkh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163iifurhod.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163loarlerb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163shfzxeck.html

Ruby: a == b
来源：http://www.xuanzx.com/163yibtolnh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163cnzkxgcf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ajfezlkl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163outnykis.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163qshsavqy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163pbcowfcd.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163seyuiiuh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163qmsykzyl.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163qridjjeu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163htywgnso.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163sdyuxwrv.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163hjjuneki.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163npxicnvc.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163lndlmbfh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ydflkmhq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163yfxroiac.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163skaxktgo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hdixnyyx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163gnvidlhj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163nmovdwan.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163qijtdzsb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163jlrdfgen.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163gydhvgao.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163qyzibmrb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163hmdbjesn.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163eoivgmue.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ocowjwyo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163xbislpqi.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163gpgpcxmv.html

================================================================================
来源：http://www.aibaodan.cn/163ubuxpkra.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163hwbbrqhv.html

================================================================================
来源：http://www.sxryk.cn/163mmaeqcpw.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163iwqegotr.html


<!-- 参考信息 -->