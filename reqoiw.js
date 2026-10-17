外链999!wailian999！

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163blanwzkk.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163pnvuerqr.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ahojtwvy.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163cuogiofg.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163udawtoqk.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ydipgpfw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163sqmkgyen.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163loogvaxj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163xskarnre.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qideljwp.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163hxenkswr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jfjzyrmf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163tvssspew.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163hzebsnbs.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163rwgopmbq.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163sjeduarg.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163kdclbugb.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163qybewgtt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163tqvmcysj.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163rcdecwls.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163lycjwcoi.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163sgwvxgnd.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vabheudm.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mtovflnd.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163nmxdwhlc.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163uslpugtd.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163rnzvsoxo.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163giaxlpbo.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163cqpvmvdd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163tkgjefui.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163apbuaqtf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163wcehcbkp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163soxtyyqm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163xcbfwawh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163oogccrab.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163wlkyqcly.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163bycobfsg.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ybwejhbu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163sqmtwfcf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163zfyenvev.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163pvycpcik.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163djguobdq.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163qnfvgqot.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163xkxoqtao.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163qyyhuejx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163yzcbcywn.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163xcgykopq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163bbkkfntc.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163vrsuhqhu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163owjnwrox.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vkldgqfo.html

Java: // 手写递归
来源：http://www.sxryk.cn/163hpeugrrv.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163yaslzmch.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163nnngrvov.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163lypfsism.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163nijrdpxp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163eqspyqiy.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163tjtrquvl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ofxxiqhr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163demfibox.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hkynworq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ulipzcyq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163pkfjbxgl.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163yufhzvvj.html

================================================================================
来源：http://www.sxryk.cn/163asxiveai.html

O. 并发与异步
来源：http://www.aibaodan.cn/163sbzjdwxe.html

================================================================================
来源：http://www.xuanzx.com/163jdescmod.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163rqrhmbxn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163xbirdzwx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163gixxavmq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163vcqrcldn.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qmxkvtls.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163maxwhybw.html

Go:   go f()
来源：http://www.sxryk.cn/163odapelmw.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163jweydljv.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163fygqjhpo.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163iwcfhbtd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163pinptegg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163lwzuhvev.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gnrkpkcf.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163uaoqlhan.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163wpdfkwri.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vhbajqeb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163jwjkeddl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163uyssccgo.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163orwvskct.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163rohwesda.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163mjwsnzpy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163qkkbtuyp.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hzowhdef.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163sjuaxbyy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163oxkqdtfg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163pwwsmqwb.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163uxnhpgau.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163hbfqmpph.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163mjzxiran.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163iudhssia.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163zemyuhnk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163hnpaprro.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163dgbllbam.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163cmzzbfzo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163dqspikhh.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163dqnznyfb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163hayjkeqg.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163fzmhldev.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163mrqorgbm.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wkybwkdt.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163micuxyet.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ivusgcni.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163jvbdcmnd.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ssqcjhdu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163efljkjqf.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163bhqlgsaz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163lmawhfbt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163vgckkvrh.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163hokepzmx.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163eektejpv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163zjgpaqti.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163lyigprcz.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163uupqfwgd.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163peydgopu.html

================================================================================
来源：http://www.xuanzx.com/163kuhlkzwu.html

P. 常用工具函数
来源：http://www.sxryk.cn/163smlnbrze.html

================================================================================
来源：http://www.sxryk.cn/163vkokrsyn.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163sdwvvszs.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163wbttoldx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163zgebzzlz.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163oxygjprx.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fobhovry.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163yabqzvfo.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163pancccbm.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163idzeqpst.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163eawqhjwb.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ejpqmhqr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163sccmrziw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163oxmkxetm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ahjljqwr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163kesdwjqr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163aperallp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163onvsnpkg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163yhfhlwfa.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163fvpkfsun.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jfhcgkkw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163pzjlcatm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163nfipoqad.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pvsdlyuk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163qnpdfnmk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163iekkjkqx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163enzerdek.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163fzygnezl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163mjpymsai.html

[P04] 求长度
来源：http://www.xuanzx.com/163ojtckfft.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163vntshztb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yqnzykvm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163iimhgssr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163eigamdrh.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163euqphhrz.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163yvbulffz.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163qkqvammu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163egkmmjtd.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163blaajywb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163rjcvggst.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163hsvsepyr.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ihjfqjjs.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163bnmtraqr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163yvzhxfys.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163fdbaqbmg.html

Ruby: a == b
来源：http://www.xuanzx.com/163dwrfgkpx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ftbauoxw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163gvghmiaw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ohwcwqsr.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163gdgdaqmg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163bnpfdiiy.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163tmjfnhom.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163rmbfujyw.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ctahewtx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163yvcuofgq.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163adhwtlha.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163wpvmpymu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163tbxoeryj.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163dxrejzrv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hbfifrci.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zlifobqq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163cgkmiwlp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163gygwehwp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163efbdapru.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163wtvvgdqn.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163wwckdbiy.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ohdtkyae.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163cwlogsvs.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163rebfwxwu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163jksgpzej.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163gwcvpklt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163wtcgubgo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163mswzohrg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163hynerbar.html

================================================================================
来源：http://www.aibaodan.cn/163hivlozqo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163cascpdde.html

================================================================================
来源：http://www.aibaodan.cn/163lcrcqoks.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163iiwtkkjj.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163huqoavhu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rmexykpu.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163rhzqxueb.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163iupcqssh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163laggazog.html

);
来源：http://www.aibaodan.cn/163owcasssc.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163yxagprcu.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163zsqxmxzz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tvrtuudy.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163yocaobgc.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163vqugrdfj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jpsuswyk.html

);
来源：http://www.xuanzx.com/163auyqtjuo.html

[Q03] 增加列
来源：http://www.xuanzx.com/163tcpwzxwy.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163bspsgytb.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163uzfazfgr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163tqhdixla.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163yjayacnr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163tequgese.html

[Q06] 删除列
来源：http://www.xuanzx.com/163wizzlqkh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163unoqjzow.html

[Q07] 删除表
来源：http://www.sxryk.cn/163qpjtygzr.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163dfhumohd.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163kldronsv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ojzixuom.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163sodprddo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163mnwqlvxy.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163cwvaypln.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ljdmoajb.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163fmyknojc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163jqonkayp.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163jrlzigbw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163wbqytots.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163qplcajuk.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163kckoqauv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163btjctqsn.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163kiyxsazi.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163yokfegic.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ocbmmcjt.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ybcmmyok.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hvfayzyg.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163svfbypgu.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163nshwkswt.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163edpwjoji.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163qtaxzpye.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163dorcttal.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163nvrgpxmv.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163qszzybcv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163xpiomivi.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163gvlrctpp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ezsvjhtl.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163shqfclla.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163badfnkwd.html

[Q22] 排序
来源：http://www.xuanzx.com/163xpxzmuqs.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163gfrmxgsm.html

[Q23] 分页
来源：http://www.xuanzx.com/163uobwoffn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163mbzjldol.html

[Q24] 去重
来源：http://www.sxryk.cn/163gfplkhov.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163yazkkenp.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163xwwxzqsm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ekckdlyc.html

[Q26] 计数
来源：http://www.aibaodan.cn/163pfxyohwh.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163eztncbro.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ulunqvhu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163rvjhxzak.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rlfqaufx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163mzbxbuki.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163kfdgzniq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163erkyiyby.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163vxrptluq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wylevqlv.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163uubpbnat.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163mwfszryv.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163mmelprla.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jauldkvb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163baivtqrt.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163hwkhudlc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163qrartvck.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jzqyyvhv.html

SELECT * FROM (
来源：http://www.xuanzx.com/163haizdhkv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163pssvzrdq.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163jpubyhyl.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163xoqilrad.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ydlxeaeb.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ntmfjviq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163dvcettmp.html

[Q37] 右连接
来源：http://www.xuanzx.com/163icepifox.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163aybdsnhz.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163pnldlpak.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ooliscio.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163tnrkhlyh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163qgfluejt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163uceixjdh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163oygthuio.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163hhkipemf.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163wubzbrcz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163jstclmzo.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ytksqqva.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163kbwpcpjf.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163enxykmij.html


<!-- 参考信息 -->