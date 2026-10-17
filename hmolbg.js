外链999!wailian999！

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163lfqguibi.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163abjrcvjc.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163qxvmwdbp.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163onmeglqh.html

================================================================================
来源：http://www.aibaodan.cn/163gmqpxumn.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163rposytzo.html

================================================================================
来源：http://www.sxryk.cn/163gioreodc.html

[A01] Hello World
来源：http://www.xuanzx.com/163jzlzrgae.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163irylryuz.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163zfumrbju.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ozrljchx.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163dzlqslmv.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163uirmunyf.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163asjrlptq.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163bucwqchp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163yhsqigsk.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163jlgfvggp.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163wngdfjlp.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163lkcakyxk.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163rbukinrr.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163winztiie.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163eyptmyvm.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163pkinmphf.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163mimbfrzd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163tzuwjuos.html

[A03] 常量定义
来源：http://www.sxryk.cn/163eccwcroe.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ppdqwdaw.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163grbxbsxc.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163bpkyxjdt.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163vjlganhh.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163rwhpiozw.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163tnvbsxpy.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163iukptynt.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163dlxdvavl.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163wczbjulu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163iibltwkn.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163rvksqjlp.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163lcqmhfqr.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163otycwiba.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163gwbmubbn.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163ufrhylam.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163fjyqqiwu.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163aqqphvmu.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163joszfnsl.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163lfhkrhru.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163hdzalhog.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163yrqhwbdg.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163cxwdlrye.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163cfdvocvr.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163rekfcpku.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wwjnypae.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ifznyein.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163tekkoybd.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ruefhmzp.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163kxknklgi.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163pzbrvpfd.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163czyaukan.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163kyoodejb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163tryungmt.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163ninabpgy.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163ywntihje.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163qaruefwf.html

Py:   str(42)
来源：http://www.sxryk.cn/163dtwribyt.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163dgrnxemx.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163wbwlnhxh.html

TS:   String(42)
来源：http://www.aibaodan.cn/163ulsagxao.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163jbjyilip.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163gzvhfsxp.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163hulqodbe.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163eobvdfcu.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163exikfxla.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163rymstqmo.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163ldjomwjt.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163mnizloml.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163xuzmsifx.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163doadntsk.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163bfqggqtq.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163bemljdgu.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163dgfumiyh.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163nscxotvf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163xkoyhumb.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163dlhlrfxn.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163cdmmkvbk.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163vvorolkw.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163clsbffrm.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163wcbyttxd.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163mntqvdpb.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163ooxzrifv.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163fmobqvek.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163nnzewvup.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163wvbzqymv.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163phmbmdim.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163yevqzrvf.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163kemsefve.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163qokkhprv.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163wnqnhmwm.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163dtmpaiub.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163btsakimm.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163vfcshhzx.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163khikcxmi.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pqfdjnsn.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163azxgfrwu.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163irtrsyuk.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163dhuwkglo.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163zpyvaqih.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jvblnpci.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163bzmlozdn.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163mnytbkti.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163yqegpjej.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163yzthvodl.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163fejthnsb.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163xutceyga.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163cquuicyi.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163arvjrzue.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163kemfimxh.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163pxxfdiaj.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163aukguqki.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163stfaulww.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kjslpdla.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163eichgoel.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ogyybame.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dubekalw.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163ikfklrya.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163sdbuldic.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163tgewiqhj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163mxtqxlrl.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163awcuxnlo.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163earwajur.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163arcrixcx.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163jnkpidfg.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ulhyemle.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163ybecyrgy.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163lgdmqazv.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163wkwckjtc.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163shzveqiz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163oqjlpftx.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163lzdfpmfe.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163lxlwfito.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163oqmblhew.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163rcmjklzj.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163xmfqfarq.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163qnvpuzyu.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163lujoxzow.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163wizaewnx.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163efgvecgo.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163ukyjecam.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163hqdivdgg.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163ekcaggsk.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163ykjifvyx.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163zfuzoodl.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163qsnkbpjl.html

[A17] 位运算
来源：http://www.aibaodan.cn/163fvvdippr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163phfxokzw.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163dnpbffor.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ageopngh.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163snnkecho.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tkemazjw.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kwpbqfvw.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vbzatftv.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163deackyfe.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163yzkqlnjm.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163sccioyay.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163ltuxmyib.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163phtminjd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163rjovrrgh.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163bgohghwu.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163hhjzymvw.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163knitxcfm.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163zlxkcdyv.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163pklkmjoo.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163tixdphhd.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163kjqlaizn.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163qayxdjvr.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163quxmxvaw.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163tinwaqzp.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163xymdvoyo.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163uykymaay.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163edyonlrm.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163cyawqnym.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163lbzevlsk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163zibtjvwv.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163dxefrfyn.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163uuqlkhja.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163igxovmod.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163qroimmob.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163yjadwdjn.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163bexmfwod.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163udqglixe.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163tqjyfxne.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ytaanqgx.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163wlcchsoe.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163mjfgvzsr.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ogirphgr.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xulxeuzv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163lcjaxzbx.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163mhyvxqmx.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163zggdnunh.html

Py:   len(s)
来源：http://www.aibaodan.cn/163aywxqnpb.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163gqgtvtez.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163eecjbrdd.html

TS:   s.length
来源：http://www.aibaodan.cn/163aaeqyxdd.html

Java: s.length()
来源：http://www.xuanzx.com/163nrzqikee.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163bmphqlzk.html

Ruby: s.length
来源：http://www.sxryk.cn/163epowjgxv.html

C#:   s.Length
来源：http://www.xuanzx.com/163pzrjkalw.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163ofcobpsc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163lwguewjs.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163cnbdrdyw.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163erynjump.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163dmblgdrt.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lxviqizg.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163bbktvmlw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163xmatfzgh.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ivhcfvgz.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163laptegmq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163shnwfcxo.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163fwshlzdv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163kwuhpumu.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ttkpyquz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163eaacmrwb.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163nwdadrdv.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163memmhvzc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163fkmwyvno.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163okfylckn.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163swxdbobo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163krggwnje.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hmezhgip.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163epbluvvf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163aefpfajm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jyechebh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163unhmnlll.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163muzkfote.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163ootgxxnn.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163rrfvdwlf.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163jipvckbz.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163jzhxjtmo.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163hlaotusd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163fshjqosn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163qauobqgb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ewsdpdqn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163oahimetn.html

================================================================================
来源：http://www.xuanzx.com/163rwqedlii.html

B. 流程控制
来源：http://www.xuanzx.com/163fxbpzzdz.html

================================================================================
来源：http://www.aibaodan.cn/163ffzbtfig.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163jutpkmjp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163pvvbeevy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163pfwhdckx.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ymmxqkdk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wokxnyba.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xrfezuof.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ejsjpcdc.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163qhxwygtf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rqjtvime.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163pmtdcrgf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163xoqycfjm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163mvqooefv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163usocbgnh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xafihbhy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mlymafrl.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163khaqlqfx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163fakdascy.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dxftdjac.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163toxszkzj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163nrupsdua.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163gkxnxmet.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163cfjsevge.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163yobnnafz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163pfkjznvn.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163zjqacdmb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163baohxzag.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ghevjuoy.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163xfnkwyll.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163gfhslcjb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163uoewdvwl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163qohethvm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fllcqipj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163rnonwevu.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163izkjpcfx.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163sxuiwpgq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163txglkxec.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163hsacvvas.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163zdfyslvm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163vkrnmznp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163uilafeej.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163anrrptoz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ftdalzjc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163fzjkfqkj.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163jzrnmhll.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163zeeeajbk.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163yxziyosy.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163vfwvcpju.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163jgxuapst.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163sajmxatv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163csjigczy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163eivrraud.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163kyfutnon.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163cabgukaz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163acpixdjb.html

[B07] while 循环
来源：http://www.xuanzx.com/163fdnesqer.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163wfztdewo.html


<!-- 参考信息 -->