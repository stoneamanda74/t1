外链999!wailian999！

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163sqpwgybb.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163rczhzurs.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163tuugxady.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ingdstfg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163pnzmetdk.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163nyqfqarx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163euezubah.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163hgmerkxu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163dqxcexbl.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163torgpbbn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163pxqwwjns.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163mouykwny.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163rhmrbxkv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ovdxlgvj.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163sjkawzpq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163luvkrjnu.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163hemtoazv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163tuhxepft.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163bxvyekfs.html

COMMIT;
来源：http://www.sxryk.cn/163fnozfnmx.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163honisfls.html

ROLLBACK;
来源：http://www.sxryk.cn/163klhrsjgj.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163yqcnhvuq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163lnprnumi.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163lrchozak.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163izajosyn.html

[Q68] 保存点
来源：http://www.xuanzx.com/163nwjyisqj.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163lfefiyov.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163wfdhihqj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163qtduelsp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ilpvcjmb.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163qcltsuyk.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163zbsthgmu.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163xpnnqblk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163bqszotpt.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163obfdqgos.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ovxruspj.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163bavgazot.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163vtjvwjbk.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163cynuvynf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ikbyhkpm.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163qlivnzlh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163kantuzfa.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163zlrcecim.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ttnolomg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163erfozkcn.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163pzhoagwd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163hplzwymq.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ylxbngwk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163othaejoc.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163dzgofprn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163aecjypde.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163zmlcohae.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163htqtgtvf.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163nnvyeqgv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ywzkbzpa.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163wgkpaeqa.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163qwmlfbpv.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163jfbkfcip.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163yinotihz.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163zeyhzofy.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163pukcapce.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163tgfbmdph.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163pqzvvrxx.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163uipaqffd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163txdqamsn.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163moxsjmqt.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163refhjigm.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163popqbpmo.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163tjljmlpg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ojjgtdyk.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163qzkytbfi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163nuthohjy.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163cfolmffo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163kyrxjroz.html

================================================================================
来源：http://www.sxryk.cn/163iknvxqbu.html

R. Bash 专题
来源：http://www.aibaodan.cn/163humelkvr.html

================================================================================
来源：http://www.aibaodan.cn/163fbubybet.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163giwaxdiu.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163phifbxid.html

set -euo pipefail
来源：http://www.sxryk.cn/163iirlhsfn.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163mtpnnpxa.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163jmdvvtlz.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163qnqbirhx.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163qeqrvgus.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163exzsofxe.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163uevxkkif.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163wrzvvlfl.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163jksjfvnt.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163atfqqlus.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163traqiftq.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163smclvqsh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163dyyngjdf.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163unwwcxls.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163lozigirw.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163djqaosip.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ranjitjt.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ilneabde.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163cwqovtgv.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ayhzopni.html

case "$1" in
来源：http://www.sxryk.cn/163bgbdrqiq.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163znlyekcx.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163yhwuxhqz.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163vymintgj.html

esac
来源：http://www.sxryk.cn/163sbztkzio.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163zdvutuvu.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ijctmskl.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163dlfcpafh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163bihpwonp.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ssqgspla.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163zricmobw.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163nwjlxqqp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163nqgcgttk.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163hwkfqrpj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163gnqnpduq.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163fzubbovt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163oqyvbzoq.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163dmaeuwmb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163cxjjxbkc.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ekcoknec.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163wwjpysim.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163epxzxbah.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163kcaqogti.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ojzlohvl.html

echo "${#s}"
来源：http://www.xuanzx.com/163ggepsecu.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ydyijxsz.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163aiwxwjhx.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163hzvwshye.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163svoebntc.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163qdfylvtk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163zsnnqzuf.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163fpxnvqli.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163wauhbxlx.html

[R26] 命令替换
来源：http://www.xuanzx.com/163bemikuhc.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163lesdxukc.html

[R27] 算术展开
来源：http://www.xuanzx.com/163mndcopky.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163aubtqyow.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ytbupcfc.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163atfqpcen.html

[R29] 定义函数
来源：http://www.sxryk.cn/163fajtmjee.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163okptlrfc.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163gmfqkxmj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163xzisromb.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163nlagvuam.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ctfewxgg.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163plapmqkw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ewfnttvw.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163evpfiwkf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163faqcuimo.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163nlblkvgf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ooyqxpyk.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ahllkkye.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163nviyepvq.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163wrvejybj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ibvrfzxd.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163zwlftyha.html

files=$(ls -1)
来源：http://www.sxryk.cn/163bhbdbkiw.html

[R38] 管道串联
来源：http://www.sxryk.cn/163jdaceiip.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163tvreccpj.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163iwwqbdsg.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163mjxozais.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163fglemgxb.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163btefxvct.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163cyccfofb.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163xjensteg.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163nooaseso.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163rxwnnchd.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163vwagizpx.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163qsxzsorx.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xkadcdow.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163cojnmntb.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ixwdpxns.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163eqtjjwyj.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ikmogcso.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fnfqyixx.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163fnizmlcm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163wfqcfpfb.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163dhnlypvj.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163nebredyh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ecornaog.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163dkktjfog.html

[R50] awk 求和
来源：http://www.xuanzx.com/163yfxxxpia.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163wznasomo.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163shsbxzte.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ihxqnboq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163svxzloaa.html

wc -l a.txt
来源：http://www.sxryk.cn/163htkabkdq.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163jbacaluu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ulwiiomu.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163erlzsmrw.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163uspelsca.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ausuepug.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163mfqctpjv.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ddqqpolv.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ehagvasx.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163wyjzdzlh.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163fdumxtif.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ovuowuma.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163kjadyqix.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163sknmukvv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163idsloysr.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ophianvc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ttjxsbko.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ohwnjdwb.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163burcfcbt.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163jnemouzi.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163bqcpskid.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163qxomytvc.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163erowwheo.html

[R64] 结束进程
来源：http://www.sxryk.cn/163nrypdghh.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163mamzqyon.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163denqmvgm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163bywuuvon.html

[R66] 定时任务
来源：http://www.sxryk.cn/163mzumnfqh.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163radnpxpi.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163amaernbv.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163tdzhlfix.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163catdhlya.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163fezygids.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163iddididr.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163nbotbjtl.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163kzrlochh.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163wzwfzcel.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163djktmpsj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163xygblcfd.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163bdwnbgsg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163fhxgpash.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163hhgtipog.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163uxxwnozb.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163jcghsffd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163dphhvrwq.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163xiixmnzm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163bckctiac.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163sazgdncj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163piwliwcn.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163hpqldpxw.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ppmaiiyw.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163tnxeolan.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163lpdcjbfu.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ynmasanv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163etwwafsu.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163beizycgf.html

time ./run.sh
来源：http://www.aibaodan.cn/163vcbikhzq.html

================================================================================
来源：http://www.sxryk.cn/163nojzizfz.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163whwxvcsg.html

================================================================================
来源：http://www.xuanzx.com/163kjgxsfms.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163mzlzuzbs.html

#include <stdio.h>
来源：http://www.sxryk.cn/163vorukmhp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163zpolypbp.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163jyvzvmon.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ppabsmmg.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163vzxdhsbf.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163udyepguw.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163zdeiacwm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163flgiutib.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163fxqhlrfa.html

strlen(s)
来源：http://www.aibaodan.cn/163dshqilbx.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163vsvjahov.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163vtpwclzv.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ibhnialj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163gsaeklnh.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163zjwhiqps.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jbxbvlio.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163lfnbemtn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163fmddtkcg.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163wsyyvqnr.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163nvzklfbx.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163bvfqwrab.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163sazlvxvn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163sfdszxfe.html

fclose(f);
来源：http://www.aibaodan.cn/163uulapbkj.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163xktnoidy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163eiihnmob.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163irgkblku.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163emuskimz.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163quwracgc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163mvmicyon.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163fpcafqoe.html

(double) a / b
来源：http://www.aibaodan.cn/163zcopvmfn.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163lcmhrocp.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ngiotexd.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163vhmnoxxr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163mhhhljeb.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ahxnrwql.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163eyvezbhd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163xxdyyjes.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qwsixklx.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163axpmwsmn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gladspqb.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163emxvrvkd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163pyiboqls.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163utbefalr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163xmxtzvgf.html

[S23] C：随机数
来源：http://www.xuanzx.com/163yhaawgwh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163trftkgpm.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163mcbcahlh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163zwjnwagr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163qosdfcel.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163wbwzhrdq.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163lzogpcfc.html


<!-- 参考信息 -->