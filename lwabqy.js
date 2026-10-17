外链999!wailian999！

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163zwwjlqnr.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163pyximaxc.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163jirzashl.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163bihkrrkp.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163lkhmxutl.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hconrmdm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163bknfatai.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163jeeclbky.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163jazjbcqs.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163uhffnlbt.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163zzpstgcj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163joftjubj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ohacstbh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163lrmavhvc.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163abeiaeyl.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xnuhajdm.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163yiigobow.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163qpmbzrei.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163upatborj.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163zxokhoux.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163wuyrsyev.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163bdrvwtep.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163oqmfpbrw.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163unnxzhtv.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163vxpboqjp.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163fuslriaw.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ehwjhvzu.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163jwdguzqo.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163tragbwyf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163cguqspss.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163xxbqyakk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163ptiduabe.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ghvhlikq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ikyuijyx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163hqgtaksc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163sjxshphk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ckfwmbvj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163vcqgpntf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jlwfoxdf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163gwsfedkp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163nxddhooc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163mwcjhrkx.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163kqjxbcnk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163izqfqtfu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ylgsclpe.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163mbifqavr.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163adhielha.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163fwmoggyy.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163rtchtnci.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qacvnwog.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163fmxhrzgj.html

Java: // 手写递归
来源：http://www.sxryk.cn/163eczfvvgr.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qjgedahn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163tgkkdtpk.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163lexxwpyt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163wwzvixdb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163bexyazqf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163egzhzozm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fwqwzrvy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ofhzauja.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xvpicyzn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163zlacpjdy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163aowmifys.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vbsgjxye.html

================================================================================
来源：http://www.aibaodan.cn/163tzpszdzv.html

O. 并发与异步
来源：http://www.xuanzx.com/163doykurhh.html

================================================================================
来源：http://www.aibaodan.cn/163ckllftke.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ykvhfdxe.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163keunzuab.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163nnwqpguj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163qlljdepg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fcqorzuq.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163czthaywc.html

Go:   go f()
来源：http://www.xuanzx.com/163wnsbxwzs.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ccsnnzlw.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163jnvnpydh.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163hiozueui.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163xcxnsrat.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163hqunxqml.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163arzbijwh.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163aydnkhdw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163avdnjpsr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163tqybtmgc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163efldpzyo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163peidkznk.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163hwcbnlio.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163yetdxhjs.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163daalokfg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163fcfncrdp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163agakptdv.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163boebjdfd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163itkxaulf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ybeaelab.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163figczsof.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ocivzvkn.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163prfyagsa.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163rgzrusxv.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ysoiwaij.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163lfxyhiph.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163yvvjmphz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163mbkasbgm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ietytkzj.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163rxmlbyfx.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163kaeclxed.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163avpzkxky.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163gqfeuqbg.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ziovtfht.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163werzqmwi.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163iigyosxz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163jlqmdypp.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163aqqqdfcy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163rrvzhkpy.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163crckbxah.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163kuntbeak.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163zfukqcgn.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163hrljybqe.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163cyyptxbf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163lttwjtoo.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163nlhvpojo.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163byldtwbk.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163gqdnfoqj.html

================================================================================
来源：http://www.aibaodan.cn/163anjmutjm.html

P. 常用工具函数
来源：http://www.xuanzx.com/163nhcqcuwb.html

================================================================================
来源：http://www.aibaodan.cn/163gxfehrvs.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163xpxbyoic.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163vuebbwuf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163srmgbhfj.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wpuadnps.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163iudxrtzm.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163jcwpsuae.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163vupcuyfa.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163saygfheu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163sbthzuis.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163eniogwqy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163kjzyvemt.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163gubhmtac.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163jgktcvnb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163sspercrf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163lxoiqkto.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163hackmdgv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163stzyjkdr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163pdtngfzw.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163qulqpmln.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163sxmukxji.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163eytonevu.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fwqjzktq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fdrjvpfh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163fzzkhkuy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ilkwoawc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163pojzyore.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163jpiendcd.html

[P04] 求长度
来源：http://www.sxryk.cn/163ldvpsicg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ckehgrkc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jfxynxna.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gdecdjuy.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163sdanlloa.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163qfyjabcj.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163tpoaqfyy.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163sprsnvok.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163nupphgmn.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ckcgpstn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163xrrnyjym.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ghlystqw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163trepozkm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xokjhuel.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163mrptoano.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163mcstkvjo.html

Ruby: a == b
来源：http://www.aibaodan.cn/163vjitzopv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163rkxdmcmg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163grqyltef.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163fzbpegqa.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163hebdsyfn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163utvqfavm.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163jpngxsrf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163smxkjthf.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163aqtfdefd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ongwvyot.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163yycskqsl.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163zejdkfpt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163fejegrkh.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163thswiuwa.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163seexdner.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bqxvlimx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163sbakuaad.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163lowhwhdi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163gbcsloiv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163dlfeyhew.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163xrefmdsu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163gafwxixb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163pzvhjegg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163teozhjhg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163vdkfjrhk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163iwfzxhst.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163mqulotzt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163fjfvbkny.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163rucbuivc.html

================================================================================
来源：http://www.xuanzx.com/163rlbgiqib.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163gqzjrxdz.html

================================================================================
来源：http://www.xuanzx.com/163hoxunksq.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163icfsmdmy.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163viemajsw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163sdifesai.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163azvbgpuq.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163urlpuege.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ldrwiioq.html

);
来源：http://www.aibaodan.cn/163clmxggyv.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163lognctfr.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163azwlcwsw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vxrdzfye.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163fcmgdtbq.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wdwixtsy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ydezgvlt.html

);
来源：http://www.aibaodan.cn/163ijnhsgka.html

[Q03] 增加列
来源：http://www.sxryk.cn/163rocevzoa.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163mhpjvcvy.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163gwpipsjh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163pngbquqd.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163dlgtkoem.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163kdkmihfx.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ebbebtyy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ekyvmhtp.html

[Q07] 删除表
来源：http://www.xuanzx.com/163mdaxjyqe.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163qxwbwbpj.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163csjtbubk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163xiihqbkp.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ziskabpj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163jrguypgz.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163wllbysen.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163xeleysse.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163apwtlfbv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163byttjypw.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163kiqrihdy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163dqgnjcyt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ncmgboqs.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163rhqgcmja.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163xockrvpv.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ytpeylxv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163zfriwcwu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163llvaaoaw.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163nqymeqlx.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163qwggmfvb.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163pgcgbupq.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163hjlijncr.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ssynqzsj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163djxwpkir.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163qrdieaqg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163avpnvnwz.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wfhphtuq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163hyaentvc.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163jrinylxp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163nolcmzvb.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163zlcdbdwc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jopqgedd.html

[Q22] 排序
来源：http://www.sxryk.cn/163ymcwlbck.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163wfhrsisj.html

[Q23] 分页
来源：http://www.aibaodan.cn/163fiuyixto.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163bwinxwoa.html

[Q24] 去重
来源：http://www.aibaodan.cn/163lawhbmzt.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163nhxvsgyt.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163dzulnrxd.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163qgkeolfo.html

[Q26] 计数
来源：http://www.aibaodan.cn/163bswbbops.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163bwrgkrfq.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163eqfcdoki.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163mveactvz.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163gobzuouu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163nzafmtjb.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163gagxkhcw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163aaodatdm.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163xxgupbhm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bvogjcpm.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163nwiqgsvt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163iermnjtf.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163gmmsktrx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163daynvozk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163rqtbzygc.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163bbmlaecx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163ctqvcoip.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163lcjbsqbs.html

SELECT * FROM (
来源：http://www.xuanzx.com/163arixfhod.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163piiyidsv.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163jbyiybar.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163fhtopsni.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zcojyowk.html

[Q36] 左连接
来源：http://www.xuanzx.com/163btclbojw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163sejchygh.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163hmvphqmk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163tzqugzvo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163urgmcuhb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163qsubzgaj.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163xfhtaxch.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163mjspfcyo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163bbnaidxo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163rpnydegj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163zfrdqhoj.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163oiixrcxz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163wrgsngay.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ktzahetc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163qhezaukq.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ivuugcqx.html


<!-- 参考信息 -->