外链999!wailian999！

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qfqodnzv.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fhbqjqqg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163kbvrbvgc.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163chkpwwnr.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163hioiaggi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163bqecioqq.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ibcnsxjw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163odblmkfp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163tfcfrhmv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163tlurfgnf.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163gxdakejw.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163wubsymzd.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163cmpvnzst.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163cpmkrhvr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163lfplnmjs.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163mysgeijv.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163awyomkog.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163lsjmdltp.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zhcbsnct.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zvwbczdb.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163cmbmtgnd.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jnbbymrf.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ljbtkrkp.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163swtpescd.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163jtygzqki.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163fwmeachb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163xeeffdzd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mieyfwep.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163nvfnzrxq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bucclcrf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163cjountbq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163taayjclj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163stmtvlhq.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163lkqxzuoc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163zpidbxaz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163fdphdwij.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163vtzfplch.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163rmpnqugv.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163jzojbsxo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163qwcbghhg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163oztplskw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163patnkijq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163enlzwpvq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163dfgovmyu.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163lmnoqtyh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bcbfavac.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jsdnkvwk.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vekaglzv.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163oaasqmgh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ziqhddlo.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163hdozerjq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163vlvpaees.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163fsxxbvrv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163fmmoxvcl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xcwlksps.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163njlxogsg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nnhxarsi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nxshaork.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163lkymkjpe.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163purgjtkt.html

================================================================================
来源：http://www.sxryk.cn/163itbaouni.html

O. 并发与异步
来源：http://www.sxryk.cn/163twlnvbve.html

================================================================================
来源：http://www.aibaodan.cn/163weiwdphu.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163pmgoagjd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163rykdxydh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163alrclfug.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ktlvevyf.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rszetncr.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163fwmtqlgd.html

Go:   go f()
来源：http://www.aibaodan.cn/163roklgxrb.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ibwfvxxc.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163nisxzhnt.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163msdmoffd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163dpdkvktb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163rtkbaxxk.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mliiumye.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bfepzgef.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163qrxftymw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163nizxsfpm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163dxdbtaqj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163hvsdbrao.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163dwbiaihd.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163vkhkacto.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163pqvcstxy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163hlwfjyhm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jafbsknl.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163eqitrews.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163kpohpgaq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163nyxnopke.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163uqmcngcn.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ooidwqmt.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163qkjqngtv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163wartrxsx.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163dgocxiyc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wguhqlcp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163tcxnivfw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163qvbdzsfl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163zghshprh.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ptvbqwpo.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163wgujjnmn.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163jowqczaa.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163luqvfucz.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163fgespasf.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163spybgocr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163iixhlayw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163acpiguev.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163lqzoxqfn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163jiexlskv.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163brfdtpeu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163qpqisuho.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163pfulrehx.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qoornsuu.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163mbdhcilp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163kvmczksf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163jrzancrb.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163xcnwouya.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163mfwvwreg.html

================================================================================
来源：http://www.aibaodan.cn/163dwgigght.html

P. 常用工具函数
来源：http://www.sxryk.cn/163qnpetclz.html

================================================================================
来源：http://www.sxryk.cn/163bjpkefnn.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163dfcsqzze.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ohiodooe.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163taikpmms.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fwqwsets.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wuefgamn.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163alovsoqv.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163jxttqtcp.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163jeavbrlk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163tsynsutj.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163mdpbzfct.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163swzlmvqo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163rkgwpduz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163vmwweauz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163vpxqnbcr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163phtgnieo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163agmcelgu.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ayydsdqh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163xpstwipq.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163nfkqpgya.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163passmxlw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163jzremhae.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163gkvdbood.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163csbcdepp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163iezvuzaa.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163vuecgbmu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163tkbykppl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163goufchbr.html

[P04] 求长度
来源：http://www.xuanzx.com/163eurlfzzj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163vhchncwb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163thssyxsh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rbgvfhlb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163nlayxitk.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163likerjly.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163gndhjcsc.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163gglcpfcd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163kkmypuav.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163nnniehob.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163iuccwdmx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163bttgtwpk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163lmzxjake.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163bqwgpolu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163qpnxezgo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qgzolqyx.html

Ruby: a == b
来源：http://www.xuanzx.com/163ednngiky.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ztgnmswr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ngvndwem.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163neuzluse.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163mkrefbmg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163rpefrtjh.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163uhucrgnd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163dlehfsba.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163wtjupuza.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ckxqorux.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163aubcwvjd.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ijvuepkh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163zpvnimbp.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ugpzcovg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163nzxhuyuk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nzkvdvay.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163zmuadaos.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163gqeytgxa.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163jitkudqf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163gkbfponn.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ccjsymal.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163qbkoefni.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163caicythn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163hroftzua.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163dqcnflom.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163lbidgnsi.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163yqxftuyy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163rxgaprxk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163zxgnwbux.html

================================================================================
来源：http://www.sxryk.cn/163pvrecltd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163kmlpdqau.html

================================================================================
来源：http://www.sxryk.cn/163cumctgbr.html

[Q01] 创建表
来源：http://www.sxryk.cn/163locvhfxx.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163azrzhwig.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rokrepkn.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163jwtklycx.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163lsylczje.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163grbfkqya.html

);
来源：http://www.xuanzx.com/163gzbfszsl.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163etapexxf.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163pliextfb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rdpvhqvp.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163kslucuee.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ovprqjoh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163lvpjfjio.html

);
来源：http://www.xuanzx.com/163gbtffrpz.html

[Q03] 增加列
来源：http://www.sxryk.cn/163eslheygf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163acmhrfkn.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163fznlrimi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163zcnvepjt.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163rdpnrwfm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163aixrdqpa.html

[Q06] 删除列
来源：http://www.sxryk.cn/163dbzlwdur.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163texqwdpf.html

[Q07] 删除表
来源：http://www.sxryk.cn/163hhmxbmlw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163iyqshfej.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ayzltuxo.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163fjizwdqw.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163mlmkyegu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163jpxjalio.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163cttubbww.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163rshsbryj.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163fozorvpr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163duuwdwyc.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163dkbvpeey.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163dwlpeoyy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ropjbpgu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163pdoybcsr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163aqywyoqy.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163vvsfoilz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ctxsyyne.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ggascgyy.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163yfojhtxx.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163tvmclxjr.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163rqpusggg.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163wkdktklw.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163hcfpvasd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163poxcnoxe.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ncromyrm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163uqspnbun.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163geyudbpu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ugojxofh.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163wjunmszv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163qikxsmdi.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163lfmpkhof.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163xtmnenvv.html

[Q22] 排序
来源：http://www.xuanzx.com/163iidnitjf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163rclcrsxf.html

[Q23] 分页
来源：http://www.sxryk.cn/163ghegsxdw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163rypvatuo.html

[Q24] 去重
来源：http://www.aibaodan.cn/163cmmhtcqd.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163puzxnpmp.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163mqysqkcr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ovinlsfs.html

[Q26] 计数
来源：http://www.sxryk.cn/163qfkllgqc.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163fybapbyd.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163gwdnrevi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163gltbfsac.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163bjjcigok.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ktwqvbvh.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163rxyyrvvr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163mtabwnua.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163bgyfsmgc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bepaqtcy.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163iyhupgfw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163fetfdvtv.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163jfihncqg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rmmyfyrm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163chjqlqrw.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163cacfxlof.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163zkamvkau.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ajrjeryx.html

SELECT * FROM (
来源：http://www.xuanzx.com/163vmrumhzt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163zafuiaio.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163dtgwyquc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163uclimvlh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163beqqjtwq.html

[Q36] 左连接
来源：http://www.xuanzx.com/163elsrtlom.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163buwcjzhj.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163prjgdmwc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163tomqwgvd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163efwmwfab.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163pzfubauc.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163focpdfos.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163mxxmvmvi.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163hgevpojt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163fhslifkh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163uoirztwh.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163bguylgkn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163oieorkyr.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163wyucbsno.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163mvfuamtz.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163qteoecup.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163laeagtvf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163plqhhmov.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163jzwcxmtn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163mqozdcvm.html


<!-- 参考信息 -->