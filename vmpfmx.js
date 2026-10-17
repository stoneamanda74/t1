外链999!wailian999！

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163zrmpjxzt.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163xdjvsujq.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163gjbhvrhr.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163qyppdtin.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163spbomaup.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163luvrwjjk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163incyedfp.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163udeyjyjm.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163gsvbmwci.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wyclvrmx.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163bkkkuktx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163mcbkxbjo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163kqxrchnl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163wjhgpmxx.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163yctvbbth.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163iehmsvyn.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163uqlknfjs.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163zzedneif.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163bjulmdnd.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ruduiwdk.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ltocxdny.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163xbewgelm.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wavqviow.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163nthemxhh.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163esyuubuc.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qurvldlo.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163orhmgowi.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ziwxhcgo.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163amqfdfoy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163twsfpzux.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163civdpihb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163qphxkpjv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163otzjswky.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kjypbaob.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163plaruixg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163jqpbxojm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163pkaifuwe.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ckzbtkim.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163mpzjkitv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163mbrfuaqj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163lwveasfv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163wombqpje.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163mpyarxoq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163qwwywdcm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163hgbyhwry.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163dpqzmrqj.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163nckhkfey.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163doxmexuk.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163niwpoout.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tlhfmmoz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163fdzltcjk.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163jcrnexua.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163rqpgukpf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ecdkppgj.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163fezpruva.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163nivukpxu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vidtymus.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163xsyjyult.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ivyglwyh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zyxnvnli.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kzyrwrig.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163cakkoukb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163znqityma.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ahubjuhb.html

================================================================================
来源：http://www.xuanzx.com/163bffhgded.html

O. 并发与异步
来源：http://www.sxryk.cn/163fkcpyuvu.html

================================================================================
来源：http://www.aibaodan.cn/163nklwnclw.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163gnookdco.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163evyzdxsi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163lyfkwzud.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163syoigoyt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zslinzno.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163wvppltgk.html

Go:   go f()
来源：http://www.xuanzx.com/163gacfmjfg.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163usjchbyn.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163yiswaxvd.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163iqwuezne.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ywvczxjq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163okcfxyjj.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163wmqazimx.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163miapmewc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163wemycoey.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163nzziisgx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163lhlzvhyv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163uewwmyvc.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163jcwgurgg.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163weiutaao.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163pycqcvjl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163roavqfdb.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ngexhfcz.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163uicqrzci.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qiccprlz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163yqtpejiz.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163esujjksd.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163umhlkkwb.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163dbajdswj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163lyfeeddt.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163iifltkzb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163bazslnlg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163rvuxxbhx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163opvlkobo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163wrfqyzkd.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163bjjycotc.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163dhgcgrfe.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163qkfjlynh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163jkovjnpk.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wjdwbela.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xnwhfgan.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163rhwmxyhl.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ycezwwxu.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163wegevdnh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ttkdxhva.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163zwhmgjic.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ldhcprod.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163rbvxthgr.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jivowejz.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163dycqergx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163zdgvssmz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163xnoqdgjs.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163wbwweosi.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163cffsradi.html

================================================================================
来源：http://www.aibaodan.cn/163ilmnkecr.html

P. 常用工具函数
来源：http://www.sxryk.cn/163hziawojh.html

================================================================================
来源：http://www.aibaodan.cn/163oyqfttjm.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163rsbswqfp.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163bdxbnsju.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163vsgmbgba.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163khmstzrv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163oftgmsim.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163lphkebyx.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ashdcvoq.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163hpkywwql.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163kokpxbxu.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163czzhesfm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163mvovrtyw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163lrdpoviq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163xszasaib.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163gvvqimqm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163fpcogiyu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163mfjjtaul.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ulqxmbdb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xadklazj.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163wrulasww.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163diatjzfi.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163maomndly.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xvxdgbhv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tpwvxtau.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163brxfnsfr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163dirhzbnc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ddieeqsd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163pkjyprqx.html

[P04] 求长度
来源：http://www.aibaodan.cn/163tltutthj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163nishnpok.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163watpczst.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fatjylxj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ihlmahtb.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163aatyuwkc.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ihovqjxm.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ggjyjtyo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163yhkvqpzf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163xdqeynyx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163rkofwtjd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163hxnpnfsl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163tiqzrkjn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163gvuebwtc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163npnclyyk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163krrksrym.html

Ruby: a == b
来源：http://www.aibaodan.cn/163kpulbmik.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163yjsppeak.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163izxohywf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163rlopmyoi.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163lvaowvyx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163zgioxueh.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163wamfeinp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163wqclpyke.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163bhqcjtfp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163pnskdtng.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163xzlfhlmk.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163xpidtoio.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163khwcpnca.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163miwdsjbu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kgxfafpm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nzetruaw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163gwifhwix.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163pvujhuht.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ndmdgsgc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163neaccark.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ctaztqjl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163bddrwtuw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163usqqbigo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163fakdkxqr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163oteyjady.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163tmqrpokp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163cespxiiu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163iilpwhjr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163nydisvhx.html

================================================================================
来源：http://www.xuanzx.com/163jzoqsisd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163vidmdfec.html

================================================================================
来源：http://www.xuanzx.com/163utjgmfpw.html

[Q01] 创建表
来源：http://www.xuanzx.com/163shotxxdw.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163fddgvlsh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lrboqojd.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163qtlwwthq.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163vcwuizdj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163wzhlhydz.html

);
来源：http://www.aibaodan.cn/163mihwwynu.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163cmihbjrn.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163tdesobhh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qppwthsq.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163moblpsyw.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163eqelxvqp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163gewbfyyz.html

);
来源：http://www.aibaodan.cn/163qquatvkg.html

[Q03] 增加列
来源：http://www.xuanzx.com/163vkjimrtd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163lopsbnlp.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163uegkexgv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163htephnfd.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163oxmujowi.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163yzsiunom.html

[Q06] 删除列
来源：http://www.sxryk.cn/163jzjdwcyd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163rthtjvdr.html

[Q07] 删除表
来源：http://www.sxryk.cn/163cefkvphe.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ymconywv.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ufqyleqw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163gwoojwlk.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163wmfkjvoo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163topnzyws.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163lxwbqtpu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163qswkluyg.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163frmqebmn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163rsbayotw.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163fsyakkcy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ptsosqgn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163thyovwew.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163wqccqghz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163pmzzwsiy.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163mfaxirpp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163dgovwtmu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163sarzdtgs.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163obpgwzrz.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163owdbvgbn.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163bcxfbuqh.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163gmkgjucl.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163jidhmuas.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ccqircaw.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163pcjymrbj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163zrgonmug.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163lgzgsdaj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ssxhblhw.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163oglexhae.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ttikygik.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163bzilarhj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163bpxoknyj.html

[Q22] 排序
来源：http://www.sxryk.cn/163bkjmdtqq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163awislptz.html

[Q23] 分页
来源：http://www.aibaodan.cn/163whwduhlw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163dlbnvtze.html

[Q24] 去重
来源：http://www.xuanzx.com/163rhaykbrc.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lenjslkz.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163pkphtmdk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163icbwbwwa.html

[Q26] 计数
来源：http://www.aibaodan.cn/163lszvgtep.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163dypzthoe.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163lokpukwz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163edclhixb.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163fqvsposs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163jhvvhpwi.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163fuveylus.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163aimiduhc.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163yaxexdev.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hbxlpegn.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163qviqyuvb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163rzafnojw.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163yvsejpyc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163oascaioj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163eruumbpc.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163jeqbsvjf.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163alorrtyq.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163etymekxy.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163heppaxiq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163cjauneaw.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163cspeubkv.html

[Q35] 内连接
来源：http://www.sxryk.cn/163wdifozib.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tpmxnpyc.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163dnititte.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cqtfqsrg.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vgozyykb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ayqirinr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163mhhocugb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163sshtcpdx.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163nqatzyac.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163gtmznewt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163xepqchtm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163wbcbipfv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163zwmspynr.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hbqenany.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163nkdkjxzx.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163feycwiic.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163apnyqfnh.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163zuyazzrz.html


<!-- 参考信息 -->