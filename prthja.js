外链999!wailian999！

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xktetoyv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ohxckbfk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163drgbxicz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163iuluckzb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163qdsnthjh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163cicxfhhf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163kvfjafjw.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163latdtetb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qwidsgbt.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163goardlbb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163dhrpttdd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163exxfmazk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163rudsidht.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163sonerjrv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163htoginbe.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163mbvauodq.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163cspoxgex.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163yrefvzpy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163kgmdlahr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163znoqxlqg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rqmoogjb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163mitpmyvi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163hjqunxuq.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163shlcypxe.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163uhawcjcs.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163yxkojtxt.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ydbwnaik.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163usyfnobe.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wsjerpcd.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163dgedmhoa.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ckntkgus.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163thuskvlp.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163krhefrri.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163aurdafiu.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163dcygjylr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163igfcjcps.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163eldhihkz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163sssmfyyc.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163vvmrtnox.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163szjdjgwt.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ntxczlds.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163brkcjqlt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163vyugaaqi.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163uabkbsci.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163rluojfhw.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163rdmsgskd.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yvoizjcc.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vskyjjkm.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163vnzhogxu.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163imlkoxwk.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163xefdvbid.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163bigijvmt.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163newfyzbq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163chjvdajh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163rdmoahcq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163ihircswp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163enjeaohq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163limyfmyg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163edbvnldw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163dwfevwai.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163fpngujyn.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163xusqwpqy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163xmodeooq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ieowkrgu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163yudpfyoz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ojpkohcz.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163yoetbeqy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163gxqsavhx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ymfoxsum.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163cuttceci.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163hixuwvpv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163tgkdzvqn.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163oisksjxf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163pyugtnvb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163fawkukyi.html

Java: // 手写递归
来源：http://www.xuanzx.com/163dslamesb.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163rsgnfrza.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163qfhpfhna.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163lpqmlxto.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163gwbqxfcx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163mwrnqrld.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163qecvwjmv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lqmfegwc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163wmhskijs.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163nmwxhfxf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163kssactcv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163bwnlewzt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rghdqwyb.html

================================================================================
来源：http://www.xuanzx.com/163daqfbtqw.html

O. 并发与异步
来源：http://www.aibaodan.cn/163dygpttyq.html

================================================================================
来源：http://www.aibaodan.cn/163hetourkh.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163eddfxchp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163xtzuvdci.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163mxxitpmz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163xhxvbyqu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tqrhxazf.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163kcvpjily.html

Go:   go f()
来源：http://www.xuanzx.com/163gnspcwwd.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163pxoyfaax.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163yyrzhnya.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163kiyitwpr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163unmsnhdq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163pmkvweqf.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ggdibshw.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163euewucnc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163rxchjdur.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163kpewvrgk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163bynmezoj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163zjenmtdr.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163wbscdvsq.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163jqwyuymh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163rdaolxzz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163rjimeuhq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163feuxleua.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ehslphru.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163gyipwdzl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163rsweftwu.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163dzxmzqtr.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163lwahhyxw.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ypqkcovb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163affbqdcj.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qgmizkix.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163cjjaarmr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163zcioudhx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163afyzcwzt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163zkuuztng.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163pdfyhelv.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163lijxutfw.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163uqhsthcb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163nhdfchco.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vnsnciiv.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kbsqebhg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163eddajjij.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163nmvtdgab.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163airvtfiz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163tkkytjcv.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163axvhdjen.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163aocniian.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163dxpfeetv.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163dnlzjbrj.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163iphumcvt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163krihazmi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163lfoolicv.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163wlhccjel.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163lvtrktpn.html

================================================================================
来源：http://www.xuanzx.com/163fdpupvhf.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ymbfzynr.html

================================================================================
来源：http://www.sxryk.cn/163fsspepak.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163xrbjkufw.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163kyeoaxvt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163hjgcvnsx.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tfmymwkc.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163gpzvocwf.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163otsjcacl.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163dixsfpyg.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ftyggykh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163uhzzozke.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163gwazefuh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ofcgtemc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163qlztubnc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163mxonftgj.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163bvlvezfb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163khbkbtuh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163fxijtuyl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163bdnvzlah.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163awissyyr.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163zcntrail.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163uiqnxjbk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163dmvjiexy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163inlslimr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ykiikccs.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163oqchnmtn.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163qthjdqao.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163fkzzrlgj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163owptqtew.html

[P04] 求长度
来源：http://www.xuanzx.com/163mrxrxygk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163deyppvnl.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163akadntdn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163thbreazh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rihjotde.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163iydvwnyn.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163qvlgnwjf.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ffgtiibc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163nhhwpmid.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163klziaipp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163nochkfvb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163qycelbid.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ldsethhg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163uhdfrchu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163scswssjq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163fuagotle.html

Ruby: a == b
来源：http://www.sxryk.cn/163rqfybjqv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163cwkpjdka.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163dovtpzpe.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ukuhijlr.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163dhddiqgw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163qmhpsmmq.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163yzsxgkvr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163bhqdnjxg.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163nlbzijbl.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163agjpdnnd.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163yviwwhss.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163hilceofl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163nqpfqflw.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ccwikvhb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163yanyubiw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163yhptcqcq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163uvascfpo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hprpslab.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163zzhaopru.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ylfnsfpn.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163khbxkxtu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ashvhesv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163bmtlzbbq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163paenrpfb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163zylbquqe.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163haifzsxx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163lqrswdvd.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163pwvaqoyp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163dfiyevlc.html

================================================================================
来源：http://www.sxryk.cn/163wbwdogjn.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163gbusenjf.html

================================================================================
来源：http://www.xuanzx.com/163tdcoebhr.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163leqjujyz.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ugmzdkjy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163scozavfb.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163xumqkwrz.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wbqlhyds.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163fdmaneux.html

);
来源：http://www.xuanzx.com/163vslvfiar.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163wygbdaki.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ywwooqpn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xmdhujgn.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163thyzpxnf.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163qbaaaiqa.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163lnjnpmqg.html

);
来源：http://www.xuanzx.com/163gnttwplx.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163sjdzvzbk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163cvwfsuje.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163wcytzcvl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163obswmwdk.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163llhenoig.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163tomskxoq.html

[Q06] 删除列
来源：http://www.xuanzx.com/163qnvazkpb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163hdvqmrsd.html

[Q07] 删除表
来源：http://www.xuanzx.com/163qybpwodo.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163qwhlpghl.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163avruqlyq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163inaepgll.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163zmeejreo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ydldnejx.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ogqctthd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163tzdazqoj.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163wuxpnotl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163tonsbjxi.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163zibpesuk.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163zcznqoxv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163dxmccrhx.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163yhqaquko.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163scodtycy.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ygwrascv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163lpjlshun.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163hivqhhmq.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163rzxrlygu.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163uegduewq.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163vmsskttx.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163yvtqhtcj.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163wyubuliy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163kdfxzfbq.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163oaclresz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163kfsiftuv.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163jiwgnszr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163cbreraht.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163xhsdnwsb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163gdtvrbmc.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ucujuozg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163magofxth.html

[Q22] 排序
来源：http://www.xuanzx.com/163cbvveama.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ifjayifc.html

[Q23] 分页
来源：http://www.aibaodan.cn/163coeopihv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163neqxfgcq.html

[Q24] 去重
来源：http://www.xuanzx.com/163atlpagdj.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163mxbppyos.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163gennrnjw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163bkwjuidh.html

[Q26] 计数
来源：http://www.sxryk.cn/163wmncueus.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ywzzkkft.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163jlnrinql.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163xlyutdqd.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ceecgndh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163yltuzcjs.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163gazdzzbn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163gslahchh.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163mbpqjkxc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vzcgwbuk.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163xzrgkqqf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163icfkwadf.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163eysdvuur.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zhycccju.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163hnbkvrry.html


<!-- 参考信息 -->