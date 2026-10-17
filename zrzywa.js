外链999!wailian999！

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zzqtmuwq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163zybehykr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163eyhyjvgw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163geqtebjt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163nwyoxhwb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163yjhnbjcp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dxtmrinm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163nadtdhjn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mkkqwwdt.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ehlskcxt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163nakvnolu.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163hmausawd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163dwdlikjp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163leqcbjor.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ohcqfwju.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163vuhsfpvu.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163fkquosgi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kecopzuo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mknpilda.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163lbwcttrj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163wiwedbkd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163rawibtpg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163uasbbhfq.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163mhyvtnth.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163glqbvmft.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163cwjufvfa.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163njtodpev.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lapjyuxy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163exikzixy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163kgzdxjym.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163dnsvlddd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163iacyrkzz.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163aobtxmkc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163akudmorm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163nobdcslq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vgvrenrq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163dscpcjdu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163dtvwtyug.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163uxnkoeqf.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163xngaogej.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hpukezts.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163amhqeybn.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163fyvkcmsh.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163drpwppte.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163btfjvcwy.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gtvlxbpz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163esywyryr.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163qcxaneyk.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163utvejbnk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vuyhpizn.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163xhofpjkl.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163nldzoymw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163kqvgvrbi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163unrlptee.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163tmfiifof.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163yfddwrzi.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163wwvdmuhf.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tphmpgvq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ynnhydjx.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163xrriwxwf.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163uyklymyi.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163crqzkora.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rydbykgq.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bnrpvhme.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163gtxkkrma.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pugjadcs.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163gnqgxznm.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163hupndopz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163luogbdvj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163canljnmo.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ftpqsvmz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163hjsfcyuu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163qqldkygs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163agadnpfg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ykbcckvf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ediriykl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163seohkdhz.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163memnxrig.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163gynjdwyi.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ngrmbysg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163kjohyeti.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163mfdiodet.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163hqrvxhak.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163shdnxbbn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ywghbsdy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ehinnbzc.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163brmtohbc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163rcmgptmg.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163eguwhqkt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163etmvgaqs.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tnnjzlij.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163tjxvuqct.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163qkergngp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163kejhscrs.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ujcvhriy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163kouzotpo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163lncohpkg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163glmbscdc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wxdqhzjt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fojuxzid.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ygmxrfam.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ljzuggvd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163wplarzmb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163thhwjiqq.html

================================================================================
来源：http://www.sxryk.cn/163otbrecdz.html

O. 并发与异步
来源：http://www.aibaodan.cn/163enndbdxr.html

================================================================================
来源：http://www.xuanzx.com/163llqosnkx.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163jfsyfzvy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163pzgwemww.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163qyutpmkq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163dzyqqtrk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nipxlgfq.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163yifhqevb.html

Go:   go f()
来源：http://www.aibaodan.cn/163ntckbqgv.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163rjneyltj.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163vuyhumpr.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163dllkxalk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163gkzjzswo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163jyiwebmb.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pdenddxj.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wevewbuu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ihqorfbq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163atscbrpv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163rfjuyzcu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163kinafrik.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163reycvmuy.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163szlfdlqu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ekfenqfl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163slnoqiag.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163anbnssfv.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163djbwqecs.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163fdmkqvef.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ggketqlc.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163vttftbtq.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163vbswkpkj.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163goyuxdbo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163pkrpxbor.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163weklycli.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163mkwnhvbr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163bguyrzgm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163qhvzveba.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163gbnhnpfw.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163xckpvngy.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163axpablel.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163whegdesl.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163znqrwlwz.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163rokyaiib.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163divjkfed.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ivtrlphv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163yfbkdceb.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163mjkvoxvw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ucxcfhwh.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163pgwwlbps.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163fqiwetbs.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163erfddqxh.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kmkixtmk.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jlebyjbf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163wfosfsnh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163lfncxzaf.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163pfwwaftg.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163gucvzvme.html

================================================================================
来源：http://www.aibaodan.cn/163bqmhnljs.html

P. 常用工具函数
来源：http://www.xuanzx.com/163lajdjkrh.html

================================================================================
来源：http://www.sxryk.cn/163xmpucdvw.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163pcelmqjl.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163qlrqdpfd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ginqhicg.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163uiuoisxf.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ryfsyxdd.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ifguxwtq.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ymegcaft.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163pknfvmmz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163wticzcrv.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163gsvkwczc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163syzrrhkp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163qlrtblwk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163fmzrzsfm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163gvuvzukp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163lgiajduc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163nyeeonhj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163qbmckphv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hwrdjavh.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163vwlroith.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163iioomefh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163alroiafq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163coyaqoic.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cndnhoro.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163bnghmqkk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163grltlhrb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ozrmqsan.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163fzyqvxxh.html

[P04] 求长度
来源：http://www.sxryk.cn/163gexshcmq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163yqlyrxio.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hgdseddx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ftfyxqzd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vafahleu.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163hfgpzxax.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163jkwzikfu.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163jsvxxpds.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fsiczwuh.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163okkrlrmf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163fdiacdip.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163rokgjlbo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163uocmtniv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163stmfkxbn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163pqcpnagm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163nokcvwyd.html

Ruby: a == b
来源：http://www.xuanzx.com/163dmntlidf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ijgfonay.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ojduehye.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163bmjsqvem.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163mtzfqswo.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163nxipesya.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163dokcgjai.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163tpcpydtq.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163tcoypqdy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163qrwijapr.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163wnercupr.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163uiabsrpn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163nmknwqsd.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163qfxhmcpv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163egqxndjs.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nghvfvbz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163olijwxmp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163adsgyryg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ybkgcqzb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163dkpywsvo.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163cgrgnexn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163rutdpojk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163tcgzmdxz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ikslfjqe.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163jezdjrcb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163fxjvsqje.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163gamcfenu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163gfivmrop.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163gnjtapdm.html

================================================================================
来源：http://www.sxryk.cn/163geobtkfw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ojihjuhz.html

================================================================================
来源：http://www.aibaodan.cn/163fmcrmipu.html

[Q01] 创建表
来源：http://www.sxryk.cn/163unjmgyrm.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163rzqjkzmb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163pzaardnq.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163qpibgplv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163kevqqooe.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ivrycgoh.html

);
来源：http://www.aibaodan.cn/163snxomvvb.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163nyikfmwj.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163vsxtodoj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163klibhxcw.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163zmlsurlm.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ojjnelsr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163odrhizzo.html

);
来源：http://www.aibaodan.cn/163jzgmsnvd.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ynixkhtq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163mgeorpku.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163amnvwldb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163eraztzzt.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163zsksieoq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163wtqvscyp.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163eisblcvu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163incwohle.html

[Q07] 删除表
来源：http://www.sxryk.cn/163nfdhtacv.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163huxrhqct.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163rbtnhyrr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163lnxkqtas.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ddbvcipw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163qcfyiuwj.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163hctugkpu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163nqewluiv.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163jhtjfmit.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163touwrmar.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163gqwbjwoq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163qghvgfaq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163vqvuhkjr.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ibnvcttg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wuqqvbhf.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163vzsrwuim.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163vnnnupvp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163pbrkkmtn.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ehsvyapu.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163dntieser.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163nbilvwpt.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163vmcaqlal.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163qlikthyc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163pixlzxgj.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163kvtpwtka.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163zielbhbz.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163hjlfegta.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163bjlnlsrf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163chucnjml.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163aoeismia.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163fxtjzkvd.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163msefnhtd.html

[Q22] 排序
来源：http://www.sxryk.cn/163nukiykwn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163bqblnngt.html

[Q23] 分页
来源：http://www.xuanzx.com/163rifaivzi.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163eacztfab.html

[Q24] 去重
来源：http://www.aibaodan.cn/163cebpvahr.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ajjzdmxz.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163vorftwlf.html


<!-- 参考信息 -->