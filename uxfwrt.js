外链999!wailian999！

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163xfiylmcc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wzqmplvm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dzcamnuu.html

Java: // 手写递归
来源：http://www.sxryk.cn/163eqcyypah.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163hcofphnd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163odqnupxl.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ovxcleit.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ksyszxqd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163tyiohted.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163aygpbsel.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vfoaqnqs.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ltyhixko.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ksqhqkeo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163doilwcqp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163tthlijml.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xytlbybj.html

================================================================================
来源：http://www.aibaodan.cn/163sqdqeydy.html

O. 并发与异步
来源：http://www.xuanzx.com/163dxcnhtif.html

================================================================================
来源：http://www.xuanzx.com/163sokfmgff.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163clqkztlp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ywesdyoy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163yoffilew.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163hteekckb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zdwgudni.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163xsfqsmaj.html

Go:   go f()
来源：http://www.aibaodan.cn/163qftdmbvp.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ftpblujv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163rcmoxeao.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ozdtuqod.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163hmscsvll.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163yssyeeva.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ukpfefot.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163iutlifji.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163uaxpwdtu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163zrfeidft.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163pjiswcqi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vwtxdxvq.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163svcybwmh.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163dvfcirga.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163lftollja.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163wqvwllkv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jmrkdodt.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163hbykmzbp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163usqppyno.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163iuhqjgjf.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163cayyvgjz.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ijbnpqjy.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163slmpfmxf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163wbwcysuc.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163rtdfkgsp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163btlnwelx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163pcrrmxtd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163lxqruerv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163uhjqxzjm.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163gxrxgwsx.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163wqkudpwz.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163hydvfmiu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163bqwzoxih.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163rxlldahi.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163fbkbsuae.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163bnzsickc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163gkkkihzn.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163oqdstnvl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163qqtymukm.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163snsqekpz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163kptlrimb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163xamkksdk.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ndevgtab.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vqmanwyq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163xsziualw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163tcvwqmgs.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163tyxnqkap.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163mhvvmuax.html

================================================================================
来源：http://www.sxryk.cn/163adbyvdlg.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ioywzrrs.html

================================================================================
来源：http://www.aibaodan.cn/163yfdzygpc.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163yuumvsnj.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163mqijrkxr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163rlnuyiqf.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163fxzxwyyu.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163rwhmlruc.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163axcntobh.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163jghayzmj.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163lwxtjyud.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163wgruwelk.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163gbiikqwz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163chjxqkgi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163rbfvcvby.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163kebmsfas.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163pntnxknp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163bmvbvjsf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163pprwdvgm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ilcrbxfv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163mxvojuno.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ysnpapgv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163buiztrxi.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163wbqxppeh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ltkzijft.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tesraegb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163hackblrh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163inynuofj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163shjqrrrj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163kkakzahx.html

[P04] 求长度
来源：http://www.aibaodan.cn/163xmczbjpy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163uaymsbge.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zhfqdszt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gqdnqwpl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hfamuour.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163qpvjkjap.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163tbouwaxx.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163yjvdibki.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163czuupxiu.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163rtvtjtwb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163kxezsvnd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163pzfwhrmd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163liwqmanz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jbhsjwdq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163qnymjrel.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163vtyognyy.html

Ruby: a == b
来源：http://www.sxryk.cn/163yuhserel.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163kwfhcntq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163rnnncuso.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163zpjmbele.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163jwoaarcc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163nsjtincg.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163otylojry.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163hcmnwrej.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163lwgicnsv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163vohqoqih.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163tbtkjjon.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ypgroymb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163xajbqtzc.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163tbrhxwaz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mqlkzgwj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xnfilcex.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ltmrznzt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163glbjgrkm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163chjedqmd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163wtvrymjt.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163vydjiwhh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ngbapdsv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163enrjnfdn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163osoldzup.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ixqrcuml.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163parvdyxs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163jefjmmrt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163zdgbqtdp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163tahlcgok.html

================================================================================
来源：http://www.xuanzx.com/163oprspmqj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163vlnzysim.html

================================================================================
来源：http://www.aibaodan.cn/163yokomsri.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163vftfwprx.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163swoslugq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qfnvemvl.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163lbdnbonv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163zyeushmn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ksrxyqvt.html

);
来源：http://www.aibaodan.cn/163juvypnlr.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163azdbfnyg.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163dnbukrhw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jlunvscx.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163lpabnfxe.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163npgshvtk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163oiythxbr.html

);
来源：http://www.sxryk.cn/163pzydpoxt.html

[Q03] 增加列
来源：http://www.xuanzx.com/163yjjznuri.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163uvzeqqzw.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163axscyole.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163wqzgsyjy.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163cywarrpe.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163fnahjfdt.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163nrqpxhlw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163shflzxxw.html

[Q07] 删除表
来源：http://www.xuanzx.com/163sysruhyk.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163zdqbtezk.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163odhoxukp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163vdbcopww.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163oculfivx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163yidshtbl.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163vjfwbwgh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ilfdiosl.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163bxweuaep.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ithxcpiw.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163drqavtek.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163zoegadei.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163jjazpiho.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ipfkybyq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163gczjnrah.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163rupmzent.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163eacyefci.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163hhjnelll.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163rzchnwks.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ggpmskoj.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163pyuuxfaz.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163hufbnpuh.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163fpenjeuf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163hileipgv.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163dzznwtql.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163crwjkbuj.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163zkcffylg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163zkdwgklh.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163qxmptshl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163dtvlhrha.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163dzqyneyo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ivjxufxw.html

[Q22] 排序
来源：http://www.xuanzx.com/163xedvydqe.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jsorhhla.html

[Q23] 分页
来源：http://www.xuanzx.com/163zzrsxorc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163oaikiqbr.html

[Q24] 去重
来源：http://www.aibaodan.cn/163hurizkdt.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163cvulyosj.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163yjgeurnq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163coavxfdm.html

[Q26] 计数
来源：http://www.aibaodan.cn/163izewmcpn.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163tqpqfltu.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163qaejzwqd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163tkbwvmdh.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163dtqtkqpm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163cmqwufxg.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163melondtw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163rmwmpved.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163tmlmgerw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vflttiot.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ndpsxyzn.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163iahhojdi.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163mkvvotlv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fapeyeum.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163trulavpx.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163dpktveba.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163twvgxdiq.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163snuxpdzy.html

SELECT * FROM (
来源：http://www.xuanzx.com/163adywmjot.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163uhvktsec.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163pzrkaaby.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ttgxqlve.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fuzzjrec.html

[Q36] 左连接
来源：http://www.xuanzx.com/163atgnfcop.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zaumfrli.html

[Q37] 右连接
来源：http://www.xuanzx.com/163enxkispn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163deglztkw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163xmvlsend.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ndvycsni.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163vyfyvihm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163pcxskwno.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163fwrgezfc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163izuzdesv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163orhuzhgt.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163rpmrzzqt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163xnhwfsjy.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163zjjciomb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163hidorjwm.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163xorztzsy.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163wzfqqrcj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163cxrwwdyh.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ntuzhtgg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gptgzuto.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163qvjuljul.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163jaerlumh.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163rugdecec.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tqwgqcbs.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163dgfutzxn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dxtariit.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163yhxdceru.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163afjywkxn.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163iwwscsxx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163crsshams.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163mwpkznmw.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163hcveamaz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163kgfhdimb.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zwxtxpac.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163jzyrzwew.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163newascpl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163physoukx.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163efdjzxgp.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ljzblnom.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163xkhggglh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163tvaheqnd.html

[Q54] 清空表
来源：http://www.sxryk.cn/163mwxkrcnk.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163daqkdikq.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163puiisbrd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163wlxuibch.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163nrgiouvy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163hqeynjak.html

[Q57] 行号
来源：http://www.aibaodan.cn/163iklcdmup.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163yojsgbze.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xscsnhfs.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163vszwnyzx.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163msxuzxns.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163rlfgbfaf.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163xldewnev.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163phwvccsu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163hwquqgxp.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163whlyldnh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163azuyafdg.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163swpknpjp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163bvrwbvgv.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163tnzamoqv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163nwvcqpex.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163jnwrqria.html

COMMIT;
来源：http://www.sxryk.cn/163ueiaaomj.html


<!-- 参考信息 -->