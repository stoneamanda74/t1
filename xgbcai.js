外链999!wailian999！

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163raiuhxsx.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163fpazvshk.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ezletyza.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pqpzuaal.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163nhstrghp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ogtkgjfd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163tctgowwm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163csxwlqtj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163omoagsxu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163yyaxlaze.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163inldtbyp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163jefpjpcq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163xhdnjlly.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163vjfejped.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163fabtkbln.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163byoazcur.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163mepgmrrs.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163pzzzcgii.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163straulfr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163pfdwzwre.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163xrpwzqrs.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163mqphbjgs.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163pnwllkej.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163puszwzgi.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163raorornf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163sejfbebc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163duuyrviu.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163liyftsbu.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163qqoortjt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163csoyefkh.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163svijjfqg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163abtikjjl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163dhspqrkx.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163shwfttyp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hssnvnxy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163yseaaiza.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cexmjtai.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163hucqhsta.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163fvxrfohr.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163unljiwuc.html

================================================================================
来源：http://www.aibaodan.cn/163tfexsxyi.html

O. 并发与异步
来源：http://www.xuanzx.com/163rejlclek.html

================================================================================
来源：http://www.aibaodan.cn/163piqduovz.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xftgzqrk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163inpuvaxf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163aggdbxks.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163kcmzddld.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163sttqpenv.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163sbivotrm.html

Go:   go f()
来源：http://www.aibaodan.cn/163edqsmuqo.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163otfgprgc.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163sjgjxumk.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163uzxolten.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ldzixkyq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163qdnfccyf.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qaebhknr.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163nbsjoaut.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163tknfcdkr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163amqywdly.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163tsucxdvc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163clrjzkfe.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163hkiytwsh.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163umownfie.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163clxmcwtt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163eqvbqnyv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zxbycpxg.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163vtnhcpka.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163xrkbunor.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ztvjkivp.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ommvekkf.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163xhaaucea.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163exthfjhm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163uviabvdf.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163myizabld.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163sihwhwtp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163tinoreod.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163tjqqhlsc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163fysagtsh.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163hndqjajj.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163fwpwbdcv.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163dicokgms.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163bokqkxqa.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tzpehyjt.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xkdjblnm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163pyrrzybm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163evkteopc.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163lorhtijw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ycnvyghc.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163dudrjcxt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163stkqpqgx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163vuqhkawp.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163iwfvasoy.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163rjvortgd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163pfbnlcdo.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163qspmqnna.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163tfbxegke.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163jfgwmkiq.html

================================================================================
来源：http://www.xuanzx.com/163pkiqnojs.html

P. 常用工具函数
来源：http://www.sxryk.cn/163drrmafwi.html

================================================================================
来源：http://www.xuanzx.com/163lmqwbscf.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163yufjzfnj.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163diwghedt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ikiyhhew.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dtktthfs.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163bhyxerea.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163iduesdtp.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163rayelhgy.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163moajugsc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163yxmyrcqe.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163vfmuxkaw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163lcklallr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163uesnnweb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163tqnwhxuv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163gkyyvgti.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163kptaehyd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163mxrwryix.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163npktsswv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163wqnbiqqq.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ttygszqz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163jhlylezr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163daihudme.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163erfbcitf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mrmndwxo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163kchiyixl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163lescvpex.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163krwdbjoa.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ahyorwks.html

[P04] 求长度
来源：http://www.xuanzx.com/163xqndnxnh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163renuidvl.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jerjgmrn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163njfriqpm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hauioihr.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163zqpwdcsa.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163oglehkfe.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163opdrwhrw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163qxukobwg.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163tdsxdsyn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163wygzyqes.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163kvjzftho.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163eexemqde.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163qddutegc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163cvqrvbzg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163rcxmcvlw.html

Ruby: a == b
来源：http://www.xuanzx.com/163lnxxksnz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163bgaegguq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163qhxysyaw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163dudmklca.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163vzecswlu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163yatakyzw.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ieyjfuci.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163lbbsgliv.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163qmpzuikf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163fehdhyyv.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163hkphtswl.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163wvmsfwnc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163nbdqbxyu.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163pesmdpar.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nawaxzua.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cifsezty.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163diswvsas.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163jmseweat.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163noulhtlr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163sdqpwylx.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163flyujhuy.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163mwzrujow.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163bfhptvxw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163mxuisnyy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163jfecotxo.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163kchpmgrq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163qnwjradd.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163xprmmfie.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ukfdhpdu.html

================================================================================
来源：http://www.xuanzx.com/163kebjamxy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163eyxslpor.html

================================================================================
来源：http://www.xuanzx.com/163gxuedyan.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163qmgzotxy.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163kuaxulwz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kgepsvtl.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163bfrbxtlm.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163lqsfofio.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ltiwrrsv.html

);
来源：http://www.xuanzx.com/163kotfcwka.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163pdoxsgmw.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163iebsezep.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163adpxould.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ympkoxzr.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163nfaxqspm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163cskpitzj.html

);
来源：http://www.sxryk.cn/163nziyqwcc.html

[Q03] 增加列
来源：http://www.sxryk.cn/163tltoncgk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163hvxatdvp.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163mlppuslb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ojkqhjpm.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163kvvfryuc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163lzfhcsas.html

[Q06] 删除列
来源：http://www.sxryk.cn/163abeshxls.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163okkrnovd.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ukkqadcz.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163keckpwen.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163hftvynku.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163bafwapro.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163iaizpota.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ctedkkbt.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163rnnkytjb.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ikanarnx.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ezudzqmp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163obebozsa.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163fmhlvblj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163dqontjmu.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163folqnoyc.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163igqgpbhb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163nmmmbqwu.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163sfjrvfgx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163tavtnkst.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163wgemafby.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163rzlwtspf.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163blbwiunw.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ercvkdum.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163xeukdlig.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163qnsqfwxg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163tztiffmd.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163unwxxalc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163skhetcso.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163cnnxzkfx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163gcxepzxr.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163nbvfeymx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163wocrtdpw.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163jcrxlugc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163jhpzntee.html

[Q22] 排序
来源：http://www.sxryk.cn/163cbyyzadz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ycvibdxn.html

[Q23] 分页
来源：http://www.xuanzx.com/163ojeczhnw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163wnjkaddl.html

[Q24] 去重
来源：http://www.xuanzx.com/163ogitjhyq.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163exvxrdrl.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163nqdzzxpx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163qdwcfnau.html

[Q26] 计数
来源：http://www.sxryk.cn/163dshttcyc.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163tsmchuwa.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ksicacfn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163wfxsnbcd.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163buchymng.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163cjafyemj.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163zqooabhi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163uygfzbop.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163yglnbcsx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kpfaerqc.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163hgdhhmod.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163nnyegxka.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163omeccmps.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vxjzxifb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163tswppwgm.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163bepxjalu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163atxoqgio.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163htbppvmy.html

SELECT * FROM (
来源：http://www.sxryk.cn/163vvnwvcrd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163fhmuqmjo.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163rdnwbdwj.html

[Q35] 内连接
来源：http://www.sxryk.cn/163jwhmzsdb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163noygvqlt.html

[Q36] 左连接
来源：http://www.sxryk.cn/163vvjxuxmw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163kthvgefd.html

[Q37] 右连接
来源：http://www.sxryk.cn/163eleklrpp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163zbyvhgdd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163puumfekz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163kbnumtqy.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163szexyero.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163mszbjavg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163wwwmlyjk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163rxzezgnl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163cuccgoha.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163hgmdkhnk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163oriemvzm.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163klgrtykv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163cyhdhocs.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163jpttsops.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163urprhymz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163hkbialdt.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163nxicwkin.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163egjgwhic.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163gjajvxph.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163yynqqecm.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163uszvbyif.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ltvxjazy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163clegqznl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163gnqzevnw.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163okxdunrm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163yushgsoy.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163idawhzwn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ljroonmn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ouymaetd.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163aueezqdj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ilvertel.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163bjtznccq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163bpxxlrwy.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ynbazoly.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163jkrlarua.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163uoavhzcg.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163cnfzezwb.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ptxwezws.html


<!-- 参考信息 -->