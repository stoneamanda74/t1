外链999!wailian999！

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ueknbqxi.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163npchqpwl.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163msirfash.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qcnfrvyb.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163fwwvfuil.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tnbhwasb.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ltjmhgfp.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163kumylrqk.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163mpfdxvzu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163wxdodtdg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163zrfjmsoa.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163nyxlvplg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163nejqqrjm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163lusdjrye.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163nhzbkqyf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163eqqqveiz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163lbhvsnov.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163hyzrboia.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163kepcscuw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163xbbnfbmh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163slunfavd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ffxbouru.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163daimfsuj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163rxgshlks.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163rkseuhyn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163xryrjfnw.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163vdkamtqw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163etzegekp.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163cwxzkjox.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jeoftcsb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ghvobocg.html

Java: // 手写递归
来源：http://www.sxryk.cn/163tiefwqmt.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163rumluhuu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163kxykgapw.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163lrpczuwn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163kejiespp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163pmmxgqgy.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163nqelzxer.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xyxkiomq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163taokdutq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163setoigog.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163nanwytys.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163utfyxkvj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163uhkleerp.html

================================================================================
来源：http://www.xuanzx.com/163axrgkzwa.html

O. 并发与异步
来源：http://www.xuanzx.com/163izxietxr.html

================================================================================
来源：http://www.sxryk.cn/163awmehfox.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163bvyaxlfi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ykewodeo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163dqolhqjl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163xgbqqdba.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bgifbqdm.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163krlfxvju.html

Go:   go f()
来源：http://www.xuanzx.com/163bcrdevjj.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163vsjqtcao.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163fvifgtkf.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163gcvwbtzh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163yrkvyzsb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163vopvcqab.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fuggvgfu.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gwvkofgu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163hrdeqqpx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163wugdwqfm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163mrfaocqs.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163iczjbigp.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163vhnpzcon.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163eypjfaqi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163npzfkvmh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163bjuiiqav.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mupnrrcs.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163sgiqxbet.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163kqexrwlm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163nqmuwwcy.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ptmufhnp.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163nvxptzkt.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163jzpseomz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163gusgtdbi.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163tgjokluy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163aaderknx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163riabksua.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163kjslxodp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163wcmmekjd.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163mchrrrdp.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163qrrvgzsu.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163msmgobmk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163jweuhapf.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wfcakvwu.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163nioplbll.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163vgaknuic.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163imdaqueg.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163dlgkedey.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163jwpdyppk.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163utvrxurb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163usffjfta.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163mnksrrse.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bmmdtsls.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163huopnahj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163rrirtbgp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163tmuhamma.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163vztalgxg.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163bqlmnlcv.html

================================================================================
来源：http://www.sxryk.cn/163wdnwmuhn.html

P. 常用工具函数
来源：http://www.sxryk.cn/163zzdforye.html

================================================================================
来源：http://www.sxryk.cn/163djqomvee.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163eiflcpty.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163dhpanwlr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163myfzxaok.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rwzwmxqw.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163gdwzobxo.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163qberyxdx.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163iswdfpgn.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163zxejitug.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163fsooqibv.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163tkeibnqg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163livxqchn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163fbxgupeq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163atkznonz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163kccybrnf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163lpyyrobt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163vifuouxb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ankvcmzu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163nqfhixht.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163lpfwtghs.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163hazjmkzv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163gmxzteez.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163pdxzkbbt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xiskunjh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163znjdfbhh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163tdniykbl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163igcvevwa.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ciugzhyp.html

[P04] 求长度
来源：http://www.sxryk.cn/163nxbnlafk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163zjawgqhz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ugfstdki.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rdgoaqtk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ztheudrg.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163fjatowpx.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163hfkdyrxw.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163iaenhnln.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163kjvlylyz.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163opcpfrmi.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163hzexmwmg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163dtcpogrb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163kulyzuvn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163qsdsmsso.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163cveqsjtr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ivlosefo.html

Ruby: a == b
来源：http://www.sxryk.cn/163msrbvppe.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163iumomjdl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163gxevupco.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163gqbparcy.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163yfakpupg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163wepopbya.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163pylnynfv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163uqkujqvf.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163owshbcfa.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163dhhfkbai.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163puwrsbfz.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163vtohmkhn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ffqoyjut.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163crdkaubm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163thcijpnv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jkusruar.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163wfcjrjdl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163gpmxtuva.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163muhartyk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163pfxhtjbo.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163hancbfca.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163sancifek.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163fnpikakq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163dkzqslem.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163vkavhulh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163rbowocrf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163jzlcpbcr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ltqdbqrg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163itcynslk.html

================================================================================
来源：http://www.aibaodan.cn/163ihfhuppt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163xgobtsmg.html

================================================================================
来源：http://www.xuanzx.com/163bcgdamqi.html

[Q01] 创建表
来源：http://www.xuanzx.com/163jnxaylwu.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ocjysnxh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163tdptwpwv.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ldutywuk.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ympmyjwe.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163elgefraa.html

);
来源：http://www.xuanzx.com/163gmfgwhmp.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163oqninton.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163jajsitfd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163skqlahwf.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163kkywcaso.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ropwsjsp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163rwlhxwqi.html

);
来源：http://www.sxryk.cn/163whfzbgly.html

[Q03] 增加列
来源：http://www.xuanzx.com/163gbtbhnys.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163oebnozij.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163nkcslotk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163mlziyvif.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163zjxjbxeg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163pxgdvooj.html

[Q06] 删除列
来源：http://www.sxryk.cn/163tykwndge.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163tlfwkumg.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ajqtylyi.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163evkwpthf.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163cotznnbe.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163buprmkpu.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163xibhfcdr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163opsrclxb.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163qtuwgezm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163cmumfwqk.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163jifvtbzc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163qofrcifh.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163djrhqaxp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zjomvzea.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163qgtyekvq.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163aidqtblm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163xlbpvkse.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163untsnuiw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163hzvtvick.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163dquopoec.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163csxxhdeb.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163bqcgjbbr.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ufeoxbap.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163tkpzysoo.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163oigvryra.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163szwkzeee.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163elpxczpw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163nfivprti.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163mueuxefm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163hoxyoxkc.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163czlfvubh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ndahgida.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163jaxbchoy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163zxrojimx.html

[Q22] 排序
来源：http://www.sxryk.cn/163exouvbsw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163dkyeantn.html

[Q23] 分页
来源：http://www.aibaodan.cn/163velwrmlr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163euczohgj.html

[Q24] 去重
来源：http://www.sxryk.cn/163lcweamlq.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163fjjskedi.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163tabwcxja.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163gfamtrqp.html

[Q26] 计数
来源：http://www.aibaodan.cn/163fovunfvr.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163fomfgska.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163lfddpaxq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ktvimpcb.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163mcparlpj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163bakaduoe.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163orturbzx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163szxyztkl.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163lknzbwro.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gifgjfix.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163kvziwweh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163tjlfffea.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163kbwfxerz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163thaqnvaw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163miwpheod.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ksixizrg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163qizvarjz.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163uinhzlpt.html

SELECT * FROM (
来源：http://www.xuanzx.com/163nrcuwxak.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ycfpuczz.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163lofpiago.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163qzltlbqk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163uhkjvixn.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163yhfgbzqb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xgmgrpll.html

[Q37] 右连接
来源：http://www.sxryk.cn/163xafhakue.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kntbiyrb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163atcyfrgb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163oceuqfjf.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163xggjnpem.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163deexffxt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163gtpnxuwf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163alclvxoo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163phwpecpz.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163pjudrpno.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163smrqwilo.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mmvaqthd.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163eytfysqy.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zdpslixr.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163hcedsnqa.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163wyfnstnu.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163eeqbltwd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163pvbtesbp.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163sczcllbw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163yxbipezl.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163xajieuez.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vnrlnjwi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163yuqhzeuj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ihvrqqyr.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163iuxwghjn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163wiagbwjj.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163uvcbuzuv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163cdhwwgmw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163nkjqbxxu.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163huyyfubn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163bhfajlrp.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163uukryung.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163vsdhptgk.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163rkqauqto.html


<!-- 参考信息 -->