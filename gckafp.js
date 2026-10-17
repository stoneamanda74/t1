外链999!wailian999！

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163vfmbfrnl.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163biwtrvke.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163suguxckd.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bzaxocgv.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163uxjhkfeh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163qgkvvank.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ciyauhwn.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jkhjraqp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163hhemflvu.html

================================================================================
来源：http://www.aibaodan.cn/163lfigcchb.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163vqiijrxb.html

================================================================================
来源：http://www.xuanzx.com/163wpanfcjj.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163wdelcfqw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163jhnmgfrr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163rxzgyruy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xwzlowqx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qvftowlv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163xpxsjqwb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163gcinhykg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ossxjlbs.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163uejzatuq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163dyhnilea.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wzbrieou.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163zfvufobo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ryhvklcg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lvnisbzs.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163jxwjidbb.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163jthmvarn.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ftipsino.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163emjnfcbe.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163qxftytjv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163fdtonyyi.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163kckerfgw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163tdzxhbqw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bcnqpswk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163djdhomdx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163hjdurltd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163pebtjyrw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163vkmxxngq.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163kydwsjhm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xdlchkgq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ozjymavl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kzbapieb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163sueqvbbf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163bqgdebga.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163okfsjuzh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ybzdmwvq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163adepbuvd.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163bplomiru.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163pjjhwcwl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163tlasfkuc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ugbmnanu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163fsgbtbiz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163clblvfzc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163opghlyhb.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ofybpubg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ioelznai.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163akopejdd.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163qhzvptcf.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163nhedleoc.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tbilhgao.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163iermsqpo.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163cenkxnkf.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163eacggtbh.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163snncyddy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vgzaltvc.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163rpyotqdf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163idzvxeqw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163nnknysmv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163mvhwipwn.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163tcyohooz.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163fbtaunav.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rcysjgyx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163xzlkrzjq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163yikvgeiv.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163hnghhwln.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ymxsgmea.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ecoicwec.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163edynfxql.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163fhsddyns.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163iihuhlzd.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163jsorlmox.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163mpvighdn.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ukxtbcer.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163dotgifvu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163lzkgpkug.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163nndyremo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163pktcqcxl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163zvktclhn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kydzwmxc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163uieppyaz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163lqegbnqj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163cgokbzaj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163pestwjym.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163acmutlhe.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163xxrslfss.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163zvlfvbcq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163eagjquyj.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163uoxlagbw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163rmrjiyrj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ipbuczgz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163yynsntwi.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163liejqqtk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163gyxqflzu.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163nbnqcovx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ibuddssl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hflyoarx.html

Java: // 手写递归
来源：http://www.sxryk.cn/163gvtnawyy.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163lxdyketi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ckkfhduh.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163gykayubw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163tsbzxyoj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163qsaqssev.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163bctzfzmu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163koqjrhci.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ruvciwlr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163tcbmejbs.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163iaeupowt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163pfaimiij.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wumdnkke.html

================================================================================
来源：http://www.aibaodan.cn/163bxitcivi.html

O. 并发与异步
来源：http://www.xuanzx.com/163zoigklfz.html

================================================================================
来源：http://www.sxryk.cn/163vfmawwxq.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ghlperki.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163eaoiyipa.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163qirgaegk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163hrnhmepy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163gxxyufjz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ywkjagol.html

Go:   go f()
来源：http://www.sxryk.cn/163pfvpriyv.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163pjyuvicn.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ngposoxk.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163swrxzapu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163doyeblcj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163zpsmvnbb.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163xrwuvbzi.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lwjdcuji.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163joyuimbj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163djhnwlhz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163jzxijwgd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163bmcxxqos.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163jqhcqlqh.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163aiscfyft.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163aoiiymal.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163amgbjvlf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163iyoennnd.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163gwdpkuqg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ixraelgf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163llwadwsm.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163prsoqrtb.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163jjvhkbab.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163wlxvttjq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tggjrteg.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163eixxhhvj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ruwewtgu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ezdtulwk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163rlwotjbj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163vpokfpal.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163svkgkmuk.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163dfvkqorq.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163agxdsidn.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163yoxbztik.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163nymxmdfd.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hekiqnvj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163cyfkmshv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163cgvwrtxj.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163vaiflimb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163uawhcoxx.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163hcuohztz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163gxjzyxmh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163uijclqso.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jdlksbqc.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163pwvjsqre.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163psjrgbsi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163vxubvdpu.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163tinvlcem.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163zmbmzvzj.html

================================================================================
来源：http://www.aibaodan.cn/163ysxlqqza.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163tnvmozgr.html

================================================================================
来源：http://www.sxryk.cn/163yjwtmntt.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163yyxgehuh.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163jxlfxiaw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163erddkkma.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163eujdmdpz.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163timvptec.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ifclntpq.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ksheqmew.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163yavllizw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163zdfapjjm.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163haozdgtn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163bczzhpjz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163xjybvofu.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163jswflwud.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163szhmthyi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ucgoznxo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163dklkfllf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163slgyxbhj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163biongcrb.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163rohlrspb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ncplyypi.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163vcncmkft.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163adkdfzyc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163uetnjxvo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163mvlcxqtz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163pkabyhij.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163apceozjs.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163onrwvbou.html

[P04] 求长度
来源：http://www.xuanzx.com/163qowuhwph.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163wbughtts.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163plbgoznv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163wnnbtlnb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dfkfsfhs.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163wfyfsbvw.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163xdeposvq.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163vcotzlcd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163njaofveo.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163aljybcou.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163zkvochri.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163detjkfry.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163frtxsavr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163tuwazslt.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163hcogovgz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163zavsahlx.html

Ruby: a == b
来源：http://www.aibaodan.cn/163htvigsso.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163jqrtjjds.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163tkloajcw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163zhogxywd.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163qhmrxyuy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163orsmcwil.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163kvqilkre.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ursbbbst.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ublfybmh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163howeqhwx.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163smubgeqr.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163nbraximd.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ywpvngpe.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163wahpgwti.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fnaujlkr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bmhflcvf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163kqahmsmk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163uczpkgzy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163xvqgdrqy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163swcbnyfp.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163kundiyec.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163hirbqmhx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163mnaulzsy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163szbifzls.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163diqbmwfl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163wxqrvjli.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ssglltks.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163umxzezbh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163vkgsrikk.html

================================================================================
来源：http://www.aibaodan.cn/163psymrjts.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163blqadzkt.html

================================================================================
来源：http://www.aibaodan.cn/163ggyzyaum.html

[Q01] 创建表
来源：http://www.xuanzx.com/163sdqihtxn.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ppokpleg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wvwaqknf.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163vlergnww.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163absjiyok.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163csyvanqw.html

);
来源：http://www.aibaodan.cn/163hdoaxbmw.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163iyoelzmb.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163tspabtfn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mnaxwcxw.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163xjhkhndg.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163kmzcpxxo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163lfiawyta.html

);
来源：http://www.sxryk.cn/163zilgxgvt.html

[Q03] 增加列
来源：http://www.xuanzx.com/163keotecat.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163zmvpwayr.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163wuhlbpuu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163goritmap.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163gdowtqjf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163twtswwxt.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163lkkwyoli.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163vtuosdhg.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ewqbcaye.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163cndwrgoi.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163rekrhldz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163bzlvwkpc.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163wzpicbbv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ddxhkwtm.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163eqhlnrce.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163yhskewqe.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163iaownwdl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163mhyckssm.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163mzajrhqh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163eafmbixq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163bwkkcday.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163skbyppcn.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163jxewswbq.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163yhrdeaqd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163khhowqrf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163kcqqbugp.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163szlxfbpa.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163uxfcykfh.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ptynsfja.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163toblwgbl.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163dmrvyqev.html


<!-- 参考信息 -->