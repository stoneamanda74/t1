外链999!wailian999！

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163kvjocryk.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163icmxlqrh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ibntqstd.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xfeknnth.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163iarocvxk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163macwmhmb.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ukyvmpxy.html

TS:   require.main === module
来源：http://www.sxryk.cn/163sghkqoxv.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163xuuspkgj.html

Go:   func main()
来源：http://www.aibaodan.cn/163wpyehvuu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163wlxxpmfr.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jgmpssix.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163cymfybry.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163fjllcvym.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163vosembmw.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163otmyfzxe.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163sehvodjh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163mujmxsnm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163jvsittnd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jyifavcd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163zcihxuzx.html

================================================================================
来源：http://www.xuanzx.com/163ptjofrkm.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163uwhgtbdo.html

================================================================================
来源：http://www.xuanzx.com/163aosxtiqi.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163vodtwojs.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163iwwcudzt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163riqflwbb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rdspsqvq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xhqnyvph.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163euefxlqr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163wnkzjfhb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163egrovdbi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163nhauhelb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163chphynru.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163gnyzbcgm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163qsyewoxh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zmjaircm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lveiiluh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163bjybexgp.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ikkukude.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xxyrgjis.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163hmyqahfe.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163xtugnrgg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163mhximpae.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163wxcxlggl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lstorzbz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ilfxrodf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163dccfzlwm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163tatsuqtu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163pebizpgk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163cwvgkuaq.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163qifkrjbm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vgwqzufj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ehtvquqw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163trowfklw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ohaamfey.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163fruyomwu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xltvmpjg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jckdfqgy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163wprmjlum.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163tekrodrk.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163rzrjvant.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163zivygwnf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hlakgdaz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ghtmfsec.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163orxbvdmi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163yufzexhg.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163sfrlivjo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163qhwxtcjy.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163cxehcraf.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ljuuumpw.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163piiuvcyf.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163fkzkrfqd.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vzobbdlt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163xwevryyx.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163bvjnodsz.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163mmodshyl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163pfcbpxva.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163yvlzlvna.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ymkwzsfi.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ejvovuvu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163zefdrtgq.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163sgrwvtog.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ynfuavgt.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163wokfgrsc.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163dahexmxd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163uakreffv.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163tzoqeppd.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163bttmhuly.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163rwgnmdrk.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163goudpzjn.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jlhupxio.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163wojajiqk.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163uwovmvye.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ahhmotoc.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vahxmizg.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163qmdvcbrt.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163edtoltsr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163tnrahpla.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163wcqrwiwp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163mncngkgs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163dfwvcfky.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163tpertbbk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wfjfoapk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163rtbfignj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163sdwozwxl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163jtcrcesl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163gscxcnvq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163zxesvwol.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163scqnfzeo.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163dkgwkuyt.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163qfqiofjq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163blgyvynk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163wlanwkun.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163vjlykdjj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163egqbnxjh.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163lhrobdjl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jvdlobjm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zmpmxkye.html

Java: // 手写递归
来源：http://www.sxryk.cn/163xfitnmme.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163cxdxeuat.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163tmjwjclr.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163pfutzczq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ozuituij.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163dplrdboj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163nucwmqbl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163prgnxyah.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163tggzwzkf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qsjxketh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163grkamwrt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163jvgpkbso.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xhbemvvx.html

================================================================================
来源：http://www.aibaodan.cn/163kywjpgdx.html

O. 并发与异步
来源：http://www.aibaodan.cn/163vczlkxdz.html

================================================================================
来源：http://www.xuanzx.com/163qczfvvcu.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163uknoigrt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163cdwscmkd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163jgczgzox.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163imxqvhac.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163tbaisqkb.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163kibdhwtz.html

Go:   go f()
来源：http://www.xuanzx.com/163wmyuvrlf.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163khatrigg.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163dasjutxq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163jmxtwybf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163pzzrcuzm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ectbaggy.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vcsbifxe.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163isekffcb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163vtbrmcvk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163xyjqeclc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163rwcpchne.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163hosskkix.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163alfurcnf.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163lqfunvih.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163kfgvrehs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163anwfxmrm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tnvgpetq.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163shqwfvsz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163zfocwwuz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163xrhgctbm.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163acesqukn.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163zxodqnrb.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163hgmxfenq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163imcimmjm.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163xwvskuun.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163qfsinzco.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163qqjjeiix.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163wphwjjtd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163xebsoaox.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163lzaxlhup.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163uqdgpsux.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163mrcxuqnv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ufigitqf.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163iamambew.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kkutskdg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163unywcxut.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163qdkkovox.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163hxttnvlg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163bsuhpuzj.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163harbzclc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163bywydxed.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163lirxcacn.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lsgkyxnj.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jberpfwr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ltkgescv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163kdlhfaks.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163dxszkekh.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163jrmtswit.html

================================================================================
来源：http://www.sxryk.cn/163kpzpjcat.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163asgatrhl.html

================================================================================
来源：http://www.aibaodan.cn/163itdlvisr.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163kxxdpgqs.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163nzpswxze.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163tnpvzsnd.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rhdnstxu.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163liwtvwae.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163fkiprrel.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163gxzjkauv.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163aloxikoq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163tojhvagm.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163krfxfwgf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163xyjjlxkl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ldtjztmc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163wqfyurhb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163aecxgfld.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163jdajxovx.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163subckulj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163molboiiq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163nqcdiccg.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163nqnfvkrr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163lloqjzqp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163optyyofp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163erkoddjs.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vaakyeac.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163oaonixjt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163vowzlrpy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ekmtnssc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163xdeswhes.html

[P04] 求长度
来源：http://www.sxryk.cn/163bfontcum.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163oorhatah.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bnftddit.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163drszlmsr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cvrgnepo.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163xsfnzwdq.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163joibarsf.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163nrhfonpo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163zctzwjud.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163srmleiak.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163urzzupgf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163tdjafhjm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163nglhyxfc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kgbfmhxf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ybqstaut.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jzobkjsu.html

Ruby: a == b
来源：http://www.xuanzx.com/163anilgqgz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163fyeltuig.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163rlneuzia.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163zpkmxdqu.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163mexolqtz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163xihktpge.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163uzsmabjk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163scimmsfa.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163xjjfyaae.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163wsknsimg.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163fyzmsyqx.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ouhizjgn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163fqcsodbj.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163vvtbaykk.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qfrtyvht.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163heukdeak.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163gecryszg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163poemsrgm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163acidmqwq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ateaczzt.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163lgqlpwws.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163jnayxaaz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163yglidzag.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163velnrlwd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ocughvfd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jqumpdpb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163shrkdvcm.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163txolpfbw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163kytekumo.html

================================================================================
来源：http://www.aibaodan.cn/163ojavuykk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163bicqywxr.html

================================================================================
来源：http://www.sxryk.cn/163ytqdhkwv.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163hvultbge.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163aqziyzul.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163txzufidw.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163etlwiqyf.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163nrneumwk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163jlohmtkh.html

);
来源：http://www.xuanzx.com/163znlonjtu.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163jcbtyyog.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163rnmwvjpl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ruzzgiqg.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163zhhhhjkv.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wkgmgfsf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163duucvyus.html

);
来源：http://www.sxryk.cn/163beyvtcfq.html

[Q03] 增加列
来源：http://www.sxryk.cn/163elyzwnir.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163vnuiadko.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163nmwtrfdu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163qcndcuxx.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163odzkvmvl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163xdkxzqhq.html

[Q06] 删除列
来源：http://www.xuanzx.com/163olkdcmft.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163qfmgbkoi.html

[Q07] 删除表
来源：http://www.sxryk.cn/163yettowca.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ymcqdzpo.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163hpgttbje.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163cnskreyd.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163bumtsezx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163epsccvcy.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163wkgrpgwl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163lvxjiekq.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ldgekvff.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163fpzwmzlr.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ccoyrpzv.html


<!-- 参考信息 -->