外链999!wailian999！

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163chamishj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163yzsfuxtb.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163nqaupozu.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163optyzcnp.html

================================================================================
来源：http://www.xuanzx.com/163etcrnuqb.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163ivemrcxp.html

================================================================================
来源：http://www.xuanzx.com/163hynjtedt.html

[A01] Hello World
来源：http://www.aibaodan.cn/163zshmcttz.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163dxkugnmw.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163fbobcyio.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163gecdsyrt.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163aejfrfer.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163iuvwohzq.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163aepmodgs.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163wsxxaehy.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163nrgkvgrt.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163kozpiurk.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163txjilges.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163bkdwhbat.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163aiwtmrfn.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163kgzojosb.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163nfmrrjgm.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163bmuqbapi.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163qtlcucjx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163qnhohgwm.html

[A03] 常量定义
来源：http://www.sxryk.cn/163eanvclow.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163inkukmkd.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163rpykbrvz.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163gnxfxvbn.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163nqctucsi.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163fpxiphqf.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163lfzxdpvi.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163celojvrv.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dpnebikk.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163cqisgvyb.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163wbqlsdtj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163dwmbtbij.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163hjqolprl.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163wzkihhgd.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163hinmugha.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163lieoguev.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163jvlrqjud.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163qvhvekdy.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163renecumh.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163wnyfahyv.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163noeupzch.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163mcliyaqq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163mhogkyxs.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163mahigurs.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163znxxmwzw.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163kchybxcn.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163urwnnoji.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163uwkrmsaw.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163bodrewmh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163giofdads.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163madbrzxt.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ruajbhzz.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163axpjwvxs.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163llyagpzt.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163pakebddg.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163xdcnczmh.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163owhzioeu.html

Py:   str(42)
来源：http://www.sxryk.cn/163oqpsxygh.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163yrlwwsff.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163sczuqroj.html

TS:   String(42)
来源：http://www.aibaodan.cn/163lsispyea.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163xwzfkeik.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163hximsnwm.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163dndhutxr.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163pyegwbzh.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163jsktsjpl.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163jpkctqro.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163skxrekhf.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163fcymwylo.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163fsdeiqqs.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163hrmvrukd.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163dmjfboxu.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163tzyotggk.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163szaywpkp.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163vmjcazeh.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163oynnpwra.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163uubosjfu.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163myszhlfa.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163yskvvknv.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ktieztns.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163arxazaxy.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163gcyyjctp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163fokvgfku.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163gbyurpnu.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163aemvllvh.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163pmjoraxr.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163sspwktyl.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163bitfbxja.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163zehoeswy.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163jazxygtq.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163yienxqhk.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163douovlha.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163fqjykutt.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163aotnjgeb.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ljxvbvfe.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nhrlwcdn.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163krlpadyn.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nhsmxcmb.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163gjbhooaa.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163stxdsbjl.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163awpxcquc.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163xwcfbang.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163hoftqmtp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163ekhdmsqb.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163rwubclno.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163hwshciog.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163szcztvnm.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163xdbdtyoc.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163arazsvzs.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163lwswgnaj.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163poelltoa.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163niowilby.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163nprawpct.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jolsjrkt.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163waymqhtx.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163ginyfgwm.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dkippeqf.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163erjoehaj.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163eeoagbay.html

[A14] 注释写法
来源：http://www.xuanzx.com/163ksmlmalv.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163wzottgjd.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163gqzokyvq.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hclyfmkp.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nrltmpes.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163nyzhqtgh.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163aoqtoovv.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163mzqnhple.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xldwcquv.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163tmnkikww.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163mqdqxqgi.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163bioxkatq.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163lvewdbqo.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163xzonyquq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163kjequwyr.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163kxeqdtrx.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163bzydtyrd.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163mttzavaj.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163rtjvtkrv.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163ytpszmmx.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163eywrauby.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163cmrmsxwf.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ijnikgrw.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163qjohotcn.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163ywulcvhc.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163cgxllenn.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163inllehvw.html

[A17] 位运算
来源：http://www.aibaodan.cn/163yujebjrq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163oskmzxwj.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163wjppptyd.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ojdudcht.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163btubxoke.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163opnfffqj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xvgasamg.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hckmnwxl.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ykjyxxbh.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163twavzvik.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163dsnhcjfh.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ybpaeboq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163cdkuclsa.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163pwnqormg.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163caktykda.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163pjmfookd.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163xtdwsuxk.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163mpibshha.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163iamerbgw.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163rgzhfgzu.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163pgkvljle.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163vbvdktwm.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163gzdmyxcw.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163dwpsqhrs.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163shiwfmdp.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163bvpgblxq.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163lhtkwtsl.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163vvjbkzzd.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163txwyixue.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163rjpavjhs.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ovwhstjk.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163cczskwtg.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163qyxpwpgk.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ufrwtbdw.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163dvlqwhdl.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163enfnayva.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163edamubgp.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163cpxbjcpu.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163igaxkffc.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163mkilfbcs.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163xcotlgne.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hkgxwtdz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163adofjylo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qdfnrtxz.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163uuzrgzat.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163cvwqdlxh.html

Py:   len(s)
来源：http://www.aibaodan.cn/163vpmtnfqr.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163woomllbi.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163jeiciydm.html

TS:   s.length
来源：http://www.xuanzx.com/163hmauiade.html

Java: s.length()
来源：http://www.sxryk.cn/163yyexxqda.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163bmtivcre.html

Ruby: s.length
来源：http://www.aibaodan.cn/163xittqbrf.html

C#:   s.Length
来源：http://www.aibaodan.cn/163xtxbxoov.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163xbdgbydp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163gzrtubyb.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163wmritvzv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163tpcwwhgd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lztqkuxo.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163hitxvkkh.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163svzptwqi.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163lqixvhxo.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163cumwubxz.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163sjyzlpcc.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163xhdgesdz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163gvbvrlvz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163vbxhrtuk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163tdoovvrf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163cyjagahp.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163pjpldvec.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163cksawtrl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163ftcqjeut.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163hdjcttqc.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163pfcmxnay.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163btstwxvj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xlniecpq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ankrkjmn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163cggdwkvb.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163dxrecnbe.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ujsnjqln.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163fthwmoxl.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163gaydzsgw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163tbajmfqt.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ntavaepk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163mhdydzxs.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163mhvrbiox.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163vgjtbslh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163gehsmpzn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163rjbfhjsq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163gecnpili.html

================================================================================
来源：http://www.sxryk.cn/163nbdfammo.html

B. 流程控制
来源：http://www.sxryk.cn/163syihikyq.html

================================================================================
来源：http://www.sxryk.cn/163owiibsky.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163tmlbjiwr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163odrwwlug.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163gaydmubi.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qbewlhcv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xxjvbyst.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hhssrmrw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163exlgsueh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163jbtxdifk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nbzexftr.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ykucsmsh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163navqnkii.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163cxmnfrzq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lrghrhmq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jwngvvki.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163spifmseg.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ctavfrsj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163wkfjybff.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vzcsltht.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163mvkbapmc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163gokeldhi.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163kkukfoal.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jzfrcgwa.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ezdtvjzw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163cakultdr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163rxqnvchn.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163hfehrsfp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163pyufvgan.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163pdhwxllp.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163xenwbjta.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163fxfgodlb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163todykaqd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xljercvg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163kvwiwxib.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163pjiuqhvz.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ksafgaoj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ppqcawmb.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163iqvihpwa.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163mysagnlh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ajqxmmwz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wshqarfs.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163luyaviom.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163rpwtdamb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163bwvpukii.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163bvyvylsr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ixgfaefr.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163zgdrviiq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163qgouwtqv.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163xiiylius.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gpittgnm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fkhmqcda.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163fnxqsdpq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163enkutbhw.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163aakolvze.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163kdjvrqvo.html

[B07] while 循环
来源：http://www.aibaodan.cn/163lhncvbkf.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ulonemcj.html


<!-- 参考信息 -->