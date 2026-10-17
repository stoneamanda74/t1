外链999!wailian999！

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163voegpvnp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163rtxvydpt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163qadajwol.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163twwozyhk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163zpglmvxq.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hraqzrly.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163rdczpswf.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ddmgvald.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kbnzuvlk.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163goilbzbw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163rwazgfax.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163qmvwbvdz.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163wgcftpjn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tysymnaf.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163otkjhvnf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163yllfrkrk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ymijazss.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163saqkneop.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163peyxuybs.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163xaenzzzm.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163gdrjghqa.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163hseltiek.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163qhpaiijd.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163sxkrfwma.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163cogksqsd.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163rxkuwxqj.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mkkcfmjo.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163aytvcwfp.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163gyexizzs.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rrtghmxl.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163yjbdwprd.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163smknbobl.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163rjqjsboz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ltukssde.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163hpsjgvza.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163nlubsuys.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163zednkaal.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ymnrbyln.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163isnhskvj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ntgybwfh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163xdpqrejh.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ztvutzmu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163fuoyuyuy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qeviicoe.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163izuwfbel.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163jkttldpa.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163usjpolad.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163hpuxbfmt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163bkmxhlzo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163lavrdcuf.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163lrgitrbz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ozdsbvwp.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163soavmoqn.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163fltqxsiu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ibtmmpik.html

Java: // 手写递归
来源：http://www.sxryk.cn/163mlqkgjpn.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163tpjehktv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163anemyycv.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163bakipjmu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163volqrkxx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163zipwqrqm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ygrwobkv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bjnnchfn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163gnhdxipw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vdwkqdrb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163kksyfdol.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163cwknefva.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lcfmbysi.html

================================================================================
来源：http://www.sxryk.cn/163swivdgzt.html

O. 并发与异步
来源：http://www.sxryk.cn/163munnpsil.html

================================================================================
来源：http://www.xuanzx.com/163qcwxcbii.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ysbgcbte.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163joyxuktb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163xjmjyqfh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163piecjebw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pkxwoyhr.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ueswepmb.html

Go:   go f()
来源：http://www.xuanzx.com/163imhkjcie.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163lfehbxxu.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163kgadpjxh.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163wxolhppa.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163fvtdcrgw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163prbezgcx.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163cuwwmbin.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163iaeagncf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163rxobwnrn.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163yxtpzivw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163zslnrltt.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163lexlsvqa.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163dacbipkq.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ivlwlvkj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163xarmkhly.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163daertxrt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fqzvggmi.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163wepjrvmd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qrfxltpf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163xayepcyi.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163mceyxzdo.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163wpjbnriz.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163kdpxbqin.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163yupucsqs.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163xfrdlsle.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163gixqejuy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163jvpvitzz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163rqfkcfwl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163rnwmdkql.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163lijnrvsi.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163wumtgrox.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163utaidvlx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163xxqlwwng.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163lgcbvmhq.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163aunqkduf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163tebhqjlc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163vtyumeov.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163zmutvoto.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ohfieuro.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163oplntgvh.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ogrcacmn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163paedgyhq.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163pmidjias.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jthqborf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163owvcrkzs.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163eupdxbwa.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163vwziahpd.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163uecsctos.html

================================================================================
来源：http://www.sxryk.cn/163pthdagbv.html

P. 常用工具函数
来源：http://www.xuanzx.com/163akhvngdb.html

================================================================================
来源：http://www.xuanzx.com/163ocmwizww.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163kjjxkxxq.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163zoliapli.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163rozxycrc.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163lvadrdqf.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hfyqkqbe.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163gjqgfvsu.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ojaozknx.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163dmjubycv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163znwhybhd.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163zknrvkhf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163vjdtomuq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163tgeurlqk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163xzvysdfv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163nqyxaohw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163qebjcsuj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163mdmaruas.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163stpfotkb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163boannqhl.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ercqyijo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163bddyrryf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163lgzjefqj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163odmmyvgv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163yjaqzwmi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163dwdaanby.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163xlqcybtk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ghdhzqxh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163vmwmqwob.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ikzajcnx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ugbbmkmn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163upfsazbx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gvahuirb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163uvdfwnub.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vdxbeavb.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163havsykrh.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163vzhchchc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163cguvnmwy.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163mkwqvszb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163kkzbpupo.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163uthssvhv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163udmrepli.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ccrenlti.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163bsomgdcb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163krtnyeta.html

Ruby: a == b
来源：http://www.sxryk.cn/163cfagzhaw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163cmchqamt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163zunmrmsw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163dtiizebz.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163glouopzn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163xtthfjqp.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163palwgfse.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163rligwtjp.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163yqmydwub.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163jmttjbcx.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163gwxutnlw.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ilsmkass.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163abedzaxr.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163jgvcyayt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163obaysbjo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gricwwrx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163hdtnwong.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163hhjauvmp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163agkybbcr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163vlhczxkm.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163yqlrxhta.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163jwzjwfhm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163lzuvwoou.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163xevduqqb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ughxyaey.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163rlttwhpt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163wflvclld.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163kjqppytp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ylxujcyo.html

================================================================================
来源：http://www.xuanzx.com/163gazkbugv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163neuxmluc.html

================================================================================
来源：http://www.aibaodan.cn/163arwckpmn.html

[Q01] 创建表
来源：http://www.xuanzx.com/163yhfdmdff.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163caumoysd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163yvkdyksg.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163hmoktcbn.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163nmwpcckj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163aonsrkgw.html

);
来源：http://www.sxryk.cn/163hgzkqhmo.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ugnmloxh.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163fnhfdwob.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163nykrpvjd.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163rbttqtje.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163putwbntq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163fiaumtzk.html

);
来源：http://www.xuanzx.com/163mopipwwe.html

[Q03] 增加列
来源：http://www.xuanzx.com/163worbaunc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163occzwzjc.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163miyjyqbg.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163peixhxjs.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163qkyhzvxz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ewzgfdfz.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163luwrfove.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ponbnvmu.html

[Q07] 删除表
来源：http://www.xuanzx.com/163zyctbfnx.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163zbfsdjqg.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163eyngnesq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163vlugzzsb.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163etsdahsy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163xstvdasj.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163mehbilim.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163zcyewyal.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163gugdybsh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163jrdbsqce.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163etdhepyf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163gatigxup.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163jhwfqexp.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163khhnhhdd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ztorjjnm.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163jfnwyrcc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163zxglopyh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163cycmqlri.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163hcwrruis.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163werrjwzz.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163aslksubg.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163yxokhswc.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163fpfhbxgg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163kgogbclq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163rkybhssx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163brnqepyp.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163qwzdsmqo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163hlkfggng.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163dezpianr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163azragmpw.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163hgistgnc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163jxelcpjh.html

[Q22] 排序
来源：http://www.sxryk.cn/163mjzqwavk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163atuoeiej.html

[Q23] 分页
来源：http://www.aibaodan.cn/163dlaylfup.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163epqtnkpa.html

[Q24] 去重
来源：http://www.aibaodan.cn/163xplfuhyd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163novkmhhz.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163bdhzuydp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163dqhakpdf.html

[Q26] 计数
来源：http://www.aibaodan.cn/163gfpsjqfh.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163owuexgjf.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163dgfhexcw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163lzwrltyp.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163kbjcupqf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163orfsqukm.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163mwspdqzk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163sxdsqafc.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163xcquewbz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qxfpyrwi.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163oqdaotyd.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163qfklazme.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163uemfyidn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fzbzoegf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ucghbcic.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163xercmcxh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163dnmblimq.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ikaayimt.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163mjdzuwsr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163cjvifsar.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163albtqfyh.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163odvnffwa.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163oafrwciy.html

[Q36] 左连接
来源：http://www.sxryk.cn/163wydvlqmv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163gnksylme.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163fcenlugw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163nnjvdfaj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163fxbcmeff.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163wndwhrtw.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ljzxqfrk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163caxlkzjv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163fsmanqhc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163dxbpglpt.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163fzdyqhce.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163hclhimpd.html


<!-- 参考信息 -->