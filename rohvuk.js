外链999!wailian999！

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163bguvcali.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163jxdjzlfj.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163bgovqfuq.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163zqhjlkmd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163tkcxtmmy.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163agjooyhw.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163rqqzqbqt.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163nefzzjdm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163blymscst.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ppseurqu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163nrselzds.html

[Q57] 行号
来源：http://www.sxryk.cn/163yjexmhde.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163nssbdnhy.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163jifogasm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163jxcfksqm.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163hrtfskvk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163plmhamcl.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163twqorgga.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163zvilsvvy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163asigmphi.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163gegpaqim.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163bybidwbe.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163silgefhh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ausvxgpf.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163bmcjtbrg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163fhphxwfc.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163qphcknqc.html

COMMIT;
来源：http://www.xuanzx.com/163mcubwxcg.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163mpzddzwe.html

ROLLBACK;
来源：http://www.sxryk.cn/163waqlganb.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163oksnzpzp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163vobdfqaz.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163olwgmdjd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163lztuhcgj.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ypxhyklh.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163audjtgpx.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163qsnhqsuk.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163fsxerhuo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163vncpngbt.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163wmrqhijw.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163xzrkgqmo.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163pghsuasi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163nlslbput.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163txtblybi.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163nbjlduox.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163qztwtuot.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163bnxmepop.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ertdybli.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163wjfqrtkh.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163keqmztfw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163vzamsdoc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163gylybdhr.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163mijznjfn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163nddoqbas.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163lpotovbv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163cmszanic.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163srnbdily.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qguybvdv.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163hnpwydlm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163cainoxvi.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163xulvqcyn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163tgabwzkj.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163euwtunuy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163akwwqspj.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163delrhqko.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xjicdbbm.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163lkgvipyx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ugibyzzt.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163mprrecxe.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163spcjhzia.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ndcupxsv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163zjpthgvp.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163etkrxqom.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163jijqirbt.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ohknkxxq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163gxbqljyn.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163iuttbtcy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163fhsyiapc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163zxcaglqa.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163pzetebcn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163qcqnsbmm.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163hmzymbwh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163nmwrrfyy.html

================================================================================
来源：http://www.aibaodan.cn/163jpdyfxkg.html

R. Bash 专题
来源：http://www.aibaodan.cn/163yxmrxoyc.html

================================================================================
来源：http://www.xuanzx.com/163hfhlqgby.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163kripjsnp.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163xtpshkze.html

set -euo pipefail
来源：http://www.xuanzx.com/163wzuaktgm.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163kkhrbbxw.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ukomwrni.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163puqphunv.html

readonly PI=3.14
来源：http://www.sxryk.cn/163suohnovb.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163edszzyvt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163lrampiyv.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163iavmktgu.html

name="${1:-default}"
来源：http://www.xuanzx.com/163utyembgg.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163dwkwbnrx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163lpozmntg.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163fjrkwsfn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163gzhsdxod.html

[R08] 数值比较
来源：http://www.sxryk.cn/163dqsjjzps.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ladrxnaw.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163wciqdppf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163obymargo.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163lcxkmueq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ubydgblj.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ojgchnvm.html

case "$1" in
来源：http://www.xuanzx.com/163vmunmivv.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163tyhojpix.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163lmntxedm.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163wmrvcjie.html

esac
来源：http://www.xuanzx.com/163wzqvnsph.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163lfavfzyo.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xcellrux.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163xayrqpcb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163vcsrsyct.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163hgpoirec.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163bgtneuvc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163mwupanff.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163xeyjumwe.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163lltdmygk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163wcushcju.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163yikbipuw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163jgesnhrv.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163vuvadfne.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163zmhdumfn.html

[R19] 数组长度
来源：http://www.sxryk.cn/163rxdmiwzw.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163kyeqhnfv.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163qovnfmpq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163vethcuae.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163yvofkwer.html

echo "${#s}"
来源：http://www.xuanzx.com/163esvfzyvo.html

[R22] 截取子串
来源：http://www.xuanzx.com/163hevcpjqf.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163hurxzcfv.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163fnynedku.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163hxywfzjv.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163qgslenfa.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163jqhsemco.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163cdzlswwb.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163gxlfqlyh.html

[R26] 命令替换
来源：http://www.xuanzx.com/163mplpiwuk.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163mnlfapwz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ivohjcik.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163osghhilf.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163wloshzei.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163enjroxht.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163dlyfjdcp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163rnvwrgxx.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163zkzwhlqr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163injbybll.html

[R31] 局部变量
来源：http://www.sxryk.cn/163rqbuqmcn.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163klpwiovp.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163kutjhqnr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ehsvhobs.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163pcfztvnr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163nfmdipjb.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ygxqhpvd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163caegazbo.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163fovrmytw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163bqqivbpf.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163gxawumhd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163jvfddwfb.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163gcxciplo.html

files=$(ls -1)
来源：http://www.xuanzx.com/163kbpccqll.html

[R38] 管道串联
来源：http://www.sxryk.cn/163svpgzoak.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163lalloxpx.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163kcjhxbjn.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ridjmfxt.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163tntubxzw.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163yefrzgna.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163lmoibmvk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ollyjbff.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163csngpmbv.html

wc -l < a.txt
来源：http://www.xuanzx.com/163irfejukw.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163uqkjyszn.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163wqeuxzss.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163kmhawlka.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163smjpsqwp.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163busmnapx.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163nzqlmskb.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163mvhjlrmp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ahvappgx.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ocrjdjpj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163iemcsedc.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163yhzybrpb.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163mcbtftfp.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163orgdbhet.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163nplujoub.html

[R50] awk 求和
来源：http://www.sxryk.cn/163oyyxgasa.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163lathjecv.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163fqcoayqc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163aulydtuy.html

[R52] 统计行数
来源：http://www.sxryk.cn/163uhekhxch.html

wc -l a.txt
来源：http://www.xuanzx.com/163fqloabmu.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163xheixbgj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163csncepvk.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163pkwpkkwq.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163qkgzbouf.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163goozcbcl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163fxmgpodi.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163hqizqyov.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163kuwkwmaj.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163dpfxehsz.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163eibziyes.html

[R58] 下载文件
来源：http://www.xuanzx.com/163tevuiehj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163fznqklil.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wxuxvkfg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163fwyksnhp.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163rqaaosen.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163qlfcozln.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163odgxgigd.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163nhtiehge.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163rjyeiuck.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163nntqeivs.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163yqybdizz.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163sspcyega.html

[R64] 结束进程
来源：http://www.sxryk.cn/163uyvhyqqs.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163zcarmago.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163kqshgiow.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163rypjfual.html

[R66] 定时任务
来源：http://www.xuanzx.com/163wcbfcrrh.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163alsmphvu.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163hmxkoebj.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ggxmmtxp.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163odjdaisy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163qznqkpkr.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163cjyrywyq.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163nbktmlvd.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163jleinigi.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163rcrgqkvm.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163lradfwju.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163pyjqgkmi.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163hxjldghr.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163xpjsxigb.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xvqfomdc.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ouwebgmj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163kgsguknh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163kcfevlkq.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163cnmefybb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qqgeafgu.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ooynjdlc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ugybcgpt.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ahobnnxm.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163oblozbaf.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163pqamoyww.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163iashzjjm.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163iwfhqfxt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163cwydwhxr.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ezujpyab.html

time ./run.sh
来源：http://www.aibaodan.cn/163mjxeaeen.html

================================================================================
来源：http://www.xuanzx.com/163lcflhfpp.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163oputibgz.html

================================================================================
来源：http://www.sxryk.cn/163vzbhqcav.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163uictjwfc.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ueeikjce.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163doomtseh.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ryaycfoo.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163clefgtal.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163evuyjexc.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ehaijgor.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163uxxgzcsw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163pvyinprf.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163efndqkhi.html

strlen(s)
来源：http://www.xuanzx.com/163cizdmgcm.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163uxpcuswy.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163tdobfksd.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ldalhrjz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163gnvkjklh.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163vmcerdhz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163vwlshswd.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163jmgoufbp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ftwpnqsf.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163blgtzvkq.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163akpzzdso.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163bhstxfxc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163mofbrkft.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163wyfxpcko.html

fclose(f);
来源：http://www.aibaodan.cn/163sfmzmxtg.html

[S12] C：写文件
来源：http://www.sxryk.cn/163zeuqmgyw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163linxzywk.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163kekigsvu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163aixduljp.html

[S14] C：枚举
来源：http://www.xuanzx.com/163timvkbks.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163krdjqoxm.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163brydcqtj.html

(double) a / b
来源：http://www.xuanzx.com/163vcnffhjk.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163sozrypph.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ilpbxtyi.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163bnftyncz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163cuvtduuk.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163dzqbijnz.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163lbturatg.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163xlsgkopn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163nddgzpwx.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ovvwxqso.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mxzjoowj.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163jfpnmukz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163pywhjwgi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ngpaagpy.html


<!-- 参考信息 -->