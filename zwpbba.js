外链999!wailian999！

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163rlhesmfy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ulwhvqgt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163jgadorrq.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163zbhwezoj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vguckumn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163rkvpeuag.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163qhayallw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jzefyohv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163gzrqqgqu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163jxcqsgwq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ohptijww.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163tywjyvpx.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163pagmoeqw.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163jregqzin.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163vyryljnr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163eoqkqcvl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hlltoavk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163jfqnmwbb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163hhzjoasg.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163hyqqzpjg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xebhpvpd.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163bdwdhhqq.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163bnnxeaya.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163npzyapqh.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rxgpvkme.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163twgbgpmp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163qszeskem.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ngkjxdlz.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ezvoktqa.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163iyrxaosy.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163vrsnhlry.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163tfbjygdz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163efjfxqgp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163rhxpntlq.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163odyuypbq.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163tlfvtjtt.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163setpvvsy.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163djttaajd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163zipehfmk.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163bbxkvgaw.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163osozdnmc.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163prbwxtgl.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hzgjhzwq.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zgiiovqw.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qvfqcovg.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163wtwskuql.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163iulwzcrr.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163rtcgdxzt.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163lwuundkp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163lmvgnyzj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163rkccazqg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163rtuppbvc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163guiczsfo.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163jhulvnsm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163gxrkxkjv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163zmplaaeg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163kynxgyii.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163jxifpyhq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163pkghhdgb.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163slmfpogy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163yebgiwzz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ykkfgmlz.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163yyrqunwu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163tmqbfhyw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163vfmqiwhj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163gtdwxzvp.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163olueajyz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163fusdcapr.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163zebwwfhr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163yfsnffjt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dbehpuns.html

Java: // 手写递归
来源：http://www.sxryk.cn/163kjrtxjra.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163qukzdxyt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ixowzeck.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163tohjhqsc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qptcflpk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163cwptudeh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163uqxiqnxi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163axsdmeqs.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qmdusuoq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kgdctfjd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163cqhtnwhb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163bifwcbpv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rrhwvpsf.html

================================================================================
来源：http://www.aibaodan.cn/163tmwcghez.html

O. 并发与异步
来源：http://www.aibaodan.cn/163zgmhbdqn.html

================================================================================
来源：http://www.xuanzx.com/163mcmwnscx.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163xtkkazuy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ogvfxcpc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163keiyhnfm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163fixginow.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163axpeyniu.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163yvcyndfa.html

Go:   go f()
来源：http://www.sxryk.cn/163ocsuhudj.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163tptxawtx.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163udulhxgo.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163sraycjeq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ertrxzek.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163algkkkcx.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fyztdovb.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qeytiqse.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163twiehnxw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163cngxzytn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163jebhpuxb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ujhdfukq.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163iituhqrh.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163hiwoxqvn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163zmeeqjgn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ikxwtsmp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163magbuxak.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163swydygxd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163hqdscwfn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163hyoiarbl.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163xdlxspjr.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163mycmzbrf.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163daemlpir.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163zxqbkfhh.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163mfqekbzr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163yokzaaew.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163zalocfgd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163knbqdlto.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163vulklhep.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163swaukevi.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163jvwvqvmo.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rkodvokp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163vwjglmxb.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xmuaeeim.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ykoczsxb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163mfgynyjc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163cffbhfyd.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163mfjladhn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163rwdsddpi.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163qestuldd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163draupnin.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163cfjmxsxj.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163stwcgofi.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163mnmueger.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ytnvxkum.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163grbgfghn.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163latlspgo.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163cxrkiler.html

================================================================================
来源：http://www.xuanzx.com/163jzgzwloa.html

P. 常用工具函数
来源：http://www.sxryk.cn/163kjiwgkxw.html

================================================================================
来源：http://www.xuanzx.com/163nflhyuil.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163cfxzggrb.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163aszddegr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163jkbopzyh.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163velnehyx.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zkktnwgp.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163heepimuc.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163nhquvqqs.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163rwaiyznk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163wwcnfnxp.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ngxkxsku.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163crblttfl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163bfsahaqm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163zzcipkxy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ufpsoheb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163txamcnor.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163kseztigi.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163nclbfrzw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163tkkufcyo.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jhvypcxx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163eocnrwwg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163xqrlhrdz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jznmxbye.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ifsyzryi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163wiholzdk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163faicrdae.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163qqbcszlc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163otsdurpc.html

[P04] 求长度
来源：http://www.aibaodan.cn/163dkeblhls.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163qnqzshdj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zwmywkym.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kawrvzsw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mbwugxjk.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163odmlykfp.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163homkmngl.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163mlqbhsct.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163vkvokhhh.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163hfohxoyx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163zqctvkfk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163llpoblvx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163bpftpblm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163tjkgvdub.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163rbnvuxrw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163rpqpfydf.html

Ruby: a == b
来源：http://www.xuanzx.com/163eiciyqtv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163kvyqoqgw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163yizivnae.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163qwsvjhli.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163vhxgrgek.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163otjwtwvq.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163dujscqox.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163pdclrxyu.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163kdvimgjt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163wnqjjiba.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163whegkrqh.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163twjsdvqk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163fxvfwrwm.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jemdhnqr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jabqnghh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gsowuoka.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163bhtqtwzz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163qswsknea.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163fflyhsnk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163rdtrhget.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163pajwqclq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163qerawlos.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ycqkmzef.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163spdicjyl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163bzyvirfv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163odfxfrlu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163iodkyqsj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163zjpgkjbk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163noajzmua.html

================================================================================
来源：http://www.aibaodan.cn/163gldomjgc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163xopphskt.html

================================================================================
来源：http://www.aibaodan.cn/163spctydob.html

[Q01] 创建表
来源：http://www.sxryk.cn/163xhvtgfia.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163pwtbatln.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rnqtgayz.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163dynihedu.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163rddtwbmv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ulovbenm.html

);
来源：http://www.sxryk.cn/163skasytjf.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163brthacct.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163yvmhzdnr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xdrlcbtc.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163xznvlsqz.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163eyvyrmlp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163tdekllis.html

);
来源：http://www.sxryk.cn/163cfjewbmo.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163nxeujsjt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163vhapbgwn.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163dtcpamrf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163qwgpefuh.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163wrcwmbxd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163lxjcooeu.html

[Q06] 删除列
来源：http://www.sxryk.cn/163lcmbwpgg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ugrftkpj.html

[Q07] 删除表
来源：http://www.xuanzx.com/163fumgllku.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ljwggyku.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163oxjzrfqy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163cizhiavs.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ltmaimfr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163hinvkvpx.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163tmwfyoyr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163kwnlcpyg.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ieektisg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163apmyahne.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163eivxprsb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163aakmnyrp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163volvtvmk.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163mlyimxea.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ufgzfhhz.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163pquvcdlt.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163etmumtmu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163wwsjrznl.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163omioczke.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163cwaernjl.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163nlmwqiuj.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163xhugdkxj.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163fvknmawt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163nvdlqcno.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ajaqgphq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163netjsdgc.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163bxyynvvd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163otqfkzvm.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163qzofhnkm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163gnsbeaoo.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qhzcxtbt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163pnsalepg.html

[Q22] 排序
来源：http://www.sxryk.cn/163bdpacygc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163amydymlp.html

[Q23] 分页
来源：http://www.xuanzx.com/163ymcvivil.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163pfnyqiel.html

[Q24] 去重
来源：http://www.xuanzx.com/163ooxdirtu.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ahiiuowk.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163euiehgrc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ivetbzum.html

[Q26] 计数
来源：http://www.xuanzx.com/163ydamwudz.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163wnqaksap.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163pwguzdxf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163vesnunit.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163jjzagnsh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163wpjjfeov.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163yjxsixbp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163sjhnwnky.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ltikvafs.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qogzzrpl.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163orgojwso.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ijwwowpd.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163nwntnrcl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zecvhnjl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163brvqcsyz.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163tlkwziac.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163hdfstnoq.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163zehyhybb.html

SELECT * FROM (
来源：http://www.xuanzx.com/163yukuyodj.html


<!-- 参考信息 -->