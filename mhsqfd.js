外链999!wailian999！

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163irftargx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163llzieqme.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163mydvnqfa.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163zzwrnrzw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163vmovqsdp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mxhpavdk.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163edqioyyd.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163shmddewv.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163mwdmxlhp.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163aobnxrob.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163fpnsezsz.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163svbiezgc.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163fffzbemr.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163grdkzigr.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ldubuzkx.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163inpspbqw.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163stzegauj.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163yilvzmgp.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163sqwirbci.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163fsmprodr.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163fjykvgwx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163bmowbhnf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163xpzotnse.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163daohjtqk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163mdedufjf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163euicilmy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163cgerfnoq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ywmajixc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163vmwbkzmm.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163itfkgkdp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163acyiyoil.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163jfgjxfhi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ksjyfjjg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163nykwrtnv.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163yyiswtmv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163taatyfjc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ywcggayj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163jqujkavh.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163uxjqzwbw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163yphgvbfk.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163lgqpcesi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163izyfcnja.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rznvcwkx.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ndppsflp.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163klqewdym.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163lhftbapy.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163wychwqpt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163zazkkgxz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163qhvubpxx.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163awfkulhl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ntkirttn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163pexyjrdz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fmiioqyj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163tffzdrnt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163fcbcunlw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163oejnztis.html

================================================================================
来源：http://www.xuanzx.com/163grblbwzt.html

O. 并发与异步
来源：http://www.aibaodan.cn/163rcaoymru.html

================================================================================
来源：http://www.xuanzx.com/163qcvpkrrb.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ufyyvbci.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163waajtqjk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163owtsvipf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ipwwywra.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163einljkck.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163pvxcojso.html

Go:   go f()
来源：http://www.xuanzx.com/163aepxrqfg.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163svuxmaud.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163hiohxfrn.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163gycbwejg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163atgzqlco.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163gfagkfvo.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163slnvvzwg.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mjeapxmn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163kdboqobz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ksduyduj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163qjldvsym.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163imilaknu.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163llqhmhny.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163hrntkvga.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163liirumin.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163lluvvzco.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163eioeltuk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163byzhmcqz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163yzwvagep.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163kmqngfmn.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163qdkygzwn.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163jcnyfabf.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163omcpfowj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163httlphgb.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163luqnwwap.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ncppbzna.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163mutgyehi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163rnagmkvc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163yiklqxbx.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163jmbvlmro.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ehheagnj.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163sszmtreu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163cvzmgdqe.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dvxusvux.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hamzrhty.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163bbbzbwif.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163jlthuvog.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163utiwczwf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163zqwscqpi.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163xyfcizyj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163zkbsgxre.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163pnfwjubp.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bvxuyntn.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vixlsnww.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ijmymmlq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ngarealn.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163bflpxmzq.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163gprlsqfb.html

================================================================================
来源：http://www.xuanzx.com/163gpjrsvcv.html

P. 常用工具函数
来源：http://www.sxryk.cn/163khyzzluq.html

================================================================================
来源：http://www.sxryk.cn/163gymlgpfr.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163gpcqfsjk.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163glnzadck.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163xaoxokpb.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163tbdspaet.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163youvircs.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163fkqutyfh.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163uerwtegx.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163crxuhmnu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163wpxujbew.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ezyrrjpg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163fyepjvkl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163roahrere.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163qzqypulu.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163qmhjpiai.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163pgeeyetz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163zbxvnxqh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163gmnlwupv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163pfvlbjmw.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163rkvzoboi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163pkjxjyml.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163szinwkbp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163zfjfcztg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zsrvydir.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163qgutnvjw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ntqdwjjp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163oytfcsgj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163oissbogs.html

[P04] 求长度
来源：http://www.aibaodan.cn/163guuqpdsp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163kqahkwcy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ujedwqwb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163aobuibyo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vqhjbosz.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163dlzlcgyb.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163nzljxnqs.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163wvlpmlxm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163vfbgpdre.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163bztfuyoc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ywguphwp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163iqjjuvfw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163lrrhnoyc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ifejucew.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163dfasfcaa.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163gadjiwix.html

Ruby: a == b
来源：http://www.sxryk.cn/163zgxenkyi.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163cahzvafm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163xkhicnpt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163mjscqtlc.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163idesfylj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163szyplohq.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ndjppdur.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163wrvccicx.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163nntvdgls.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163vgdyxauw.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163pytcfgwa.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163hzdklfgs.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163nhzvvisl.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163kytiwcri.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pdkbevyl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wvozjzya.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163bmwwelnv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ohqzudve.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163bzhmxxcb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163zjuwgbqt.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163klhyqumr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163icsivqiz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163nshnhzgn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163aeshvhdc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163yrpgiyez.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ddrezvhz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163diopzgvo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163woactcco.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163zcitlxof.html

================================================================================
来源：http://www.sxryk.cn/163fuyrlnqd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163qipjkedu.html

================================================================================
来源：http://www.sxryk.cn/163fhtbsrtx.html

[Q01] 创建表
来源：http://www.sxryk.cn/163trwsxdnr.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163wwynwugk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163yzecaiiy.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163rhqeadyc.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163vwzprqls.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163oqiiajet.html

);
来源：http://www.aibaodan.cn/163flgcvxdz.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163rkvibfvg.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163hivmzcbv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163kulziyxg.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163xogsqhke.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163arcceeni.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163wrxyiimi.html

);
来源：http://www.xuanzx.com/163yyyjvuum.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163zskcmjoz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163rvsgohlj.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ozipxfxn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163exigeecx.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163kfzxqnlh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163sehqmpci.html

[Q06] 删除列
来源：http://www.sxryk.cn/163pvjhdoez.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163dctgioop.html

[Q07] 删除表
来源：http://www.xuanzx.com/163qqpehoqe.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163oabfvyte.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qmvzxcat.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163tmbadffi.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163csffvxot.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163amnfsftl.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163nczmhckk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ukmbfkbn.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163hquvwfsh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163xhlejonl.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163iusjvyqk.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163fhfzyyjw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163lvslpzis.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163pfsbajye.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163xjbigubo.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163euesspvx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163cogeuabj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163fcbvimal.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163bdwtjxbb.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163vkvfynvg.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ecbeailj.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163gltyaaha.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163zenmhgtw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163iwwmvqpm.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163avaftqcr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163zjufnhhx.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163nnndawoq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163aujcexok.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163nzqtaasj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163airynoll.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ujrscgix.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163vahfhhcf.html

[Q22] 排序
来源：http://www.xuanzx.com/163qmodwgsn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163qtreufwf.html

[Q23] 分页
来源：http://www.xuanzx.com/163ruzisuqh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163xpxyjjru.html

[Q24] 去重
来源：http://www.sxryk.cn/163gokggnsl.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163pyntzvfp.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163eaxaqtqu.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ohhgvmmi.html

[Q26] 计数
来源：http://www.xuanzx.com/163wvehjzac.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163waadvkcq.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163jhyppxuw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163bsezbqjy.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163mprmbyce.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163vvkmdtko.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163lkokchqo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163dpkeplkv.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163vitbwfde.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163anjsxmjh.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163yzgzpnfe.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163msxilzso.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163nofpchjg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163adjingey.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163crojhrcv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163xnafqmrf.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163rxjtpyci.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163aafqpecc.html

SELECT * FROM (
来源：http://www.sxryk.cn/163fdivgtvn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163jhgrpzsv.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163uzxlyqbg.html

[Q35] 内连接
来源：http://www.xuanzx.com/163sljkotdj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ethwnrql.html

[Q36] 左连接
来源：http://www.xuanzx.com/163cvluuhaf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ujdlhwjl.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163izdwtuih.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163vcqzhbrd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163zykjihlo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163smjgabyd.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163mgvmrcdj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163tgddobmj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163wkrsihmr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163qnftmzkd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163nmadqlib.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163jybhtowr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163bqzuvloy.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163sbfskgee.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163xebrcvmn.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163gyizumul.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163tyhgoynk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163vixxstzw.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163labhxdjo.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163cidacmce.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163cashbisj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163sjdclyui.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163rqatpnzl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163gmehyamr.html


<!-- 参考信息 -->