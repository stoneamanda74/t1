外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163tdaupzad.html

O. 并发与异步
来源：http://www.sxryk.cn/163knwhreon.html

================================================================================
来源：http://www.xuanzx.com/163pgfipdrq.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163qvljlysz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163rkwcicyz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163npdjxohe.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163odbfgwso.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bsutwkqf.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163dcalprzx.html

Go:   go f()
来源：http://www.xuanzx.com/163yjxzeebg.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163yfnwncjq.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163jyyazgep.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163osfpqick.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163bncbvyia.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163obutpxji.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lfivbblf.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163riooodzd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163enszgegm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163rphlqage.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163svklwayv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163fubzzvpw.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ehoajydm.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163eyfxbvug.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163mwhzhhbz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163jfqwwtze.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163adotoeyr.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163zezdtohi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163bhbbjwnq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163eqmyamkv.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163wghuibyg.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ocmdxeol.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163szjhpxkv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ockguxzn.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163mgqpcozr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163tqkxaspp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163nrhofshe.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163huzelhok.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163oxstchaf.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163htqxoecq.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163qnavjpnj.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163wnjtvyfm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163mptqqlvn.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ybqfopwc.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gioiymos.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163voctarpf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163cpxckosg.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163adnjyxbb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ahqwybfl.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163acqbnxif.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163tldjosdz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xdzdgsfb.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xjfxnnoi.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163cedawmvd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163quzyfvtq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ryqyyeyo.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163iunyznab.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163jscslvcl.html

================================================================================
来源：http://www.xuanzx.com/163iwmwtfzq.html

P. 常用工具函数
来源：http://www.sxryk.cn/163qtcbafxi.html

================================================================================
来源：http://www.sxryk.cn/163iitxzngr.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163xinckews.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163nkoyrvbc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163pnlohahq.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163fzzazkhq.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163trlojzlc.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163huwdfhjt.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qlzedmtp.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163srldirtc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163czhubqaa.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163hkbtxbev.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163hqejmzfc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163amoamnho.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163wvtbmfkz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163sugajzzs.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163azcivboc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ufbbiuzv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163tnbypzaz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ghwbruqb.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163akgoqdvl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ateskytv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ysyatsri.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rnujbftz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rpfpyows.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163wyvcipoz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ttuxfpuz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163vkyopaym.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ciwqaedp.html

[P04] 求长度
来源：http://www.sxryk.cn/163vtgrqhvu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163yppssely.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tncqgnlj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vvqnthzo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vpuqzhge.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163xapbwliu.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163gchusggd.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163mhurfvgz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163qzciwtzh.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163zjjpshwy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163konyevfr.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163kycyrobj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163iftznogj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163edjyqprr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163dteydtgy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163syhdkrqy.html

Ruby: a == b
来源：http://www.sxryk.cn/163hmdptebs.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163hniljcax.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163pfosutfr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163bieyqyqq.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ejesnyvv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163fzsifscz.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163byhddoga.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163yuevbljy.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hgevyzky.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163hldpnsls.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163obtkedmw.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163vuwfdmfr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163amptgwol.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163qsqihgzj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mhiotnrt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163zvgaxazm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163lbdwoead.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163zgafsbwy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163yrqucnlx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163oclayfzp.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163xzxrepxd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163csuustxp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163trkmxleb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163mbjabmbo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163pnkecjrj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ioqeflvm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163qxegxgny.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163sswzhpgn.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163xuzrogab.html

================================================================================
来源：http://www.aibaodan.cn/163sdezbfpj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163twldxsgm.html

================================================================================
来源：http://www.sxryk.cn/163atuqtvgq.html

[Q01] 创建表
来源：http://www.sxryk.cn/163geydqkex.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163skmyomve.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qemwwkdg.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163sutesaqt.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163qkkwqgip.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ybfwdpjc.html

);
来源：http://www.sxryk.cn/163xkubizxq.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163mxtvzpdr.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163cazfpqpd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163pdvauwqx.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163axkukjpl.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ntcfikjp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163lfqnjeyr.html

);
来源：http://www.sxryk.cn/163yevuclrn.html

[Q03] 增加列
来源：http://www.xuanzx.com/163pkyedvqf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163iiijaoqi.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163tjyjtdne.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ineixtug.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163njodxphd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163dqzkvget.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ljstnvjm.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163abrbdrdd.html

[Q07] 删除表
来源：http://www.sxryk.cn/163iemhskya.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163dacrbdar.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163nzuanxfv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ezsqqsbf.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163wxoiqfmx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ipclfssy.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163chvxeerd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163vucbguiq.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163jpabdsoy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163nndaifpu.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163xgicfaja.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163hsvevmir.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163zbqoaugx.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163iobsehyo.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163czaerctc.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163pagzwkim.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163xhnyfxmc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163oatgcbkm.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163xmgcqhra.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ccvwpaxx.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163jvtzhcbd.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163erbetdge.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163gehuuvqs.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ajxzwdwu.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ibwbikxk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163nqerwrlt.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163pwcnhvlw.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163pjbghcbj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163gohkkvzg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163rdymsddl.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163xbjjgbxf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163jgxezmxd.html

[Q22] 排序
来源：http://www.xuanzx.com/163vxpmrput.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163sracomab.html

[Q23] 分页
来源：http://www.sxryk.cn/163bkfqmabn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163lusvpqmy.html

[Q24] 去重
来源：http://www.xuanzx.com/163atgfduik.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163crwnuiof.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163gbsckzkc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ncmdojjg.html

[Q26] 计数
来源：http://www.xuanzx.com/163ijsvzutj.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163uewjpzff.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163wukhokvc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163oouqevwq.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163mfwsmfet.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163vqkhewel.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163mtzekszh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163zxcoedue.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wjuywiua.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vudptzxh.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163floltmhs.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163kznypsdw.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163oyfqswuw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hvoarejm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163kwsvicgy.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163xrloftsk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163oojnrwbo.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163nepbrtzp.html

SELECT * FROM (
来源：http://www.xuanzx.com/163qvibqeao.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163pztnimnm.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163wabjkhej.html

[Q35] 内连接
来源：http://www.sxryk.cn/163jmoqksup.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vjamfdoo.html

[Q36] 左连接
来源：http://www.sxryk.cn/163paogoalv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163njbuwdoo.html

[Q37] 右连接
来源：http://www.xuanzx.com/163qjwjthzq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163axggeoua.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ohnqlqmu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163zsspladm.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163mnjmxxem.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163upivmjda.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ovilqani.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163jjmgouan.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163wlyvplgd.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163dwprsrmx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163pkoklbdd.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mkefcger.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163qwwufuwm.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163obdqjlmx.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163phokrxbw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ococdhbw.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163gfizqkhy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163wxnlgsub.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163cmabtxms.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163mdufatvt.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163nrcghqik.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ylkqvvca.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163eztqtzhm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ccvbdzor.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163zvrpzyby.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163nxrmkryy.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163lhitoifx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163lfcroinn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163rfcdvbis.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163imzqrlry.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163gnhnvrqx.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ocznbood.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163nkbgvuvf.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163isbhhxns.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163fvdbozup.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163dbufrkjq.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163iqkoqemy.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163nninwprt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163trocjhkn.html

[Q54] 清空表
来源：http://www.xuanzx.com/163upxxfavh.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163epsosjcv.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163wcjwghxf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163kzpqvogd.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163iltcwhrn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163iwianfjh.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ufqlyapf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163rsvxxrtv.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163fwqajlty.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163elqnuvsu.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163bfhreanp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163xbfckwdx.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163aqxijwzm.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163hzknbkwd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163byyzawit.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jrtmdjmd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163rvlxcrbl.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163tjrazyly.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gaunpsvk.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163huyzodmr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163hsxmgmcy.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163cwrophob.html

COMMIT;
来源：http://www.aibaodan.cn/163rcwrjzlz.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163mnkvuirn.html

ROLLBACK;
来源：http://www.sxryk.cn/163obccujsh.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163vzzvftng.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ezajcigq.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163qrrrzzco.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163aesneuqz.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163lydksyrw.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163zemzbswi.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163rxtvxhwa.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163nzxsftda.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163mrjasgbm.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163nmrcsjws.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163hnnwupfo.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163cvmhbsjz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163tsueaohz.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163jiyyfsvi.html


<!-- 参考信息 -->