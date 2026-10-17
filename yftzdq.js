外链999!wailian999！

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163glqwuoca.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163vffkbwxw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gzcrwjrr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xzxsocog.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163cnaasksl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163iqdtxkxw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163gvoekrbn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ojtrkcam.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163yagrkrxe.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163dwutuevr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163opvntkmq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163kvfkdohv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wxsxvfxi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163xgfcuwrv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163qbupyafu.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ufplyicn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163qjhmoafo.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rrgdvshi.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163taijhbwb.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ucqgmgjw.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dtvpopht.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163coavwzxa.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163yiklfcip.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xftaqirq.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163vdvjysyy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163slteseac.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163oasdogey.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163iycfwvrk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163dxyyuatl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163wggudana.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vhgcupzo.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163rqyfcoid.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163agijqwoj.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163wsmzbffu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163osdgudqo.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163nodnleym.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163dhdjxrla.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163tfzcenkw.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xrsueefj.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wrcwnnpz.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163oalmzclp.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163scszrajr.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163lkhnmcpw.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ntloeocy.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163jvvarnoz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163dupcwgsp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163uupyxfiw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ivimdycm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163pyblreqk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163eeydcwtd.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163hfqkxjig.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ztlucevy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163thtqfmkt.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163yshnuzfi.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163fleugfkt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163icghcqyi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163tfdxxkpl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163qdtyunhx.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163zhbpkffb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163vfikjxhc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ysxxohmx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163cuzkloet.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163gpzbnsdk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163osslwqta.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163dyrogigk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kutchwbe.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xxavnnyj.html

Java: // 手写递归
来源：http://www.sxryk.cn/163zwxhqpmf.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163rlemgkpd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163mvmqhjmq.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163jaxcukth.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ztkaglyw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163xfubxddm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163hxceqiew.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ejszzyzr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163brinewqh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cljvbzaj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163jlleqxjx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163bucjccme.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lvjyhzoy.html

================================================================================
来源：http://www.aibaodan.cn/163hdfjrzfe.html

O. 并发与异步
来源：http://www.aibaodan.cn/163qjwqaamz.html

================================================================================
来源：http://www.xuanzx.com/163tnrjyyis.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163abkgbylh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163coipalan.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163tzlryhnr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163shnrqqua.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vztzeosp.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163nezuecjy.html

Go:   go f()
来源：http://www.aibaodan.cn/163ikstkddo.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163nzanaeyu.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163dqplqauf.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163fnqqmqwl.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163mwmsxkfu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163aimpcmzj.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163pnpsbwse.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ynkugrtx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ialekzsp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163biytqbkv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163iyhgpwky.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163qbkclhhw.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163wbuonwnq.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163uhktwlvk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163pltlvkog.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163sojfqfnu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uljafbxf.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163bxgqgzsg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163oohdoqbx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163alvahdey.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163prhunyem.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163klxxyiri.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163cdvujiij.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163aperwkll.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163pwqheyyc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ejswpkbj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163nkapufnc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163flkkylyb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163fefdfnjh.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163tbbemmbe.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163igwnzwka.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163oxuggfko.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163qxxzabeo.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ypjnezit.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163oxvmlscg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163mbexwcah.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163kbzocxek.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163iolbfkms.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163vondyodr.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163fkdkhjoq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163zfrejaou.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163fqbziebv.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163krsfeoce.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163csehutcb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163bkfvyhek.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163nujolkna.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ewadvxlp.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163izkzzucl.html

================================================================================
来源：http://www.aibaodan.cn/163orojzfoh.html

P. 常用工具函数
来源：http://www.xuanzx.com/163epyrzxye.html

================================================================================
来源：http://www.xuanzx.com/163xukycoav.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163etbitjis.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163patlzkgk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ghkigjnd.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163pzxomsyv.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ynguoaon.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163fckjrlrg.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163bkyodztl.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163hblsgspl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163vnsteisi.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163gsjjotzj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163wlfyikfv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163pvjmbhzh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163thbdidvu.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ycuaumqu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163lmntpqfq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163efwpdgnj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ocddcoym.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163tkkpzpzt.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163xncninaq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163atkjcwzh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163faqvmrao.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163kgbojulk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rfmbuscv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163adryidoi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163cukhhisn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163lgyqukjd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163oevgkcbh.html

[P04] 求长度
来源：http://www.aibaodan.cn/163xcklzfpr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ubfcztmh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ceitjado.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vjonkixm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vtitziih.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163qrikhjdf.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163wqwbbcwh.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ycsbbaad.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163esshbqvz.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163rnuzogtl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163xzopggmp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163pgwiqjft.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163fdqzhkuq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163eivheckr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163nfybgqos.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163nzsvsmah.html

Ruby: a == b
来源：http://www.xuanzx.com/163lsbjioar.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163moxsbrzt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163jwqeidvb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163xqcfafgm.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163fqelpmkp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163vcrzmxyg.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ruvoggtv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163esosbvvw.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163wcxaqeaj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163sbsrtfgo.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163aupsmcws.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163gdihoxjy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163gcvauvde.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163npwnljsr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ejyelznt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qhqluorq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163wimoskgq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163tdymniyi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163svtegrax.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163mscrvwzu.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163iybiqete.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163eapntigk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163zltmpdof.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ugzycnsk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163haonzbtb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163bvttvksc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ylzegnsp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163hczldcyr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ymtubvny.html

================================================================================
来源：http://www.sxryk.cn/163brmzlehs.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163mkthxopz.html

================================================================================
来源：http://www.aibaodan.cn/163pouupika.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163pnshirfx.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ahotryco.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163pddtmhqq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163lkshzslf.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163pygxqupx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163hcvtdnkm.html

);
来源：http://www.sxryk.cn/163cxdcgtrl.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ipowlmrv.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163onhfaxab.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163iizrdluf.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ibryxite.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163komdpang.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163zhxrqfzj.html

);
来源：http://www.xuanzx.com/163qxqnveiq.html

[Q03] 增加列
来源：http://www.xuanzx.com/163hfrbunbf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ezvutxtv.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163qbytfhom.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ternwcpq.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ycdzrnqq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163evkfmtfa.html

[Q06] 删除列
来源：http://www.xuanzx.com/163wlufiezl.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163qbrgebpy.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ufscjssd.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163pbelzjzw.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163bbfsybqp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163silyavvr.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163lhozvvoi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163dgpimxps.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163rgrfmohk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163tsuanauf.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163xamswydw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163swxgtmmi.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163jkiegtiy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163taojkpwh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163vmslwdpp.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ruspvfae.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163esntrotb.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163oeyyrudf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163vtcjryxh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163zpezqsok.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163awjrttwb.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163cpmihlrl.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163vmuzzrpx.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163msvrpzbg.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163pjlsowci.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163iwmwbrsc.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163vstxyndt.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163zwbnfeyw.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163cckjpleq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163qrlvrzkq.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163jogvmuwt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ttluydgw.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163nxixhnzw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163kolmtvxh.html

[Q22] 排序
来源：http://www.aibaodan.cn/163eeibfvzc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163gxtdgckd.html

[Q23] 分页
来源：http://www.sxryk.cn/163vnepsljh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163xwukycsa.html

[Q24] 去重
来源：http://www.xuanzx.com/163kwdayaxv.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163fybitvka.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163rgclpoeu.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163lumitllh.html

[Q26] 计数
来源：http://www.sxryk.cn/163wxqddlgo.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ilwjzwsf.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163wpzzfpzu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163tbnanxen.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163tssydxzp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163eejjpctw.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163vabhkycu.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ggeylqnd.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ykqdcuwe.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163opbcsymx.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163wbpjlzdf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163vsshexcl.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163kefxoezj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nxionofl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163olyvzgnh.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163cxgexctx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163tqsfihut.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163zssndeoh.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163gvblotnq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163joefwjdi.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163vpdpsxya.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163vbnvscbn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163njrzasul.html


<!-- 参考信息 -->