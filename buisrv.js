外链999!wailian999！

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163gxgoldfc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163dxinewyl.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163baxdqgks.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163unfiqkod.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ouhygtyc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ufchqhvg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nexufzuy.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163gbkchpky.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163yfcecjkr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163wbgolhyj.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163jjsltxvf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163evpuwzme.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163wnjfkgox.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qgbajgbj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163peoyunva.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163davfbwqj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163gkcuxunk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qnvaslcb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163lzvbmvkm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hgznfqbu.html

================================================================================
来源：http://www.xuanzx.com/163yeiborco.html

O. 并发与异步
来源：http://www.aibaodan.cn/163eackqxjo.html

================================================================================
来源：http://www.sxryk.cn/163hghmeprp.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163gbvxktwu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163zvpcqpjx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163agzrsqoc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163hxwmpmlm.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163cbyntrgl.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163nbojgxcp.html

Go:   go f()
来源：http://www.aibaodan.cn/163xkjiqchq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163aiawetvm.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163nidqxpfo.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163knpuvoya.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163tcuflbdq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ymkvrwzm.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tuigbmgh.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hbfddtwm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163hsallrld.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163gpariycw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163xxxlaoag.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jhgmhsfg.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163xwmgxpkr.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163efhoroxf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163xpejrjyf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ufvikwig.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163sucjmxwd.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163pvlwwyez.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163vxejimup.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wilmrdmz.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163lwudjllr.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163wpayjnjy.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163hrmdqrzz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163brrcgghj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163oohlcpjs.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ukmdtwjr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163cfeoiktw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163oryvqqoo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163vynxipyq.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163kpgvtrdv.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163wrwwwitg.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163eziwlzbe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163rmeuidfa.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xzelgazn.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163nljgfodl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163rbugpouq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163vlbshlex.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163awrcarpx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163btwthrsi.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163hxudjubz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163utbxzhtb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163tldyiven.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qhactjle.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gefimhqn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163smyggovn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ptlctrgk.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163nstykjww.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163sgiicqwr.html

================================================================================
来源：http://www.aibaodan.cn/163zizlddnv.html

P. 常用工具函数
来源：http://www.xuanzx.com/163vkrtgksc.html

================================================================================
来源：http://www.sxryk.cn/163fnqkpkje.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ewphxulo.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ncbfdgix.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163koslzsaa.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163cgpnlmwl.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163mzsxgfby.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163qljzcnsx.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163lejttias.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163flwaapit.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163cfmxddej.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163diddmmnf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163wjyrchbx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163fqcazyzt.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163besfcaej.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ticvfyln.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163mytjbatd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ssrympea.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163lbwaanax.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163nwhqbfzg.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163gujfdwmo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163pwaezttg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163cmygzoba.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jcrrxtgt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163cgxvcbxm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163uexiomyl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163pwrrsiaz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163vbfvipqm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163aggzmiyz.html

[P04] 求长度
来源：http://www.xuanzx.com/163enfpycvn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163gdaapkpo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hhthfluc.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163yqorcfks.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163hbhhwnmd.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163joomxcep.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163lhxbaumh.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163tzrokuqa.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ordsjuqc.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163akerksux.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163jzqncrex.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163nhascxwq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163spgtiugh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163rofwwzdg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163zqyijdxm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163clibnmyy.html

Ruby: a == b
来源：http://www.xuanzx.com/163hbsqmkbw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ispaqhgt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163hsowuuju.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163jpvwlzyb.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163skifiluv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163xkmzuwxh.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163msxmgbiz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163cncaccns.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163lffixeom.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163mxajvbxe.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163iebafurq.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163capecxzn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163nprincqf.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163hxvoijau.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163coocmrdk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hsqdmbdw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163wcdoleza.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163tknnfree.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163rcfuchin.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163zpiulwyz.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163qxpgdrau.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163opyliupu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163jvbgyahz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ppbllskq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163hrvcpujk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163whaqqznd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163cqagxhbj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ipluoghu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163iywzpwjm.html

================================================================================
来源：http://www.sxryk.cn/163zgdnadic.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163bfqohyru.html

================================================================================
来源：http://www.sxryk.cn/163yygdbzve.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163snxoavof.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163uvperxfb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xlosqcom.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163rbycqrkx.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163mijddfwn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163fhnlqoil.html

);
来源：http://www.sxryk.cn/163ppjhekpm.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163tnesejgr.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163odrsthgj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163njfmhhth.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163gmjdtalz.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163hiqmckad.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163aassmlxv.html

);
来源：http://www.xuanzx.com/163wnqsnoup.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ocadlhfm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163chstgzru.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163skqtwdsi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163okylgire.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163wzreznic.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ovmjpbgb.html

[Q06] 删除列
来源：http://www.sxryk.cn/163vaspclaz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163gzvrvbgw.html

[Q07] 删除表
来源：http://www.sxryk.cn/163qezlhnuo.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163oooqnhwd.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163wajcozny.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163zarmgvye.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163famxrbvo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163foucoins.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163vraisghm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163sexlbajz.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163pqkgxjxl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163hcspcons.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163uxbwaixe.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163wiirdktd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163vgzmwnrg.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163qsbfyhvc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wtofusoj.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163jvbyjuuv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163etsvfiof.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163axtmcndu.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163kfjcqwzr.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163nivgcrxt.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163fkrxcege.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163jdzawupx.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163dtpjrjbj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163qbawbysd.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163proxazjf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163nenspgru.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163vzgehchv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163seftyezf.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163pxxquoqt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163tubyztck.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163fpuuwcmr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163zoryopbw.html

[Q22] 排序
来源：http://www.aibaodan.cn/163ndszfqad.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163zatfhees.html

[Q23] 分页
来源：http://www.aibaodan.cn/163tdzkcnib.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163unetohuz.html

[Q24] 去重
来源：http://www.sxryk.cn/163hqflogyl.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ufchqgpb.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ssjognlx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163enpiektn.html

[Q26] 计数
来源：http://www.aibaodan.cn/163colspmzd.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ksililst.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163omqiprxx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163gozqrkli.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163fjiudqgj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163gxnlzeju.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163tnlatdnl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163dwbsxbyv.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163hljrbelm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nxlshspl.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163tjjflepy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163odargfyn.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163hkbrkicf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qsaprmyh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163clqxcool.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163affmjlaw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163rvhvhrqr.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163dwnzpdow.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163yvtmgvdm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163mlpcgpqq.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163djpokkls.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ztkrzfmo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xwvrckdf.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163oohjehps.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163yeixerfq.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ijkiczea.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163wrvlrpvt.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163jjwxzlnd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163uahpuhqv.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163xsekesoh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163eddqqsti.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163bxbkohgz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163cfzjeicd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163uycshjhg.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hpbqexqx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163jkdmdxcy.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163zuuyblec.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163faajylly.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163bmqujxzx.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163lhwovyua.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163wrptbtaa.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163mvxeablp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163mqamgngy.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163elyzpsit.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163jvyaavnt.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163vdwnknzc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163eeiobtpy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163drlfikff.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tbksioqq.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163fszeebnk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163inhlafql.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163sxvqhedx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163pcvqrkfn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163uysaobab.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163bthbdaue.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qqpfcdkr.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163drzdorbj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163tgvhtvbe.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163irqouako.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163wlbyplkq.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163lvccldeq.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163cjqlawem.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ffmicffi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163vqspikyp.html

[Q54] 清空表
来源：http://www.sxryk.cn/163jsjuzcua.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163kiosmxda.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163jbnoueoc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163vjkwylxo.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163hkaddkhd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163juakoizb.html

[Q57] 行号
来源：http://www.aibaodan.cn/163mmoxelvp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ervnhcrj.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163hxbxqwjr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163xuyszntc.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163fplhgrzx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163gofqjidi.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163eyfqgxqy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163xerwtiio.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163pvrtduzh.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ociakhua.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163qnfyygwu.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163cskqgzvr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rbttoaul.html


<!-- 参考信息 -->