外链999!wailian999！

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163plyahngv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ktysovpe.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163tnxfvvln.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163anjxzset.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163tnxistjk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163uqthoopp.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163rehsekub.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163inkypjpx.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163luefmmee.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163pndzeqqz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163afodphnm.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163wdsnxqwu.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163gjtzcalt.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163svmtneyd.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163aokpbzcb.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hlocjzlz.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ybaouklh.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163zpmzshvv.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163xyvtwhhm.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163xhviribq.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163kpaqfrbf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163anthrsmx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163uscnpzsy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mebyxyfa.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163mfgizcpx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163dklstsxj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163olskcvml.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163bjudomzh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163hvydfdce.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163uyqnvxko.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163glsyaaof.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163spnxlzom.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ybirkqao.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163clsajnjx.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163xfbonuzd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163mjimtmzz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163bzklbkij.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163zcyjjbyb.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163bqbhwtvf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163wzjlieyp.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163fpsvulic.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dbsjhwlf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rdhstzif.html

Java: // 手写递归
来源：http://www.sxryk.cn/163rghmmkre.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163lzvkjxvi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163tasurrbm.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163mqepgpor.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163grqtocbc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163jjygvuwy.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163kpggeqoi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qrnqiunr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ujfelolt.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cmargmyx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163rxvvzrze.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163snveeoch.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ezhrjyfq.html

================================================================================
来源：http://www.aibaodan.cn/163fxyolxdt.html

O. 并发与异步
来源：http://www.aibaodan.cn/163lvxflihp.html

================================================================================
来源：http://www.sxryk.cn/163xkkqjldq.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ybmqavaq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163dzinagji.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163mszeptbq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163kvwfhslt.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ufpbefip.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163vdfmrllh.html

Go:   go f()
来源：http://www.aibaodan.cn/163vbkekkek.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163jzwuhcck.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163irswwiwq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163iudyztsy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163kkompfwg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163igdhzexa.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163jjwozepr.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163bhdbubqd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163tzsxugej.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163hjrpcqjh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163iawplkfj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163mzdvfiak.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163svhbpbei.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163bxuwpudf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163nzrojuek.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163esetxzfh.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163liiwkojy.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163hfqbslpw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163oqwpllbr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163scozagmu.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163onujqzdp.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163qlyvnhhu.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163zqruzaao.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163qkcgtgav.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163vqqeiaco.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163nfyrijiv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163vyaynjea.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ffxoptbr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163gdiegbks.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163anghuclz.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163jcvjolto.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ujaipvla.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163awgowsfn.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163cavvomjz.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163jbuvamgx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163qcwovcxh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163bamycldn.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163vazuswmb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163klnivqsr.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163nnnshjnt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qseknvih.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163wpyhmanr.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ereihrwi.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163eghpunpk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163foqsqoyd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163cmzuiwxo.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163xeljqmeg.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163wglmtnga.html

================================================================================
来源：http://www.sxryk.cn/163konbgjol.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163rpwphulh.html

================================================================================
来源：http://www.sxryk.cn/163pzpnndxs.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163gfahfujx.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163twegwfpl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163rqreunjf.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163sztralag.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163fankxxjw.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qeapakqy.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163blrawnvi.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163flvkhaqv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163zpcycpiz.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163yflssfjm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163gpjphvky.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163exhleqmy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163rvdrjdjp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163riapdpiu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163kkuxpdjq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163vtymqhuu.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163uyazaeyf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163bveccqqx.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163dgtzqofi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163aehkhpxe.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163otdqqoip.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xfecsgid.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yqrmlulr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163bvsfjwri.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163mtxujmcu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163hqrbbwys.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163lxvlqwlg.html

[P04] 求长度
来源：http://www.sxryk.cn/163efooqoly.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163vckeqkcw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163yvhahgko.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bpxwzvjn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ynzwjyzo.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163xfhfotsi.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163mjtkmgzp.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163wibzxrko.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163tyyvikne.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163rwmydjlo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163zrcplyml.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163zogxwuul.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163azndjmpj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vcnyurjd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163jpnwikjh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163bitbsonq.html

Ruby: a == b
来源：http://www.xuanzx.com/163jvqluhka.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ckhqbgfd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163hyoesjzv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163eoksguvd.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163hfdzoyzt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163msjqextv.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163xulnqtyx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163voonfpor.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163xaugfhqx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163vfpwertf.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163wkwgszkm.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163hgniphdp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163sbvgjgpp.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163eabxchca.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163flldpccd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bozphelh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163zjsdiqei.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163uykemcwu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163aygfnyxk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163jjkbpwml.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163idytzeya.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163zxainscr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163eumrsbqb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163vmjadtcd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163vwkcukgu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163xrpdmhdr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163xzzqqymm.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163xrgohohg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163neshthpx.html

================================================================================
来源：http://www.sxryk.cn/163qkrtwgpz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163fenxibom.html

================================================================================
来源：http://www.aibaodan.cn/163temthweo.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ucpwwukt.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163hpqrhdjr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163iczlnqka.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163vbsaakvw.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163sxulzaxl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163spqwbbak.html

);
来源：http://www.xuanzx.com/163guphbgfd.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163xqzatvwo.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163vkdmnrjd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163oqvnburj.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163cepejqbz.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163pkymwhds.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163jzszievp.html

);
来源：http://www.sxryk.cn/163mrrpyiff.html

[Q03] 增加列
来源：http://www.xuanzx.com/163msbrvsfn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163mxakqnzi.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ujvcuwtf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163opgqryyd.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163vgiojnfs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163jnkgalur.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163nlsalxrg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163frilvpba.html

[Q07] 删除表
来源：http://www.sxryk.cn/163wldslmsq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163wbsfxwzf.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163xyzjoyaj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163gdamldfm.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163hwwxfile.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163yqmwcqxf.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163yqjgzted.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163hfhisach.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163hbkthcjg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163odknwjdd.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163jieaijlx.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163xsbahyte.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ngylulpt.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163mowfthnu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163btfutdzm.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ttkhhwmj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163yeeeunpg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163klxkvnce.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163yetyxoed.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163appqyjnc.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163myrnezcg.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ougdgclj.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163iimpwihf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163cobwpgsk.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163tiftatqm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163paniyhar.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163zswpnsgv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163yoozhvkb.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ztnayocs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163xiicktyc.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163kthketif.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163pjezmajr.html

[Q22] 排序
来源：http://www.sxryk.cn/163omjierbx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163fekbeykr.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ozojpmcp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163vkwatcbt.html

[Q24] 去重
来源：http://www.sxryk.cn/163soppdqux.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ockuojhf.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163zecevzmv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163zqqoswvr.html

[Q26] 计数
来源：http://www.sxryk.cn/163jdjixzul.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163fnrpphon.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163qrukgivu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163jyfxclcl.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163urycwcxy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163xrbjtgoi.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163pcwxgtca.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163wkuwykum.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163fioqosql.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fhxmkvlg.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163nzpymrfy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hoqhkwlg.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gjdjnduo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tdpayaah.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163eeounkls.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ooujmcbl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163wyodwqon.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163xhxdsptm.html

SELECT * FROM (
来源：http://www.sxryk.cn/163oqgumrch.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163druyagcq.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163jpavavvl.html

[Q35] 内连接
来源：http://www.sxryk.cn/163jtwdrutj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163iligornk.html

[Q36] 左连接
来源：http://www.xuanzx.com/163xjvnfhbf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163olcggmwj.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tenynnro.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163njntsltx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163uugnkucx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163xdbpxhwn.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163dqlietft.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ubiipmnd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163foudzypp.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163iaqlcvaj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ewlobvka.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163qxdhyjbd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163hvtxeuqq.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163rphanhxw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ezrgohcq.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163itwguanr.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163owiibsad.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163cyhsyonj.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163dqcsphmf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163kbelnmdk.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163uuhxfgbu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163smdaiicc.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163rrqqtdrs.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163loffebvh.html


<!-- 参考信息 -->