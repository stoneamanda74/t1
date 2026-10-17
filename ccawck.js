外链999!wailian999！

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163wfnavsvr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163wgonnjgb.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163wapnlekh.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163kjrmetjf.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zixukytr.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163abuzurvl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163xztvnefv.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ausmkhit.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163efiqkvrf.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163dfkllsnk.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163pydbreqs.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zvufwtym.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ghwzstxh.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gtnmvopa.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163mykusklx.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ndmyoeiw.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163exirynky.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163tklzmknl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ouyhhgbt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163dzpafpvj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163uyalaoii.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163mgtzxtti.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163mmgpusxa.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163bymuuzoh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163naccjvcw.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163arxhsaya.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163kveunpuu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163acgetxxt.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163feilzdqa.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ockvkynw.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ggsuklpe.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163biaulixn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163otaowzas.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163causjwmm.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163jezzasfc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163htcevlxu.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163wkoniucv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163drwynbkg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jvdfkydx.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163qwwozcol.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ksfqujgt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163sbkevjex.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163mgqzoaxf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163xbplltbm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163etbdykui.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163jikwpasd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vvsjjfal.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qqnxtudc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163sxvqwfxz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163mvfwcvgu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163olzyuuzs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mwgsdiju.html

================================================================================
来源：http://www.aibaodan.cn/163hckxgerh.html

O. 并发与异步
来源：http://www.sxryk.cn/163jnoyndsp.html

================================================================================
来源：http://www.sxryk.cn/163qmcqtxwj.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163rafauumy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ctwqebgg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163nwxnvsyf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163uekrpgec.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163brzaxrme.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163cwoqmulw.html

Go:   go f()
来源：http://www.sxryk.cn/163zrfkexlh.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ccbvelcx.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163myqrbsmu.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163vhmlcuaw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163duhmrvre.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ohfwqoos.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bojrhbvk.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163bsqbawqa.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ivykshmq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163iutudbhh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163qvpjanwq.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ooqdvmhs.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163vsvmwppf.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163xhnrzqwt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163pjvnbedx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163deyesxpq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163knriskjr.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163laabuqgs.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ihdpiyzo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163kraixuqj.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163aoerlgbt.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163iqbcrdid.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163hbmsrlbn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163oeekagxr.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163anoujryx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163jbwppshh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163hzymhaaw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163zbqfodcp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163vcroaode.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163midmkxdm.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163geuyhgsb.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163lvllcxjw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ebaescpn.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163lqlefgue.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ewtkedby.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163hlsgavsx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163zmmeptye.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163jbklzijp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163tcdqsoce.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ehjnbomh.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ndsevngf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163bcccswcu.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rmyntyaf.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vazsgypo.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163jmzyqusb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163tcygdrqm.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163qkfelyai.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163tfsxxmbt.html

================================================================================
来源：http://www.aibaodan.cn/163ywsfoydv.html

P. 常用工具函数
来源：http://www.sxryk.cn/163frswwfbr.html

================================================================================
来源：http://www.xuanzx.com/163nodhiczm.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163qioahkxt.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163qxvywjfz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163xvvwlcpe.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163tfnqwanv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163yplkgzkq.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163pnmpoqkc.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163aofctghd.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163kffnpyoc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163xndmojmd.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163kaideoaa.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163psicyedn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163aexuyshx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163vabggggx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163zbymadlu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163bxgxzzri.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163aerdmxkv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163xilsemsm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163bdlorfop.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163hjbswnar.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163vrobxqmu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ttdekisi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wnsciltm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163soflzahn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163pvljprza.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ezzmvkhu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163yvcipklt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163cnuqsgks.html

[P04] 求长度
来源：http://www.sxryk.cn/163nmqxkols.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163nwvclnrj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wwzerrnw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ccswwjep.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163wzqmfvbi.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ycysbqtg.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ymslasbe.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163esddwodi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ieivpmhi.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163eltrariy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163vrecyufe.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163bvsdeopq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163hmulshif.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163kyaqyjmb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163kpdhxpvx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163mcnvxbkz.html

Ruby: a == b
来源：http://www.sxryk.cn/163wqjdmaxw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163nenuadgp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ylypjgkf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163yxbniqqd.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163eymsbvlw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163xghrqcix.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163bvkspast.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163zfpbcnxh.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163tdgjfmig.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163cluypxqq.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ynzvhnhy.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163uvftdykb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163cazmwgvh.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163venlayvv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163iqdkngos.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gcfldpph.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163olwsfkma.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163pausmnzy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163rdyyhzjm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163dggnnatp.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163tzgtbdsh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163xyyywazn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163xnbixzgj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163kgxwgtmu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163hyhcgozm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163yoyxhowx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163inmszyzk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163zsevchwm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163vwnojtjk.html

================================================================================
来源：http://www.sxryk.cn/163bnzfsmwc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163hmoqpgso.html

================================================================================
来源：http://www.xuanzx.com/163ddciaxul.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163zcbbtzmo.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163cbwhiemc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163thuowqwp.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163gxjjuati.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163opmqktgo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163wibkcpan.html

);
来源：http://www.xuanzx.com/163rebsypcq.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163iirqjsrp.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163vmiendus.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ggfhfmtu.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163yhwfguqr.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163rjhmxbkr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163prizmxlf.html

);
来源：http://www.xuanzx.com/163edcymeyb.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ckbjsdrf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163vsgjhfhb.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163hvynyegs.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163rizdifcg.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163gdrzjcbx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163fkmghzyp.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ajobrpnl.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163wvnodopu.html

[Q07] 删除表
来源：http://www.xuanzx.com/163xbexikbw.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163vibmhmwa.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163gobglycd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163rnthtztm.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163cevcvwqa.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163dojzahzw.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163vcmhmczr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163gmjassic.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163fkkgifke.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ibsgjuiy.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163iwextdxs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163vbervcvl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163gbiucmuz.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163rrxacemc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163lsrpayzs.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163reeknwmk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163nramtkiq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163pfylshiv.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163pgnkmkgt.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163bxpcnkuy.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163bsokqwzn.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fygzcldu.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163tqbpsxbs.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163uciuzoma.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163oiikoyia.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163bdzuzdgk.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163rmquthpa.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163armgcavn.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163vssybgxq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163qmxgnatv.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ajmihxzs.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163bwljfsdw.html

[Q22] 排序
来源：http://www.sxryk.cn/163xjgchdkk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163pbevlqdl.html

[Q23] 分页
来源：http://www.xuanzx.com/163qrquupww.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163tpzylipc.html

[Q24] 去重
来源：http://www.sxryk.cn/163tmefphow.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ryxxzgab.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163mwuaxuej.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163xtupzuxp.html

[Q26] 计数
来源：http://www.sxryk.cn/163gwngvnex.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163mmduhpby.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163xfjozegm.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163wouukrza.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163iqyirxcb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163fblgkkal.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163kesmokkh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163rogvdabq.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163kvfhunxm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163picatgtj.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163dxeimrou.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163buisiizm.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163yubtauhu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163trkwsyal.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163zcasayuc.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163efouhoaw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ocutbvma.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163lwhmzyin.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163oyapfpwg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163nisqhcov.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163seccdlbq.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ekxnbtfr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kymbcjqh.html

[Q36] 左连接
来源：http://www.xuanzx.com/163tqnvdzuv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tzzgpclq.html

[Q37] 右连接
来源：http://www.sxryk.cn/163fhxcapko.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163bvrlvesd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163cwnojyjz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163qkzqcaml.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163akhvjwjn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163taifyffh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163mnxhrctf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163mijervjs.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163vvkjmvig.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163txcqigwp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163dgjflysp.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163wrgdidtr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163evzctkyg.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163umpszsje.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163woaayqgs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163meotujvr.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163swhikeit.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163qmpgvkqh.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163wvjycgfx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163pdtbuviw.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163hjwinvmj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163opqwgeyy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163vfmkeiwh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163gnhufeit.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163svfhuzzl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163tbgogdel.html


<!-- 参考信息 -->