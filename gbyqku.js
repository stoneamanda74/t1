外链999!wailian999！

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163hpgoylya.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163gxugkvev.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163invjigjs.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163wabocirl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163jvagfxai.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163mopzssty.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163rzyjafld.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163bfkgrngi.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163gawfqpul.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ibrymupr.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163yrbffuls.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163pxvoaeyf.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163xximsybf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ututqxyd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163icvnrqgo.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163jrtrynfe.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ecujgdig.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163mkcyrzup.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163bedjrmtm.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163iakahqji.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163vlyeokza.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163vmsgwanj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qshxtubl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163idpymhbn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lrxgpmjd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163euiyusgm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163osexliae.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nipzfqps.html

================================================================================
来源：http://www.xuanzx.com/163uknsiptc.html

O. 并发与异步
来源：http://www.aibaodan.cn/163xjyrkbmf.html

================================================================================
来源：http://www.xuanzx.com/163ewflzqxt.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163dteocwva.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163jxdmtzqi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163embcjstr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163jcalgkoq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hclopgof.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163eezctsej.html

Go:   go f()
来源：http://www.aibaodan.cn/163exiobnlq.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163dnmuandp.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ktrmsyrg.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163dmhbusui.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163nzwgdmgh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163wmljmzew.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163gzawjuxc.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163uoqmnuxm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163tjaicntu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163lyorodoh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ojtntaqd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163eyibedkl.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163rydgpcms.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163oniscosu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163zfdfnpky.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ejbokmdr.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ftaxrohf.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163kynszhsm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163pzxzbjti.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163mamtvslh.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ognqbdlu.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163pmbxynop.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ruqyxjqo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163airocziw.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qbklbzfw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163wxmeomgs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163nmizaspz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163lfilfhtc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163wppperwe.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163nuoipssz.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163eialajnf.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ctdqnrxg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163phdwtoed.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163kkamxjdi.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mpogkioj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163oatyavci.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163bluevztt.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163kjmkthob.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163qsaoygkf.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163cwoonuue.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163iedyiimh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163tswzxdvl.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163xpkgichf.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163leaphezz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163bikkcvkm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ixzilyqe.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163vsohmiys.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163axekjwcb.html

================================================================================
来源：http://www.xuanzx.com/163ukkxcdst.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163fzznudei.html

================================================================================
来源：http://www.xuanzx.com/163gmbjjagf.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163bqyvlula.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163rftksyut.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163lrgsgzzc.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163smexglzn.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163srpkiact.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163yojywhkp.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163xlxqxiry.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163rukzmqrc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163oayrwnzb.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163zxlglajs.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163xfpujcii.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163qaogmnrr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163seznsxnb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163gikkewju.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163wfnljbgt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163jrmmqyna.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163bynktkwg.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163nfjxkllw.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163zevpfvfw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163slczdnoq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163cflulbdw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163egituphu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163atfydgps.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163srzckutf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163gdrumtnk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163raapwbnf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163uhteyuxb.html

[P04] 求长度
来源：http://www.xuanzx.com/163polculqn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163vgpgspdd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163genohwob.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kdifgmca.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uyiimkda.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163mmesirdj.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163xpicwinq.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ddbqlpzd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163yaxzpbol.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163klkkprjb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163plvmgqdg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163nrekweip.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163fofnhxvb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ffkeprpk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163fnlegvxl.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163pwqzbmep.html

Ruby: a == b
来源：http://www.aibaodan.cn/163bbxzcmxx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163kjisalde.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ixtluxfq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163pzumuwff.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163gazezgxf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163cpwazpal.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163cxnjtijl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163bvhppbsf.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163nfwjfobm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163nfqlqxcf.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163yjuygoft.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163frpclkfn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163huxeeeqh.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ttoeddyi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rfenlxpi.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163epzccevp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163nmnrfvvi.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163gkczngey.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163upfplsze.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163kutotxcl.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163wsmsslqa.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163khjjaxma.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163oyqtlqbj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163jsxjtvpv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163atcmbjcs.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ljcdmnza.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163wybrxkiy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ibwpitxs.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163fmkljste.html

================================================================================
来源：http://www.sxryk.cn/163okewrquc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163yebrhgcb.html

================================================================================
来源：http://www.xuanzx.com/163hppjmoix.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163mhitgtma.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ulqtumud.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163uetoqcod.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163oijmqvit.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163qwosirdq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163wmbhesft.html

);
来源：http://www.sxryk.cn/163mdbqneqz.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163hgnmtkrn.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163bzoempse.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163godkegmq.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163wexpsygo.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163suapmixn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163chvijyrg.html

);
来源：http://www.aibaodan.cn/163pqqpoftf.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ewvejblb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163gzljmwmg.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163tcocyrbf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163kixrqqwc.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163cycfbanh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163cdqpjypv.html

[Q06] 删除列
来源：http://www.sxryk.cn/163mtznhwzw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ifiufgep.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163dvfcskwq.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163aesmnxus.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163opnbbarf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163nagahkvk.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163lwdhqbkj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163pdljhvhi.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xftroqcv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163qlyzxgwl.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vahjrrta.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163cslhfgqp.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163epxgmqve.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163vpgycquz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163iswyoesg.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163onmgfgek.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163yjklnxop.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163wfurgdmt.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163vrtnbwat.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163jnjzgnpu.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163xhzzwurk.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163bzhpppcy.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163doivsqii.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163rhavggir.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163wvipwnfa.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163lqfeddji.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163boqomqeo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163hotdxzzn.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163rkknuqxs.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163umbhampg.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163bssssbng.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163aknjizbn.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163fxnwdbtc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jdumxigv.html

[Q22] 排序
来源：http://www.xuanzx.com/163yobvvzcf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163wvswghnm.html

[Q23] 分页
来源：http://www.xuanzx.com/163yfmqmtud.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ghaohimw.html

[Q24] 去重
来源：http://www.sxryk.cn/163bclbaptp.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163whiyrkgt.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163fldcsnfe.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163gicbmjji.html

[Q26] 计数
来源：http://www.sxryk.cn/163rtaaztgw.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163nfwcrpdf.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163jxialoiv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163wrcalkzd.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163grskaakf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163cdnpqbpe.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163eiczjcvv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ffiydfme.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163qswgysav.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rfoqltiv.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163atqxqayj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163oonkmyxt.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ojuufsev.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tkgxsvms.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ymjgjnsg.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163chdmiuhn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163txjfdhxo.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163rfbxxwcz.html

SELECT * FROM (
来源：http://www.sxryk.cn/163bdcofkec.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163fzlehbnv.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163znepyqbj.html

[Q35] 内连接
来源：http://www.xuanzx.com/163xesxwcbw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163bqqugnof.html

[Q36] 左连接
来源：http://www.sxryk.cn/163qybelwkz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163kjswtjny.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vryfpmkw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163mgouvmux.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163pddevaip.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163tiixvszj.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163woucfwqv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163jspjpkct.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163dqrugwmc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163wocgcvse.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163adfdmrpk.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163gpsnhfvd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163legglzqw.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163qttpzojl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163khlstfzr.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163wymcqoga.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163tapifpdk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163qlyngdcf.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163whthwdns.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163hoolzchh.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163rqlnafql.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ltfxqmer.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163iposanuu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163bplswlsu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163fgubojgn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wxzdyboi.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163wwohrydl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163tdyuiodh.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163ahbmuqcy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163diavvczd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163kgghtqnn.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163mpxmcagp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163bqpjqelg.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163rriryzzw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163orsthqrn.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163bqeirvji.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163bydshyij.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ynpfektz.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163brterydy.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163zrsgwgfa.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163indkevvu.html

[Q54] 清空表
来源：http://www.sxryk.cn/163yxyrzvzh.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163yhujxuol.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163koelngeu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163rtzdkvtx.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163nvqqwlvy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163iebmghyp.html

[Q57] 行号
来源：http://www.xuanzx.com/163hsnncxue.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163eirfpdob.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xnvlvbfq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163jgzklduq.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163qolbjqmj.html


<!-- 参考信息 -->