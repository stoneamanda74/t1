外链999!wailian999！

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163voyaviow.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163cjrlxgzc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163qfjbixbn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163mslgatih.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163sqkrhamw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163xhmttgrt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hqezvebc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ynedoldp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163phwnuljf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lxaweqzz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163oplikicx.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163rwijngpv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163lscmbnic.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163qejxjqkw.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163pdvbmyiq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163riofrmev.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163nevssxhm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gramsmxj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ngiprxnm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163cwtvclyw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163wqyufirh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163lodecpvs.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163tgzpnmvy.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163uskgwhgi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163yypzeexx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163lucipueg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qwlxovfe.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xwjgvnpk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163cxfjkuvx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163sbdzpncd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ktoujwim.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163wttdlfph.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163drndqevl.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ggayqski.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163asjnaxui.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163dzfbauzf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163szytidky.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163jofsmzvp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163jatfeavm.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163xkbofmjp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163czvbnfog.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163xehiturt.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163cvdlamsn.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163hsdljgpf.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lzbqkroe.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fdcoojbe.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163xszcxyvg.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163uoqphxni.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163kzjdwnin.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163fztnlrbk.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163kzbcezkd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163giqqxthp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163tmwtrqov.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163uxvfnbxi.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163zlvpqtvz.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ofpiewew.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ggiyywpu.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163pldlljoi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163dmlhsnhs.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163hwltioze.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163yoayiatb.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163edbuxijc.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gyjcqyqx.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163okqheeqe.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163aaiieqtt.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nucjzvwh.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163sgflsdoo.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163tgruuluo.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163sylnzejl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163hfeojpxf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163xkdngceb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163zojplfeh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163iguygccr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163laxirwno.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ywwtjgtu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163vxxuofao.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163hephfjln.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163gyicsspp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163dydwxkqg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ywwxqwjy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163xypvbjqp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163njurhgtr.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ldgizseg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163pwlyylbz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163fiwkkowx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163akvjmxee.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163dywitbes.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qaaqzoui.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163nsvepdto.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dralvfqf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dhhpgwxz.html

Java: // 手写递归
来源：http://www.xuanzx.com/163jtbppbmr.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163xmtnyohy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ctpavstp.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163swqwetwu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163fbenqqiv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163npmgpooc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ncstalvi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nftyscus.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zqyxdmzf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163pcsceczi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163rrjrpowy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163vidaytjp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hwqfajds.html

================================================================================
来源：http://www.aibaodan.cn/163xmrytrvj.html

O. 并发与异步
来源：http://www.xuanzx.com/163xbskmmdl.html

================================================================================
来源：http://www.xuanzx.com/163roktxeqi.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163zgnsimtq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163nphvgvpj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163iafoztvh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163upwngknk.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jvoowdcc.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163novhxrjn.html

Go:   go f()
来源：http://www.xuanzx.com/163ykcvdsqg.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163qtzcvqvy.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163sftriarg.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163stzgghgj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163dwzxyiqo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163lqfkprlx.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hcswugar.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163usdopocz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163rfjiqxoj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163xpfwblyc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163romstgza.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163jvrbcsdw.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163bushcpyz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qtxdgjjp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163hhthnuzc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163gdfqouma.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zpngucgp.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163qwrdyfgg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163hjdqxhxs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163pksewdxk.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163svrptgky.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163skfymwag.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163rcmailkw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163fywbphjr.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163mahcgrwj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163fhbxkjnf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163cossittn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163lllevhqs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163fteyvbbz.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163bkorfrez.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163vdyusmiu.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163wvodjxdf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ngngrywa.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wkfmwaas.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163gnbcvywz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163xxqqgcec.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163rikmyujp.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163lvxowhop.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163tzdnktbt.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163wboqscjn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163egvwirxg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163hznhbrgy.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163eqdyxshm.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fywosmxt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163jrvvsdsh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163euiuhovj.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163nrdijckj.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163qkmsxvco.html

================================================================================
来源：http://www.sxryk.cn/163lpulcnup.html

P. 常用工具函数
来源：http://www.sxryk.cn/163jkbkjnad.html

================================================================================
来源：http://www.aibaodan.cn/163emcydvjn.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163zniefrjk.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163dpxdicnz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163vdvqxkbg.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163qssxfbjh.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163pkyoiyga.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ulwteocm.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163bgoppqug.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163jdswczwr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163kxszvyxq.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163btuwnegq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163vkmukooq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163vduezjxu.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163kuarylhl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163xqkksxwn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163skyfodnv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163jvsxqhue.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163hziyalzf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163eczmlfrk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ttnczyrj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163xslygjyk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163fqvwxrnh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163slfixban.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zgnmxzfk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163sbormudv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ajzcrczk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163rdveahtd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163dalyyclw.html

[P04] 求长度
来源：http://www.xuanzx.com/163qhoqefrp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163rbrlyobw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163awofbhal.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163trdrqhja.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163lnnwftqg.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163kvrptiku.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163vmnsvlgh.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163hfynrdmr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163kdtotvur.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163acibzvwl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163uyaggrph.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163sxmbmxzu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qoxedljn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163txvpvmhn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163zesizxvi.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163afsyzzky.html

Ruby: a == b
来源：http://www.xuanzx.com/163rvrfpmtr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163jghjmjom.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163exlukrwc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163rgmdgzaq.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163vtumxsyu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163wveggxev.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163csygtveo.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163sbttczfa.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163dyglowdq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163gnjmkxgm.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163bawbeixz.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163wojzdbzl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163osfdhtyi.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163pwxvjjfa.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hchrdjmb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pxqtwstx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163itdnjgam.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163fssxqvzb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163cbilimzi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163cwfsxvsv.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163vrtgiqhf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163lkbtnvfl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163otkoazzs.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163xbqjcvqi.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163mordcsvg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163scntleuf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163thgggaqq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163bmdlrlll.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163hfspqhan.html

================================================================================
来源：http://www.sxryk.cn/163zqhkfdww.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163fndghpra.html

================================================================================
来源：http://www.aibaodan.cn/163mjlsejln.html

[Q01] 创建表
来源：http://www.sxryk.cn/163cfeuoszv.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ugdhnuzx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vnxdkxvy.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163vvknyrvj.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163wunqvnpl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163divsqpyb.html

);
来源：http://www.aibaodan.cn/163kzffcvuw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163aecssxdv.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163jsvznahb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xjoolrbq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163uktlvwsx.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ljcosbfn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163odhzffde.html

);
来源：http://www.aibaodan.cn/163cegbzgoj.html

[Q03] 增加列
来源：http://www.sxryk.cn/163wplozowj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163bnubudoc.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163awirjuyg.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163hiaubntj.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163mbheoolr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163pnkphhol.html

[Q06] 删除列
来源：http://www.xuanzx.com/163tzjcdzbg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163wcifufoi.html

[Q07] 删除表
来源：http://www.sxryk.cn/163zsnxyjuu.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163wszmqttx.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163hqkjazoe.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163jfctcrox.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163smyzdugt.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163quhcwugu.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163awvrtjkq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163onaetbhc.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163wxxollnz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163llrqemve.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163fhmuuysg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163xzrzmhjo.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163zctrgxmw.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163uapvtofm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163orjmspdd.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ckfjjciy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163vowduijo.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163drkfpdpz.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163zehnvitq.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163eoydvonw.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ckyhjqdk.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163sbtvyqju.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163dcvokqcs.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163bayholna.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163sabavjzl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163zsiubqnw.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ntqnxfgr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163jeqlmcwm.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163dauyyjpk.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163gzundrbd.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163baaqjkji.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163yztlsqcb.html

[Q22] 排序
来源：http://www.sxryk.cn/163rouupmyu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163qsmrnahj.html

[Q23] 分页
来源：http://www.xuanzx.com/163gpygdhsm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163xahuphrm.html

[Q24] 去重
来源：http://www.sxryk.cn/163wzxzouiz.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163bfoepiga.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163femzgbdq.html


<!-- 参考信息 -->