外链999!wailian999！

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dewfaxoz.html

Go:   func main()
来源：http://www.xuanzx.com/163wupntxgp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163kxvqnbbh.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163nsyirodu.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163mbgcgxcf.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163cwkbkcyo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163qefdnhew.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163okffoapy.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wpeaggyx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163mbgqyqxi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163qnrgufco.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ypllhfwj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163gbvuivlp.html

================================================================================
来源：http://www.xuanzx.com/163cgtckged.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163rkkxwtff.html

================================================================================
来源：http://www.aibaodan.cn/163ssbsdbsg.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163kpflmbcu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ixjbkqwe.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163svrgdfgt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rosimsjm.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163bujrxppx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ywqcjxgq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163sjtxugiz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163lzrlupza.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163kafsabzg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163shtuhhgv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bmisnamj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163evtpwacn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163itftfigq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ukqipukw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163brpapdok.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dkixcmih.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xrmifwez.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ssiywuhy.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163aipbvepe.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163mdgwtfzt.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163pudyfmke.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163uuarjakq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wcadsjpn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163pluhwwqw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163pkagraxt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163pqctrnlg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163iflsvhza.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163mqblyxte.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lrkwzrmu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163nwqdfczr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ltnhxwrf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163acsxjahq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ezwdsdgs.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163dlmfkdpl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vucjuklr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163qjosvnja.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163tquofegv.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163fhahjcnw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163hdbhekli.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dvabhscn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bdjqfwhw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163zxbfdngv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163rqolcaoo.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163jckeoeha.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163stgyzfki.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163freqjnjn.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163abumbwrp.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163juistciy.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163tbfingrh.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163aqlbjwic.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163qoqmsmcp.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163uppacdpn.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163jkciawfj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lglohovb.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163cehwmnwc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163inlzyvzs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163mdfjqdtk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163wlpttihe.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163grcygsvj.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ffkaeiab.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163vgselyui.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163bqnodshv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163rlplvepw.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163bnnozigu.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163kogluvmc.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163fjrpzyyz.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jorsttpl.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163efwzqgyq.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qipidvqd.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163uohoeuwk.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163keslbeyv.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163whagsnfk.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163enpyeatc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163coekkscl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163negbazjy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ofyqnolt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163nwbcnmpf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163cdxmsalc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163revgkxfg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163hhrtbejk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163infpqdbj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163pxheslbp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163amxnbvua.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163kbxepgtu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163rzcccjeq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163zvppgfqg.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163kelulxce.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163uhcuazqe.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163njepinnd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163yglosqir.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163jaafnidr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163nmbzajkc.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163fvrcfxqk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lpnjmaya.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163fsbkljou.html

Java: // 手写递归
来源：http://www.xuanzx.com/163zbuzrsqi.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163omrrlrxv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ewirixun.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163qxmfqjan.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163wjxjpeqx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163nnnkegsf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163iquixchn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bapwaobp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163zdzsvwyn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163eqhkzeqv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163eqhpuqkx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163fanvjkgh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xxgkalmu.html

================================================================================
来源：http://www.aibaodan.cn/163ixxoduhm.html

O. 并发与异步
来源：http://www.aibaodan.cn/163gwhurexo.html

================================================================================
来源：http://www.xuanzx.com/163cjwrwqdm.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163pdlvfycj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163cyyevjxu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ctrtzhuz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163fltzbwen.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163merllfxh.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163natkplpk.html

Go:   go f()
来源：http://www.sxryk.cn/163rpcgpndd.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163uoqbxvfv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163jydatglz.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163jngatjxr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163uclsrosc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163uholoezy.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rfmkoylt.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jsgnvnwd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163nlifhwte.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163uttdxyec.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163upbbeapa.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163bqkndfiw.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163eturbvya.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163qwjigngk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163yjzbfyiq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163evqvenmp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163udihtiib.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163zcjpuwxs.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163vqjtvxtq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163oxmqsngi.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163imfjemea.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163vrhosgsj.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163efpcnhsq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tmqotbdc.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163jezgwipc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163jveyibru.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ixrgdqiv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ggoyqtsr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ekdjswfj.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163vafgrjpo.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163hqcdobav.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163cflmxdvv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163bbztdzta.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xppghluj.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163pmvenpqn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ynxkrxoq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163vuthmhvk.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163qozwhqdz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163lltuxfoh.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163vzxgixbi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163rvgakhzx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163byozhfqo.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163leowhdnb.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jkhyslri.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ngclhsrb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163bmjzdvbb.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163iipsdkog.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163lfccqvij.html

================================================================================
来源：http://www.aibaodan.cn/163vfnnkokt.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163wzeqsuew.html

================================================================================
来源：http://www.aibaodan.cn/163fgxwuqim.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163nfgzomhx.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163wsrbcryf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163twfbiyun.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jgxdbuec.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zjciomxl.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163rkczxcbt.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ittpkxrz.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163pfjbcbhb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qmnzzpct.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ajijkznp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163kcmlxtvq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163fibdbbao.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163txbjrhqf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163avzvsyqs.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163pjxzsehy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163fhujtcos.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163emesitdr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163zbzwhgqj.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163mwehccjf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163aauhdgoq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rhiovswd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163uirzbrwd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mkzviadg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163lkxvmhpl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163fxbxhhxa.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163amirkpip.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ysdbrkzk.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ilpztngl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163lscrnnpq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163sugakyqw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ecgawfkv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163hlicmgsk.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163epaabsxb.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163phopmvxj.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163fskekfeu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163gapduyjt.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163vtojghfy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163csynmxsj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163wlbvkwze.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163jtbuzejc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zbjexjpg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163qpibdfgx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163kfeunqej.html

Ruby: a == b
来源：http://www.xuanzx.com/163upkhpvnx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163qcavfeer.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163wdmnlebp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163gookopca.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163tbnzlnar.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163opvhcgqx.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163omzhrfky.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163gyplrkwd.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163uqfufvvh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163muvvfail.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ihokaowv.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163toflebey.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163wnnbockw.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ahhkqsoi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163yecytufj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bdphalzg.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163btmldlri.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163rfmkpxrn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163wflawxra.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163gvhovayg.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163vqhnnwiy.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163bddzapfe.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163vxkcmhjw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163exhdozrx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163snhizvmp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163iyozuuoy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163pvuwbiqx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163bzlhooju.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ifemlsld.html

================================================================================
来源：http://www.xuanzx.com/163wifnltek.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163gpzrajnu.html

================================================================================
来源：http://www.xuanzx.com/163quyrmmuz.html

[Q01] 创建表
来源：http://www.xuanzx.com/163snewdmfj.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163cyasdyim.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163gmyolbmn.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163atrtnmku.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163fuaufgvt.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163wacpcoss.html

);
来源：http://www.sxryk.cn/163eqalxscw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163wbfmnder.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163inbqzukk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ajlbcmpp.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ojukiwwm.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163qybuemyf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163dyvlfhyv.html

);
来源：http://www.xuanzx.com/163fddtokgx.html

[Q03] 增加列
来源：http://www.xuanzx.com/163oyvtllxv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163kcbcjlqt.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163nednzfdv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163zljfbium.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163pizivzhg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ykzhvesp.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vbspvpra.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ibrmddkj.html

[Q07] 删除表
来源：http://www.sxryk.cn/163liuwzjkv.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163oxkzfhnp.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163xxpwqvpv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163udcwpybh.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163pvushkzd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163gglfktsg.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163hlnxzqkw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163omttazga.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163hzkiymud.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163zrdfubnp.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163quyknzhs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163jgnepagg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163gzzugrqc.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163uesjknkj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163omlxcqnx.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163tzzrrfav.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163frqmitzc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163usrerjlr.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163eixxnefq.html


<!-- 参考信息 -->