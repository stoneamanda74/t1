外链999!wailian999！

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163oushfbex.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cqicxfzc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163jzmitxra.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ziisiaam.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163gdggefpx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zqfzxykl.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163tdnwhvsw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163zxptasfa.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163tkqivktg.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163hksclolj.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163zppwnkig.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163khfovlrq.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163chrvfmum.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163slxyjstf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163cbdjozrf.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163knibgydj.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163oygxfzgr.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163hhtkcbdn.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pymopibo.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163psyvzhnj.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ogyewegx.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163suipzcam.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163drydhnsa.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wwvloctb.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ukrzenil.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163otzmpbiu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163qssbcicq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163joatpzrk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163releogox.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163uoqxippm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163pvlnjzwq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163gzccplyg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163oqvslmnc.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163cgkwdcrn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163hdzxirno.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163rsaygaqc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163sgzufukl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163fgzioamg.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163kkpkvupb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ehjgofni.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163eujsdxrc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163fjazivsm.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163pwznsjhe.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163waciqvcg.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ftnsyyjl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163uatsdlet.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hhkpsztu.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163mqfvqkxw.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163sezvzurc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163lbzyudyh.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163lyqyhvdi.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hbwuruub.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163gfaevjdk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163zmoiqkhk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fjvszyhh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163lmtppfcl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zddwdszs.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163kgzegrye.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163orydovoc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gxlepwgm.html

================================================================================
来源：http://www.aibaodan.cn/163kzgjjcqc.html

O. 并发与异步
来源：http://www.xuanzx.com/163qlmsqjfj.html

================================================================================
来源：http://www.aibaodan.cn/163trtzzkkx.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ldqfunxa.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163zmnjgzhu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163plykibii.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163najeaokx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ynsocmvw.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163sbkqbevz.html

Go:   go f()
来源：http://www.aibaodan.cn/163wccyaqfh.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163uizhgabx.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163exneoaln.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163qqdrbgeu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163rjnpkeea.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163yufmibkg.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163nfnvnjlx.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bydxxkug.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163wfmmnuyz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163qrewystm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163xkccrbtt.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163wnhbjeep.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163orhvwgma.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qcgzcdip.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163mpoitfeu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163kwcbtfiw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fsmxeuad.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163xqusixrw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163immjhqsw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163dugeiqhn.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163oyegguen.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163qgvhguin.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ekcravhc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163fpqeqyyz.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163hlallylp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163hdsizicl.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ywfhqwis.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163lpeovqhs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163cmthvwnl.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ihcyuyvu.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163kewyqmqi.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163vqclpbyn.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163uybjrwlj.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qincqhuu.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163rqbisqbk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163slqsjctt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163tiogqcbs.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ctdfkfnm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163qxxyiyqu.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163wtzatszl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163zliyvnut.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163czrcoymr.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fojtnsnm.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163dftixmvm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163owpljqvl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163xpxdnimp.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163pdlqdbpi.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163rnjbbefc.html

================================================================================
来源：http://www.aibaodan.cn/163rfwawpvv.html

P. 常用工具函数
来源：http://www.sxryk.cn/163wfrbldqm.html

================================================================================
来源：http://www.aibaodan.cn/163yjsdukew.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163hhrcvvpw.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163wxiaifml.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163bnwauhet.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163cjdltivd.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163akrfbwib.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163kjvsukgo.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163grkkvubp.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163xpmdbkfu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163alidfxod.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163rojrorbt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163jkiayvey.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163wjiiezuq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163tdrgwuuo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163kbkjorxu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163pmpehzki.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ncqkaweo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163qsdpcide.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163bnzzlgtf.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163klhzzyiu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163qxuasgrl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zznuadkp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163abgpqqrq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ojvgbczs.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163enqalooj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163hykkmzsj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163nzvvibnz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ihqagceo.html

[P04] 求长度
来源：http://www.sxryk.cn/163fhorosmi.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163xsbfenlf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163idjowsjb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rolsvnyz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163aectbfex.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ljphfwdm.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163icfubtyl.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163egcpzgpn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163awedljlp.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163kwiosxqf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163cprxusjj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163famkfjfp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163zlrvflve.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163srwzfqbu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163fecddedg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ejvbablw.html

Ruby: a == b
来源：http://www.sxryk.cn/163sykbqohi.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163qiarqfqd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163cqvsdylf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163eiyarujf.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163wudtlpkq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163nkvoritt.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ktreexqy.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163tooayajf.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163pamnjhmm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163wolmzdjo.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ogvdcbqu.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163rylfefbw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ukzdhagk.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163pgkhjzwy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163blpxapvl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163omsknqoz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163prgittfa.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163fjmrwlpj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163pstbamej.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163xafoobfy.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163bwndfggu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163wurzgrcy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163htdnsxsr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163sddgznkh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163izgwklmd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163khsysnfl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163gifohdqf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ojrstouo.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163eqlydhlx.html

================================================================================
来源：http://www.sxryk.cn/163cwbvucdf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163uxsnnsra.html

================================================================================
来源：http://www.xuanzx.com/163lzhpymat.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163tjuwmedm.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163oqiscbda.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nqhicany.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163nseazzoj.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163fewebyns.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163zktpicjx.html

);
来源：http://www.xuanzx.com/163ychwogtz.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163pmdhvypu.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163fexnevlv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163sinqzjtj.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163iaieeizi.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163zbqroqpx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163mvdvynpw.html

);
来源：http://www.xuanzx.com/163nnxnmppw.html

[Q03] 增加列
来源：http://www.sxryk.cn/163qyjiljjx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163olnmvzhh.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163vhkztqgb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163zaaxfwjl.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163fzftqdja.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163xhbwhtrv.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ffkalwau.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ddrfvzmi.html

[Q07] 删除表
来源：http://www.sxryk.cn/163cohiamlc.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163zjioavin.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163fcgiqkec.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163licuthqa.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163hiesqbyr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163gkfbmslg.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163zuiornmo.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163hrolhskj.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163mdupszmr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163qbxcqpzf.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ppquieoh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163owisvymj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163wctnahtf.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xvadakee.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163eahdldxg.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ijivsddo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163zcxmtvtr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163yphocjqn.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ludwlaab.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163yknlfhns.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163npokalhc.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163eaylrpdj.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163gdvdbxrx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163uozjqqfl.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163hrnryjss.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163lejrdabn.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xusizoab.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163nuvvooca.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163iltefzhs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163hvzsctzw.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163wfaviget.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163hllevmba.html

[Q22] 排序
来源：http://www.aibaodan.cn/163tquhqffm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163swopeukx.html

[Q23] 分页
来源：http://www.xuanzx.com/163tyorurmk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163uxbaxlac.html

[Q24] 去重
来源：http://www.xuanzx.com/163jjdhvyep.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163nwrwttrw.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163brmwbwdw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ahmlbtdt.html

[Q26] 计数
来源：http://www.aibaodan.cn/163egthjmgg.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163vgucsmft.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163usissapo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163homzpxvx.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163vwupcjpy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163vhsxswmi.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163gkmuyhkm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163pshbkvne.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163vpyjfuye.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163soxwhytj.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163vxkvrzci.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ucwmuvmg.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163fnopvvkv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hkdqrzjc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163tyspezvk.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163qihuwivi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163pkcbdiah.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163innaxaya.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163vjgtshab.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163iuqpbagm.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163vjqqvwar.html

[Q35] 内连接
来源：http://www.sxryk.cn/163cpvlucia.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163llsujjxn.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163biqatvgj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xecoxaxu.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tpyiwbdg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163kkbdjobe.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163zedhirhb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163enjbuxeu.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163kubqyksg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163mexdsjed.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163urmgtlst.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163pbdpenkw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163cibpyvkr.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ovdfspbo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163tlfmifsn.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163znujcwtx.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163zswcrxex.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zjvemdyo.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163xtskrnor.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ghasmmqk.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163plmopclp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163twuhxshs.html


<!-- 参考信息 -->