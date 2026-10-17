外链999!wailian999！

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163louovjcy.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163wgmvjwhw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163uwzlodcm.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163vocmnpsv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163jsvnlmto.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163iudddqgu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163eaphpfvq.html

[Q57] 行号
来源：http://www.xuanzx.com/163ueqgywgp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163jdllwnxd.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163tjppvkqq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163wjwomuqq.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163bhwqhaje.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163tpjwhygf.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163sceuhgka.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163iziztadg.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163scftpnhe.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163mlvllqhs.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163megvnfmz.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163piavqhjn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163bjddlaaf.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163jywjeraz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ucwzbcoy.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163tajiekls.html

COMMIT;
来源：http://www.sxryk.cn/163ohruskjj.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163cupedokr.html

ROLLBACK;
来源：http://www.sxryk.cn/163nrxjsvif.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163sqtwxgza.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163haowvyqi.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163nzekhfdb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163tybhfufp.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163uaowyapu.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163kzpmionv.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163krcgqeuk.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163kmciodxo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163uocqyflm.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163zjtgudzs.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163mtvzatzr.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163lmhnezlh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163dflyjeyk.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163pcojrynn.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163thbjefzv.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163owiwpeev.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163lebjdcid.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163xbvaqqqf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163bxpmtkxu.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163jraojgdv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163llfvzszn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163bnikaohn.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163oqosotty.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ckzwsnpw.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163rqcvyrqb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163bsxgenbr.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163uiursfrg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163pcmkvxcj.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163kwfwbanc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163xfjzxwpz.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163wlwabsoj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163lxmuijij.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163kjeenvdk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163lfgnyyht.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163sswmpcxd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163jcdpapvn.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163tvlsmnrw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163coutfgkp.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163vocbaisr.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163xtanfxaf.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163fyqgpxtx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163inoqfqpn.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163nhfcgwnm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163hwtitlgr.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163dgkgoxzo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163beohimcj.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163yqvmqede.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ltbezscs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ejfymhcj.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163kmzonemp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163schceblk.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163dcixkfdb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163znjrqjsk.html

================================================================================
来源：http://www.aibaodan.cn/163hqmoclog.html

R. Bash 专题
来源：http://www.sxryk.cn/163yenokyjy.html

================================================================================
来源：http://www.aibaodan.cn/163suidyqph.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ftxbxsjh.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163qbstodmv.html

set -euo pipefail
来源：http://www.sxryk.cn/163yhgdcctp.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163cyhtuczu.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163tgjnneaq.html

[R03] 只读变量
来源：http://www.xuanzx.com/163pdopdvds.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vyrzgvgv.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163kumdzlye.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163rktrvsvz.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163spkhdqgn.html

name="${1:-default}"
来源：http://www.sxryk.cn/163plxbnsgs.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163dslrdamq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163hfktdqvi.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ffiliuxt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163vkxozbjl.html

[R08] 数值比较
来源：http://www.xuanzx.com/163srhiikbn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163lthqgzwz.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ktjcbnda.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163lyajnmgs.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163nrhmraye.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ayiawyxi.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ggmpbjzc.html

case "$1" in
来源：http://www.xuanzx.com/163dfuenoig.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163rtfmbizb.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163qmpgwfyr.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163zvxjxnvp.html

esac
来源：http://www.sxryk.cn/163zzznlopi.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163dtuwawgt.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163tnbtorih.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163hajwwpxl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163milcjcin.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163isfrizxd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163gziteiqc.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163nukgcacw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163pdtoqtma.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163cyipvzny.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163hkdvvlqu.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163qcsrzubg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ayqhmboj.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163lfmeftnu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163lthmrash.html

[R19] 数组长度
来源：http://www.sxryk.cn/163adlmmhtx.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163twgwpdax.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163wdkkrnid.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163yieoxhkr.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163zbfpmshw.html

echo "${#s}"
来源：http://www.sxryk.cn/163wtxontms.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163irjqgmlp.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163orbolcxg.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ujmrmezu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163dnsmbxbc.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163rtygkwig.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163yqxcyted.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163opywecln.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163dntzfqwb.html

[R26] 命令替换
来源：http://www.sxryk.cn/163jhezzrlu.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163tftxoxql.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ostcydxu.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163rkkfoogm.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163chpmiaeb.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lkdejzcw.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163scmszdoc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163mgdhrmau.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163duyziabx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163kccycrid.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163hooivinq.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163zuufqjcy.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163wuydjfoj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163jmuhcjrs.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163odujgydu.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163zghfegnr.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163uxnzitqc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163letomknw.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ijfotrnm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163nswryswy.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163kxilqdnu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163pjyrpwje.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qvdazqiq.html

files=$(ls -1)
来源：http://www.sxryk.cn/163sfzsndla.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163gflaungc.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ovcytmnj.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ooefanwj.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163pblgzzsn.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163awydbhub.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163simxxzsb.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163rxusjish.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163nhuqlpds.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163lpzbkinm.html

wc -l < a.txt
来源：http://www.sxryk.cn/163blzetxoi.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ecqgnooq.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ihfdmnir.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163pzkguqwp.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163mwgqihnj.html

[R45] 批量删除
来源：http://www.sxryk.cn/163egegpuja.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163bcqnstns.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163wuydcnvn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163antoojma.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163poerborz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163hpcjyjzh.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163aiihlzlz.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163hvtoupat.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163iwibzcqb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163gfxoajtp.html

[R50] awk 求和
来源：http://www.sxryk.cn/163uknmzjye.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163muoszrvz.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ponmwfsk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163rzcnjvul.html

[R52] 统计行数
来源：http://www.sxryk.cn/163oykspkgt.html

wc -l a.txt
来源：http://www.xuanzx.com/163uzadcdmh.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163rehpmwgb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163brxackyt.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163kgdnfwbx.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163qjzvspsu.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163kbpjnotg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163isphzdhb.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163wysqclys.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163jbtdvwef.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163fotsyolv.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163tiaywndx.html

[R58] 下载文件
来源：http://www.xuanzx.com/163uhsagnqr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163mneeyevm.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ozimtxhb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163edfmygsh.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163lstcbape.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163fizygoqk.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163yrogbuao.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ztmfpfuw.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163dnncncln.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163nmcrryhe.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163alyremjt.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163sdgmktof.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163cysfuxyu.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163bvskxxgq.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163bwsaexfn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163zltlqmzg.html

[R66] 定时任务
来源：http://www.sxryk.cn/163vfrlyrnr.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163zzjotdhp.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163wwkkoaxa.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163zdgnayjg.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163fbkspqau.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163xryqbbga.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163xjruunev.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163jinykato.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163hdwxowpl.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163yjxkctsl.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163tzzubrne.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163nyrycrvs.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163jkmmfvhe.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163vmlnveqb.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ctivavvr.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ebklyfnw.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163trpfvqma.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163uletoajs.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163xroxhqgi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163feaebzsq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163wxgrmphc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vzvaocpn.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163tcrthyia.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163opnfaapw.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163dufrmukg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163weyxhetq.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163jagyhwau.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163hgrxfnjj.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163oechkudq.html

time ./run.sh
来源：http://www.xuanzx.com/163fuzrtxdk.html

================================================================================
来源：http://www.sxryk.cn/163nqrteeha.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163uscgetal.html

================================================================================
来源：http://www.sxryk.cn/163gticbiug.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163wbttiuee.html

#include <stdio.h>
来源：http://www.xuanzx.com/163othrvtqq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163qzvmeooy.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163zzsfwauc.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163zeztmwfi.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163hhtmsgol.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163vthxanjr.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163egoqqnqt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rwhmenpe.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163eeyisqwo.html

strlen(s)
来源：http://www.aibaodan.cn/163lyaujeju.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163jlghglzj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ksuhoiff.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163spxirtsa.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163wfularcw.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163xtzhqpmv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163pdygtone.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163qwtwdgcx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163zvezugpd.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163blbzgvzq.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163uxgijpvx.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163tehfcgda.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163qskuenns.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ztfigykn.html

fclose(f);
来源：http://www.aibaodan.cn/163yxlshmpd.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163uegibfhi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163mcpnhfsl.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ucdolszs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163wniqdqxp.html

[S14] C：枚举
来源：http://www.sxryk.cn/163hmylcbog.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163wafsgrvd.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163dzkxxcka.html

(double) a / b
来源：http://www.sxryk.cn/163xtvgryjt.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163zqvhogub.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163qserakqb.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163biciczzz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163aotbxjqs.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163kbkpicoe.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163fqlnsmso.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163lsryjbrc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163doccxxfs.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ejihqjvx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bkwgcyts.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163bwtfglms.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163eelmlcwy.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163qpjffhsu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163eruaruql.html

[S23] C：随机数
来源：http://www.sxryk.cn/163rpwnlnxb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163hsulwvaf.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163qdcqtivo.html


<!-- 参考信息 -->