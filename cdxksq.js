外链999!wailian999！

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163iyvtiugo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rcouadjv.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163zqajsujx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163kqgtlcjs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163mbgfziri.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163wuzhdvsb.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qnsnbkbr.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xikbxpuj.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163atdygqbb.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163lngsqzzx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163mokasxsb.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163rhbraihf.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163uyafrklf.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163vbkpzssx.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zfwyceeb.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xkpokwel.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163gkcxkiku.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gqzcxdzi.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163pfhablip.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ffkndvxy.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163toxptmlz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163tcvpwpld.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163xvjwzuwk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163wbvfkvyu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163xzmsptah.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163cisxjzbt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163oesatfak.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163cxusszmp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163tmxlljkx.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163gxppviaa.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163icwelcaq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163qhatxzit.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163xbastryx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163lvjjovxf.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163pzmrgzkc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163jvrorovc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163yvbhcyoo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163elnsakjx.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163jhhdbnkd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163bpkgzoqi.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ipzztntd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hodafrjc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163iocfgruo.html

Java: // 手写递归
来源：http://www.sxryk.cn/163sqwzhiyi.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163fldzeqfs.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163sbllvril.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163uplhvrjy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163rtgbyfmk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163pvfuhifa.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163agcvvxmn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wdtbdljk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ypgndnxy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ypvijkvy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qrizahor.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163wmibxrta.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163avqsbaru.html

================================================================================
来源：http://www.sxryk.cn/163jdwdajmh.html

O. 并发与异步
来源：http://www.sxryk.cn/163pvntilfj.html

================================================================================
来源：http://www.xuanzx.com/163ytidxbqb.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163rzgkmwmh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163bwfowvrh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163vwcjsxqv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163qutacqpt.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lajwtexq.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163uofdducm.html

Go:   go f()
来源：http://www.xuanzx.com/163qxuksqbc.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xmeshaly.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163izamyasp.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163bpaumuxm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163tasodmob.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163nxhubbad.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163igzkhssi.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ipqlcsoh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163kppivzev.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xnvvlwsh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163arydkksa.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163bmigtzzu.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163qoqwglqa.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163rixrmwpd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163eljhpdzh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ppyclzff.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qhwtifeh.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163jagzmswu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163qzqusppq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163lxvclewl.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163rvsmnakv.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163vxtppxes.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163eswesnpz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163aehetxcs.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163nygrwohw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163eylgkdwc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163tywzapfr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163kepirewm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163qzutybue.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163vtxpajel.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ndyoduyz.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163cxuryies.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163phwyeggh.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163uzmoaimr.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163lcvyubqg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163pkncnuhr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163hawujsbb.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163icgkgwzy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163jmmmuuvt.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ztvekfzi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163tjkkzaid.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163jqazstwi.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vhxmaehn.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163uuzotath.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163umjrozop.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163nhhkqdnr.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163dbuvyaln.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163nnqxkpjg.html

================================================================================
来源：http://www.xuanzx.com/163qvewgmnf.html

P. 常用工具函数
来源：http://www.sxryk.cn/163aqvebape.html

================================================================================
来源：http://www.sxryk.cn/163siqqmkla.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163egnfvxpz.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163vyiyrwhe.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163tiblmtpo.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163teifetfo.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163chgnslpe.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163icniigsu.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163osqblvwz.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163rygfzczi.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ncmknfkm.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163addnijgb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163oxovvhzb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163xybxgasa.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163smtgvsrr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163fxehfdrl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163cufrrvgy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163siabtjch.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163viwexptg.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ctpubjia.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163hvttfrdi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163mbclyiff.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163vtuoyocg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163eyqhpyms.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163brfdviix.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163xddadzsa.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163xgggnsra.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163lkipcfbr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163emapvzwu.html

[P04] 求长度
来源：http://www.aibaodan.cn/163irdzsoef.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163jofizimd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163eapzwooc.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ihmlggkp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163mmtqwypl.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163zvisnxkf.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163tpxjegtx.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163gjaqzaqo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163xzminmwn.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163xlhyodtr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163eqsktsec.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163hrywlpei.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163xgtxmpsg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wlvzboqf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163smxsyple.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ekyfhpto.html

Ruby: a == b
来源：http://www.aibaodan.cn/163vkzgqhuf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163wahwytyk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163udjtevpt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163hplnktng.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163bqybkqsc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163cmtewmij.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163wesvjzrp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163cstvgmnw.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163flmxszbp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163tyfdioat.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163kaphkino.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163imkfyijs.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163xkhykcad.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163feplvpzs.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ouujlzxb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hpyvoirs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163osxlkrtk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ebvvnioe.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163cwhxbbde.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163qozmcnga.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163grrmixsn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163gflbakvk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163lkkruoql.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ghbwajkc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ixjtrhco.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163teavkluw.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ybdcyjja.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163xkunakjr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163xsiouxlh.html

================================================================================
来源：http://www.xuanzx.com/163ijldizth.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163xhnjscjj.html

================================================================================
来源：http://www.aibaodan.cn/163ukfmzhqy.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163qhcyiyju.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163wdoddzjy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163egqtsait.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163uvvzzpgh.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163gajfdfci.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163yuxjqgaa.html

);
来源：http://www.aibaodan.cn/163mfgjwsku.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ljjemwqe.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163oqsxciut.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kwgvggua.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163rwehjfko.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163asifxzrv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qwnxlzuj.html

);
来源：http://www.sxryk.cn/163mhagfmnf.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163pyxotlgd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ikfovzxb.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163jnaazenj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163xmtdmhue.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163iknlbiae.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163rjyilrrl.html

[Q06] 删除列
来源：http://www.xuanzx.com/163etnwingg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163fdtolccs.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163cdsmtrsg.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163gjxrxqsg.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163bnurulml.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163gekgkeuo.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163zwvifulm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163debteiiv.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163athpfogj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163unsqftgp.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163iznhkwot.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163choxgkil.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163crwabioq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163asuoozud.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ewklguox.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163qstlxxvz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163cmpfedau.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163iqdplyjx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163lrygwgxi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163nccifije.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163wzingbld.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163qygfbmeq.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163lvjmegml.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163ytpijydr.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163fugvghqm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ycnivzal.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163clnrmibk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163pcnrjplp.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163umvqlrdx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163kjydqibk.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163nchnrsfo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163pbomcpjz.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163mmtbhkqs.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163vxtxpxax.html

[Q22] 排序
来源：http://www.xuanzx.com/163hmsxnfkz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163oqyzuevv.html

[Q23] 分页
来源：http://www.xuanzx.com/163ygxmcmhe.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163eltfvvyj.html

[Q24] 去重
来源：http://www.sxryk.cn/163lyonbzlv.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163xibsdikt.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ynkoylbs.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163sexihcll.html

[Q26] 计数
来源：http://www.sxryk.cn/163cesqhoug.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163otsobjzx.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163xlbopfkn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163fepwsuts.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163fmfglmyo.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163bhpsfkpm.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163soigkeug.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163jvzpwcss.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ipgmpvyl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ybrsunkm.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163kuamwwzl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163jggfyesv.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163sxpjbfoe.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zayzhhwh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163cqlyfvhi.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163wtlpnsxt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163typdlvlf.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163uyylvwtu.html

SELECT * FROM (
来源：http://www.xuanzx.com/163srmnlzja.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163gkdaddpz.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163rdnyzzjg.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163yrzjirzv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bmiejhfy.html

[Q36] 左连接
来源：http://www.sxryk.cn/163iaihlpns.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rtfqqumv.html

[Q37] 右连接
来源：http://www.xuanzx.com/163igainkcs.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163hgzfvntu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163bkvcfhbq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163louvdksj.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163zeggobdl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163duytmdgb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163zqjmrobm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163bgzqogmi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163izhupunw.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163gnmreuhb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163bebiigxa.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163exjsefvd.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163xzquzzbp.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163tflivdsq.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163uqniykqz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163wvkbchsw.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163yjqpsvlt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163xzuiqytx.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163xrjbphui.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163menwvxat.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163nxtchtgj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163nsoqxcdc.html


<!-- 参考信息 -->