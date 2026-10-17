外链999!wailian999！

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163eysotifa.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163pryvbfuj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ezguteyh.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163plqsemtj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163cccsjvfw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tzgpcyrj.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163nckactse.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163nxwubvhg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zsygkpty.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163uwczxgjr.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163mlscswnv.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163tmyhlqgd.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163sxjjjpoj.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163qyzasgeo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163rtprtwcm.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163cpbknaip.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163cohjcfjj.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163nfxyrqok.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163gesoserz.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bscmfjkp.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163sznwruel.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gwdalxdj.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163orpriras.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163hcaeimib.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163qlhknicq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163demkrlqz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163evyzwgyr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163bxumzhzz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tpzpdjog.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ufzgcrys.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163dcwyllvx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163drrpzbcl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163kxkfqgws.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163tkirejyz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163rkccgbab.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163awqnydcs.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163bjweecwk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163dmbtfwsu.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163saxleuzy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163vumrbsyj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163eneclias.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163pseexabi.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163npneoful.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163dthdojzo.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163aksbqxre.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163yymnqqsy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dolygpzs.html

Java: // 手写递归
来源：http://www.sxryk.cn/163uqbgxgck.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jwyxncio.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163hazfibfz.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163jujzeffr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qijqslqe.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163dgatcukk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ipkbhuab.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bkdfgvzc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163nwudzrfl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mooipyvr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163dwppxuta.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163havxopzf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nkdjcazw.html

================================================================================
来源：http://www.xuanzx.com/163untohfxi.html

O. 并发与异步
来源：http://www.sxryk.cn/163gabesadw.html

================================================================================
来源：http://www.sxryk.cn/163cjcnfmpb.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163aaedupod.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163fcwowxri.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163yfkpirys.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163xdhcxrud.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163chkizvdl.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163stdhbmqs.html

Go:   go f()
来源：http://www.sxryk.cn/163aukzfrtn.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163rhmplasa.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163hadcjufq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ukwwlxqu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163iddycknc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wrgizkby.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ewzvetdh.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qgqudqbz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ygtauycu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ttgyuqgk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163paohdvue.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ihbhmvjb.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163zacflzxf.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163qvhntvpa.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163tfwlzmsi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163nyeqqsxq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163acrqgipg.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jdtqjyth.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163tujeivrj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163kakvjgtb.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163gfwusfxk.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163rawqpprd.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163sceikfih.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163yqzlvfzv.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163gniupusq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163byvvapch.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163rgclmytk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163uhgcbboc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163fdpjhwep.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163zbzytzzy.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163hbpfdlpj.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163oytsytsd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163fpjcllht.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bslkwhzb.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163juempbym.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163cscfsnek.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163cfbwbozw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163itdzmrgv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163qbjpyrxy.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163docmfzvd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163nxixlztk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163bmchkjxl.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fgfomqwo.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ppwqjvjb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163frvlzouw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163divajrrm.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ndqqjknq.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163taxfyllg.html

================================================================================
来源：http://www.sxryk.cn/163rrgrntef.html

P. 常用工具函数
来源：http://www.xuanzx.com/163bbnmsrhd.html

================================================================================
来源：http://www.xuanzx.com/163cldnfnmy.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163wfaewcjm.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163gxyxtdyx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163vikbjuyv.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163sllzkmuk.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163pgvuuegd.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163popiezgz.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163futmcvyd.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163xdarlymr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163zpgdudtm.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163jcrmgvxk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163hmmkleyt.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163deoviiln.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163aytbnhdg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163nimsurwe.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163azoaghgo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163lkfyshfv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163kvdbbnlj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163tgnnmetz.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163djcckegv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163xouuoikc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163bhjzwqay.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wumgymiy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ekbyskvv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163kjepckip.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163syjtqqsu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163qycthdbo.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163wokrqybc.html

[P04] 求长度
来源：http://www.xuanzx.com/163vbtgifud.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163etbkxosh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163umdbkbss.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uioqadzo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gjpoeldt.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163mrmrrrxg.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163zfsuhxgx.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163thxhhqbz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163jmkxszlp.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163sfcvuawo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ekfzwryv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163letauzag.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163wqseewjk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163wzyjptem.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163bpptmaaf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163nlsmiaeb.html

Ruby: a == b
来源：http://www.sxryk.cn/163dylgpxel.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163bwwoicif.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163papoursw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163bijrldqy.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163uktzylkw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163bwqvtkwx.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163aiohgvcj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163xjgtikhb.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163elqizhzc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163pojdanzs.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163nzgraevf.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163vajodqxm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163exhcvnzn.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163vcsffpda.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ffddfpch.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ailzvwct.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163vmtqnubf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163cdiezdna.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163kdzdeyqd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163hgobvsmz.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163hizhohmv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163wkqeenqs.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163roedzqxb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163wwdqxqfv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163agrziiok.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163pcargwko.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163dffzuttw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163phqaesum.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163hsczpcqo.html

================================================================================
来源：http://www.xuanzx.com/163tfipfyap.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163oklqhxxm.html

================================================================================
来源：http://www.aibaodan.cn/163ttzurydy.html

[Q01] 创建表
来源：http://www.xuanzx.com/163pybracoj.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163jsmnnfpy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xcqhskri.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163jteqmoxa.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163mcrnqrxo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163upiuuvwr.html

);
来源：http://www.aibaodan.cn/163xxntkrkd.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163dadalorj.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163rrcgvwfm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nhobdqzz.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ygqihnjn.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163pakfgtod.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163vihvewkr.html

);
来源：http://www.xuanzx.com/163dydkcupu.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ujnrhijt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163luqsrerr.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163uejchwpv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163yyiqnrgh.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163jfrxqgal.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163brmrjxcm.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ezjhqhma.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163xwprrene.html

[Q07] 删除表
来源：http://www.sxryk.cn/163mjjzifok.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163kzqtetxe.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163kbadwaqx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163jsqzfwjx.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163qymmiuls.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163bwtdxnkt.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ujbhebhe.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163xprjwwch.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163cmohnwpz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163rgyhtwsd.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163hzpiqund.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163gdckcysn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163yefrlgxm.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163nsuxtwgg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163nxwmupua.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163xjqdkhtn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163bskmpdao.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163lhqsmctb.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163obnhruzc.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163gooujlel.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163sjtunjgu.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163hqsyzbos.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163iyijwecg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163fiebtxlg.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163fvskovgz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163twtabvhq.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163drcnbifk.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163xbifvozr.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163nopysemo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163lkfuqfjp.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163hhyconpq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163dlswqqjn.html

[Q22] 排序
来源：http://www.aibaodan.cn/163pyfqqkwe.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163bbfmibxx.html

[Q23] 分页
来源：http://www.aibaodan.cn/163swvkfuye.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163vyehrjdp.html

[Q24] 去重
来源：http://www.sxryk.cn/163srfppicb.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163mhkwuygm.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163qbmxqhuv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163eouzsyvy.html

[Q26] 计数
来源：http://www.xuanzx.com/163ovvzsdqh.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163hubhvtix.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ouykgszt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163taieyjse.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163dmcjbtti.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163epxzpepz.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163tondftac.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163dksgywof.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163afohqsjq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gyguiinc.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163atyznhof.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ufcbtulk.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163bclraolw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vsfsxxzh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163rwmrqprw.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163csflckmw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163iwordqkl.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163qkhmvbil.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xlcwbrup.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163etvylkrf.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163caoddfoe.html

[Q35] 内连接
来源：http://www.xuanzx.com/163xqffmowp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163uftajzzy.html

[Q36] 左连接
来源：http://www.xuanzx.com/163dzfoyywr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163redoqsgj.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163zcgcghjw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163sepyawxg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163cdcrrgms.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ddkmvgrx.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163nswjrogo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vkyshkom.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163uavoauzi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163cqucyzbd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163qdcapypt.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163zlpfshkz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163rpyidtas.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163atqnfjph.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163wjrxqlmx.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ltvxohud.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163nzevndpj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163tlabuswd.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163pqptdfam.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163juwgwudd.html


<!-- 参考信息 -->