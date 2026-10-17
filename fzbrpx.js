外链999!wailian999！

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nonwlmcn.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ueonvwou.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163srttomxo.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ivazpnuj.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163anrhwrdq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rlhyuerg.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163biodjpjm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163bjkqxnvy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163wcvvdwjh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163rdwgspyu.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163qxxpnwxu.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163wmczetye.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163zmnvvhmd.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163cyjqdqav.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ulaenjhl.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163cwnjxffj.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163rrufctlg.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163tkavqtic.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163cszvfzfu.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dfuaecle.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ybmdiqon.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163avgvfbzc.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163nyccbshx.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ktsrgoiv.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163elyjojje.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163pnizxzuz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163njsrrfjv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163mnsbwyyt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wmhvways.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163fupgxryt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163waxfltnd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163fdctrzip.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163nohfsoni.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163katiesoa.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163mptuombk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ijwqcotb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163qhrkymob.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163gpkxogcb.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163tfrbjtmu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163lyqkqpde.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163yfrfxoso.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163jnublmud.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163kxxscjri.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163meowjyqz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163jqilfqgk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xiwfruim.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wvoyurco.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ojrmapvr.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163vudyobfa.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ehllaopz.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ozbhivau.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163epxqgcgz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163cnyshlsa.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163stcjaufp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163yetqvdvx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ocfbgguv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163daqcpxng.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ojzttmny.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ywcxfgtn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bucbivvh.html

================================================================================
来源：http://www.sxryk.cn/163wxphcgwk.html

O. 并发与异步
来源：http://www.xuanzx.com/163zolmgikd.html

================================================================================
来源：http://www.aibaodan.cn/163qqtpowwm.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ysdhnpvv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ehhsdnuu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163gkosslvu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163khuinxti.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rhmqhlki.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163oidjkhng.html

Go:   go f()
来源：http://www.xuanzx.com/163xxzcjbop.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163gdryuazl.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163wqqrxbts.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163uesowllf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163gpwlbvrp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163zsveryyo.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rjnlzpto.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163uugrrtui.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163akeuvsfc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163dnxiivtn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ykwrlhuz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163xgetkopn.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163qantenwi.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ztrnypwi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163eacvicmf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163uddqixlv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163jpiujshy.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ekgcrfhd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163henvnrig.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163kiavridc.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163fnawypvd.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163vnbxiovv.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163waoivvfn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163qiebvckz.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163yiucehei.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163rgotcblw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163tgnxvgpf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163obqvwtwd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163iykrqamr.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163gskhnpbf.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163uhbabdgb.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163sndidvex.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mwqcpvfs.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qaghceee.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vhchnftz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ldozkcip.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ncifrnxf.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163tbwkconj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163qwkbbgjr.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163zsrxfyvc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163cuateijo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ywoxinsp.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163cmeedncw.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qaeajpol.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163kfnthmhf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163juqupusn.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163qfvcztxo.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163bxnawhxb.html

================================================================================
来源：http://www.xuanzx.com/163mumjyxyb.html

P. 常用工具函数
来源：http://www.sxryk.cn/163lhpgvpat.html

================================================================================
来源：http://www.xuanzx.com/163wpijnhhf.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163nrcwjqae.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163akbrtize.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ugpdfivm.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163tnunsibe.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163agbqnnah.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163psyvffry.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163gvyibosu.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163mrylvvyu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163uvumihra.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163avtmcfja.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ojraljuo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163yqpsnxok.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163dzbdhbod.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163katjnhsh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163prbfwssp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163vvzywppk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163hgblsryk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163xocfhaal.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163sjmvyaev.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163yfegjpfa.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163gvjhselq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dgjjircw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ekcvzzpx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163lficnled.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163vqbjocug.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163yfyphbjz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163aekjyimq.html

[P04] 求长度
来源：http://www.xuanzx.com/163uqwomsxw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163tcpmchyj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fmggfuln.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163pfnxrxya.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163qssrspdj.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163jqigxczh.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163baktarca.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163krlfxzdw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163vlrtytvs.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163rhmgxuod.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163naemuass.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163cutlyswp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163mmryxnqv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163kdszlrmc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ijavxrsl.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163frpzykpa.html

Ruby: a == b
来源：http://www.aibaodan.cn/163mcygcalk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163nxyszkvq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163dsypnure.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163yisqonom.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163spbszeoo.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163davsxhrj.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163cboagloy.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163tabzsewc.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163tnjgamtj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163hnwtieur.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163onmdbddm.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163wcmbbxol.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163zlilhjqw.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163glbbrkuf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fhidcojg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lsoxvbed.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163viwktayj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163cmtsiouo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163klmcrsnb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163odxsimae.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163llcfaiaf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163bsvttujs.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163nqasiwpf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163featxtth.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163zjczzjsa.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163nhgzxari.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163blcwodta.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ncqkzsuu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163qqeiundg.html

================================================================================
来源：http://www.aibaodan.cn/163isyerqan.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163lnqfayol.html

================================================================================
来源：http://www.aibaodan.cn/163tebndenh.html

[Q01] 创建表
来源：http://www.xuanzx.com/163jmqevlnh.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163cbzcecoh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163khlmiwre.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163hnobywpc.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ekvsmlvq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163lmkqoamu.html

);
来源：http://www.sxryk.cn/163gsihbukk.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163bxiqvmzk.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163savkeluf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mrjwxeqv.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163zrkflasu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lsadmtkg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163jklucxth.html

);
来源：http://www.aibaodan.cn/163gdoxidue.html

[Q03] 增加列
来源：http://www.xuanzx.com/163jigxkqds.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163iexwbeop.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ubppqdtw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163sxlghtfb.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163bmsbpjop.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ooongzdc.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163qrjvohst.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163gbslckrt.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ywetamds.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163flrxhmvk.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163jesruyse.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ltdwppod.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163vfpuuyzo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163bbznvqth.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163secnekwn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163nbpusoxt.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163cbgqqkvw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163glaaihqm.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163rwzevkrx.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163fybtejrc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163tmukutnj.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ppwlptff.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163wzudfswv.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163vnkgooup.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163qihmrmwf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163gqhmjctg.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163swhamlok.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163awoxecxl.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163qzbrqivh.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163itwigonb.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163wkmevyoi.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163brblvohv.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163nqrnnnac.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163plagujxj.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163eedruqcp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163msrsisgp.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163qiwvhyrx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163fpgekmll.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163jizterul.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163unjdczhr.html

[Q22] 排序
来源：http://www.xuanzx.com/163relxqbdu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163leixbmlc.html

[Q23] 分页
来源：http://www.sxryk.cn/163euuvqeww.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163kxsluvhw.html

[Q24] 去重
来源：http://www.xuanzx.com/163ljaptprc.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163bpwfavuu.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163niipvcid.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163zbbjcqyu.html

[Q26] 计数
来源：http://www.xuanzx.com/163sgsjycno.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163fxqpepzl.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163nxqurifx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163wjrncaha.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163uacvjdto.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163rlugwbax.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163azzhtxxj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163pgxhranf.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163dykkutse.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163btjdhpiq.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163skwxidsx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163gejjgswt.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ojtgynwl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dwouivuc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163nbooazzp.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163akrzdajw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163bfxkpaug.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163lmcwyfpj.html

SELECT * FROM (
来源：http://www.sxryk.cn/163tbdmjhzt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ovyynehe.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163pfxwhjxm.html

[Q35] 内连接
来源：http://www.xuanzx.com/163pnzudhcj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163gmgcigtz.html

[Q36] 左连接
来源：http://www.sxryk.cn/163mzhnybps.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bocbfbob.html

[Q37] 右连接
来源：http://www.xuanzx.com/163maenjqzm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ptcssjij.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ttcnfojv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zxxtnoup.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163iasparkl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163soutwuez.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163qwivktby.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163nlxayzua.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163rhzmtzae.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ivjzqkib.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163snrxlfuj.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163vcfjivsm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163jhbbtueb.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163utwayjnc.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163kdgfmecx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ufnwvvgj.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zdczohua.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163dovlzwpt.html


<!-- 参考信息 -->