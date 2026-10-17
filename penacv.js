外链999!wailian999！

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163yoeoqaod.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163obbjdqat.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163gjztzktd.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163dqghwija.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163wdraeelw.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163hsyrgfqp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163bsickchk.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ijdrxutw.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163qynabwil.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163xovavihp.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kkvtuyxr.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zyflejgu.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ezxwqnbu.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ekqtztzi.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163egvbcljz.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163actuehws.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163rwnllqlc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163hcowmzbg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163fqadaaas.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163ntgzrkst.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163teengdoh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ekfbvvau.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163rtidzxrg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163fyjfnztr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163chofozmh.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163beyphqif.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163qgbyahjx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163uigohnxz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163maqykthw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163qbaqkcxj.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163rucccuho.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163amrvmsop.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163fxohdaug.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163crvzgzxs.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163gcvartpf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ynyfcfqg.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163pwrvmtaj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zjggewno.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qvxxggnk.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163fvqtxztz.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163hjequlqk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163tdmwqavl.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163clfgoxyk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hzmcaact.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163uqwrsxky.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163egjqkzcy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163edrehgry.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wsqulyty.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163gejirfid.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163dwxigtnp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163siyzkonx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fiixrewp.html

================================================================================
来源：http://www.sxryk.cn/163gucseebw.html

O. 并发与异步
来源：http://www.sxryk.cn/163usobyxyv.html

================================================================================
来源：http://www.xuanzx.com/163iiqsognx.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163tqvjnniw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163pnuwhntm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163yzmskaof.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163mjhksqut.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163eblqbxcm.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ormwhfhs.html

Go:   go f()
来源：http://www.sxryk.cn/163tjgkgxou.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163zdnwqwhw.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163xblbyhvp.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163qdkybass.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163fyrimxvr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163kviqmmxv.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rxatvirb.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tklvhisy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163qxlltmjl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163reugshqf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163jzoksicw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163gvplgeyy.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163miihmsgp.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163sqqqkaqp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163vkwgohpf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163dxnwhfio.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yfqlidmn.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163niglsdzi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ziymvxmi.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163arfdnhrz.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163nlqfknfk.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163aifjfodm.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163idzuijkh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163keyddxmr.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163dfknwuxo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163yjqsjimn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163fghmeqai.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163nexjxbih.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163kggiutnx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163qoqhwebx.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163cqtguzdy.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163pdcynfdy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163wcbdlipp.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163smeieixo.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wvqjwtbt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163yyufdbzu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163zyeowiim.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ydnpdyzn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163oerkvwof.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163nouywezd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163lztamgov.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163lbxadwww.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jrjlywre.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ubokvhmk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163bcnpsglb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163nsvhkges.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163juaupyvx.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163myzgfere.html

================================================================================
来源：http://www.aibaodan.cn/163sblubsok.html

P. 常用工具函数
来源：http://www.xuanzx.com/163grjykoxr.html

================================================================================
来源：http://www.xuanzx.com/163jitmiwtw.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163klrnehgt.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163tcamgpnw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163qplssqwh.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ibcfnszx.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nrpswvsv.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163khnjetjf.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163mhayhkui.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163nfetynqm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163bmbfxoqg.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163xornltal.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163rjnqwxpl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163zwuzfnze.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zvpkfnls.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163zsanwoqv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ztorausz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163aktoydte.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163rtkuirfh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163dcfrdejq.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163hcdfxlbt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ijogquov.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163dxfvdzpg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kjbudpzz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163jbzowkml.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163zqkczqiy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163rupvzcbk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163rnppzcni.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ecdxnuen.html

[P04] 求长度
来源：http://www.xuanzx.com/163nzvgzkub.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163ihmffwil.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wtqmnjbu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163sromccwd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vgljaomj.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163amumkmgr.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ttimlyqa.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163lqwsdzed.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163uxmejmss.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163jszdtasl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163xsfvtjzh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163nvqydawj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163uqxqnnbv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163gjggdbmt.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163amxqbefw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163artpskfh.html

Ruby: a == b
来源：http://www.sxryk.cn/163mawugyvr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163oqgntjoy.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163qxugoaxw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163rqwjfjng.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163vixblwwh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163xlzhksjd.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163dxmvnsco.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163qibknrsl.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ekvtrprh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163mfahsgph.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zkvtwefg.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163njjlevph.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163dwovakja.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163tcijgzkh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dibwcseq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ecexpspm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163bfuxrgvf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163rzeddtod.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163aatraxov.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163uofwcouk.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163eepbvfvb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163fxnoobks.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163nelxgimo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163osmtbhce.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ezxisahb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163anzewvhs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163rahagfqy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163icshrfaz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ddsmixsg.html

================================================================================
来源：http://www.sxryk.cn/163alvntizh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163kccsbcjx.html

================================================================================
来源：http://www.aibaodan.cn/163efpyxjrv.html

[Q01] 创建表
来源：http://www.sxryk.cn/163wtvynvun.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163rckblpif.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ugswrdtd.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ambxfrdz.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ubpbumir.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163fgqywvfa.html

);
来源：http://www.aibaodan.cn/163zzxffrnc.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ctauqevr.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ncfwwbww.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163icfywzkj.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163zstngigg.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163yyagzirb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163puuvlgvg.html

);
来源：http://www.aibaodan.cn/163cswnhtvf.html

[Q03] 增加列
来源：http://www.sxryk.cn/163heborati.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163wymostcp.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163fanwalrd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163mkklmmio.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163arnholhp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163sjtkjdcq.html

[Q06] 删除列
来源：http://www.xuanzx.com/163qhgxstfd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163dyizanmo.html

[Q07] 删除表
来源：http://www.xuanzx.com/163rixajwoe.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163bvkxuktf.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163jmvzdnvj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ycwjqdbk.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163qlplodgd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163deteuoek.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163iqktpcnl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163bpifewnp.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163mmeypqyc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163hnrnidff.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163onnkdjsb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163yknonuus.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163otjbstvi.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163oyksxirf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163pebyzjof.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163iykblauz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163qmbtapbs.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163shaoszwx.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163yrhjhlbw.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163gvocntbj.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163snqosvlh.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163nwcvvozd.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163tkxdzbrb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163tretyebl.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ujbgkvsw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163rqvyswsu.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163qadefxsh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163bhtlfmli.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163cowzjjba.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163qtabrtet.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163nqzwzvrq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ttmodnet.html

[Q22] 排序
来源：http://www.aibaodan.cn/163kfeaykxw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163jixhezxg.html

[Q23] 分页
来源：http://www.xuanzx.com/163tuzzquur.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163twyyogsi.html

[Q24] 去重
来源：http://www.aibaodan.cn/163sqjciawf.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163zkyrwmhi.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163irhisdlv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163wwlmkskb.html

[Q26] 计数
来源：http://www.xuanzx.com/163sxwwdntg.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163zjbqqpva.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163alwjikkv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ixwmvjub.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163cuyvzuqc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163xjexzeoz.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163krtsjuzh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163rdqrjsag.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ysinsdmw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163pdilkyzf.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163cnlepylv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163inoactlf.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163hmoghjng.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ueznbhlh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163hyidchlg.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163gjgfbhvi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163tzkpjhrw.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163lqzoiqky.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163vucfdcuy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163tvujwxof.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ullkscst.html

[Q35] 内连接
来源：http://www.sxryk.cn/163wdntwfgu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163mqmzgnfy.html

[Q36] 左连接
来源：http://www.xuanzx.com/163agjflxnr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163mueiwumh.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ymtsoijb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163tzqvfbie.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163uvvqlwfo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163omhvwnbm.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ecouflmh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163szmhkokd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ezzvbusz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163cxibhwkp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163sqadpbte.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163hnqeucup.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ezwhtwuf.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ktqqrbzw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163emexewku.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163egnqwtct.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163qgnfvset.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163bfcmozqg.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163flhdeqnr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163fvhcvydx.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163eeqxeoox.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163okyawbnn.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163nqrdvvcu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wjknhefu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163vyvwcypn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hcjaxmvk.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163klgrzqho.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163mhowujiq.html


<!-- 参考信息 -->