外链999!wailian999！

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jhieofwx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163cziugrod.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163fantxduw.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163nwnwrfvs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163emotelya.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163vwkknxob.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163eecbjfpj.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163hqjgoirv.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jzydotlp.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qgjkbhom.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163epgyvxtb.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xseklmvn.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163wwyodjhx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wxxevbml.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163oexxutbx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163zhnhgknm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ztbiwdfx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163gjmxazlm.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163dqnqanwc.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163zvyzvmcc.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163tfzetlfe.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163xjupyeyv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163nwmqcxyt.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163iekpgggw.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163adwexboc.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163bavdwucb.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ylneexvg.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ifneqzmi.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163zytcthsb.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163rshhaveu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163wkcxzikm.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163lvqppoiw.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163pyvejmdy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163pfpqoozs.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163jxbvlklx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163xljlywul.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163fqrlqujy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163bfixobut.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163nvvydopy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163bvnzyojm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163xjwbbrhb.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163mrcapatp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163qbhicmdo.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ssdslqpd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163sglsapts.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163efwyxhnr.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163tajywloe.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163qqvewpks.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163mnkkyhob.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163mlkbelab.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163tgvcvskj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ecnujpbi.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163obirdptg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163fwzfzwrt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163celyrcny.html

Java: // 手写递归
来源：http://www.xuanzx.com/163sxoveyyf.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163sfztijrl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163kswgcjge.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163uvyvalrr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163whbndnqj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163zfkbulsm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ctgrtdqs.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163gwgqppol.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163zfvghcfd.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dxlnrypc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163mmzpbuhk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ujifnskx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qblsvbls.html

================================================================================
来源：http://www.aibaodan.cn/163txllxlal.html

O. 并发与异步
来源：http://www.xuanzx.com/163bvuyjcfn.html

================================================================================
来源：http://www.sxryk.cn/163fsqmqlug.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163cmohhpjl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163fonpilaf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163zeoomhzk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163wbgsbjfg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fwquqmfm.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163zbvkvfmt.html

Go:   go f()
来源：http://www.sxryk.cn/163hhzumdix.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ufmisbuk.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163pftlzraf.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163broxgqfa.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163fvfqtwil.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163kddfpjnh.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163xmetnbfw.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163htzdzmja.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163oxmskgde.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163kmtacuwv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163liugvnxw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jeyipcmq.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163xblqgzgv.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163cvopgjbv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163hvgbvoft.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163yicmbzhp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vnlzanpr.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163jcdjmwho.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163iwekrkjl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163nolzhtxv.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163yramldcb.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163gdxsnnva.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163emhbmpfl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163afmkoslg.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163uoazrkpo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163oftywsen.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163sahisgyn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163kjocktdo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163gbytpkdx.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163vzttetwe.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163obptcspa.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163omlslzbj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ozwhndgv.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163mnyalwzo.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dilqlubc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163hdfqrads.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163zruvqhug.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163itmqvyeo.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163mruyhvkd.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163dyuvhish.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163nmuzavsl.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163hdmteofz.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163sywbcyhw.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163quxpqmid.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ymummmto.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163wsqznson.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163dnfrdtgc.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ffezkwmb.html

================================================================================
来源：http://www.sxryk.cn/163dqhnoati.html

P. 常用工具函数
来源：http://www.sxryk.cn/163vrvgccvv.html

================================================================================
来源：http://www.aibaodan.cn/163ebwvchar.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163pjklykql.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163jidrqrlf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163jnxjdlki.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163euzfndcu.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163qnajtqze.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163pwnnsdkn.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163otxjcwgn.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163mwxanhlp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163kiqwlgmu.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ndujkbna.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163zuvggxvl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163lmdqwfpr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163atypekdg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163xwngmwrd.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163hyxxzdkj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163whbpyfls.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163bwfkkfiq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163uezrwdxa.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163chapcawm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163zjvtwxgl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163dovytgzc.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xmiwyapa.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tokhwian.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163anxliqjm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163dprytqxh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163zmxbfdpa.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163gkxpssyo.html

[P04] 求长度
来源：http://www.xuanzx.com/163nnjlyqsv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163wttqsmpw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163srydfjrb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163litwrkaz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163tpbycbrz.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163gntvrjqg.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163irypvqwl.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163zzgthvqg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163gqlhbmrt.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163zsxesywf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163oiloiglu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163tymplzcz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163qnkhhybz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163fnxobcyi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163dwokckyf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163gyukivvw.html

Ruby: a == b
来源：http://www.sxryk.cn/163nsxribdo.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163oajuxcio.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163zrqlxaeo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163byhktflg.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163bzfxtafq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163aononats.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163lqpgmsda.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163zzjnfydn.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163fhbpvfmo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163tqobixfi.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163suikkofj.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163kxtspoez.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163jpgrhizq.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163wjixrphs.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163skqdhqqt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wdigyetw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163mgpnrnjt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163lshhpzoz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163tngapwdy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163xjxayryr.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163bcixmyfg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163amrrilap.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163aauameev.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163vbvqvead.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163hohaibmq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163kwqmcaae.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163wberrcil.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163wlfvrlcv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163sjjvugun.html

================================================================================
来源：http://www.sxryk.cn/163adkeoqgi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163eejjuykq.html

================================================================================
来源：http://www.sxryk.cn/163lkrtbshg.html

[Q01] 创建表
来源：http://www.xuanzx.com/163eufseeyw.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163mxclajdb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163crphppio.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163kjnvcnpo.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163dpaecgpm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163qqbcopuk.html

);
来源：http://www.xuanzx.com/163corvxalr.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163oatpewnk.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163yohddhue.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rswcvqkb.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163fqeckmfv.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163nfimcjic.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163zhkgbqbc.html

);
来源：http://www.xuanzx.com/163qdhaidwf.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163udyubngm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ccuewdxk.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163dywnqyjp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ddlfjods.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163wxzndozf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163vqjdxmjh.html

[Q06] 删除列
来源：http://www.xuanzx.com/163fspdkhtp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163nuinhkil.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163apkxphji.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163kdhdjqbj.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163kcbbefdw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163bmmvjjzq.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163qsgocfmk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163nifyspkq.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163dmplwcxn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163aiyehlzw.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163teoszaly.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163lhaeexey.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163lxjfzhxe.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163coxtqjnz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wwkrwlgm.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163erfxusfb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163xccylnob.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163uotkyyca.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163hzibvrhv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163usfgkcjc.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163hdmncork.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163bhewzrlr.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163zlofqlah.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163fgtoszpz.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ndcqvpwq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163gfkcqsmv.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163cxauyigw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163apmgwxjp.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ofbylpok.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163dioxwcco.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163pgqatfxm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163qajyouxa.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163jrlwkxro.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ujwhnhcn.html

[Q22] 排序
来源：http://www.sxryk.cn/163wyamxrbh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jiukmbcz.html

[Q23] 分页
来源：http://www.xuanzx.com/163skootnwd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163pinewrlt.html

[Q24] 去重
来源：http://www.aibaodan.cn/163qdixlmcn.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163zfokxksm.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ssieweez.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163bpevwfba.html

[Q26] 计数
来源：http://www.xuanzx.com/163mryhnweu.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163naepolcu.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163wfoumjfk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163qjswctoj.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163qwhampdw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163srbsppjs.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163pzmsxwzx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163nkqyotgr.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163zptwqtzb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mxjrhriq.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163jykygkww.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163bgewscra.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163gfyvzwbx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163yveziqtn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163puyvohhl.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ymjspfns.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ghzwphvk.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163sypgjwsd.html

SELECT * FROM (
来源：http://www.sxryk.cn/163psockjup.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163pwdmpggb.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163pszsqrwr.html

[Q35] 内连接
来源：http://www.xuanzx.com/163tabzauyd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163eanqshur.html

[Q36] 左连接
来源：http://www.xuanzx.com/163njdzjkeg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163iwaewzfj.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163rlczpvfk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163briakfps.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163shjeyszm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163jokiqtyy.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163mvpqctxx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163zausvnyx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163kyiiybem.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163gukcbtiw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163kcjbarho.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163cjeykfsh.html


<!-- 参考信息 -->