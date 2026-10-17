外链999!wailian999！

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rhzrnuoy.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163xvrnskpc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163wkhianai.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163slmurjxi.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163jkcixzbb.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163miiqrsde.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163elzbljri.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oqkelkpu.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163hbtiocrq.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163twbjswcx.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163dzcpfvse.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163yzmfpzqo.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163qbpkmolp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163sdhxgyxc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ounfygek.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163jweazibm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wbtwuccp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bpxqmhzs.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163gljvhlhc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163tnlgdtol.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jxrmuggz.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163fwkkybsp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ymwacgkw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163bjmjcmaa.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163tombjxth.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163rfotwfvr.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163dzzuvklf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163isywfpta.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163aehrcobp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163cuwxupbu.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163gfkjiiwx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xgvlirxn.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ujsuxwjq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ooewibkm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jnqsbamz.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163pfamjrbh.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163lwzuchsv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163vibqnzlu.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163aodfoxwi.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163vegobaoi.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ipwqrrsg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163kunwucpe.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163krzkesmd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163mhkvounx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hcbanbav.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163zdxeerua.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163sxnyahte.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163lophdbaq.html

================================================================================
来源：http://www.sxryk.cn/163eepslrgo.html

O. 并发与异步
来源：http://www.sxryk.cn/163xkkydhqh.html

================================================================================
来源：http://www.aibaodan.cn/163kwhilvid.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163qcyhmoah.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163nlouyjcz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163mvpesdyn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ffctekft.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ifcwzdxr.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163epmoftuw.html

Go:   go f()
来源：http://www.sxryk.cn/163vajpufvl.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163mlgguyif.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163dbynceob.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163cwyvvdio.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163lproevkv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ntzvgqni.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163izatpdeo.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163wwmytsjy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163mcrahmwf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ykiafaql.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163pkkynewd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163tpfjmork.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163jcnpbwyj.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163atvmojnp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163orcxqljr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163rxupdmzl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163cuobkzpf.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163mxvhvudp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163lscmqhbs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163wtvkwggt.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163qjossqjc.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163tprhrfxh.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163scizjuag.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163vjfuupcd.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163zkioucgv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wgsfuufz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163yqpudwvo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163blbbuqqo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163kqofvjhq.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163rtdjqwuh.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163btkayazl.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163pafsukez.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mzcjxspj.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fxuttdoq.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wboyuxmt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163xfikxsym.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ootvkjcn.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163vwlhqsoc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hplseptp.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ityrgivt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163dzkubnwd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163rrskhfpj.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163iqugfppz.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163unayryuo.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163wkjzwpzj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163quikfili.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163cymzdoxw.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163trmzcjak.html

================================================================================
来源：http://www.aibaodan.cn/163arcsahig.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163sqfafabx.html

================================================================================
来源：http://www.xuanzx.com/163auouoddl.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163sizbgkax.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163djbdxlna.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163msemvhcs.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163axnwgmkj.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ykvgxwol.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163pambuwcl.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163nwymwlue.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163fymhcvqb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ndwonbpj.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163zsvdszdh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163fwjuydcw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163mktnwlqz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ctwkgckq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163vegoavfo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163swnxaeqz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163jzstjiza.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163audjkvli.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ooxjgynx.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163fkjjdxbf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163nfdvhlaj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163uphpfvrz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163qjmjavbn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dgwwovcf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163xwmshknt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163mmojloan.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163arbrxrhj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163kzdeyqci.html

[P04] 求长度
来源：http://www.sxryk.cn/163nyolscgm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163bptsiogq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dhzlrhiz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163fzjchqqt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163utmvlfrb.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163pbomcmyh.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163yfhaiust.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163hyxfruje.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163mnniohgs.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ngnjgjpc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163jaogbvdu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163rdkcvjdi.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ozqmmcyv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163wvmrhlpc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163uvbnkpps.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163akmlthvf.html

Ruby: a == b
来源：http://www.sxryk.cn/163cunijqjd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163prcnfvmw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163gvmpotib.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163wvdxrmgj.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163wtkqfkqn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ijjmvnsg.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163zhuhjqul.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ezyzvrmo.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163aiqemvkz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163apqydytb.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163uhepsqjl.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163zdrgpzjn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ziqksdhe.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163mdgldnsw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ywbyblnc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qfcxfqdr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163rjkriugv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163vniutsvd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163svecnmxp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163cboqteux.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ockzljfi.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163izzmlkwf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163jzabzbvc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ngfgtjya.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163qzsvmcdy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163bnnxvblz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163zvgrxvgb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163mknpbczq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163wzjnknkt.html

================================================================================
来源：http://www.aibaodan.cn/163cqyryyyg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163uwlsagtk.html

================================================================================
来源：http://www.aibaodan.cn/163rthmoktm.html

[Q01] 创建表
来源：http://www.xuanzx.com/163npwpgusr.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163wndzziix.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163sgagmnnt.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ztdmazza.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ggwtjbym.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163mwpfiqii.html

);
来源：http://www.aibaodan.cn/163iepopxuo.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ppvfizue.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163iocdofbg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rendwxhz.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163zeejxbem.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163jnhnehmr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163lycpwntq.html

);
来源：http://www.aibaodan.cn/163tuxccmmb.html

[Q03] 增加列
来源：http://www.xuanzx.com/163aogzpjrp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163pcsjkqah.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163mgqidemf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163hdpzsjae.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163tfdhfcis.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163brdskbne.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ddywliia.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163oaswclth.html

[Q07] 删除表
来源：http://www.sxryk.cn/163jyhtzrff.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163xxrohjxd.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163xslihipq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163sskrdmcl.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163vgwfazie.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163umuayqow.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163vpxwejtv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163kpmcvcmo.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163iukhazvs.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163wfsppmvx.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163qajophim.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163npxktjwc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163cdvdrvao.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163zaahknte.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163xzxjgvwq.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163rlaxwkzk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163lqhyktfl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163edytsksh.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163xkewypdd.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163fdlwzmhn.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163dfuyxkgj.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163dhnqupsj.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163wevfqbav.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163bwexgtau.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163vmfdmbec.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163iespedks.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wdvdfwac.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163kqzidjki.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163qehfmwxb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163fwlyvhmz.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163cjlgzduy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163gpmngzoj.html

[Q22] 排序
来源：http://www.sxryk.cn/163lhktnrit.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163nmiiigge.html

[Q23] 分页
来源：http://www.aibaodan.cn/163tckmqcfo.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163gcfthsxs.html

[Q24] 去重
来源：http://www.aibaodan.cn/163sguttuvg.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163cusqxrkt.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163vkxhaxqg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ryymgvvi.html

[Q26] 计数
来源：http://www.sxryk.cn/163zvxjbqge.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163fysynvht.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163yypunpws.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163deeysagh.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163udcuycwm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163dqgherfr.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163jgptigks.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163pdavucxj.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163bytkixyc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gwgfajvi.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163cnocgxbs.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163cerabsdu.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163dxfizjjx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163krdefkuf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163tidcvbif.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163idjupybd.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163dqfcexgn.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163xhtnuxll.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xnzeshen.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163bvargqqr.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163tmviwipc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ogjgaqkm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rzpsghkl.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ylmbkxlg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163pyhcqkip.html

[Q37] 右连接
来源：http://www.sxryk.cn/163yejxuwty.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163keuhskqz.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163hccszgxa.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163csmardly.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163iqaineqc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163uctdhdnu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163atburgie.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163yeefjudv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163dcvhpjvg.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163fycofggy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163zbeubrrr.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163cklgruuq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163rxaqgfat.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163gvdtzliz.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163capdwdau.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163vmvtycle.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163fdonhrcd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163uljgpxfj.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163kgxjgwev.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163xuillbov.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163mgapbwlc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ovuxiskm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163yilvfeao.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bonsnwxh.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163byksehzu.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163tkkhhznh.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163lxbhtatn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163xgrouqni.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163kldpddqt.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163qwlruuoi.html


<!-- 参考信息 -->