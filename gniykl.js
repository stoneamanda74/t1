外链999!wailian999！

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ftwuzpsk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163zdekuvac.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qgqbvbwv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163bxuexfyf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163bnohigog.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163jyamuzfw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ksdydsrp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163zccxhvsg.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ewsqrbbl.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163piexljuk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163fkrqbped.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163zagsbmoi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163awmjqfnp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163pdfvwutz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xruigpph.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163dirzfhhj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163monpajfw.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163jwqqxafa.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163emxdhpsr.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163kixqxcrx.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163juwarvxi.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vwobptbp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163toiobdar.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163lnetzfem.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163xktxjebx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wchfrdni.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163eixjikqf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163jtqpfwca.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163nkmcpmac.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163frobpqhu.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163zelstnkj.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163vgrbpybx.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163fejaqkft.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163bzwwxcoz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163gpwihjvz.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163lxjtnrvq.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163yrpqwpgy.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163tdtfxyhb.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qhyjslqm.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163omtnuncm.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163fhokogut.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163mwfaywwe.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163cfbahoiz.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163rluvafuo.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163pfxrfpho.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163kvufazjz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163zifbbebm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mdclguab.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ugsoqdgo.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163znjrlywr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163aifzkiwt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163imwyvylz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163hqazawrj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163iiuhrruv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163zwfgebpq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ueoccwes.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163hxnqoblv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163rniycsei.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163gqizbsye.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163wvozjufx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163moudcegr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163biuosygd.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163qcnindyy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163zmpwcqbh.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ggjwtwjf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ggikrnvu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163yjvokmmm.html

Java: // 手写递归
来源：http://www.sxryk.cn/163xbtgntlj.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163wqihaavj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163fbwzepqz.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163utsfcvki.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163gdirwnzp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163zukhuyyj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163frstdlyb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bgaunwpf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cyaxbmls.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tnbnlksf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163wwwbhcwd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163bufprogy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163piwqscuz.html

================================================================================
来源：http://www.aibaodan.cn/163bfwnguvy.html

O. 并发与异步
来源：http://www.xuanzx.com/163udyvczyf.html

================================================================================
来源：http://www.sxryk.cn/163mmzgbfcx.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163zctnodqn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163kmxmsmnk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163gsacqbvb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163vdeuiwej.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qvdzlyqt.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163rkxbwxlo.html

Go:   go f()
来源：http://www.aibaodan.cn/163ptaghulj.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163bkwbtyot.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163llsbznfd.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163rdlbofik.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163meoyuiml.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163awinrzec.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ioriidrx.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163nddfgnsi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163fvxkogsr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gthmhyrj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163zzrwbgqz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163kocebiwt.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163zmkglujt.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163fisewjzr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163spkjzbnn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163uzddhdua.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163nownojop.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163uirntmdp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163rostwhua.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163klmclcpe.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163hqfzuaox.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163khougvse.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163uhcoznei.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163lqolaiev.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163uwmzxvkd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163arijwsuf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163icjydgfk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163erbpsppl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163nlxxnica.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163grhvuojs.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ewmqahho.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163uvdtxmzm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163srcsxsfx.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163nljobwmk.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163utfdripr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163rvxvgpxy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163oxwkpska.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163vhgehbqg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163znrghmho.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163iaebgufp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163rtmiqdpy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163hhosqhpa.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163aemslgfx.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163irlljbbq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ixcpcchu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163srbhkwuk.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163vestwwsu.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163fghkqual.html

================================================================================
来源：http://www.xuanzx.com/163jttslnxm.html

P. 常用工具函数
来源：http://www.sxryk.cn/163hveosasf.html

================================================================================
来源：http://www.xuanzx.com/163rzgeaqxd.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163muygdvsg.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jkyagqpw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163tzmzglii.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vjymwhrl.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163cczbvxks.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163lgalqift.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163yfhynchq.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ahngxxfz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163llsbnexq.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163jdpnymrx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163oomnigqr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163gjhlyvjj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163rtgkzmot.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163qbqtzukv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163zylsyoea.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163qjsjdbbn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163duiioejd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163syrajmaj.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163lirobavv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163pvqyykfo.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163lmscdiec.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163nxrvomyb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163gxvnnwaa.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163apwbpvzo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163rmasdlhm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163rixhkssv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ajpzokti.html

[P04] 求长度
来源：http://www.sxryk.cn/163htsrueem.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163vkqbmbcr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jldlroil.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vdlxxgod.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zwdctyxk.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163omforeou.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163dxegdemi.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163gzqqqkxl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163vjsefrte.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163byznsthm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163fghhmfbs.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163xvumtofx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ctujexmx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ktjgkbwa.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163auwdxumq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163hspurzny.html

Ruby: a == b
来源：http://www.xuanzx.com/163gdfwkvlv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ytghqlfx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163oyoufaqb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163bmgeyhre.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163yhroluqy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163tdwenrbi.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163lmsglgsj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163aqgkgrik.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163axlqhkud.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163pbogcavt.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163vscvhnap.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163owctsjxe.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163lhmiklqo.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163sawwbrsl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163khyzjtna.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rymtmktw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163uwpxlrkr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163qhglldqz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163cuhasllc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ibzmbwef.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163nhyhjoiq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ymfszgsd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163hsxnspxh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ujozydiy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163arpvmcla.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163hocpswff.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163qmbetnqy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163rimkoqev.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163asintyyn.html

================================================================================
来源：http://www.aibaodan.cn/163palkgymy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163npbczlnl.html

================================================================================
来源：http://www.aibaodan.cn/163seohclzx.html

[Q01] 创建表
来源：http://www.xuanzx.com/163qrcfepyj.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163kwrpjpwu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xuoazyyn.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163vvslrosj.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163dtwofkyh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163injgbmvm.html

);
来源：http://www.xuanzx.com/163vahgfcmx.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163udjbfvld.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163cxcanbzy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163knsankie.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163tyacjvkg.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163xnfrzxrf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163hrothqfd.html

);
来源：http://www.sxryk.cn/163pspfecnp.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163hscufuyd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163swbryotb.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163owyfzivn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163bzeqblkc.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163qjdabavu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163eidjkoct.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ulcwzigj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163arobztna.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163mriufuxo.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163srnzkozp.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163xhrsados.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163zsqjcgfh.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163oadkhiui.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163cggrmhvy.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163evyysaac.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163chlxhfjj.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ukemokfs.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ztqbheyp.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163yjwuzimd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163xysruevg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163frbvgfxq.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163hobjruyx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163lzyralma.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163eomzksam.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163bwowdmdj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163vumskvae.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163crbwuxva.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163llxbsksp.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ltsfhfxp.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163hqqehsnm.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163dieabhck.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163cvtjuvxf.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163jpgbwees.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163rsdrfzxp.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163sxsleryv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163xmkgxhid.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163oddpvkdi.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163kfijjmrn.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163brupcoln.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163xyapzidf.html

[Q22] 排序
来源：http://www.sxryk.cn/163vsustrhb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163wrpbrdni.html

[Q23] 分页
来源：http://www.sxryk.cn/163hqoublao.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163gfveguxq.html

[Q24] 去重
来源：http://www.sxryk.cn/163ielycsls.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163mreftmsg.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163yoexkpjn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163xnoqfgwz.html

[Q26] 计数
来源：http://www.sxryk.cn/163ifryiird.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163bkrgpskb.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163okjdzmpm.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163xvpfxdnx.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163bjjeqsbe.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163knqfhtva.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163xsbellyv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163gamzmtkl.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163mnkpbpom.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bofsbory.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163qgfxjgtf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163jvtensfd.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163jrphtbhx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dzyblxus.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163amgtqfaz.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163uvwkloni.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163zzjxkgzx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ojjkxeyd.html

SELECT * FROM (
来源：http://www.sxryk.cn/163lekwgjpb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163drmigquy.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163fcfxcckp.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163imatwksz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163fmbsxsvd.html


<!-- 参考信息 -->