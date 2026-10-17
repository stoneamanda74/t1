外链999!wailian999！

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vlqqjozr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163putrbybj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163xhcheqfo.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163molgcddz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163qxxqskrk.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ybabpspn.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163uumbdgpu.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163vjniboza.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163iztzkpjw.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cgcsspde.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163skkvdhin.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163xtlabchw.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163kdogyter.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163tfvajzzk.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163llmyncwh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163euuwfhpq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163llizpvbo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163heqjszwl.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163fcyiwajg.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163winmpgiy.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163dlwtjpah.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163otxptjab.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163xkztutmc.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163eqpapyam.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163xyvqmmit.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163aealfyju.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163sbkomucz.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mtugvkwv.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163qymntxui.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qfpgewhl.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163mnuzlgls.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163qlvoasue.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163qmapvfel.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163lziugwdk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163dabvdqil.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163dozscacw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163maorfyfh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163njwzybjk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xiuzudtu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163tfhdrpxu.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163boocxqmk.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163jibcvkkm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163scbziwxp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163uplrdlsc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163blimyswf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163whkkdgfi.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163zqytecia.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163mntrdgff.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163cjmnbxkg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fesqighc.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163gshnjeah.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163wpekogaq.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163zkjyoyhs.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163czlerxzk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wdzdhfyh.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163lulnjmbb.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163odwhatep.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ooeuqgvw.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163jsadxvil.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163mxigooft.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163vytdciij.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163aofuuuwu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ryqvreyg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163tvjsxahl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xhhymvnk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163zeqnztrw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163wpiqweab.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163brxkcwce.html

================================================================================
来源：http://www.sxryk.cn/163kkuhpakw.html

O. 并发与异步
来源：http://www.aibaodan.cn/163tjumadqv.html

================================================================================
来源：http://www.xuanzx.com/163vnrzcvfo.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ahfrhovp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163wupunblk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163zmixlxvb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163zkpmpqvf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kptwwwvc.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ijvsjvko.html

Go:   go f()
来源：http://www.sxryk.cn/163wdcoqhlj.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163rnjxntkr.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163fmtgwatz.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163mzhsxmdv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163brujvduf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163idopetnj.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zasamaji.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163epdnguxz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163fhygbrbt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ueommjbn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163qfgobfbo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163lubzpgbn.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163nfldppxg.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163lbgcjzeh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163jgkqlwlh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163llnhzmaq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163otczzpop.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163lbomcbbc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163hajeejsd.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163fdjqarhw.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163efncervw.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163njoqwlqr.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163octukidt.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163cufzkinz.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163jsbjcynw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163epsjezjr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163dqaxprgq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163yyqorxai.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163afxamhps.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163eigczcma.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163yukbbkgh.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163tharriqo.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163dbtwthta.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163lkvsdfyd.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zsxnqbev.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163kqebbqyf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163wpfqtpdo.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163sdqysukp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163cpplfglp.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163lfelhpfd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163pniynmwf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163wwxrahbl.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163yhkigsrd.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163dgdnrpum.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163bobstrwt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163gvxowovn.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163tewobafz.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163bhzjufno.html

================================================================================
来源：http://www.aibaodan.cn/163fjyfgddi.html

P. 常用工具函数
来源：http://www.sxryk.cn/163tmmrctcu.html

================================================================================
来源：http://www.aibaodan.cn/163nrafbwyp.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163lenmauqg.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163qgcvybjm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163nbabepyx.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ygxoiahr.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163qepyhvwa.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163mjxumiyl.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163nxgvbeul.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163twmcyidf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163xwxmgzat.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163zbmsuzld.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163jucuplct.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163lysunvhz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163orgcntov.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163spjvlngh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163mchoatzk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163keijpomj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163padtdmot.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163befjntkr.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163rzrdxfcp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163bvofwcyx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163neuhelxy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nccwjqql.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cldoaxty.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163fwdspnuv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163dalznxuv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163tvrgxhtk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163xwyuepaf.html

[P04] 求长度
来源：http://www.xuanzx.com/163dozozbod.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163fgfawavt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ohetvale.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zzwtpxey.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163tjmavnkm.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163jdvryjap.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163jchpdmzx.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163wsnsjtzg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fecoyjxj.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ouupclax.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163oxihludz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163xnlpcjrn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163gwheyozt.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163dcieldra.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163yiffgydz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163kzolwllp.html

Ruby: a == b
来源：http://www.sxryk.cn/163mwwcpehe.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ycpsbvxh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163sxiyjlcv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163zlohclwg.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163hrqdoftl.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163aebmxkmh.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163jghemcjj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163hadowlzz.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163gtsqbhcv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163tcvfvfuq.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163uvnwvqau.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163vmlnorjl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163wbpjzahg.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163guhwqxqb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163crholiiy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zfveczzv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163tjujbyvm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163nhcewlhb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ajumlpsj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163atahgkvw.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163fycojzgu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163pevwfjsa.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163sglsaciv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163baobcihb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163etaayvwb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163sutxdpvj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163lwpdemif.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163akcruzwf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163mfmockpy.html

================================================================================
来源：http://www.xuanzx.com/163snvggors.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163yxcwpyzq.html

================================================================================
来源：http://www.aibaodan.cn/163epuhuskx.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ygbrfymv.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163bzuyanys.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163yirppvyh.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163pultsxhk.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163zyopmlrq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163mqagvqpg.html

);
来源：http://www.xuanzx.com/163dvdlyhti.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163fbdfiean.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163whuwhmol.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ootqbxsw.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163qziooavu.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163bckbzute.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163btifjgzm.html

);
来源：http://www.xuanzx.com/163ncptlcbe.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163uxnvmwti.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163bjvfquzk.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163dastpntr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ylwjbitj.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163jngjhlmf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ibturtvc.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163xxodvfhw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163iwzhqhtn.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163txxyuxqh.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163zhsalbwf.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163yralpjjq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163uuyqkhpt.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ehbikhrp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163npibyhcl.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163njuramtw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163vwbhtesz.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163jthdyrmh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163akqsxdwa.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163hxufbspr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163bhebjtdw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163aqhzghkk.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163lplbkaft.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163hgntbagw.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163nftmratt.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163bcrxemim.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163yrzkjauj.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163whkhfqav.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163zyolkbsc.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163sfksrzoz.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163bfhdkwkc.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163dnwnxgia.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163dxwrmelq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163lewsdgml.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163oleyfnrf.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163qazdwwoq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163bfpslben.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163cjnhwwfn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163qzyvbpfm.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163rqfmommi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163kmlhhbax.html

[Q22] 排序
来源：http://www.xuanzx.com/163eoqcvvtf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163cisqtlkg.html

[Q23] 分页
来源：http://www.sxryk.cn/163yvvrxkvx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163pcxnaecw.html

[Q24] 去重
来源：http://www.aibaodan.cn/163tanavpdg.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163cfxcncmd.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163doazacgk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163dsvuppgl.html

[Q26] 计数
来源：http://www.xuanzx.com/163cpapwshu.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163fqbozskj.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163eertffcq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163gqngfwtg.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163pfsfwiip.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163zqjazujr.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163zgwqaxet.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163fagzxqkd.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ctdsxzdl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vytgwbln.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163hmbmdgyc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163tqoyewks.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163akduppzk.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163urfstaus.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163wsiogykh.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163rdqputbk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163nwanfbbu.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163vdcqktxh.html

SELECT * FROM (
来源：http://www.xuanzx.com/163hmdxrxvq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163xmelzgrf.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163nhhthxra.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ixtwcwso.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163aksmsvdh.html

[Q36] 左连接
来源：http://www.sxryk.cn/163smxzragh.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rotxaapk.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ftppkies.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163mlgxjvja.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163mmbtofqs.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163xpkmpjos.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163aejgelmp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163vcgvlqdg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ipsforfb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163mfcjmgyn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163uzdfnpkr.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ktlehzzb.html


<!-- 参考信息 -->