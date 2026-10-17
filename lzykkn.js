外链999!wailian999！

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163lujqszkh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163qroletjb.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163xhlpbjga.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163ueqroefm.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163jsjgdakp.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163fxnlvpbn.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163vvslbeff.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163yjgxgdip.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163lamouwav.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163hlfprzfm.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163otwrqmlj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163lqhibzzz.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hplhjwyu.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163yieychna.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163swcslplt.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163qzorkmzc.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163tyofpbem.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163gwjllfqf.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163tgstvvvt.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163kxxjcvkc.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163ttqzrqbm.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163nzpnbvit.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163ghtwqbkj.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163eaummhes.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163ptyesxyk.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163nabynrgb.html

Py:   str(42)
来源：http://www.aibaodan.cn/163dxhcmuvf.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163hsmruxtl.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163npcxixna.html

TS:   String(42)
来源：http://www.xuanzx.com/163eshvujlh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163zplfyupu.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163qiklkdkd.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163waqfgark.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163rybysvzd.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163drstbcew.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163emvfjhwn.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163thgbombm.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163fhecxndw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163aquwdllu.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ecbphjil.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163sdpgnnia.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163tfcubpvz.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163osskvvds.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163phektdnu.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163tavuowkn.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163lmiuushd.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163snrjjjky.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ssexhpri.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163yutybmwk.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163uuumpqbe.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163mkfkzhck.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163gqsjmtzn.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163vaqenuvq.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163qqxynmrb.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163gofibicq.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163yhvtorbf.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163zswkdami.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163omfwsixw.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163tugerdhh.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163qbdkcbrb.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163wdezjdfa.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163kslnvgyx.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163tsyeadqp.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jaweodry.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163daievvex.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jbijnyme.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lkyqoyot.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163twkecivs.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163avpjpoio.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163umrotnut.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163yxmpfmbf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163hicdibtg.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163oaafhwek.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163lgtahrkk.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ggfeeytt.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163gfiecvbv.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163qojgdvuo.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163ipjjnadr.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163mynynapn.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163norzpiyi.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zdwkcpso.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163ylbmeymd.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ffirzhui.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163lhahqevf.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163bsuqbvty.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wfmxeulv.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163simfdpfv.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ycsljmcz.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163widcsnut.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163jlmqrdno.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163gwtyvukq.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163guasjqhk.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ojxnlchd.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163hwwhuptt.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163nmxxsosj.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163ulvutqee.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ipgfsytb.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163mtoagqdf.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163dcyryhoy.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163mlcwubxv.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163flpttstm.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163tqwrxzbx.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163sbsvyuoz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163aovvulac.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163uuqvbdka.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163jxlunqnb.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163ixmlnhfm.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163ugnowxdn.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163usygmmmb.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163hrnogfkm.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163qicoqmrq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163sojxqvob.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163nprjflwa.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163qtehysgu.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163hhwzknfw.html

[A17] 位运算
来源：http://www.sxryk.cn/163kjbymcqr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163yfitndfd.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163hfaixdly.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163krfzfhtm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jbcnmmhl.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pgmojjhb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163buxpahvt.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zmmvjpak.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pdabkzxw.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163gqcjfyzc.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163npewbgia.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163igopqpdy.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163xoslzynr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163niilytvl.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163ybeehghy.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163tuvaymee.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163aqmccdrz.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163wiosgwrb.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163kzhyltpk.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163lhoeciix.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163vvpzqnbg.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163lhxprsqe.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163fictpbql.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163mkqlcvha.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163riyuihim.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163jzzarivh.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ecxpybfb.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163jmlyhsmf.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163rfqkbjao.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163ccqfauat.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163hcazhttp.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163xcgkzohb.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163joatmqau.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163maxxukkh.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163zohtsaug.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163zlmauhdt.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163fptzzrid.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163opmgmoan.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163eykxzrpa.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163aeyityzc.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163maiwbait.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zlbpgamc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163sdyhmbfs.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mddfvdkj.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163kirtdxgo.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163qhspedmw.html

Py:   len(s)
来源：http://www.aibaodan.cn/163odfpyuzq.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163fptewkjk.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163motpljot.html

TS:   s.length
来源：http://www.aibaodan.cn/163hzzvrdul.html

Java: s.length()
来源：http://www.xuanzx.com/163nrmbudvr.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163porgmdcb.html

Ruby: s.length
来源：http://www.sxryk.cn/163fazbyqbx.html

C#:   s.Length
来源：http://www.xuanzx.com/163xvheejcp.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163oahlvlrf.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163prurlxua.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163qpzfqnhb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mqvbpioe.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163tqlafnbi.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jabjgaic.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163dvutrhpc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ouaivioo.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163sijgsngi.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163arthvqfo.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163byjaavbe.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163xvzhyara.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163cwmjdrww.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ersueeog.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163vehzkoyc.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163opqbpaoq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163kpwdcesq.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163zajfkpoi.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163rqsifvat.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163jwhtbnqz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163xohvzqqz.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163cxbzuoaf.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163kqdkjuri.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163ipwvarwk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163higzxist.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163wzylzyhw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163bdjlboxd.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163uyclvryo.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163hlqqaijq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163bjqqsgnt.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163pnqfqnxg.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ylxbatzf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163jyvatdka.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163tsfrzeqa.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163wltyfdwf.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163kicrfqzg.html

================================================================================
来源：http://www.aibaodan.cn/163rihrjuir.html

B. 流程控制
来源：http://www.sxryk.cn/163wleylgnn.html

================================================================================
来源：http://www.aibaodan.cn/163skatzche.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163bjtutghf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163qdvmhmgy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163vxczazym.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ubfhrulb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cgobdmqu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bsluprpw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163xoqyhvkx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163tmakzrhz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hmbhivwe.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163bibhoftd.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163cvqazeum.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163vwjayruc.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xiqxhvlq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qdippgzb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nahoduzn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163xtrhwhek.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163zntsbqxh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fynonurw.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163cjeqhcuw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ftdeohrh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163wmekwvdj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163qmobktpz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163gikfntym.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163nnhanrdb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163qeepavxs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163fllytrmc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163qfakgzzq.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163okcdtlei.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163zzrbzbro.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163prtqvuyq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163knaqgjks.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dnpcqjeo.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163egzfzbnm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163jjzwjfjg.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163msfvkpbf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163pjebrzfl.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163cxwhlajv.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163guqphgdl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163aqsyxkne.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zsxlnguw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163exkhrlat.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163zyvrkmgr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163mjyskpbk.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163xtynhwmo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163mvceusrj.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163qoxibdwq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163tltunmmd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163wzaotqbp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nxoejlbs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163wzeehpid.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163tncwufnr.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ivpopxlo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163dxhuvnvm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163orkzbkkt.html

[B07] while 循环
来源：http://www.xuanzx.com/163dsmsjksa.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163txjoslsi.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163zmsfdetu.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163akacucrl.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cvgynxqr.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lcnmmvuh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163iwezijbt.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163lsmyzbam.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163myjtszjh.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163mntxoamh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163hnsmmgpo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163xhyjuzhw.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xaavgroe.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lenjvrjl.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zjydcipc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163yzuzeqko.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163dtyqbeal.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zsdgprhp.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163urnyzias.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163uskvysoo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163euvqknmi.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cgzfvjgu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pddoptqe.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pdvrdtct.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163hdufhegy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163tzjcbrsl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bipraang.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163trybnvem.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163eohntcwp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163jntpwbbw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163tfjcjtuo.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qlanspxr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163tozygcmf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163fezbwmvr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ztzmywzo.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163wvhuwciz.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163fasnsplt.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163huaxlisf.html


<!-- 参考信息 -->