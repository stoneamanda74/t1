外链999!wailian999！

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ygkyijio.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163jswxdtim.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163teadwqst.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tssvbwyx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163dlvospjj.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163grppwebl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163jxuzikik.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163uuslxzmm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ewynzafv.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163gozuwiwu.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xxkbbatj.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163tibffcaq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ybnhrqzz.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163frwglrmh.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163bhahorbn.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163rnayaaun.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163wkaqpwcf.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ohztymme.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163rqmptnla.html

[Q57] 行号
来源：http://www.aibaodan.cn/163yudmedrp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163yxxrwozy.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163rbyzuklo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163sxsyxamd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163qsylzdxg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jjrpeqdd.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163mndjqqrq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163zonognjl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ghedmnxm.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163mnyfjbji.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163wqhqjlsr.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163jrtpztjk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163villuzfo.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ylnidfrx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163dosypzhw.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163bsuazquh.html

COMMIT;
来源：http://www.aibaodan.cn/163ydfbdiur.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163xmveydld.html

ROLLBACK;
来源：http://www.xuanzx.com/163adxpwkep.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163vmuohnlu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ppoztvnx.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163zudaxknv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163qztuifca.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163mefyrpmq.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163deouqhiv.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163vpedxxwb.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163jcmjhomi.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163jxyefomk.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ovftcqlu.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163jiibcort.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ybbehhsf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163apdbbdfg.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163nddngxtl.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163dpsljwcv.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163zskfoywx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163njtcdrbk.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ekwjzujc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163sknfnzuw.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163pbhuckeu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163jyazgfuk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163cexmeeua.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163gcbpubci.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163vquvexbk.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163tlvnavdc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163dehxulxh.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ngzafguu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163bthmliht.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163dtqnqont.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163gyzodbrn.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163qwnuiavp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163vvandtna.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163mueqitwr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163qejjdgnk.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163kqlgwlqk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163wqoabzav.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163tyxrptyn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163zavtpzul.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ndklsfzp.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163gfrkbtrg.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163eyqujthy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163oktcyhyc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163hqbvgkib.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163tvxaouix.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163kqauzssd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163oiyxloqu.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163btoyauzk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ljbcmits.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163onkkmobc.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163srhmqzzg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163whyiwuib.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163tjsogiag.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163vpvzsblb.html

================================================================================
来源：http://www.xuanzx.com/163mqtrwmhs.html

R. Bash 专题
来源：http://www.xuanzx.com/163nsabeeis.html

================================================================================
来源：http://www.aibaodan.cn/163ljdofuey.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163vitrabri.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ybbsdxfe.html

set -euo pipefail
来源：http://www.xuanzx.com/163dxgsyguy.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163riwhryct.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163cfrsbbeo.html

[R03] 只读变量
来源：http://www.xuanzx.com/163nfcmdlpv.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ymddbotb.html

[R04] 位置参数
来源：http://www.sxryk.cn/163yutwbecn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163liboldrc.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163nvkdfxcw.html

name="${1:-default}"
来源：http://www.sxryk.cn/163crawjbmf.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163blagtmiu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jhvctxmy.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163zbisceih.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163jdaiykmt.html

[R08] 数值比较
来源：http://www.sxryk.cn/163knjvxeot.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163oansuxrk.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ndiqwrdn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163lhtwxsnm.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wetufxze.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kydprrhs.html

[R11] case 多分支
来源：http://www.xuanzx.com/163okgxnwlm.html

case "$1" in
来源：http://www.sxryk.cn/163vhsungga.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163xyvznhvx.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lwghxuto.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163dimlebwy.html

esac
来源：http://www.sxryk.cn/163tdvndqcb.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163lwimcnur.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163nbshqhkg.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163corwgiab.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163dtpuknfu.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163zqmcepob.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163kopduatb.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163pgujrkhg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163glvaxgeu.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163batpuxea.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163vrrateac.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163slpkcygn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163mgtqcowg.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163jduyvtgo.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ymdqoyyp.html

[R19] 数组长度
来源：http://www.xuanzx.com/163znpvmvpz.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163xyqaqqyj.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163fghhonhi.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163bqrmkmxc.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163eqyjhpdm.html

echo "${#s}"
来源：http://www.sxryk.cn/163yfwfldzo.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163fomtjolf.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163kixkwqco.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163zetxtnqa.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163seyugnmf.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163uavpzmbg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ledkorxk.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163kbjtdgnk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163fdxaqrgz.html

[R26] 命令替换
来源：http://www.xuanzx.com/163fgvqvbfp.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163yoxmtfxu.html

[R27] 算术展开
来源：http://www.xuanzx.com/163fiilkidd.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163raoitktu.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163bymmrndr.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163yujtdxuw.html

[R29] 定义函数
来源：http://www.xuanzx.com/163zjkovqoh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163yznuindp.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163auzjthqc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163hthwzqxw.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163oiminlhp.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163mdzxltge.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163kosgabte.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163pcafkqhl.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163epmjfdrd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163fmpsqfxp.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163uzkbtsiq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163jduzhvxd.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163cofkjphj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163pvuubzes.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163cmidshli.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163nqspbteq.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163jaelnpqr.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163fqjfqtwl.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ckzzdjki.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163htqljbny.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163gssnxpvt.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163rajkbzrk.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vdubksgk.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163efvmskpq.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163zywpqrhf.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163sbxpxcjg.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163jfgxzlik.html

wc -l < a.txt
来源：http://www.sxryk.cn/163shuejyqf.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163cqjgntvn.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163dxkakvmg.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163vqymyrcj.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163jnzzcbia.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xbwrbsrz.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163cqbmclyf.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163nvombjob.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163dvytxcrm.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163unuhwiez.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163egeptdah.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163xoedzchk.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163wvebiinj.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ckfduwyo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163orefbkmt.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163dopslzwf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163beizzhul.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163zgibktkz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163yfjjvptz.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163rhzuoyqo.html

wc -l a.txt
来源：http://www.xuanzx.com/163qvlxyyxb.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163wbghgdur.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163pstlfbdh.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163xrdmwelg.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163opmwacqz.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163klqpyfrq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163rkjgwbag.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163hveyepui.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163xpxnescl.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163dhojovmn.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163kasiktzx.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163bpvyrofc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163jnobtwjl.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163dshcnuln.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163qjgodzot.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163njehuzhv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163cobigqwt.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163hymsxzhi.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163omonhrjq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163hlefqmik.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163jkxlmlvy.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163cskcpnvs.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163cpdhdooe.html

[R64] 结束进程
来源：http://www.sxryk.cn/163rfkcrpkt.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163mafjjlcl.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163xroxyqrn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163hgslaqdk.html

[R66] 定时任务
来源：http://www.sxryk.cn/163yipdrlui.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163wseolgsb.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163xmjzxlgm.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163cidmgrkl.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163lmznatqr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163rfwqlxqn.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rwdesqyr.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163bowhdoka.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163klammovt.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163gerpcbue.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ivmbrdxb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163kxhyqcno.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163rkvglsdm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ktwrdglw.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163rebepkgg.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163pfkfqhqa.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163xoqrhuxx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163cfgayuul.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163zjaekkai.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163xojcgodg.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163kcmqjnlu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zqsviijl.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163tgxsgovd.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163rmmdbpom.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163jfabgfea.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163wcexvehe.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163pozhkzky.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163zvajemet.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163xwdgtbpt.html

time ./run.sh
来源：http://www.aibaodan.cn/163xrekcsrg.html

================================================================================
来源：http://www.sxryk.cn/163lhtpnxoa.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163vvcazfnh.html

================================================================================
来源：http://www.sxryk.cn/163zbvxszgu.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ujpbdahi.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163slldlafc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163parercha.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163fhvqccxs.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163snmwiiho.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ikvcegqj.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163udtarlta.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163kmjmgjei.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163pkhuikoh.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163xqrvaxtx.html

strlen(s)
来源：http://www.sxryk.cn/163lsitpzrx.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163oihsxlnd.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ctlfdpjg.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163qbqadcsv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163cyxuazcb.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163fsmuakcq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163igffifuq.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163rwhpmgyi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163jboyuhua.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163cavaaegq.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ehzlulxm.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163oniwtqzv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163rqdgbtnp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163uvxclybl.html

fclose(f);
来源：http://www.aibaodan.cn/163uqbdadpb.html

[S12] C：写文件
来源：http://www.xuanzx.com/163msjhqkzu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163fgswgddg.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163tzcngokm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163eoahfdpk.html

[S14] C：枚举
来源：http://www.xuanzx.com/163zkgcpino.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163frhuiqwz.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163iuycrhef.html

(double) a / b
来源：http://www.aibaodan.cn/163fzxgvadr.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ujgtxzxf.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163gjztawde.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163yisfmvxn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163pmqgrdhy.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163pbekjcen.html


<!-- 参考信息 -->