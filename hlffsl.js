外链999!wailian999！

[Q61] 移动平均
来源：http://www.xuanzx.com/163pelwdtbx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163xwoqlibo.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163qgfydgdp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fleuoqgt.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163yyozzves.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163fdzfebsi.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163qeyzzpge.html

COMMIT;
来源：http://www.sxryk.cn/163pvcztpdp.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163wwjwjjiv.html

ROLLBACK;
来源：http://www.sxryk.cn/163ebriyeom.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163paqnmawo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163bpovqbfu.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163bumrhlwv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163enzskbcq.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163tlvkywaq.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163hlmdrezk.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163wvucvjbk.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ososdwwy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163mctxbets.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163cyylfzcf.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163fxtgvubt.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163zlflshhl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163kqcgywmy.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163bgdsppvp.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163rjaoqdyy.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ubbhgjet.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163yqasojvg.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163pzfutnhj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ebapdglx.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163dovotpyg.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163kwhumqcp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163vujqsdab.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ddhunhnz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163uthqhkij.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163jzfcjolz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163rpxmrnkl.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163olpzkkbk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163eoibnmiq.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163dsuylpbz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ghqtsehl.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163tivqxaxx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163mrgtvhnm.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163lqretgqk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163sgwwasyg.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163fjkufnnr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163tqyhhrcx.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ztefbnuf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163hjhgmgvh.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163kvlhrthk.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163kzqccqfk.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163qkkambyf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163fjvcajnu.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163pldbgbzs.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163azwvnrnx.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163fikecgtb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163kzjsamss.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163lphuiqol.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163dkztqfma.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163cjioexxw.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163sxsttisl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163mnujwlbz.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163akmlnbpq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163zqjnwkce.html

================================================================================
来源：http://www.xuanzx.com/163jojdpjss.html

R. Bash 专题
来源：http://www.xuanzx.com/163cvfftefo.html

================================================================================
来源：http://www.xuanzx.com/163wtlamfxe.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163dfbsiern.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ulxzvttr.html

set -euo pipefail
来源：http://www.sxryk.cn/163pofbnise.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163yqfrmmyh.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163rzkahqyc.html

[R03] 只读变量
来源：http://www.sxryk.cn/163scxytrtx.html

readonly PI=3.14
来源：http://www.xuanzx.com/163yhzpgryk.html

[R04] 位置参数
来源：http://www.xuanzx.com/163pauuttpu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163bgkmzuhs.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163rcahlfdr.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163sukywzza.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163xcqmsyug.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163iroyplcd.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163awnuohdi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163kudpajeq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163pvgchdpw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163rdkylvfp.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163khnjpwcd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163vwtwyzkf.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163nyrrpdmm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163egylkvel.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163onitxaxd.html

case "$1" in
来源：http://www.sxryk.cn/163czxyrivj.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163oabxujbg.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163yovykpnt.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ngixqpha.html

esac
来源：http://www.aibaodan.cn/163eodhvqcu.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xugytuxl.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163vqafqeqo.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163xzqwqfgs.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163deeonoac.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163xaspazph.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163djxjadis.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163zbrhpguo.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ecswetfg.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163djvtctdi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163iivebikx.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163acavktqe.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163spvornmb.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163jytiykjx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163kcqviiqx.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163gzvdzkyf.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163iejtzymo.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163vivxkhss.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163bxxsxcbl.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163lzdhxpdf.html

echo "${#s}"
来源：http://www.xuanzx.com/163awiiswpt.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163bvzmadjk.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163uwquakhb.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ibespohr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163rbjndbgv.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163sfeedtox.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163pfibaqmc.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163sshmayof.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163jbwzitlm.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ceuaixpg.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163vdlpheyc.html

[R27] 算术展开
来源：http://www.xuanzx.com/163kngnsfyd.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163csigspio.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163eoreokdc.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lanaunfn.html

[R29] 定义函数
来源：http://www.xuanzx.com/163fwvprupi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163isuezzeb.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163xpgzdadl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163xliyhhcw.html

[R31] 局部变量
来源：http://www.xuanzx.com/163mesaiaiu.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ktbvnbkh.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ewrgjndo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163wqqtpdyl.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163yukktowg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163apcocagk.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163vdpmgyft.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163dildysdw.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163tesotqft.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163eaytwwde.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163tanhfiwk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163rapflwxy.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163eltlxbpx.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163tgawsupl.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ptaqbuoi.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163bbzqwrep.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ryifwyuw.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163pfhekfod.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163xcqtsdkm.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163keplacbz.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xmvlrzsg.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163oqrbxeaw.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163knxtveig.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163azesonhn.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ecirfdme.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163iraikjhb.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163rkjckiyj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163kevkvntj.html

[R45] 批量删除
来源：http://www.xuanzx.com/163fggtmkse.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163uzqnvszp.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163iddyowcs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163nihulavh.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163fvvzdqmi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163rjrlmwuy.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ojvarmad.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163upkbrrcp.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163zteluqog.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163hmhdmmwb.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ymznqiak.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163obxipman.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ewmjovud.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163nxowlady.html

[R52] 统计行数
来源：http://www.xuanzx.com/163zsswmwol.html

wc -l a.txt
来源：http://www.xuanzx.com/163gbckrajx.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163zqcmjltz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163csupfpnq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163xgxngsjt.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163guukkhtc.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163wetkdcer.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163jpltktyn.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163pmzauyfj.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163akalgmng.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ozmhouwl.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163nijrzame.html

[R58] 下载文件
来源：http://www.xuanzx.com/163lpxuwezm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163pbhmqaso.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ugvdbcsc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163xrkpgwif.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163nnlhxgkd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163esejnaqh.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163uncvcnhw.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163kwbvadjb.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ozpisnuu.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ygvylrrp.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163zyrxabqr.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163zqmzxwmd.html

[R64] 结束进程
来源：http://www.sxryk.cn/163vaxkgrqg.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163qopwvaum.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163dqwfdccy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163wpyqgmhk.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163fpuplibv.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163oapjnmis.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163urigdoqp.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163yheofepf.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163pckktfpt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163kgzjpjlg.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ummkbrmr.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vijizvgi.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163tccenwmd.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163vdckfcrq.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163kaywsmll.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163stybsnuy.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163wfzwrhhd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163wrxcwzeo.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xcbmqbdc.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163kjrilkfn.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163rqektnvu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163cwqantvu.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163aulobbku.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163prgihuph.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hqsmwrfz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bhtfdiuw.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163cdmgdjvk.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163fdarnsxq.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163vulawuon.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163vaotczpn.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163hjumijuw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163xnxolcuy.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163dzefjrnb.html

time ./run.sh
来源：http://www.xuanzx.com/163zzysqxoh.html

================================================================================
来源：http://www.xuanzx.com/163gecydrte.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163tnlxcuua.html

================================================================================
来源：http://www.aibaodan.cn/163awtxmuoh.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163iirujljp.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163bdpssqra.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163bfzvikmh.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ouafqtct.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jgpgbwik.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163xgneyyij.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163thxjjpqd.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163aefrwbsf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163nbtyudrj.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163jtgeulbm.html

strlen(s)
来源：http://www.aibaodan.cn/163kytefbmj.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163mozdinpf.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163jofitfsv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qmegyigm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163upaztjiu.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163auqachbw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163zuxriyos.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ikrusewa.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163vacqapfh.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163dsxcnnxz.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163cmzhitjm.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163wepgpbnu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163qccksjwm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163jvtltvrh.html

fclose(f);
来源：http://www.sxryk.cn/163tkgnpsnl.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163wclzfqxw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163etdajyul.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163rdycdekx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163cxdihjud.html

[S14] C：枚举
来源：http://www.xuanzx.com/163jvyfjbkv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163vqvijnpa.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163wegtryyh.html

(double) a / b
来源：http://www.xuanzx.com/163zughakab.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163uksxnjfc.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ptzrwzxd.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163hxukwpew.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163rcltmgye.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163opwzcorj.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163jmxbfjku.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163gmkernvs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ygljotbr.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ckarbsee.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qwhlrted.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163nwwrwaem.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163raqnngpz.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ghkeaxbd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163giajiszb.html

[S23] C：随机数
来源：http://www.xuanzx.com/163twrrbtby.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163amknyoit.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163wefwawql.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hwgqvlvh.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163pliwnszh.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163aabtkwys.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163qibntmuk.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163gofyjxgk.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163xstotxte.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163xixevowq.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163dbkpejoj.html

static int counter = 0;
来源：http://www.sxryk.cn/163mnghlvbj.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zygkdiuu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163pogsakuq.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163bvvjvexg.html

#ifndef X_H
来源：http://www.sxryk.cn/163zenollsx.html

#define X_H
来源：http://www.aibaodan.cn/163neqsivvs.html

#endif
来源：http://www.xuanzx.com/163zejfxyqp.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163hhezdgjn.html


<!-- 参考信息 -->