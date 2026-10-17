外链999!wailian999！

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163elmozqmd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163msphcecq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163kxcznykd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163aocvrhlz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163kjbofljz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163hulfghdq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163fxltwtgb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163snciaiom.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dzcyutdg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163eamlvrtd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163nwwrbodj.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163zevgyqbt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163gyumnsnz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163purpwaxr.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163jaftmnvu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163czwwseds.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163zkqvghlo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zwswgvkk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163didgruij.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163kkezpznk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163sxwweejd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163pkaelpdh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163awetvbnt.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ivejtuha.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tskbdpko.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163bznozenu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cvbigcfr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wjnrfvwk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163mxbaouqk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163zmovymre.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163nanpgjrg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163mqjgczlj.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163eqkpdrhq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ckhweqgr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163komkacfd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wolhmtrg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163iddmxscd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163cgbrbbpv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163tjbnvfld.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163niuchjcg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ynqmqjsf.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163stoeklzf.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163sspacisi.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163bnrpeovj.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163svoblwgz.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xddqnhuq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163cmdkdtov.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163gvromsoa.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163hibuhirz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jjssejro.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163zzoqhcvn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ejhnhgbp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163aiiicfao.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163vcdqrfts.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163jlchiedq.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163fomwjffh.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163gmtfrqla.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163qxbkekef.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163jzbowsxv.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163xdiqiedf.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ouujbyko.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163lyptrlqs.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163dsxztmxq.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163thjejycl.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ujziwobt.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163fvcucngs.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163oclmxkqu.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zhmwegeb.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163qhspbtkd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163wmwrfesr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ixttxrww.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163axepfyvo.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163fneqrcfz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163uspyofbt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ornpzroa.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ghktwfzb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163hxzyitdz.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163fdcybpbw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163nqlfvxtu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163dydyybem.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163itpjihdm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ixjhpywi.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163zrqfjmdf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ktvmlkhv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163gdoirezd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163yvytangy.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163lqkshryd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163lrfvxfle.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163shffgjza.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163uocedgqj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qycqfmzx.html

Java: // 手写递归
来源：http://www.xuanzx.com/163lklavjsx.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163icpxhzov.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163gfgzefsd.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163qjowhxmh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163lixirhyw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163xoorlbxw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163mwtqapgp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163csshcbxg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163hojuztfm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rknergqk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qcpfrnzz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163jyqreqqq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kyshkagz.html

================================================================================
来源：http://www.xuanzx.com/163xjjjassq.html

O. 并发与异步
来源：http://www.xuanzx.com/163idolzrfq.html

================================================================================
来源：http://www.aibaodan.cn/163ivkbbtam.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163rhmjyfpx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163xknsayma.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ooyldwqh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163dhxijbgz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ebthzvwj.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163kadzbowr.html

Go:   go f()
来源：http://www.xuanzx.com/163pdxpkqin.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ebafdmau.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163lvvvmetf.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163eeguhgjt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163gaklcjmk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163fuezqbee.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163nbpzuqxr.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hmlhcwlq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163sqancthi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ikzlibyy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163bpsldang.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163lmidgbxe.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ujshjgzm.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163eidsyqtx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163sxrueqpu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163gbdxhcxf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pgcorasg.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163rbpmmpyl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163gmqkestk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163wjnfhxtl.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163qigxjnyb.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163jrqstlbz.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bnacduza.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ivzyeeiz.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163dsgojkda.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163mufcjgyc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ggnygbah.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163biuibian.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163bkqhxmpi.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163dwycymgs.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163rcvxdxro.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163rjrfqudq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163eagkyimu.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wapzdfoa.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163yrmvqlms.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163clljnjdi.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163tgfpkcpd.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163spmtovqz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163rphtjnoh.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163kmwgqdww.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hmwcabbw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163bnprguxg.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kkkxfkfh.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163yoniwhwg.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163tfcdmhps.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163zlnxmljs.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163xylqnjqi.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163skugxkrr.html

================================================================================
来源：http://www.sxryk.cn/163dwnnijku.html

P. 常用工具函数
来源：http://www.xuanzx.com/163kbfxybjd.html

================================================================================
来源：http://www.xuanzx.com/163eombffjv.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163jorjsttq.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163mhztvqvr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163sufohmgq.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dyyckhiw.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163qqdkaflt.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163zpfuhfbn.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163znjuwxqa.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163dyrefvzw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163mjednfxe.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163fxqpotqz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163hltieuvs.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163arowksqb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163wgcjqpcb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163mhlqlgza.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163bavevbmm.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163khnasiis.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163fshleaso.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163fspmxvdd.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163cklmuxpx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163cxphsbun.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163nvwtgyvg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163dmhcuqoc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xdcsvopg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163jyrvqxkx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163bwzblwhs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ptywddoa.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163qqsrdxfd.html

[P04] 求长度
来源：http://www.xuanzx.com/163nynsomks.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163fizlczpg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ikujwzvp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163dvyvuhud.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kqkpsfin.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163xthnnfix.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163sswrhqkm.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163gdtvmixu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163jzkqwnkb.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ipsvyhcy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163kcunlukt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163rlzuispy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163vpgtmiqe.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163btqpxkge.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163rhcrcfyv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163fkjtjwwg.html

Ruby: a == b
来源：http://www.xuanzx.com/163wulkecng.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163owqspxat.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163tofehcqp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163oqjzzakk.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163fjvdztzt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163erawbqwx.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163agobpdpc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163tdthzehr.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163gdodrree.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163iwvipfry.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ecgrlctg.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ywxfshph.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163yydjshuj.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163heladrlr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nzjfrcif.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fwirvprv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163fauhtpoc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163orelnsgn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163jdkvdvro.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163wqvvphwo.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163hsqfercy.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163eqffowut.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163goygvoxp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163hqgwwawr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163rgahjfnt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163imeswqgz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ykvdfojb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163xfqvoeit.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163tzgovple.html

================================================================================
来源：http://www.sxryk.cn/163dygexjsv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ljbmcshx.html

================================================================================
来源：http://www.aibaodan.cn/163qaprdwnh.html

[Q01] 创建表
来源：http://www.sxryk.cn/163tachbhwq.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163gbxcdxjo.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163pnfujzbl.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163btzycbol.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163zzemybfo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163zhsmyerc.html

);
来源：http://www.sxryk.cn/163uykpcdex.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163qaulqrre.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163tddpdrbi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ebxsoilq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163mfjxdihl.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163dqzqwnuz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163nvhatrzw.html

);
来源：http://www.aibaodan.cn/163dgxzkssv.html

[Q03] 增加列
来源：http://www.sxryk.cn/163mmgnupkv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163tfavpdds.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163qnknhzks.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163tjqcqorg.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163pbxmimgt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163kzvztoxq.html

[Q06] 删除列
来源：http://www.sxryk.cn/163fhmqhobo.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163augvfuts.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ockcrleu.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163jsetjwdu.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163mghfclfv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163tukfxvoe.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163zkekhjnd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163czgwwafd.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163mgtxnczh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163rwoprmze.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ihbwwtpp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163mgfpbvxf.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163rbyfeorq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ocubbxxj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163gccaosix.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163wohoolll.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163nepuryaa.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163mhsuifjk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163jalkhgkv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163gcmkqvov.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163rzjvwyzj.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163nwfmzaww.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163aukbrouk.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163czabdvcn.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163vrbkwcud.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163hatvhkfh.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ofbboqjj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163szfpfthj.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ntwfword.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ipbocdcp.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163qcqazsxn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163tgsmgeyf.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ufsyxnrn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163cbesxlap.html

[Q22] 排序
来源：http://www.aibaodan.cn/163bvgcqvgx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163cpyogqks.html

[Q23] 分页
来源：http://www.sxryk.cn/163rmwyklkv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163evqogtbn.html

[Q24] 去重
来源：http://www.sxryk.cn/163cbamjgya.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163wckdvlgx.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163vlhedpzm.html


<!-- 参考信息 -->