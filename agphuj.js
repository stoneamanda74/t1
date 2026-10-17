外链999!wailian999！

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163uqossthi.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163nozormld.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163dlvcmhmf.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163oyaolsyq.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163twaupncn.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tdcqoajc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163wtnotswm.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wqmfbdgm.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163obgyuqso.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kqdlcjco.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163bxoszbvz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163wibmkrim.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163apgdmnyn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163kcmpwalf.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163bvfzhufs.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163cemhsfta.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163faudjizk.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163wtdeeprm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163kwusurnz.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163xvnyioof.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163rttccfjp.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163litbjhts.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zrtlqfuu.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qiyvfehj.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163bjjoulgm.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163czmgglyy.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163uhixpitj.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ovkpuqqz.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163stovtddg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163mygcnsxi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163qfzwrhwp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163rfachpvw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163dsdcyfip.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163brzgscmi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163tanvcjch.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163unplzjbi.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163tuaqhnoa.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163qqhhtrsr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163fpcojwtq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163tpfkccdq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ollhildp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163smnezgwf.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163mceqgkjr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163jekpofgm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163vhuxdmzf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163kqiltbyy.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163qclsjhtf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163lsnovvnx.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ezshthpr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163uklquhno.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hjxqnsff.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ggahwuhq.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163awxtltet.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163zaouxqeh.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163wfhxdjbv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163eldsclnz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163hamqqlzi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163vwgfzisx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163hdbosjuw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163buhqqojh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163krvtnkba.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ywlylcqw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163gpcyxdoe.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163tiksemhc.html

================================================================================
来源：http://www.aibaodan.cn/163quxslkon.html

O. 并发与异步
来源：http://www.xuanzx.com/163foeybjle.html

================================================================================
来源：http://www.sxryk.cn/163tuecgjnr.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163nktipogk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163rkmqyzoc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163rwtqdsja.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163tjfbyukd.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wsasbwqk.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163piaewwoq.html

Go:   go f()
来源：http://www.xuanzx.com/163wxvfxrnc.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163decjblpc.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163lxoqdbwl.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163uqvhxiqx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163bnhwxfrw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163rvfajvto.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jiaopclw.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ugkyfyfe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163wyqgbmrf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163kczulpyl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163hukwthto.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163pxtjkull.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163zofqxqsn.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163daihavgk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163qebndxju.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163fmgfwuxn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zsycpuaa.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163vetgaifn.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163lirwtnzg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163verpbibm.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163dbehqbmw.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163runpvswg.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163hxxdbjlx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163zmzxjalz.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163rnbwelwm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ouxsogfk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xzslypem.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163aawiislw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163qqabxmrl.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163opayyjkm.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163judghpgx.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163fvcwlrqq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163qtctdcob.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163aivrblla.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163bqqecpvr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163xlcadzoa.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163wfjlrnxh.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xqezsxjd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hymxefpz.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163mfqpsmhp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163uhjrtgwh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163pmlzqvdp.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kpzfshbn.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163wznmlbjg.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163bqkqulvz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ovkwwmnl.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163nozjnmnm.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163riypeedn.html

================================================================================
来源：http://www.xuanzx.com/163qjtvmelw.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ujyimmzx.html

================================================================================
来源：http://www.sxryk.cn/163hdhapewd.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163kzybkevy.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ryeqdzxm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163lmeescgo.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xaonswmd.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fbzmoldt.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163uzszsxhd.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ikakqped.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163yciraivy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163sfazplbx.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163gjdvyjrp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163doixxfcj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163wmcahhvo.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163wxsuxuvh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163rualugld.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ewgvleqh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163oiggchak.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163jezlkbra.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ypssmrdr.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163kbourxib.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163nduwmetk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ygrsuzrm.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wizkmvzi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163robbhsbk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163lzxfrefu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163uuqkjckt.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163kppsncfx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163kubjnzpm.html

[P04] 求长度
来源：http://www.sxryk.cn/163cfuelecc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163slecsxoa.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163beolshbh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163aaevrask.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gzkxefva.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163knkktpjc.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163nldlzvyx.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163blulaqsi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163qntafvpq.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163bgixgbrt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ixxuamdt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163awfpflqd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163bupuuoab.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163aslxvktk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163wlobluzt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163jlxgqkpy.html

Ruby: a == b
来源：http://www.xuanzx.com/163elkhxhxr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163cvhkqvtd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wfjyedsl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163uukkfhug.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163apepdfqo.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163jfpewvxp.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163jfssproc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163kgejgwyv.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163skzngsmq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163nfmecmdq.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zykiggev.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163cgpfqtpi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163uvduvkic.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163qsbnybht.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hfmfoybp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nejbhngn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163hommkgfy.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163vgmudnoj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163zejhqoue.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163dpkizsvd.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163dqssawlc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163nxmxjpxw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163idqlqfyv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163cnqakblt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ofrrppdn.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163qlmtzpjg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163rfazywvz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163uxptzlxq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163dssfiofh.html

================================================================================
来源：http://www.aibaodan.cn/163rpuibsjs.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163oipwgvxx.html

================================================================================
来源：http://www.xuanzx.com/163pmldcvug.html

[Q01] 创建表
来源：http://www.xuanzx.com/163typwdgsx.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163hmnvuclu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163julxkzpm.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163patwedct.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163olsgcjcj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163fswagcal.html

);
来源：http://www.xuanzx.com/163npidwoaq.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163euyjzvbs.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163gchkwsma.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163cnyuhiif.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163fitvjmng.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163tssvijbc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163leuedhtg.html

);
来源：http://www.aibaodan.cn/163pmqnekei.html

[Q03] 增加列
来源：http://www.sxryk.cn/163xubxwbrs.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163yyvstedu.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163fajoesae.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163hvlfkrrp.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ynvzdzgz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163azdssubs.html

[Q06] 删除列
来源：http://www.xuanzx.com/163papczqss.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163gbpzzzaw.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ablvprvt.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163jghqryxe.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163idonefor.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163dkwicmth.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ayluwulv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163aqrnrper.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163oigbqpvq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ocxsrqip.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163zjyvfenf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ejfxhhvq.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ggtfzcux.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163qnijhncr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163plsdbfjt.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163uypbphwd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163amywcibj.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163klygdmnj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163jjtfphqi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163dhirlgsf.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163efatycfx.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163oblmyalb.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163mzcbzykk.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163mmnxeghf.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163bssjgwkc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163cunqnuug.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163luwfeyrk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163fhdpyzxb.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ttmlluqo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163sfhnndli.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ozrfdept.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163oziexpaw.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163twxkjzsq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jsljqadk.html

[Q22] 排序
来源：http://www.aibaodan.cn/163lckypxck.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163yhdrhviv.html

[Q23] 分页
来源：http://www.sxryk.cn/163sntglixn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163mvahmvdo.html

[Q24] 去重
来源：http://www.sxryk.cn/163nwpbsbjd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163tynxcvlh.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163lyndpqru.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163yrztbgsy.html

[Q26] 计数
来源：http://www.xuanzx.com/163xybhnedd.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163pehottaz.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163rcedjiiy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163quuejobc.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163gqmuozsl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163thxmdcol.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163trblcfzs.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163xhxrqlnn.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wzeoeqno.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cwulllfm.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163pwpsjkpg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163mxugpdxc.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163txzdclpp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163oxgsyugp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ntjeekpa.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163qrgmwntm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163tctmywhj.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163wloagugq.html

SELECT * FROM (
来源：http://www.xuanzx.com/163pbxvdlnf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163gjatxnfk.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163lhqllpsc.html

[Q35] 内连接
来源：http://www.xuanzx.com/163mhnjkzgw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cvrowlsx.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163zcirqjlk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ithrqqlv.html

[Q37] 右连接
来源：http://www.sxryk.cn/163daugsnpa.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163mxmtrhws.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163gpkxowlr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163kuxnbuhq.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ddovphrq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163yqsovpwe.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163dkyxcgol.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163rxyooayj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163urdwtfrh.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163nlqguuum.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163nzmpnnzg.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163neuerdaq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163swzepfog.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163rgycjmkt.html


<!-- 参考信息 -->