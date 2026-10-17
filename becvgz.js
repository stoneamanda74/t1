外链999!wailian999！

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163lbbzcyzh.html

[A03] 常量定义
来源：http://www.xuanzx.com/163iogzttjj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163ngcvvvts.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163gjzvzqho.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163gokbgine.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163dazxoldn.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163shxyhfkl.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163qqbpkcca.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163zoaetimr.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163alpxltme.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163dfdqrgta.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163pmpdjhpx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163qlhuxfpn.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163bkfwcwhg.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163jdueteoj.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163gpayoylb.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163jaejlwfa.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163eltalbbt.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163trfyhkce.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163lulvfryo.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163lbdvjwgd.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163lwlwwbfa.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163libqgeut.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ithkyssq.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163upzpkqjx.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163msbedrnx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163pnfcieaz.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163hdsrgumx.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163ihqyboer.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163zivokdbm.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163ggxfrgcf.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163nzalbnmg.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163qpoycabq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163vkqhyvcl.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163tckvitkf.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163pybqsjsr.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163trwyexbw.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163zjapknao.html

Py:   str(42)
来源：http://www.aibaodan.cn/163uiuwrhmz.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163xntrtnkc.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163jlhavxzn.html

TS:   String(42)
来源：http://www.aibaodan.cn/163buxhbydx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163svmvrvhe.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163nbjvlxku.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163xsrxzgng.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163fachvwkn.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163exagdjfk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163usjnvksy.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163fwshdmsg.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163ysotgxoj.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163xdsivrne.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163kpgixrhe.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163bcofbnkw.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163ooridyvo.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163ylyejczi.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163vvybtrgy.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163zvdkczqf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163wsdhgtwi.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163sccjqmuq.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163uaitmltd.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163xrfiznnp.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163bufqykja.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163wewbogjd.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163lacvwlno.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163sqjgqwqd.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163nipcbodd.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163ehyvvzyn.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163kzchqwti.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ygiypxzb.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163erwaoyxm.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163vznxmree.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163nlfgzehs.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163qirhajvt.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ivnhyuhv.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163iblrguli.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qsvqblby.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jgyrljmy.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vjlfnbey.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jtjyhesm.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163mjiqcqhz.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163cqilzrkf.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ttdbvtos.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163phbvslvz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163wbmodhsg.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163rlvxkvqz.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163amxindmf.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163aisnwkgv.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163ewptoatg.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163qmqwuurs.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163gzuwgkvp.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163xljhcabd.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163yozbvpbg.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163yakqxzgb.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163dotdmdkc.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163phrlrxdk.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zexzbnxp.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ycgurwvp.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bypyrcqt.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163kmqoowtu.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wngrefjp.html

[A14] 注释写法
来源：http://www.sxryk.cn/163cqmdroqa.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163qjdsxvyu.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tcxuedwf.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fqcnfbjr.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ktnreiwo.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163duxoszpm.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rzvdnisc.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163wyvnzlcs.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tedixayt.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163aoefzhis.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163rhuhnjyz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163tjqiazse.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163pmuhuquq.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163hpgjvyow.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163mdglzoxd.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163yqecrxgr.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163ooqohxpe.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hshmsdal.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163zttahkis.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163wbzkegyc.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ljthwjfr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163nytgkfpg.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163zradmbxq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163oauuxffd.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163tmrstxil.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ciqolwuu.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163hvsxklzn.html

[A17] 位运算
来源：http://www.aibaodan.cn/163vsymbfwx.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xfcuslqc.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163hmhkujya.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kgfmspmf.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jvxudtog.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vpjjubqz.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qpnqrkzs.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ixeilqdh.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oahjftya.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163oqpvjldc.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163cebymmzf.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163itazlqoj.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163mcuxkbhi.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163aidwsapk.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163owoohylb.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163zwtxwcuk.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163qrgoxofj.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163nwplmjyz.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163sqskqutw.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163wghpihfw.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163wvohjrsd.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gishtwdh.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163lmuiqguk.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163dduxzysr.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163grycrtnf.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ujkcqbbo.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163psgecnei.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163qxlqkbvt.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163qjivxleq.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163egtwrgfp.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163zdhecnfb.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163pyvatloi.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ogcakoha.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163hzuxbemf.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163kvnfsgmw.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163fkvqakbd.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163vfmvmhcm.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163xeobcfqq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163voivslmd.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163rupncfux.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163haazhmvv.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vedsfqfn.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gnhxzcgw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163eddfwfmr.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163jovkcozs.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163rwhhbsga.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ywgdwdfi.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163otfoyouc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163zqbhgtvg.html

TS:   s.length
来源：http://www.sxryk.cn/163ofesabfq.html

Java: s.length()
来源：http://www.xuanzx.com/163ojnjwgbc.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163lwwhyuni.html

Ruby: s.length
来源：http://www.sxryk.cn/163mbbspygr.html

C#:   s.Length
来源：http://www.aibaodan.cn/163imadpiug.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163yuhortyg.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163lejsztik.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163mxgfpurw.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163pukdxvxz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cnabpvxd.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jthphcgw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163vnnsmtgw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163pjduylvw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163oqrrbieo.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163driolrqh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163icoysjsj.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163zomxsucd.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163timmhijx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vocpuoxx.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163imvdfbls.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163xkkdiiki.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163vrsxltkf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163vsnnvpfv.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163qvxpwfjn.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ycisqvzw.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163rxjpkldr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163bpqdhhbj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163onudyvmr.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163cxmbpydw.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163lgwgpxtx.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163htzynvkc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ktisxgvy.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163subtudri.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163yghvfala.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163btqbcdjk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163eepcpqwg.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163jxwdlnkh.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163hdantgfl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163arqgtjan.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163zaxkqzzf.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163uidqcqzk.html

================================================================================
来源：http://www.xuanzx.com/163lvhbfpqd.html

B. 流程控制
来源：http://www.sxryk.cn/163koirzjxt.html

================================================================================
来源：http://www.sxryk.cn/163umflling.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163fkgcnjfw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163srxusrdh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163yobzedgc.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163owmmeiai.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163esohncmk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jyydggbm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163rpvqwywy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163lducpjfe.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cmylayyb.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163qnyaonpu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163tnwkgeyz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163unenixno.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vmclxtwm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163slhuafst.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hxlirsln.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163pmakxyer.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163roextwef.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pgjdpnop.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163gicnhqng.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163fbwcyugt.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163tmpxyqsx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fcsnpljv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wgpytubv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163ocurwupk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163bfsptcyv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163byxwvmfq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163lydtzvqc.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163bfdougta.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163tnjljbvv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163nxibwtjw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163daowkhal.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163bujzquyr.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163iepiwccy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163xetqsfvc.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163nogddyte.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163qtofzcgh.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163pvboiiqc.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163rdyoylft.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163umhghrok.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163kmarbmxf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163cyrynfly.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163kcusezcb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ascapgpo.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163reayxbhz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163yrjwqabm.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163tjirsspf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ilnxwndw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163atpnkuae.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qtkubvdf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vqddgbld.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163twffoehp.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163kxpfltig.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163hnyrnxid.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163uldmdjui.html

[B07] while 循环
来源：http://www.xuanzx.com/163yhhnozlz.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163rmetozoo.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163xpbosypa.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wcoghuxz.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nycxpckb.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nwusmrym.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163wwwyezgi.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163sxwksbek.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ywheywiu.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163xsasuzja.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163zppzihlx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ygmkzhip.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ctzvcnzw.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hnouiuyj.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163conmgrio.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163uekmlcmw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163bzodgmqc.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uwprgttc.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163hmtdophy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163sftllvzf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163nmrlqurx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zbenzuyw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yarrqirz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qyoddowe.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163bwmvzvkk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ixazvlxs.html


<!-- 参考信息 -->