外链999!wailian999！

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163xqlucrva.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163fwjwsjjf.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163nvktygqk.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163tkvkelpp.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163lcfrmcid.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163myadkgek.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163frrfzphg.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163zmdillag.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163utbhlzhr.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ffurrwhm.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163pdsjmbly.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mtltaovm.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163yldqnbly.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163exkccqpj.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163gkhyrexo.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ohfxmhyv.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163dszfufda.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163kyarunrt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163fhfovbqg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163jnchbdfp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163lmoxclnx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163vajprhoi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163vecmbvvg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163gikidwqo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163gwhdktpo.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163mgajitrz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163fhjbdcxx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ssuyiwzs.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163aceainzd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163tqtzuxso.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163gjpwwqrv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163rnaqthtv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163sozhlsdu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163pjbknjzn.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163pficxhlz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163yfmzppjo.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163dhwwpngi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163raottqfj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ujjlzwal.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ofhycunh.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163dsqtskbn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163baxurdqu.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163cxmwccrb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ruvvmqgm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163yhtduiia.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163feobtxzs.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163igbkkzky.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163upcmuzuw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ahmxgsos.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163hprbjrbg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163sqwdmtcp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wqvbbeyb.html

================================================================================
来源：http://www.aibaodan.cn/163nufmqaae.html

O. 并发与异步
来源：http://www.xuanzx.com/163dhziklvf.html

================================================================================
来源：http://www.aibaodan.cn/163irznncnb.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163bzirqbiy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163wogurmcz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163wlnsieza.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163qdjhpovi.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dhjqmcyi.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163mwzzwote.html

Go:   go f()
来源：http://www.aibaodan.cn/163lotqmrma.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163jyhmtrbk.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ospjctcv.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163nukxamwi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163pagwbzmu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163dbbqnwcu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163egovpgoq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163moimrukl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163rxuxgrdk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163eijgrpld.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163sgjwtxyj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163txgvdeuu.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rilumkhb.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163wxhxjabd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163mlugwtml.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163dpgafrap.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ollohreg.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163hexivfjx.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163uuibwqvc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163qfwigaqd.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163jegernto.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163nisxyzgl.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163yoqgprut.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163xtycwupu.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163mollnsby.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163dtbczoov.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xstccnnq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163asokmqet.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163tqcjlvid.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163hpkhvfol.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163xonvjkiy.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163harhwsez.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163tzglmfyd.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163jzvjlqbk.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163jtrnxuik.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ofefremu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163llgpqffj.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163flvktnse.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163bdceplrl.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163vxzilekw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163pmbthlas.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163gjcwnwnh.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163sqygqbev.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163msurarrr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163vbwmewmu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163frzxtkti.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ilrbymst.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163pfcntenj.html

================================================================================
来源：http://www.xuanzx.com/163ouhngkoy.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163wsfnrszx.html

================================================================================
来源：http://www.sxryk.cn/163yhwuavgo.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163iybkrqry.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163vhthsilk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ihxkhhip.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ofpbuhdz.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ynxbdhkf.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163wukxesrz.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163pvcgepkv.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163aaezauij.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163rpztinef.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ghvuchlk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163vqlhrrhi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163mqjaiwcx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163gadhigrk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163dhorlzsd.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163kevkmdub.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163bvlmdtvp.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163xwnfuiyc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163asaquutq.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163qjvfvqnb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163urncskiq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ehsrhfhe.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ccrbqdci.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jxgmsasc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qmlvbucz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163mwsqwtlw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jfghpevr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163bafknuvg.html

[P04] 求长度
来源：http://www.aibaodan.cn/163gpnqbraz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163jhitazpi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163mvlrtoqf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ktnuwbxn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163khhxodpc.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163luoolclv.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163gqzjnfor.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163asnrvllu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163tfjlxyfu.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163bhueysxe.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163rwualztd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163jceyjjtp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163gmlemwxu.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163pbuidmjh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163gvwdynmr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163wwbrzhll.html

Ruby: a == b
来源：http://www.aibaodan.cn/163qupdlnsv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163fsvqurxa.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163pqasvogu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163eduzthhs.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163oocdzdyy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163fcxdniij.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163xozfspik.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163oqlrfshn.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163rpfjpvuw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ydplqcll.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ngggoxig.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163tcitamkb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163wyolvmgb.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163dqkulnkj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163prmgaiao.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163heysyusy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ydrxypdq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163etkihtcz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163nydejdxa.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163qqneasij.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163vshblahq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163fcmbuwua.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163fkqfuglk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163thwkrvkj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163dkhlmtej.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163wetuwpus.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ryfoniwj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163anhxlorf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163cvhrvvie.html

================================================================================
来源：http://www.xuanzx.com/163uwjkqodp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163lszyhclm.html

================================================================================
来源：http://www.sxryk.cn/163neydqvok.html

[Q01] 创建表
来源：http://www.xuanzx.com/163qyrtjihj.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163delkqdqn.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qgyormjh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ahzzbpxb.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163rmgaqbsi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163jvahreio.html

);
来源：http://www.aibaodan.cn/163ukejdxbn.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163kpmbkagz.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163wzcywbpn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163yrpqrbmn.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163pwwmikup.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163rgnwzayp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163dlvadnfa.html

);
来源：http://www.sxryk.cn/163cmhkqeny.html

[Q03] 增加列
来源：http://www.xuanzx.com/163zsxhaooq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163rekjtaqy.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163lniidkgt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163xwftuxuk.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163munuebpq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163fboysmgi.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ngmjtbuj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163xlunfzqc.html

[Q07] 删除表
来源：http://www.xuanzx.com/163icucgpms.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163coaukjtk.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163jomfpuwx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163wkxujgnb.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163gylksznu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163pkcvzkrn.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ggunmrrn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ntkvdyql.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163qckbqzbz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163xhthlkdg.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163tpiutmvd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163nkbkhmak.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163pxxtspyp.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163vpnilzac.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163hzuigdvm.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163okxkpxyf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163agilhxyr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163amfriaez.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163tiuruczr.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163jrwmynyc.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163shilxakl.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163vpwopxad.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163qhovkmgp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163uvtxekgd.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163irqmlaib.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163lpfzegqq.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163fnulmftn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163yzykkwhq.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163iegwzulc.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163kkfjapon.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163zmkoedob.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163eicsdhqv.html

[Q22] 排序
来源：http://www.sxryk.cn/163vtxkxijz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163lybalyfe.html

[Q23] 分页
来源：http://www.sxryk.cn/163xkogyttm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163kggujhlk.html

[Q24] 去重
来源：http://www.sxryk.cn/163mkdntgrq.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ngpdielr.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163mxmveqiw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163icugmkgz.html

[Q26] 计数
来源：http://www.sxryk.cn/163hcerzmxv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163kxhrbcmh.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163xzpqjbua.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163volxrsew.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163jbkhxafh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163qrvbtwrm.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163hyosasfs.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163qarhxdfs.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163fekdlyay.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ecawewkb.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163sekfjwts.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ngqkuvmu.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163hfehoyul.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rilkhvah.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163enhadtuq.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163lgqybsjw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163dngdvqwm.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163yjbwtcos.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163tqhogmki.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163viynhmlh.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163nxygjlya.html

[Q35] 内连接
来源：http://www.sxryk.cn/163jsxrwgwz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jixgtpuw.html

[Q36] 左连接
来源：http://www.xuanzx.com/163djqjfnth.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163bateqzhl.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ekpmxdnk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163vxvokjuu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163rikmxeqo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163jjgeuzik.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163eclqprgg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163umeaiber.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163lluzuare.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163zrnpuzbv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163egecgznc.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163slohioox.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163epkdnidk.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163uurtgxzc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ixgbmdqc.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163arcnumon.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163izjlzenb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163uqlswxxb.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163mqhigakt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gnbcndac.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163nnycrgwv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163udpikfip.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163gykbyrsq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163aimyqbyl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163zrdeyqne.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163jetoqhts.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163einigjog.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163peqvbgpu.html


<!-- 参考信息 -->