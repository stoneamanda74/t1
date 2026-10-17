外链999!wailian999！

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163rfqfmmzu.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163cqluascf.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163uionwupa.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ctuofmot.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163indtjzsu.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ymwrfnfa.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163adjwqmaa.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163dsjzdhjw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163cqxoyoez.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163fbjydjwo.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163pswynikp.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163wuqvfrhf.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163aqxvonxi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163eradhzjq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163oijhqbje.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163frtitvfo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ldixkpli.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163cpophkff.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163qqepudpa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163sqvhibld.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jcsbeuqz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ijlootod.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163umhfesbw.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163edrbzppj.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ddzevths.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163lctuzymm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163vosdvwwg.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163izqtehnt.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163hjgkepwe.html

================================================================================
来源：http://www.sxryk.cn/163scmrfzkq.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163foqeakfz.html

================================================================================
来源：http://www.sxryk.cn/163vgtqisyx.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163lguafrpb.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163inxkftdi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163uwebpmtc.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163szepwrzr.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bqfmfebg.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163hcdktsga.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163fluhdsmk.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163xqwlitkz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163urebosvj.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163wjuptorb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163gmqnjlml.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ccfpvmli.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163wvxwwpan.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163sxnfpugg.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163bgmdorvh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163hfhviwqw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163cuobjjeq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ymkapvax.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163yjzchvdz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163rvyxqzwb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163fbbyvlmf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ppjfvkph.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jbrlmecj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163jopsenpz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163eponvspz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163sqibusix.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163lmxvehzt.html

[P04] 求长度
来源：http://www.xuanzx.com/163wthjnhib.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163rcwbtoeb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163saeytqja.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ojnrkyvg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rtvqpqzl.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163kwtoybqh.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163xzlzhtiw.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163voxmxgor.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163omyonfzz.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163atfqjmzc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163rnyifkyn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163alorzoug.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163dlfvbtnd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163sxjmlern.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163aodxuxme.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jmbvsmux.html

Ruby: a == b
来源：http://www.aibaodan.cn/163lpakvsnb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163xbokuukl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ojuitbdj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163geuygjlq.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163lprndglt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163pbeskeoa.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ojvmokre.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163wjfxdehn.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163tdcbblsk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163skmtejvn.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163hdmvzbnr.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163wsfwocjo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ibkjhbfe.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163hpevvjqc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cfwlcunq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hfgxukyi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163duowkwwt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163vgytobuu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163dohiyino.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ovyuiekq.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163lppqywqs.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163btlllyrk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163izhwijvr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163rblqbkeu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163oekwskrm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163sxblcsnl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163izkexcpg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163cciexdql.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163pbpercji.html

================================================================================
来源：http://www.sxryk.cn/163jhpapysj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163rzkjaroc.html

================================================================================
来源：http://www.aibaodan.cn/163snybryrz.html

[Q01] 创建表
来源：http://www.xuanzx.com/163gppasmkw.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163rtltkvui.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ldnewaui.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163musfejsq.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163dcfcqhuq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163kuqhpzws.html

);
来源：http://www.xuanzx.com/163oltbldvk.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163wkkhcouj.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163flabauef.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163avmgmryg.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163dijmhjsv.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163egiobpdy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163icsphaxh.html

);
来源：http://www.xuanzx.com/163zlhgwpih.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ytniyuxy.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163rdtddquy.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163tpxkjgfl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163roaydaml.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163qsksiuqq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ucsiqyhd.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163jmdrfddt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163kfcvmcns.html

[Q07] 删除表
来源：http://www.sxryk.cn/163zkbvqzif.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163btwflmsw.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163gkvgbgvo.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qptnsivq.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163cxsaockx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163iymzomxm.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163yjmzotue.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163fvwpvtyr.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163yhagfnpu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ixeckcqk.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163elyntzjw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163mtlhuwzx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ogerjfjo.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ytztmbeq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163lnbbhacy.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163vmusenyl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ptnxhbqh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163qvkrroya.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163kskkghwm.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163kxxdrhfz.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163vkqgtukj.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163hwxegakk.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163felhvfog.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163wecvcjat.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163uabdhqyq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ywfkpncr.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163wmfkkgwl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163doeapotf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ftuxwrhr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163cjajlued.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163adpwqher.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163grqmvefw.html

[Q22] 排序
来源：http://www.sxryk.cn/163lkincdma.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163xxlipfpf.html

[Q23] 分页
来源：http://www.sxryk.cn/163jgaontfv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163vytzefdh.html

[Q24] 去重
来源：http://www.xuanzx.com/163cvhgmizd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163cwaimogk.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163fphmyfks.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163dbveghgb.html

[Q26] 计数
来源：http://www.xuanzx.com/163nijqsbxk.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163zdajxtlb.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163boplmpkk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163clxnkoll.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ejoqdrhk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163dvkptofn.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163nrbgolet.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163dtiszzar.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163csvrgwim.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163adpkmsua.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163kqxrezks.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163wmjhlrcf.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163kljivdpo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pkfjkkio.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ihneivyy.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163vgkltyyb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163jbqvlpli.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163fsnsklsf.html

SELECT * FROM (
来源：http://www.sxryk.cn/163zesaxwok.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163nvukholw.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163mgdylnlo.html

[Q35] 内连接
来源：http://www.sxryk.cn/163prehxmlj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tflatoxf.html

[Q36] 左连接
来源：http://www.sxryk.cn/163rodgalec.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rjordtmm.html

[Q37] 右连接
来源：http://www.xuanzx.com/163yetmfsbe.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163izfamwro.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163phoxnrjp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163juebxxmn.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ozhupjdd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ebhnxqfm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ppdndbwu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163nxtkdwra.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163zxxtifrx.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163llzccwlo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163tossfvhs.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163zcpvvmcl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ncrpyflf.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163yywlhabj.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163iyduyomn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163abcnsvvk.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zmarrqdm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163fcmdpggz.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163hzymbkni.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163kwhlufof.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163imzhhfav.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ytjyhvpa.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163hqktryji.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163tgbbfufx.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ywsphvkt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163snexnaio.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163sexallyq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163zyqclljj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163vgdscnlb.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163qkmpcczk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ebdrjcxv.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163xqukrpgd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ryuepzfa.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163volzszzu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163bnwaxwxv.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163bpufdylx.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163httxvkjv.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163jxqwckle.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163vavobpeh.html

[Q54] 清空表
来源：http://www.xuanzx.com/163plyefvrx.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163nsgjrspw.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163pvemlcow.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163wddbrtup.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163lyjmssgx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163hidcinvz.html

[Q57] 行号
来源：http://www.sxryk.cn/163zamjhjjb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163avoyntqk.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ouwsawxh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163hrwtediy.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163pjxpqfxm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163btcltgqd.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163jsexfibu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163elwmjnji.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163qkknyqpv.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163fnmwnlry.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163zntmnfaf.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163keiipvlm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rozaprgu.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fxbbgxsa.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163xqpmmvdw.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163uasleouf.html

COMMIT;
来源：http://www.xuanzx.com/163dsopcavd.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163elejukwg.html

ROLLBACK;
来源：http://www.xuanzx.com/163adbgofhh.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163vewdzpuv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163poivyktg.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163vbdtmfeb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163iqtggcgy.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ipwmbfns.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163smhblzys.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ghkthepu.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163hpumxxbk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163yckcdtix.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163aainyjad.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163cjbgjjod.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163cmddeldr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163hjuiljlh.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163pjenppmy.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163swhwrgle.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163pewpfcya.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163wqamjpzz.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163nxzlddes.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163leabeyqr.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163mjxcjqzw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163mabyxyky.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ouwoilyh.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163aahwxkes.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163yqcujrjv.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163iezgtmer.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163gzbnzsql.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163hgirngvl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163lbxzfhwr.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163qirvxqnp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163zwidebwx.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163nnufjlxi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163cctvaxbm.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163gijebcwp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163aymmpjby.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163pkjrrcet.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163drvdfhva.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163tqmdsqdt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163nzuevxvl.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163yibeckqb.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163yewycnaj.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163vvmhesoh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163pdlmyocs.html


<!-- 参考信息 -->