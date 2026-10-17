外链999!wailian999！

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163lzrxeour.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ditmmpit.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163srzxbjcd.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163jfwzbzbo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163kqmfgcuv.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163wwhvbfnc.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163rqffykfz.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ukgrussj.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dzopjbbe.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ansjvwkf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163eufgletc.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163oehjssni.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163eujdttjt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wvzqyfvy.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163vghghlfd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jrlxgdbb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163jfrghgoq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163nuwkcngx.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163dltjbplz.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163rfsxttph.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zmhajeez.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163czhkzqqg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163zosdoxcd.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163gxjrclcz.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163hwccwpjs.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163bqshvmgr.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uatkkdqq.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163payinkiq.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163zxgkuiwt.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163izntwjee.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163wgztbvfh.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163rwltzqhb.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ubmgskjq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163zahnxdrz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163lgpfryjk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163dkydvvbg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163twlftpuu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163pjiuppbk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ixojgbry.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163dkpnmsge.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163kweodxyg.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163dsawdjjv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ogusoyhe.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163rlrnfatd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163xcbogpgn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163woaissgl.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ldedaeex.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ihfblpgo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ghpnvvab.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163xhfkfspa.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163nqlnfuwy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163pvaxenqe.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ptatfouk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ryoknydu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ldsmwquv.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ocojiuvp.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163gdkyigit.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ghypnssn.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163wylncauv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163kdszrqsh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163aognhutx.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163rxotdbrg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163npnatsxy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163eghbyxjp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163edxvoxwn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163gmejcxvy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163pdbbvjgw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163wuypimvq.html

================================================================================
来源：http://www.aibaodan.cn/163rwiinqaj.html

O. 并发与异步
来源：http://www.xuanzx.com/163dsmgnwvn.html

================================================================================
来源：http://www.sxryk.cn/163pqgfejfe.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163amkbxhrs.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163qvwwvxoe.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163qabddloz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163fuumfrhe.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163rrerbdlv.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ozfuevpu.html

Go:   go f()
来源：http://www.aibaodan.cn/163lxldotmh.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163upojiggd.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163bjfumqhj.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163orfvatjj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ukgjxfmp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xjxcbity.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ulxkbwou.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fzrjubyo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163cnfrdvrj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163jfxdpdrc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ktmkwjfg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163xwvildzs.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163odeofxhu.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163azsckuot.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163wrvxzojq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163wkibwgdm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pgxllqui.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163rayekpyd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163kvopigzv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163oysamlrq.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163uapasnyo.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163xiiybjcv.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163mvhsavjr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163netypomu.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163oxhrqvsa.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163qymcnfsq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163criwpxdc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163agggyegx.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163inewdwyu.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163llbnjxle.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163pqyecyuw.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163vmsnecgb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ojoejznc.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163hwiyrbaj.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ajziyaoz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163wsnovius.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163zwxeqxqg.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163aywypyzv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163cojswbsk.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163esroaubw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163jnwdphsg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163jxkgwfwo.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xwuhqpxq.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163wxgzdtpt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163opvthfkt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163fcfdlkan.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ksjndtmf.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163dxtdhshj.html

================================================================================
来源：http://www.aibaodan.cn/163bzkbdnkr.html

P. 常用工具函数
来源：http://www.sxryk.cn/163lutbxnfd.html

================================================================================
来源：http://www.xuanzx.com/163iwejjivw.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163vktquosv.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163xukmpywp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163muloamjo.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jjskikwl.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vktqhcoa.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163idodgqom.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163afktmdyq.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ieystggu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ozdcwacw.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163yszynjko.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163jygwkxdf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163tniinraz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163vbsizkas.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163xeuvqjwa.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163klzumsub.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163cwdsdmcd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ycoqsnnr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163tkkgxxcj.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163gdhqtnhk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163hlfallpt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ujanaecy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163kognexxa.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cxyhgtwh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163kyvxwkzt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163zmvjkvbo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163nptfjrrg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163sxtgiuaa.html

[P04] 求长度
来源：http://www.xuanzx.com/163vzzazppt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163cmbpgten.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cvoquctd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dkwcsmau.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xjvoujeu.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ypbepqps.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163mtpsrxgd.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163tsnkrgzs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ypguvcfa.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163hwyozwlx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163vnqvnbpu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163qhnxljum.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163cdcszuqi.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163eidksqzq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163rpyiaauk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163vdhweaef.html

Ruby: a == b
来源：http://www.sxryk.cn/163mhtktxmv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163citpacax.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163pwnnyprg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ozipdnng.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163pehfqwkk.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163gsenoywg.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163tjwszsqm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163gmobprux.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163grzhruvw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163aclltzvs.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ofxhedwo.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163dtobbufk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ogbgvdvs.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ryosibmp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163czmwbeqk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nmifcfep.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163axulnwed.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163uleewuuc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163vcjhthvz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163uqymjwyz.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163smgophyz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163hkrrqqan.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163idkctllg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163yzsojixc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163xhnbdodh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163bgidpfel.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163mjmwnims.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163cztoezyo.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163iquxpmwa.html

================================================================================
来源：http://www.sxryk.cn/163ohmnixon.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163udkbdynh.html

================================================================================
来源：http://www.xuanzx.com/163gniyzwho.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163scrqdolo.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163pgakzhow.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mmcatbja.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163uiffuilr.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163axbnawmi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163jprywuae.html

);
来源：http://www.aibaodan.cn/163yjavgqhs.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163crwwxalz.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163awkxqdqg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163yfekznbd.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163ooufabog.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163hwokbfzo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163rzjyxnsg.html

);
来源：http://www.sxryk.cn/163xyzjicza.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163fsgybhtb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163gyirazax.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163gqzwakoy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163wtqfmkgu.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163dmfvoitd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163fblnxzgj.html

[Q06] 删除列
来源：http://www.xuanzx.com/163xcpxaost.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163xoaxgvpm.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jlgasras.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163uhtkqcne.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163hebwaqaf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163xfqryfwe.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ljiljcfb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163qezvrxjg.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xrzsnnuf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ckdzrodx.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163kzertagk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163exloiwoy.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163eqzqnida.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163lcvrnach.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ckdcsele.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163lgmqlrup.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163sbeubvju.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163yqgroecd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163isrhlzzm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163wgcpcydb.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163dndinttj.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163gqlxmcvt.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163rakjpotg.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163spdxkrwu.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163idirzrmi.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163upayocei.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163hojoxhrc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163anhrtwno.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163rtjoacfx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163pzuqqhjh.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ylnxrnjz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163dixxqial.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163topiwhae.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163zwrpntlb.html

[Q22] 排序
来源：http://www.xuanzx.com/163avgbfprm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163biybejbz.html

[Q23] 分页
来源：http://www.xuanzx.com/163shpllien.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163lphhpioj.html

[Q24] 去重
来源：http://www.sxryk.cn/163qphzwvne.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163afzsuzsq.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163xnoqkbpk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163gdophmsf.html

[Q26] 计数
来源：http://www.sxryk.cn/163uzxsyggw.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163lkxfthvh.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163gkjrkvhf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163wiyzfaok.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163sgbwynaq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163xagjafnv.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163gtpwmkae.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163fsvukdod.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ywxqfokd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mkimkeow.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163xuvmhzhc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hwnwahli.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163aslamytu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lohwcjlq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163vlcsryrm.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163szaecyoi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163zhuawcvo.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163hrvsrfdx.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163tveekdaf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163dbqjlech.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163kktqlxyw.html

[Q35] 内连接
来源：http://www.xuanzx.com/163dkgqitfv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163cmaxkcih.html

[Q36] 左连接
来源：http://www.sxryk.cn/163lljlmfrw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zjcbtpho.html

[Q37] 右连接
来源：http://www.xuanzx.com/163sbvioosg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163zteomelm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163qsiywqpz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163lixabyaj.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163cdtipgwk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163yszbqvpj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163wgyutnmq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ksxctisa.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ttgtzrbb.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163hhiwofml.html


<!-- 参考信息 -->