外链999!wailian999！

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rtzictpm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ctbyyeqb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163goptgupa.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163feckwvcx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163npwzzitz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ygrzxlti.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163lqotcjgo.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163tdmdhcab.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zjubdwcn.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uallbhmr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163qvornoml.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163akrauobd.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163kskxnwbf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163oshvzcwi.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163zuwlrnfm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163tlibjkmp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163sotiismy.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163pspxmyuu.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163crrwznhj.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163aigvubzv.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163pyrisecn.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163oislakna.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163dyhrbxzd.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ekabnujp.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163yxoavcxg.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163vtkkbbla.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163usfjepie.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ribxixya.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163gbjichmd.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163byhtkmyr.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163fowckopi.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163giggiabz.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163llypsspd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163anktyalm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wozzfeyo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163eejmwbao.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163hmgdyube.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163zukjnpan.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163oamcetzo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163cwepzdki.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163pnfcytnu.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163rwmsolwt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163axcdxvne.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mjculkdy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163uikftref.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163svrfnbcw.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163iaixfcwk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163gfscluie.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163mxxlbtnk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163bwcswiyv.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ruabxpne.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163yjwawpwp.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163pmbbusih.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163awbytdte.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163gzhudijo.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163syfpavwb.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163vhehchkz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ktxwycto.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163rrflrmmj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hqlucksb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163rrjewrat.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163gjhxliwk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163mxgolrup.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163meoqxoow.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mbujxjye.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ihpzspjb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163kyqwgccx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vtmxwmmu.html

================================================================================
来源：http://www.sxryk.cn/163hugqbzad.html

O. 并发与异步
来源：http://www.xuanzx.com/163dftjhjfh.html

================================================================================
来源：http://www.sxryk.cn/163rajhvldm.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163tziivauv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163gvbsytzm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ckhvbucd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163nxjdrrpe.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163khmaipbj.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163mgtjsfok.html

Go:   go f()
来源：http://www.aibaodan.cn/163bskblybo.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163luasgsjl.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163qthpqczc.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163qtvuowyq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ycljgzcn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163kbzgthgi.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qifywvek.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zawbdvpo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163zjixlijg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163kyviuykv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163wtkujeeg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163cucbggvk.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ddumlakp.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163sqiiqhby.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163pwhichxu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163hirvkkcl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163icpujtcq.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163rfowibls.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163uqdqxbsb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163pzcfwskk.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163egljgfgj.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163utkgpnpp.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163jjdvzuxk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163wnbfnnkq.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ccigvxea.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163cgubjqxr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ikpiwepl.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163qxuwtsjc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163edveofcr.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163qghxagvj.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163vuqlylzp.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163guaamzcn.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mkoyurpz.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163qmovcjmd.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ypuhcvaz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zbyrqrci.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163fdguvojd.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163kvpcobzy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ctkhvynj.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163oeslvswj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163delaonmz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163nrzbujdv.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163yenfvbhl.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qetbdkjd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163gfmriwpz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163xddbnpmp.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ymxbcmtf.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163bstnqxmi.html

================================================================================
来源：http://www.sxryk.cn/163kphlqskv.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163njizothy.html

================================================================================
来源：http://www.sxryk.cn/163vwusrcpv.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163vmenmwbg.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163znhmhoqj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163qrykvniq.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163hzjpacki.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dqvtsadj.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163bdwsotra.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163glurgqre.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163zmevdnou.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163wszjralc.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ycjergui.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163miwgcapj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163udszmyse.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163qcnbsffd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163lcwtwgjl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163lmfjkxfm.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163cqpxydil.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ppcbgiqr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163evjnpemh.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163cjuibjhj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163bthydzdd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163zejkujfx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163lxgbacnq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163wusgryer.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163qqntdicd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163srkbsqjw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163xjomwjyk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163bbssfkgv.html

[P04] 求长度
来源：http://www.xuanzx.com/163gvzouclg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163fwohebpm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163bewpughb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163bynnbsju.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163txgbhkkt.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163wztuyxmj.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163fmxuqyui.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163dpxckdxx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163hpgkyomk.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163bzjjcyxc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163vmzcmtit.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ffnmdnlx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163awynymnl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163iwoatsfc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163elkiaglp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163swahdvjf.html

Ruby: a == b
来源：http://www.aibaodan.cn/163pymdboun.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163bbbpvdaw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163xgdhyhdz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ffnlpnco.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163rykzvzrn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163mzmxkcjl.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163mwlnntpy.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ghawafin.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hygoqgiu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163zwyktsiz.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163nslifsfi.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163mmabcsoi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163yqjhkehz.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163fhmcwuhw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163tawipqhp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ytnsygaf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163fmbfhwui.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163cewxfunb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163wwemykee.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163iduuczbo.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163bfnvcnbp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163vkgvpfzw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163qdoaubkt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163azrbylvh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163lrayfnrw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163yddljbot.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163pfheziau.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163cnedzfab.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163goquslip.html

================================================================================
来源：http://www.sxryk.cn/163tjrtyzpo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163qnmozchz.html

================================================================================
来源：http://www.sxryk.cn/163nhdmyvyn.html

[Q01] 创建表
来源：http://www.sxryk.cn/163cxjqxyti.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163tisilrmi.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163dsxcxdpp.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163iptqinpc.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163awiraqzs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163yqmpwxas.html

);
来源：http://www.xuanzx.com/163qoakqpim.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163gyqtoqyi.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163brggvwvw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ivwzgvhv.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163wkdcasns.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163xaccrlzz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163rzwaegbm.html

);
来源：http://www.xuanzx.com/163pbbvfoso.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163chrvcjlg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163qzvkalbg.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163bpyrhbmu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163gngjbmoi.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163xwssiluj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163yvveeykg.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163qzluavxb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163jfjkrfqu.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163hhoeggzf.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163zpdjcigg.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163wempbnor.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163scfhwzbt.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163nxfeefsj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163xhhfiwjk.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163jqstzvbl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163mzdylxcr.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163kcavlpqy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163qxymxtwi.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163mpihkztg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163juytzuom.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163pqkmqbeg.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ozxhnygs.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163jeiytiun.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163huamjtoq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163pnnxihwc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163vwsykvbg.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ufpwnhaz.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163odrchalg.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163ripbryaz.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163cqqpsffi.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163fjumgick.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163qiluvris.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ndslmhgk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163hlwyksmi.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163aislkyjp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163xdsozkhv.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163luasnvvv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163bitqklov.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163sapziwvj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163vovraipx.html

[Q22] 排序
来源：http://www.xuanzx.com/163griklmoy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163kjhhtwlf.html

[Q23] 分页
来源：http://www.sxryk.cn/163nhqhzmzp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163mmbhzzlp.html

[Q24] 去重
来源：http://www.xuanzx.com/163jrewcnke.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163sajzypah.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163vvvtjvrz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163fcnuplfd.html

[Q26] 计数
来源：http://www.aibaodan.cn/163uqjdqvdg.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163elneysup.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163qhcdivhc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163mavjaipt.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163rrxnatno.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163fsxuzqxf.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ozdqegox.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163shccyzpq.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163jqitysoo.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ykqukcfq.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163jppsoooj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163vmbulvff.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163hgftrfvu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163frpyhijf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163eqqbhyyi.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163jxyadmmj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163cktxmfcx.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163opzhnnww.html

SELECT * FROM (
来源：http://www.sxryk.cn/163aahihhry.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tfvfjcve.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163usgcmwja.html

[Q35] 内连接
来源：http://www.sxryk.cn/163xrouyfdp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jarsjtyb.html

[Q36] 左连接
来源：http://www.xuanzx.com/163uccrvvfd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163japrelit.html

[Q37] 右连接
来源：http://www.xuanzx.com/163mxcerjdu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163keqcoure.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163woplhvvg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163hmpdvuaa.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163yspvxnfe.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163gkpyjzok.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163xsjnnyyw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163rfxlymbp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163xrjvxohj.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163htxzyahw.html


<!-- 参考信息 -->