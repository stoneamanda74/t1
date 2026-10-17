外链999!wailian999！

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163nspbwvqm.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163osrqlytl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163qhvrgoiv.html

[Q57] 行号
来源：http://www.xuanzx.com/163wxklayya.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163emelmlnw.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163zbceefnm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163wsbxtpkg.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163nuqzpsol.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163zgupagrz.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163wnhutyuw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163cntvkezv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163jeixnrqu.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163stlbalwz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163alkzgvgp.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163kyzppddt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zejbwhka.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163bdvxrgsj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163bjtmikop.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163gruugfak.html

COMMIT;
来源：http://www.aibaodan.cn/163ojhzdthf.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163yswlpymk.html

ROLLBACK;
来源：http://www.xuanzx.com/163jdwghbam.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163apcsywjz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kbalpacv.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ugvnugcl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163unfzswwq.html

[Q68] 保存点
来源：http://www.xuanzx.com/163mdomhogn.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163boepckat.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163hqirhnph.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163kywtciam.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ywhtlwuq.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163xzihciqm.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163xdofwayx.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163kayeqhve.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163xbrrtuna.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163tkpjghox.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163egrezdoq.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163hszqjxor.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163dpiylman.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163lydufqxa.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163hubojhkz.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163iymjiwbw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163hazkpqvb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163vqgvffso.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163vqxmjcst.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163yiadjxtl.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163penvksht.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163kbxkaghq.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163aklevmny.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163qwzbnfdo.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163rqrplqbl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163aevlqiru.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gwrscijy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ocdwetid.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ejnxdwzs.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163gwwgoxzz.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163lakolwsc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163bgmxbflp.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ennyzxpf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163uyzmzkzs.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163nfiodxsy.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163sioxpbes.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163pkppgxlp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163bkdldtbk.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163wcncqsvb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ayevfadw.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ohwjrkyg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163wmercqzi.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163rnisvsyg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163okbraqjz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163bzvtatle.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163hfoyjvzx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163skdmgmdm.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163tyfzthqf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163xisnhbrt.html

================================================================================
来源：http://www.sxryk.cn/163tdlmbawf.html

R. Bash 专题
来源：http://www.aibaodan.cn/163usxtprtk.html

================================================================================
来源：http://www.xuanzx.com/163astrsftl.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163jptowhbe.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163epbvbwij.html

set -euo pipefail
来源：http://www.xuanzx.com/163mnvvsorn.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163oigmrtbq.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163zurjqmrs.html

[R03] 只读变量
来源：http://www.xuanzx.com/163lddtpmst.html

readonly PI=3.14
来源：http://www.xuanzx.com/163hhsljnzl.html

[R04] 位置参数
来源：http://www.xuanzx.com/163xrvgktro.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163azrphfgi.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163wlubepto.html

name="${1:-default}"
来源：http://www.xuanzx.com/163rjoufgkd.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163toukgtkl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163gaglmupt.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163efvlitun.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163gsfpstda.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163kpwsgoxm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163pfdegynj.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163hbmvkjfk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163yjppvtmb.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163lxmpdnzj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163vmxcktvu.html

[R11] case 多分支
来源：http://www.xuanzx.com/163jcsuilpt.html

case "$1" in
来源：http://www.sxryk.cn/163lihspdcd.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163hlnmdlny.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163lzufmxor.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163wrvwrtvd.html

esac
来源：http://www.aibaodan.cn/163pgwlgqce.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163rrxbzuxj.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163jhjxuexq.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163eplsikzp.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163xfxdfxei.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163qcgctzzq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163phphxxij.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163oqsaoxwb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163jvfhlhsq.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ltltifaf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163asagcgwv.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163tmddhlym.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163tkzisgmy.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163tlwgspuf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163gtzeuzps.html

[R19] 数组长度
来源：http://www.sxryk.cn/163rgkyzpoh.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163lfswtcew.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163igvbmarq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163yarrulqf.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163wozugwko.html

echo "${#s}"
来源：http://www.sxryk.cn/163wqcopvvr.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ksvbncch.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163cwxfgphq.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ucuhtpud.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163wavvdojp.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163zehzexpe.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163loakmdku.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163sdyfstfg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163eevjsgdi.html

[R26] 命令替换
来源：http://www.sxryk.cn/163mpzvsint.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163uvcbkyei.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ywhspfok.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ugctjayt.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163rsimewcg.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163eldmewcz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ierigqfp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ckfxerfp.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ampuwowq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163xjemamlk.html

[R31] 局部变量
来源：http://www.xuanzx.com/163rvobejvw.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163zybwhhpx.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163vnojtlbo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163kddimraj.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163lgeavzfr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163zrvirtjg.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163hcfphtxp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163amcecyec.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ypajkqjk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163mzrppuxa.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163dcbrqkkz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163cbwycbov.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163whsoreox.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163nkhmcluj.html

[R38] 管道串联
来源：http://www.xuanzx.com/163edtcpmcc.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163hxeyzyae.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163pnriwiam.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ayvmbykw.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163eyrrxhty.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163renfnkav.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xtdyngjk.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ipetzhpm.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163abrizktq.html

wc -l < a.txt
来源：http://www.xuanzx.com/163smipreuv.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163egzymluv.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163elptyomz.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ikrpygxb.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163sezdqiea.html

[R45] 批量删除
来源：http://www.sxryk.cn/163kiftnmsb.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163nwilksuh.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163pwjsbomz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ibiroazo.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163nylernyc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163mdexvvnh.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163rekcyqku.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163dzhnfrax.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163epcsuwtf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163nnhmbeee.html

[R50] awk 求和
来源：http://www.xuanzx.com/163navfrvun.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163dvqiilgt.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163sgrruceq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163wbydtbwb.html

[R52] 统计行数
来源：http://www.sxryk.cn/163szftnmgd.html

wc -l a.txt
来源：http://www.aibaodan.cn/163febratqi.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ksmtukgq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163womanasi.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163furcasfj.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ypzzfpvd.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163rqrhxogr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163cprkxjmf.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163kzwgwdza.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163fbyucgrc.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jdvmryoo.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163cscfpgdx.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163qienvbns.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163kqtspbut.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163lxelcbcv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163szgppofn.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ocevodfm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ornmfiil.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xtyhrcqn.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163nvpmlpen.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163efvpnqet.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163aqoaeltc.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hzliybhf.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163dccorxvo.html

[R64] 结束进程
来源：http://www.sxryk.cn/163iwmxzris.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163pnibkose.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163zwiymtli.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ucsckneo.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163zdcnxqlv.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163gmlythqt.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163wyqxnuat.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163gelyqnxe.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163vkhdtmce.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ypksrfno.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163pnodpvma.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163aytnftbb.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xygnmzns.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163fygqwiou.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163yninvrdk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163prnletgo.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163aikhlnvj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163jnubnirb.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163nwkvmumb.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163qyacwkxs.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163cfanwpzo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163gysudgcp.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163vycadojp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163zitcevxc.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163feqfatno.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rpiofhhn.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pelkrfyy.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ushmbdkt.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163pulgsvek.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163nvdgjcic.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163szherfkv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163hrnvazxz.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163upeqbldq.html

time ./run.sh
来源：http://www.xuanzx.com/163dxggiujd.html

================================================================================
来源：http://www.sxryk.cn/163fwobsavg.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163xojjhwom.html

================================================================================
来源：http://www.aibaodan.cn/163qtzfgnpl.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163tbdetxdl.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163dcgtltrv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163hgqyamuu.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163orcuqcrr.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163oimpbsnn.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163yypwwgzy.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163eyeiktra.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163sndewqhh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163lpqdvdli.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163addilxlc.html

strlen(s)
来源：http://www.xuanzx.com/163yascfzqn.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163sayvugwh.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163lxmadqvg.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163pclyyvht.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163lohsxskf.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163smrapbxu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163mtravgaf.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163grpikkhy.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163krmtduir.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163gygalpdl.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163epcpequu.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163cwpmtriu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ttlznbsl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ofvqtckv.html

fclose(f);
来源：http://www.sxryk.cn/163aekmugly.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gwlynqrb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163zzixjrdy.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163lhripohn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163mopyhrld.html

[S14] C：枚举
来源：http://www.sxryk.cn/163gtsencqj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163qzomiops.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163pgfkhgeo.html

(double) a / b
来源：http://www.sxryk.cn/163ldjbpozi.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163qffivomz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ukwmrbmz.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ulqaztta.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163cawcemcc.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163nzdxpzso.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163gujrpnud.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ccjutqtc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kojupqhf.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163xdpbkzua.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qzmwuytg.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163eutmrqvd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163esxxlkun.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ighfvwtz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163kopfiedj.html

[S23] C：随机数
来源：http://www.sxryk.cn/163frcgsduh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163pxawtphx.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163obwvvehb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163zetlhxzo.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163asygqavx.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163cbpjvwil.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ryykcovg.html


<!-- 参考信息 -->