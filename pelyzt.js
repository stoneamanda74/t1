外链999!wailian999！

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163creqynpf.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163tgypicwt.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163qliuuqub.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163rlikamuc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163mzuilwea.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163uyepsehm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163yvailzzo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mcozndwz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ygantxsb.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163fwuzijpa.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163lavmvppz.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163axrnclja.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163oeutmcrq.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163mbhleluz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163khklxibk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ncjyluow.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163lzobtcon.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163kyojldvv.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163vgchfplb.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163egtqprme.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163zxpsuzlf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ldzlearw.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gzuvyvqp.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163uniisstm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163wmxfsiyx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163zlsszmbx.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163yslieotd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163indvspsk.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163rpnkfhwa.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163kkhzydwh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163fzwobzcd.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ubnnchje.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fbsdulce.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163zizbrgbz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ghdxraay.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163lqvhxnkj.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163cvchoksm.html

================================================================================
来源：http://www.aibaodan.cn/163flxefiwf.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ziwwadao.html

================================================================================
来源：http://www.aibaodan.cn/163eccisqta.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163expdbiii.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163dvxhyeyk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163esefatat.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wtrvzeuh.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dlfhfnvd.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163unwcltml.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ojlpelhb.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163vdqwtqxo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163rczluaus.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163vfnmmvlt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163rfssjwwp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163igfbaxtg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163koxcgwgc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163lmpoigct.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ezbkbvmz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163uanxbkfm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163glpsklay.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163yuxgcpci.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163upgwwrxe.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163krxnvngp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ejdymhle.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163smgiqfnp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jxesupdz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163qxtieznl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163jxqlsspk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163vptgebtf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163hqdmktbo.html

[P04] 求长度
来源：http://www.aibaodan.cn/163fdpgmrkg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163qxxalamj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163quvgnqwa.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163jnsesxxr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163btdxkowk.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163cogwpxhd.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163pzspvabi.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ycotstyy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163lohavrce.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ficamzab.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163rsjqcyox.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163cvwlpoki.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163qjsdayqy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163mufncmup.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163qbnwxfjt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163dockybml.html

Ruby: a == b
来源：http://www.aibaodan.cn/163arckwpvd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ccaosrgb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163vwimunrn.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163wodnlvsc.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163nbwtoemy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163tqelhlqf.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163jzykavai.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ijpuuwrr.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hcaphbwm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163uqlrvrgy.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163xdljideq.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163igbmgrrr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163woffjtqo.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jekukiku.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zwfoyedh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mcgmqjmz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163wseghvhk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163vvbgtbbv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163zorjupvf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163vkjzyayv.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163jtudhydl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163msaltjyk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163saqheygq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163bsmrlqoc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163hllqkmzo.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163wrcecsou.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163wwugncdi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163evidrvky.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163lkcnwpvd.html

================================================================================
来源：http://www.xuanzx.com/163ewuirvpy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163smeolgul.html

================================================================================
来源：http://www.xuanzx.com/163tjsdabwb.html

[Q01] 创建表
来源：http://www.xuanzx.com/163iibuhxqz.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163gyjkubou.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163yiligopm.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163dhrhxiad.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163vecfkewd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163kgvjybtu.html

);
来源：http://www.xuanzx.com/163tiiwwtej.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163wjcnphkq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163uokvgvza.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qtbmomco.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163luvtugdn.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163qjajgyth.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163peruirow.html

);
来源：http://www.xuanzx.com/163kcbmqlrc.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163hkmrjwln.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163opgqzdld.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163rlgvbyby.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163haznnmqs.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163snpsyana.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ogiwjkvo.html

[Q06] 删除列
来源：http://www.sxryk.cn/163nclgmvan.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163tvvbtfct.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163dezkbriy.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163fkqwucxj.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163igbznwdj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163dnkztrva.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163iqkkzeyu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163cwmyzcuz.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163hwxstvbm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163xjsniwju.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163xheugxdg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163rzzcdyne.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163xyedatkf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ukrrvirg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163tljvvuab.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163nklsahqh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163axwkftml.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163yzvadjny.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163noropjqh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163mtqoyuzw.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163jvehesei.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163uxjozshw.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163euyvikbk.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163fbmjhxyb.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163zrgcyqpa.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163mucpmomd.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163byxahbtc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163erinwndq.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163uvdneihi.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163zwttoybp.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163rrswwfka.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163nryouiqc.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163kwzqmfqs.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ziywuras.html

[Q22] 排序
来源：http://www.xuanzx.com/163ioajwunl.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163naxvulks.html

[Q23] 分页
来源：http://www.sxryk.cn/163fwpwzzse.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163vrxibefu.html

[Q24] 去重
来源：http://www.xuanzx.com/163comewafm.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163noeusmkw.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ocowppqu.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163gqcwdjle.html

[Q26] 计数
来源：http://www.sxryk.cn/163pxgzdpxu.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163gmbtqepr.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163dlaujccb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163tkmuqqkb.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163twhdnzlg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163jwhuewwh.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163qmwaahil.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163sqlomicn.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163brirlowo.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163uucdxwph.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163lhanrxap.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163unetvvuh.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163nwbcvffz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kprmylzi.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163jpxfpdsl.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163xvmgxafi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163xossrszq.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163sekxgvqs.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163merympfj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163jurgkjet.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163gulmkyek.html

[Q35] 内连接
来源：http://www.sxryk.cn/163jwudhzoj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163khwxxtcg.html

[Q36] 左连接
来源：http://www.sxryk.cn/163wzclotfp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163bkrkpnad.html

[Q37] 右连接
来源：http://www.xuanzx.com/163bppmwxsk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163zyirwgih.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163bnlxkcnv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163yqombfat.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ojswbykk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163oypgeyod.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163vxgfczic.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163wgkievro.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163soidgsvt.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163tolaypic.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163czshtqlg.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163cjfmvzrm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163zvkrwfrr.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163aahxfqux.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163edkwreqk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xmzmioxb.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163dbzqqegq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163zvotdnmx.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163rizjnckq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163okewnjpa.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ijresdpd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163sciivsdt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163udzgecph.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163tyhljxwg.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163pjgwxbay.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163jbqhkuvj.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163rvkxhyew.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163kmslvkdn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163jgqfghox.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163mylyimux.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163jxatvmeh.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163cxoyeuwz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163jjuyovgz.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163zreorvtq.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163gwyaclho.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163cjlfxegt.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163sbznxoxu.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163xlkwkvpj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163meoqdeaf.html

[Q54] 清空表
来源：http://www.xuanzx.com/163tgxgpmld.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163azlzbpyd.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163tdpzxuqc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163pfofjjie.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163orcpaynj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163lmbonncn.html

[Q57] 行号
来源：http://www.sxryk.cn/163dbvhkfgd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163swccpggn.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163wbiucyif.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163taezpxlr.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163zdoouksz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163vawhdtql.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163elskripo.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163dnnemzxv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163vyxbegpi.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163wxsyaisb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163jhyfsdqg.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163srbfblrn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163aqwpgjxa.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163hftcqzvq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163fcdrvpan.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163hiefipay.html

COMMIT;
来源：http://www.sxryk.cn/163uqxvklth.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163xbcqwbwy.html

ROLLBACK;
来源：http://www.sxryk.cn/163altcyxxd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163nippepzf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163abgksfoo.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163xcfdzame.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163enrhbfuu.html

[Q68] 保存点
来源：http://www.xuanzx.com/163prvzbtvl.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ecumsgqi.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163namathuf.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ovqcvogu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163kigeaocn.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163dczlmltc.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163xicmdjks.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163bigdumvy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163hmlovqvk.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163sjyigkui.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163vcatncxc.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163qudljrlk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ilbuuoky.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163pdbynjef.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163oeckgvrm.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163oyyyzpew.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163grhvxqek.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163gyumdujb.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163bqorjksd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163bcxzndqi.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163vcnjptem.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163xwopmmue.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163zafjpzrt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163txdxywmv.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163icogrdbr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163orhdrnyt.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163mrbikrbj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ggeellwu.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163afxxetwh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163fzmcqstz.html


<!-- 参考信息 -->