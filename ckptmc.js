外链999!wailian999！

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163rmihvpij.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163kcovfgyv.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hskkbtgr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163mccryinw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ylockaap.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163dnftedeg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163iooollnp.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163leqkyasj.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163mpmmeufz.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ukeezvuu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163erhanhae.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163imddyvga.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163icwqbfkv.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163inwkzjzf.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xcubhaig.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uyybfdpr.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ueaebaxv.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wmnbqaew.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163wfxhtglr.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163tlrskclt.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163etwhfsyu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163jxmhgiyw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163tymksasz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163zbicumat.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163lhnwqiss.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163erbqsrvl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163hfcoynlm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163mdnhncqa.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163tfwueltd.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163pcmfuxhr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163niysbwcw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163euaiuwxc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ksiqfjcm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163uztncjop.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163muzzzdgx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163xepazrwk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163tbdfawbg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163aesvnave.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163xyfkemuy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qcdgyozv.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163zlrpzjcv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pshwdvjd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163yutoykid.html

Java: // 手写递归
来源：http://www.xuanzx.com/163sqcurpxx.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163czmrzbze.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163lnqjimti.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163sbillgxv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ngrkearn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163vdoherfc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163pxpykasm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163akapltkf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cvvvlrje.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nytbwjbg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163kvzuemri.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163rorurimi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ithbeohr.html

================================================================================
来源：http://www.xuanzx.com/163grdufyfb.html

O. 并发与异步
来源：http://www.sxryk.cn/163pvrkhiyz.html

================================================================================
来源：http://www.xuanzx.com/163psahietf.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163abuokddq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163iclmoczc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163tzwjhosa.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163duouukfu.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zpzwywdl.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ybjxsrsn.html

Go:   go f()
来源：http://www.xuanzx.com/163gpyqwjlv.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163pqeejkku.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163sabamzli.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163kvrrfjly.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163wieetqdb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163uuwuoqgc.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163xnyszqrs.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mivpmvip.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163kragqdzy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163sxiqwpav.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163rhizdifk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163fevbcjbb.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163cwymuoka.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163nxcaqifv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163duxsaxbw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163xtgqdxja.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163voaozrzz.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163rosullcv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163rsgfuyog.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163uwewijfk.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ohbpazmz.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163jvelkice.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163qbjfugju.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163vxnlpexk.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163zrnyoitf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163bwszujgp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163acoonyiu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163gmssadfw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163jltcwiyt.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163visusfek.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163qgrkwqwz.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163btukgqdf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163pmbhmlxh.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163gpvjqtnc.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163jqeswvxj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zhtatfuy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163yruivhen.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163qnafoxqb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163dlseorav.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163gskntkui.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163jwdrhpuh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163pklceivn.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163yoibzgyi.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ujmalpks.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163dkgfbujl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ridobeuw.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163jzenvlgx.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163svasaucg.html

================================================================================
来源：http://www.xuanzx.com/163mpmuxgao.html

P. 常用工具函数
来源：http://www.sxryk.cn/163czrskztp.html

================================================================================
来源：http://www.xuanzx.com/163boolgaxq.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163gbhytgos.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163kxaveqtt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ztbqqcbx.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163yhwzhvaz.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163pdofyhce.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163nsfmwyhu.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163nmpbxrzy.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163wjlucpjm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163yalulyhs.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163qwlatcpc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163sfxhvpch.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163pcyixhsj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163axmzhpkq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163cblznsyi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163tikwfear.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163cdejqtvv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163uedsqapi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163niwqeiiq.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163twkrjdbq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163xmebehto.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163dbedrktb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bgdkwpsz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163gyturimf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163nrmuonct.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163skaeqpat.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163fkwptmmg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163mgznwdbi.html

[P04] 求长度
来源：http://www.xuanzx.com/163rtoibqqk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163rpurpifm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163shlltgpu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kumqeqfd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163aqgwojun.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163krtgsbdm.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163gbcbaout.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163dboskuwx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163nakkeuor.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163tnwxycus.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163mqxanomf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163iiwuagam.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163auztqfrw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rrsicpvk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163trsdzmqz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163czayqzmd.html

Ruby: a == b
来源：http://www.xuanzx.com/163laizgihl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163vgvxukpf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163eifnmslu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163icmglmhx.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163elwdfgio.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ijorofxr.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ejspdkuz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163dhjsjocy.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163mymmcwzb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163tnvtfktm.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163nuxrmuug.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163gcrulnqt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163eukkrcsv.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ghbbuccl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hzdhyrhj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ashacwzb.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163xngqjotc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163fjponzrs.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163efgohywg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163zvkarguf.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163dwzogthr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ikgzvirb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163dkhcdwdz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ungrurtq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163qrtikpmw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163aueqtjkx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163clnxxqqz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163etanicnp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163lqeupfbk.html

================================================================================
来源：http://www.xuanzx.com/163qosbfvsq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163gthitrlx.html

================================================================================
来源：http://www.sxryk.cn/163oqodbmzr.html

[Q01] 创建表
来源：http://www.sxryk.cn/163pgwdwdqd.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163euoxjztj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163clbkjvrk.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163eepgdfgw.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163auubulvt.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163efkbgvni.html

);
来源：http://www.xuanzx.com/163xpamhvsf.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163fmmbqmqy.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163afjkljnc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zuevlxpu.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163esnfqape.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163wutvxced.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163dbdurpdq.html

);
来源：http://www.aibaodan.cn/163svckgurh.html

[Q03] 增加列
来源：http://www.sxryk.cn/163cpzzkqnt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163absjhhie.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163nlvqkibb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163xbzplawp.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163fbkcmmkb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163esjlbknd.html

[Q06] 删除列
来源：http://www.sxryk.cn/163adjmorkk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163qnvrtalz.html

[Q07] 删除表
来源：http://www.xuanzx.com/163gbhujxrh.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163zeortonl.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163cxokaelk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163wcltydge.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163gnztxmqy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163afnqvifx.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163rdasutye.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163icgcewvs.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vjepaixn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163rrjoqioe.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163kpcprqew.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163llrekckt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163qgdyyyiv.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163lwakdtun.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163jhvtxciv.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163tgqsbsbv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ymwdqmsa.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ggsvadtx.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163oyclgyxu.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163jhzaucvp.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163spkajdlb.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163qbjzmghn.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163hpkmpjeh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163jyzicipd.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163rlgskmvz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163jrigypim.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163rblstwib.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ktxbrtew.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163nnuahsgt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163mkavpznc.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163eshrutts.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163nqibrehq.html

[Q22] 排序
来源：http://www.xuanzx.com/163rvkrxtfe.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ioyqnloh.html

[Q23] 分页
来源：http://www.xuanzx.com/163ynmxqozf.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ghvhuhzy.html

[Q24] 去重
来源：http://www.aibaodan.cn/163tgfgrdab.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163qqbqwiuc.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ozjihbut.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163icbtgslr.html

[Q26] 计数
来源：http://www.sxryk.cn/163noxsvghj.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163mbzuvbsx.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163rhqaqvso.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163bbzmbhaq.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163ggpxqfmc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163xfwqoqpl.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163rrmgpxhc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163fqstuvnz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163vakqwxsi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ujwnkbvu.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163nkpyxvog.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163fxpdvscp.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163hwrzjrsc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ompeoxem.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163yiyhwtky.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163wvmptrvs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ayrusogo.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163mvphwtpz.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163xsfkomdp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163nqupvipc.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163stkfewpz.html

[Q35] 内连接
来源：http://www.sxryk.cn/163wrxuhkwa.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rhbikeew.html

[Q36] 左连接
来源：http://www.sxryk.cn/163sneemzjk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zdeocugz.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zbajzrnn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163sxqvmjqb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ngslicht.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ieoebvts.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163smcmtzbt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163dxndjocr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163zmuszprt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163vlxffksb.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163sjcemwue.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163qvmjnsib.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163dqutwpfn.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163winhexsm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163krxrnsbl.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163xrdxlhhu.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163vbtbzqfv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163olkemafl.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163quererur.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163dayiwqdd.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163bpjktxfb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163etsvmifh.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163gpdgzokn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yerievad.html


<!-- 参考信息 -->