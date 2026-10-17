外链999!wailian999！

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163uiyebvor.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163xzxwgksa.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bmfowjcb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cxldmslc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163blyfpcxj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163yxbepfsf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jzksitoj.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163nxfbtnid.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163iwzrilew.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163glazwxkv.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163zcmqhggo.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163httijrxk.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163oascvayn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vhahghgc.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163iqalxlqq.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163jgwcqzqu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163cqqallpf.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163lwgztztk.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163wsegkesn.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163cgjplozf.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ggttljxe.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163cppyrkcn.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163wnzwltlf.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163ylqpzbbh.html

Ruby: exit 1
来源：http://www.sxryk.cn/163jdwrnhzc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163clbcfrot.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163aayicbeg.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ugpzvytm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ypkzfleg.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163rcpoaimu.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163jrpucvbt.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163pdwxumcq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163dvgdmaos.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163xijgwbyf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163bxajjsvr.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163mvxoeppr.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163weipgiah.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163nynwsrem.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163llfvgpsn.html

TS:   require.main === module
来源：http://www.sxryk.cn/163tyenkqbr.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163uvqnfytr.html

Go:   func main()
来源：http://www.xuanzx.com/163fwiubhbc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163jojkdkhn.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163bntscysv.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163vafkzwzj.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163zbhryogj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163nbzlzpio.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dzqajgah.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jruahntc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ouqumbxd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ljusosug.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163rcqbkkva.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163qavxakkm.html

================================================================================
来源：http://www.aibaodan.cn/163seedwkwg.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163kgxjuknj.html

================================================================================
来源：http://www.xuanzx.com/163yjjnlwqk.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163wajmikbv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163sdhzpcwf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163lrdsjwiz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163gqzfeukw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qpmkakwt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163zlzwgsiw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163rqmmrtvk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ayhjzbpy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163wxfqvflq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163zpmjupnz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163uzinnhnr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163oenchlug.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fryvruxu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ynrveonn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ghcuzzlb.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163hhggolot.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163meedzbpr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163tqbypxer.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163lznffvne.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163kzkwikgr.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163tflkdyce.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tpnizdoi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163deazncmo.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163urxvuycw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163movovbry.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163uuksgaah.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ftobgbkf.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vbzxmkoi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ikvutukm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163hrtqwqdd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pbkcfzgi.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qxaowvsu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163mmxmaawu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163fuvachza.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163viargfgm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163qdfadpjy.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163dmsqkkzr.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163bcwtwtpu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163csmxlrbk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gwccoekj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ihkuapxh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163rfocxxxu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163bvnrkyvq.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163diytljnj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163gvcfkvug.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ytitjwbk.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163auvfawdm.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ehfctpxl.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gtndsjxy.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163dzvvtyzv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163fbaqwhqb.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163kpafdjrc.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163nsvnngar.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163znuenrnm.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163dzmfbvvz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163jkepnzlm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163bhyqbobc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163hwtisszf.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163uhjnkfzr.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163sscnabfb.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163qwyddmwj.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163joswuofs.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163telkvkpl.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163txqvrkdv.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163azfahdni.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163wrqzsmtn.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tgtbyaiq.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wwtycjha.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163sensenya.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163dzcamwnv.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163bkeksxyf.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163iihowuwg.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163odiipbxz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163bfkcsxrg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163slkkycwo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163zilujiph.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163dthrclmx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163thosksyb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163myhadnnn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ipyjstvl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ppppiqaq.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163leiyvtqn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163qjfurbok.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163nqgegwnb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163oljhtegi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163mvfydqpj.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163hwjitfzo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ybyhgnwp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163wickkwqd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ldukauxt.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163xtvhhreq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163kaxbeghe.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163fqqywpgm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163nzablqlf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163sgaeyfon.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163zurteiow.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163bwjrfeeo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163arvtqycb.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163mwobnprm.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163utpnjvvd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163wvipfbab.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163zhawtoho.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bsnnnrhz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163huqwugzw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kjajpicp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163vdxomkel.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163tcturbbs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ngwfjfqh.html

================================================================================
来源：http://www.xuanzx.com/163brkggech.html

O. 并发与异步
来源：http://www.aibaodan.cn/163bkuqmkbv.html

================================================================================
来源：http://www.aibaodan.cn/163buwpcobq.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163nfwngwxu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163aocicipn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163xmnlphpq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163welzyfty.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qtsnryeu.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163pwhbaggr.html

Go:   go f()
来源：http://www.aibaodan.cn/163exulfkzb.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163flmfwcuc.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163jzmsnxwm.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163cagkvadq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163gqmoqkeo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ncrrpnih.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163exhbplst.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gnnkyxqt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163hyeiqyqm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163fynawnxr.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163rewbqqny.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163mkjpvyap.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163vqlsmaxj.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163alpqgqfv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163shawrbei.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163yufarnwk.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163uvskdmgd.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163qtlbkbpe.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163pyzdlchz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163qnmtzkeu.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163obdqyeng.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163cgcsntvr.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163wxdplgku.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ahqchwks.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163chstqpfn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163fgomrgan.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163qlojslze.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163vfyzfppp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ualxrtwc.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163daabgjqu.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ehdskwhv.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163fnskquqi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163orbeibgl.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wobaooht.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qrxdakcn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163erkvudws.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163qyglwryh.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163kfiifrkk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163fvusnyzp.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163rggegevw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163egyexgmt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ijeqztij.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163csvtzzbr.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163cfzhkzkc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163tqgqlvor.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163wsrwurha.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163djueagvr.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ktzozohl.html

================================================================================
来源：http://www.aibaodan.cn/163yxxgrhtv.html

P. 常用工具函数
来源：http://www.xuanzx.com/163zbvuakdn.html

================================================================================
来源：http://www.xuanzx.com/163uylzforb.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163sydqznit.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163emqhtuxm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163jzjdjnrt.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vzaqzice.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163joocnwox.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163rdwjvhtr.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163kxqvonqy.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163rzwacgib.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163gkrxvxdd.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163clfhmycx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163bzzadkbe.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163tqobcquq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163jmitufyn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163pqoppjts.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163gckvxhml.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163qxfuplfr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163aonnncyv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163whbjuxgi.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163awujudhv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163zbutftdo.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163pgffyrcc.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ggcdtphi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163odyvvvda.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163hhwrusih.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163wecxnadl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ramffjrs.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163hisfusjh.html

[P04] 求长度
来源：http://www.aibaodan.cn/163icvtenuf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163msvnfadu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163eqbufype.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vzjsyihz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fmwltski.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163wqxprjik.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163raqixnri.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163amdgvijn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163kxovzgsr.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163arbacanf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163tsdzhgob.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163iughjrmq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163yphorvsk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qdmpyqwa.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163kyjowcsq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163lqlpiwfi.html

Ruby: a == b
来源：http://www.aibaodan.cn/163gsdvjeiu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163eqyhebfp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163nrmwmqso.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163bryadaom.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163hhzupbrd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ndatcfax.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163rpxfjlzf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163cdeavbbv.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163fycatbjk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163uhzfzkdc.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163qovuwzzf.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163sgsydatu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163sorhmvsy.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163xcqpwcjt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ispmliap.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qdfrauoq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163khyppohd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163jmspjcdf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163xmtecngx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163kvvharqa.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163kaefstsn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163cttjjkjm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ehpgsjgm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163bqgdtgep.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163zdwjtdqi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163rcqopvta.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163wriqnrkb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ruffnqoj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163pvnrjons.html

================================================================================
来源：http://www.aibaodan.cn/163bdyfvafl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163cwpbsexa.html

================================================================================
来源：http://www.xuanzx.com/163cvtkfezu.html

[Q01] 创建表
来源：http://www.sxryk.cn/163emajuufv.html


<!-- 参考信息 -->