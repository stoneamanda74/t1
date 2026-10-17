外链999!wailian999！

[N05] 最大公约数
来源：http://www.aibaodan.cn/163vfkmwmcj.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163zwuwpxmt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163tzjaiwdp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163pmcuoojo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163yiashokr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ymgzhybt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163hyxpbgyd.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163resawwkv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163xgbzpycd.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163febivbyf.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163mmlioami.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163avjvjygg.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163prgymvxr.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163grqrkiks.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163gxucuuaf.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163eqhpovnm.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163lxzvzoct.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ujmcewxh.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ieghlrks.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163grprgfoq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163bewrgsbl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163znwpnesd.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163pojzwdrn.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163batyvkaw.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ptbqxxun.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ljsvfmzo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ajljmurw.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163qrxwnzoo.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163hoerdsym.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163evteiodl.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vehyxrzf.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kpixqmdf.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163fqkvhmse.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fadessxo.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xypmoaxe.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163xttzqnne.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163mrlugarw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163vxhipgtr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163aowtefut.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163tzfhdisw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163tmqkgcmg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163pehymtbb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163atximfll.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163aitamfzl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163xjksnfah.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163asdjdcqe.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jsghgcrk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mfsdebdg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163mmuasvjb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163bufkgelz.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163fzofekas.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163hglrvyyd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163bakegqul.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163dyjgyket.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163oflfllut.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163wyopresz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163mqloyyjl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ihkjajtd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rerkjdmg.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ruhtnmvi.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163migmtrvz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163luurnhev.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163rtxihkoy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ljplfgiy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163acgxkhuo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163uoopttak.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wtcusqdz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jgmvmnha.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163smgptmyj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ulcyjpui.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163giejidyj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163sgaypcpz.html

================================================================================
来源：http://www.xuanzx.com/163eqbbiwig.html

O. 并发与异步
来源：http://www.aibaodan.cn/163sfumkhjo.html

================================================================================
来源：http://www.sxryk.cn/163xgqrgabl.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163gabxwgnd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163dukenkhb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163tmzvroui.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ydtpxylp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fxydxghb.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163owqlhyrp.html

Go:   go f()
来源：http://www.xuanzx.com/163yyyzirpz.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163cyoisjwk.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163tpizfxvh.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163cmtruzeb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163csziwklh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163rbtdrsix.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163iqkicung.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ennmxznk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163cfdmpcrp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163hxmgzoqy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163fxkdqwgl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ruubrist.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163yoxfudjv.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163hebchmob.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163fgfnsufa.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163svvjbopx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163igsbofol.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163tumhnxhy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163omteqwzd.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163udbbpmtk.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163poqliqij.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163wivghleb.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163gxmogvfw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163evobotlr.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qrqstaox.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163auazfrnk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163xdjdiizh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zoaywotk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163qqnkecsg.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163lbjhnobd.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163azfkipuy.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163tsdizlwm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163vvjcyjpn.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tmnrowje.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163kanahdet.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163nbauwemu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163hzoebkme.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163mpacfupe.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163yqayxkjm.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163cgjslenu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163lmaefedv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163rkdikphj.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163sdbayhis.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163wtbdwhtk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163hypywvej.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163igjmxpny.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163trqlqzys.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163oxuimphs.html

================================================================================
来源：http://www.aibaodan.cn/163nvyiyavy.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ycsvuhnv.html

================================================================================
来源：http://www.aibaodan.cn/163hasxmtan.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163zhgcdhfc.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163wnjwhlcd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163nsjsseym.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163blhbwdau.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163lcmdmgsh.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163vcphmepq.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163pwekumql.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163uxrgbvgh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163niixtvla.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163rxualsip.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163sbtfzikt.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163lftexnfn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163izaynome.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163nirzvniq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163tanaduny.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163krxskfdb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163bwinqagh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163qeriaxbo.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163yvsvstnp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163uoudcdnu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ttrgggql.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163iksakqfj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163hdxjjoyt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163idpoyzzj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163afftjmrl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163nhkjaauq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163fxugessy.html

[P04] 求长度
来源：http://www.aibaodan.cn/163gylbssnn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163olizgyte.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163npcoajpq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163hmzjqptf.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163xbhsweel.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ckfinkts.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163scncqmeq.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163jaguyvru.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163pnsaxxen.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163oemsamzf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163wonpahra.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163wrofwlem.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163qsaaknan.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163pxlvkqpx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163nxzypqwx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163gehnrmyx.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ncsfbqju.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163fyjmwhpw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163rwqscyle.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163inhqlhla.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163cvroaelf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163epgcfnzo.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163uoszgwab.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163mewvunan.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163nqhwawfi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163pziwlmui.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zvqdiueq.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163kdjnjhvl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163eqkfhwge.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163pkbvejld.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dgokvfyr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163tnvxjadj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163rqbhyici.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ayvipwov.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163yocytdja.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163lkpzbwkl.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163lxbqlyti.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163rvasfgmo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163wbwphoho.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163iibdqszf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163cuiiboje.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163frptnmhd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163wcviqkpv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163xhtnwcaj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163avzhcebf.html

================================================================================
来源：http://www.sxryk.cn/163xotjgzin.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163srsaijoj.html

================================================================================
来源：http://www.sxryk.cn/163xdawqdey.html

[Q01] 创建表
来源：http://www.sxryk.cn/163sycvrdya.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163gvksvwqx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163btxonydd.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ddxrritr.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163skcgtqqb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163yqvygykj.html

);
来源：http://www.sxryk.cn/163twiuimrn.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ejhnmojw.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163pgyhbqtq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163trjvivgw.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163gfuoqwtp.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163sglnkgfl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qhbdgziu.html

);
来源：http://www.xuanzx.com/163opmmexoq.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163uesunmnz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163xufxvouq.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163jqjrmpsz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163duqqurdk.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163bgbdwdij.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163cgnmqfne.html

[Q06] 删除列
来源：http://www.sxryk.cn/163kuuxsmjt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163obwksazu.html

[Q07] 删除表
来源：http://www.sxryk.cn/163igzvqepx.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163xnjhejbq.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163qqdyeljw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163xevcbfhx.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163gswqakwe.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163bklxcmdk.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163lmzqwxfw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163wrixzblk.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163lkonponu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163zxewmtet.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ebhzmhzv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163sufskoue.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ijxkfpkm.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163qotqpaug.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163izksqntf.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163lzhwoasz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163mbbjduik.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163iuhwygix.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163lscbfvtf.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163aiubfuqn.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163snryxqjs.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163vzzwsggn.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163sielgthy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163twltknvd.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163himbogdh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163taqaimer.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163zbpmuwdy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163cwxbrvzj.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163uigiveyg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163spndnget.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163mvzqsmye.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163gvqbdptk.html

[Q22] 排序
来源：http://www.xuanzx.com/163hrcttbqu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163hdhotemx.html

[Q23] 分页
来源：http://www.sxryk.cn/163ybadwkyn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163cmpysijr.html

[Q24] 去重
来源：http://www.sxryk.cn/163hjuqabcy.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163jkyedxdh.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163jfodfxco.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163xiqaumez.html

[Q26] 计数
来源：http://www.sxryk.cn/163ujedxuzd.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163zyjyduwm.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ioxotkgx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163efguokla.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163qsezgvhf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163mvomfqeh.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163qkygqcts.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163tnxkjpwg.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163leurskmw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rynduvmv.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ljomsxhj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163oskdkahb.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163fazcsgli.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rxxtqked.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163auwmxmwr.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163adweuqbv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163gviqbqsz.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163xebumyvn.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ukdmhfbz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163niwlddpi.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163djqcxhdj.html

[Q35] 内连接
来源：http://www.xuanzx.com/163jaooalnt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qttkezfb.html

[Q36] 左连接
来源：http://www.xuanzx.com/163rdjrxlxo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163wktswtfu.html

[Q37] 右连接
来源：http://www.sxryk.cn/163eebaehmn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163tqligubq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163nutzfemp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163tbxnuqap.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163fdjhsxxt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163csjcqaba.html


<!-- 参考信息 -->