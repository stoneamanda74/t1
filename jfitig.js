外链999!wailian999！

[N09] 栈与队列
来源：http://www.aibaodan.cn/163gburimne.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163onqueajf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163pbjvziev.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163jznelriw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163nfociypd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163bpqoirpp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163yiostwyn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163thknxsxz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163lcfugqbl.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163sytqsmea.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163qgxvzuyk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163qenszkxo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163qefkhgjb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163sduxvbdr.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163oeoystvd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163tehwtinv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163gxhgnutl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163hfxlbsux.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163fzzqnfzj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163kbwxovwq.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163vdjpyzuo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163tgqheurn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wxypykxh.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163tckqokqa.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163nnbkdiwt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163dusdried.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163xffrntgy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163sjkcbovo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163zjwuxjjk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163bnaeuxjs.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vtgkvupv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163uwbbyseq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fucrrhcu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nqdciuzm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163chdpldxt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fhwrhkxx.html

================================================================================
来源：http://www.aibaodan.cn/163zupklzoe.html

O. 并发与异步
来源：http://www.xuanzx.com/163nihwkgvj.html

================================================================================
来源：http://www.xuanzx.com/163wfmxagpv.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163roqnfquv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163qaiuyhlk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163euojzzqm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ktothoup.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fkbiyqra.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163gydnrbsa.html

Go:   go f()
来源：http://www.xuanzx.com/163tzfaqypj.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vygcgsvj.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163lgimcaup.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163isdshffz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163dcpfsjtb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xipwzsqh.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hzkkhsjs.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163huhhyexf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ujxxgbbl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ulxzgavz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163mczamxum.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ngtuojqr.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163seueqcve.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163pekwjzry.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163qesmybte.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163sjbhhpre.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yqdgtedv.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163mivwnujq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163bkkecgjw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163bxpyygxq.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163zbedbrzs.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163tobqiwlc.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163yydcukik.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163zemueerk.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163orfgraec.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163pqigmslz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163zwjxmkmv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163zsiohrgl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163vgmqgxfc.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163chjttple.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163bhpzsqlg.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163thwuexmd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163cahjjytc.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ycmbqsys.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vhxeofkq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163qifjzuas.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ruepjfjc.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ynxfkqsb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163mvlakbli.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163avefmpwp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163pirvneoi.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163fasfebdu.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163oiqwujgt.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fnlymald.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163vjtotmby.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163qjsofihn.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163rlrpgxkg.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163mxephxcm.html

================================================================================
来源：http://www.sxryk.cn/163dmtbqpdb.html

P. 常用工具函数
来源：http://www.xuanzx.com/163owkvqgzx.html

================================================================================
来源：http://www.sxryk.cn/163nvuifvpn.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ueixkrpc.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163tusnmtju.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163rvegduyb.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xqayrido.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163lasqfrwp.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163cjviagcq.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163bsrgzchj.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163jvnhijjp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163lebkdkmy.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163vmbiokkq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163snajxcyk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163zhwjbtyg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163przhptxi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163xrjnhqjz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ihsaqagr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163qhkacscu.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163txsbwoad.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163fpsbknnf.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163omailvst.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163hppnbmxl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163wofsgpfy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mjyeapnz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xvvtbcbu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163wdamsmbo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163zuqtcwpk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163twykayno.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163aiqmjfrg.html

[P04] 求长度
来源：http://www.sxryk.cn/163qipxplns.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163hsxdnqlr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163huskcbbe.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gzjadevm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163nqfznvbt.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163dsrseqwd.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163tvgczgbe.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163juuytfyd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163wbyckaty.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163clwtrhry.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163msyhnjvi.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163zsocswms.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163esezxomz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163emhlhwug.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163iixshqoc.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163qkplyycj.html

Ruby: a == b
来源：http://www.sxryk.cn/163hitafvwc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163bwwvrlvp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163qouwgwbk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ffryzsvj.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163cmefaxud.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163ebljxdgq.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163cxpltpng.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163sywvtoje.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163qhtkoonz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163bussrmyy.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163bsdgsylt.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163mntdkule.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163csmrybdu.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163iopwuekc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163afplxaol.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xsmsbqfc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163crdicyrh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163lqhzcgkr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163qrehjhfz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163zoxeukmq.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163mkqvwaqk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163cnzwzcut.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163gipnocki.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163qwrlqeun.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163tbmspprc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163qjerejbx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163gtdpjebb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163zxdqmgyu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163agrytehj.html

================================================================================
来源：http://www.xuanzx.com/163olmvwvxa.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163qsciqzhp.html

================================================================================
来源：http://www.aibaodan.cn/163pjrqibnb.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163smllgspc.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163gacfaveu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mxzzyyji.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ijgfcqlq.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163lsmdbhwu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163wxszdpym.html

);
来源：http://www.sxryk.cn/163feawknlk.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163zievvabl.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163vnduitud.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ufphxtpa.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163duwtsouq.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163cvrjcbfv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163awhjdhdm.html

);
来源：http://www.xuanzx.com/163nytztnni.html

[Q03] 增加列
来源：http://www.xuanzx.com/163hpptbbwh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163vjsomvgk.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163skweubug.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ljecyboa.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163vgsumbzb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163fpsubygt.html

[Q06] 删除列
来源：http://www.sxryk.cn/163kqzvbyqn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163poovyzhw.html

[Q07] 删除表
来源：http://www.xuanzx.com/163snumwulq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163pfbxwsns.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163bcyvsylt.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163iphkqcah.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163yzchigdk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163izpfoafy.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163cppunoaq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163jdhzospd.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163xznkdexl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163mcszghmc.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163cfgrouca.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163mfisxflc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ytwbmogk.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163pzjtuotb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ugbejilp.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ufkltbxq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163fjqtmmqj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163emodwgse.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163utcykzgn.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163djhkuerk.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163gvelmjau.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ldpbpvel.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163uuybrxui.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163aopwoztd.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163sncvpxrm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163zsjoawkn.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ctkycclw.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163jkrlwrzh.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163zkujnobs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163njumpsbg.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163fpbwvdqd.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163wrkgnfox.html

[Q22] 排序
来源：http://www.sxryk.cn/163zihjpsym.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163sjjnoeef.html

[Q23] 分页
来源：http://www.sxryk.cn/163dwlpqgvm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163lxsyewpt.html

[Q24] 去重
来源：http://www.aibaodan.cn/163cqmexert.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163iihqzrfn.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163vfkoguau.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163loyeggag.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ozvenuzz.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163gctzjsjz.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ecrlulwc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163vdjvmxkw.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163bxbfvytv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163yllzsewi.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163pzrztjmm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163cnaifkdq.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163pvonwebp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mqqertpg.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163rdnrgasa.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163twfrwvux.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163vkqpeatn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zbreaini.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163wxbmdvbv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163fbtxchpp.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163gavkgunz.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163gzavkadt.html

SELECT * FROM (
来源：http://www.xuanzx.com/163hyrrfxlm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163qaxsdqyx.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163znridhhu.html

[Q35] 内连接
来源：http://www.xuanzx.com/163qdulcsgk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gfgqlyjf.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163aohwlmkv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ijkglwkz.html

[Q37] 右连接
来源：http://www.xuanzx.com/163otaqxtzx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163xabfexev.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163tcwmjjdz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ugleigci.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163csbgljfi.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163epgenwcm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163rnecdkwt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163roiryjnj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163shneldfd.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163bqncstss.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163wmuhiyqe.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163cjdgwvwp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163uxlrryru.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ljmjwuzd.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163cgrxlvxi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ltcyxdpk.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163qunitesd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163jlfbhjcq.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ejrxmjpp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163spptfvko.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163zxlyxutq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163wzdpkwth.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163bacgeehz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163nnqnzayl.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163pexhfenn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163mwchrgqz.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163woiicspz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163dlnkysmm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163yqxijfly.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163mjrvpecm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163lhdortzm.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163tltyigqc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163lvjhsezd.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163pzljmvvf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163denduspl.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163cwnhmmwn.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163zblnxayt.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163xkkawizb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163wupqaxii.html

[Q54] 清空表
来源：http://www.xuanzx.com/163rgiyyhpx.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163fnizknis.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163yhvcfugc.html


<!-- 参考信息 -->