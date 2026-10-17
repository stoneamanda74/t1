外链999!wailian999！

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163yfqopfxd.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163xdugueip.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163srvwkoht.html

[Q57] 行号
来源：http://www.sxryk.cn/163xqkzwejs.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163nhoduzpk.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163sgsmqqls.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163hzxfsneh.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163qbtsnjpy.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163qljmitiw.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163jaqoggdo.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163sqrygvxi.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163lfomrioq.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ufeipjey.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163yjvsdzyh.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ydybbwzr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ohkphhcl.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163lysampqm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163tbazvrof.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163cbvccrya.html

COMMIT;
来源：http://www.xuanzx.com/163ywhtjjrl.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163lobbolto.html

ROLLBACK;
来源：http://www.aibaodan.cn/163wjhvljzn.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163gqmetkik.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163wyjranhp.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163zjdiqoeh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163aeqrwwbm.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163jrmmerlk.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163eqmjmeca.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163nowzhbbd.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163yxlwbtjr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163kqfvkuir.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vzcxkqgc.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163tusgcbuz.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ecyuvfth.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163khrdajzl.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163aqnfsbsm.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163kxabcrqs.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163wpblluni.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163smqkjuoz.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163eisiljbo.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163wstbfwdf.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163bycehiid.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163znlebyxd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163iibmiwlc.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163owzwtici.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163vquzdknm.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163crwxgazq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163wrattxbu.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163sexczsoo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ndgddzfe.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163wvofrmlm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zvdjvrbx.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163jcysmcld.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163btmbiblz.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163etnwnsqv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163gkvedeyw.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163zrziufqq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ryesbbfa.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163kutabxbc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163pwcjaips.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163sgjtxtjr.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163qisnvadv.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163vmomenoo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163riwhqbod.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163meabwlfo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163erparvtt.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163yfdgntet.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163rynhcfei.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163iesqmotd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163vetpnmqk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163rfieaqsv.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163xsoaduca.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163lqcyryjl.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ioysgsfy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163qkfyinsu.html

================================================================================
来源：http://www.xuanzx.com/163lfiputih.html

R. Bash 专题
来源：http://www.sxryk.cn/163mbbifsze.html

================================================================================
来源：http://www.sxryk.cn/163hkmcyhuo.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163bvvblzwb.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163qgizgeha.html

set -euo pipefail
来源：http://www.aibaodan.cn/163uaudbaps.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163edyokhux.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163wsygpgru.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163xicplqwg.html

readonly PI=3.14
来源：http://www.xuanzx.com/163bnntfylj.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163qltcvlhe.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163qoyjoyir.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163awejkrie.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ivdjcpoi.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163erfhawfh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163axpezotu.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163xfjddbdi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163iyytyuey.html

[R08] 数值比较
来源：http://www.xuanzx.com/163wuhasqea.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163gaxxbipo.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163cwqduqxg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163sejiqyku.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qysbndnb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163pfivssgs.html

[R11] case 多分支
来源：http://www.sxryk.cn/163futnpgvx.html

case "$1" in
来源：http://www.xuanzx.com/163oquzvjhi.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163opqmhpps.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163vqgdhara.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163afdynwlg.html

esac
来源：http://www.xuanzx.com/163iqmxshwi.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xjpnojky.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ghryubqc.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163bgtwswzz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163tmrfffdb.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163kenujuft.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163vpcclppb.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163tulpqnsl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163schycrcw.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163akitwsbe.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163gynxjupx.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163wdkxltdi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ofrwegbb.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163bmbchjoh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163fvrzeabx.html

[R19] 数组长度
来源：http://www.sxryk.cn/163vrnhsikv.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163jaopgvly.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jlxsyqbg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163franakbv.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163idoqmqfh.html

echo "${#s}"
来源：http://www.xuanzx.com/163tqlhdolk.html

[R22] 截取子串
来源：http://www.xuanzx.com/163mpabobjn.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163jvdukpuq.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ohqsnpvp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ofrdufxd.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163nbrfeyos.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163saulsgjv.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163hkidscxu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163jdgmoqcr.html

[R26] 命令替换
来源：http://www.xuanzx.com/163lkbixfpg.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163pxxuhnla.html

[R27] 算术展开
来源：http://www.xuanzx.com/163gcilcgfn.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163uslyydkp.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163tmdyuozb.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ndekqmmz.html

[R29] 定义函数
来源：http://www.xuanzx.com/163aemacevj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163zzbfqbnd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163didfdbmz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163hpnvmpss.html

[R31] 局部变量
来源：http://www.xuanzx.com/163srnhimlb.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163bxtywvpp.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163nrclhtxr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163zlvpzgsq.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163dxcexlrz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163epavyiny.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163zzgzwovk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vkhrlvbk.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163gmejlaps.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163wkonvoyy.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163adouglnb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163nyeriooo.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163yfwybrkb.html

files=$(ls -1)
来源：http://www.xuanzx.com/163xcszkwjy.html

[R38] 管道串联
来源：http://www.xuanzx.com/163dmtclvqh.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163kqymxbza.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163wmhwjnuq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163pmthgmwd.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163pdhfeoqp.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163msmmfeuu.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163mxzxrrgs.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163xllstpjo.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163kmdevkrc.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163neaxjpuh.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163yyyojnqm.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163cpfxsqtd.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163pjdkimoc.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163kwemgrwy.html

[R45] 批量删除
来源：http://www.sxryk.cn/163euubgrmh.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163bvpmedll.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163dpcdhtol.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fttkintf.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163sfsruzit.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163azfgcauv.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163joxxnsaa.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ebjsgyow.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163mcimcntt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163cuaabbmz.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163dcdhjlqo.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163rynvjhzn.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ivgdwehr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ybdzzdap.html

[R52] 统计行数
来源：http://www.sxryk.cn/163sjwqvvql.html

wc -l a.txt
来源：http://www.sxryk.cn/163yiofowuc.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163twmxywya.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163uupsikug.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163orvtxwnu.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163yyladbik.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163mixmpgpq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163qouwhves.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163zdhrjhlc.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163dukzpflk.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ugqkswrm.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163nvehcaqa.html

[R58] 下载文件
来源：http://www.sxryk.cn/163btfatrlo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163lxstwbge.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163grnusdtw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163khfwftzd.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163sztiozsm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163orzujqpj.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ehrrkytp.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163nsdadvjb.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163lyvacpzs.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tapgkvwh.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ceqrcmhv.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163bubxqmuv.html

[R64] 结束进程
来源：http://www.sxryk.cn/163aftpygae.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163bxdywned.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163fyscfwqk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163yqgufesb.html

[R66] 定时任务
来源：http://www.sxryk.cn/163npiicpgv.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163qtedbyir.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163daxabncz.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163jfvnbrlv.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163faojzaqp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163uzuekdxi.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163xihiljzx.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163gbrxsyhw.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163bwvirlib.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163sragqzks.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ptwnjsqe.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163gakffhqu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163cflnxlem.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163kbwixhyq.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163mmamciio.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163kpsaxtxp.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ogsjubcj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163mkpwhzrk.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163nngcdxgx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163bjnrilzc.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163adyfrssq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fyoveylk.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163anzagpuy.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163dshdhyoa.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163bmuiizyn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163vowycvhl.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163sznwbfib.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163cejbcgar.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163rulcqrwo.html

time ./run.sh
来源：http://www.aibaodan.cn/163caygyagj.html

================================================================================
来源：http://www.xuanzx.com/163eaytcfnl.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163yaotmmmf.html

================================================================================
来源：http://www.sxryk.cn/163rppxqooj.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ozlkcevd.html

#include <stdio.h>
来源：http://www.sxryk.cn/163yixdbszn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163pkgvhcfa.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163zwrivieb.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163mlpqhsaf.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163vnvvzrvz.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163thvouwpe.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163yhiisgex.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163znqyoqcn.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163vfgogdyv.html

strlen(s)
来源：http://www.xuanzx.com/163wtnrwapf.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163lmprleos.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163oomoeqlm.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163dpxssckm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163nrqizdsd.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163fccpfsww.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163axezscmb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163gnlymrjf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163cbucphyo.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163jjxvhygj.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163glmbrwyd.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ndzzrrot.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163cncicgfn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163hrmfvalg.html

fclose(f);
来源：http://www.sxryk.cn/163hnimxhrh.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163mkwphtoq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163valfgnjm.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163afmvzpns.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163qqyogqjx.html

[S14] C：枚举
来源：http://www.sxryk.cn/163cseiksrp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163qvpmzjhd.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163fhguvlfx.html

(double) a / b
来源：http://www.aibaodan.cn/163romtpqiz.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163yexqasev.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xebhstri.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163dqshqsln.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163tlstjtck.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163hrajycjp.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163dpgnejsd.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163aiutlsiq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163okagtzcq.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163excpojwm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qpkshgrs.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163upjgyyay.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163cgqqtiwe.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163dxnjicoh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163zjoftqjd.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163fjbephos.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163cgmrjjyt.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163bulnrinw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163hixmwjkl.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163tbwuicpj.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163divobuow.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163wgwcxooe.html


<!-- 参考信息 -->