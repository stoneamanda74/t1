外链999!wailian999！

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163wzoslfqn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163zhxezznc.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163qqzfllqb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163jkzjqcaj.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163bnuerazi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ttyshoej.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qbuxxdbi.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163rckrgykc.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163vgbngdwv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163yjoqobth.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163gzpxmmzq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163newzyaer.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163lxfmpvvd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jxdopjlw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163gdpymbja.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163iekuuoec.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163luxzslyg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ipdxfvpw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163cqtwkvts.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163debmjrqb.html

================================================================================
来源：http://www.aibaodan.cn/163jpebmhre.html

O. 并发与异步
来源：http://www.xuanzx.com/163fhierdoq.html

================================================================================
来源：http://www.sxryk.cn/163xoyanbuo.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163alimmoyw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163zgneylzh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163zhotfldk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163msdhvbok.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ralfgwxc.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163hotgefnk.html

Go:   go f()
来源：http://www.xuanzx.com/163pcefdbey.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163endjpges.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163vbtguxhr.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163dyfjuaaz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163nllqrqlk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163bgausfdq.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mbbmalos.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zswkrapo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163zlicxpbf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163lxbedqwn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163pefzzmuf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163cymwqmbq.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163oxxyhxrw.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163coseriel.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163vupppnqd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163gnxiqglk.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ooldbnph.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163gpjehaov.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163yuzqkswr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ubsgthsc.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163oonidvyu.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163rebvsnef.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163fqtpmwzl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163mnbkvyyc.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163offyonhn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ltqrtsqg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163anlpusgo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163vcmswfvd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163jrsfwhty.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ggexshvc.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ohotzmxo.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163icdjecgl.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163oajmyoyz.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hvssohau.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cngytpcm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163apvdprvu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163bevnaszg.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163lhncjjwg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ueavebmt.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ffafzeih.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163rvbolakg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163yzvavtbd.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163cmsleqqd.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qahuazit.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163vtxwgczy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ppyvlpjc.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ofqaynca.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ubidfhzm.html

================================================================================
来源：http://www.aibaodan.cn/163shwtoolx.html

P. 常用工具函数
来源：http://www.sxryk.cn/163nugykpht.html

================================================================================
来源：http://www.aibaodan.cn/163sygjcpzf.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163dnretnas.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163tcjizwhc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163qbneqtha.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163snmdgfxh.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163hxasukmn.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163fvlnhxye.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163dbkkrqyi.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ttjoazaz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163wkkdasos.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163sntfniej.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163pdzepuuj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163jjcnbarx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ynbsbygd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163bpizcorg.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163fcshwjhd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163hnnzwffe.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163shltecyv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163zkkkbogl.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163hopibvoc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163sahgqooe.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163uhqubyxw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163sznpohgh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163afuidupu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163dwnvldwp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163loijjuak.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163vadwolys.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163eqpmqhtg.html

[P04] 求长度
来源：http://www.sxryk.cn/163jvycjdkn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163olumuppz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163whdvrkyx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ulbleykv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ikkuvdvj.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163rnuvbczg.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163mxfjncjj.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ygvudelk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163achygrmw.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163wnkhkkvc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163kxmpgzga.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163qlcxzzcp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163zgshjsfl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163qbqngahn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ofydgstu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163pylkzckk.html

Ruby: a == b
来源：http://www.sxryk.cn/163dgjyuekl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163rfyschzb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163iyqkgxkf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ldqvbvms.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163bwwpdlcj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163yewekkux.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163kaowptyk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163hdmromwt.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163qbnwfajc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163qapxqkrz.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163qitmtdrd.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163nejbcpmm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163nywgtqum.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163rlnbzpli.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163voxfjbnj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ldulepaz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163cnjooauj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163inwbwhzl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163pepgffos.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163mbcgpdua.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163pibizdrx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163gioinxvn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163wvvcxlkj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163brjwxpau.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163cmfhxrlq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163rkpqzajs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ficnfcyj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163jstzxfsn.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163qzttrxyo.html

================================================================================
来源：http://www.aibaodan.cn/163ctqysxgh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163dskodntb.html

================================================================================
来源：http://www.xuanzx.com/163eotcsoew.html

[Q01] 创建表
来源：http://www.xuanzx.com/163elxuwggd.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163zmybiqrh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163artuksai.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163sfsgowjz.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163zebyplfs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163lkhatkmz.html

);
来源：http://www.aibaodan.cn/163imwownln.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163zaagxepq.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163skeclmgu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163fhwbfqrf.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ozijmwdk.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163clwngxii.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163hnfuhrxy.html

);
来源：http://www.sxryk.cn/163jclomrou.html

[Q03] 增加列
来源：http://www.xuanzx.com/163zakdnyju.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163cinztddm.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163xfaghvps.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163azgbkkkg.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163jjpfknvk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163myvfxasl.html

[Q06] 删除列
来源：http://www.xuanzx.com/163hyrabexp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163fshoewwd.html

[Q07] 删除表
来源：http://www.sxryk.cn/163bahthdzy.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163syvixhfp.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163gwanvtou.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ftknervo.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163unkkasud.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163efmoxrww.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163tfjdmigt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163tmpzpnnk.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163tyigwluh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163yzkbjdev.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163amkpjgxp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163mcifeyxz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ahofdopd.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163vbfuzqvz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163kmtgfmzf.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163xyqjirme.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163hercckpn.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163pgmkpplv.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163vebthdvt.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163obifgxvj.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163elnxwhxd.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163mbzdexbv.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163bgmmhokt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163kpwqqjqu.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163lthethdu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163lfluzyqd.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163hzbvtwnn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163vxaeahbw.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163fgyufatr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163jfkprjie.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163mitdmndt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163seerbjpr.html

[Q22] 排序
来源：http://www.xuanzx.com/163mllupthg.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163mmmoibxi.html

[Q23] 分页
来源：http://www.xuanzx.com/163lnwftsaq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163hizidrjn.html

[Q24] 去重
来源：http://www.sxryk.cn/163eismucmk.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163sjqordxe.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163spweorwt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163szkgjzca.html

[Q26] 计数
来源：http://www.sxryk.cn/163zotwbjoi.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163xyivpdhq.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163gapwoczc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163kyigquih.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163yuzfblbg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ooddortw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163kvggeoys.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163adewsqrd.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163smdgahwt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vbernjof.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163fvkxhmzp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163fqrsaxvq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163muqsnwrd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wqsgwybu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163hwlqhkol.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163hhyckhij.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163lyjmkvbi.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163wvyjdygl.html

SELECT * FROM (
来源：http://www.sxryk.cn/163sqilpywv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163lhhnmwwk.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163adyvycru.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163xftgpore.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nbtvatsq.html

[Q36] 左连接
来源：http://www.xuanzx.com/163kujwkfdt.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gqipccwh.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163jbnsvcqm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163enmunygm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ylpzsonp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163rsfufrus.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163eokfjrmb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163bokvdozj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163lzludhzc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163abacppim.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rhwlblbz.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ixgnnrap.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163czyrpjyo.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163jrgynvjx.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163yywaqvyx.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163hueerdpm.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163stungrlk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163bpnxocmr.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163weigrufh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163ihnijsvm.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163kuqfydem.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163scipassq.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163zlyiygwt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163emeikomj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ibfysgxr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163yitobxty.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163jzqhlmwb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163qtuzifpm.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163rgebcxqa.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163srgdfnke.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163kcmccvsi.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163fqiknbdw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163vrcbzvia.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163jwafvtmd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163mcyopzwi.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163atcxqsvz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163voywximv.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163gkwnereo.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163lhdbryye.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163baksbwaf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163vudoomqb.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163myltszae.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163qzblxpjv.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163nhufaqau.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ndtleczj.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163yqhfywkk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163aelryvex.html

[Q57] 行号
来源：http://www.sxryk.cn/163ezdauvsb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163xgkrplpp.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163fsptcidw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ufjgkoop.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163pjeutjwr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163roqejjjb.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163bybkdjwx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163wjwmnzyg.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163qnwtihqf.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163amnqafto.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163dzkcsknp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163haghpbcx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kfjjxtna.html


<!-- 参考信息 -->