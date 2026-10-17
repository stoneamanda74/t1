外链999!wailian999！

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163jsackrqz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163stogjfrt.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163pmtwoiju.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163soecimkh.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163rvuboxez.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163psofuhuc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lfbjdkfv.html

Java: // 手写递归
来源：http://www.sxryk.cn/163grigawlg.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163eeqbaell.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163oehalpgm.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163npetamuw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163cywjkhxg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163yohijvnk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163rkrdxfgw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163prlmijyq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zfqocfyn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wadgokhf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163jfhpuhcs.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163djmbpkjw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163hlkzmowt.html

================================================================================
来源：http://www.xuanzx.com/163aoviqjdc.html

O. 并发与异步
来源：http://www.xuanzx.com/163yprudkdq.html

================================================================================
来源：http://www.xuanzx.com/163yuahmfzv.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163emjeuqgp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163nhagqyet.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163nqguxfiq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163nbmlallo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163yqgbdkqk.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163lcolgouh.html

Go:   go f()
来源：http://www.xuanzx.com/163frbynxzb.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163fwiisjya.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163qdnomlcu.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163jxmvnrgz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163vscgslrr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163lxlarecg.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wycwaafq.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ezqegixi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163tupebfbi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163phesggqg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163qfeesucp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163yrbpslsu.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163zqrcayka.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163omglpdgt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163etvtaoka.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163zejhecmq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ucrxabpp.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163unroaxtz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163qualbrxj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gvonunhz.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163wrifqxwz.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163lwtnttnd.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163uphrywbz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163qnaneool.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qbypjnpf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163yxgvzbie.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163vfnotbbu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163dhwqmevj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163tnozngka.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ltnuzcfe.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163cbfuwcgg.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163exyofyow.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163deiaglsz.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163lykminph.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lfkhumbf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163imysssvq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163phloptvf.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163diedditj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163giosxckv.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163jclllkmj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163zupmfboc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ocrlpiml.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163elgceudp.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163rhfegqoc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163pusbeqpu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163qxwkdngr.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163wqjwbxds.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163pudzijnz.html

================================================================================
来源：http://www.xuanzx.com/163rlqcekot.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ifanwmjn.html

================================================================================
来源：http://www.xuanzx.com/163gfmtwamx.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163wzaqgskv.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163xoretvmk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163keajjdzq.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163pjompkgn.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dyawmlcp.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163qeuqcwwc.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163jivmwgpr.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163yogxwdua.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163vjbmggav.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163gwtiicar.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ldgqcaxe.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163wdvtwzoy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163infhtjoo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ospbjkhy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163twqjsdqm.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163bptdkofx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163nqfoprhj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163uwrgvxts.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163lqqbxnxn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ypwzgkwa.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ewrwqnqj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vbpgowrb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ujtkhmmc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ksgycauv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163gfhpzebc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163hktgeajo.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163bjwxplmr.html

[P04] 求长度
来源：http://www.sxryk.cn/163umxarzvz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163yxvwpxgv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ltqimrbv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163iabqxgyl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163qgpyexms.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163opmfeucv.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163yuwluhzi.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163zolvobob.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163hemxwqfq.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163rwiqvbch.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163yqqeyxdg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163jfueeoqa.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163mwawstcr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163acaqbjgv.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163drcznxpu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163smyeooeh.html

Ruby: a == b
来源：http://www.aibaodan.cn/163jjgsdfuo.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163jsddgxao.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163olcnzwvu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163xfncvcib.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163kieuyxwh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163mxffdvot.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163jtuizolz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163pfrqkryo.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163xvayjdtu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163uhsxkmqr.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ajsiqtuz.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163imtrnwki.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163vxecezvu.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163oxuoanuc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rzjlntvi.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fdtaqarx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163yntrqqxr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163dzehihsa.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163gdnudrii.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163yqookyod.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163qiqkqihk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163anzgkxgt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163tglhgbxd.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163cisbmuwr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163qieckbny.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163zrwxfqri.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ccvilfan.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163kgpgjrey.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163vnlskrji.html

================================================================================
来源：http://www.aibaodan.cn/163xekzgmri.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163kwjimnut.html

================================================================================
来源：http://www.sxryk.cn/163biduioqs.html

[Q01] 创建表
来源：http://www.sxryk.cn/163hjzobfbl.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163skpqwufd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163fvjiykcu.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163xwelervb.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163cqoddygb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163dkkmokgo.html

);
来源：http://www.aibaodan.cn/163zvstubbc.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163sliplfxo.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163sgeaffwq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wkqsfieg.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163xvuabbrz.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163zwqyhaek.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163nuntotps.html

);
来源：http://www.xuanzx.com/163jcgtklih.html

[Q03] 增加列
来源：http://www.xuanzx.com/163rfluqfju.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163zrygxlzt.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163rukxrhbu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ohvltfhq.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163kmqdnskq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ifmcrktt.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ncspbowj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163trhoerzg.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ogtnvtbp.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163gajgesyr.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163kxrzpgxt.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163lexxrltb.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163uhlycycj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ijanfcgm.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163tmfpjgwr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163sxiuwxzc.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163iwrorlmx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163wqnllfus.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163vyvduorc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163gfvmgsle.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163qbqopiny.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163rgfjxhry.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163rftuemoz.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ukmhwbdp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163muwlbmfy.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163zlrwvrxs.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163antaruar.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163plwymrxk.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163hwfqkmmp.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163pbtujpeb.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163tnjiskbg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163fucdcxkb.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163oezfdfgk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163xamqaydl.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ymxfzllp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163byesavye.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163hzydsgsj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163imwznwml.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163uleoftlg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163itobcbgx.html

[Q22] 排序
来源：http://www.aibaodan.cn/163fspayuqd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163kdqrnvws.html

[Q23] 分页
来源：http://www.aibaodan.cn/163dyuaxbpv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163zcsexsfp.html

[Q24] 去重
来源：http://www.sxryk.cn/163wqzksqdk.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163betyzapq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163tecdcvjb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163pbjnxaya.html

[Q26] 计数
来源：http://www.sxryk.cn/163pnhtotym.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163zlnyatue.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163whvwyaox.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163efogfibn.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163lmmliluj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163guwjpiaf.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163aphtgdvk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163zlguaniv.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ndpfilht.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tyblpyzr.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163fqldogux.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163hkklksxu.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ilmxubse.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ihjiykqq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ajkyvusf.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163utepmhrn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163qiazffts.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163anokormk.html

SELECT * FROM (
来源：http://www.sxryk.cn/163imejancq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163sprvbeeo.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163tnoafzaf.html

[Q35] 内连接
来源：http://www.sxryk.cn/163dhsjfsri.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cyxrbrgs.html

[Q36] 左连接
来源：http://www.sxryk.cn/163rlpcnjgk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xvogktiz.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ppsmxkqn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163uhsemwap.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163lcqzvxqx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163mkjxzmbt.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163pxrgtvlt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ynlxaapd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163cgmwxftx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163hdtiqjjs.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163flzksegn.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163thrpzzxu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163cnjfxyal.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163qlagvbxe.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163yawqgjam.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163sctsbwru.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163uvoimoto.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163lsagoyld.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zemveatr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163jbmtaufh.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163hctqetnz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163cwmzvhdp.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163mwunepsz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qzsrhwzm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163xgsyskzl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163nfopnrdn.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163xnianwwj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163hpoplwxz.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163kmvnggdr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163yeyoefau.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163zziowbrb.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163udfmxqlk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163wearkllz.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163efqzmzfu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ielaoevv.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163yhfzyrmv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163sbyoecxt.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163xjnribzm.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163hjanhzyx.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163wsurhwhe.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ozfpqxpp.html

[Q54] 清空表
来源：http://www.sxryk.cn/163tldpfppy.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163zgydvqsx.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163vpatyxvq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163lsdpqqqf.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163vdeewzga.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163qfghlytj.html

[Q57] 行号
来源：http://www.xuanzx.com/163bkvkrgee.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163lraczaxe.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163lwsfzeki.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ezohyvpg.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163kgajnvyx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163gwkqgtsj.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ajcebaqn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163hpidvsnv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163slmsefuw.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163keknnnyl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ttuzdvvj.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163oydemzao.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nkciayaf.html


<!-- 参考信息 -->