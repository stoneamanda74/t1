外链999!wailian999！

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wpfqqkjr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ercvrjdq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163fwaligbk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163dlfhobxs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163bslbkjhj.html

================================================================================
来源：http://www.aibaodan.cn/163nknvgmtn.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163fzayaquz.html

================================================================================
来源：http://www.aibaodan.cn/163pgcpmwuw.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163mnxdcqus.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163nvkzkcue.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163pjtuzwez.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zscyrowe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pidrkfcb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163pbtfdjrn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163osxksksh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ugoqlgec.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163xsobaoym.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163runsdgtj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wfotllyq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ewvisevn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dnucxbgi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lxkpmmns.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163zydpfqmn.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163nknyxbqj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ueuikttc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163zontjkir.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ejojtkyh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163qgymibnd.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ptofhoos.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xwktdfjl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163snbqzbnt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163fxeorwtp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163lfciaqdr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163xwqnhijm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163liqvoofo.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163egpimcah.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tlolrccd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163qhawgqvw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kowhzhtq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163idaopnkp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163yaacayaz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163zmwzllqi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zhlrtrui.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163moqdrpmw.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163icosoihi.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vasbhkxw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163lpwaxvgr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wcydcvws.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163zsljczje.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163rkqtujmv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163utrwfikg.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163xopaepft.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163kmkekqcg.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163wbaxxynn.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163keivvnhv.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163copgrtav.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ivpfpgao.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tioexsxh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163wyoyeptf.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163pwisymje.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163zwifsdbg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163giuobuct.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163jnteqkqj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163qetqvslr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163nzppqmiw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163shyfuncb.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163eltyxplh.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163gxtfjjzw.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ghomuruw.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163thycsfli.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163wmlpwxnl.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163nifaixpc.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163wjezvhzg.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ruddmmkz.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163aknqqziu.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jjmmkgjm.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163giicvbma.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163nggnbxgd.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163edczjghw.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163tovwknap.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163kfwgbtuk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163eaekshxp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163uuzirbez.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163blowiued.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163lnaomytd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163zayclqud.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163bznflqjd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163lucnswce.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163jxjapqwn.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163rvtksbhk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163zkajgdcx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mudhhrqr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163affnvflv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163obvkfsye.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163pwqtqqem.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163yzvbzfro.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163kqtyuodz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163jgqjxmmy.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163btzuztfw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163keojdhah.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163bhodlbeg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hyrmlexf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163iniqkjbj.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163fnzwyivt.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163iqwwnekj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163knpgmtbc.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163uhrmzmsx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163acwokebk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163xrltdlux.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163dzfyhvem.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163fgjbzyfp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163afjtzhix.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163wgervkeb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163jmrnjuhw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163plmpsuyp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163pphksbgt.html

================================================================================
来源：http://www.aibaodan.cn/163vzlribdx.html

O. 并发与异步
来源：http://www.sxryk.cn/163nkqycvxo.html

================================================================================
来源：http://www.xuanzx.com/163gsstalra.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163iuxklanb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163nwnncbmm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163rwqwobca.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163artertsy.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fwsnvdmg.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163kidsskpg.html

Go:   go f()
来源：http://www.xuanzx.com/163nhcjfmea.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163wfhdmpde.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163fejgummd.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163kncomckg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163sajbfpcf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163rtqffryf.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163jwuoeszk.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163wzxkvmqd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ogtbvjtg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163arfpvoun.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163eijyfguh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163onwpsxmi.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163yfchoxpz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163djizlelk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163eeppvved.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163zzxqiqik.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qrsdyctd.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163alzmfehq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163joqrrtrs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163juhrvref.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163tsljlxia.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163hczxjfmg.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163omkbvydu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163klouuihm.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163vvdixkmk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163orraumnc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163rxyhtncz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163xgsnjuip.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163fuqxxoha.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163fksdqhxk.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163dhowzsdk.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163zyrpsuof.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163qydestxp.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hocgriif.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163jwibhkad.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163jtxckmzj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163fgrhjpcm.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163cwfkqdtr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163xmtkmolb.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163rlvfcocu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163bkajnjie.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163haetkurh.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163nefbvgxh.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163cqhyllym.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163czdvkqmj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163qahvjhrm.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163rczgvars.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163pgqfkduv.html

================================================================================
来源：http://www.xuanzx.com/163fihmjkky.html

P. 常用工具函数
来源：http://www.xuanzx.com/163shghpuqj.html

================================================================================
来源：http://www.xuanzx.com/163fzlyktmx.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163xrjbrjyr.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163duvuszhb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ybyyiggw.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nmxqkwch.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wrrblyyx.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163dvjcjqef.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ifnldmfc.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163tjuujnbv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163qhgxavjh.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163dacdulls.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163pzcibdec.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163fcmbbtmk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163epifucur.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163kkqnntfu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163bnfamqcg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163lbyeunyj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163fwkpgoqw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ihjbotmo.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ufkdrvpn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163uxjnjvxa.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rnxhabzb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rwyahqjy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tysqkuus.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163rlxninly.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163jvnpcbgm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163xiiypvso.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163wlcmvewb.html

[P04] 求长度
来源：http://www.xuanzx.com/163rywefznk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ucsstpif.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pqynnecb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wnscmzwc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ceuztvyc.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163xixsrvle.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163igmevjgy.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163mqiqkqap.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163gdtjxzor.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163pvciqhgz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163hgldvvjs.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163lgcmgjaz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163nfxpnlko.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wqpfxupg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163mefoknqc.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163jyinchsy.html

Ruby: a == b
来源：http://www.sxryk.cn/163fvpgdxue.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163owqfybul.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163wehuxuwz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163pfnzkbpv.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163rxwwduhq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163asknwdcw.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ejcibbmm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163qjqhuuto.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163oxzrotvg.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163mhlfnviw.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ocyunkrn.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163odbdxgdj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qmuafvcz.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163uakxmhax.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zhgsmzda.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163iaqdtpfg.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163mrikziey.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163rnpxntrc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163kxfhozby.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163aukghuwf.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163yizieezb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163kcwjkvkx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163qxkexays.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ibjulark.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ohhcskbk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ighlcyat.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163zrjbegbn.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163gfqblgcx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163fbqnovzg.html

================================================================================
来源：http://www.sxryk.cn/163fcxyjooa.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163fvmbqvez.html

================================================================================
来源：http://www.aibaodan.cn/163zgkxvtnh.html

[Q01] 创建表
来源：http://www.sxryk.cn/163omnmmssy.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163xajqbdga.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xbwyoyqw.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163jvbcojni.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163mavtoreo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163klgmkceu.html

);
来源：http://www.xuanzx.com/163dqvispjt.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163wjergxpk.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163dcxzxhwz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163zpkrmztv.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163beramvkz.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163seypjgay.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163zdicddif.html

);
来源：http://www.sxryk.cn/163xsyloere.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163zzdcrovu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163dffkpnia.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163kiexabyu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163rtevdimn.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163vkrlcbsq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163tpwwagiz.html

[Q06] 删除列
来源：http://www.sxryk.cn/163lfgasbed.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163vcrysipf.html

[Q07] 删除表
来源：http://www.sxryk.cn/163dxbdlkto.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163gsdoumao.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163iwdxretr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163hvivicuh.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163gqinbxah.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163cigsrdlb.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163lxvuhnkb.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163conqdbhs.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163bwfrglou.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163gslfolsd.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163dytvkhno.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163oeipdnpk.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163awqzhohv.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163zgakmjih.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163rkqnisdt.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163gyndhutj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163qhnxsvwb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163xcdvlvas.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163urxioxtc.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163orvaaisf.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163hxhkaknm.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163kjyrxgon.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163dkhqfoaj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163baappxfw.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163hltlyglt.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163kksqrcse.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163qhumhgsr.html


<!-- 参考信息 -->