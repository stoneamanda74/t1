外链999!wailian999！

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163cnhkzqka.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163ptkiyjjx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kukcuaox.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163ikyvqjjw.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163nkneychx.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163lnktytkn.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vququofu.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163powkyjhg.html

================================================================================
来源：http://www.sxryk.cn/163gvdajowh.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163oedexduj.html

================================================================================
来源：http://www.sxryk.cn/163kqlbyoqo.html

[A01] Hello World
来源：http://www.sxryk.cn/163ogojtgwt.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163zajgusmx.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163ivqiorzd.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163rmhyamke.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163jrvoxngn.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163giysfzka.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163qfcdvmxs.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163xrvqtipp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163nqbgfffl.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163xwnpluhq.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163ayojqbly.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163usmzempb.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ibdgfndl.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163bgcuwgjv.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163hxgojefp.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163wjtoqtpc.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163dndijbhf.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jihagwwv.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ogzdpclr.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163wmvbznlw.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163tuluphkl.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163tqawfhgc.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163wkzoeczh.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163cmqwubwk.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163zuuoagyk.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163loincdgp.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163xootpswt.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163bgmfgegu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163xyeggeoh.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163dhqdfamr.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163kascvgji.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163ozpeeuee.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163zdmwpkcx.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163iiqzphyq.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163stoyrajz.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163nsywpsho.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163cvdujani.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163syawfpqm.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163tvgxjucx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163prwhsjff.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163tfmolvlf.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ewvtirrv.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163jgvhunkp.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163frbyakxc.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163datltalm.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163uixmtsiw.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163yyxmjyqt.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163bwoabfyu.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163gmkerlbv.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163aggyjdjl.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163yswjykla.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163tnghmjkq.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163cjduakry.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163mzjbiuxi.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163ydktyjmd.html

Py:   str(42)
来源：http://www.sxryk.cn/163mljidgqu.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163kmqxcmbo.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163nvhkbtcn.html

TS:   String(42)
来源：http://www.xuanzx.com/163kyaxxipi.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163orrspddf.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163qgfcqvbc.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163iaiqnhwl.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163nrjxeebm.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163bkzgapgk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163obfwnffh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163beyuhqls.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163ugmhfawm.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163mkkwbfub.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163xhohenmu.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163xiijvkfz.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163ifcnbgcx.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163wgutzold.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163gcrlmezk.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163gpiizqvk.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ckgpxgji.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163osnqibkq.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163zbndpbhz.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163euiyvokj.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163jkecdheo.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163tzrincfg.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163pzfpgrmu.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163gliamosh.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163hifrthrt.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163rdeuntgf.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163dlmptoej.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163zcpzknea.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163cwlnddmy.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163btcsnbpb.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163dpyqpqaa.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163precnxub.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163erjfiuuo.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163zhdmgilt.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mqqdyjcd.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163sfckvxrg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ducgrqhj.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xjlwchzd.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163mqeekmqi.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fcxnomqm.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163yplbebuc.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163evpfsmbr.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163cinoxwug.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163gbgzjphr.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163kwwqpyeh.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163qewomctd.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163ujhzqiir.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163pskfoisg.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163bwtkawou.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163tjxnlthx.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163ztszpupu.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mhyanwfw.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163ckpyiuza.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163yyqcqgdx.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kvxuqxme.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163hiygnfix.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ikpynbgx.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163hzhstdrs.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tqmvgpjn.html

[A14] 注释写法
来源：http://www.sxryk.cn/163bqhfnkcy.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163dyajbfdn.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163shscjjce.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pryyeezq.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wdazrorp.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163ynstaxrw.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163zyyrozln.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163hftsypgg.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163arzkwpiz.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163lrdejhcr.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163wzbyqgtg.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163bghikfue.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163wfvkdgqb.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163gvbjyrzk.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163yqmcrotj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163emnypmeo.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163avuhmlsl.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163lwuxgljz.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163gnogrkhx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163ziwnflhr.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163tnxsavkq.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163wlafgjjl.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163xruzgwvk.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163mnwwghnt.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163kgaqyqge.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163qmzurygh.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163crcnzgoz.html

[A17] 位运算
来源：http://www.xuanzx.com/163wivotqqw.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ucxuxvbr.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163nozklzqv.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163owxhlpmz.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jqselgls.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163efltzcvp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jwnovrco.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kinqngod.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ieqprzpe.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163moucuvbm.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163gibueqvv.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163konpaosu.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163gjlouzux.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163sbpcfxvq.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ziagwhli.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163nebohihs.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163firvisbu.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ajdxgkgt.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163ddkxpyxy.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163adbptlry.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163lrtrluls.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ygesmviu.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163qahdrtdx.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163hgugecxi.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163goppkozc.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163hjhqpywc.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163iopbtwmq.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163axuiopdk.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163aygrcmyb.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163dyucvtta.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163vbovmdzz.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163donyzkhh.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163iruqzhiz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163yxltiymx.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163hmsrmrbc.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163jrdguvoo.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163oclgwfim.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163bfcdxsnz.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163mbwkdowe.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ovtlpgfk.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163cpyknyjl.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bqnivgul.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vgxuzjvx.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bbtdvhpo.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163bjrffgjj.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163syrevkym.html

Py:   len(s)
来源：http://www.xuanzx.com/163wgogxjpj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163eqgmobam.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163hkokgwfv.html

TS:   s.length
来源：http://www.aibaodan.cn/163ywhtyekl.html

Java: s.length()
来源：http://www.sxryk.cn/163gcddolqy.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163narrhtfg.html

Ruby: s.length
来源：http://www.aibaodan.cn/163mtvxgcyn.html

C#:   s.Length
来源：http://www.aibaodan.cn/163vdfbihux.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163zvmwrxrl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163meqbluux.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163owmvkpbv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163tutmnbvc.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163lgxzbtid.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163uzhtzkgn.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163lwgbagff.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163aacbsavn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163sgplowgv.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ivprgfwo.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163jrdaavou.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163youxfvaj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163vfsrfmzn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ixqetoaq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163yhvpcfmm.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163rumcxehx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163jknylbkj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163udenfrfp.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163eyasvsdk.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163krutsfcp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163lrvwsprn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163upuwkwez.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163opfhyegw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163wbesfzyn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163zxernmic.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163kawxhdav.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ororqfei.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163nfsjighh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163kpsxhbim.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163wyidtpam.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163tfyprgsj.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163tmrbylvh.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163fiyuoqvn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163geopjxuf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163imcfgizb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163zdslsfsj.html

================================================================================
来源：http://www.sxryk.cn/163yniwvvig.html

B. 流程控制
来源：http://www.aibaodan.cn/163xmoeznde.html

================================================================================
来源：http://www.aibaodan.cn/163cvfqhbqo.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163bxzjdgql.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163qqqashof.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163bpeuktrp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163afwgvquu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qtzkisbf.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kxyizbez.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163rxsmbflm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163aeilykmw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163smhsmrgn.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163xxkberyt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163igcvcsrr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163fnclgncs.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163oixdioye.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bqyiaudx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qmnagooo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163gueapmbx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163qcnmxdvs.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uhjvcdts.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163jiekrycw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163vbotcppz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163jvwgttmv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163vpaepcpi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163wpejqzyu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163wkchuhuo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163tllvxojh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163rmkobqao.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ckibnivb.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163vpadctuk.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163abtdyigb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163wdioeyql.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163esvpxmsg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bazpusjh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163zyyhmkqz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163pakxqthm.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163etmhmohu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163supusgri.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163qpxlgqmb.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163hcuqxlru.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163vuhqcutw.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163jdhnknjk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163wmxpcvql.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ooxmuizq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163xipccyfi.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163mvtogzio.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163mwytdnxk.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163jzcfczyf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163hdfwrvsx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163zfirqbfo.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qtoyavfc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gskoybvn.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163bngyarcb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163opffniem.html


<!-- 参考信息 -->