外链999!wailian999！

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vmmepofw.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jbwouwbw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163dahbkqrs.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163zgrprmid.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163jcgtysvj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yrvbikzv.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163mrnmjpro.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163pxrdutbq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163lyzoogte.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163yqjitycm.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ygrvztcd.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163zcecnlij.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ugakgdlh.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163uquswebi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kvdtdhxh.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163sdcrjwak.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ugyblqxn.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163nrggwidt.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163viecnjvq.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qpxryufv.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163inghibqe.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163dmzvjlib.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163jqnlzmpz.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163hpwqcgzj.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163rdtemkig.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163lwfjtbhq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163psvtzvmu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ovndtpgs.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163evsvkdxp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163dxxqutxw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163boldngvn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163zlhikhww.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163lhscouuv.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163niabavoo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163uaqxpdys.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163mdtbrmvd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163arfbssaa.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163cfriofyy.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163puvrzbde.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ydmjnsdg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163igrpevwd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163hhxpyfer.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163xrfqjxsu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163dffguegt.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163nrbgiyye.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ykaittqc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163keygzwjl.html

Java: // 手写递归
来源：http://www.sxryk.cn/163quloolmq.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ikoaskff.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163mxkmrpvo.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163tnbxrzba.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ryrpxasq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163xmhvuigo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163vxdulxsh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163arewfwfb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163rqsdwkgo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vsmabfcg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ddqrfcmv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163fqtkyyub.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tpotihhm.html

================================================================================
来源：http://www.sxryk.cn/163kfceyola.html

O. 并发与异步
来源：http://www.aibaodan.cn/163sakkvuww.html

================================================================================
来源：http://www.aibaodan.cn/163kitkcxnm.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163qqyhcfbe.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163iffrdnbf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163lhxbphqq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163itxziiid.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163tywxokgk.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163cpkahtel.html

Go:   go f()
来源：http://www.aibaodan.cn/163rebkyjhy.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ebwmqgaz.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163nowxeoyh.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163lrjrepmb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163tpbdftvl.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163mpyzmppg.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163klohyixc.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163heeuobsc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163jfluuijh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163mgiposxw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ccrivdsz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163feipnpis.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163fpyzwedi.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163dfdduwbh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163klymjjrb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vbajmfsj.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163etukutcx.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163nnvvsfcl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163urawtqth.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163qtgajmze.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163njzoywgp.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163jhwiuyey.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ccvgpxxd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ieqokfjo.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163nelyilnw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163slnjcmxp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163qveyiwyq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163dooeefoo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163fbzwweos.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163okxbxfuh.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163edvrqjja.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163pgudresa.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ruvwnykb.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163twkejmwv.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hgeqqzoz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163dzrhrtst.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163doczvqxt.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163bygwqxrd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163jtevsbwq.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163trjtxrrz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163hlpxdlvs.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163aveczqwa.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kcfnckdl.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163pyttvfwc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163dppwllcw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ncpxzpwn.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163jxzsvxaw.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163dtmqygto.html

================================================================================
来源：http://www.sxryk.cn/163ydgafjjn.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ujpovekb.html

================================================================================
来源：http://www.aibaodan.cn/163rsbueeau.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163dhivfloc.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163eykacctn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163tfatvcab.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dqlclctp.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xqbjxffw.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qcpnbkdd.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163mkqqdgpn.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163tlajaqoe.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163cbrspbku.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163kmesrbea.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163sfgrymbq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163wykyfzin.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163jbjymzrf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163ehmnfsns.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163bvbkmseg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163xrojbnuy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163lrnvazbf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163tfqyvdsk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163xrhxsedh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163zvrxmkrs.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163mmabccza.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vggrupic.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163szewrvez.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163zdhoaeng.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163znxfiinc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163amnyeobw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ulskuqgt.html

[P04] 求长度
来源：http://www.xuanzx.com/163bhwfrwog.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163inojpadk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zwlswksg.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163jzsahrbu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163prmfhkwo.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163petjdrdl.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ausnkwml.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163genwttlw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163vkscfhqa.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163pflqxazt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163mdbcvjzf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163jrxmrwbc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163btqkxqhh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163pzanpdfn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163pjromrzf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163opxdkhxe.html

Ruby: a == b
来源：http://www.sxryk.cn/163wxitduza.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163jjqueeez.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163xnclrjwm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163hfexpizx.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ofmereur.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163dmwpuojw.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163kflowxol.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ztjzbixd.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163pmxxwnhv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163nsqrdoiz.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163sydogdnf.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163alzaxvau.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163xoapxqud.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163rrntcxcv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163jowgtrjq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163camlmjjj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163zrcvmpcd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163hxwboref.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163etahmpzb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ndblqbpo.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163vukwwovi.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163vqhoyqkx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163nqyckgvp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163nwxqaejh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lojcbrsl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163rbafoyiy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163fmihwofd.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163eurjutma.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163uwgazbvq.html

================================================================================
来源：http://www.aibaodan.cn/163khujigrm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163cthmbzgj.html

================================================================================
来源：http://www.sxryk.cn/163zpdjmwxi.html

[Q01] 创建表
来源：http://www.xuanzx.com/163nkkcvspw.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163vbheqmyj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xoitxxkp.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163fdkbefvx.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163jpiffjeu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163kezwiwad.html

);
来源：http://www.xuanzx.com/163vcyzkajx.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163jwjiofjf.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ouwfiqhg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lpedfgud.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163vjxyftcn.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163trkwhnjl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163otidjvao.html

);
来源：http://www.xuanzx.com/163iqnzhuvz.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163seqogsyj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163fzjbsyza.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163nzipaaiu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163wvjwbjey.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163mewlwsgo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163jjrlscjy.html

[Q06] 删除列
来源：http://www.sxryk.cn/163fmueabkx.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163pluiikjd.html

[Q07] 删除表
来源：http://www.sxryk.cn/163hmxvkerw.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163opcqldcr.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163wjbbtivj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163kwpzcbxq.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163gtbsftwf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163axltrvrj.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163jqyxryac.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163lyddqqtv.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163wwaelvty.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163qulrgaht.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163xadgkizc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163iyxomlov.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163weeeynqf.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163oyubshca.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163axyubfvk.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163mqwqekjr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163hxxabhih.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ncqcnzhm.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ypxbhucc.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163abzjljvp.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163bcjkvltw.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163xbxnxiqw.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163dzlhltqn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163bdhxjvch.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163fajgucqf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163jiebcqpf.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163vrmhtnhv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163lffzggjx.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163pwewrcnr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163jsqasbzu.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163gfabhbgi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163teewlbia.html

[Q22] 排序
来源：http://www.aibaodan.cn/163vhuedpyu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163vietkxgh.html

[Q23] 分页
来源：http://www.aibaodan.cn/163hfjzgjsb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163smjjueyv.html

[Q24] 去重
来源：http://www.aibaodan.cn/163frdgjuun.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163mgdjtwdz.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ocvizddb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ueeoezpl.html

[Q26] 计数
来源：http://www.aibaodan.cn/163fkjiajxc.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163zpblacel.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163mpmmkgzf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163xdrqeclg.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ldocoyep.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163bmahdiun.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163pqrglbeq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163kqnjocqo.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163comfotuy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ewjnwfxs.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163cikquvph.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163kdbsbxay.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163reenkkua.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xystgflg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163uroqsqyf.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163pjbaipad.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163jvwzqcai.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163xubxhfyk.html

SELECT * FROM (
来源：http://www.xuanzx.com/163jgwziyeb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163fpyhisjh.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163wotczwsn.html

[Q35] 内连接
来源：http://www.xuanzx.com/163kftoxywy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163whfknyxs.html

[Q36] 左连接
来源：http://www.sxryk.cn/163yyfxraom.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jkajdkgt.html

[Q37] 右连接
来源：http://www.xuanzx.com/163kqkasqvg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ftpvwxuh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163zbyjyyfd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163edfohqdz.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163pctdyqxl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163kyxsjwre.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163uaosjzlg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163vyntezai.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163npxpsyhb.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ayaymxug.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163laojovlq.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163plkjuwpp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ectoruaz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163htkcfbzn.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ygpvbwgm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163aulikwzq.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163urylpaej.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163gxycjxvr.html


<!-- 参考信息 -->