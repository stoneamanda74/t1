外链999!wailian999！

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xlrisrkd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163baqajyah.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163tnzmnyoc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163qalibwgs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163rvxudxha.html

================================================================================
来源：http://www.sxryk.cn/163sopzkmkn.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163fnrpuwcr.html

================================================================================
来源：http://www.aibaodan.cn/163znjeeszv.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163pblzaiyc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163iynjtdfk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163excrhlki.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jpdqlods.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163elmpusif.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163dmcbirsj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163majayoch.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163kquoxpxx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163xdteopzf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163pbqqazgj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rbnarxqj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163dfyfllxa.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ogumlnso.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hqgrawcz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163hbpngbch.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163irfgxprr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kormifqe.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163rwpxjxxx.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163cgqgltsi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ofogzfxy.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163lbocyizi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163abacctvm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gjlhleak.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163hiszvmwr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163uluuysvt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163fdhhwblw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163qqwcibmy.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163vvecefzp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163blnvolex.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163lgcbcyhr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tqxqxwxo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pjlwdcbu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163aejauzvr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163olxhodni.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163thmefqmp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163bmwrzsgt.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163wsvazabf.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163dfnfxreu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163csgdnxbo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qroepwal.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xwojluyq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163maemkjbj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wtdqeqta.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163jlxeqzkq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ngwnpwav.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163mmfsmnjn.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163tavxkwdl.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163kwzihyaf.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rigfvxtd.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kigfsqgw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163haoccxlw.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163hpfcrpzc.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163lnuxefbn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fkejrnyr.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163itbktlic.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163phrnxend.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163grqyhzdk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ccqarwgw.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163xwwsbahr.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163idxmodvn.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rfclgyov.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163lmfdytgb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163neivalcs.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163afwtqcka.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163omsxpwac.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163iapwypxu.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163htlubpwm.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jhucycop.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163crqiwfdb.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163xpgqiccu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163wzneskpj.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bmrjoyjg.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163yfsbqazb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163cwygnnxq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163jyiqlxbz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163mubkzcex.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163nlnmpfyf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163zktrykyk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163umgvfnhv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163evtwrjfm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163unifvnzj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163cahmowja.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163eybtfuwn.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163mhjehmzp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163bwjzasnn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163tijjonec.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163pmrmjygi.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163mqlasjnw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163qlhyrdjo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163wbrqjbhe.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ufwiwupl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163gyvykzao.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163wclpymvm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163remwlpbc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zdgllout.html

Java: // 手写递归
来源：http://www.xuanzx.com/163tsjtpkpb.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163sfdyolwd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163avjhoqvq.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ishlyohq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163xkyrojlg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163obguwqaq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163lojxuqxx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163dqphwuut.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vhdwybuc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kswykkcz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163uhmypfbt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163dichxovy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163cqtytffc.html

================================================================================
来源：http://www.sxryk.cn/163hcehxuzf.html

O. 并发与异步
来源：http://www.xuanzx.com/163gmrazxvg.html

================================================================================
来源：http://www.aibaodan.cn/163xcemnvvi.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163hzprqbce.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163iwomwaor.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ufvrtlyg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163osztvbla.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qubbueai.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163tatctsny.html

Go:   go f()
来源：http://www.sxryk.cn/163mpkenbyg.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163iizrkidj.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163wedvvtjm.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163sqqydsrf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163jzwryafx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163rtiwfvzz.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ghesgyku.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ohjscqvq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163otnizpch.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gdzkbzao.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163vswxfkdu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163zvhlcbyr.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163kbdlpgpf.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163joefywpn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163yfezuhpu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163jcvmhuur.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vrqigben.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163trsseerj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163cbylfuue.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163iydjhybo.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163zudqqjbm.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163xfejpncd.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163sbvffvca.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163fjyulyif.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163nqigzyyf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163nvbdmwol.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163rqnzyoip.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163kbjnrsvy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ivcdottx.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163gczgidlf.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163diirfnos.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163xikdjjxz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163iqbkqija.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tczymskz.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ssdjbzkv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163hoiijmam.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163qpbrllls.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163efxljeuf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163mmssdmbd.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163bqlfxwwg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163rxaftakj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163zuvutrcy.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qvhgdzpy.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163abzysbrh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163foityguk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ixkpqbsm.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163aavtzinf.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163stwbnmii.html

================================================================================
来源：http://www.sxryk.cn/163wmfeiyas.html

P. 常用工具函数
来源：http://www.xuanzx.com/163lfclpayi.html

================================================================================
来源：http://www.sxryk.cn/163fabaexdx.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163wcawwiec.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163xwcgkdlx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163jttkhpen.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163cxbqjdhu.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nxsyanrq.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163rddvwifn.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163lttuoqdq.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163cpgzqazi.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163bmkbpglv.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163xefvzweo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163fmxrovmx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163vwwppedg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163fgpvjpsh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163cxdwsbud.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163imjwzrtg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163zibvwbjr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163vnanzzqy.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163wqzhahhq.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163oqemqyuf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163gtyavjey.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163txcurggn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163oimomdnm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vqpcsxap.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163avhqdvkr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163rxzemjdb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ufmvrjhs.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163hcgnywhi.html

[P04] 求长度
来源：http://www.xuanzx.com/163xjlxubvg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163yfpnydpp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jegysjxz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xapnmqrz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163yeyezbjy.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163gpoqnqsc.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ufecderg.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163bjzxdtpo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163tjihkfug.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163miwgqpoq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163filendcj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163hvwmzxoo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163yjnrvsnr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163euyzbwzd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163nbbxbgxu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163nngeolrs.html

Ruby: a == b
来源：http://www.sxryk.cn/163lcgapsjl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163hlkyxfgk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163npghapem.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163xcbjrzhs.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163abdpcksd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163whbaixop.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163dyehyrbj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163cafnsvwj.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163qklbuufi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163gxbhmoya.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163bsjutggu.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163jcnhwdeh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163nwizkael.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163kokrzkzr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163alxfdncy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hsearcud.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163tixriacj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163tbhyeymh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163jzkhlkxt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163nclgsozr.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163lvcicoqs.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163wauqwayt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ufwwxvtj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163igakfvdz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ugfvoxkf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jqounqcu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163wcemaari.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163baadllht.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ivudefzu.html

================================================================================
来源：http://www.xuanzx.com/163etyrpjvr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163twomzkop.html

================================================================================
来源：http://www.aibaodan.cn/163yihhryjb.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ctrweidc.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163keidoipu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vbyoclgz.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163rywetewt.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163fleppucu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163iceqjcar.html

);
来源：http://www.xuanzx.com/163ypuyiajd.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ynshrvuz.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163kufaufrw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vukaiosf.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163qigblpxx.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163dhvkztdf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163faidrgwt.html

);
来源：http://www.xuanzx.com/163gukhpilm.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163eaylkkfd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163zvzdyrbu.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163rhhzbtla.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163fkpedljv.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163nlosjrkn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163csqweync.html

[Q06] 删除列
来源：http://www.xuanzx.com/163knzdosxf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163upstwdiz.html

[Q07] 删除表
来源：http://www.sxryk.cn/163uetsgmpx.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163goxaduas.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163anckujoi.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163tglqswsy.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163hxarrcyl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163dbohkxui.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163tzpchzpc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163rijkyvfs.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163piaaiuqi.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163pyxrtpdy.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ronozgvk.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163htqegurl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163rtovdtar.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163zdrjqidh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ibmstqaf.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163vkmewjan.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163sepyluds.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163irgulebf.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163bllfknyl.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163wovkhuox.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163wjbojzgi.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163smhqkibo.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163chzkfagy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163douazbda.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163xfacachn.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163euwcjvmu.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163tilazdjl.html


<!-- 参考信息 -->