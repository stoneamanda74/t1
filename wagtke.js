外链999!wailian999！

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ebzdjxxn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ngyeetjz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163uxcazhjy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163okaangdm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163fqmokupe.html

================================================================================
来源：http://www.sxryk.cn/163ndgpxlnc.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163symnzakq.html

================================================================================
来源：http://www.aibaodan.cn/163uggztfuf.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163woqiisko.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ixalxlnw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163hwvfiqeu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163opnrqmbe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163aomnubkr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163aypoxbgt.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163hqpisplq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163akhqtash.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163vcudppcs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163vgjaexbq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xibhanow.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163xqevpbhn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gluozpdy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lqzvnuof.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163anmmvhif.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163joyildvk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ruhlpdpl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163rnohoqou.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163jsvfnuyr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163nuaoctxd.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163sgpmqszn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163nlcnsrmp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163amynzgig.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163jdzcxyrk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163npomfuex.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163knnigkjg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163lnvyxeiy.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163uysrtcfr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lprgyuqd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163jigatpeq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lyxrnjse.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cqecndjs.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ujzpwwst.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163hjtwzjnx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163yldmjfsx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163csckmbok.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ahezcuwv.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163txpxkimh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163laojutow.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ubokgccp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163faeemiwf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163lxzdweac.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163vvgasjjf.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163huxgjgke.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ujwipdkd.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qxmzeqlm.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163huttqbun.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163jlbklrqd.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bikjbzdx.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163iynkqivs.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ogwodqen.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163dconekyg.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163dvvhctka.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163itsunvvg.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163hasdzsrc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163crdwrefn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zhbqzcis.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163qmupyows.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163wumxrwkb.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163mhazzczn.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163lhvlmykn.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163vzkkrwdi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ngtwjguz.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163mlbtegew.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163vusmbfus.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163fmwlhdez.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163amejknho.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gzkbwwiy.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163zhdzdvra.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gecmxcnt.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163wpqeraul.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dqedmcoo.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163uflxrfij.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163cvspoliw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163tbejclxp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163icorhnpe.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163pdppnvjs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163auskojiz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163aneeqgnq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163mupjgxjp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163lrdlimzc.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163zpjvcdwh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163gjewfjsj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163oknsajjv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163wzwqrfmm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163qjrxidwj.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163qddfxvmp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163axhybiwy.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163hmcayubf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163gixpodak.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163saslzvpt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163oifhlagy.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163cmupwbru.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jdfcfnmo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163typnocth.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163fushwtrw.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163bpmqijcr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163tsgrbfgv.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zxvnvxvl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163wdpytnwg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163frtykilb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163xcunifvk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jiyrkutz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163puhpuwqb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fbaluknk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163pfhennor.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163xcmihzia.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fsgwbfqk.html

================================================================================
来源：http://www.xuanzx.com/163pnhslekg.html

O. 并发与异步
来源：http://www.xuanzx.com/163cheptysc.html

================================================================================
来源：http://www.xuanzx.com/163eehxxhik.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163aokkvfhy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163esftyryw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163fafidtxl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163fzxblunh.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yqddlvkx.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163dxldtuun.html

Go:   go f()
来源：http://www.aibaodan.cn/163jrnjxzby.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163arazhfuy.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163jnholkhp.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163nefxbisu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163djvqtqvl.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163knrbsgbm.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zgjguien.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163doykuyvc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163fmircsig.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163jfmkmrnx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163xhkzpfgj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163gpyraago.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163xnezkbpz.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163iiloqcwz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163cdtbqtqe.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163aahmpeuq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163kttidqgy.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163syqohvim.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163kqhphcrc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163qrmwgkww.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163axudksac.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163sucuqdis.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163atcaqvwz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163sqhakann.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qkeimssp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163zfpgdeel.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163wngghaqb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163wzrsxdwy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163cmpwrsvs.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163htwqrvgx.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163arbxnwoh.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163mltefybp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163gvygemvy.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qwytabgo.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ujmrbgfv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ugxiqlel.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163nzdemlim.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163rlaozyow.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163rbcxmgnl.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163mbbnjgfa.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163tzymhvld.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163kurdhsyo.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163hnmfzikw.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kovincbq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163pgaeowhk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163jjdsdcsd.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163arfaxsrk.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163nrowgxxs.html

================================================================================
来源：http://www.aibaodan.cn/163cqsqjcgc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163sqowklcd.html

================================================================================
来源：http://www.sxryk.cn/163fnpyvvuq.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163fuplnnpp.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163uvewticg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ibuilbra.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163zfuolrjd.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163zqcytior.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163gzwzfnjy.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163avjuluam.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ayrtzsjf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163cwjhfmfy.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163vqerkldt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163hvucovxf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163frnuniao.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163cxsyzbek.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163pcmefnca.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163rywlhglr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163jjtiwdgu.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163qkvgjdik.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163yerznhmh.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163dvjtevqu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163xldlziyc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163hvkhvblr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gwseapth.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163qncvwlct.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163nkbvmvpw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163najzxicz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163axtbqejb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163gafkybgx.html

[P04] 求长度
来源：http://www.xuanzx.com/163lzssnmlc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163pcijwgiv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ddcutrwy.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zijybbgi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163wwgnukav.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163vqmvrfqq.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163efwuatps.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163xbsrggdm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163aajsemyw.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163wvpcvjia.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163etgzcwcb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163brkewwph.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163sowrzwpk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163nkbkyfft.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163omcnqijl.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163jlwrnget.html

Ruby: a == b
来源：http://www.xuanzx.com/163dryqwcat.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163mmldjgnl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163tszoxthg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163glocjnyw.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163bocpnqry.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163ersqnwzu.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163puyeyeye.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163jgggydzn.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ghdwjtug.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163lchamijg.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163lawtwohh.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163gepothot.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qypsaaln.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163nutkhrfe.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kanbkmwx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wiaegjnw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163fjrxbffn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163dpfovefc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ogxjbzmp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163nacemiin.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163xzdexvjt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163lcfviija.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163gdjfytqf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163gdvxllou.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163voulrpzb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163bbfchkwc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163nzursjgl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ktxnxqkt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163kwccxlph.html

================================================================================
来源：http://www.sxryk.cn/163rqnwvpuv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163zpocbfvl.html

================================================================================
来源：http://www.sxryk.cn/163hxtatmra.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163hxeyqgcm.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163kbkigpwt.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ocahgypm.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163sotwwsdw.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163pfixqree.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163sarmtlpm.html

);
来源：http://www.xuanzx.com/163npnegszu.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163fkzmysvl.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163terdaymz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163oruuxzto.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163cepbregz.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163yjfhbhal.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163dtstnioz.html

);
来源：http://www.aibaodan.cn/163xsfgfjwm.html

[Q03] 增加列
来源：http://www.sxryk.cn/163itvjdxlb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163xaokrbbh.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163zepwbzrd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163subrygfr.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163lxfjugkv.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163axecmwtf.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vjfhuuum.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163gvokdnxq.html

[Q07] 删除表
来源：http://www.xuanzx.com/163xhxehwhv.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163blwlhgme.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163lydqsxjy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163awayaqxb.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163isdfqasb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163wfbbibwn.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163uiheiarq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163damlybbv.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163xxultyls.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163medckqph.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163rqgnowcf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163rggqslxg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163oxyarmsd.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xyoakedc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163rrhysmna.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163drczkysa.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163selrdglv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163xwdnxhff.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163kxkefnrc.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163qzfidnkr.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163byllummk.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163libbedsf.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163fprytubi.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163lvqnqkjo.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163aqbeipll.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163nsarhtvs.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163fmcuzacm.html


<!-- 参考信息 -->