外链999!wailian999！

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163lvnpqnqc.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163fjpcblml.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163gyvpjipe.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163qwiadest.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163oslbunxu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163goeuabow.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ulvbwuwb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zhoiptrh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163jkwjxzzf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ahipbero.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163vfgbnjfz.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163qvfuknzq.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163djqqbpgf.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163vcsxioqe.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ywslvvbv.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163wnbecnwf.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163zdqzbunx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163lryfhfnu.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163erhvuujx.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163glelfsso.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163nhhmxotm.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163kqyodmsp.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ebpigdao.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163wohuuhep.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163syemtedq.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163viagzdnl.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163jxhhvtrw.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163tmvydgbs.html

Ruby: exit 1
来源：http://www.sxryk.cn/163lofhtnga.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163lszstmrq.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163dtfuqicq.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163whctggzc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ewrcyamz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163afcmzuiu.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163deztyhlr.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ddwlzgru.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163kkmbbenj.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ozsuuaqg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163stebhwkn.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163fvupadbk.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163tofwkycp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163kxbgimbd.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ldcklums.html

TS:   require.main === module
来源：http://www.sxryk.cn/163eabumrmw.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gghmxhjd.html

Go:   func main()
来源：http://www.xuanzx.com/163ashlxvxe.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ewfknhuc.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163mfquupxo.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163dkkpwotu.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163qprirbcv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163wkodeqod.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mbwozlaz.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163axawkqls.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163yhmffysm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163awiftdml.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163tjslgaga.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163jmjzohqy.html

================================================================================
来源：http://www.xuanzx.com/163jmgswled.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163aafxymxi.html

================================================================================
来源：http://www.sxryk.cn/163ltqtzrcp.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ajcdbkma.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163njqybiff.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163tzrkuczv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163thczxoxx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bphwibmk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163nwlpjpyq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163psaaofjg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ttccunjf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163figaoptx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163fslcxhkf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hppqgwsc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163hplsgeal.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mmkikaen.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mrxotkjs.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163eacyhgui.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163wngiphbi.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ectpazil.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163wupxqjxi.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163jvxsxntm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163baxbpuyz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163fxgsbuwf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163smlttunt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jcwqslyy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163zhlongmw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163scfrftmi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163habpggsx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163pxrowdvz.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163znypwtoc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163clxvoebi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163pipfqycj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xfczvxnb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jlxgroya.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163kimqvpkg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163yoylgjuy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163slkywyxg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ozawiirl.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163pppbzhff.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163asiptgds.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163bzojeqfm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rlftlhhv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163uatmbfru.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163aqqqpexc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ogfxfwow.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163rfngmfia.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163wkffmlna.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qdppwebj.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163dznqzler.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163wzvafdxq.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163aatmoalk.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qjngjcmr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163nkibitnw.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163tbydezsu.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ieghwrnh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rxovwjto.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163skkoidsn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163nxrbtnqc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163iuaabvdl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rowzhsor.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163kvepnejt.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163eizqtaze.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163pcqbyrsk.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ndihpsmb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163hgiuvexi.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163kkrjzwks.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163tbinfgtt.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163xvglodwi.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tkoeygjs.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zvupzmng.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163poorexrm.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163kkyqziql.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163snctgcjo.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163looeuvng.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163gqowwzlo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163pldkmnxa.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163zereszkm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163vaqauzte.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163sglwmqje.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163enlmzseh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163rjmyxeve.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163chbjksfl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163oiqawqpz.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163sejhddtv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163choicqca.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163dazwufak.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163dshpchns.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ipkccrkk.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ciqodzpg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163uixmdbrp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163kwdhhzkj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163tspztnns.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163fljytpru.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163iazzkejq.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163cdevlewl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163wdjrxktb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163tdtfndlz.html

Java: // 手写递归
来源：http://www.xuanzx.com/163mzrkafgu.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qwegmnpl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163rzpksncu.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163zzimgter.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163atmilvli.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163xdkdnjfj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163gpkpxcod.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163feqjahtd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bsrmygvh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163edpxmwsc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163syhxsxtk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163zsnienut.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tutfycre.html

================================================================================
来源：http://www.xuanzx.com/163fiybxgwz.html

O. 并发与异步
来源：http://www.aibaodan.cn/163hfrmxhlb.html

================================================================================
来源：http://www.xuanzx.com/163mcxdxpvj.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163irpbmyla.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163jshruyie.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163txwdudjf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163wacbbwvn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ckkalsxp.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163sekhhfso.html

Go:   go f()
来源：http://www.sxryk.cn/163elcqfwil.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163hyclasyt.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163lfojolcw.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163paziehej.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163cninuqvw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ynjixiew.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qraumtrw.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dlsfxnyj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163bjjcbhxw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163fjpgdfiw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163lbcnxsye.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163dfquoagb.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163utsgusec.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163sgaeikkf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163kwdvrugf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163devrjqzm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163lfvapjtz.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163doxjyynb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163dlmydbsb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163inpgkosg.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163idpxyhnt.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ftaukzyl.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163upwoeflm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163eydleewo.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163oycygpcr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163kampncaj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ufvdszxr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ancfdzyq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163tglrzxff.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163qpdafljo.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163hmuvdxzc.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163yjnzxlhi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163fakmvycd.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163nzirlvta.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163zgyyonbe.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163zuktecgz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163anmsmqsq.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ejsaqktx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hzzjygwy.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ocntbzhc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163jonhvrrj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163nndyiuzp.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163acvffksn.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gspxshyl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163rerawnnw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163wbawixti.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163cldwapvv.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163rzynpnvn.html

================================================================================
来源：http://www.aibaodan.cn/163mnbzquae.html

P. 常用工具函数
来源：http://www.xuanzx.com/163xrsagohp.html

================================================================================
来源：http://www.aibaodan.cn/163tlqxdfdk.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ulaokoyh.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163uitvagea.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163vzoztozm.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163xojftytq.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163igdffkpr.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ejbmnnsq.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163mzljroyd.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163cbfxhheh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163irnqnbve.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163xsfckylb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163mhrdexgl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163adpyzwer.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163biqykzcr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163kgyuxvtz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163kaahlcpc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163pumwcado.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163yzbkwcnv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ylidmvuc.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163crvxtpbf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163tobheyxp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163coibgbbz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vohxdyvu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163gvohahsj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163lerrqdpm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163fclahbyn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163mkrvxype.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163mbzfgsgd.html

[P04] 求长度
来源：http://www.xuanzx.com/163rbyjhzog.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163rutuopui.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bsrdmfvq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163znahgejh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hrttvdpn.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163syrcdbhy.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163nzozlwgl.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163cmcvisix.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163lkrwfdnp.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163mrpahnjm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163nmgblnsz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163hermjcel.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163qpdnxswh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163enbfejkx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163rnceatjk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163jjrlsqjr.html

Ruby: a == b
来源：http://www.aibaodan.cn/163adumfksh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163pmglhkoz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163huyquavz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163vhqijfed.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163nyclqkja.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163qxxeviav.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163tgjvfiae.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163wejigjce.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ordxyiwe.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163fwbtkqbk.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163wmzlohhe.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163xfwysxsq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163edxgtoxc.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163javsyodi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163uoobduml.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cwpetora.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163hygbxdsa.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163gbzllqje.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163dmfrnavb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163cpmsuifq.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163dqnzlpdu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ubfyzumq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163nwebztdn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163bhgrbohi.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163hekkrkgh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163txxtyxav.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163nzvquyhr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163wflkxxsh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163kqzxezmv.html


<!-- 参考信息 -->