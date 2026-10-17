外链999!wailian999！

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163ndjcsewp.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163jozcueuz.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163gfkpruvh.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163zvwddehi.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163cnfgxasx.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163kwkvfetk.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163khkyhcwr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163kzoqszhn.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163pdjiladl.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163grqnyseb.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163jzxjthmy.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163koftvvsf.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163qirkxooj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163tniszyoi.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163hhvmiyjb.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163mhpwkjlf.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163whevfdhq.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163bqlzjvhx.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163jbbfhteg.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163bpahtfec.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163trxqgqbd.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163cixonuxo.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163shmiwlta.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163zfsgzsrv.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163vjkbihcw.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163csapnljd.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163eekkzwtl.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163gcsappwf.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163qaxbtymz.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163irjbispm.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163nkhxkqra.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163eblmnopx.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163qmxxazae.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163xtvjfdqb.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163mmykfnpx.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163afqdmxrx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163hsviyysc.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163mmixgjdc.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163nmtiernz.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ttiirmwd.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ddfpttin.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163hetfkywn.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ncyashpw.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163icnehkfr.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163wbcuowef.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163rkwrkdcf.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163wpnxilde.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163ojvxlqod.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163tjfwnvye.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163psbejyef.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163qvuqqlbb.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163rwyqcgfk.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163ebtitowa.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163bljjmish.html

Py:   str(42)
来源：http://www.sxryk.cn/163obnwucrv.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163vzlphien.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163owaydnro.html

TS:   String(42)
来源：http://www.sxryk.cn/163cyjyrlmh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163kfhtazts.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163zglkwwbu.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163wcxtrcqb.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163uibftmpl.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163zqurzgqc.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163awymyzam.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163zojnvnch.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163jidfynma.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163xztahgzf.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163ajjfzgle.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163izuspsmo.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163lzbptoes.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163tlrncxcp.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163xwlisvbr.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163fnpiroyj.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163tbqdngdk.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163xkdngigf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163dqevbnzu.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163xoxkjerk.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163mawemxlx.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163poiaxneo.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163yarxstan.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163odohjouw.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163kljobycq.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163tnqopeye.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163uozmnxfo.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163gypsahjy.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163tuhpixns.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163vkvkwlsi.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ojpycacl.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163zssqtjva.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163jyhenrmg.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163otjigxbm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ibtkodog.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xaqrixwy.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mpxuwirf.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xifowuks.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163xboihgkm.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gzwmltpc.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xeziiltv.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163okynhobl.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163dazamszn.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163plzardhi.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163slsjlced.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163dvnlxilf.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163xdpfeagi.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163redkkdwu.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163stwguxuy.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163hanbqxvd.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163menluxed.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163nzbqnune.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163ymnazuyj.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163stpnjmhx.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jzgxofdj.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163rpjrldhu.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cgvhiqea.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163cguljciq.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qxivhuqo.html

[A14] 注释写法
来源：http://www.sxryk.cn/163zbxchyvf.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163bshdsstg.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163scyjoqbw.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ivkyczhy.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vrubbhea.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163xawdunyy.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163bfzaszff.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163ygdvydnd.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xjwsoniy.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163jdqhalvy.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163dimzxbjr.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163cipihjgw.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163lnaovhxd.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163akezanqt.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163sxtsqfka.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163bukjzrjf.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163mfuoxany.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163emovkesw.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163fyirtnmd.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163myzkvwoe.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163wxdnbgzr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163mejipwvp.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163beraixes.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163idpmyewa.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163snlmjmgf.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ptflzzyw.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163zoebithu.html

[A17] 位运算
来源：http://www.aibaodan.cn/163mtmijvsa.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vepbndqu.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163xolflqee.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163telkjrmm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163ogawvrcn.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163nawjemjw.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163znqohyyh.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zhdoburk.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rejekrvt.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163rvwgkvwo.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163qtxfptgn.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163hsvvyltx.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163hgmwzoip.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163zxgkwofj.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163vcaoyiwj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163vuyssojd.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163itxzruqd.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163mijomosz.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163jstmlykw.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163cifjumwf.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163ymknfhlz.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163hwgwtkhu.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163dkcjkojv.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163zwdrlbxo.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163oopuycsy.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163pjsejimy.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163ztwglfht.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163bsrfqnar.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163awezobnl.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163drltvvzh.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163bwrglciy.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163aemhtliq.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163qcacmuhk.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163prrclofw.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163wwfrnywj.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163jdyroexl.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163bgucncwq.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163bkllsvzb.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lqemsvhq.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ajbhqkuc.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163cpjzxcgg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ryxkxwnr.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163pytcrwrf.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vvtzjtgc.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163gqembqvg.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163xltiztid.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ysyiqrnt.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163zqrohxst.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163nxuqdyfu.html

TS:   s.length
来源：http://www.aibaodan.cn/163epbixjip.html

Java: s.length()
来源：http://www.xuanzx.com/163owxhfmyn.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163zftqwmnk.html

Ruby: s.length
来源：http://www.xuanzx.com/163bchwhagk.html

C#:   s.Length
来源：http://www.aibaodan.cn/163cembtsra.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163hrzimkze.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163xffjhkzq.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163buizhqlc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163tppoxeeu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lamvgexd.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163jlxifzti.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163dbdsypxk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163eqxkxlud.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163rgmyxlat.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163qqjkqkdn.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163dygivvyx.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163fwtadhcg.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163jkkrxquc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163vlazvnpn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163jojdfpjw.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ylskspoi.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163hdeqoswz.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163sjedoybb.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163klctququ.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163vomclnzv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163vxqjjahr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163dciawzul.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163rqptqqbw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163tskrbfvo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163wdrvzkxo.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163avqkxeja.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163xruyvyei.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163tuuddhpm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163gjxeuxzy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163vjurfwup.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163xyxnunjw.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163pogwdvof.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163pclakkkf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163cdszucay.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163xndksiyh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ifmzfnxc.html

================================================================================
来源：http://www.xuanzx.com/163bebrhcdq.html

B. 流程控制
来源：http://www.aibaodan.cn/163tzbpjdnk.html

================================================================================
来源：http://www.sxryk.cn/163gkwahlao.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163sqibsgci.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163skrzaoiw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163xcwcfahl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ywjpojmn.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jpnjhpcp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hvsnvwbs.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163wsbcbuth.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163epihqcds.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uiymmprs.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ygbejgqm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163goghmbfs.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163oapohtxb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ddysmfqh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163eyabiajx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nuecexnd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163iqdqlunx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ngzelazw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tthvfbis.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163efldigyo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163lxpvhrrj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163qhmtzokr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163crehqowm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ufbjzmch.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163fliiafzb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163wkfewvfs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163cftiyjgi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163qxdvpzug.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163vizmgpcv.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163afktqlnl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163jxxpstwp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163cgoazyxv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ccotdanl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163unmwcuev.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163cetiyrmu.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163urkalybj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163xxdsecbk.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163gpzlrzyd.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163myvsedqy.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163pbgifqux.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163undhhjad.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ulefeygo.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163hitczoty.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163nxlnuyuw.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163odygstno.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163wqsdtsyd.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163oyrztulo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ndnhdzdz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ogdbpheb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xlkwxyjt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ngisraki.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163wxzdfmaw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163plhtzuns.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ykfmaqat.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163uutdehxn.html

[B07] while 循环
来源：http://www.sxryk.cn/163bjswejch.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163izxgizyk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163medfqphj.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hakybwya.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pawjcrua.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163giiaapgm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163eiukibzs.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ywjbokyu.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hgzxdcvo.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163dovpdswh.html


<!-- 参考信息 -->