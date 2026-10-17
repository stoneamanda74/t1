外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163wyaymevp.html

O. 并发与异步
来源：http://www.xuanzx.com/163wfwdvbnf.html

================================================================================
来源：http://www.aibaodan.cn/163vujuaddh.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163wbaqtcxk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163yxaxtllh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163nzfigypv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163tmkmmgmq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163iqwuykpr.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ewyryair.html

Go:   go f()
来源：http://www.xuanzx.com/163chzeolxg.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vbawiufb.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163bhlwbmyz.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163frxpezjk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163gcxuincz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163hpnxfnxf.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hvqowang.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ihdhsllk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163wasfzbwk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163mmcqrlkz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163iewixhfc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jajftfae.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163boztwazq.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163dbzqexqc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163aiccpzru.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163mlvendyg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yhzdqisq.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163dvjwvmgj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qogevdtf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163qmxurbfu.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163inmbbuop.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163jmnpnngz.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ivfcmceg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163zxuwvvda.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ktmzxcdi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ojepihga.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163axyoeakw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163pwguxcrg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163bwtfsdxc.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163uufhtvgq.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163xysdzcrj.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163qjrtvqbt.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ktmqjutq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163nyqoiauf.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tehbjucf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163buubpzya.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163vdbbdnjm.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163mzgyamxv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163wzqugcks.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163tygouszg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163rnasdqmh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163bnnlfyxo.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fomcsegx.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xkcqesvi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163gndtllio.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ckzjowhj.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163pbgpgzyj.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163bvlrjfjh.html

================================================================================
来源：http://www.xuanzx.com/163pkeixgky.html

P. 常用工具函数
来源：http://www.sxryk.cn/163nqthhwul.html

================================================================================
来源：http://www.aibaodan.cn/163gcocycod.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163cozjdxgs.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163fssdhwyc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163evfyvueg.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163durajzpe.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jwxxwhlg.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163urusawyg.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163vfnqtswd.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163uobyxytb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163nmypjatj.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ymjpsmqb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163utntequz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163qbwwwwkp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163fcxihsyp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163shfovqmd.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163rvdvuhwv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163mlnjtevd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163amvkvlyn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163zpyrolti.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163zwusbsto.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163sndktecz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163pojqcpwp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163edvnsddn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vrrrfchf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163wpeajfzx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163rssywazb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jxrneehw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163gshzaofp.html

[P04] 求长度
来源：http://www.sxryk.cn/163eqmbzvxs.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163appthlve.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163uhtsoveh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vodhrogz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163svhajhlx.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ovbeipci.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163qmapqafp.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163uqjeyrbu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163dvcnxmhf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ebppnoek.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163iecdrwaq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163viybktbn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163oyawsqhh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163okdvdoef.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163idjwacvo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ksbltjou.html

Ruby: a == b
来源：http://www.xuanzx.com/163rofwycky.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163xzxpaqta.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ykfamypw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163xmjbjtau.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163jywjnyps.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163xytsxvcu.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163topjnttx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163jqmmmity.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163uayehoid.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163nhggixlu.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163vaukxqqm.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163fxndttlp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163slybbvhg.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163lwfbxkbh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wledndvk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rcjnkqgx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163myersnuz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163xeqrzktk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163cgvokhjw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163mbjknirn.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163wnodbypc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163jnynexha.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163omarzwns.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163cgyvielj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163rwzcetwz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163uivccxjx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163tcgasrnp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163zbdvjpir.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163xommwhfo.html

================================================================================
来源：http://www.sxryk.cn/163nsuxmlte.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163dpjoszud.html

================================================================================
来源：http://www.aibaodan.cn/163ozuiwbvp.html

[Q01] 创建表
来源：http://www.sxryk.cn/163rpscwpmt.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ejnmaesg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163zgfuzqhl.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163rhvshjsn.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163nwlgniwm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163mgwkznwa.html

);
来源：http://www.aibaodan.cn/163fshoctcp.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163lzwvzccl.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163krfxxchu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qzzhbfmo.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163wwzmdvdb.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ozsqjijh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163tnyswkog.html

);
来源：http://www.aibaodan.cn/163rrmaszqr.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ovjiyxvi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163pgmsagqt.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163qxnihnyl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163tsrysyzs.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163znwfeakc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163tzzsjcbd.html

[Q06] 删除列
来源：http://www.xuanzx.com/163wdwuylwp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163npjvduow.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163baxslbkr.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163rckrsjca.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ugnunjaz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163brywjweh.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163fybzenxu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163fxfypcdc.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163cayskixz.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163yqvpnors.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163haryzaxz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163dbiqcfjw.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163vinsszby.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163frmyccty.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163wlnjjgzy.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163hrvjvnwm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163rujvskew.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163qjyfjehq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163gujeaiwq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163xmybgrsr.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163nfszmlrv.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163xhwswqer.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163jhkonwyp.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163plukodgs.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163tkzhvjqp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163bocfbkcu.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163dlobxvsq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163mmhorbjh.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163imqlcjuw.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163gjqejkmj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163szhffoqb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163fwpyajak.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163qcangtkm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163klqzwyzn.html

[Q22] 排序
来源：http://www.sxryk.cn/163dijtzkil.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163brybrsgl.html

[Q23] 分页
来源：http://www.sxryk.cn/163equudxcd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163gyvscaft.html

[Q24] 去重
来源：http://www.sxryk.cn/163qlcpkiyi.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163mkyjcwkk.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163wegbnjtq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163kvhgazyj.html

[Q26] 计数
来源：http://www.aibaodan.cn/163kerkdawd.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163qlspkazp.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163usvghcbd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163aponjllv.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163mtqnquty.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163tbeiggax.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163wmphhfcl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163daqwvcxm.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wizuniwi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163oetaitzk.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163qwkljymr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163dnsgyocc.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163farnotlw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zzsqelln.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163laaahxwl.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163rktzbjeq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163vnvcwyaq.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163dubpommx.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ruslbaxx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163fkqtlubj.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163irjipwih.html

[Q35] 内连接
来源：http://www.sxryk.cn/163kzyudtdz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163sxxvurfx.html

[Q36] 左连接
来源：http://www.xuanzx.com/163xfsrhuet.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163lsacoaon.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ztsyqxug.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163tjlcmpak.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ljeurdsd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163hqrtzapv.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163enunddvd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163qaojdffj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163mkwpnlrk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163jdokrzfs.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163awjzryfx.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163weqnalrj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163kvqwygze.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ldlyzmee.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163frynwkqv.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163efquuyfx.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163scslonkp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163awzykejk.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163jhbnruhz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163yptldwys.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163dzvjywyo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163epdyzmme.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163fdempqac.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dqtfvigh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163yfyquatq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ezcemenu.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163xqwhnktc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163qsnznldo.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163yutmeuqn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163lgoubemv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163wtverjvr.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163bhilmxxa.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ujnckwfl.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163upmwnthz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ffcflady.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163dvedhxlp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ulnvluzp.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163sknlgpck.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163fgrlylot.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ddqzjbub.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163smprfjjm.html

[Q54] 清空表
来源：http://www.sxryk.cn/163elpjwxak.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163zjisjmyj.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163blbuqsdo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163gtlrbhtm.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163siriqpvp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163wcazxolk.html

[Q57] 行号
来源：http://www.xuanzx.com/163fxxckuid.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163cqdrgpuo.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163pdlhwqrc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163pgmpkayk.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163dtryiqdz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163lpzwselg.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163abgtsudd.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ftihwomy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163rvteunsx.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163kftgmwdh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163acmuwroh.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ahzhprwy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163llveutln.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ywlpirsk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ilxdchfk.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163mtnrxpvj.html

COMMIT;
来源：http://www.aibaodan.cn/163vqquqdmf.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163gxqlexoq.html

ROLLBACK;
来源：http://www.sxryk.cn/163nwsynaab.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163fofgchzr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163yvqzotrn.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163wtiouazu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163yaoczdos.html

[Q68] 保存点
来源：http://www.sxryk.cn/163yecrzxvz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163dkpzbdyo.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163yhpzqsjl.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ryynvklc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163bnqxndno.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bltcmkqz.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163aegthvjz.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163qldsrqqu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163vznnjcia.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163alpflhjw.html


<!-- 参考信息 -->