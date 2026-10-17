外链999!wailian999！

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163gdpqspus.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163xuxtfezh.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bxqvqcdv.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163alhvqskc.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163xbonjovo.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163careeold.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ymkwzkks.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163rdepokpv.html

================================================================================
来源：http://www.xuanzx.com/163lfsnlfhy.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163iagjqvvr.html

================================================================================
来源：http://www.sxryk.cn/163lrxdqbsz.html

[A01] Hello World
来源：http://www.aibaodan.cn/163iiihiaek.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163fkwaklrx.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ihcpvpbu.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163whmxpgxw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ydnswqpx.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163gkplrstn.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163llplqwrn.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163ekrkfxzz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163pofroikv.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163tcipzzug.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163gkrpctcl.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163mwdqjfxp.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163qqdhrqwm.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163rxwmvmmp.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163jgtbiczp.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163pmjoaesh.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163ojkjddpz.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163gcvpxbnl.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163fsjwggis.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163galcvinn.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163pgarabkm.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163sbwcmdqc.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163hvtpzaby.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163arejcnfr.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163tdfvdxao.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163nkvdkywe.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163uybsbglh.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163uwzgnpaq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163tfxvigqa.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163azhaookr.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163wnpaylnv.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163haovrhkf.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163ebcnshxv.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163ewghzxpm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163jozvohgr.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163jabdeqzu.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163dsiidopk.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163gppshcnh.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163xqjulavm.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163uerwnclb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163piaojugk.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163uaxrpwka.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163tgdcedls.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163aorzmrsz.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163osncjdhc.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163epvkdily.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163eqxeewpq.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163vnltqtqp.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163nwhzxbxp.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163wfnbzrwj.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163bxfdqaqv.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163uvpgdkvy.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163gvibgsgn.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163cccdvshc.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163dslasnml.html

Py:   str(42)
来源：http://www.xuanzx.com/163xopqlzzr.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163nureekgu.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163khqpqyfh.html

TS:   String(42)
来源：http://www.xuanzx.com/163wilzasns.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163oyybeuxe.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163vckcjgqv.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163zcclixtr.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163xdxpshby.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163ukbrsycq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163ussttwwi.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163itczkbqc.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163hndxvpir.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163mcwvpizo.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163htrqxzek.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163wtneahbs.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163iowuqljo.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163ubsyjsho.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163qwudfjno.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163vycqbnvo.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163vjwvypow.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163rtjnuizd.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163cpthnaiw.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163xabpdbnx.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163xueemtkx.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163xbuyhjyc.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163poiloxlg.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163ncokvqsw.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163saqqekmw.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163rwuenxfa.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ykvdddka.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163fddruumh.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163cddamprf.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163rzsthwgm.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163xnjhcsje.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163ormvnlel.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163jgmonunc.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163ksqmdjtw.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yzntoxsl.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wdlxqwan.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gjqbatdo.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163eiwfrgnt.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163unabkkmv.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lferttcy.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ijomkpcy.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163pinsbmma.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163soxnyzsd.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163lcviepkq.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163mquciaiz.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163hlnalafp.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163ztmnawpj.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163qkxuofsw.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163msbtpojn.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163oktcmpti.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163ybxxgiul.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163mqqgflkn.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163yhkkqvco.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ofuhyvto.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cmsfeipn.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163rvolqylr.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hvohhwpw.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163rxtlwgas.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cgbxpmrf.html

[A14] 注释写法
来源：http://www.sxryk.cn/163wdujvorx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163hbmgfedk.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nulmlvqm.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163agryhohr.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163oassbmnv.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163wedrjhmp.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163eumdgvha.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ovpxxvsc.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163swqrevhg.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163wrvqsanz.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163bbkwebjp.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163bauqeihf.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163qjuxcntp.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vykxppnc.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163rueygmgb.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163lfmhbwsp.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163fhworkwq.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163gpgtrwbx.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163feedwypi.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163klrewfav.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163lfkzjzmv.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163dabmfbqz.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163mhrsilpl.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163fwraczjz.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163gzhhvckv.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163algqqugh.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163yhysdtaa.html

[A17] 位运算
来源：http://www.xuanzx.com/163ajxswbeh.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rmiejpng.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163otpbuyfg.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xkkkvjth.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163padhpbcg.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jicydres.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163gvimrvkx.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ivstfnrj.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fnlqnhqa.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163rbjdsttb.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163tbvrgibx.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163vturwxla.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163zawoqizz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163idekqoei.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163xqzjhrux.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163kimtdunq.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163hbptjkkp.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163mshkiqxo.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163tfmhwwai.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163khoycftc.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163dxqfikyy.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163sguciysa.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163bwzxfpli.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163utntuhfw.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163pvylralb.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163retjcjyx.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163zlzvciwd.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163xzszeukv.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163qqhoxtaw.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ppyakxjl.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163etqlknqf.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163ahapgnkb.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163tpgyqfmd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163wkxsqezm.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163pqpypgjt.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163rrrgcwfr.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163nbnprlhn.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163xfkbadgu.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vnkwdcta.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163rvfodsjh.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163lvevdxmw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xlgctxoz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163exnxzkou.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163sjnhypzv.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ivvebice.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163sitqetsv.html

Py:   len(s)
来源：http://www.aibaodan.cn/163pfvmrhjf.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163alyaybns.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163vspukwju.html

TS:   s.length
来源：http://www.xuanzx.com/163vxlnfmdw.html

Java: s.length()
来源：http://www.xuanzx.com/163mevmziec.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163nirpztan.html

Ruby: s.length
来源：http://www.xuanzx.com/163xnwkpkfs.html

C#:   s.Length
来源：http://www.aibaodan.cn/163wuygafpv.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163fjxbqgzr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163jwboofjd.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163afgvrcas.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163waguiaia.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pdtngzqn.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163czinaoyj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163hnddxwui.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ynbearil.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163wpisacrt.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ljitvotd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163enpjctoo.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163vvuyupyh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ypbsxqkb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ldabodlq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163bbfccgms.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163cxfgyoxd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163scklftua.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ddldthjz.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163gpguhtzf.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163tuylekwe.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163kutcygaz.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163kjhjqqjt.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163knfaxiyu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ncghhjkm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163xbjxmiff.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163dgmdszux.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163afhuvans.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163kqyrodmw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163iyssubyg.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163qaofhsqj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163xldumxit.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163lpaukfbk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163wlxuuyfa.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163zilwjehu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163phrhgfar.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163dfcaetlv.html

================================================================================
来源：http://www.aibaodan.cn/163zjdnoocl.html

B. 流程控制
来源：http://www.sxryk.cn/163kqwjkufe.html

================================================================================
来源：http://www.aibaodan.cn/163jxiwbjyw.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ywgjllpq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163wkccsgec.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163vtxgtivc.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xqzohmby.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vccvylpv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qcpuryvu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ivwylzky.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163jzrwaytb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xnwzkicz.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ihblzfap.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163zpyjopzj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163hckbepcl.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lgmaazsk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rhtlptbi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lrknulzz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163qycgdmsr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163zalbejsw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163disrqfuc.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163buinwuqz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163uwreectw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163cqqynkbm.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163juazccwo.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163pohhhdbp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163mndfinfq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163sfeehbtt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163vwqfcilk.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163qfskomvf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163tsucwcse.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163yfmmgcnk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163lyqpspzb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rixgvfkt.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dxuwwwkp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163aaccbswk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163dwhcyfmt.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163akjrkfxn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163uwengwas.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ednrilwf.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163lwcmxter.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163oonfcphf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lvnnayvw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qleiuxxb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163cvwgedcn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163uperpdcx.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163bawgpcob.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163wfxbxzaf.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163gnanygqs.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163rtxtqxrk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163gnxcjzaj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ajdxhlme.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bunibwpv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163dagqbfct.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163yqfawgtm.html


<!-- 参考信息 -->