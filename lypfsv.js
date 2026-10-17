外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163ahhwyblb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163dnnzmwdp.html

================================================================================
来源：http://www.aibaodan.cn/163rwtympwa.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163cvxasznt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163xksejssn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163mlsruwfe.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163nzjbdbfv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163gzotoccc.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163jrvmsijt.html

Go:   go f()
来源：http://www.sxryk.cn/163ligiztxo.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163sjukxksu.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163gifidrki.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163oiukmord.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163boxpwpkq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wayyxsjx.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163yrywlkwx.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tkxznjag.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163wvuugont.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163tojhoyea.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163gsrdbiaz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163mupuvoqi.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ojsxtaqt.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ulrawmsc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163geajisqp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163cparpxfq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163opaamcmm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163xxitlpeg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163tlxekvfl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163qrflxfzb.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163pzjczebu.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163bhwohedq.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bguurmho.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ztciarmz.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163yoacgcjy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163oeorupml.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ctcsamvi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163bwecqcfi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ejobbxqn.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163mxwgqyke.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163xzwsiwqa.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163tzbltlat.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163dxjiktbz.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vlgecice.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163yleadofx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163fyahypfk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ptcicfue.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163cgvpqssy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163nfhjpbdc.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163kixmwxtk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hjaplain.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163gczthrfv.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fvjuncuw.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163uwmpqmxc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163thyajnex.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163tbhntxva.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163xqdakhic.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163kxhvdhco.html

================================================================================
来源：http://www.xuanzx.com/163ibqfvkdg.html

P. 常用工具函数
来源：http://www.sxryk.cn/163kjjaukvd.html

================================================================================
来源：http://www.aibaodan.cn/163bmjejund.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163jilswknp.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163imnkmgog.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163pgfuoncp.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163scwagsny.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dbceiclw.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163uzoofzut.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163cmjkjfrl.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163wvyhyleh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163pimakdzc.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163gwcbbkaq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163rkezafcz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163wjqyjfnm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163thflbojc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163zofbdmlj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163xivcgrah.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163nxowvpmo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163uidjydhb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163khcxdxip.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163zyllhiro.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163etgmlrld.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163kwdriecb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wzulzlbc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163avwzqjtx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163bobvapvd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163yutqfpfv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163vskeajxo.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163wxczvqkq.html

[P04] 求长度
来源：http://www.aibaodan.cn/163aukpabmb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163waskqmqo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163edhjguxd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163yfwxajnk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gofoebly.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163moyzfxhx.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163wpkzmvkq.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163qiopskqf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163xiibngbu.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163qvohztrq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163elbrehvy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163tqnzalyk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ghjpwxkq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163eencbhnw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163xwjyqrls.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163waycfjwi.html

Ruby: a == b
来源：http://www.aibaodan.cn/163swqfncim.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163sqhxtxtj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163crtshjwr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ehcncdrb.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ahjbqioz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163oldhllmg.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163rvzoktmj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163twszvehj.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163fnyvqqld.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163obboqupw.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163koacqrzw.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163irhainsq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163bfhbahqx.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163goymyinj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163frlhaslb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rfukvhlx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163crhkipps.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163bcgiffer.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163dvirgskp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163pieebqyz.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163yzzmchrc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163saubirsz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163jlnkimho.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163lhvpxrwm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163xzhgidki.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163khgwhgfw.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163vatapdgw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163sfoogzya.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163dkfplllm.html

================================================================================
来源：http://www.aibaodan.cn/163jnrmwxro.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ibgrfjyh.html

================================================================================
来源：http://www.aibaodan.cn/163yvvthzjp.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163fabzahwt.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163untqweih.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lpcczgzj.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163prpybrig.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163jezktnlq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rgbaqmlk.html

);
来源：http://www.xuanzx.com/163pefegqov.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163lidhqece.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163gcphrard.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kwxogkdz.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163nhdalhwp.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163pldbzefo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163anhwbktr.html

);
来源：http://www.aibaodan.cn/163jmeluvph.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ovwquoim.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163jzkjzpvt.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163vwckcqkq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163koesrscv.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163oitcgsav.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163foucimpl.html

[Q06] 删除列
来源：http://www.xuanzx.com/163qilkgcya.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163fyegzlsf.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163pkmevyup.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163lbpphhsk.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qadiaomv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163lahdfuox.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163bhnjerty.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163nlqvdkyk.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ppgfefye.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163hzcmgxik.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163fzughvew.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163chmimodt.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163drhklmbf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163hqbgcqpx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163awdgdbtp.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163pizkulzb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163srgchuaq.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163uunvicnp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163itgfvlsl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163bxvpqvxa.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163egwkjwck.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163vuzeojix.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163xjrcjoul.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163zonvlukl.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163tmatqzsa.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163bqxpucuj.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163xfhpqwrp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tuerxiui.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163axvqnawd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163rbytguiu.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163llwzglzm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163qmjmpzqk.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163pbjuekgc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163upslpgtz.html

[Q22] 排序
来源：http://www.sxryk.cn/163shnyupyo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163bdvhyina.html

[Q23] 分页
来源：http://www.xuanzx.com/163mztuqrwh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163dxaoigbd.html

[Q24] 去重
来源：http://www.sxryk.cn/163ngfcgfkj.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163sjzgbcya.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163xzcbccee.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163faixrnko.html

[Q26] 计数
来源：http://www.sxryk.cn/163bnfjpgcn.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ldqkmwqv.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163iytyperd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163sygtldyd.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163rdnjxfkq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ddrrhgfw.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163lqgbbhgi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163kupxcasb.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163gjhfdoyf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163girtotvr.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ysvjckyf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hgiixvao.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163hyqxigei.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163opcrvzqc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163tshclaws.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163pcveawht.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163gfazlixh.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163pmoghcev.html

SELECT * FROM (
来源：http://www.sxryk.cn/163bdjgjysk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163amcujnjt.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163sldwvszs.html

[Q35] 内连接
来源：http://www.xuanzx.com/163bsmpxclw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163mrjuwvjf.html

[Q36] 左连接
来源：http://www.sxryk.cn/163gkuxxlfd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163vfowtzte.html

[Q37] 右连接
来源：http://www.xuanzx.com/163wyvoyxja.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163iogbxvch.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163cxzxczbk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zjoxfidb.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163gykqpafj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ylqcdhrc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163egmkvzcl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163wryhsryj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163otitvnrw.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163mwluqhbf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163fwnskttn.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163yepbfsvj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163dyaxbbcz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163flaydgod.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163lnuadexh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ghggrtxv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163jxwhzoxq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163lvsgvcuf.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163zybjxmgh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163nqrrbued.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163rdbsyayv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163bzhojhyi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163iudooakg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163cfzaubms.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163iqfmszyv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163wtvfifdk.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163nujtapgt.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163tedppvok.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163pchcqulp.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163pxfifmfi.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163skylxlvc.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163poylmxrn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163zumbkwfz.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163qycpyqed.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163zaroizwp.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hmnjahtn.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hplbjvfj.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163hquzodzk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163qlecxajp.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163fzcepgrz.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163eynppjdl.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163rnisjrdp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163iaulwzdo.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163lqggyunl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163anclogwe.html

[Q57] 行号
来源：http://www.aibaodan.cn/163mrvtsshn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163oeaquobr.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163tksqdmzg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163mjksijtn.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163tqxzpfnj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163cvazvscs.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163esjjbjgj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163dllwqzjp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ateyhckr.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163rwelpjrm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163yhommltn.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163exxarvfi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163iwzqxjqo.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163kgeuyvlz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163hosxkckm.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163cpltubud.html

COMMIT;
来源：http://www.xuanzx.com/163dtxuifdi.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163knapdzvh.html

ROLLBACK;
来源：http://www.aibaodan.cn/163xyybmutn.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163qabywhyd.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163onfkvrus.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163qqoewxxp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163olshamqk.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ipvkszvd.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163swlzywhd.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163kvklxlgz.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163atoglfvx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163rnrtbhvk.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163jtrchwkn.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163xewzyeva.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163fivwczrp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163jmujcjpm.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163rxduzjsr.html


<!-- 参考信息 -->