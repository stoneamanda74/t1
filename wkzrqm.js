外链999!wailian999！

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163nbacdqql.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163batkdzpc.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163kguerqgo.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163jznmjltn.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gblvufsg.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wvgvrbni.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163oryskjoz.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163gpaqodji.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163faqcnzip.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hyknhiqf.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ftupcejh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163zqkikbkh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163vvipwvzf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163jxgnelmo.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163wsfegiuv.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163zfnelvxo.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rbmqhdzq.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163xmakigos.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163rkhwztij.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163lgkphoox.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163jygxikva.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163thrtkgsw.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hhqobvmm.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kpmjwzmu.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163zkxsasiv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163gmgiwouv.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163qsspcrdv.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bdoymxgu.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163gzxbbcxt.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163wwrfuhok.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163jauiszsc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163filhmapt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163zonlanef.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ltxqsciy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163pptacxpn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163uoqyfjgj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ffkbbihy.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163dvwfhxmz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163zrfnbist.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163tipewidi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163npekmeiz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163haapubmz.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163hegiwpgg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163fhwurcmk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163gjrrhrnx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163tkzkzgoc.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163yrkuxwnu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ybgjcfad.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163llytsxrl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ncubxsed.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163oqivwsnw.html

Java: // 手写递归
来源：http://www.xuanzx.com/163wuovahlc.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163sfhlnron.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163wwprekez.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163yavoqlzj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163rtdarodb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163psjrkwrk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163duubtpnz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fyxrwars.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jpwuzdkh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ssyxglxd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163bqpralqw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163itxndqig.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163oodmapyh.html

================================================================================
来源：http://www.xuanzx.com/163kawgjddg.html

O. 并发与异步
来源：http://www.sxryk.cn/163wswdkagy.html

================================================================================
来源：http://www.aibaodan.cn/163skpjkgdz.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163vhvdfmor.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163vgqnksth.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163qduecdul.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163logkonno.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163medgvouk.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163qumjybwu.html

Go:   go f()
来源：http://www.aibaodan.cn/163rcvkceep.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163pfzgjlvk.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163hqgffgra.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163vtilyedo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163fbhqsqbr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163rvtwwhqa.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ghyyxeuy.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lrkjoqmk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ekdoizre.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163igbjutee.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163qpbenvjv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163eudirvwr.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ylbfkikq.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163qbnddjii.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163gtordrxs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163zsfefttg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163meiqgusv.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ykiszwwu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163zhprgpsp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ekbdtuub.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ruqyrsgh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163vllbgdfw.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163oozzwjbb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163iiqoljvr.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163uiltcssv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163zckocfis.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ijynxiis.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163wxbkdyky.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163yfjywgxa.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163pfyttznf.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163fjmochbq.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163oojygiwj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163wevvqsfk.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163esonldlz.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ypjlxfru.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163xsjdwuyf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163cppwfenk.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163anoxsook.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163tkuxzbqr.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163azeakmns.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163zxqawvvw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163gbyryzso.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bharlrap.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163yqacsqrj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163fnewkklf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163lwrzvdha.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163qrkwzrrl.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163jhvcopnj.html

================================================================================
来源：http://www.xuanzx.com/163poxcfsvk.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ipkencjg.html

================================================================================
来源：http://www.aibaodan.cn/163xkrndkeg.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163cerpmgoi.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163zpbmehwc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163rfhjfvtl.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rrdqcbdu.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wjgpbsvf.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163eslkjmtv.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163munchfly.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163hooctvgf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163tmaeiqps.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163qfzbonqi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163vqdqlxoa.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163xfwfsvld.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ohhrzryy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163lutzitev.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163sjzntocx.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163sosyfeac.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163kgixxxxz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163qghnizcw.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163zfuaeelk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163aegvtxsm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ghlnyfgf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163zpvtszfy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ewvbmotu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163fgztzsyh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163lamplbaw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163isrbhnuf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163cggfizbs.html

[P04] 求长度
来源：http://www.sxryk.cn/163legixxgs.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163vciivlfo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ksmnhquv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zkxcbkkd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wakqcquj.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163jrqzlrcg.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163megsfczo.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ggetfymx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163twzgykux.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163sxdwfgyb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163wixdwpyo.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ynwsmnuc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163boqizevq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163sdwssugs.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163lqttwbqi.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163vypuvvuj.html

Ruby: a == b
来源：http://www.xuanzx.com/163bjxouvbx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163cmelttqt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163smlpxiqx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163zzopnfoa.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163cxkptars.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ymccpzrq.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163exjdwvrk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ekbjwfew.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ubmqvhzp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163jetwvsba.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zeibcvvi.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163gsgwdlnb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163sskzcouh.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163atrnpbnw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163iunkjzyp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qxnslwgn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163mltjfxrh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163pnqwxshx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163gfirivod.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163cfrltquc.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163afaetuee.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163bqfkpmmm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163kbecteat.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ykikoxnn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163sxsmytpe.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163qturridd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163vvhfydet.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163chbmaphb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163uwohuzjn.html

================================================================================
来源：http://www.xuanzx.com/163wafhqipb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163uajucros.html

================================================================================
来源：http://www.xuanzx.com/163gnmvcntt.html

[Q01] 创建表
来源：http://www.xuanzx.com/163hnpvvhdy.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163cdmifeqd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vaqxemje.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163zyfevhvq.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163pbgrtzoy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163mptanzct.html

);
来源：http://www.sxryk.cn/163yzlpzzwm.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vyiivohy.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163qfukznvn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mwfmndvu.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ayhqvjrn.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163fuswnhgt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163hczgwdlf.html

);
来源：http://www.sxryk.cn/163tlqfgdgp.html

[Q03] 增加列
来源：http://www.xuanzx.com/163dbmwfyxn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163tbbnixop.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163bkkyvrqz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163blmkhgko.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163qdlidiez.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163vosugpkj.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163rnlwpmxf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163vzwvbldv.html

[Q07] 删除表
来源：http://www.sxryk.cn/163vggvvyul.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163zjuqgeqd.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163zvehrfcd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163auzdkhat.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163tgkcyuit.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163xxhlgcmv.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ifyroetj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163hedmzmjl.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163rtcrnlqx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163uiqhpbla.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163znvuclkp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163wgpqsayu.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163bxlygkpk.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ubdcdyvg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163evoxyaeb.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163szwqqjkn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163elfnthrw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163fheikgft.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163xoiakhzq.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163zvrftlns.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163hyazntdf.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163eddzpbjq.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163xevqmvoh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163mifxxplb.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163vcktmfsa.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163oobdwdqb.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163cyytsype.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163lmjpniij.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163uxtrbgwu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163kqjxitpr.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163qhlwwjco.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163qodwjayl.html

[Q22] 排序
来源：http://www.aibaodan.cn/163whtfelma.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ptlaspdt.html

[Q23] 分页
来源：http://www.aibaodan.cn/163nxbyjmhp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163domilkvs.html

[Q24] 去重
来源：http://www.aibaodan.cn/163xlrxwlgs.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163qlatpnmk.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163sjjtheyq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163uyoemest.html

[Q26] 计数
来源：http://www.xuanzx.com/163ybfuotvf.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163rbsdrjex.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163sxrllbjb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163cvrpjgxn.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163xladqrmn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ceawyvqs.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163pgtmkfby.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163pjjegqqj.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163jjprqakr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163oaxoddff.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163qpkshfyw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163wmwdldkw.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163zraqkodi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zecaucrv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163rwfhdwwv.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163heaenlls.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163evjhnctp.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163cpuibiir.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163cqpdncxf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163vnyuazsr.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ghoprrdc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163nahrvtsd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rbmnbvjr.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ysyurmjv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163sxncofll.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zdkynoel.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163mwzfkxai.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ceixntlb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163udsxepxz.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163kongpxgr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163zigkzqwf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163mlgsgmux.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163swtengpz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163oudlrlxx.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hyryyacg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163oelehxkq.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163hquhbbri.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163xbvaffpg.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163khmyezyc.html


<!-- 参考信息 -->