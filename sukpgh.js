外链999!wailian999！

[N05] 最大公约数
来源：http://www.sxryk.cn/163lkhlhqmb.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163dyvilycq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163yjcoqkfc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ncunhxiq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vqosvpig.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163xketytrn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163tllqwbbh.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ijzasrim.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163atntiiqa.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163lgkbxhtl.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163nknthszu.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163niplnszf.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gdnrmibr.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xlnkjddq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163wlsiupsv.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ydwogrpc.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163tphqyogo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163fcqzixsz.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163bsthzagz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163zffcphrb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163rlutyzoa.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ksmvayun.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163tnlwykxe.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hiyrgmkc.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163eywqvrou.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163qgktoetb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163tuuqhklk.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163beqwjcyj.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163wwsufczz.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163kxdrkfdg.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163iaoclgnn.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163itvdezql.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163qhwkmvxi.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163xcjvprmc.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xesxakim.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uigovxpb.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163donziafm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163dztmrnzv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163qpdwkqdm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163hyusjajg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163nbbiqdhr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163sadfbqmh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ajklsxky.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163huwmsbss.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163atharfys.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ilepnkwf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163bwhvizka.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163xkwdddey.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163clmindeh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163lwqriuyc.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ctguhiro.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163lzirxobm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163sivazetx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163npdpmedl.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163rgetuljn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163frcaduip.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163xcccxwhj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163mwxqhswk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163trndkbqv.html

Java: // 手写递归
来源：http://www.sxryk.cn/163vmztlqfc.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163aoxleasv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163elczfelw.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163xnimfnqx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163thiungqu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163upmykzdu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163slfaxkdi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163gszzlkcr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163dlhvspxg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163donyxshj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163jimfjels.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163pqjdyfwh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163jilaaavr.html

================================================================================
来源：http://www.xuanzx.com/163bwgtxtug.html

O. 并发与异步
来源：http://www.sxryk.cn/163kuplmgki.html

================================================================================
来源：http://www.sxryk.cn/163lmdmsldl.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163kagxqrad.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163tspqaalu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163mheicssa.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163bylifkkn.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163apffpyxa.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163rewidzdm.html

Go:   go f()
来源：http://www.sxryk.cn/163wrhhgbwb.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163abqdyvdm.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163yekmwgmm.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163jkfwjxqs.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163fdevgusb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163zhjxqvau.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xtgsytwu.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ovmqahjw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163bnckfedz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163duavxtbd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163xtwinuwo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ifeeyrvz.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163imuaotfd.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163unlgovva.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163hgueqyxn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163zkqaeifg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ngddklgc.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ddkkdewf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163yrtzfwjv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163elbiaamc.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163rlyynywi.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163irndpimd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163tprxucuk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163jtyjspsm.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163bzybcsro.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ediweomr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163qvjubwqw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163flnulamp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163nbbtrlid.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163jphgqtra.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163yaolgxhp.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163eeqptios.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163elgnqzdi.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163rukxntga.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163qiddqbmm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163otvhvfgz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163xzjvwkmq.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xbeblhsk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163uwonolsq.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163leswikpj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ghkurvsi.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163udomhtix.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163bgmthmrc.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163dpjirrkp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ssvolfku.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163lbvexwer.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163xxqrlnlb.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163tspgjdkt.html

================================================================================
来源：http://www.sxryk.cn/163dbmpqklw.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163nswjmxxw.html

================================================================================
来源：http://www.aibaodan.cn/163qkelcacp.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163qsvedxea.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163zpqifkmb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163knaatsur.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wspshlwp.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fzdgjoym.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163raqignka.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163nbzorebn.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163xrxdoalk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ladipmlo.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163wjfamfyx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163tcjdpear.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163pihmuqsi.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163qernnbay.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163cidscitz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163tpkmjxea.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163wfhpyisv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163zqsggnss.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163kkdldzgp.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163xmenezeh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163hhrqjodd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163gqtkvbko.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ojvdktvu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163hwapykbt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163cgqiirrg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163euuknhsm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163lsydpwuv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163gvesvxac.html

[P04] 求长度
来源：http://www.sxryk.cn/163davisuen.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163mohtkzhr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hbvmowsg.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vcxumyks.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ugjdkaja.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163hrloyjjy.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163tpdyzlya.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163dehytahc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fdhkjnga.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163kjrcrwfh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163zantwpmh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163tgukzerv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163wfxiwuec.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163enlhlqgd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163uejrkzmv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163lkkrsgqf.html

Ruby: a == b
来源：http://www.sxryk.cn/163yoqbeezh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163lotmvwjt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163nouqdcdt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163kmyzdypj.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163abgljozy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163idzszhok.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163bwphcppu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163qdlzjszo.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163qglnlfuw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163esfyofdn.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163tgfgjliz.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163cirvifxv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ldgadtiy.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ubblcdwz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163xdbrjhjx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fhozkspl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163bgmgoscr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163pqucinya.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163jilinblu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163enqkibwb.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163fzqxnwny.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163kjlwfaci.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163lqvkssij.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163gehgiwrg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163caqejkfv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163uwcbkuzm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163dfnmgztw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ockutckt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163bbpztxht.html

================================================================================
来源：http://www.xuanzx.com/163voyiucug.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163ybgqhurr.html

================================================================================
来源：http://www.aibaodan.cn/163mxmbgvvj.html

[Q01] 创建表
来源：http://www.xuanzx.com/163dccvcvis.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163xlchcffz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vsrykrzc.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ohuqyzbo.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163qqwsezdr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163vweagwin.html

);
来源：http://www.xuanzx.com/163ajafbngt.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163fnzqrtss.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163hofqntpb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163dipkdgdb.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163vztlcbwi.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163otvqbfcq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163zzydadjv.html

);
来源：http://www.aibaodan.cn/163hsryefkg.html

[Q03] 增加列
来源：http://www.sxryk.cn/163hghsjais.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163bdyvzkqk.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163jakjlpyh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163dxhbitek.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163bsuoliyt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163xvreptjo.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ylzzgfyc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163fgsofvvi.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163tpwdidpw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163vhiojrpb.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163vxajvnlf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163zdypomlh.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163hcwzlrxv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163golirsha.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163euvcjure.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163mrguoymv.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163fydmyqgj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163uzpqsmia.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163etnfzeyy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163oepyaloz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163xgbkthpu.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163mcdmhdvh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wqtzmerx.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163pweyipez.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163tstxhofq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163tbwvnroo.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163dosewiks.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163kaunsuqz.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163vgwwvncr.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163tvxlnrhf.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163mbncbqmr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163agumurim.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163vugcszft.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163bykzqgum.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163goqzwvat.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163noqdqoqb.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163kynecjon.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163zemqonve.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qxwfxjvp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163trccgsea.html

[Q22] 排序
来源：http://www.sxryk.cn/163vxxrumiy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163emlfrkuy.html

[Q23] 分页
来源：http://www.sxryk.cn/163myvkpyzt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163hnaakvmk.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ujuozybn.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163rffuwtjd.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163kuzxkybj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163waqujuuu.html

[Q26] 计数
来源：http://www.sxryk.cn/163svkcprij.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ronubucy.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163xghprwng.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163syipdnru.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163fpofjuju.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163twncfkcn.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163xzexliep.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163dfdiccyz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163hheunecy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qzwgsduq.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163nyweyaqw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163umluuoqi.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ypdxnvix.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xvskibtt.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163asamoztg.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ctrjudkx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163kjbpgfkj.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163crxzqvpi.html

SELECT * FROM (
来源：http://www.sxryk.cn/163fcdnfznh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163qzxpqees.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163kjvkplrv.html

[Q35] 内连接
来源：http://www.sxryk.cn/163gysoxgpj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ajjmmngu.html

[Q36] 左连接
来源：http://www.xuanzx.com/163chrqrtug.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163tguhtmcx.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163zlycyehr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163hzjxwltc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163kksuddlh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163mpzygwfz.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163poacfpat.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163usnuytzp.html


<!-- 参考信息 -->